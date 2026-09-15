/**
 * Application-wide constants and tuning values.
 *
 * Hardcoded gameplay values live here so they can be tuned in one place
 * rather than being scattered across components and services.
 */

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

/** The ten trackable character skills. `SkillKey` is derived from this. */
export const SKILL_KEYS = [
  "finance",
  "stoicism",
  "strategy",
  "mindset",
  "discipline",
  "negotiation",
  "emotionalControl",
  "leadership",
  "confidence",
  "communication",
] as const;

/** Skill values are clamped to this range. */
export const MIN_SKILL = 0;
export const MAX_SKILL = 100;

/* ------------------------------------------------------------------ */
/* Leveling & XP                                                       */
/* ------------------------------------------------------------------ */

/** XP required to advance a single level. */
export const XP_PER_LEVEL = 250;

/* ------------------------------------------------------------------ */
/* Streaks & daily rewards                                            */
/* ------------------------------------------------------------------ */

/** One day in milliseconds. */
export const DAY_MS = 86_400_000;

/** Base daily reward tuning. */
export const DAILY_REWARD_BASE = 50;
export const DAILY_REWARD_PER_STREAK = 10;
export const DAILY_REWARD_CAP = 250;

/** Number of alternate futures retained in history. */
export const MAX_ALTERNATE_FUTURES = 30;

/* ------------------------------------------------------------------ */
/* AI simulation UI                                                    */
/* ------------------------------------------------------------------ */

/** Accent color token for each AI-generated choice quality. */
export const QUALITY_TONE: Record<"wise" | "mixed" | "poor", string> = {
  wise: "text-emerald-400",
  mixed: "text-gold",
  poor: "text-rose-400",
};
