import { Wordmark } from "./Brand";
import { CONTACT_EMAIL } from "../lib/links";
import { LIVE_OFFERS } from "../pages/offers";

/**
 * No footer on the board. A hairline, the brand, two link groups (the offer
 * pages and the home sections), and the legal line. Copy unchanged.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="/#top" aria-label="zacforge, back to top">
            <Wordmark className="footer-wordmark" />
          </a>
          <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <nav className="footer-nav" aria-labelledby="footer-offers">
          <p className="footer-group" id="footer-offers">
            Offers
          </p>
          {LIVE_OFFERS.map((offer) => (
            <a key={offer.path} href={offer.path}>
              {offer.rowTitle}
            </a>
          ))}
        </nav>

        <nav className="footer-nav" aria-labelledby="footer-site">
          <p className="footer-group" id="footer-site">
            Site
          </p>
          <a href="/#track-record">Track record</a>
          <a href="/#services">What we do</a>
          <a href="/#approach">How we work</a>
        </nav>

        <p className="footer-legal">
          Ventura, California. © {year} ZAC Consulting LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
