import type { CSSProperties } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Magnetic } from "../components/Magnetic";
import { Closing } from "../components/Closing";
import { SubpageHero } from "../components/SubpageHero";
import { HERO_ACCENTS } from "../lib/flags";
import { LIVE_OFFERS } from "./offers";
import type { Offer, Block } from "./offers";

/**
 * Shared offer page template: the shared SubpageHero (icon and page name),
 * then the headline, the v5 line placing the page behind the Reality Check,
 * and the intro, then lists, steps,
 * proof, FAQ, related offers, the closing CTA, and on /reality-check the
 * contact form. Deliberately no entrance animation on the copy. These pages
 * exist to be read by assistants that do not run JavaScript, so the text is
 * plain markup with no inline opacity for a script to undo.
 */
function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "bullets":
      return (
        <ul className="offer-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "numbered":
      return (
        <ol className="offer-steps">
          {block.items.map((item) => (
            <li key={item.title}>
              <div>
                <h3 className="offer-step-title">{item.title}</h3>
                {item.body ? <p className="offer-step-body">{item.body}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      );
    case "titled":
      return (
        <div className="offer-titled">
          {block.items.map((item) => (
            <div key={item.title}>
              <h3 className="offer-titled-title">{item.title}</h3>
              {item.body ? <p className="offer-titled-body">{item.body}</p> : null}
              {item.bullets ? (
                <ul className="offer-list">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      );
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
  }
}

/** The paragraphs a block may open or close with, in the paragraph style. */
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

/**
 * The subline and FAQ answers may carry one inline link, written
 * [text](/path), so the line placing a page behind the Reality Check can
 * link to it. Plain text otherwise. The schema strips the markup.
 */
function InlineText({ text }: { text: string }) {
  const m = text.match(/^(.*)\[([^\]]+)\]\(([^)]+)\)(.*)$/);
  if (!m) return <>{text}</>;
  return (
    <>
      {m[1]}
      <a className="inline-link" href={m[3]}>
        {m[2]}
      </a>
      {m[4]}
    </>
  );
}

function Subline({ text }: { text: string }) {
  return (
    <p className="offer-subline">
      <InlineText text={text} />
    </p>
  );
}

/**
 * One "Other services" card, Misha's 423:2429 set (2026-11-13): the offer's
 * line icon, its name in its own colour, its one line, and "More" in the
 * same colour. The link is stretched over the card, so the whole card
 * clicks through, and is named for the offer for screen readers.
 */
function OfferCard({ offer }: { offer: Offer }) {
  const style = {
    "--card-accent": offer.accent ?? "var(--color-band-blue)",
    ...(offer.cardIcon ? { "--card-icon": `url("${offer.cardIcon}")` } : {}),
  } as CSSProperties;
  return (
    <article className="offer-card" style={style}>
      {offer.cardIcon ? <span className="offer-card-icon" aria-hidden="true" /> : null}
      <h3 className="offer-card-title">{offer.navTitle}</h3>
      <p className="offer-card-body case-text">{offer.summary}</p>
      <a className="offer-card-link" href={offer.path} aria-label={`More about ${offer.navTitle}`}>
        More <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default function OfferPage({ offer }: { offer: Offer }) {
  return (
    <>
      <Header />
      <main className="offer-page">
        <SubpageHero
          title={offer.heroTitle}
          icon={offer.heroIcon}
          accent={HERO_ACCENTS ? offer.accent : undefined}
        />

        {/* The headline, the line placing the page behind the Reality
            Check, and the intro, on the ground under the hero. */}
        <section className="section offer-lead">
          <div className="container">
            {/* The page's one h1, set at h2 size under the hero. */}
            <h1 className="h2 offer-title">{offer.h1}</h1>
            {offer.subline ? <Subline text={offer.subline} /> : null}
            {offer.intro.map((p) => (
              <p className="offer-intro" key={p}>
                {p}
              </p>
            ))}
          </div>
        </section>

        {offer.blocks.map((block) => (
          <section className="section offer-block" key={block.heading}>
            <div className="container">
              <h2 className="h3">{block.heading}</h2>
              <Paragraphs items={block.intro} />
              <BlockView block={block} />
              <Paragraphs items={block.outro} />
            </div>
          </section>
        ))}

        {offer.proof ? (
          <section className="section offer-block offer-proof">
            <div className="container">
              <h2 className="h3">Proof</h2>
              {offer.proof.map((p) => (
                <p className="offer-proof-line" key={p}>
                  {p}
                </p>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section offer-block offer-faq">
          <div className="container">
            <h2 className="h3">Questions</h2>
            <dl>
              {offer.faq.map((f) => (
                <div className="faq-item" key={f.question}>
                  <dt>{f.question}</dt>
                  <dd>
                    <InlineText text={f.answer} />
                  </dd>
                </div>
              ))}
            </dl>
            {offer.footnote ? <p className="offer-footnote">{offer.footnote}</p> : null}
          </div>
        </section>

        {/* The way back and the way sideways, above the closing call to
            action: the home page, and every other live offer. */}
        <section className="section offer-related" aria-labelledby="offer-related-heading">
          <div className="container">
            <h2 className="h3" id="offer-related-heading">
              Other services
            </h2>
            <div className="offer-related-grid">
              {LIVE_OFFERS.filter((o) => o.path !== offer.path).map((other) => (
                <OfferCard offer={other} key={other.path} />
              ))}
            </div>
            <a className="text-link offer-home-link" href="/">
              <span aria-hidden="true">←</span>{" "}
              <span>Back to the home page</span>
            </a>
          </div>
        </section>

        <section className="section offer-cta">
          <div className="container">
            <div className="cta-row">
              <Magnetic>
                <a className="btn btn-primary" href={offer.cta.href}>
                  <span>{offer.cta.label}</span>{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </section>

        {offer.form ? <Closing /> : null}
      </main>
      <Footer />
    </>
  );
}
