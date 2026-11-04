import { Reveal } from "./Reveal";
import { FlowRow } from "./FlowRow";

const STEPS = [
  { title: "Senior team", body: "The people on your call are the people who do the work." },
  { title: "Optimized process", body: "AI does the volume. We do the judgment." },
  { title: "Delivery", body: "You own the code, the files, and the accounts." },
];

/**
 * Comp 7's maroon band (198:429) with its two sweeps, the heading and copy on
 * the band, and the three-step row on the ground below it (211:1257 to
 * 211:1264). The comp's paper-plane illustration (198:460 to 198:511) is not
 * exported yet, so the v4 case-study Z set stands in, question 16.
 */
export function WhatChanged() {
  return (
    <section id="what-changed" className="what-changed" aria-labelledby="what-changed-heading">
      <div className="section band band--maroon">
        <div className="container section-head">
          <Reveal>
            <p className="eyebrow">02 / What changed</p>
            <h2 className="h2" id="what-changed-heading">
              Same judgment. More output.
            </h2>
            <p className="section-intro">
              One senior person directing a managed team of specialists and AI now does what used to
              take a small team. The standard didn't change. The speed did.
            </p>
            <p className="section-intro">
              What also changed: everyone else got the same tools. Sites, apps, brands, and content
              that used to need a team now get made in an afternoon. A lot of it half works, looks
              like everything else, and the person who made it can't fix it. That's where we come
              in.
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
      <div className="container flow-wrap">
        <FlowRow steps={STEPS} label="How the work gets done" />
      </div>
    </section>
  );
}
