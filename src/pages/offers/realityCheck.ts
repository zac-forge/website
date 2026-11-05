import type { Offer } from "./types";

/** Copy from docs/site-copy-v5.md, "/reality-check". */
export const realityCheck: Offer = {
  path: "/reality-check",
  navTitle: "The Reality Check",
  summary: "Send us what you built. We'll tell you straight.",
  title: "The Reality Check | ZAC Forge",
  description:
    "Built something with AI and it half works? Send it to us. A free five-question check, in plain English, with what it would take to put right.",
  serviceName: "The Reality Check",
  serviceDescription:
    "A free five-question check on anything built with AI tools or inherited: does it work, is it fast, can everyone use it, can anyone find it, does it look like you or like AI. One short scorecard in plain English with the evidence and what putting it right would take.",
  eyebrow: "THE REALITY CHECK",
  h1: "Send us what you built. We'll tell you straight.",
  intro: [
    "Everyone can build a site, an app, or a brand now. Most of it half works. You already suspect yours does, or you wouldn't be here. The Reality Check is a free, honest look at it from a senior team. Five questions, one short scorecard, no obligation.",
  ],
  blocks: [
    {
      heading: "What we check",
      kind: "numbered",
      items: [
        {
          title: "Does it work?",
          body: "We try to break it. Sign-in, forms, payments, data, and what happens when something fails. We read the code if you give us access.",
        },
        {
          title: "Is it fast?",
          body: "Load time and Core Web Vitals, measured on a real phone and a real connection.",
        },
        {
          title: "Can everyone use it?",
          body: "Keyboard only, then a screen reader, against WCAG 2.2 AA.",
        },
        {
          title: "Can anyone find it?",
          body: "We ask ChatGPT, Google, and Perplexity the questions your customers ask and show you who gets named. Often it's not you.",
        },
        {
          title: "Does it look like you, or like AI?",
          body: "Our design principal reads it against your business, and shows what one screen would look like done right.",
        },
      ],
    },
    {
      heading: "What you get",
      kind: "paragraphs",
      items: [
        "A one-page scorecard. Each question gets a verdict in plain English, the evidence, and what putting it right would take. Nothing you need a developer to translate.",
      ],
    },
    {
      heading: "How it works",
      kind: "numbered",
      items: [
        {
          title: "Send it.",
          body: "The form below, or a call if you'd rather talk. A link is enough; access helps.",
        },
        { title: "We check it.", body: "A few days. We don't touch anything." },
        {
          title: "You read the scorecard.",
          body: "Then decide. If you want it handled, the Handoff is the next step. If you don't, you still know where you stand.",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Why is it free?",
      answer:
        "Because the check is how we find out whether we can help. If we can, you'll see it in the scorecard and we'll quote the work. If we can't, we'll say so.",
    },
    {
      question: "Is this a sales pitch?",
      answer:
        "It ends with a quote if there's something worth doing. The scorecard itself is yours either way, and it'll say so when something isn't worth the money.",
    },
    {
      question: "What can you check?",
      answer:
        "Websites, web apps, mobile apps, landing pages, brand work, and automated workflows. If it's software or design and it exists, we can look at it.",
    },
    {
      question: "Do I need to give you access?",
      answer:
        "A link is enough for most of it. Code or admin access lets us check the first question properly. We don't change anything.",
    },
    {
      question: "What if it's fine?",
      answer: "Then the scorecard says so, and you've lost nothing.",
    },
  ],
  cta: { label: "Get a Reality Check", href: "#contact" },
  form: true,
};
