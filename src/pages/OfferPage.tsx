import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Closing } from "../components/Closing";
import { SubpageHero } from "../components/SubpageHero";
import { RelatedOffers } from "../components/RelatedOffers";
import { Reveal } from "../components/Reveal";
import { Callout } from "../components/Callout";
import { QuestionStepper } from "../components/QuestionStepper";
import { FixExamples, Statement } from "../components/FixExamples";
import { FaqAccordion, InlineText } from "../components/FaqAccordion";
import { IconList, ListIcon } from "../components/IconList";
import { CountUp } from "../components/CountUp";
import { CaseCard } from "../components/TrackRecord";
import { EscapeGlyph } from "../components/OfferTiles";
import { step } from "../lib/reveal";
import { CASE_STUDIES } from "./caseStudies";
import type { CSSProperties } from "react";
import type { Offer, Block } from "./offers";

/**
 * Shared offer page template. Since 2026-11-22 it is built from the home
 * page's components, so Misha's revisions to them reach every offer page:
 * the shared hero with its staged entrance, the lead, then each block in a
 * two-column section (heading held on the left, content on the right) on
 * alternating surfaces, the related offers as the home tiles, and the home
 * page's closing section. Blocks pick their component from their data:
 *
 *   numbered, view "stepper"  the home question stepper, on a blue band
 *   numbered                  numbered steps on a rail (`marker` swaps the
 *                             numerals for an icon)
 *   bullets                   an icon list (check, cross, or calendar)
 *   titled, view "list"       the icon list, each row a title and a body
 *   titled                    labelled cards, their bullets an icon list
 *   paragraphs                short blocks in the reading column
 *   stats                     one sentence as stat cards in the page accent
 *   examples                  the home before-and-after cards, then the
 *                             guarantee as the full-width statement
 *
 * One family since the text cut of 2026-11-22. Every offer page runs in the
 * same order, skipping what it has no content for: hero (the page's accent
 * and its tile's icon), lead and callouts, how it works (the steps rail),
 * the lists, any section that is the page's own (the two-column block), one
 * proof block, questions, the other offers, the closing section. The order
 * of `blocks` in each offer's data follows it. The page's one accent
 * (`heroAccent`) is set on <main> as --offer-accent and colours the hero,
 * the step discs, the list icons, and the proof panel.
 *
 * A block's closing paragraphs and the proof lines are callouts, and the
 * questions are the shared accordion. Every word is in the prerendered HTML
 * whatever the script does: hidden states sit under html.js only.
 */
