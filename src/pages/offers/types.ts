/**
 * Offer page content model. One shape for every offer page so the template
 * and the FAQPage schema read the same data and cannot diverge.
 */
/**
 * body is optional on numbered steps, for a step that is one line. A titled
 * item may carry a short bullet list under its body.
 */
export type TitledItem = { title: string; body?: string; bullets?: string[] };

/** A "Things we've fixed" example, split where its card splits. */
export type FixExample = { problem: string; outcome: string };

/**
 * Any block may open and close with plain paragraphs around its items.
 * `icon` picks the line icon its lists carry (a check by default). These,
 * `view`, and `statement` say how a block is shown, never what it says.
 */
type Frame = { heading: string; intro?: string[]; outro?: string[]; icon?: "check" | "cross" | "calendar" };

/** A figure and the words that follow it, as one stat card. */
export type Stat = { figure: string; caption: string };

export type Block =
  | (Frame & { kind: "bullets"; items: string[] })
  /** `view: "stepper"` shows the items as the home page's question stepper. */
  /** `marker: "calendar"` puts the calendar icon in the rail's discs in
   *  place of numerals, for steps that name their own days. */
  | (Frame & { kind: "numbered"; items: TitledItem[]; view?: "stepper"; marker?: "calendar" })
  /** `view: "list"` shows the items as the icon list, title then body. */
  | (Frame & { kind: "titled"; items: TitledItem[]; view?: "list" })
  /**
   * One sentence set as stat cards: `lead` opens it and each card carries a
   * figure and the words after it, so read in order it is the sentence as
   * written.
   */
  | (Frame & { kind: "stats"; lead: string; items: Stat[] })
  | (Frame & { kind: "paragraphs"; items: string[] })
  /** The home page's before-and-after cards, then a full-width statement. */
  | (Frame & { kind: "examples"; items: FixExample[]; statement?: string });

export type Faq = { question: string; answer: string };

export type Offer = {
  /** Route path, also the canonical URL path. */
  path: string;
  /** Name in the header menu, the footer, and the related offers block. */
  navTitle: string;
  /** The header menu's shorter name for the offer, where it has one. */
  menuTitle?: string;
  /**
   * The line under the offer's name in the header menu, and on its tile on
   * home and in the "Other services" block, so the three cannot drift
   * (Drew's copy handoff of 2026-11-18, one source since 2026-11-22).
   */
  line?: string;
  /** The tile's line where it says more than the menu's. */
  tileLine?: string;
  /**
   * The paragraph the "Other services" tile carried until the text cut of
   * 2026-11-22. No longer shown anywhere, except as the tile line of an
   * offer with no `line` (the flagged brand system). Deleted from Web
   * Partner and Accessibility at Drew's request the same day.
   */
  summary?: string;
  /** Behind a flag: omitted from routes, menus, sitemap, and schema. */
  flagged?: boolean;
  /** Document head. */
  title: string;
  description: string;
  /** schema.org Service name and description. */
  serviceName: string;
  /** A shorter label the site also uses for the offer ("The Fix"). */
  serviceAlternateName?: string;
  serviceDescription: string;
  /** The page name in the hero, in the wording of Misha's comps (2026-11-13). */
  heroTitle: string;
  /** The white line icon over the hero title, from public/art/subpage/. */
  heroIcon?: { src: string; width: number; height: number };
  /**
   * The offer's colour, a --color-offer-* token. Its "Other services" card
   * title used it until 2026-11-17, when every card title went to the site
   * blue (Drew). Kept for Misha's colour questions 40 and 44.
   */
  accent?: string;
  /**
   * The colour the offer's hero band fades to, a --color-hero-* token, from
   * Misha's hero frames (design question 40). Differs from accent for now.
   * Since 2026-11-22 it is the offer's one accent: the hero, the step discs,
   * the list icons, the proof panel, and its tile's capsule. An offer
   * without one (Platform Escape) takes the site blue.
   */
  heroAccent?: string;
  /** The line icon on its "Other services" card, from public/art/offer-cards/. */
  cardIcon?: string;
  /** Page body. The eyebrow is no longer shown on the page since the shared
   *  hero (2026-11-13), and is kept for when it comes back. */
  eyebrow: string;
  h1: string;
  /** The v5 line under the H1 that places a fix behind the Reality Check. */
  subline?: string;
  intro: string[];
  /** Standout intro lines, set as shared callouts under the intro. */
  introCallouts?: string[];
  /**
   * The body, in the family order (2026-11-22): how it works (steps), then
   * the lists, then any section that is the page's own, then a proof block
   * where the proof is one (examples, stats, the stepper).
   */
  blocks: Block[];
  /** Proof as a paragraph, set as a callout under the heading "Proof". */
  proof?: string[];
  /** Proof as a statement: the first sentence set large, then the rest. */
  proofStat?: [string, string];
  /** Proof as the home page's case card, by the case's slug. */
  proofCase?: string;
  faq: Faq[];
  footnote?: string;
  /** The closing call to action. */
  cta: { label: string; href: string };
  /** Render the contact form on the page, as /reality-check does. */
  form?: boolean;
};
