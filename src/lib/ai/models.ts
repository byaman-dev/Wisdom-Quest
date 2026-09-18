/**
 * User-selectable AI models.
 *
 * The catalog is provider-agnostic on the client: the server resolves the id to
 * a concrete model (Anthropic when an API key is configured, otherwise the
 * built-in hosted models) in `provider.server.ts`.
 */
export type ModelProvider = "anthropic" | "openai" | "google";

export interface ModelOption {
  id: string;
  name: string;
  provider: ModelProvider;
  description: string;
  contextWindow: string;
  speed: "fast" | "balanced" | "powerful";
  recommended?: boolean;
}

export const AVAILABLE_MODELS: ModelOption[] = [
  {
    id: "claude-sonnet-4-5",
    name: "Claude Sonnet 4.5",
    provider: "anthropic",
    description: "Best balance of intelligence and speed. Recommended for most users.",
    contextWindow: "200k tokens",
    speed: "balanced",
    recommended: true,
  },
  {
    id: "claude-opus-4-5",
    name: "Claude Opus 4.5",
    provider: "anthropic",
    description: "Most intelligent. Best for complex scenarios and nuanced reasoning.",
    contextWindow: "200k tokens",
    speed: "powerful",
  },
  {
    id: "claude-haiku-4-5",
    name: "Claude Haiku 4.5",
    provider: "anthropic",
    description: "Fastest and most affordable. Good for quick scenarios.",
    contextWindow: "200k tokens",
    speed: "fast",
  },
];

export const MODEL_IDS = AVAILABLE_MODELS.map((m) => m.id) as [string, ...string[]];

export const DEFAULT_MODEL = "claude-sonnet-4-5";
export const MODERATION_MODEL = "claude-haiku-4-5";

export function getModelById(id: string): ModelOption {
  return (
    AVAILABLE_MODELS.find((m) => m.id === id) ??
    AVAILABLE_MODELS.find((m) => m.id === DEFAULT_MODEL)!
  );
}
