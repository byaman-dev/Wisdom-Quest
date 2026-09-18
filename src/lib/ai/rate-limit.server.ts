/**
 * Server-side rate limiting for AI calls.
 *
 * Sliding-window counters keyed by client IP plus a coarse session
 * fingerprint (user-agent + accept-language hash). State lives in an
 * in-memory map on the server instance; it is intentionally lightweight and
 * resets on redeploy, which is acceptable for burst/abuse protection.
 */

const MINUTE_MS = 60_000;
const HOUR_MS = 60 * MINUTE_MS;

export const MAX_PER_MINUTE = 5;
export const MAX_PER_HOUR = 20;

type Bucket = { hits: number[] };

const buckets = new Map<string, Bucket>();
let lastSweep = 0;

function sweep(now: number) {
  if (now - lastSweep < 5 * MINUTE_MS) return;
  lastSweep = now;
  for (const [key, bucket] of buckets) {
    bucket.hits = bucket.hits.filter((t) => now - t < HOUR_MS);
    if (bucket.hits.length === 0) buckets.delete(key);
  }
}

function hash(value: string): string {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

export function getClientKey(headers: Headers): string {
  const ip =
    headers.get("cf-connecting-ip") ||
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "unknown-ip";
  const fingerprint = hash(
    `${headers.get("user-agent") ?? ""}|${headers.get("accept-language") ?? ""}`,
  );
  return `${ip}:${fingerprint}`;
}

export class RateLimitError extends Error {
  readonly status = 429;
  constructor(retryAfterMs: number) {
    const minutes = Math.max(1, Math.ceil(retryAfterMs / MINUTE_MS));
    super(`429 — Too many requests. Try again in ${minutes} minute${minutes > 1 ? "s" : ""}.`);
    this.name = "RateLimitError";
  }
}

/** Records a request and throws a RateLimitError when a window is exceeded. */
export function enforceRateLimit(headers: Headers): void {
  const now = Date.now();
  sweep(now);

  const key = getClientKey(headers);
  const bucket = buckets.get(key) ?? { hits: [] };
  bucket.hits = bucket.hits.filter((t) => now - t < HOUR_MS);

  const inMinute = bucket.hits.filter((t) => now - t < MINUTE_MS);
  if (inMinute.length >= MAX_PER_MINUTE) {
    buckets.set(key, bucket);
    throw new RateLimitError(MINUTE_MS - (now - inMinute[0]!));
  }
  if (bucket.hits.length >= MAX_PER_HOUR) {
    buckets.set(key, bucket);
    throw new RateLimitError(HOUR_MS - (now - bucket.hits[0]!));
  }

  bucket.hits.push(now);
  buckets.set(key, bucket);
}
