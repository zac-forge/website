import { useEffect, useState } from "react";
import { Wordmark } from "./Brand";
import { BOOKING_URL } from "../lib/links";

// Absolute hashes so the same header works from the offer pages, where a
// bare "#services" would point at nothing.
const NAV_LINKS = [
  { href: "/#services", label: "What we do" },
  { href: "/#track-record", label: "Track record" },
  { href: "/#approach", label: "How we work" },
  { href: "/#start-here", label: "Start here" },
];

/**
 * The board's header: wordmark at a 48px inset, nav items in 14px black
 * weight straight after it, and the pill button at the far right. It sits on
 * the page ground with no bar of its own; a hairline appears once the page
 * has moved so the sticky header reads as a surface.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="header-inner">
        <a href="/#top" className="brand" onClick={() => setOpen(false)} aria-label="zacforge, home">
          <Wordmark className="brand-wordmark" />
        </a>

        <nav className="site-nav" aria-label="Primary" data-open={open}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary nav-cta" href={BOOKING_URL}>
            <span>Book a call</span>
            <span aria-hidden="true">→</span>
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
