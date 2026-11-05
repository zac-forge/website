import { LIVE_OFFERS } from "../pages/offers";
import { SITE_URL } from "./site";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  /** Not for search: robots noindex, no canonical, Open Graph, or JSON-LD, and
   *  left out of the sitemap. The contact form result pages. */
  noindex?: boolean;
};

/** docs/site-copy-v5.md, "Metadata and schema". */
const HOME_DESCRIPTION =
  "AI made everyone an IT expert. It didn't make it work. A free five-question check from a senior team with 19 years at IBM behind it, then a fixed-price fix.";

export const HOME_META: PageMeta = {
  path: "/",
  title: "ZAC Forge | Built it with AI? We'll check it.",
  description: HOME_DESCRIPTION,
  ogTitle: "Built it with AI? We'll check it.",
};

/** Every prerendered route and its head. Consumed by the prerender and by
 *  the client-side title effect. */
export const PAGES: PageMeta[] = [
  HOME_META,
  ...LIVE_OFFERS.map((o) => ({
    path: o.path,
    title: o.title,
    description: o.description,
    ogTitle: o.title.replace(" | ZAC Forge", ""),
  })),
  // Served by functions/api/contact.ts after a form submission.
  ...[
    { path: "/contact/thanks", title: "Thank you | ZAC Forge" },
    { path: "/contact/not-sent", title: "Thank you | ZAC Forge" },
    { path: "/contact/error", title: "Something is missing | ZAC Forge" },
  ].map((p) => ({ ...p, description: HOME_DESCRIPTION, ogTitle: p.title, noindex: true })),
];

export function canonical(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function metaFor(path: string): PageMeta {
  return PAGES.find((p) => p.path === path) ?? HOME_META;
}
