import { Reveal } from "./Reveal";

/**
 * 01 / The problem. Replaces What changed ("Same judgment. More output."),
 * copy pass of 2026-11-06, and keeps its frame: the section head on the
 * ground with the v4 case-study Z set beside the copy. The class stays
 * `what-changed` so the existing layout rules apply unchanged. The old
 * three-step row went with the old copy. What changed is parked in
 * .superseded/.
 */
export function Problem() {
  return (
    <section id="the-problem" className="what-changed" aria-labelledby="the-problem-heading">
      <div className="section">
        <div className="container section-head">
          <Reveal>
            <p className="eyebrow">01 / The problem</p>
            <h2 className="h2" id="the-problem-heading">
              AI is fast, confident, and wrong without telling you.
            </h2>
            <p className="section-intro">
              It built your site in an afternoon. It also skipped the sign-in test, the phone, the
              screen reader, and the question of whether anyone can find you. It won't say so.
              Someone has to check.
            </p>
          </Reveal>
          <div className="section-art section-art--case" aria-hidden="true">
            <img className="z-a" src="/art/z-case-a.svg" width={199} height={169} alt="" loading="lazy" />
            <img className="z-b" src="/art/z-case-b.svg" width={102} height={87} alt="" loading="lazy" />
            <img className="z-c" src="/art/z-case-c.svg" width={61} height={52} alt="" loading="lazy" />
            <img className="z-d" src="/art/z-case-d.svg" width={61} height={52} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
