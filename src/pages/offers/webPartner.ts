import type { Offer } from "./types";

/** Copy from docs/site-copy-v5.md, "/web-partner", amended by the copy pass of 2026-11-06. */
export const webPartner: Offer = {
  path: "/web-partner",
  navTitle: "Web Partner",
  summary: "One senior person who knows your site keeps it running and improves it every month.",
  menuLine: "A senior person on your site, month to month.",
  title: "Web Partner: senior website care, month to month | ZAC Forge",
  description:
    "One senior person who knows your site keeps it running and improves it every month. Month to month. Scales with you.",
  serviceName: "Web Partner",
  serviceDescription:
    "Ongoing senior care: updates, backups, monitoring, change requests, one improvement a month, and visibility tracking. Not a maintenance plan.",
  heroTitle: "Web Partner",
  heroIcon: { src: "/art/subpage/subpage-icon-web-partner.svg", width: 50, height: 50 },
  accent: "var(--color-offer-web-partner)",
  cardIcon: "/art/offer-cards/icon-web-partner.svg",
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
        "Software updates (on WordPress: core, plugins, and theme)",
        "Verified off-site backups",
        "Uptime and security monitoring",
        "A monthly allowance of change requests, agreed when we scope your plan",
        "One improvement each month that you didn't have to ask for",
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
          body: "Everything above, plus a larger allowance of change requests, competitor tracking, 2 new or updated pages a month that answer your customers' questions, a quarterly accessibility and performance re-check, a monthly call, and next-business-day replies.",
        },
      ],
    },
    {
      heading: "Need more than a website?",
      kind: "paragraphs",
      items: [
        "If you need a senior team on more than the site (a platform, an internal tool, a workflow, a brand), Web Partner scales to that. Design, engineering, and automation from the same people, sized to your budget, month to month or on a longer term.",
      ],
    },
    {
      heading: "How it starts",
      kind: "paragraphs",
      items: [
        "Web Partner usually follows a Fix Week, so we already know your site. Every project includes 30 days of care first: we monitor and maintain the work we did, at no charge. After that, plans run month to month. Cancel with 30 days' notice. Longer terms are available if you want one.",
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
        "WordPress, custom builds on modern frameworks, and most hosted platforms. If you built it on an AI tool and want off, [ask us about moving platforms](/#contact).",
    },
    {
      question: "Who does the work?",
      answer:
        "Andrew Johnston leads every account. A principal engineer and a design principal join when the work calls for them.",
    },
    {
      question: "What if I want to leave?",
      answer:
        "Give 30 days' notice. The code, the accounts, and the files are yours the whole time, so there's nothing to ask us for.",
    },
  ],
  cta: { label: "Start with a Reality Check", href: "/#contact" },
};
