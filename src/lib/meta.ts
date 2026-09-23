import { LIVE_OFFERS } from "../pages/offers";
import { SITE_URL } from "./site";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  ogTitle: string;
};

const HOME_DESCRIPTION =
  "Find out whether ChatGPT, Google, and Perplexity recommend your business, then fix what keeps you out. A senior web partner with 19 years at IBM behind it.";

export const HOME_META: PageMeta = {
  path: "/",
  title: "ZAC Forge | AI Visibility and Senior Web Partner",
  description: HOME_DESCRIPTION,
  ogTitle: "Is your name in the answer?",
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
