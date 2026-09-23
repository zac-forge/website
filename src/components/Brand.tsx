/**
 * Brand lockups from Misha's board.
 *
 * The wordmark is node 4:106 on board 6:2, exported from Figma as SVG with
 * the lettering outlined, so it carries its own letterforms and cannot drift
 * with the page font. The mark is the closing illustration, node 42:346, the
 * only standalone Z on the board.
 *
 * Intrinsic sizes are declared so the browser reserves the box before the
 * file arrives, which keeps layout shift at zero.
 */
const WORDMARK = { src: "/brand/zacforge-wordmark.svg", w: 103, h: 20 };
const MARK = { src: "/art/z-closing.svg", w: 319, h: 332 };

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`lockup ${className}`}>
      <img
        src={WORDMARK.src}
        width={WORDMARK.w}
        height={WORDMARK.h}
        alt="zacforge"
        draggable={false}
        decoding="async"
      />
    </span>
  );
}

export function ZacMark({ className = "" }: { className?: string }) {
  return (
    <span className={`lockup ${className}`} aria-hidden="true">
      <img src={MARK.src} width={MARK.w} height={MARK.h} alt="" draggable={false} decoding="async" />
    </span>
  );
}
