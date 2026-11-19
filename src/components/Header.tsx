import { useEffect, useRef, useState } from "react";
import { Wordmark } from "./Brand";
import { BOOKING_URL } from "../lib/links";
import { BRAND_SYSTEM } from "../lib/flags";

// Absolute hashes so the same header works from the offer pages, where a
// bare "#services" would point at nothing. Labels and order set by Drew on
// 2026-11-12 over MB11's (357:791): Connect stays the form section, the nav
// does not repeat it.
const NAV_LINKS = [
  { href: "/#track-record", label: "Case studies" },
  { href: "/#how-we-work", label: "How we work" },
  { href: "/#who-we-are", label: "Team" },
];

/**
 * The What we do menu, labels, lines, and order from Drew's copy handoff of
 * 2026-11-18. Labels here are the menu's own: "Reality Check" and
 * "Accessibility" are shorter than the pages' navTitle, which the footer and
 * the breadcrumbs keep. Platform Escape has no page, so it goes to its card
 * on home. Brand system joins, with no line, only when its flag is on.
 */
type MenuItem = { href: string; title: string; line?: string };
const MENU: MenuItem[] = [
  { href: "/reality-check", title: "Reality Check", line: "Free senior review of your project" },
  { href: "/fix-week", title: "The Fix", line: "Fixed in a week, or it's free." },
  { href: "/web-partner", title: "Web Partner", line: "Senior help on call, month to month" },
  { href: "/ai-visibility", title: "AI Visibility", line: "Show up when people ask AI" },
  {
    href: "/#platform-escape",
    title: "Platform Escape",
    line: "Off WordPress or Wix, onto something you own",
  },
  {
    href: "/accessibility",
    title: "Accessibility",
    line: "Works for everyone. Ready for the 2027 deadline.",
  },
  ...(BRAND_SYSTEM ? [{ href: "/brand-system", title: "Brand system" }] : []),
];

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
  );
}
