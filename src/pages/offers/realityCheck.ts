import type { Offer } from "./types";

/** Copy from docs/site-copy-v5.md, "/reality-check". */
export const realityCheck: Offer = {
  path: "/reality-check",
  navTitle: "The Reality Check",
  summary: "Send us what you built. We'll tell you straight.",
  title: "The Reality Check | ZAC Forge",
  description:
    "Built something with AI? A free 5-question check by senior people, not a scanner. Plain-English scorecard and what a fix would take.",
  serviceName: "The Reality Check",
  serviceDescription:
    "A free 5-question check on anything built with AI tools or inherited: does it work, is it fast, can everyone use it, can anyone find it, does it look like you. One page in plain English with the evidence and what a fix would take. Checked by people, not software.",
  eyebrow: "THE REALITY CHECK",
  h1: "Send us what you built. We'll tell you straight.",
  intro: [
    // The deck has "Nothing automated; a person reads it." Split at the
    // semicolon, per the voice rules in CLAUDE.md.
    "A free look at your site, app, or brand by a senior team. 5 questions, one page, no obligation. Nothing automated. A person reads it.",
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
        { title: "Can everyone use it?", body: "Keyboard, screen reader, WCAG 2.2 AA." },
        {
          title: "Can anyone find it?",
          body: "What ChatGPT, Google, and Perplexity say when a customer asks. Screenshots.",
        },
        { title: "Does it look like you?", body: "Our design principal's read." },
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
        { title: "We check it.", body: "A few days. We don't touch anything." },
        { title: "You read the scorecard and decide." },
      ],
    },
  ],
  faq: [
    {
      question: "Why is it free?",
      answer:
        "It's how we find out whether we can help. If we can, we quote the fix. If we can't, we say so.",
    },
    {
      question: "Is it automated?",
      answer:
        "No. Tools measure speed and accessibility. People read the results, test the sign-in, ask ChatGPT the questions your customers ask, and look at the design.",
    },
    {
      question: "What can you check?",
      answer: "Websites, web apps, mobile apps, landing pages, brand work, workflows.",
    },
    {
      question: "Do I need to give you access?",
      answer:
        "A link is enough for most of it. Code access lets us check question 1 properly. We don't change anything.",
    },
    { question: "What if it's fine?", answer: "Then the scorecard says so." },
  ],
  cta: { label: "Get a free Reality Check", href: "#contact" },
  form: true,
};
