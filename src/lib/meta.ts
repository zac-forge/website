import { LIVE_OFFERS } from "../pages/offers";
import { SITE_URL } from "./site";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  ogTitle: string;
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
];

export function canonical(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function metaFor(path: string): PageMeta {
  return PAGES.find((p) => p.path === path) ?? HOME_META;
}
