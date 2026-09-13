// Auth session storage for the Supabase client.
// Uses plain localStorage for standalone deployments.
export function brokeredPreviewStorage() {
  if (typeof window === "undefined") return undefined;
  return localStorage;
}
