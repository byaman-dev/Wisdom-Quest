import type { BookChapter } from "@/types";
import { babylonChapters } from "./babylon";
import { meditationsChapters } from "./meditations";
import { artofwarChapters } from "./artofwar";
import { thinkgrowChapters } from "./thinkgrow";

export const BOOK_CHAPTERS: Record<string, BookChapter[]> = {
  babylon: babylonChapters,
  meditations: meditationsChapters,
  artofwar: artofwarChapters,
  thinkgrow: thinkgrowChapters,
};
