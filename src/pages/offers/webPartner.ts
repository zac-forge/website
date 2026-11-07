import type { Offer } from "./types";

/** Copy from docs/site-copy-v5.md, "/web-partner", amended by the copy pass of 2026-11-06. */
export const webPartner: Offer = {
  path: "/web-partner",
  navTitle: "Web Partner",
  summary: "One senior team keeps it running and makes it better every month.",
  title: "Web Partner | ZAC Forge",
  description:
    "One senior team keeps your site running and makes it better every month. Month to month. Scales with you.",
  serviceName: "Web Partner",
  serviceDescription:
    "Ongoing senior care: updates, backups, monitoring, change requests, one improvement a month, and visibility tracking. Not a maintenance plan.",
  eyebrow: "WEB PARTNER",
  h1: "Keep it fixed. Make it better.",
  intro: [
    "Updates and backups are the floor. You're paying for one senior person who knows your site, answers when you ask, and improves it every month.",
  ],
  blocks: [
    {
      heading: "Every plan includes",
      kind: "bullets",
      items: [
        "Core, plugin, and theme updates",
        "Verified off-site backups",
        "Uptime and security monitoring",
        "A set number of change requests each month",
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
          body: "Everything above, with replies within 2 business days.",
        },
        {
          title: "Web Partner Plus.",
          body: "Everything above, plus more change requests, competitor tracking, 2 new or updated answer pages a month, a quarterly accessibility and performance re-check, a monthly call, and next-business-day replies.",
        },
      ],
    },
    {
      heading: "Need more than a website?",
      kind: "paragraphs",
      items: [
        "Some clients need a senior team on more than the site: a platform, an internal tool, a workflow, a brand. Web Partner scales to that. Design, engineering, and automation from the same people, sized to your budget, month to month.",
      ],
    },
    {
      heading: "How it starts",
      kind: "paragraphs",
      items: [
        "Most clients come after a Fix Week. Every project includes 30 days of care. Plans start at 3 months, then month to month with 30 days' notice.",
      ],
    },
  ],
  faq: [
    {
      question: "What counts as a change request?",
      answer:
        "Anything you'd otherwise email a developer about: new pages, copy and image changes, forms, corrections, small features. If something is bigger than a month's allowance, we quote it separately before starting.",
    },
    {
      question: "What platforms do you work on?",
      answer:
        "WordPress, custom builds on modern frameworks, and most hosted platforms. If you built it on an AI tool and want off, see Platform Escape.",
    },
    {
      question: "Who does the work?",
      answer:
        "Andrew Johnston leads every account. A principal engineer and a design principal join when the work calls for them.",
    },
  ],
  cta: { label: "Start with a Reality Check", href: "/#contact" },
};
