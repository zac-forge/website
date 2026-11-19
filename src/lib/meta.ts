import { LIVE_OFFERS } from "../pages/offers";
import { SITE_URL } from "./site";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  /** This page's own 1200 x 630 card in public/og/, made by tools/og-images.mjs. */
  ogImage?: string;
  /** Not for search: robots noindex, no canonical, Open Graph, or JSON-LD, and
   *  left out of the sitemap. The contact form result pages and the 404. */
  noindex?: boolean;
};

/** The hero of Drew's copy handoff of 2026-11-18: headline and subline. */
const HOME_DESCRIPTION =
  "AI made everyone an IT expert. It didn't make IT work. We bring clarity and sanity. Start with a free senior review of your project.";

export const HOME_META: PageMeta = {
  path: "/",
  title: "ZAC Forge | AI made everyone an IT expert. It didn't make IT work.",
  description: HOME_DESCRIPTION,
  ogTitle: "AI made everyone an IT expert. It didn't make IT work.",
  ogImage: `${SITE_URL}/og/home.jpg`,
};

/** /faq (Drew, 2026-11-17). Title and description summarise the 7
 *  questions on the page, no new claims. */
export const FAQ_META: PageMeta = {
  path: "/faq",
  title: "FAQ: cost, ownership, and who does the work | ZAC Forge",
  description:
    "What the Reality Check and the Fix cost, who does the work, how we use AI, who owns what we build, and what our accessibility fixes cover.",
  ogTitle: "FAQ: cost, ownership, and who does the work",
  ogImage: `${SITE_URL}/og/faq.jpg`,
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
    ogImage: `${SITE_URL}/og${o.path}.jpg`,
  })),
  FAQ_META,
  // Served by functions/api/contact.ts after a form submission.
  ...[
    { path: "/contact/thanks", title: "Thank you | ZAC Forge" },
    { path: "/contact/not-sent", title: "Something went wrong | ZAC Forge" },
    { path: "/contact/error", title: "Something is missing | ZAC Forge" },
    // Written to dist/404.html; functions/worker.ts serves it with status 404.
    { path: "/404", title: "Page not found | ZAC Forge" },
  ].map((p) => ({ ...p, description: HOME_DESCRIPTION, ogTitle: p.title, noindex: true })),
];

export function canonical(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function metaFor(path: string): PageMeta {
  return PAGES.find((p) => p.path === path) ?? PAGES.find((p) => p.path === "/404") ?? HOME_META;
}
