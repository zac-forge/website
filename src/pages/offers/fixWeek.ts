import { REALITY_CHECK_LABEL } from "../../lib/links";
import type { Offer, FixExample } from "./types";

/**
 * The paid week, named the Fix Week again in the copy pass of 2026-11-06.
 * Since 2026-11-12 its short label is "The Fix" in the nav, footer,
 * eyebrows, and the page title; body copy keeps "Fix Week" where it
 * describes the offer, and the schema carries both names.
 * functions/worker.ts 301s the route it had for a day back to this one.
 */
/**
 * "Things we've fixed", held as sentences so the home Fix section and this
 * page read one source. Each sentence is on the problem or the outcome side
 * of its card. The home section shows only those marked `home`, shortened
 * by dropping whole sentences, never by rewording (Drew's pass 1 handoff,
 * 2026-11-22). This page shows every sentence. The home intro is this page's
 * intro up to the colon.
 */
const FIX_LEAD = "One week, one set budget, aimed at the top items from your Reality Check";
type Sentence = { text: string; side: "problem" | "outcome"; home: boolean };
const FIX_EXAMPLES: Sentence[][] = [
  [
    { text: "A site built to serve people with disabilities had a carousel that trapped screen readers.", side: "problem", home: true },
    { text: "Visually impaired visitors couldn't get past it to the content they came for.", side: "problem", home: false },
    { text: "We fixed it.", side: "outcome", home: true },
  ],
  [
    { text: "A client's site was getting hacked and kept going down when we took it over.", side: "problem", home: true },
    { text: "We moved it to new servers, upgraded the backend and closed the security holes.", side: "outcome", home: false },
    { text: "It has been stable for over 10 years.", side: "outcome", home: true },
  ],
  [
    { text: "Small businesses came to us with little or no SEO strategy.", side: "problem", home: true },
    { text: "We got them ranked and pulling traffic within 90 days.", side: "outcome", home: true },
  ],
];
const split = (sentences: Sentence[]): FixExample => ({
  problem: sentences.filter((s) => s.side === "problem").map((s) => s.text).join(" "),
  outcome: sentences.filter((s) => s.side === "outcome").map((s) => s.text).join(" "),
});
const FIX_EXAMPLES_HEADING = "Things we've fixed";
export const FIX_GUARANTEE = "If it isn't fixed, it's free.";
export const FIX_HOME = {
  intro: `${FIX_LEAD}.`,
  examplesHeading: FIX_EXAMPLES_HEADING,
  examples: FIX_EXAMPLES.map((e) => split(e.filter((s) => s.home))),
};

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
  // Drew's copy handoff of 2026-11-18: the intro, the examples, and the
  // guarantee on its own line. The "peace of mind" close was cut from this
  // page and from home on 2026-11-22 (pass 1 handoff).
  intro: [`${FIX_LEAD}: the critical things that can be done in a week.`],
  blocks: [
    {
      heading: FIX_EXAMPLES_HEADING,
      // The home page's before-and-after cards at full length, then the
      // guarantee as the full-width statement.
      kind: "examples",
      items: FIX_EXAMPLES.map(split),
      statement: FIX_GUARANTEE,
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
    // The home page's Rescue card, moved here word for word when the home
    // Partner section went from six cards to four (pass 1 handoff, 2026-11-22).
    {
      heading: "Rescue",
      kind: "paragraphs",
      items: [
        "Finish what AI started and make it safe to run. If it can't be saved, we build it properly from the ground up.",
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
  cta: { label: REALITY_CHECK_LABEL, href: "/#contact" },
};
