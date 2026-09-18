/**
 * AI input validation and response parsing.
 *
 * All zod schemas and coercion helpers for the AI layer live here, keeping the
 * server function handlers thin and the validation logic reusable and testable.
 */
import { z } from "zod";
import { SKILL_KEYS } from "@/lib/constants";
import type { GeneratedChoice, GeneratedScenario, SkillKey } from "@/types";
import { MENTOR_NAMES } from "./mentor-voices";
import { DEFAULT_MODEL, MODEL_IDS } from "./models";

/** Player-selected AI model, falling back to the default when unknown. */
const SelectedModelSchema = z.enum(MODEL_IDS).catch(DEFAULT_MODEL).default(DEFAULT_MODEL);

/** Career paths a player can be on (validation allowlist). */
export const CAREER_PATHS = [
  "Entrepreneur",
  "Investor",
  "Creator",
  "Leader",
  "Negotiator",
  "Strategist",
] as const;

/** Player personality types (validation allowlist). */
export const PERSONALITIES = ["analyst", "driver", "diplomat", "explorer"] as const;

/** Difficulty tiers, unlocked by total XP. */
export const DIFFICULTIES = ["beginner", "intermediate", "advanced"] as const;

const DifficultySchema = z.enum(DIFFICULTIES).catch("beginner").default("beginner");

/** Number of choices the model should offer per tier. */
export const CHOICE_COUNT: Record<(typeof DIFFICULTIES)[number], number> = {
  beginner: 3,
  intermediate: 4,
  advanced: 4,
};

/**
 * Input for scenario generation.
 *
 * Stale/empty/forged persona values fall back to `undefined` instead of being
 * injected into the prompt verbatim.
 */
export const ScenarioInputSchema = z.object({
  seed: z.string().min(1).max(600),
  conceptTitle: z.string().min(1).max(120),
  primarySkill: z.enum(SKILL_KEYS),
  mentorName: z.enum(MENTOR_NAMES).optional().catch(undefined),
  careerPath: z.enum(CAREER_PATHS).optional().catch(undefined),
  personality: z.enum(PERSONALITIES).optional().catch(undefined),
  nonce: z.string().max(40).optional(),
  difficulty: DifficultySchema,
  selectedModel: SelectedModelSchema,
});

export type ScenarioInput = z.infer<typeof ScenarioInputSchema>;

const MessageSchema = z.object({
  role: z.enum(["mentor", "user"]),
  content: z.string().min(1).max(1200),
});

/** Input for a mentor chat reply. */
export const MentorReplyInputSchema = z.object({
  mentorName: z.enum(MENTOR_NAMES).optional().catch(undefined),
  scenario: z.string().min(1).max(800),
  choice: z.string().min(1).max(400),
  consequence: z.string().max(800).optional(),
  principle: z.string().max(400).optional(),
  // Full chat so far (verdict + back-and-forth), capped to keep prompts tight.
  history: z.array(MessageSchema).min(1).max(20),
  selectedModel: SelectedModelSchema,
});

export type MentorReplyInput = z.infer<typeof MentorReplyInputSchema>;

/** Input for evaluating a player's own written response (advanced tier). */
export const OpenResponseInputSchema = z.object({
  scenario: z.string().min(1).max(1200),
  response: z.string().min(1).max(1200),
  conceptTitle: z.string().min(1).max(120),
  primarySkill: z.enum(SKILL_KEYS),
  mentorName: z.enum(MENTOR_NAMES).optional().catch(undefined),
  selectedModel: SelectedModelSchema,
});

export type OpenResponseInput = z.infer<typeof OpenResponseInputSchema>;

/** Coerce an untrusted AI JSON payload into a safe `GeneratedScenario`. */
export function coerceScenario(
  raw: unknown,
  fallbackSkill: string,
  maxChoices = 3,
): GeneratedScenario {
  const obj = raw as Record<string, unknown>;
  const setup = String(obj.setup ?? "").trim();
  const choicesRaw = Array.isArray(obj.choices) ? obj.choices : [];
  if (!setup || choicesRaw.length < 2) throw new Error("Incomplete scenario");

  const skill = (k: unknown): SkillKey =>
    SKILL_KEYS.includes(k as SkillKey)
      ? (k as SkillKey)
      : SKILL_KEYS.includes(fallbackSkill as SkillKey)
        ? (fallbackSkill as SkillKey)
        : "discipline";

  const quality = (q: unknown): GeneratedChoice["quality"] =>
    q === "wise" || q === "mixed" || q === "poor" ? q : "mixed";

  const num = (v: unknown, def: number) => {
    const n = typeof v === "number" ? v : Number(v);
    return Number.isFinite(n) ? n : def;
  };

  const limit = Math.max(2, Math.min(4, maxChoices));
  const choices: GeneratedChoice[] = choicesRaw.slice(0, limit).map((c) => {
    const cc = c as Record<string, unknown>;
    return {
      label: String(cc.label ?? "Decide").trim(),
      quality: quality(cc.quality),
      mentorReaction: String(cc.mentorReaction ?? "").trim(),
      consequence: String(cc.consequence ?? "").trim(),
      principle: String(cc.principle ?? "").trim(),
      primarySkill: skill(cc.primarySkill),
      skillDelta: Math.max(-6, Math.min(8, Math.round(num(cc.skillDelta, 2)))),
      xp: Math.max(40, Math.min(300, Math.round(num(cc.xp, 120)))),
    };
  });

  return { setup, choices };
}

/** Extract a JSON object from a (possibly markdown-fenced) AI text response. */
export function extractJson(text: string): unknown {
  const cleaned = text
    .trim()
    .replace(/^```json/i, "")
    .replace(/^```/, "")
    .replace(/```$/, "")
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start !== -1 && end !== -1) return JSON.parse(cleaned.slice(start, end + 1));
    throw new Error("Could not parse AI response");
  }
}

/** Coerce an untrusted evaluation payload into a safe `GeneratedChoice`. */
export function coerceEvaluation(raw: unknown, fallbackSkill: string, label: string): GeneratedChoice {
  const obj = raw as Record<string, unknown>;
  const num = (v: unknown, def: number) => {
    const n = typeof v === "number" ? v : Number(v);
    return Number.isFinite(n) ? n : def;
  };
  const q = obj.quality;
  return {
    label,
    quality: q === "wise" || q === "mixed" || q === "poor" ? q : "mixed",
    mentorReaction: String(obj.mentorReaction ?? "").trim() || "Let's look at what your answer reveals.",
    consequence: String(obj.consequence ?? "").trim(),
    principle: String(obj.principle ?? "").trim(),
    primarySkill: SKILL_KEYS.includes(obj.primarySkill as SkillKey)
      ? (obj.primarySkill as SkillKey)
      : SKILL_KEYS.includes(fallbackSkill as SkillKey)
        ? (fallbackSkill as SkillKey)
        : "discipline",
    skillDelta: Math.max(-6, Math.min(8, Math.round(num(obj.skillDelta, 2)))),
    xp: Math.max(40, Math.min(300, Math.round(num(obj.xp, 120)))),
  };
}
