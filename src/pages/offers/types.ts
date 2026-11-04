/**
 * Offer page content model. One shape for every offer page so the template
 * and the FAQPage schema read the same data and cannot diverge.
 */
export type TitledItem = { title: string; body: string };

export type Block =
  | { heading: string; kind: "bullets"; items: string[] }
  | { heading: string; kind: "numbered"; items: TitledItem[] }
  | { heading: string; kind: "titled"; items: TitledItem[] }
  | { heading: string; kind: "paragraphs"; items: string[] };

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
  serviceDescription: string;
  /** Page body. */
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
