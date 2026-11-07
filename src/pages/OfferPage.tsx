import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Magnetic } from "../components/Magnetic";
import { Closing } from "../components/Closing";
import { LIVE_OFFERS } from "./offers";
import type { Offer, Block } from "./offers";

/**
 * Shared offer page template: a navy band hero (eyebrow, H1, the v5 line
 * placing the page behind the Reality Check, intro), then lists, steps,
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
              <p className="offer-titled-body">{item.body}</p>
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

/**
 * The subline may carry one inline link, written [text](/path), so the line
 * placing a page behind the Reality Check can link to it. Plain text
 * otherwise.
 */
function Subline({ text }: { text: string }) {
  const m = text.match(/^(.*)\[([^\]]+)\]\(([^)]+)\)(.*)$/);
  if (!m) return <p className="offer-subline">{text}</p>;
  return (
    <p className="offer-subline">
      {m[1]}
      <a className="inline-link" href={m[3]}>
        {m[2]}
      </a>
      {m[4]}
    </p>
  );
}

export default function OfferPage({ offer }: { offer: Offer }) {
  return (
    <>
      <Header />
      <main className="offer-page">
        <section id="top" className="offer-hero band band--navy">
          <div className="container">
            <p className="eyebrow">{offer.eyebrow}</p>
            <h1 className="h1 offer-title">{offer.h1}</h1>
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
              <BlockView block={block} />
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
                  <dd>{f.answer}</dd>
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
                <a className="offer-related-card surface" href={other.path} key={other.path}>
                  <span className="offer-related-title">{other.navTitle}</span>
                  <span className="offer-related-body">{other.summary}</span>
                  <span className="text-link offer-related-link">
                    <span>More</span>{" "}
                    <span aria-hidden="true">→</span>
                  </span>
                </a>
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
