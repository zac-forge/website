/**
 * A screenshot in a browser frame drawn in CSS: a bar with three dots over
 * the image. Shared by the home case cards, where it is decoration inside
 * an aria-hidden block and takes no alt, and /case-studies, where it is the
 * lead of each case and carries the image's alt text.
 */
export function BrowserFrame({
  base,
  alt = "",
  className = "",
  sizes = "(max-width: 760px) calc(100vw - 96px), 560px",
}: {
  /** `<base>-360.webp` and `<base>-720.webp` in public/work/. */
  base: string;
  alt?: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`browser ${className}`.trim()}>
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <img
        src={`${base}-720.webp`}
        srcSet={`${base}-360.webp 360w, ${base}-720.webp 720w`}
        sizes={sizes}
        alt={alt}
        width={720}
        height={405}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
