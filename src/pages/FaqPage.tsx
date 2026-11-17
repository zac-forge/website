import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Magnetic } from "../components/Magnetic";
import { SubpageHero } from "../components/SubpageHero";
import { RelatedOffers } from "../components/RelatedOffers";
import { FAQ } from "./faq";

/**
 * /faq (Drew, 2026-11-17): the questions that sat on the home page between
 * Team and Connect, word for word, on the offer page template. The shared
 * hero with the page name (the home section's eyebrow, "FAQ"), the headline
 * (its heading, "Questions") as the page's one h1, the list in the offer
 * pages' FAQ style, the offer cards, and the offers' closing call to action.
 * No icon over the page name: the hero icons are drawn per offer. The same
 * list feeds the page's FAQPage schema. Not in the main nav, linked from the
 * footer.
 */
export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="offer-page">
        <SubpageHero title="FAQ" />

        <section className="section offer-lead">
          <div className="container">
            <h1 className="h2 offer-title">Questions</h1>
          </div>
        </section>

        <section className="section offer-block offer-faq">
          <div className="container">
            <dl>
              {FAQ.map((f) => (
                <div className="faq-item" key={f.question}>
                  <dt>{f.question}</dt>
                  <dd>{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <RelatedOffers label="What we do" />

        <section className="section offer-cta">
          <div className="container">
            <div className="cta-row">
              <Magnetic>
                <a className="btn btn-primary" href="/#contact">
                  <span>Start with a Reality Check</span>{" "}
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
