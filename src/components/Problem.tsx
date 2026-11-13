import { Reveal } from "./Reveal";

/**
 * Problem, MB11 360:1267, 359:1097, 357:874, with the Z set 360:1259 to the
 * right. The heading carries the comp's emphasis: "wrong" in red and
 * "without telling you." in light italic. Copy unchanged from 2026-11-06.
 */
export function Problem() {
  return (
    <section id="the-problem" className="section problem" aria-labelledby="the-problem-heading">
      <div className="container art-split">
        <Reveal>
          <p className="eyebrow">Problem</p>
          <h2 className="h2 problem-heading" id="the-problem-heading">
            AI is fast, confident, and <span className="h-alert">wrong</span>{" "}
            <span className="h-aside">without telling you.</span>
          </h2>
          <p className="section-intro copy">
            It built your site in an afternoon. It also skipped the sign-in test, the phone, the
            screen reader, and the question of whether anyone can find you. It won't say so.
            Someone has to check.
          </p>
        </Reveal>
        <div className="art-split-art" aria-hidden="true">
          <img src="/art/mb11/problem-art.svg" width={352} height={235} alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
