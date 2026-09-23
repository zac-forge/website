import type { Offer } from "./types";

/**
 * Pending Misha's input. Behind the BRAND_SYSTEM flag in src/lib/flags.ts.
 * The "Who does the work" paragraph and the proof block are open slots in
 * docs/site-copy-v4.md and are left out until he confirms them.
 */
export const brandSystem: Offer = {
  path: "/brand-system",
  row: "04",
  rowTitle: "AI-READY BRAND SYSTEM",
  rowStatement: "Make everything your team generates look like you.",
  rowItems: [
    "Brand direction",
    "Identity and type",
    "Design tokens",
    "Component library",
    "Rules files for AI coding tools",
    "Claude Design, Canva, and Figma kits",
    "Staff training",
  ],
  rowLink: "How the brand system works",
  flagged: true,
  title: "AI-Ready Brand System | ZAC Forge",
  description:
    "A brand system your AI tools follow. Senior design, turned into tokens, components, and kits so every page, post, and deck your team makes looks like you.",
  serviceName: "AI-Ready Brand System",
  serviceDescription:
    "Senior brand design turned into design tokens, components, rules files for AI coding tools, and Claude Design, Canva, and Figma kits, so AI-made work stays on brand.",
  eyebrow: "AI-READY BRAND SYSTEM",
  h1: "A brand system your AI tools follow.",
  intro: [
    "Your team already makes pages, posts, and decks with AI. Without a system, every tool falls back on the same defaults: the same fonts, the same icons, the same gradients. The result looks like everyone else. A brand system is how you stop that.",
  ],
  blocks: [
    {
      heading: "Why design matters more now",
      kind: "paragraphs",
      items: [
        "Generators produce the average of what they have seen. Taste is what moves the work away from the average, and a system is how taste gets written down so the tools can follow it. One well-made system now governs thousands of AI-made pieces. That makes senior design more valuable, not less.",
      ],
    },
    {
      heading: "What you get",
      kind: "bullets",
      items: [
        "A sharpened or rebuilt identity: mark, type, color, and voice",
        "Design tokens for color, type, spacing, and radius, with color contrast measured for accessibility",
        "A component library and page templates",
        "Rules files that keep AI coding tools such as Claude Code and Cursor on brand",
        "Ready-to-import kits for Claude Design, Canva, and Figma",
        "A tested prompt library, and a working session with your team",
      ],
    },
    {
      heading: "How it works",
      kind: "numbered",
      items: [
        {
          title: "Brand Direction Review.",
          body: "We review your site and 10 to 20 recent pieces, show where they read generic, and deliver a one-page direction with one redesigned key screen or asset. About a week.",
        },
        {
          title: "The system.",
          body: "Design first, then the files your tools read. Three to eight weeks, depending on whether the identity is sharpened or rebuilt.",
        },
        {
          title: "Keep it current.",
          body: "As part of a Web Partner plan, we review what your team makes each month, add templates, and update the system as the tools change.",
        },
      ],
    },
  ],
  faq: [
    {
      question: "We already have a logo and brand guidelines. Is this for us?",
      answer:
        "Probably. Most guidelines are a PDF written for people. This turns your existing brand into files your tools read every time they make something. We only rebuild the identity if it needs it.",
    },
    {
      question: "Which tools does it work with?",
      answer: "Claude Design, Canva, Figma, and AI coding tools such as Claude Code and Cursor.",
    },
    {
      question: "Will our team need to learn anything new?",
      answer:
        "One working session. After that, they use the tools they already use, and the output comes back on brand.",
    },
  ],
};
