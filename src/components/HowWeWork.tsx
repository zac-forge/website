import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { FlowRow } from "./FlowRow";
import { fadeUp } from "../lib/motion";

const PROCESS = [
  {
    title: "Check",
    body: "The free Reality Check. You learn what's wrong and what it costs to fix before you spend anything.",
  },
  {
    title: "Fix",
    body: "The Fix Week, then the bigger fixes if the scorecard calls for them. Fixed price, agreed up front.",
  },
  { title: "Partner", body: "Web Partner keeps it running and makes it better every month." },
];

const PRINCIPLES = [
  { title: "Senior-led.", body: "The people on the call do the work. No account layer." },
  { title: "Right-sized.", body: "We tell you what's not worth fixing. A lot of it isn't." },
  {
    title: "You own the code.",
    body: "The repo, the accounts, the files, and the design. If we disappeared tomorrow, you'd be fine. That's the point.",
  },
];

/**
 * Comp 7's How we work (211:1342 onward): the heading, a process row of
 * circles and arrows (the comp's Intro, Deep dive, Design, Production,
 * Reassess placeholder becomes the deck's Check, Fix, Partner), then the
 * principles in columns. The comp's Tools, Zacforge, Client diagram has no
 * copy behind it and is not built, question 19.
 */
export function HowWeWork() {
  return (
    <section id="how-we-work" className="section how-we-work" aria-labelledby="how-we-work-heading">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">05 / How we work</p>
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
              <p className="principle-body">{p.body}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
