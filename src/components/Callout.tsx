/**
 * A quiet aside beside a section's main copy. Since the home page cut of
 * 2026-11-22 it carries the three principle lines that sat under the steps
 * of the removed How we work section, one each in Check, Fix, and Partner,
 * in the same style in all three places.
 */
export function Callout({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`callout ${className}`.trim()}>{children}</p>;
}
