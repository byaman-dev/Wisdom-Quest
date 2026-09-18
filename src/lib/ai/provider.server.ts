/**
 * Server-only model resolution.
 *
 * Self-hosted: set `ANTHROPIC_API_KEY` and every call goes straight to the
 * Anthropic API with the model the player selected in Settings.
 * Hosted here: no Anthropic key is present, so the same selection is served by
 * the built-in hosted model of matching speed. Callers never branch on this.
 */
import { createAnthropic } from "@ai-sdk/anthropic";
import type { LanguageModel } from "ai";
import { createLovableAiGatewayProvider } from "./ai-gateway.server";
import { DEFAULT_MODEL, getModelById } from "./models";

/** Hosted stand-ins, matched to the speed tier of the selected model. */
const HOSTED_EQUIVALENT: Record<string, string> = {
  fast: "google/gemini-3-flash-preview",
  balanced: "google/gemini-3-flash-preview",
  powerful: "google/gemini-3-flash-preview",
};

export function getChatModel(modelId: string = DEFAULT_MODEL): LanguageModel {
  const option = getModelById(modelId);

  const anthropicKey = process.env["ANTHROPIC_API_KEY"];
  if (anthropicKey) {
    return createAnthropic({ apiKey: anthropicKey })(option.id);
  }

  const hostedKey = process.env["LOVABLE_API_KEY"];
  if (!hostedKey) {
    throw new Error("ANTHROPIC_API_KEY is not configured. Add it to your .env file.");
  }

  const gateway = createLovableAiGatewayProvider(hostedKey);
  return gateway(HOSTED_EQUIVALENT[option.speed] ?? HOSTED_EQUIVALENT["balanced"]!);
}
