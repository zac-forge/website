import type { Offer } from "./types";

export const aiVisibility: Offer = {
  path: "/ai-visibility",
  navTitle: "AI Visibility",
  // The home card's lines (2026-11-18).
  summary:
    "Does your business show up when people ask ChatGPT, Claude or Grok? We set your site up so AI can find it and name it. No promises.",
  title: "AI Visibility: get named by ChatGPT and Google AI | ZAC Forge",
  description:
    "Find out whether ChatGPT, Google, Perplexity, and Claude recommend your business or your competitors, and what to fix first.",
  serviceName: "AI Visibility",
  serviceDescription:
    "Tests real customer questions across ChatGPT, Google AI Overviews and AI Mode, Perplexity, and Claude. Fixes crawler access, rendering, structured data, answer content, and third-party mentions. Tracks how often the business is named.",
  heroTitle: "AI Visibility",
  heroIcon: { src: "/art/subpage/subpage-icon-ai-visibility.svg", width: 45, height: 49 },
  accent: "var(--color-offer-ai-visibility)",
  heroAccent: "var(--color-hero-ai-visibility)",
  cardIcon: "/art/offer-cards/icon-ai-visibility.svg",
  eyebrow: "AI VISIBILITY",
  h1: "AI Visibility: get named when customers ask.",
  subline:
    "Question 4 on our free [Reality Check](/reality-check) tells you whether you have this problem. This page is the fix.",
  // Drew's copy handoff of 2026-11-18. "No promises." is deliberate.
  intro: [
    "Does your business show up when people ask ChatGPT, Claude or Grok?",
    "We set your site up so AI can find it and name it. No promises. It's a moving target. But you need a strategy, and it matters more every month.",
  ],
  blocks: [
    {
      heading: "What we check",
      kind: "numbered",
      items: [
        {
          title: "Can the assistants read your site?",
          body: "Some hosting setups block AI crawlers by default, and many crawlers can't read content that only appears after JavaScript runs. We check your firewall, CDN, and robots.txt settings, and what's actually in the page.",
        },
        {
          title: "Do they understand what you are?",
          body: "Structured data is a label in your code that tells a machine your business name, services, people, and location. We check that it's there and that it's right.",
        },
        {
          title: "Do you answer the questions customers ask?",
          body: "Pages built around real questions, in your customers' words, with facts an assistant can quote.",
        },
        {
          title: "What do other sites say about you?",
          body: "Reviews, directories, your Google Business Profile, press, and forums. Assistants lean on these.",
        },
        {
          title: "How often are you named?",
          body: "The same questions, run repeatedly across four assistants, with every answer saved.",
        },
      ],
    },
    {
      heading: "How it works",
      kind: "numbered",
      items: [
        {
          title: "Reality Check.",
          body: "We ask ChatGPT, Google, and Perplexity the questions your customers ask and show you who gets named. Free.",
        },
        {
          title: "The work.",
          body: "Crawler access, structured data, answer pages, and third-party mentions, done in order of what will change the answers most. Quoted after the check.",
        },
        {
          title: "Track.",
          body: "The same questions every month as part of a Web Partner plan.",
        },
      ],
    },
  ],
  // Drew, 2026-11-13. The hawaii.surf before and after, and the zacforge.com
  // result, are still open slots.
  proof: [
    "This is a new offer, and we don't have a client result to publish yet. We run the same check on our own site. When we have a before and after worth showing, it goes here.",
  ],
  faq: [
    {
      question: "Can you guarantee we will be recommended?",
      answer:
        "No. Assistants change their answers from one run to the next, and anyone who guarantees placement is guessing. We measure how often you are named across repeated runs and improve what drives it.",
    },
    {
      question: "Is this SEO with a new name?",
      answer:
        "Part of it overlaps, and good search foundations still matter. The difference is that assistants read your site differently. Many cannot run JavaScript, some are blocked by default settings, and they rely heavily on reviews, listings, and what other sites say about you.",
    },
    {
      question: "Do we need to write a lot of new content?",
      answer:
        "Usually not. Most of the gain comes from technical access, structured data, and a handful of pages that answer the questions your customers actually ask.",
    },
    {
      question: "Which assistants do you test?",
      answer: "ChatGPT, Google AI Overviews and AI Mode, Perplexity, and Claude.",
    },
    {
      question: "How long before anything changes?",
      answer:
        "Technical fixes can show up within weeks, as assistants re-read your site. Reviews and mentions take longer. We check again at 30 days and track monthly after that.",
    },
  ],
  cta: { label: "Start with a Reality Check", href: "/#contact" },
};
