/**
 * Server-only moderation for AI mentor text before it reaches the player.
 *
 * Two passes: a cheap keyword blocklist first, then a fast model
 * classification. Failures are silent to the user — they simply receive the
 * safe fallback line — and are logged with console.warn for pattern spotting.
 */
import { generateText } from "ai";
import { MODERATION_MODEL } from "./models";
import { getChatModel } from "./provider.server";

export const SAFE_FALLBACK =
  "I'd like to steer our conversation back to wisdom and growth. What challenge would you like to reflect on?";

const BLOCKLIST: RegExp[] = [
  /\bkill (your|him|her|them)self\b/i,
  /\bsuicide\b/i,
  /\bself[- ]harm\b/i,
  /\bcut yourself\b/i,
  /\brape\b/i,
  /\bchild porn\w*/i,
  /\bhow to (make|build) a (bomb|weapon)\b/i,
  /\b(fuck|shit|cunt|bitch|asshole|motherfucker)\b/i,
];

function failsBlocklist(text: string): boolean {
  return BLOCKLIST.some((pattern) => pattern.test(text));
}

async function isFlaggedByModel(text: string): Promise<boolean> {
  try {
    // Moderation always runs on the fastest model, whatever the player picked.
    const { text: verdict } = await generateText({
      model: getChatModel(MODERATION_MODEL),
      prompt: [
        "Does this text contain: harmful advice, self-harm content, graphic violence, sexual content, or encourage illegal activity? Answer only YES or NO.",
        "",
        "TEXT:",
        text,
      ].join("\n"),
    });
    return /^\s*yes\b/i.test(verdict);
  } catch (error) {
    // Moderation must never break gameplay: fail open, but log it.
    console.warn("[moderation] classification failed", error);
    return false;
  }
}

/** Returns the original text, or the safe fallback when it is flagged. */
export async function moderateMentorText(text: string): Promise<string> {
  if (!text.trim()) return text;

  if (failsBlocklist(text)) {
    console.warn("[moderation] blocklist hit on mentor output");
    return SAFE_FALLBACK;
  }

  if (await isFlaggedByModel(text)) {
    console.warn("[moderation] model flagged mentor output");
    return SAFE_FALLBACK;
  }

  return text;
}
