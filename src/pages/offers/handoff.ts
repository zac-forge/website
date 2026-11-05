import type { Offer } from "./types";

/**
 * Renamed in the copy pass of 2026-11-05. functions/worker.ts redirects the
 * old route here with a 301, and is the only place the old name remains.
 */
export const handoff: Offer = {
  path: "/handoff",
  navTitle: "The Handoff",
  summary: "You hand it to us. We hand it back working.",
  title: "The Handoff | ZAC Forge",
  description:
    "One week, one agreed price. We take the worst thing on your Reality Check scorecard off your plate, redesign the screen that looks most like AI made it, and rank what's left.",
  serviceName: "The Handoff",
  serviceDescription:
    "One week, one agreed price. The worst thing on the scorecard resolved, one screen redesigned so it looks like the client and not like AI, and a ranked list of what is left.",
  eyebrow: "THE HANDOFF",
  h1: "You hand it to us. We hand it back working.",
  intro: [
    "The Handoff is what follows a Reality Check when something needs work. One week, one price agreed before we start, and three things in your hands at the end of it.",
  ],
  blocks: [
    {
      heading: "What you get",
      kind: "numbered",
      items: [
        {
          title: "The worst thing, done.",
          body: "Whatever the scorecard put at the top: the sign-in that fails, the form that drops submissions, the page that takes nine seconds, the site ChatGPT can't read. Resolved in your code, tested, and documented.",
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
          body: "Before and after, side by side. The code is yours. 30 days of care after, so you see how we work before you commit to anything ongoing.",
        },
      ],
    },
    {
      heading: "After the week",
      kind: "paragraphs",
      items: [
        "Most clients either take one or two more items off the ranked list, or move to a Web Partner plan so it stays that way. Some do neither. The list is yours regardless.",
      ],
    },
  ],
  faq: [
    {
      question: "What if the worst thing won't fit in a week?",
      answer:
        "Then we say so during scoping and quote it as its own project instead. The Handoff is for work that fits in a week. We don't stretch it.",
    },
    {
      question: "Can I pick which thing gets done?",
      answer: "Yes, if it's on the scorecard. We'll tell you if we'd pick differently and why.",
    },
    {
      question: "Do you need access to everything?",
      answer:
        "To the code and hosting for the work, and to your brand assets for the redesign. We don't touch anything outside the agreed scope.",
    },
    {
      question: "Who does the work?",
      answer:
        "Andrew Johnston, with a principal engineer when it calls for one. Our design principal on the redesign. The people you talk to.",
    },
  ],
  cta: { label: "Start with a Reality Check", href: "/#contact" },
};
