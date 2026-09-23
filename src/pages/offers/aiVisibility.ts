import type { Offer } from "./types";

export const aiVisibility: Offer = {
  path: "/ai-visibility",
  row: "01",
  rowTitle: "AI visibility",
  rowStatement: "Get named when customers ask.",
  rowItems: [
    "Real customer questions tested across ChatGPT, Google, Perplexity, and Claude",
    "Crawler access and rendering",
    "Structured data",
    "Pages that answer what customers ask",
    "Reviews, listings, and mentions",
    "Monthly tracking",
  ],
  rowLink: "How the audit works",
  title: "AI Visibility Audit | ZAC Forge",
  description:
    "Find out whether ChatGPT, Google, Perplexity, and Claude recommend your business or your competitors, and what to fix first.",
  serviceName: "AI Visibility",
  serviceDescription:
    "Tests real customer questions across ChatGPT, Google AI Overviews and AI Mode, Perplexity, and Claude. Fixes crawler access, rendering, structured data, answer content, and third-party mentions. Tracks how often the business is named.",
  eyebrow: "AI VISIBILITY",
  h1: "AI visibility: get named when customers ask.",
  intro: [
    "Ask ChatGPT who the best [your category] near you is. It will name a few businesses. We find out whether you are one of them, why or why not, and what to fix first.",
  ],
  blocks: [
    {
      heading: "What we check",
      kind: "numbered",
      items: [
        {
          title: "Can the assistants read your site?",
          body: "Firewall and CDN settings, robots.txt, and whether your content is in the page or only appears after JavaScript runs. Many AI crawlers do not run JavaScript, and some hosting setups block them by default.",
        },
        {
          title: "Do they understand what you are?",
          body: "Structured data for your business, services, people, and location.",
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
          title: "Snapshot.",
          body: "20 real questions, you against three competitors, the crawler check, and the top five fixes. About a week.",
        },
        {
          title: "Full audit.",
          body: "50 questions, up to five competitors, the full technical review, the sources assistants rely on for your category, and a 90-day plan.",
        },
        {
          title: "Fix and track.",
          body: "We make the fixes, then track the same questions every month as part of a Web Partner plan.",
        },
      ],
    },
  ],
  // The hawaii.surf before and after, and the zacforge.com result, are open
  // slots in docs/site-copy-v4.md. Only the sentence that needs no numbers
  // ships until they are filled.
  proof: ["We run the same audit on our own site."],
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
        "Technical fixes can show up within weeks, as assistants re-read your site. Reviews and mentions take longer. We re-test at 30 days and track monthly after that.",
    },
  ],
};
