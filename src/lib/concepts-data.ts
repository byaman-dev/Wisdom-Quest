import {
  Coins,
  TrendingUp,
  Brain,
  Crosshair,
  Repeat,
  Handshake,
  Crown,
  Target,
  Hourglass,
} from "lucide-react";
import type { CareerPath, Concept, Mentor } from "@/types";

// Re-export the shared domain types so existing `@/lib/concepts-data` imports keep working.
export type { CareerPath, Concept, Mentor } from "@/types";

export const CONCEPTS: Concept[] = [
  {
    id: "pay-yourself-first",
    title: "Pay Yourself First",
    tagline: "Wealth begins the moment you keep a part of what you earn.",
    source: "The Richest Man in Babylon",
    primarySkill: "finance",
    icon: Coins,
    accent: "text-gold",
    seed: "You just received your salary. A friend asks for money, you want a new phone, and you planned to invest this month.",
  },
  {
    id: "compound-growth",
    title: "Compound Growth",
    tagline: "Small consistent gains outpace rare large ones.",
    source: "The Psychology of Money",
    primarySkill: "finance",
    icon: TrendingUp,
    accent: "text-emerald-400",
    seed: "You can take a guaranteed small return reinvested for years, or chase one risky 10x bet.",
  },
  {
    id: "emotional-discipline",
    title: "Emotional Discipline",
    tagline: "The space between stimulus and response is your power.",
    source: "Meditations",
    primarySkill: "emotionalControl",
    icon: Brain,
    accent: "text-mentor",
    seed: "Someone publicly disrespects your work in a meeting and everyone is watching your reaction.",
  },
  {
    id: "strategic-thinking",
    title: "Strategic Thinking",
    tagline: "Win before you fight by choosing your battles.",
    source: "The Art of War",
    primarySkill: "strategy",
    icon: Crosshair,
    accent: "text-rose-400",
    seed: "A rival launches an aggressive product targeting your customers and your team demands instant retaliation.",
  },
  {
    id: "habit-building",
    title: "Habit Building",
    tagline: "You do not rise to your goals; you fall to your systems.",
    source: "Atomic Habits",
    primarySkill: "discipline",
    icon: Repeat,
    accent: "text-emerald-400",
    seed: "You committed to a daily habit, but tonight you are exhausted and tempted to skip 'just once'.",
  },
  {
    id: "negotiation",
    title: "Negotiation",
    tagline: "The best deals protect the relationship and the outcome.",
    source: "The Richest Man in Babylon",
    primarySkill: "negotiation",
    icon: Handshake,
    accent: "text-gold",
    seed: "You are offered a job below your worth, but you really want the role and the employer senses your eagerness.",
  },
  {
    id: "leadership",
    title: "Leadership",
    tagline: "People follow conviction, not titles.",
    source: "Meditations",
    primarySkill: "leadership",
    icon: Crown,
    accent: "text-mentor",
    seed: "Your team made a costly mistake and morale is low. They wait to see how you respond.",
  },
  {
    id: "focus",
    title: "Deep Focus",
    tagline: "Attention is the rarest and purest form of generosity.",
    source: "Deep Work",
    primarySkill: "mindset",
    icon: Target,
    accent: "text-emerald-400",
    seed: "You have three hours for the work that matters most, but notifications and easy busywork keep pulling at you.",
  },
  {
    id: "delayed-gratification",
    title: "Delayed Gratification",
    tagline: "Patience is the interest paid on discipline.",
    source: "Think and Grow Rich",
    primarySkill: "discipline",
    icon: Hourglass,
    accent: "text-gold",
    seed: "A reward is available right now, but waiting six months would multiply it many times over.",
  },
];

export function getConcept(id: string): Concept | undefined {
  return CONCEPTS.find((c) => c.id === id);
}

export const MENTORS: Mentor[] = [
  {
    id: "arkad",
    name: "Arkad",
    archetype: "Babylonian Merchant",
    voice: "Warm, practical, speaks in parables about gold and patience.",
    blurb: "The richest man in Babylon. Teaches that a part of all you earn is yours to keep.",
    initials: "AK",
    gradient: "from-gold to-amber-700",
  },
  {
    id: "aurelius",
    name: "Marcus",
    archetype: "Stoic Philosopher",
    voice: "Calm, reflective, focuses on what is within your control.",
    blurb: "Emperor and philosopher. Teaches mastery over the one thing you own — your mind.",
    initials: "MA",
    gradient: "from-mentor to-indigo-700",
  },
  {
    id: "suntzu",
    name: "Sun Tzu",
    archetype: "Strategic General",
    voice: "Sharp, economical, sees the board several moves ahead.",
    blurb: "The master strategist. Teaches you to win before the battle is fought.",
    initials: "ST",
    gradient: "from-rose-500 to-red-800",
  },
  {
    id: "founder",
    name: "Vera",
    archetype: "Modern Entrepreneur",
    voice: "Direct, energetic, obsessed with leverage and momentum.",
    blurb: "A founder who built and sold three companies. Teaches focus, risk, and conviction.",
    initials: "VR",
    gradient: "from-emerald-400 to-teal-700",
  },
];

export function getMentor(id: string): Mentor | undefined {
  return MENTORS.find((m) => m.id === id);
}

export const CAREER_PATHS: CareerPath[] = [
  { id: "entrepreneur", title: "Entrepreneur", focus: "Build ventures from nothing.", skills: ["finance", "leadership", "confidence"] },
  { id: "investor", title: "Investor", focus: "Grow capital with patience.", skills: ["finance", "discipline", "strategy"] },
  { id: "creator", title: "Creator", focus: "Ship work that resonates.", skills: ["mindset", "communication", "discipline"] },
  { id: "leader", title: "Leader", focus: "Move people toward a vision.", skills: ["leadership", "communication", "emotionalControl"] },
  { id: "negotiator", title: "Negotiator", focus: "Win deals that last.", skills: ["negotiation", "communication", "confidence"] },
  { id: "strategist", title: "Strategist", focus: "See the whole board.", skills: ["strategy", "stoicism", "mindset"] },
];

export function getCareer(id: string): CareerPath | undefined {
  return CAREER_PATHS.find((c) => c.id === id);
}

// Onboarding options
export const GOAL_OPTIONS = [
  "Build wealth",
  "Master my emotions",
  "Lead with confidence",
  "Make better decisions",
  "Build unbreakable habits",
  "Think strategically",
  "Communicate powerfully",
  "Find lasting focus",
];

export const INTEREST_OPTIONS = [
  "Money & investing",
  "Philosophy & stoicism",
  "Business & startups",
  "Psychology",
  "Strategy & war",
  "Self-discipline",
  "Leadership",
  "Relationships",
];

export const AGE_RANGES = ["Under 18", "18–24", "25–34", "35–44", "45+"];

export const PERSONALITY_TYPES = [
  { id: "analyst", label: "The Analyst", desc: "Logical, careful, loves to plan." },
  { id: "driver", label: "The Driver", desc: "Bold, fast, action-oriented." },
  { id: "diplomat", label: "The Diplomat", desc: "Empathetic, people-first." },
  { id: "explorer", label: "The Explorer", desc: "Curious, spontaneous, adaptive." },
];

export const LEARNING_STYLES = [
  { id: "story", label: "Immersive stories", desc: "I learn by living it." },
  { id: "fast", label: "Fast & practical", desc: "Give me the core, quickly." },
  { id: "challenge", label: "Challenge me", desc: "Push me with hard choices." },
];
