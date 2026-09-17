import babylonImg from "@/assets/book-babylon.jpg";
import meditationsImg from "@/assets/book-meditations.jpg";
import artofwarImg from "@/assets/book-artofwar.jpg";
import thinkgrowImg from "@/assets/book-thinkgrow.jpg";
import type { Book, SkillKey } from "@/types";

// Re-export the shared domain types so existing `@/lib/books` imports keep working.
export type {
  SkillKey,
  Choice,
  Scenario,
  ReflectionQuestion,
  BookSection,
  BookChapter,
  Book,
} from "@/types";

/** Human-readable display labels for each skill. */
export const SKILL_LABELS: Record<SkillKey, string> = {
  finance: "Financial IQ",
  stoicism: "Stoicism",
  strategy: "Strategic Thinking",
  mindset: "Focus & Mindset",
  discipline: "Discipline",
  negotiation: "Negotiation",
  emotionalControl: "Emotional Control",
  leadership: "Leadership",
  confidence: "Confidence",
  communication: "Communication",
};

export const BOOKS: Book[] = [
  {
    id: "babylon",
    title: "The Richest Man in Babylon",
    theme: "Wealth & Discipline",
    difficulty: "Intro",
    difficultyTone: "text-emerald-400",
    duration: "6h",
    image: babylonImg,
    intro: "Ancient Babylon. You hold a modest purse and a dangerous reputation for being generous.",
    primarySkill: "finance",
    unlockXp: 0,
    scenarios: [
      {
        id: "babylon-1",
        title: "The Friend's Loan",
        setup:
          "A trusted friend asks for a loan of 50 gold coins to start a spice trade. He promises 20% interest in three moons, but his reputation is built on talk, not trade.",
        choices: [
          {
            id: "lend",
            label: "Lend the gold immediately",
            mentor:
              "Arkad would say: 'Guard thy treasure from loss.' You loaned without collateral to an unproven merchant — that is a gamble, not an investment.",
            consequence: "Three moons later, the spice venture collapses. Your gold is gone. Your friend avoids your gaze.",
            xp: 60,
            impact: { finance: -3, emotionalControl: 2 },
            trait: "−Finance",
          },
          {
            id: "collateral",
            label: "Request a guarantee (collateral)",
            mentor:
              "Wise. You honored the friendship and your purse. A true friend will not be insulted by prudence — a false one will reveal himself.",
            consequence: "He hesitates, then offers a cart and two donkeys as security. The deal proceeds with both of you protected.",
            xp: 240,
            impact: { finance: 6, negotiation: 4, discipline: 3 },
            trait: "+Discipline",
          },
          {
            id: "decline",
            label: "Politely decline and explain why",
            mentor:
              "Honest, but you missed the chance to teach. The path of wisdom is not refusal alone — it is structuring deals so that virtue and survival align.",
            consequence: "He leaves disappointed but respects your honesty. You sleep with your gold intact.",
            xp: 140,
            impact: { finance: 3, emotionalControl: 4, negotiation: -1 },
            trait: "+Emotional Control",
          },
        ],
      },
      {
        id: "babylon-2",
        title: "The First Tenth",
        setup:
          "Your monthly earnings arrive — 100 silver. The marketplace sings with new robes, spiced wine, a faster donkey. What do you do first?",
        choices: [
          {
            id: "spend",
            label: "Reward yourself — you earned it",
            mentor: "Every coin spent without thought is a soldier deserting your future army.",
            consequence: "The robes fade by the next moon. You feel the familiar emptiness.",
            xp: 40,
            impact: { finance: -2, discipline: -2 },
            trait: "−Discipline",
          },
          {
            id: "save",
            label: "Pay yourself first — save 10%",
            mentor:
              "'A part of all you earn is yours to keep.' You have just hired your first servant: gold that works while you sleep.",
            consequence: "Ten silver disappear into your purse — and stay there. The other 90 still buys what matters.",
            xp: 260,
            impact: { finance: 7, discipline: 6 },
            trait: "+Wealth Habit",
          },
          {
            id: "invest-all",
            label: "Invest every coin in a hot venture",
            mentor: "Eagerness without reserves is the gambler's prayer. Wealth respects patience, not desperation.",
            consequence: "The venture stalls. With no reserves, you must borrow at ruinous rates.",
            xp: 90,
            impact: { finance: -1, mindset: 2 },
            trait: "+Risk Awareness",
          },
        ],
      },
      {
        id: "babylon-3",
        title: "The Tempting Scheme",
        setup:
          "A stranger offers a 'guaranteed' 5x return on a caravan to a distant city. He needs your decision tonight.",
        choices: [
          {
            id: "invest",
            label: "Invest half your savings",
            mentor: "Urgency is the disguise of deceit. Wisdom rarely demands haste.",
            consequence: "The caravan never returns. The stranger was never seen again.",
            xp: 80,
            impact: { finance: -5, mindset: 3 },
            trait: "+Skepticism",
          },
          {
            id: "research",
            label: "Sleep on it and investigate tomorrow",
            mentor:
              "You let time reveal truth. Tomorrow you learn three other merchants were approached — and one already lost everything.",
            consequence: "By dawn, the stranger has vanished. You saved your purse and gained a story.",
            xp: 280,
            impact: { finance: 5, discipline: 4, strategy: 3 },
            trait: "+Patience",
          },
          {
            id: "decline2",
            label: "Refuse on principle",
            mentor: "Safe, but unexamined. Refusing without learning leaves you unprepared for the next, smarter scheme.",
            consequence: "You walk away. You'll never know what was real and what wasn't.",
            xp: 120,
            impact: { discipline: 2 },
            trait: "+Caution",
          },
        ],
      },
    ],
  },
  {
    id: "meditations",
    title: "Meditations",
    theme: "Stoicism",
    difficulty: "Hard",
    difficultyTone: "text-gold",
    duration: "12h",
    image: meditationsImg,
    intro: "Rome at dawn. A messenger brings news that will test what you've practiced.",
    primarySkill: "stoicism",
    unlockXp: 400,
    scenarios: [
      {
        id: "med-1",
        title: "The Rude Senator",
        setup: "A senator insults you publicly, in front of allies. Faces turn. They wait to see what you will do.",
        choices: [
          {
            id: "retort",
            label: "Strike back with a sharper insult",
            mentor:
              "Marcus would write: 'The best revenge is to be unlike him.' You became him for a moment, and lost yourself in his eyes.",
            consequence: "The crowd cheers, but allies notice you can be moved. A weapon has been handed to your enemies.",
            xp: 70,
            impact: { stoicism: -3, emotionalControl: -3 },
            trait: "−Stoicism",
          },
          {
            id: "pause",
            label: "Pause. Acknowledge. Continue your point.",
            mentor:
              "You remembered: another's opinion of you cannot harm you unless you grant it power. You stayed sovereign.",
            consequence: "The senator's face reddens. Your allies see a person who cannot be rattled — and quietly trust you more.",
            xp: 300,
            impact: { stoicism: 7, emotionalControl: 6, discipline: 3 },
            trait: "+Inner Citadel",
          },
          {
            id: "leave",
            label: "Walk out in dignified silence",
            mentor: "Withdrawal can be wisdom, but here it cedes the room. Presence under pressure is the harder virtue.",
            consequence: "The matter you came to argue is decided without you.",
            xp: 130,
            impact: { stoicism: 2, emotionalControl: 3, strategy: -2 },
            trait: "+Restraint",
          },
        ],
      },
      {
        id: "med-2",
        title: "The Lost Morning",
        setup: "You wake late. The day you planned is ruined before it began. Frustration rises.",
        choices: [
          {
            id: "spiral",
            label: "Spiral into self-criticism",
            mentor: "You judged the morning, then judged yourself for judging. The mind multiplies suffering when unwatched.",
            consequence: "The day is consumed by guilt about a day that hasn't even happened yet.",
            xp: 50,
            impact: { stoicism: -2, mindset: -3, emotionalControl: -2 },
            trait: "−Mindset",
          },
          {
            id: "accept",
            label: "Accept it. Begin from where you are.",
            mentor:
              "'Confine yourself to the present.' You did not negotiate with reality — you greeted it and moved.",
            consequence: "You salvage the afternoon. The work that mattered most still gets done.",
            xp: 270,
            impact: { stoicism: 6, mindset: 5, discipline: 4 },
            trait: "+Presence",
          },
        ],
      },
    ],
  },
  {
    id: "artofwar",
    title: "The Art of War",
    theme: "Strategy",
    difficulty: "Master",
    difficultyTone: "text-rose-400",
    duration: "8h",
    image: artofwarImg,
    intro: "A competitor moves on your territory. The board is set. Every action is a signal.",
    primarySkill: "strategy",
    unlockXp: 900,
    scenarios: [
      {
        id: "war-1",
        title: "The Visible Rival",
        setup: "A rival launches an aggressive product targeting your customers. The team demands immediate retaliation.",
        choices: [
          {
            id: "attack",
            label: "Launch a counter-campaign now",
            mentor:
              "Sun Tzu: 'To win one hundred victories in one hundred battles is not the acme of skill.' You played his game on his timing.",
            consequence: "Costs spiral. Both sides exhaust resources. A third competitor wins the quarter.",
            xp: 100,
            impact: { strategy: -3, finance: -2 },
            trait: "−Strategy",
          },
          {
            id: "observe",
            label: "Hold. Study his supply lines.",
            mentor:
              "'Know your enemy.' You learned his pricing depends on a single partner — a fragile pillar he doesn't yet see.",
            consequence: "Two weeks later, you make one precise move that collapses his offering without firing back publicly.",
            xp: 320,
            impact: { strategy: 8, discipline: 4, emotionalControl: 3 },
            trait: "+Patience of the Strategist",
          },
        ],
      },
    ],
  },
  {
    id: "thinkgrow",
    title: "Think and Grow Rich",
    theme: "Mindset",
    difficulty: "Normal",
    difficultyTone: "text-emerald-400",
    duration: "10h",
    image: thinkgrowImg,
    intro: "The idea has lived in your mind for months. Today it must become a decision.",
    primarySkill: "mindset",
    unlockXp: 200,
    scenarios: [
      {
        id: "tg-1",
        title: "The Definite Aim",
        setup: "You have three promising ideas. Choosing one means burying the others.",
        choices: [
          {
            id: "all",
            label: "Pursue all three in parallel",
            mentor: "Definiteness of purpose is the starting point. Diffused desire is a candle in wind.",
            consequence: "Six months pass. Each project is 30% finished and accelerating nowhere.",
            xp: 70,
            impact: { mindset: -2, discipline: -3 },
            trait: "−Focus",
          },
          {
            id: "one",
            label: "Commit fully to the one with the clearest path",
            mentor: "You chose. The mind, once aimed, organizes the world to deliver.",
            consequence: "Within weeks, allies appear. Resources you didn't expect arrive on cue.",
            xp: 290,
            impact: { mindset: 7, discipline: 5, strategy: 3 },
            trait: "+Definite Purpose",
          },
        ],
      },
    ],
  },
];

// Attach AI-generated chapter content and derive the flat scenario list from it.
import { BOOK_CHAPTERS } from "./book-content";

for (const book of BOOKS) {
  const chapters = BOOK_CHAPTERS[book.id];
  if (chapters && chapters.length) {
    book.chapters = chapters;
    book.scenarios = chapters.flatMap((c) => c.sections.flatMap((s) => s.scenarios));
  }
}

export function getBook(id: string): Book | undefined {
  return BOOKS.find((b) => b.id === id);
}

export function bookStageCount(book: Book): number {
  if (!book.chapters) return book.scenarios.length;
  return book.chapters.reduce(
    (n, c) => n + c.sections.reduce((m, s) => m + s.scenarios.length + s.reflections.length, 0),
    0,
  );
}

