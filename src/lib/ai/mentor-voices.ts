/**
 * Server-side allowlist of mentor voices.
 *
 * The voice is always derived here from the trusted mentor name, so arbitrary
 * persona text can never be injected into an AI prompt via a direct POST.
 */
export const MENTOR_VOICES: Record<string, string> = {
  Arkad: "Warm, practical, speaks in parables about gold and patience.",
  Marcus: "Calm, reflective, focuses on what is within your control.",
  "Sun Tzu": "Sharp, economical, sees the board several moves ahead.",
  Vera: "Direct, energetic, obsessed with leverage and momentum.",
};

/** Non-empty tuple of valid mentor names, for `z.enum`. */
export const MENTOR_NAMES = Object.keys(MENTOR_VOICES) as [string, ...string[]];
