import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { generateText } from "ai";
import type { GeneratedChoice } from "@/types";
import { buildOpenResponsePrompt } from "./ai/prompt-builder";
import { getChatModel } from "./ai/provider.server";
import { enforceRateLimit } from "./ai/rate-limit.server";
import { OpenResponseInputSchema, coerceEvaluation, extractJson } from "./ai/validators";

/** Evaluates a player's own written answer (advanced difficulty). */
export const evaluateResponse = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => OpenResponseInputSchema.parse(input))
  .handler(async ({ data }): Promise<GeneratedChoice> => {
    enforceRateLimit(getRequest().headers);

    const { text } = await generateText({
      model: getChatModel(data.selectedModel),
      prompt: buildOpenResponsePrompt(data),
    });

    return coerceEvaluation(extractJson(text), data.primarySkill, "Your own response");
  });
