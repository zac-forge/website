/**
 * Brand lockups.
 *
 * These are the artwork from logo-set.png, not a redraw. The sheet is a raster
 * render on black, so each lockup was cropped to its ink bounds and keyed off
 * the black by unmultiplying (alpha = max(r,g,b), colour divided back out).
 * That gives real transparency, so they composite correctly on any ground
 * without a blend mode and without a plate edge.
 *
 * Raster rather than SVG is deliberate here: the earlier SVG wordmark set its
 * letterforms as <text> in Space Grotesk, which cannot resolve inside an
 * <img> and silently fell back to Arial. An image carries its own letterforms
 * and cannot drift.
 *
 * Intrinsic sizes are declared so the browser reserves the box before the
 * image decodes, which is what keeps CLS at zero.
 */

const LOCKUP = { src: "/brand/zacforge-lockup.webp", w: 720, h: 140 };
const MARK = { src: "/brand/zac-mark.webp", w: 256, h: 163 };

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      className={className}
      src={LOCKUP.src}
      width={LOCKUP.w}
      height={LOCKUP.h}
      alt="ZACFORGE"
      draggable={false}
      decoding="async"
    />
  );
}

export function ZacMark({ className = "" }: { className?: string }) {
  return (
    <img
      className={className}
      src={MARK.src}
      width={MARK.w}
      height={MARK.h}
      alt=""
      aria-hidden="true"
      draggable={false}
      decoding="async"
    />
  );
}
