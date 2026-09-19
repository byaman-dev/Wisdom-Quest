import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { generateText } from "ai";
import type { GeneratedScenario } from "@/types";
import { buildScenarioPrompt } from "./ai/prompt-builder";
import { getChatModel } from "./ai/provider.server";
import { enforceRateLimit } from "./ai/rate-limit.server";
import { CHOICE_COUNT, ScenarioInputSchema, coerceScenario, extractJson } from "./ai/validators";

export type { GeneratedChoice, GeneratedScenario } from "@/types";

export const generateScenario = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ScenarioInputSchema.parse(input))
  .handler(async ({ data }): Promise<GeneratedScenario> => {
    enforceRateLimit(getRequest().headers);

    const { text } = await generateText({
      model: getChatModel(data.selectedModel),
      prompt: buildScenarioPrompt(data),
    });

    return coerceScenario(extractJson(text), data.primarySkill, CHOICE_COUNT[data.difficulty]);
  });
