import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUpSmall } from "../lib/motion";

const EXPERIENCE = [
  "Enterprise systems",
  "Digital products",
  "Web + applications",
  "AI + automation",
  "Technology strategy",
  "Design + media",
];

export function TrackRecord() {
  return (
    <section id="about" className="section track-record">
      <div className="container">
        <div className="track-grid">
          <Reveal className="track-heading">
            <p className="eyebrow">04 / TRACK RECORD</p>
            <h2 className="h2 h2--split">
              Built on experience.{" "}
              <span className="h2-secondary">Structured for what comes next.</span>
            </h2>
          </Reveal>

          <Reveal className="track-copy">
            <p className="text-muted">
              ZAC is led by founder Andrew Johnston, whose experience spans enterprise systems,
              independent digital, web, media, and product work, alongside a senior team of
              developers and designers.
            </p>
            <p className="text-muted">
              That range matters, because good technology starts before the first line of code:
              understanding the business problem, choosing what is worth building, and knowing how
              to get it into the world.
            </p>
          </Reveal>

          <Reveal className="experience-grid" stagger={0.06}>
            {EXPERIENCE.map((item) => (
              <motion.div className="experience-item" key={item} variants={fadeUpSmall}>
                <span className="experience-marker" aria-hidden="true" />
                <span>{item}</span>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
