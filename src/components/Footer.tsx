import { Wordmark } from "./Brand";
import { CONTACT_EMAIL } from "../lib/links";

/** No footer on the board. A hairline and three quiet columns. Copy unchanged. */
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

        <p className="footer-legal">
          Ventura, California. © {year} ZAC Consulting LLC. All rights reserved.
        </p>

        <nav className="footer-nav" aria-label="Footer">
          <a href="/#track-record">Track record</a>
          <a href="/#services">What we do</a>
          <a href="/#approach">How we work</a>
        </nav>
      </div>
    </footer>
  );
}
