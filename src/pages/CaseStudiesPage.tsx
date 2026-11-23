import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Magnetic } from "../components/Magnetic";
import { SubpageHero } from "../components/SubpageHero";
import { Reveal } from "../components/Reveal";
import { CountUp } from "../components/CountUp";
import { CASE_STUDIES, CASE_STUDIES_INTRO, caseMeta } from "./caseStudies";
import type { CaseStudy } from "./caseStudies";

const accentStyle = (study: CaseStudy) => ({ "--case-accent": study.accent }) as CSSProperties;

function CaseImage({ image }: { image: { base: string; alt: string } }) {
  return (
    <img
      className="case-image"
      src={`${image.base}-720.webp`}
      srcSet={`${image.base}-360.webp 360w, ${image.base}-720.webp 720w`}
      sizes="(max-width: 760px) calc(100vw - 48px), 360px"
      alt={image.alt}
      width={302}
      height={170}
      loading="lazy"
      decoding="async"
    />
  );
}

/**
 * The results strip under the lead: the four numbers in one row, each a link
 * to its case, so a visitor who reads nothing else still sees the proof.
 */
function Results() {
  return (
    <ul className="cases-results">
      {CASE_STUDIES.filter((s) => s.figure).map((study) => (
        <li key={study.slug} style={accentStyle(study)}>
          <a className="cases-result" href={`#${study.slug}`}>
            <span className="cases-result-figure">
              <CountUp value={study.figure!} />
            </span>
            {study.figureCaption ? (
              <span className="cases-result-caption">{study.figureCaption}</span>
            ) : null}
            <span className="cases-result-client case-text">{study.client}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * The client index. One list, laid out twice by CSS: a sticky column beside
 * the cases at desktop widths, a horizontally scrolling row of chips below
 * that. The current case is marked with aria-current as it scrolls past.
 */
function CaseIndex({ current }: { current: string | null }) {
  return (
    <nav className="cases-index" aria-label="Case studies">
      <ul>
        {CASE_STUDIES.map((study) => (
          <li key={study.slug} style={accentStyle(study)}>
            <a href={`#${study.slug}`} aria-current={current === study.slug ? "true" : undefined}>
              {study.client}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * One case, outcome first: client and meta line, the number as the
 * headline, then the three labelled beats (Proof set heaviest) beside the
 * artwork and the at-a-glance facts. The facts are the card's meta line and
 * link labels split into labelled rows, no new copy.
 */
function Case({ study }: { study: CaseStudy }) {
  const headingId = `${study.slug}-heading`;
  const links = [...(study.product?.href ? [study.product as { label: string; href: string }] : []), ...(study.moreLinks ?? [])];
  return (
    <article id={study.slug} className="case-study" style={accentStyle(study)} aria-labelledby={headingId}>
      <Reveal>
        <header className="case-study-head">
          <h2 className="case-study-client" id={headingId}>
            {study.client}
          </h2>
          {caseMeta(study) ? <p className="case-study-meta case-text">{caseMeta(study)}</p> : null}
          {study.figure ? (
            <p className="case-study-figure">
              <CountUp value={study.figure} className="case-study-figure-value" />
              {study.figureCaption ? (
                <>
                  {" "}
                  <span className="case-study-figure-caption">{study.figureCaption}</span>
                </>
              ) : null}
            </p>
          ) : null}
        </header>

        <div className="case-study-grid">
          <dl className="case-study-story">
            {study.problem ? (
              <div className="case-study-beat">
                <dt className="case-fact-label">Problem</dt>
                <dd className="case-text">{study.problem}</dd>
              </div>
            ) : null}
            <div className="case-study-beat">
              <dt className="case-fact-label">What we built</dt>
              <dd className="case-text">{study.built}</dd>
            </div>
            {study.proof ? (
              <div className="case-study-beat case-study-beat--proof surface">
                <dt className="case-fact-label">Proof</dt>
                <dd>{study.proof.join(" ")}</dd>
              </div>
            ) : null}
          </dl>

          <div className="case-study-side">
            {study.images?.length ? (
              <div className="case-study-art">
                {study.images.map((image) => (
                  <CaseImage image={image} key={image.base} />
                ))}
              </div>
            ) : study.figure ? (
              <div className="case-study-art case-study-art--block" aria-hidden="true">
                {study.figure}
              </div>
            ) : null}
            <dl className="case-study-facts case-text">
              {study.industry ? (
                <div>
                  <dt className="case-fact-label">Sector</dt>
                  <dd>{study.industry}</dd>
                </div>
              ) : null}
              {study.status ? (
                <div>
                  <dt className="case-fact-label">Status</dt>
                  <dd>{study.status}</dd>
                </div>
              ) : null}
              {links.length || study.product ? (
                <div>
                  <dt className="case-fact-label">{links.length > 1 ? "Links" : "Link"}</dt>
                  <dd>
                    {links.length ? (
                      <ul className="case-study-links">
                        {links.map((link) => (
                          <li key={link.href}>
                            <a className="inline-link" href={link.href}>
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      study.product?.label
                    )}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

/**
 * /case-studies (Drew's pass 1 handoff, 2026-11-22), on the /about and /faq
 * layout: the shared hero with the page name, the headline "Built to last"
 * as the page's one h1 and the intro, both from the home section, then the
 * results strip, the client index, the four cases, and one call to action.
 * Every word of case copy is the home cards' copy, read from caseStudies.ts.
 */
export default function CaseStudiesPage() {
  const [current, setCurrent] = useState<string | null>(null);

  // Marks the case crossing the upper part of the viewport as current.
  useEffect(() => {
    const cases = CASE_STUDIES.map((s) => document.getElementById(s.slug)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!cases.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    cases.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="offer-page cases-page">
        <SubpageHero title="Case studies" />

        <section className="section offer-lead cases-lead">
          <div className="container">
            {/* Plain text: tools/og-images.mjs reads the headline from here. */}
            <h1 className="h2 offer-title">Built to last</h1>
            <p className="offer-intro">{CASE_STUDIES_INTRO}</p>
            <Results />
          </div>
        </section>

        <div className="container cases-body">
          <CaseIndex current={current} />
          <div className="cases-list">
            {CASE_STUDIES.map((study) => (
              <Case study={study} key={study.slug} />
            ))}
          </div>
        </div>

        <section className="section offer-cta">
          <div className="container">
            <div className="cta-row">
              <Magnetic>
                <a className="btn btn-primary" href="/#contact">
                  <span>Get a free Reality Check</span>{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
