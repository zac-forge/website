/**
 * The principals, read by the Principals section (home and /about) and by
 * the Person entries in the schema. Names, roles, intro, and bios are Drew's
 * approved choices of 2026-11-18: full names on the cards, and "Luke" in
 * Luciano's bio because that's what he goes by. Slugs name the photo files
 * in src/assets/team/ and stay as they were.
 */
/**
 * `cardName` overrides `name` on the card only (Drew, 2026-11-22: Luciano's
 * card reads Luciano "Luke" Monegatto so the bio's "Luke" makes sense). The
 * schema and initials keep `name`.
 */
export type TeamMember = { slug: string; name: string; cardName?: string; role: string; bio: string[] };

export const TEAM_INTRO = [
  "We were already the guys. Now we're the guys with AI.",
  "Three people who've worked together since IBM. What used to take a floor of people now takes us and AI doing the junior work.",
  "Fast, fair and friendly.",
];

export const TEAM: TeamMember[] = [
  {
    slug: "andrew-johnston",
    name: "Andrew Johnston",
    role: "Founder, Principal",
    bio: [
      "Taught himself HTML in the dot com boom and never stopped building. Bay Area startups, then IBM, where he led development for IBM.com North America and ran tech at the Design Lab in New York.",
      "He's who you talk to, and he still writes code.",
    ],
  },
  {
    slug: "design-principal",
    name: "Misha Gervits",
    role: "Design Principal",
    bio: [
      "Classically trained. New York. Ogilvy. If you can see it, it's his.",
      "He's the reason our work doesn't look like AI made it.",
    ],
  },
  {
    slug: "principal-engineer",
    name: "Luciano Monegatto",
    cardName: 'Luciano "Luke" Monegatto',
    role: "Principal Engineer",
    bio: [
      "The fixer. We've never brought him a problem he couldn't solve, and we've brought him some ugly ones.",
      "He's been building alongside Andrew since IBM, across web, apps and mobile. When something has to work, it goes to Luke.",
      "Also the nicest guy on the team.",
    ],
  },
];
