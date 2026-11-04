import type { Offer } from "./types";

/** Copy from docs/site-copy-v5.md, "/web-partner", which rewrites the v4 page. */
export const webPartner: Offer = {
  path: "/web-partner",
  navTitle: "Web Partner",
  summary: "After the fix, one senior team keeps it running and makes it better every month.",
  title: "Web Partner | ZAC Forge",
  description:
    "After the fix, one senior team keeps your site running and makes it better every month. Not a maintenance plan.",
  serviceName: "Web Partner",
  serviceDescription:
    "Ongoing senior care after the fix: updates, backups, monitoring, change requests, one improvement a month, and visibility tracking. Not a maintenance plan.",
  eyebrow: "WEB PARTNER",
  h1: "Keep it fixed. Make it better.",
  intro: [
    "Updates and backups are the floor. What you're paying for is one senior person who knows your site, answers when you ask, and improves it every month.",
  ],
  blocks: [
    {
      heading: "Every plan includes",
      kind: "bullets",
      items: [
        "Core, plugin, and theme updates",
        "Verified off-site backups",
        "Uptime and security monitoring",
        "A set amount of change requests each month",
        "One proactive improvement each month",
        "A monthly check of how often ChatGPT, Google, and Perplexity name you",
      ],
    },
    {
      heading: "Two levels",
      kind: "titled",
      items: [
        {
          title: "Web Partner.",
          body: "Everything above, with replies within two business days.",
        },
        {
          title: "Web Partner Plus.",
          body: "Everything above, with more change requests, competitor tracking, two new or updated answer pages a month, a quarterly accessibility and performance re-check, a monthly call, and next-business-day replies.",
        },
      ],
    },
    {
      heading: "How it starts",
      kind: "paragraphs",
      items: [
        "Most clients come to Web Partner after a Fix Week. Every project we finish includes 30 days of care, so you see how we work before you commit. Plans start with three months, then run month to month with 30 days' notice.",
      ],
    },
  ],
  faq: [
    {
      question: "What counts as a change request?",
      answer:
        "Anything you'd otherwise email a developer about: new pages, copy and image changes, forms, fixes, small features. If something is bigger than a month's allowance, we quote it separately before starting.",
    },
    {
      question: "What platforms do you work on?",
      answer:
        "WordPress, custom builds on modern frameworks, and most hosted platforms. If you built it on an AI tool and want off, see Platform Escape.",
    },
    {
      question: "Who does the work?",
      answer:
        "Andrew Johnston leads every account. A senior engineer and a design director join when the work calls for them.",
    },
  ],
  cta: { label: "Start with a Reality Check", href: "/reality-check" },
};
