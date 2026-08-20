import { useEffect, useState } from "react";
import { Wordmark, ZacMark } from "./Brand";
import { BOOKING_URL } from "../lib/links";

const NAV_LINKS = [
  { href: "#track-record", label: "Track record" },
  { href: "#services", label: "What we do" },
  { href: "#approach", label: "How we work" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The bar is transparent over the hero and only materialises once the page
  // has moved, so the hero reads as full bleed on arrival.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)} aria-label="ZACFORGE, home">
          <Wordmark className="brand-wordmark" />
          <ZacMark className="brand-mark-only" />
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
