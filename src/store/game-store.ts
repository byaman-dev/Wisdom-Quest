import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { PERSISTENCE_KEY, getDefaultStorageAdapter } from "@/lib/persistence";
import type {
  AlternateFuture,
  Choice,
  DailyRewardResult,
  LearningMode,
  SkillKey,
  SkillMap,
  StreakMilestone,
  UserProfile,
} from "@/types";
import { DEFAULT_MODEL } from "@/lib/ai/models";
import { BOOKS } from "@/lib/books";
import { addWeeklyXp } from "@/lib/leaderboard";
import type { Difficulty } from "@/types";
import {
  DAILY_REWARD_BASE,
  DAILY_REWARD_CAP,
  DAILY_REWARD_PER_STREAK,
  DAY_MS,
  MAX_ALTERNATE_FUTURES,
  MAX_SKILL,
  MIN_SKILL,
  XP_PER_LEVEL,
} from "@/lib/constants";

// Re-export shared domain types so existing `@/store/game-store` imports keep working.
export type {
  AlternateFuture,
  DailyRewardResult,
  LearningMode,
  StreakMilestone,
  UserProfile,
} from "@/types";


const initialSkills: SkillMap = {
  finance: 12,
  stoicism: 8,
  strategy: 6,
  mindset: 14,
  discipline: 10,
  negotiation: 5,
  emotionalControl: 9,
  leadership: 7,
  confidence: 11,
  communication: 8,
};

interface CompletedChoice {
  scenarioId: string;
  choiceId: string;
  xp: number;
  trait: string;
  at: number;
  title?: string;
  source?: string;
  ai?: boolean;
}

interface GameState {
  xp: number;
  streak: number;
  lastActive: number;
  lastRewardDay: string;
  claimedMilestones: number[];
  skills: SkillMap;
  completed: CompletedChoice[];
  alternateFutures: AlternateFuture[];
  achievements: string[];
  conceptsDone: string[];
  completedBooks: string[];
  /** Book id whose certificate should currently be displayed. */
  activeCertificate: string | null;
  startedAt: number;
  onboarded: boolean;
  profile: UserProfile;
  mode: LearningMode;
  selectedModel: string;
  setMode: (m: LearningMode) => void;
  setModel: (modelId: string) => void;
  openCertificate: (bookId: string) => void;
  closeCertificate: () => void;
  completeOnboarding: (p: UserProfile) => void;
  applyChoice: (scenarioId: string, choice: Choice) => void;
  applyConceptResult: (args: {
    conceptId: string;
    xp: number;
    impact: Partial<Record<SkillKey, number>>;
    future: AlternateFuture;
  }) => void;
  recordAiJourney: (args: {
    bookId: string;
    bookTitle: string;
    chapterTitle: string;
    xp: number;
    skill: SkillKey;
    skillDelta: number;
    trait: string;
    future: AlternateFuture;
  }) => void;
  claimDailyReward: () => DailyRewardResult | null;
  unlockAchievement: (id: string) => void;
  pingStreak: () => void;
  isCompleted: (scenarioId: string) => boolean;
  reset: () => void;
}

const defaultProfile: UserProfile = {
  name: "",
  goals: [],
  interests: [],
  ageRange: "",
  personality: "",
  learningStyle: "",
  careerPath: "",
  mentor: "",
};

export const xpToLevel = (xp: number) => Math.floor(xp / XP_PER_LEVEL) + 1;
export const xpProgressInLevel = (xp: number) => (xp % XP_PER_LEVEL) / XP_PER_LEVEL;

/** Difficulty tier unlocked by total XP. */
export const getDifficulty = (xp: number): Difficulty =>
  xp < 500 ? "beginner" : xp < 1500 ? "intermediate" : "advanced";

/** Books whose every scenario now appears in `completed`. */
function newlyCompletedBooks(completed: CompletedChoice[], already: string[]): string[] {
  const done = new Set(completed.map((c) => c.scenarioId));
  return BOOKS.filter(
    (b) =>
      !already.includes(b.id) &&
      b.scenarios.length > 0 &&
      b.scenarios.every((s) => done.has(s.id)),
  ).map((b) => b.id);
}

export const levelTitle = (level: number) => {
  if (level < 3) return "Wealth Apprentice";
  if (level < 6) return "Disciplined Seeker";
  if (level < 10) return "Stoic Adept";
  if (level < 15) return "Strategist";
  return "Sage";
};

export const STREAK_MILESTONES: StreakMilestone[] = [
  { days: 3, bonus: 100, label: "Kindling" },
  { days: 7, bonus: 300, label: "Steady Flame" },
  { days: 14, bonus: 600, label: "Burning Bright" },
  { days: 30, bonus: 1500, label: "Inferno" },
  { days: 60, bonus: 3000, label: "Unbreakable" },
  { days: 100, bonus: 6000, label: "Legend" },
];

export const dailyBaseReward = (streak: number) =>
  Math.min(DAILY_REWARD_BASE + (streak - 1) * DAILY_REWARD_PER_STREAK, DAILY_REWARD_CAP);

export const todayKey = () => new Date().toISOString().slice(0, 10);

export const nextMilestone = (streak: number) =>
  STREAK_MILESTONES.find((m) => m.days > streak) ?? null;

