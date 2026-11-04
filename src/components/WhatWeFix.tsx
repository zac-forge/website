import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUpSmall } from "../lib/motion";
import { BRAND_SYSTEM } from "../lib/flags";

type Fix = { title: string; line: string; link?: { label: string; href: string } };

/**
 * Six short rows, each one line plus a link, from docs/site-copy-v5.md.
 * Brand system links only when its page is live; with the flag off it is
 * plain text, as the deck's slot says.
 */
const FIXES: Fix[] = [
  {
    title: "AI Visibility.",
    line: "Get named when customers ask ChatGPT, Google, or Perplexity who to call.",
    link: { label: "More", href: "/ai-visibility" },
  },
  {
    title: "Rescue.",
    line: "A site or app built quickly with AI tools, finished and made solid, or rebuilt if it can't be saved.",
    link: { label: "Ask us", href: "#contact" },
  },
  {
    title: "Accessibility and performance.",
    line: "Fixed in the code, not covered with a widget.",
    link: { label: "More", href: "/accessibility" },
  },
  {
    title: "Brand system.",
    line: "Senior design turned into files your AI tools follow, so everything your team makes looks like you.",
    link: BRAND_SYSTEM ? { label: "More", href: "/brand-system" } : undefined,
  },
  {
    title: "Platform escape.",
    line: "Off the platform you've outgrown, onto something you own.",
    link: { label: "Ask us", href: "#contact" },
  },
  {
    title: "Web Partner.",
    line: "After the fix, one senior team keeps it running and makes it better every month.",
    link: { label: "More", href: "/web-partner" },
  },
];

/**
 * Comp 7's "What we do" draws three columns with gradient marks (211:1268 to
 * 211:1323) for the v4 three-column set. The deck asks for six
 * one-line rows, so the rows are hairline-separated in the THEN and NOW
 * table's style and the marks wait for Misha, question 18.
 */
export function WhatWeFix() {
  return (
    <section id="what-we-fix" className="section what-we-fix" aria-labelledby="what-we-fix-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">04 / What we fix</p>
          <h2 className="h2" id="what-we-fix-heading">
            The bigger fixes, when the check calls for them.
          </h2>
        </Reveal>
        <Reveal stagger={0.06}>
          <ul className="fix-list">
            {FIXES.map((fix) => (
              <motion.li className="fix" key={fix.title} variants={fadeUpSmall}>
                <h3 className="fix-title">{fix.title}</h3>
                <p className="fix-line">{fix.line}</p>
                {fix.link ? (
                  <a className="text-link fix-link" href={fix.link.href}>
                    <span>{fix.link.label}</span>
                    <span aria-hidden="true">→</span>
                    <span className="sr-only">: {fix.title.replace(/\.$/, "")}</span>
                  </a>
                ) : (
                  <span className="fix-link" aria-hidden="true" />
                )}
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
