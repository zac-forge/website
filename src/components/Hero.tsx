import { Magnetic } from "./Magnetic";
import { SubpageHero } from "./SubpageHero";
import { BOOKING_URL, REALITY_CHECK_LABEL } from "../lib/links";
import { step } from "../lib/reveal";

/**
 * Misha's home banner of 2026-11-13 (412:1907 and its siblings, cached in
 * design/home-hero/): the offer pages' swoosh band through SubpageHero's
 * home variant, with the header clear over it at the top, the headline,
 * subline, and buttons, and the gradient Z (412:1934, the same art as MB11's
 * 358:1060). The band has no dotted line art now. Copy is the handoff of 2026-11-18 (Drew); the two "IT"s get no special styling until Misha decides. The comp has no eyebrow or
 * booking pill here; the booking pill (Drew, 2026-11-05) stays. The proof
 * line under the buttons was removed by Drew on 2026-11-13. The OG cards
 * (public/og/) are drawn from this hero by `npm run og`; rerun it after a change.
 *
 * The entrance is staged in CSS (motion.css, `.hero-stage`): the two headline
 * lines, the subline, the buttons, then the Z, on load, with no script, so
 * the headline paints without waiting for the bundle.
 */
export function Hero() {
  return (
    <SubpageHero variant="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="h1 hero-title">
            <span className="h-light hero-title-lead hero-stage" style={step(0)}>
              AI made everyone an IT expert.
            </span>{" "}
            <span className="hero-stage" style={step(1)}>
              It didn't make IT work.
            </span>
          </h1>
          <p className="hero-body copy hero-stage" style={step(2)}>
            We bring clarity and sanity. Start with a free senior review of your project.
          </p>
          <div className="cta-row hero-stage" style={step(3)}>
            <Magnetic>
              <a className="btn btn-primary" href="/#contact">
                <span>{REALITY_CHECK_LABEL}</span>{" "}
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
            <a className="btn btn-secondary" href={BOOKING_URL}>
              <span>Book a 20-minute call</span>
            </a>
          </div>
        </div>

        {/* Entrance is a CSS animation on the image itself, in motion.css. */}
        <div className="hero-visual" aria-hidden="true">
          <img
            className="hero-art"
            src="/art/mb11/hero-z.svg"
            width={334}
            height={290}
            alt=""
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </SubpageHero>
  );
}
