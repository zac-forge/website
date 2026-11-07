import type { Offer } from "./types";

/**
 * The paid week, named the Fix Week again in the copy pass of 2026-11-06.
 * functions/worker.ts 301s the route it had for a day back to this one.
 */
export const fixWeek: Offer = {
  path: "/fix-week",
  navTitle: "The Fix Week",
  summary: "One week. Start with what matters most.",
  title: "The Fix Week | ZAC Forge",
  description:
    "One week, one agreed price. The top item on your Reality Check scorecard resolved in your code, a Design Read on the screen that most looks machine-made, and the rest ranked.",
  serviceName: "The Fix Week",
  serviceDescription:
    "One week, one agreed price. The top item on the Reality Check scorecard resolved in the client's code, a Design Read on the screen that most looks machine-made, and a ranked list of what is left.",
  eyebrow: "THE FIX WEEK",
  h1: "One week. Start with what matters most.",
  intro: [
    "AI got it as far as it could. The Fix Week is where a senior team takes it from here. One price, agreed before day one.",
  ],
  blocks: [
    {
      heading: "What you get",
      kind: "numbered",
      items: [
        { title: "The top item, resolved.", body: "In your code, tested, documented." },
        {
          title: "A Design Read.",
          body: "One page from our design principal on the screen that most looks machine-made: 5 specific fixes, the first one applied if it fits the week.",
        },
        {
          title: "The rest, ranked.",
          body: "Everything else on the scorecard with what each takes. Do it with us, in-house, or not at all.",
        },
      ],
    },
    {
      heading: "How the week runs",
      kind: "titled",
      items: [
        { title: "Day 1.", body: "Scope and price in writing." },
        { title: "Days 2 to 4.", body: "The work, in your repo." },
        { title: "Day 5.", body: "Before and after, side by side. 30 days of care after." },
      ],
    },
    {
      heading: "After the week",
      kind: "paragraphs",
      items: [
        "Most clients take another item off the list or move to Web Partner. Some do neither. The list is yours.",
      ],
    },
  ],
  faq: [
    {
      question: "What if the top item won't fit in a week?",
      answer: "We say so during scoping and quote it as its own project.",
    },
    {
      question: "Can I pick the item?",
      answer: "If it's on the scorecard, yes. If we'd pick differently, we'll say why.",
    },
    {
      question: "What do you need from me?",
      answer: "Access to the code and hosting, and your brand assets.",
    },
    {
      question: "Who does the work?",
      answer:
        "Andrew Johnston, with a principal engineer when the work calls for one, and our design principal on the Design Read. The people you talk to.",
    },
    { question: "No scorecard yet?", answer: "Start with the free Reality Check." },
  ],
  cta: { label: "Start with a Reality Check", href: "/#contact" },
};
