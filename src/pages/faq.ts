import type { Faq } from "./offers";

/**
 * The site FAQ, written for the home page (Drew, 2026-11-13) and moved to
 * its own page at /faq (Drew, 2026-11-17). One list for the visible page
 * (src/pages/FaqPage.tsx) and its FAQPage schema, so the two cannot diverge.
 * `group` puts each question under a heading with a jump link on the page
 * (2026-11-22). Groups are runs of neighbours, so the order never changes.
 */
export const FAQ: (Faq & { group: string })[] = [
  {
    group: "Cost",
    question: "What does it cost?",
    answer:
      "The Reality Check is free. The Fix is one week at one price, agreed after the scorecard and before we start. If it isn't fixed, it's free. Bigger work is quoted as its own project. You can also take the scorecard and fix it yourself.",
  },
  {
    group: "The work",
    question: "I didn't build it with AI. Can you still check it?",
    answer: "Yes. The same 5 questions apply whether AI, an agency, or a freelancer built it.",
  },
  {
    group: "The work",
    question: "Who does the work?",
    answer:
      "The people you talk to: Andrew, our design principal, and our principal engineer. There's no junior team to hand it to.",
  },
  {
    group: "The work",
    question: "Do you use AI?",
    answer:
      "Yes. It makes a senior person faster. It doesn't replace their judgment, and nothing ships until one of us has checked it.",
  },
  {
    group: "The work",
    question: "What if it can't be fixed, or I'm starting from nothing?",
    answer:
      "We'll tell you. Then we'll quote a new build, done properly from the ground up, that you own outright.",
  },
  {
    group: "Ownership",
    question: "Do I own what you build?",
    answer:
      "Yes. The code, the accounts, and the files are yours. If you stop working with us, you keep all of it.",
  },
  {
    group: "Accessibility",
    question: "Will my site be legally accessible after you fix it?",
    answer:
      "We fix to WCAG 2.1 AA, the standard the federal rules name, test with real assistive technology, and document what we did. We're not lawyers and can't certify legal compliance. You'll have the record to show your work.",
  },
];
