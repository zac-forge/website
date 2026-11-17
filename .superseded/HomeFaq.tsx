import { Reveal } from "../src/components/Reveal";
import { HOME_FAQ } from "../src/pages/faq";

/**
 * FAQ, between Team and Connect (Drew, 2026-11-13). The offer pages' FAQ
 * pattern (.offer-faq, a definition list) under the home page's eyebrow and
 * heading. The same list feeds the home FAQPage schema.
 */
export function HomeFaq() {
  return (
    <section id="faq" className="section offer-block offer-faq" aria-labelledby="faq-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="h2" id="faq-heading">
            Questions
          </h2>
          <dl>
            {HOME_FAQ.map((f) => (
              <div className="faq-item" key={f.question}>
                <dt>{f.question}</dt>
                <dd>{f.answer}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
