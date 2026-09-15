/**
 * Centralized domain types for Wisdom Quest.
 *
 * Single source of truth for every shared interface. Data modules
 * (`@/lib/books`, `@/lib/concepts-data`), the store (`@/store/game-store`),
 * and the AI layer (`@/lib/ai`) import their types from here.
 */
import type { LucideIcon } from "lucide-react";
import { SKILL_KEYS } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

/** One of the ten trackable character skills. Derived from `SKILL_KEYS`. */
export type SkillKey = (typeof SKILL_KEYS)[number];

/** Numeric level (0–100) for every skill. */
export type SkillMap = Record<SkillKey, number>;

/* ------------------------------------------------------------------ */
/* Books, chapters, scenarios & choices                               */
/* ------------------------------------------------------------------ */

export interface Choice {
  id: string;
  label: string;
  mentor: string;
  consequence: string;
  xp: number;
  impact: Partial<Record<SkillKey, number>>;
  trait: string;
}

export interface Scenario {
  id: string;
  title: string;
  setup: string;
  choices: Choice[];
}

export interface ReflectionQuestion {
  id: string;
  prompt: string;
}

export interface BookSection {
  id: string;
  title: string;
  principle: string;
  scenarios: Scenario[];
  reflections: ReflectionQuestion[];
}

export interface BookChapter {
  id: string;
  title: string;
  summary: string;
  sections: BookSection[];
}

export interface Book {
  id: string;
  title: string;
  theme: string;
  difficulty: string;
  difficultyTone: string;
  duration: string;
  image: string;
  intro: string;
  primarySkill: SkillKey;
  /** XP required to unlock the book. */
  unlockXp: number;
  /** Legacy flat list, derived from chapters when present. */
  scenarios: Scenario[];
  chapters?: BookChapter[];
}

/* ------------------------------------------------------------------ */
/* Concepts, mentors & career paths                                   */
/* ------------------------------------------------------------------ */

export interface Concept {
  id: string;
  title: string;
  tagline: string;
  source: string;
  primarySkill: SkillKey;
  icon: LucideIcon;
  accent: string;
  /** Situation seed used to prompt the AI. */
  seed: string;
}

export interface Mentor {
  id: string;
  name: string;
  archetype: string;
  voice: string;
  blurb: string;
  initials: string;
  gradient: string;
}

export interface CareerPath {
  id: string;
  title: string;
  focus: string;
  skills: SkillKey[];
}

/* ------------------------------------------------------------------ */
/* Player profile & progress                                          */
/* ------------------------------------------------------------------ */

export type LearningMode = "journey" | "concepts";

/** Scenario difficulty tier, unlocked by total XP. */
export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface UserProfile {
  name: string;
  goals: string[];
  interests: string[];
  ageRange: string;
  personality: string;
  learningStyle: string;
  careerPath: string;
  mentor: string;
}

export interface AlternateFuture {
  id: string;
  title: string;
  chosenLabel: string;
  chosenOutcome: string;
  altLabel: string;
  altOutcome: string;
  principle: string;
  at: number;
}

export interface StreakMilestone {
  days: number;
  bonus: number;
  label: string;
}

export interface DailyRewardResult {
  base: number;
  bonus: number;
  total: number;
  streak: number;
  milestone: StreakMilestone | null;
}

/* ------------------------------------------------------------------ */
/* AI-generated scenarios                                             */
/* ------------------------------------------------------------------ */

export interface GeneratedChoice {
  label: string;
  quality: "wise" | "mixed" | "poor";
  mentorReaction: string;
  consequence: string;
  principle: string;
  primarySkill: SkillKey;
  skillDelta: number;
  xp: number;
}

export interface GeneratedScenario {
  setup: string;
  choices: GeneratedChoice[];
}
