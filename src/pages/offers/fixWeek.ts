import type { Offer } from "./types";

/** Copy from docs/site-copy-v5.md, "/fix-week". */
export const fixWeek: Offer = {
  path: "/fix-week",
  navTitle: "The Fix Week",
  summary: "One week. The worst thing fixed. One screen done right.",
  title: "The Fix Week | ZAC Forge",
  description:
    "One week, fixed price. We fix the worst thing on your Reality Check scorecard, redesign the one screen that looks most like AI made it, and rank what's left.",
  serviceName: "The Fix Week",
  serviceDescription:
    "One week, fixed price. The worst thing on the scorecard fixed, one screen redesigned so it looks like the client and not like AI, and a ranked list of what is left.",
  eyebrow: "THE FIX WEEK",
  h1: "One week. The worst thing fixed. One screen done right.",
  intro: [
    "The Fix Week is what follows a Reality Check when something needs fixing. One week, one fixed price agreed before we start, and three things at the end of it.",
  ],
  blocks: [
    {
      heading: "What you get",
      kind: "numbered",
      items: [
        {
          title: "The worst thing, fixed.",
          body: "Whatever the scorecard put at the top: the broken sign-in, the form that drops submissions, the page that takes nine seconds, the site ChatGPT can't read. Fixed in your code, tested, and documented.",
        },
        {
          title: "One screen redesigned.",
          body: "The page or screen that looks most like AI made it, redesigned by our design principal so it looks like you. Built when it fits in the week; otherwise delivered ready to build.",
        },
        {
          title: "A ranked list of what's left.",
          body: "Everything else from the scorecard, in order, with what each one would take. So you can decide what's next, or do some of it yourself.",
        },
      ],
    },
    {
      heading: "How it works",
      kind: "numbered",
      items: [
        {
          title: "Scope.",
          body: "From the scorecard, we agree what “the worst thing” is and what the price is. Both in writing before day one.",
        },
        { title: "The week.", body: "Five business days. You see progress as it happens." },
        {
          title: "Handover.",
          body: "Before and after, side by side. The code is yours. Thirty days of care after, so you see how we work before you commit to anything ongoing.",
        },
      ],
    },
    {
      heading: "After the week",
      kind: "paragraphs",
      items: [
        "Most clients either take one or two more items off the ranked list, or move to a Web Partner plan so it stays fixed. Some do neither. The list is yours regardless.",
      ],
    },
  ],
  faq: [
    {
      question: "What if the worst thing can't be fixed in a week?",
      answer:
        "Then we say so in the scoping and quote it as its own project instead. The Fix Week is for things that fit in a week; we don't stretch it.",
    },
    {
      question: "Can I pick which thing gets fixed?",
      answer: "Yes, if it's on the scorecard. We'll tell you if we'd pick differently and why.",
    },
    {
      question: "Do you need access to everything?",
      answer:
        "To the code and hosting for the fix, and to your brand assets for the redesign. We don't touch anything outside the agreed scope.",
    },
    {
      question: "Who does the work?",
      answer:
        "Andrew Johnston on the fix, with a principal engineer when it calls for one. Our design principal on the redesign. The people you talk to.",
    },
  ],
  cta: { label: "Start with a Reality Check", href: "/reality-check" },
};
