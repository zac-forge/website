import { useEffect, useRef, useState } from "react";
import { Wordmark } from "./Brand";
import { BOOKING_URL } from "../lib/links";
import { LIVE_OFFERS } from "../pages/offers";

// Absolute hashes so the same header works from the offer pages, where a
// bare "#services" would point at nothing. Labels and order set by Drew on
// 2026-11-12 over MB11's (357:791): Connect stays the form section, the nav
// does not repeat it.
const NAV_LINKS = [
  { href: "/case-studies", label: "Case studies" },
  // "Team" became "About", the /about page (Drew, 2026-11-18).
  { href: "/about", label: "About" },
];

/**
 * The What we do menu, in the order of Drew's copy handoff of 2026-11-18.
 * Names and lines come from each offer's own data (`menuTitle` or
 * `navTitle`, and `line`), the source the offer tiles read too, so the menu
 * and the tiles cannot drift. "Reality Check" is the menu's shorter name;
 * the footer and the breadcrumbs keep the navTitle. Brand system joins, with
 * no line, only when its flag is on.
 */
type MenuItem = { href: string; title: string; line?: string };
const MENU_ORDER = ["/reality-check", "/fix-week", "/web-partner", "/ai-visibility", "/platform-escape", "/accessibility", "/brand-system"];
const MENU: MenuItem[] = MENU_ORDER.flatMap((path) => {
  const offer = LIVE_OFFERS.find((o) => o.path === path);
  return offer ? [{ href: offer.path, title: offer.menuTitle ?? offer.navTitle, line: offer.line }] : [];
});

/**
 * "What we do" as a small menu on desktop: the section link first, then one
 * entry per item in MENU, each with its one-line context under the name. Opens on hover, on click, and on keyboard focus,
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
          <a href="/#what-we-do" onClick={onNavigate}>
            What we do
          </a>
        </li>
        {MENU.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={onNavigate}>
              <span className="nav-menu-title">{item.title}</span>
              {/* The space keeps name and line apart in the plain text that
                  assistants read. */}
              {item.line ? <> <span className="nav-menu-line">{item.line}</span></> : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * MB11's header (357:786 to 359:1106): wordmark at a 40px inset, nav items
 * in 14px black weight straight after it, and the purple "Let's talk" pill
 * at the far right, which books the 20-minute call (Drew, 2026-11-12). It sits on the blue hero band, so it is blue on every
 * page and each page opens on a blue band beneath it.
 */
export function Header({ hideCta = false }: { hideCta?: boolean } = {}) {
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
    <>
    {/* First in the tab order on every page: straight to <main id="main">.
        Off screen until it takes focus (Drew, 2026-11-22). */}
    <a className="skip-link" href="#main">
      Skip to main content
    </a>
    <header className="site-header" data-scrolled={scrolled}>
      <div className="header-inner">
        <a href="/#top" className="brand" onClick={close} aria-label="zacforge, home">
          <Wordmark className="brand-wordmark" />
        </a>

        <nav className="site-nav" aria-label="Primary" data-open={open}>
          {/* Desktop: the menu. Mobile: a plain link, swapped in by CSS. */}
          <WhatWeDoMenu onNavigate={close} />
          <a className="nav-plain" href="/#what-we-do" onClick={close}>
            What we do
          </a>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          {hideCta ? null : (
            <a className="btn btn-primary nav-cta" href={BOOKING_URL} onClick={close}>
              <span>Let's talk</span>{" "}
              <span aria-hidden="true">→</span>
            </a>
          )}
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
    </>
  );
}
