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

/**
 * The illumination layer for the Z symbol.
 *
 * The lockup is one raster containing both the mark and the lettering, so the
 * Z is isolated rather than separated: this overlay is masked by the artwork's
 * own alpha, which means it can only paint where there is ink, and clipped to
 * the left portion of the lockup, where the mark lives. Measured on the asset,
 * the Z inks out to x=216 of 720 and the wordmark starts at x=233, so the cut
 * falls in the gap between them at 31%.
 *
 * The consequence that matters: the ZACFORGE lettering is structurally
 * untouched, and nothing here can move, scale or rotate the logo. Only colour
 * and luminosity change.
 */
function ZIllumination({ markInset, wordInset }: { markInset?: string; wordInset?: string }) {
  return (
    <>
      {/* Unmasked, and therefore soft: a bloom keyed to the mark's position
          rather than its silhouette, which is what a glow around an object
          looks like. Sits behind the artwork. */}
      <span className="lockup-bloom" aria-hidden="true" />
      <span className="lockup-z" aria-hidden="true">
        {/* This wrapper is the mark's region, expressed as a box rather than a
            clip on a full-size layer. Two reasons: the wrapper is never
            transformed, so the lit region cannot slide off the mark the way a
            clip on the sweep itself would; and it makes the sweep's travel a
            percentage of the mark, so the same keyframes read correctly on the
            wide lockup and on the standalone mark. */}
        <span className="lockup-z-mark" style={{ inset: markInset }}>
          <span className="lockup-z-dim" />
          <span className="lockup-z-sweep" />
          <span className="lockup-z-hot" />
        </span>
        {wordInset ? <span className="lockup-z-word" style={{ inset: wordInset }} /> : null}
      </span>
    </>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`lockup ${className}`}
      // The mask keys every overlay to the artwork's own alpha. --z-cx is the
      // horizontal centre of the mark, used to place the unmasked bloom.
      style={
        {
          "--lockup-src": `url("${LOCKUP.src}")`,
          "--z-cx": "15.5%",
        } as React.CSSProperties
      }
    >
      <img
        className="lockup-art"
        src={LOCKUP.src}
        width={LOCKUP.w}
        height={LOCKUP.h}
        alt="ZACFORGE"
        draggable={false}
        decoding="async"
      />
      <ZIllumination markInset="0 69% 0 0" wordInset="0 0 0 31%" />
    </span>
  );
}

export function ZacMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`lockup ${className}`}
      aria-hidden="true"
      style={{ "--lockup-src": `url("${MARK.src}")`, "--z-cx": "50%" } as React.CSSProperties}
    >
      <img
        className="lockup-art"
        src={MARK.src}
        width={MARK.w}
        height={MARK.h}
        alt=""
        draggable={false}
        decoding="async"
      />
      {/* No clips: this asset is the mark and nothing else, so there is no
          lettering to separate out. */}
      <ZIllumination />
    </span>
  );
}
