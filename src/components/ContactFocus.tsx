import { useEffect } from "react";

const FIELD_ID = "contact-name";
/** Breathing room above the first field, under the sticky header. */
const GAP = 24;

/**
 * Sends every link to the contact form (/#contact, #contact) straight to the
 * form: scrolls so the Name field sits just below the sticky header, then
 * moves keyboard focus to it. Without JavaScript the hash still lands on the
 * section.
 *
 *   - A click on a #contact link when the form is on the current page is
 *     handled in place, with the hash kept in the URL.
 *   - Arriving on a page with #contact in the URL (from another page, a
 *     bookmark, or the back button) runs the same once the page is ready.
 *
 * Smooth only when the visitor has not asked for reduced motion.
 */
function focusContactForm(smooth: boolean): boolean {
  const input = document.getElementById(FIELD_ID) as HTMLInputElement | null;
  if (!input) return false;
  const header = document.querySelector<HTMLElement>(".site-header");
  const field = input.closest<HTMLElement>(".field") ?? input;
  // Layout position, not getBoundingClientRect: the form sits inside an entrance
  // reveal whose translate would otherwise throw the target off by its offset.
  let y = 0;
  for (let el: HTMLElement | null = field; el; el = el.offsetParent as HTMLElement | null) y += el.offsetTop;
  const top = y - (header?.offsetHeight ?? 0) - GAP;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: Math.max(0, top), behavior: smooth && !reduce ? "smooth" : "auto" });
  input.focus({ preventScroll: true });
  return true;
}

export function ContactFocus() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.hash !== "#contact" || url.pathname !== window.location.pathname) return;
      if (!document.getElementById(FIELD_ID)) return;
      e.preventDefault();
      if (window.location.hash !== "#contact") history.pushState(null, "", "#contact");
      focusContactForm(true);
    };
    const onHash = () => {
      if (window.location.hash === "#contact") focusContactForm(true);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHash);
    // Arrived with #contact: wait a frame so layout and fonts have settled.
    if (window.location.hash === "#contact") requestAnimationFrame(() => focusContactForm(false));

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);
  return null;
}
