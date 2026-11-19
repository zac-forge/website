import type { Offer } from "./types";

/**
 * Drew's follow-up of 2026-11-18: the page the handoff's three Platform
 * Escape paragraphs were waiting for, and the "What you get" list he gave.
 * The headline is the menu line. No FAQ was written, so the page has none,
 * and no hero or card icon exists yet (Misha), so the hero stays flat blue
 * and the "Other services" card has no icon.
 */
export const platformEscape: Offer = {
  path: "/platform-escape",
  navTitle: "Platform Escape",
  summary:
    "Think WordPress. A lot of simple business sites are on it because it's easy to update, but it's overkill, and it costs them in maintenance, security and speed.",
  title: "Platform Escape: off WordPress or Wix, onto something you own | ZAC Forge",
  description:
    "We move you to a lean setup you own: cheaper to run, faster, safer, easier to find in search. You can still make your own simple updates.",
  serviceName: "Platform Escape",
  serviceDescription:
    "Moves simple business sites off WordPress or Wix onto a lean setup the business owns: cheaper to run, faster, safer, easier to find in search, with simple updates the owner can still make.",
  heroTitle: "Platform Escape",
  eyebrow: "PLATFORM ESCAPE",
  h1: "Off WordPress or Wix, onto something you own",
  intro: [
    "Think WordPress. A lot of simple business sites are on it because it's easy to update, but it's overkill, and it costs them in maintenance, security and speed.",
    "We move you to a lean setup you own: cheaper to run, faster, safer, easier to find in search. You can still make your own simple updates.",
    "We can do these all day long, for a fraction of the cost.",
  ],
  blocks: [
    {
      heading: "What you get",
      kind: "bullets",
      items: [
        "Lower running costs",
        "Better security",
        "A faster site",
        "Better search visibility",
        "Simple updates you can make yourself",
      ],
    },
  ],
  faq: [],
  cta: { label: "Start with a Reality Check", href: "/#contact" },
};
