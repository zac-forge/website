import type { Offer } from "./types";

/**
 * The paid week, named the Fix Week again in the copy pass of 2026-11-06.
 * Since 2026-11-12 its short label is "The Fix" in the nav, footer,
 * eyebrows, and the page title; body copy keeps "Fix Week" where it
 * describes the offer, and the schema carries both names.
 * functions/worker.ts 301s the route it had for a day back to this one.
 */
export const fixWeek: Offer = {
  path: "/fix-week",
  navTitle: "The Fix",
  summary: "One week. Start with what matters most.",
  title: "Fix an AI-built website in one week, fixed price | ZAC Forge",
  description:
    "One week, one agreed price. We fix the top problem on your Reality Check scorecard in your code and rank the rest. If it isn't fixed, it's free.",
  serviceName: "The Fix Week",
  serviceAlternateName: "The Fix",
  serviceDescription:
    "One week, one agreed price. The top item on the Reality Check scorecard resolved in the client's code, a design review of the screen that looks most machine-made, and a ranked list of what is left. If it isn't fixed, it's free.",
  heroTitle: "The Fix",
  heroIcon: { src: "/art/subpage/subpage-icon-fix.svg", width: 41, height: 54 },
  accent: "var(--color-offer-fix)",
  heroAccent: "var(--color-hero-fix)",
  cardIcon: "/art/offer-cards/icon-fix.svg",
  eyebrow: "THE FIX",
  h1: "One week. Start with what matters most.",
  // Drew's copy handoff of 2026-11-18, which the home Fix section renders
  // too: the intro, the examples, the guarantee on its own line, the close.
  intro: [
    "One week, one set budget, aimed at the top items from your Reality Check: the critical things that can be done in a week.",
  ],
  blocks: [
    {
      heading: "Things we've fixed",
      kind: "paragraphs",
      items: [
        "A site built to serve people with disabilities had a carousel that trapped screen readers. Visually impaired visitors couldn't get past it to the content they came for. We fixed it.",
        "A client's site was getting hacked and kept going down when we took it over. We moved it to new servers, upgraded the backend and closed the security holes. It has been stable for over 10 years.",
        "Small businesses came to us with little or no SEO strategy. We got them ranked and pulling traffic within 90 days.",
      ],
      outro: [
        "If it isn't fixed, it's free.",
        "You walk away with peace of mind. You know what you have, how to maintain it, and that an AI mistake isn't leaving you exposed.",
      ],
    },
    {
      heading: "What you get",
      kind: "numbered",
      items: [
        {
          title: "The top problem, fixed.",
          body: "In your code, tested, and written up so the next developer can follow it.",
        },
        {
          title: "A design review.",
          body: "One page from our design principal on the screen that looks most machine-made, with 5 specific fixes. We apply the first one if it fits the week.",
        },
        {
          title: "The rest, ranked.",
          body: "Everything else on the scorecard, in order, with what each would take to fix. Do it with us, do it in-house, or skip it. Some of it won't be worth doing.",
        },
      ],
    },
    {
      heading: "How the week runs",
      kind: "titled",
      items: [
        { title: "Day 1.", body: "Scope and price in writing." },
        { title: "Days 2 to 4.", body: "The work, in your code." },
        {
          title: "Day 5.",
          body: "Before and after, side by side. For 30 days after, we monitor and maintain the work we did, at no charge.",
        },
      ],
    },
    {
      heading: "After the week",
      kind: "paragraphs",
      items: [
        "Take another item off the list, move to Web Partner, or stop there. The list is yours.",
      ],
    },
  ],
  faq: [
    {
      question: "What if the top item won't fit in a week?",
      answer: "We say so during scoping and quote it as its own project.",
    },
    {
      question: "Do you build from scratch?",
      answer:
        "Yes. If what you have isn't worth saving, or you have nothing yet, we build it properly from the ground up. A new build doesn't fit in a week, so we quote it as its own project. You own all of it.",
    },
    {
      question: "Can I pick the item?",
      answer: "If it's on the scorecard, yes. If we'd pick differently, we'll say why.",
    },
    {
      question: "What if the fix doesn't work?",
      answer:
        'Then it\'s free. On day 1 we agree in writing what "fixed" means. If we don\'t get there, you don\'t pay.',
    },
    {
      question: "What do you need from me?",
      answer: "Access to the code and hosting, and your logo, fonts, and colors if you have them.",
    },
    {
      question: "Who does the work?",
      answer:
        "Andrew Johnston, with a principal engineer when the work calls for one, and our design principal on the design review. The people you talk to.",
    },
    { question: "No scorecard yet?", answer: "Start with the free Reality Check." },
  ],
  cta: { label: "Start with a Reality Check", href: "/#contact" },
};
