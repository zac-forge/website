import { REALITY_CHECK_LABEL } from "../../lib/links";
import type { Offer } from "./types";

/** Copy from docs/site-copy-v5.md, "/web-partner", amended by the copy pass of 2026-11-06. */
export const webPartner: Offer = {
  path: "/web-partner",
  navTitle: "Web Partner",
  line: "Senior help on call, month to month",
  title: "Web Partner: senior website care, month to month | ZAC Forge",
  // Quoted the old home card line, so it takes the new card copy (2026-11-18).
  description:
    "A flexible team of senior IT professionals who work alongside yours. As much or as little as you need. Month to month, no strings.",
  serviceName: "Web Partner",
  serviceDescription:
    "Ongoing senior care: updates, backups, monitoring, change requests, one improvement a month, and visibility tracking. Not a maintenance plan.",
  heroTitle: "Web Partner",
  heroIcon: { src: "/art/subpage/subpage-icon-web-partner.svg", width: 50, height: 50 },
  accent: "var(--color-offer-web-partner)",
  heroAccent: "var(--color-hero-web-partner)",
  cardIcon: "/art/offer-cards/icon-web-partner.svg",
  eyebrow: "WEB PARTNER",
  h1: "Keep it fixed. Make it better.",
  // Drew's copy handoff of 2026-11-18.
  intro: [
    "A flexible team of senior IT professionals who work alongside yours. As much or as little as you need.",
    "It's for businesses that need more than a quick fix or a review: maintenance, security and accessibility, kept up over the long term.",
    "Design too. We can turn your brand into a design system that your team and your AI tools build from, so what gets made stays on brand. And a senior designer is there when you need a sanity check.",
    "Month to month, or longer if you want. No strings.",
  ],
  // Set as shared callouts since the text cut of 2026-11-22 (Drew): the
  // mechanic line under the intro, and the clients line as the page's proof,
  // its first sentence set large. Both word for word.
  introCallouts: [
    "Having us on call is like having a mechanic you trust, but for your tech. If your nephew's vibe-coded CRM breaks and you lose your customer data, it would be nice to have a number to call.",
  ],
  proofStat: ["Clients tend to stay.", "One for more than 10 years, another for more than five, many for two to five."],
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
      heading: "How it starts",
      kind: "paragraphs",
      items: [
        "Web Partner usually follows a Fix Week, so we already know your site. Every project includes 30 days of care first: we monitor and maintain the work we did, at no charge.",
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
  cta: { label: REALITY_CHECK_LABEL, href: "/#contact" },
};
