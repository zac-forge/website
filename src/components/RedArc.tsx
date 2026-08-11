/**
 * The red planetary limb behind the closing section.
 *
 * Same compositing rule as the hero art: the source is a black plate with no
 * alpha, so it is screened over the page and no ancestor may create a
 * stacking context. The pulse is CSS rather than Motion so nothing writes an
 * inline `filter` that the keyframes would then have to fight.
 */
export function RedArc() {
  return (
    <img
      className="red-arc"
      src="/art/red-arc.webp"
      width={1920}
      height={720}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading="lazy"
      decoding="async"
    />
  );
}