function BlockBody({ block }: { block: Block }) {
  switch (block.kind) {
    case "bullets":
      return <IconList items={block.items} icon={block.icon} />;
    case "numbered":
      return (
        <ol className="steps">
          {block.items.map((item, i) => (
            <li className="steps-item reveal-item" style={step(i)} key={item.title}>
              <span className="steps-number" aria-hidden="true">
                {block.marker ? <ListIcon icon={block.marker} className="steps-icon" /> : i + 1}
              </span>
              <div>
                <h3 className="steps-title">{item.title}</h3>
                {item.body ? <p className="steps-body">{item.body}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      );
    case "titled": {
      if (block.view === "list") return <IconList items={block.items} icon={block.icon} />;
      // Cards with a list or a long body stack at full width. Short ones
      // sit two to a row.
      const stack = block.items.some((item) => item.bullets || (item.body?.length ?? 0) > 140);
      return (
        <div className={`label-cards${stack ? " label-cards--stack" : ""}`}>
          {block.items.map((item, i) => (
            <div className="label-card reveal-item" style={step(i)} key={item.title}>
              <div>
                <h3 className="label-card-title">{item.title}</h3>
                {item.body ? <p className="label-card-body">{item.body}</p> : null}
              </div>
              {item.bullets ? <IconList items={item.bullets} icon={block.icon} /> : null}
            </div>
          ))}
        </div>
      );
    }
    case "paragraphs":
      return (
        <>
          {block.items.map((item) => (
            <p className="offer-paragraph" key={item}>
              {item}
            </p>
          ))}
        </>
      );
    case "stats":
      // One paragraph, so it reads as the sentence it is.
      return (
        <p className="stat-cards">
          <span className="stat-lead reveal-item" style={step(0)}>
            {block.lead}
          </span>{" "}
          {block.items.map((item, i) => (
            <span className="proof-card proof-card--static stat-card reveal-item" style={step(i + 1)} key={item.figure}>
              <CountUp value={item.figure} className="proof-card-figure-value" />{" "}
              <span className="proof-card-figure-caption">{item.caption}</span>{" "}
            </span>
          ))}
        </p>
      );
    case "examples":
      return null;
  }
}

/** The paragraphs a block opens with, in the paragraph style. */
function Paragraphs({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <>
      {items.map((item) => (
        <p className="offer-paragraph" key={item}>
          {item}
        </p>
      ))}
    </>
  );
}

/** A block's closing lines, as the shared callout. */
function Asides({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <>
      {items.map((item) => (
        <Callout key={item}>{item}</Callout>
      ))}
    </>
  );
}

/** One block as a section. `alt` puts it on the white surface. */
function BlockSection({ block, alt }: { block: Block; alt: boolean }) {
  // The home stepper, on the home Check section's blue band.
  if (block.kind === "numbered" && block.view === "stepper") {
    return (
      <section className="section band band--blue offer-band">
        <div className="container offer-split">
          <Reveal className="offer-split-side">
            <h2 className="h3 offer-block-heading">{block.heading}</h2>
            <Paragraphs items={block.intro} />
          </Reveal>
          <Reveal stagger>
            <QuestionStepper items={block.items} id="check" />
          </Reveal>
        </div>
      </section>
    );
  }
  // The home before-and-after cards across the full column, then the
  // statement.
  if (block.kind === "examples") {
    return (
      <section className={`section offer-block offer-block--wide${alt ? " offer-block--alt" : ""}`}>
        <div className="container">
          <Reveal stagger>
            <h2 className="h3 offer-block-heading reveal-item" style={step(0)}>
              {block.heading}
            </h2>
            <FixExamples examples={block.items} first={1} />
          </Reveal>
          {block.statement ? (
            <Reveal>
              <Statement>{block.statement}</Statement>
            </Reveal>
          ) : null}
        </div>
      </section>
    );
  }
  // The stat cards across the full column, under their heading.
  if (block.kind === "stats") {
    return (
      <section className={`section offer-block offer-block--wide${alt ? " offer-block--alt" : ""}`}>
        <div className="container">
          <Reveal>
            <h2 className="h3 offer-block-heading">{block.heading}</h2>
          </Reveal>
          <Reveal stagger>
            <BlockBody block={block} />
          </Reveal>
        </div>
      </section>
    );
  }
  // A section that is one short paragraph takes less room, so it does not
  // sit hollow.
  const short = block.kind === "paragraphs" && block.items.length === 1 && !block.intro && !block.outro;
  return (
    <section className={`section offer-block${alt ? " offer-block--alt" : ""}${short ? " offer-block--short" : ""}`}>
      <div className="container offer-split">
        <Reveal className="offer-split-side">
          <h2 className="h3 offer-block-heading">{block.heading}</h2>
        </Reveal>
        <Reveal className="offer-split-main" stagger>
          <Paragraphs items={block.intro} />
          <BlockBody block={block} />
          <Asides items={block.outro} />
        </Reveal>
      </div>
    </section>
  );
}

export default function OfferPage({ offer }: { offer: Offer }) {
  // Surfaces alternate down the page, ground then white, skipping the
  // sections that bring their own band.
  let plain = 0;
  const alt = () => plain++ % 2 === 0;
  const proofCase = CASE_STUDIES.find((s) => s.slug === offer.proofCase);
  const accent = { "--offer-accent": offer.heroAccent ?? "var(--color-band-blue)" } as CSSProperties;

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="offer-page" style={accent}>
        {/* The icon is the one on the offer's tile: Misha's, or the coded
            stand-in where he has not drawn one (Platform Escape). */}
        <SubpageHero
          title={offer.heroTitle}
          icon={offer.heroIcon}
          glyph={offer.heroIcon ? undefined : <EscapeGlyph />}
          accent={offer.heroAccent}
        />

        {/* The headline and the line placing the page behind the Reality
            Check on the left, the intro on the right, its first paragraph
            set as the lead. */}
        <section className="section offer-lead">
          <div className="container offer-split">
            <Reveal className="offer-split-side">
              {/* The page's one h1, set at h2 size under the hero. */}
              <h1 className="h2 offer-title">{offer.h1}</h1>
              {offer.subline ? (
                <Callout>
                  <InlineText text={offer.subline} />
                </Callout>
              ) : null}
            </Reveal>
            <Reveal className="offer-split-main offer-intro-run">
              {offer.intro.map((p) => (
                <p className="offer-intro" key={p}>
                  {p}
                </p>
              ))}
              {offer.introCallouts?.map((line) => (
                <Callout key={line}>{line}</Callout>
              ))}
            </Reveal>
          </div>
        </section>

        {offer.blocks.map((block) => (
          <BlockSection
            block={block}
            alt={block.kind === "numbered" && block.view === "stepper" ? false : alt()}
            key={block.heading}
          />
        ))}

        {/* Proof that is words: a panel in the page's accent, the home case
            cards' surface. A paragraph is a callout under "Proof", a
            statement sets its first sentence large. */}
        {offer.proof || offer.proofStat ? (
          <section className={`section offer-block offer-proof${alt() ? " offer-block--alt" : ""}`}>
            <div className="container">
              <Reveal className="proof-card proof-card--static offer-proof-panel">
                {offer.proof ? (
                  <>
                    <h2 className="h3 offer-block-heading">Proof</h2>
                    {offer.proof.map((p) => (
                      <Callout key={p}>{p}</Callout>
                    ))}
                  </>
                ) : null}
                {offer.proofStat ? (
                  <Callout className="callout--stat">
                    <strong>{offer.proofStat[0]}</strong> <span>{offer.proofStat[1]}</span>
                  </Callout>
                ) : null}
              </Reveal>
            </div>
          </section>
        ) : null}

        {/* Proof that is a case: the home page's card for it, under the home
            section's own label, linking to the case study. */}
        {proofCase ? (
          <section className={`section offer-block offer-proof${alt() ? " offer-block--alt" : ""}`}>
            <div className="container">
              <Reveal>
                <h2 className="eyebrow">Case studies</h2>
              </Reveal>
              <Reveal className="proof-grid offer-proof-case" stagger>
                <CaseCard study={proofCase} index={0} shape="wide" />
              </Reveal>
            </div>
          </section>
        ) : null}

        {/* /platform-escape has no questions yet, so no FAQ section. */}
        {offer.faq.length ? (
          <section className={`section offer-block offer-faq${alt() ? " offer-block--alt" : ""}`}>
            <div className="container offer-split">
              <Reveal className="offer-split-side">
                <h2 className="h3 offer-block-heading">Questions</h2>
              </Reveal>
              <Reveal className="offer-split-main">
                <FaqAccordion items={offer.faq} id="faq" />
                {offer.footnote ? <p className="offer-footnote">{offer.footnote}</p> : null}
              </Reveal>
            </div>
          </section>
        ) : null}

        {/* The way back and the way sideways, above the closing call to
            action: the home page, and every other live offer. */}
        <RelatedOffers label="Other services" currentPath={offer.path} />

        {/* Every page closes with the home page's Connect section: the form
            on /reality-check, the page's call to action elsewhere. */}
        {offer.form ? <Closing /> : <Closing cta={offer.cta} />}
      </main>
      <Footer />
    </>
  );
}
