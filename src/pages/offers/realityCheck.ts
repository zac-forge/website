import type { Offer } from "./types";

/**
 * The intro lines the home Check section keeps since the cut of 2026-11-22
 * (Drew's pass 1 handoff): the first paragraph, and the first two sentences
 * of the third. Held here so home and /reality-check read one source.
 */
const RC_WHAT = "A senior review of your project for anything that's broken, AI or otherwise.";
const RC_REPORT = "You get a prioritized report of what's broken and how to fix it. It's free.";
export const RC_HOME_INTRO = [RC_WHAT, RC_REPORT];

/** Copy from docs/site-copy-v5.md, "/reality-check". */
export const realityCheck: Offer = {
  path: "/reality-check",
  navTitle: "The Reality Check",
  summary: "Send us what you built. We'll tell you straight.",
  title: "Reality Check: free review of AI-built websites | ZAC Forge",
  description:
    "A free senior review of your project for anything that's broken, AI or otherwise.",
  serviceName: "The Reality Check",
  serviceDescription:
    "A free senior review of a project for anything that's broken, AI or otherwise, against 5 questions: does it work, is it fast, can everyone use it, can anyone find it, does it look like you. A prioritized report of what's broken and how to fix it.",
  heroTitle: "Reality Check",
  heroIcon: { src: "/art/subpage/subpage-icon-reality-check.svg", width: 49, height: 48 },
  accent: "var(--color-offer-reality-check)",
  heroAccent: "var(--color-hero-reality-check)",
  cardIcon: "/art/offer-cards/icon-reality-check.svg",
  eyebrow: "THE REALITY CHECK",
  h1: "Send us what you built. We'll tell you straight.",
  // Drew's copy handoff of 2026-11-18. The home Check section rendered all
  // three paragraphs until 2026-11-22 and now shows RC_HOME_INTRO only.
  intro: [
    RC_WHAT,
    "It's for the owner who bit off more than they could chew, and for the bigger company that doesn't have the tech skills in house to fix or modernize something.",
    `${RC_REPORT} We're confident in what we do and happy to show it first. No strings attached.`,
  ],
  blocks: [
    {
      heading: "What we check",
      kind: "numbered",
      items: [
        {
          title: "Does it work?",
          body: "Sign-in, forms, data, and what happens when it fails. We read the code if you give us access.",
        },
        { title: "Is it fast?", body: "Measured on a real phone." },
        {
          title: "Can everyone use it?",
          body: "Tested by hand with a keyboard and a screen reader, against WCAG 2.2 AA, the published standard.",
        },
        {
          title: "Can anyone find it?",
          body: "What ChatGPT, Google, and Perplexity say when a customer asks for someone like you.",
        },
        {
          title: "Does it look like you?",
          body: "Whether it looks like your business or like a template. Our design principal makes the call.",
        },
      ],
    },
    {
      heading: "What you get",
      kind: "paragraphs",
      items: [
        "One page. A verdict on each question, the evidence, and what a fix would take. Nothing you need a developer to translate.",
      ],
    },
    {
      heading: "How it works",
      kind: "numbered",
      items: [
        { title: "Send it.", body: "A link is enough." },
        { title: "Give us a few days.", body: "Nothing on your site changes." },
        {
          title: "You read the scorecard and decide.",
          body: "Fix it with us, fix it yourself, or leave it. The scorecard is yours either way.",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Why is it free?",
      answer:
        "Because it's how we meet clients. You see how we work before you spend anything. If we can help, you get a quote. If we can't, we say so.",
    },
    {
      question: "Is it automated?",
      answer:
        "No. Tools measure speed and accessibility. People read the results, test the sign-in, ask ChatGPT the questions your customers ask, and look at the design.",
    },
    {
      question: "What can you check?",
      answer: "Websites, web apps, mobile apps, landing pages, and brand work. Built with AI or not.",
    },
    {
      question: "Do I need to give you access?",
      answer:
        "A link covers most of it. Code access gets you a full answer on question 1. Nothing on your end changes.",
    },
    { question: "What if it's fine?", answer: "Then the scorecard says so." },
  ],
  cta: { label: "FREE Reality Check", href: "#contact" },
  form: true,
};
