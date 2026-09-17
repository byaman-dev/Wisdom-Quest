/**
 * Hand-picked certificate content for each book.
 *
 * Shown when a player completes every scenario of a book.
 */
export interface BookCertificateContent {
  author: string;
  quote: string;
}

export const BOOK_CERTIFICATES: Record<string, BookCertificateContent> = {
  babylon: {
    author: "George S. Clason",
    quote: "A part of all you earn is yours to keep.",
  },
  meditations: {
    author: "Marcus Aurelius",
    quote: "You have power over your mind — not outside events. Realize this, and you will find strength.",
  },
  artofwar: {
    author: "Sun Tzu",
    quote: "Victorious warriors win first and then go to war.",
  },
  thinkgrow: {
    author: "Napoleon Hill",
    quote: "Whatever the mind can conceive and believe, it can achieve.",
  },
};

export function getCertificateContent(bookId: string): BookCertificateContent {
  return (
    BOOK_CERTIFICATES[bookId] ?? {
      author: "Wisdom Quest",
      quote: "Knowledge becomes wisdom only through decision.",
    }
  );
}
