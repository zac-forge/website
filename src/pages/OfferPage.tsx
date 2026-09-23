import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Magnetic } from "../components/Magnetic";
import { BOOKING_URL } from "../lib/links";
import type { Offer, Block } from "./offers";

/**
 * Shared offer page template: eyebrow, H1, intro, lists, steps, proof, FAQ,
 * closing CTA. Deliberately no entrance animation on the copy. These pages
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
                <p className="offer-step-body">{item.body}</p>
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

export default function OfferPage({ offer }: { offer: Offer }) {
  return (
    <>
      <Header />
      <main className="offer-page">
        <section id="top" className="offer-hero">
          <div className="container">
            <p className="eyebrow">{offer.eyebrow}</p>
            <h1 className="h1 offer-title">{offer.h1}</h1>
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

        <section className="section offer-cta">
          <div className="container">
            <div className="cta-row">
              <Magnetic>
                <a className="btn btn-primary" href={BOOKING_URL}>
                  <span>Book a call</span>
                  <span aria-hidden="true"> →</span>
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
