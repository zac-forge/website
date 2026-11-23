import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LIVE_OFFERS } from "./offers";

/**
 * The 404 page (SEO pass, 2026-11-13), in the contact result pages' layout:
 * blue band, copy left, the Z right. Prerendered to dist/404.html, which
 * functions/worker.ts serves with status 404 for any path the static assets
 * do not have. noindex and out of the sitemap. The client renders it from
 * the catch-all route, so hydration matches whatever URL it was served at.
 */
const LINKS = [
  { href: "/", label: "Home" },
  ...LIVE_OFFERS.filter((o) => !o.flagged).map((o) => ({ href: o.path, label: o.navTitle })),
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <section id="top" className="result band band--blue">
          <div className="container result-grid">
            <div className="result-copy">
              <h1 className="h1 result-title">Page not found</h1>
              <p className="result-line">
                That page doesn't exist. Start from the home page, or go straight to an offer.
              </p>
              <ul className="cta-row result-links">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a className="text-link" href={link.href}>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="result-visual" aria-hidden="true">
              <img src="/art/z-hero.svg" width={358} height={311} alt="" decoding="async" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
