import { Wordmark } from "./Brand";
import { CONTACT_EMAIL } from "../lib/links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" aria-label="ZACFORGE, back to top">
            <Wordmark className="footer-wordmark" />
          </a>
          <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <p className="footer-legal">© {year} ZAC Consulting LLC. All rights reserved.</p>

        <nav className="footer-nav" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </footer>
  );
}