export const useGame = create<GameState>()(
  persist(
    (set, get) => ({
      xp: 0,
      streak: 1,
      lastActive: Date.now(),
      lastRewardDay: "",
      claimedMilestones: [],
      skills: { ...initialSkills },
      completed: [],
      alternateFutures: [],
      achievements: [],
      conceptsDone: [],
      completedBooks: [],
      activeCertificate: null,
      startedAt: Date.now(),
      onboarded: false,
      profile: { ...defaultProfile },
      mode: "journey",
      selectedModel: DEFAULT_MODEL,
      setMode: (m) => set({ mode: m }),
      setModel: (modelId) => set({ selectedModel: modelId }),
      openCertificate: (bookId) => set({ activeCertificate: bookId }),
      closeCertificate: () => set({ activeCertificate: null }),
      completeOnboarding: (p) =>
        set((s) => ({
          onboarded: true,
          profile: p,
          achievements: s.achievements.includes("first-step")
            ? s.achievements
            : [...s.achievements, "first-step"],
        })),
      applyChoice: (scenarioId, choice) => {
        const state = get();
        if (state.completed.some((c) => c.scenarioId === scenarioId)) return;
        const newSkills = { ...state.skills };
        for (const [k, v] of Object.entries(choice.impact)) {
          const key = k as SkillKey;
          newSkills[key] = Math.max(MIN_SKILL, Math.min(MAX_SKILL, (newSkills[key] ?? 0) + (v as number)));
        }
        const achievements = [...state.achievements];
        if (!achievements.includes("first-decision")) achievements.push("first-decision");
        if (state.completed.length + 1 >= 10 && !achievements.includes("ten-decisions"))
          achievements.push("ten-decisions");
        const completed = [
          ...state.completed,
          { scenarioId, choiceId: choice.id, xp: choice.xp, trait: choice.trait, at: Date.now() },
        ];
        const finishedBooks = newlyCompletedBooks(completed, state.completedBooks);
        set({
          xp: state.xp + choice.xp,
          skills: newSkills,
          achievements,
          completed,
          completedBooks: finishedBooks.length
            ? [...state.completedBooks, ...finishedBooks]
            : state.completedBooks,
          activeCertificate: finishedBooks[0] ?? state.activeCertificate,
        });
        void addWeeklyXp(choice.xp, state.profile.name);
      },
      applyConceptResult: ({ conceptId, xp, impact, future }) => {
        const state = get();
        const newSkills = { ...state.skills };
        for (const [k, v] of Object.entries(impact)) {
          const key = k as SkillKey;
          newSkills[key] = Math.max(MIN_SKILL, Math.min(MAX_SKILL, (newSkills[key] ?? 0) + (v as number)));
        }
        const achievements = [...state.achievements];
        if (!achievements.includes("first-concept")) achievements.push("first-concept");
        set({
          xp: state.xp + xp,
          skills: newSkills,
          achievements,
          conceptsDone: state.conceptsDone.includes(conceptId)
            ? state.conceptsDone
            : [...state.conceptsDone, conceptId],
          alternateFutures: [future, ...state.alternateFutures].slice(0, MAX_ALTERNATE_FUTURES),
        });
      },
      recordAiJourney: ({ bookId, bookTitle, chapterTitle, xp, skill, skillDelta, trait, future }) => {
        const state = get();
        const newSkills = { ...state.skills };
        newSkills[skill] = Math.max(MIN_SKILL, Math.min(MAX_SKILL, (newSkills[skill] ?? 0) + skillDelta));
        const achievements = [...state.achievements];
        if (!achievements.includes("first-decision")) achievements.push("first-decision");
        if (!achievements.includes("ai-journey")) achievements.push("ai-journey");
        set({
          xp: state.xp + xp,
          skills: newSkills,
          achievements,
          completed: [
            ...state.completed,
            {
              scenarioId: `ai-${bookId}-${Date.now()}`,
              choiceId: "ai",
              xp,
              trait,
              at: Date.now(),
              title: chapterTitle,
              source: bookTitle,
              ai: true,
            },
          ],
          alternateFutures: [future, ...state.alternateFutures].slice(0, MAX_ALTERNATE_FUTURES),
        });
        void addWeeklyXp(xp, state.profile.name);
      },
      claimDailyReward: () => {
        const today = todayKey();
        if (get().lastRewardDay === today) return null;
        get().pingStreak();
        const s = get();
        const base = dailyBaseReward(s.streak);
        const milestone =
          STREAK_MILESTONES.find((m) => m.days === s.streak && !s.claimedMilestones.includes(m.days)) ?? null;
        const bonus = milestone?.bonus ?? 0;
        const total = base + bonus;
        set({
          xp: s.xp + total,
          lastRewardDay: today,
          claimedMilestones: milestone ? [...s.claimedMilestones, milestone.days] : s.claimedMilestones,
        });
        return { base, bonus, total, streak: s.streak, milestone };
      },
      unlockAchievement: (id) =>
        set((s) =>
          s.achievements.includes(id) ? s : { achievements: [...s.achievements, id] },
        ),
      pingStreak: () => {
        const s = get();
        const now = Date.now();
        const sinceLast = now - s.lastActive;
        if (sinceLast < DAY_MS) {
          set({ lastActive: now });
          return;
        }
        if (sinceLast < 2 * DAY_MS) {
          set({ streak: s.streak + 1, lastActive: now });
        } else {
          set({ streak: 1, lastActive: now });
        }
      },
      isCompleted: (scenarioId) => get().completed.some((c) => c.scenarioId === scenarioId),
      reset: () =>
        set({
          xp: 0,
          streak: 1,
          lastActive: Date.now(),
          lastRewardDay: "",
          claimedMilestones: [],
          skills: { ...initialSkills },
          completed: [],
          alternateFutures: [],
          achievements: [],
          conceptsDone: [],
          completedBooks: [],
          activeCertificate: null,
          startedAt: Date.now(),
          onboarded: false,
          profile: { ...defaultProfile },
          mode: "journey",
        }),
    }),
    {
      name: PERSISTENCE_KEY,
      // Persistence goes through the storage abstraction, not localStorage
      // directly, so the backing store can be swapped without touching state logic.
      storage: createJSONStorage(getDefaultStorageAdapter),
    },
  ),
);
