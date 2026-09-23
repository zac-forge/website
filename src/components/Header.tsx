import { useEffect, useRef, useState } from "react";
import { Wordmark } from "./Brand";
import { BOOKING_URL } from "../lib/links";
import { LIVE_OFFERS } from "../pages/offers";

// Absolute hashes so the same header works from the offer pages, where a
// bare "#services" would point at nothing.
const NAV_LINKS = [
  { href: "/#track-record", label: "Track record" },
  { href: "/#approach", label: "How we work" },
  { href: "/#start-here", label: "Start here" },
];

/**
 * "What we do" as a small menu on desktop: the section link first, then one
 * entry per live offer page. Opens on hover, on click, and on keyboard focus,
 * and closes on Escape, on an outside click, and when focus leaves. Every
 * link is in the prerendered HTML whether or not the menu is open, so
 * assistants that do not run JavaScript still find the offer pages.
 */
function WhatWeDoMenu({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="nav-menu"
      data-open={open}
      onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(false)}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        className="nav-menu-button"
        aria-expanded={open}
        aria-controls="what-we-do-menu"
        onClick={() => setOpen((v) => !v)}
      >
        What we do
        <span className="nav-menu-caret" aria-hidden="true">
          ▾
        </span>
      </button>
      <ul id="what-we-do-menu" className="nav-menu-panel surface">
        <li>
          <a href="/#services" onClick={onNavigate}>
            All services
          </a>
        </li>
        {LIVE_OFFERS.map((offer) => (
          <li key={offer.path}>
            <a href={offer.path} onClick={onNavigate}>
              {offer.rowTitle}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The board's header: wordmark at a 48px inset, nav items in 14px black
 * weight straight after it, and the pill button at the far right. It sits on
 * the page ground with no bar of its own; a hairline appears once the page
 * has moved so the sticky header reads as a surface.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="header-inner">
        <a href="/#top" className="brand" onClick={close} aria-label="zacforge, home">
          <Wordmark className="brand-wordmark" />
        </a>

        <nav className="site-nav" aria-label="Primary" data-open={open}>
          {/* Desktop: the menu. Mobile: a plain link, swapped in by CSS. */}
          <WhatWeDoMenu onNavigate={close} />
          <a className="nav-plain" href="/#services" onClick={close}>
            What we do
          </a>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
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
