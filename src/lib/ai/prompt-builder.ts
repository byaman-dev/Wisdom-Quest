/**
 * AI prompt construction.
 *
 * Every AI prompt string lives here — no prompt text is scattered across
 * components or server handlers. Handlers pass validated data in and receive a
 * ready-to-send prompt string out.
 */
import { SKILL_KEYS } from "@/lib/constants";
import { MENTOR_VOICES } from "./mentor-voices";
import { CHOICE_COUNT, type MentorReplyInput, type OpenResponseInput, type ScenarioInput } from "./validators";

/** Tone and complexity guidance per difficulty tier. */
const DIFFICULTY_INSTRUCTIONS: Record<string, string> = {
  beginner:
    "DIFFICULTY: Beginner. Keep the dilemma clear and everyday. One option should be visibly wiser than the others. Explain consequences plainly.",
  intermediate:
    "DIFFICULTY: Intermediate. Add competing pressures (time, money, loyalty) so no option is free of cost. Consequences should include a delayed second-order effect.",
  advanced:
    "DIFFICULTY: Advanced. Make it morally ambiguous with no clean answer: every option trades one real value against another. Consequences must ripple months ahead and include an unintended effect.",
};

/** Build the narrative-engine prompt for generating a fresh scenario. */
export function buildScenarioPrompt(data: ScenarioInput): string {
  const persona = [
    data.mentorName
      ? `Mentor persona: ${data.mentorName}. Voice: ${MENTOR_VOICES[data.mentorName]}.`
      : "",
    data.careerPath ? `The player is on the "${data.careerPath}" path.` : "",
    data.personality ? `Player personality: ${data.personality}.` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `You are the narrative engine of "Wisdom Quest", a cinematic life-simulation game.
Generate ONE fresh, immersive, modern real-life scenario that lets the player PRACTICE the principle of "${data.conceptTitle}".
This must feel like an interactive movie / RPG decision — never a quiz or trivia.

Situation seed (reinterpret freshly, make it vivid and specific): ${data.seed}
${persona}
Variation token (make this different from past scenarios): ${data.nonce ?? Date.now()}

Return ONLY a valid JSON object (no markdown, no commentary) with EXACTLY this shape:
{
  "setup": "2-3 sentences, second person ('you'), emotionally charged and concrete",
  "choices": [
    {
      "label": "a realistic choice the player could make",
      "quality": "wise | mixed | poor",
      "mentorReaction": "1-2 sentences in the mentor's voice reacting to THIS choice, personal and human",
      "consequence": "realistic short-term AND future fallout: money, relationships, stress, opportunities",
      "principle": "one crisp sentence naming the timeless wisdom this choice reveals",
      "primarySkill": "one of: ${SKILL_KEYS.join(", ")}",
      "skillDelta": <integer between -6 and 8, wise positive / poor negative>,
      "xp": <integer 40-300, wiser choices earn more>
    }
  ]
}
Provide EXACTLY ${CHOICE_COUNT[data.difficulty]} choices, including at least one "wise", one "mixed", and one "poor". Keep every field tight and punchy.
${DIFFICULTY_INSTRUCTIONS[data.difficulty]}`;
}

/** Build the prompt that evaluates a player's own written response. */
export function buildOpenResponsePrompt(data: OpenResponseInput): string {
  const mentorName = data.mentorName ?? "a wise mentor";
  const voice = data.mentorName ? MENTOR_VOICES[data.mentorName] : "Wise, candid, and human.";

  return `You are ${mentorName}, mentor in the life-simulation game "Wisdom Quest". Voice: ${voice}
The player faced this situation: ${data.scenario}
The principle in play: ${data.conceptTitle}
Instead of picking an option, the player wrote their own response:
"""${data.response}"""

Judge it honestly — reward genuine wisdom, name self-deception, never flatter.

Return ONLY valid JSON (no markdown) with EXACTLY this shape:
{
  "quality": "wise | mixed | poor",
  "mentorReaction": "1-2 sentences in your voice reacting to THEIR words",
  "consequence": "what realistically follows from acting this way, short and long term",
  "principle": "one crisp sentence naming the wisdom at stake",
  "primarySkill": "one of: ${SKILL_KEYS.join(", ")}",
  "skillDelta": <integer between -6 and 8>,
  "xp": <integer 40-300, wiser answers earn more>
}`;
}

/** Build the in-character mentor reply prompt for the mentor chat. */
export function buildMentorReplyPrompt(
  data: MentorReplyInput,
): { prompt: string; mentorName: string } {
  const mentorName = data.mentorName ?? "your mentor";
  const voice = data.mentorName ? MENTOR_VOICES[data.mentorName] : "Wise, candid, and human.";

  const transcript = data.history
    .map((m) => `${m.role === "mentor" ? mentorName : "Player"}: ${m.content}`)
    .join("\n");

  const prompt = `You are ${mentorName}, an AI mentor in the life-simulation game "Wisdom Quest".
Voice: ${voice}
Stay fully in character. Be human, warm, and direct — never robotic, never a lecture.

CONTEXT
The player faced this situation: ${data.scenario}
They chose: ${data.choice}
${data.consequence ? `What happened: ${data.consequence}` : ""}
${data.principle ? `The principle at play: ${data.principle}` : ""}

The player is now arguing their case or asking you a question. Engage with their
actual point — agree where they are right, push back where they are wrong, and
deepen the wisdom. Keep it conversational: 1-3 short sentences, like a text message.
Never break character or mention being an AI.

CONVERSATION SO FAR:
${transcript}

Reply as ${mentorName} with ONLY your next message (no name prefix, no quotes).`;

  return { prompt, mentorName };
}
