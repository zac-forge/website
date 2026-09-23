import type { Offer } from "./types";

export const webPartner: Offer = {
  path: "/web-partner",
  row: "02",
  rowTitle: "WEB PARTNER",
  rowStatement: "One senior team accountable for your site.",
  rowItems: [
    "Fixes and change requests",
    "Performance",
    "Security and backups",
    "Accessibility",
    "A real improvement every month",
    "Visibility tracking",
  ],
  rowNote: "Not maintenance. Updates and backups are the floor, not the product.",
  rowLink: "What a Web Partner plan covers",
  title: "Web Partner | ZAC Forge",
  description:
    "One senior team accountable for your website: fixes, performance, security, accessibility, and a real improvement every month. Not a maintenance plan.",
  serviceName: "Web Partner",
  serviceDescription:
    "Ongoing senior care for a website: fixes, change requests, performance, security, accessibility, a monthly improvement, and visibility tracking. Not a maintenance plan.",
  eyebrow: "WEB PARTNER",
  h1: "A web partner, not a maintenance plan.",
  intro: [
    "Updates and backups are the floor. What you are paying for is one senior person who knows your site, answers when you ask, and makes it better every month.",
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
        "A monthly check of how often assistants name you",
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
        {
          title: "Fractional Digital Lead.",
          body: "For organizations that need someone to own digital, not just maintain it. A few hours a week on roadmap, vendors, analytics, and direction for your staff, with Web Partner Plus included.",
        },
      ],
    },
    {
      heading: "How it starts",
      kind: "paragraphs",
      items: [
        "Most clients start with a Snapshot or a project. Every project we finish includes 30 days of care, so you see how we work before you commit. Plans start with three months, then run month to month with 30 days' notice.",
      ],
    },
  ],
  // "What platforms do you work on?" is an open slot in the copy deck and is
  // left out until Drew confirms the list.
  faq: [
    {
      question: "What counts as a change request?",
      answer:
        "Anything you would otherwise email a developer about: new pages, copy and image changes, forms, fixes, small features. If something is bigger than a month's allowance, we quote it separately before starting.",
    },
    {
      question: "Who does the work?",
      answer:
        "Andrew Johnston leads every account. A senior developer and a creative director join when the work calls for them.",
    },
  ],
};
