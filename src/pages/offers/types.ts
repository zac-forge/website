/**
 * Offer page content model. One shape for every offer page so the template
 * and the FAQPage schema read the same data and cannot diverge.
 */
/**
 * body is optional on numbered steps, for a step that is one line. A titled
 * item may carry a short bullet list under its body.
 */
export type TitledItem = { title: string; body?: string; bullets?: string[] };

/** Any block may open and close with plain paragraphs around its items. */
type Frame = { heading: string; intro?: string[]; outro?: string[] };

export type Block =
  | (Frame & { kind: "bullets"; items: string[] })
  | (Frame & { kind: "numbered"; items: TitledItem[] })
  | (Frame & { kind: "titled"; items: TitledItem[] })
  | (Frame & { kind: "paragraphs"; items: string[] });

export type Faq = { question: string; answer: string };

export type Offer = {
  /** Route path, also the canonical URL path. */
  path: string;
  /** Name in the header menu, the footer, and the related offers block. */
  navTitle: string;
  /** One line under the name in the related offers block, from the copy deck. */
  summary: string;
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
  blocks: Block[];
  proof?: string[];
  faq: Faq[];
  footnote?: string;
  /** The closing call to action. */
  cta: { label: string; href: string };
  /** Render the contact form on the page, as /reality-check does. */
  form?: boolean;
};
