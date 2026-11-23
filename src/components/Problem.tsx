import { Reveal } from "./Reveal";
import { step } from "../lib/reveal";

/**
 * Problem, MB11 360:1267, 359:1097, 357:874: a full-width statement in the
 * page's largest type, revealed line by line as it scrolls in. The heading
 * carries the comp's emphasis: "wrong" in red and "without telling you." in
 * light italic. Cut on 2026-11-22 (Drew's pass 1 handoff) to the heading and
 * the last sentence of the old intro.
 */
export function Problem() {
  return (
    <section id="the-problem" className="section problem" aria-labelledby="the-problem-heading">
      <div className="container">
        <Reveal stagger>
          <p className="eyebrow reveal-item" style={step(0)}>
            Problem
          </p>
          <h2 className="problem-heading" id="the-problem-heading">
            <span className="problem-line reveal-item" style={step(1)}>
              AI is fast, confident,
            </span>{" "}
            <span className="problem-line reveal-item" style={step(2)}>
              and <span className="h-alert">wrong</span>
            </span>{" "}
            <span className="problem-line reveal-item h-aside" style={step(3)}>
              without telling you.
            </span>
          </h2>
          <p className="problem-close reveal-item" style={step(5)}>
            Someone has to check.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
