import { Reveal } from "./Reveal";

/**
 * Problem, MB11 360:1267, 359:1097, 357:874, one column on the ground. The
 * heading carries the comp's emphasis: "wrong" in red and "without telling
 * you." in light italic. Cut on 2026-11-22 (Drew's pass 1 handoff) to the
 * heading and the last sentence of the old intro, so both are set larger.
 */
export function Problem() {
  return (
    <section id="the-problem" className="section problem" aria-labelledby="the-problem-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Problem</p>
          <h2 className="h1 problem-heading" id="the-problem-heading">
            AI is fast, confident, and <span className="h-alert">wrong</span>{" "}
            <span className="h-aside">without telling you.</span>
          </h2>
          <p className="problem-close">Someone has to check.</p>
        </Reveal>
      </div>
    </section>
  );
}
