import { step } from "../lib/reveal";

/**
 * A quiet aside beside a section's main copy. Since the home page cut of
 * 2026-11-22 it carries the three principle lines that sat under the steps
 * of the removed How we work section, one each in Check, Fix, and Partner,
 * in the same style in all three places.
 */
export function Callout({
  children,
  className = "",
  index,
}: {
  children: React.ReactNode;
  className?: string;
  /** Its position in a staggered reveal, when it is a `.reveal-item`. */
  index?: number;
}) {
  return (
    <p className={`callout ${className}`.trim()} style={index === undefined ? undefined : step(index)}>
      {children}
    </p>
  );
}
