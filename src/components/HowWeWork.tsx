import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { FlowRow } from "./FlowRow";
import { fadeUp } from "../lib/motion";

const PROCESS = [
  { title: "Check", body: "Free. You get: the scorecard and what a fix would take." },
  { title: "Fix", body: "One week or one project, fixed price. You get: it done, in your code, before and after." },
  {
    title: "Partner",
    body: "Monthly, month to month. You get: one senior person who knows your site and improves it every month.",
  },
];

/** Three short tiles. A tile may be a single line, set as its title. */
const PRINCIPLES: { title: string; body?: string }[] = [
  { title: "The people on the call do the work." },
  { title: "We tell you what's not worth fixing.", body: "A lot of it isn't." },
  {
    title: "You own the code, the accounts, and the files.",
    body: "If we vanished tomorrow, you'd be fine.",
  },
];

/**
 * Comp 7's How we work (211:1342 onward): the heading, a process row of
 * circles and arrows (the comp's Intro, Deep dive, Design, Production,
 * Reassess placeholder becomes Check, Fix, Partner), then the
 * principles in columns. The comp's Tools, Zacforge, Client diagram has no
 * copy behind it and is not built, question 19.
 */
export function HowWeWork() {
  return (
    <section id="how-we-work" className="section how-we-work" aria-labelledby="how-we-work-heading">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">06 / How we work</p>
            <h2 className="h2" id="how-we-work-heading">
              Check. Fix. Partner.
            </h2>
          </div>
          {/* v4 board nodes 8:69 and 8:86, composed at their board offsets. */}
          <div className="section-art section-art--how" aria-hidden="true">
            <img src="/art/z-how-a.svg" width={318} height={156} alt="" loading="lazy" />
            <img src="/art/z-how-b.svg" width={205} height={95} alt="" loading="lazy" />
          </div>
        </Reveal>

        <FlowRow steps={PROCESS} label="Check, fix, partner" />

        <Reveal className="principles" stagger={0.08}>
          {PRINCIPLES.map((p) => (
            <motion.div className="principle" key={p.title} variants={fadeUp}>
              <h3 className="principle-title">{p.title}</h3>
              {p.body ? <p className="principle-body">{p.body}</p> : null}
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
