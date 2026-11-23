import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { ExperienceStrip } from "./LogoBand";
import { BrowserFrame } from "./BrowserFrame";
import { CASE_STUDIES, CASE_STUDIES_INTRO, CASE_STUDIES_PATH, caseMeta } from "../pages/caseStudies";
import type { CaseStudy } from "../pages/caseStudies";

/**
 * The bento's shapes, by position (design pass, 2026-11-22). Row one: a
 * narrow card, then the featured card, Heritage Global Partners, twice its
 * width with the largest number and screenshot. Row two: a wide card with
 * its copy beside two layered screenshots, then a narrow card. Reading
 * order is still the data's order.
 */
const SHAPES = ["side", "featured", "wide", "side"];

/**
 * One media-led card. The case's accent, deepened with ink so white text
 * clears AA on it, is the card's surface. The number is the hero and counts
 * up on entry, then its label, the client, the meta line, the first proof
 * sentence where the card has one, and "More", whose link covers the card.
 * The screenshot sits in a browser frame, cropped by the card's edge.
 */
function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const proof = study.homeProof === false ? undefined : study.proof?.[0];
  return (
    <article
      className={`proof-card proof-card--${SHAPES[index] ?? "side"} reveal-item`}
      style={{ "--case-accent": study.accent, "--i": index } as CSSProperties}
    >
      <div className="proof-card-copy">
        {study.figure ? (
          <p className="proof-card-figure">
            <CountUp value={study.figure} className="proof-card-figure-value" />
            {study.figureCaption ? (
              <>
                {" "}
                <span className="proof-card-figure-caption">{study.figureCaption}</span>
              </>
            ) : null}
          </p>
        ) : null}
        <h3 className="proof-card-client">{study.client}</h3>
        {caseMeta(study) ? <p className="proof-card-meta case-text">{caseMeta(study)}</p> : null}
        {proof ? <p className="proof-card-proof case-text">{proof}</p> : null}
        <a
          className="proof-card-link"
          href={`${CASE_STUDIES_PATH}#${study.slug}`}
          aria-label={`More about ${study.client}`}
        >
          <span className="proof-card-more">More</span>
          <span className="proof-card-arrow" aria-hidden="true" />
        </a>
      </div>
      {study.images?.length ? (
        <div className="proof-card-media" aria-hidden="true">
          {study.images
            .slice(0, 2)
            .reverse()
            .map((image, i, all) => (
              <BrowserFrame
                base={image.base}
                className={all.length > 1 ? (i === 0 ? "browser--back" : "browser--front") : ""}
                key={image.base}
              />
            ))}
        </div>
      ) : null}
    </article>
  );
}

/**
 * Proof: the case studies on MB11's grey band 394:1892 (curve top left, cut
 * bottom right), heading left and intro right (366:1384, 367:1622), the
 * four cases as a bento of media-led cards, then the experience strip as a
 * dark credential band under them, inside the same band. The id stays
 * track-record because older links point at it.
 */
export function TrackRecord() {
  return (
    <section id="track-record" className="section band band--grey track-record" aria-labelledby="track-record-heading">
      <div className="container">
        <Reveal className="track-head">
          <div>
            <p className="eyebrow">Case studies</p>
            <h2 className="h2" id="track-record-heading">
              <span className="h-light">Built to</span> last
            </h2>
          </div>
          {/* Intro from Drew's batch 2, 2026-11-13. Handover was confirmed
              on 2026-08-20 as repeatable across numerous projects. */}
          <p className="track-intro case-text">{CASE_STUDIES_INTRO}</p>
        </Reveal>

        <Reveal className="proof-grid" stagger>
          {CASE_STUDIES.map((study, i) => (
            <CaseCard study={study} index={i} key={study.slug} />
          ))}
        </Reveal>

        <ExperienceStrip />
      </div>
    </section>
  );
}
