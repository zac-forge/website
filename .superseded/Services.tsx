import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { ServiceCard } from "./ServiceCard";
import { fadeUp } from "../lib/motion";
import { LIVE_OFFERS, FRACTIONAL_LEAD } from "../pages/offers";

/**
 * Five entries in the copy deck, each linking to its page. Entry 04 (the
 * brand system) is behind a flag. The board draws three cards; the grid here
 * wraps and the three accents cycle by position, see question 6 in
 * design/DESIGN-SYSTEM-NOTES.md.
 */
const CARDS = [
  ...LIVE_OFFERS.map((o) => ({
    key: o.path,
    title: o.rowTitle,
    statement: o.rowStatement,
    items: o.rowItems,
    note: o.rowNote,
    href: o.path,
    linkLabel: o.rowLink,
  })),
  {
    key: "fractional-digital-lead",
    title: FRACTIONAL_LEAD.rowTitle,
    statement: FRACTIONAL_LEAD.rowStatement,
    items: FRACTIONAL_LEAD.rowItems,
    note: undefined,
    href: undefined,
    linkLabel: undefined,
  },
];

export function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 / What we do</p>
          <h2 className="h2">What we do</h2>
        </Reveal>
        <Reveal className="service-grid" stagger={0.1}>
          {CARDS.map((card) => (
            <motion.div key={card.key} variants={fadeUp} style={{ display: "contents" }}>
              <ServiceCard
                title={card.title}
                statement={card.statement}
                items={card.items}
                note={card.note}
                href={card.href}
                linkLabel={card.linkLabel}
              />
            </motion.div>
          ))}
        </Reveal>
        <Reveal>
          <p className="services-note">
            We also move organizations off platforms they have outgrown, and repair sites and apps
            built quickly with AI tools. <a href="/#contact">Ask us about it.</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
