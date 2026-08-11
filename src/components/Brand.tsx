import { useId } from "react";

/**
 * Brand lockups, inlined rather than loaded through <img>.
 *
 * This matters: an SVG referenced as `<img src="...">` renders in an isolated
 * document with no access to the page's fonts, so the `<text>` elements in the
 * supplied wordmark fall back to Arial no matter what the page has loaded.
 * Inlining puts them in the document, where the Space Grotesk webfont applies.
 *
 * Geometry, colours and type settings are exactly as supplied in
 * zacforge_logo_assets. The only change is that the gradient id is scoped per
 * instance, because the wordmark renders in both the header and the footer and
 * duplicate ids in one document are invalid (and the second one silently wins).
 *
 * The slash wordmark and ZF monogram are alternates, not part of this system.
 * They live in design/brand-alternates/ and are deliberately not shipped.
 */

export function Wordmark({ className = "" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg
      className={className}
      width="520"
      height="120"
      viewBox="0 0 520 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ZACFORGE"
    >
      <defs>
        <linearGradient id={gradientId} x1="14" y1="18" x2="94" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6875" />
          <stop offset=".42" stopColor="#E83445" />
          <stop offset="1" stopColor="#9E1F2D" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d="M15 25h88L86 46H50l49 44H15l18-22h35L15 25Z" />
      <text
        x="122"
        y="78"
        fill="#F4F2F0"
        fontFamily="Space Grotesk, Arial, sans-serif"
        fontSize="43"
        fontWeight="600"
        letterSpacing="2"
      >
        ZAC
      </text>
      <text
        x="224"
        y="78"
        fill="#A6A4AA"
        fontFamily="Space Grotesk, Arial, sans-serif"
        fontSize="43"
        fontWeight="500"
        letterSpacing="2"
      >
        FORGE
      </text>
    </svg>
  );
}

export function ZacMark({ className = "" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="25" y1="18" x2="135" y2="142" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6875" />
          <stop offset=".42" stopColor="#E83445" />
          <stop offset="1" stopColor="#9E1F2D" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d="M25 27h111l-22 27H69l62 55H25l22-27h45L25 27Z" />
      <path fill="#FF8A94" opacity=".28" d="M35 30h91l-9 11H47L35 30Z" />
    </svg>
  );
}
