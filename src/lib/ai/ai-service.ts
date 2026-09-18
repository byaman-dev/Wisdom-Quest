/**
 * AI service layer — provider-agnostic contract.
 *
 * UI components depend on this `AiService` interface, not on the concrete
 * server functions. To swap providers or move to a
 * self-hosted model later, implement `AiService` against the new backend and
 * change the implementation returned by `useAiService()` — component code stays
 * the same.
 */
import type { Difficulty, GeneratedChoice, GeneratedScenario, SkillKey } from "@/types";

/** Parameters for turning a situation seed into an interactive simulation. */
export interface GenerateScenarioParams {
  seed: string;
  conceptTitle: string;
  primarySkill: SkillKey;
  mentorName?: string;
  mentorVoice?: string;
  careerPath?: string;
  personality?: string;
  /** Cache-buster / variation token so repeated calls differ. */
  nonce?: string;
  /** Difficulty tier the scenario should be written for. */
  difficulty?: Difficulty;
  /** Overrides the player-selected model; normally left unset. */
  selectedModel?: string;
}

/** Parameters for grading a player's own written answer. */
export interface EvaluateResponseParams {
  scenario: string;
  response: string;
  conceptTitle: string;
  primarySkill: SkillKey;
  mentorName?: string;
  selectedModel?: string;
}

/** A single turn in a mentor conversation. */
export interface MentorMessage {
  role: "mentor" | "user";
  content: string;
}

/** Parameters for a follow-up mentor chat reply. */
export interface MentorReplyParams {
  mentorName?: string;
  scenario: string;
  choice: string;
  consequence?: string;
  principle?: string;
  history: MentorMessage[];
  /** Overrides the player-selected model; normally left unset. */
  selectedModel?: string;
}

/** The AI capabilities the app relies on, decoupled from any provider. */
export interface AiService {
  generateScenario(params: GenerateScenarioParams): Promise<GeneratedScenario>;
  replyToMentor(params: MentorReplyParams): Promise<{ reply: string }>;
  evaluateResponse(params: EvaluateResponseParams): Promise<GeneratedChoice>;
}
