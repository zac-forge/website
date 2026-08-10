import { useState } from "react";
import { BOOKING_URL } from "../lib/links";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <img src="/brand/zacforge-wordmark.svg" alt="ZAC" className="brand-wordmark" />
        </a>

        <nav className="site-nav" aria-label="Primary" data-open={open}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary nav-cta" href={BOOKING_URL}>
            <span>Book a call</span>
            <span aria-hidden="true"> →</span>
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
