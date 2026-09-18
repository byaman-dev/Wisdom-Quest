/**
 * Default `AiService` implementation, backed by the app server functions. This is the single wiring point between the UI's provider-agnostic
 * `AiService` contract and the concrete server functions.
 *
 * Swapping AI providers or moving to a self-hosted model means replacing the
 * bindings here (or returning a different `AiService`) — no component changes.
 */
import { useServerFn } from "@tanstack/react-start";
import { useMemo } from "react";
import { generateScenario } from "@/lib/scenarios.functions";
import { replyToMentor } from "@/lib/mentor-chat.functions";
import { evaluateResponse } from "@/lib/evaluate.functions";
import { useGame } from "@/store/game-store";
import type { AiService } from "./ai-service";

export function useAiService(): AiService {
  const generate = useServerFn(generateScenario);
  const reply = useServerFn(replyToMentor);
  const evaluate = useServerFn(evaluateResponse);
  const selectedModel = useGame((s) => s.selectedModel);

  return useMemo<AiService>(
    () => ({
      generateScenario: (params) => generate({ data: { selectedModel, ...params } }),
      replyToMentor: (params) => reply({ data: { selectedModel, ...params } }),
      evaluateResponse: (params) => evaluate({ data: { selectedModel, ...params } }),
    }),
    [generate, reply, evaluate, selectedModel],
  );
}
