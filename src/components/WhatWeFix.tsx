import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Callout } from "./Callout";
import { fadeUpSmall } from "../lib/motion";

type Fix = { title: string; line: string; link: { label: string; href: string } };

/**
 * Four cards since the cut of 2026-11-22 (Drew's pass 1 handoff), down from
 * six: a title, one line, and the card's existing link. The lines are the
 * handoff's, the header menu's subtext for each offer. The paragraph copy
 * each card carried is on its offer's own page. The Rescue card's text moved
 * to /fix-week, and the Brand system card is gone (/web-partner covers the
 * design system offer).
 */
const LEAD: Fix = {
  title: "Web Partner",
  line: "Senior help on call, month to month",
  link: { label: "See Web Partner", href: "/web-partner" },
};
const FIXES: Fix[] = [
  {
    title: "AI Visibility",
    line: "Show up when people ask AI. No promises.",
    link: { label: "See AI Visibility", href: "/ai-visibility" },
  },
  {
    title: "Platform Escape",
    line: "Off WordPress or Wix, onto something you own",
    link: { label: "See Platform Escape", href: "/platform-escape" },
  },
  {
    title: "Accessibility",
    line: "Works for everyone. Ready for the 2027 deadline.",
    link: { label: "See Accessibility", href: "/accessibility" },
  },
];

function Card({ fix, lead = false }: { fix: Fix; lead?: boolean }) {
  return (
    <>
      <h3 className="fix-title">{fix.title}</h3>
      <p className={`fix-line ${lead ? "copy" : "case-text"}`}>{fix.line}</p>
      <a className="btn btn-secondary fix-link" href={fix.link.href}>
        <span>{fix.link.label}</span>{" "}
        <span aria-hidden="true">→</span>
      </a>
    </>
  );
}

/**
 * Partner, the third step of the page's spine, on the blue band 394:1893
 * (cut top left, curve bottom right), MB11 376:1756 and 376:1755. Web
 * Partner leads, larger, with the callout from the removed How we work
 * section's Partner step beside it. The other three stack to its right. On
 * the band the heading and lines are white (4.51:1) and the titles yellow at
 * 24px bold and up (3.13:1, large text). The band's dotted line art was
 * drawn for the six-card grid and is not used.
 */
export function WhatWeFix() {
  return (
    <section
      id="what-we-do"
      className="what-we-fix band band--blue fixes-band"
      aria-labelledby="what-we-do-heading"
    >
      <div className="container">
        <Reveal className="what-we-fix-head">
          <p className="eyebrow">
            <span className="eyebrow-step">Partner</span> <span className="eyebrow-name">Bigger fixes</span>
          </p>
          <h2 className="h2" id="what-we-do-heading">
            <span className="h-light">When</span> the Check <span className="h-light">calls for</span>{" "}
            more
          </h2>
        </Reveal>
        <Reveal stagger={0.08}>
          <ul className="fix-grid">
            <motion.li className="fix fix--lead" variants={fadeUpSmall}>
              <Card fix={LEAD} lead />
              <Callout>
                You own the code, the accounts, and the files. If we vanished tomorrow, you'd be fine.
              </Callout>
            </motion.li>
            {FIXES.map((fix) => (
              <motion.li className="fix" key={fix.title} variants={fadeUpSmall}>
                <Card fix={fix} />
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
