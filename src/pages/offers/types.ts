/**
 * Offer page content model. One shape for all four pages so the template and
 * the FAQPage schema read the same data and cannot diverge.
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
  /** Services row number on the home page, as in the copy deck. */
  row: string;
  /** Home page row title, ALL CAPS. */
  rowTitle: string;
  rowStatement: string;
  rowItems: string[];
  rowNote?: string;
  rowLink: string;
  /** Behind a flag: omitted from routes, rows, sitemap, schema, and llms.txt. */
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
  intro: string[];
  blocks: Block[];
  proof?: string[];
  faq: Faq[];
  footnote?: string;
};
