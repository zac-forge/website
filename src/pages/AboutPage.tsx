import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SubpageHero } from "../components/SubpageHero";
import { WhoWeAre } from "../components/WhoWeAre";

/**
 * "What is ZAC", section 9 of Drew's copy handoff of 2026-11-18, word for
 * word, also the opening of llms.txt.
 */
export const ABOUT_COPY = [
  "ZAC is a group of senior IT professionals who bring clarity and sanity to AI. We use AI where it helps, and human experience and judgment where it doesn't.",
  "We've been through every wave since the .com boom. The tech changes. People and business don't. And just like the .com boom, there's a ton of hype right now and a lot of bad business ideas dressed up in new tech.",
  "Technology doesn't change business principles. It only changes how you get there. The people who are business savvy and AI fluent will come out on top, same as last time.",
  "When the hype fades, ZAC will still be here doing what we've always done: building websites, applications and brands. Planning it, building it, or fixing it, we can help.",
];

/**
 * /about (Drew, 2026-11-18), on the /faq layout: the shared hero with the
 * page name, the headline "About ZAC" (Drew, 2026-11-18), the handoff's "What is ZAC" copy, then the
 * Principals section from the home page, unchanged. The top-bar "About"
 * link points here.
 */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="offer-page">
        <SubpageHero title="About" />

        <section className="section offer-lead about-lead">
          <div className="container">
            <h1 className="h2 offer-title">About ZAC</h1>
            {ABOUT_COPY.map((p) => (
              <p className="offer-intro" key={p}>
                {p}
              </p>
            ))}
          </div>
        </section>

        <WhoWeAre />
      </main>
      <Footer />
    </>
  );
}
