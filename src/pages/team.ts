/**
 * The principals, read by the Principals section (home and /about) and by
 * the Person entries in the schema (bios as each Person's description). Names,
 * roles, and intro are Drew's approved choices of 2026-11-18, the bios his of
 * 2026-11-22: full names on the cards, and "Luke" in Luciano's bio because
 * that's what he goes by. Slugs name the photo files
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
      "25 years building for the web, across startups, his own agency and IBM. At IBM he was one of two developers who built the code base for ibm.com/software, which was later rolled out across ibm.com, first in North America and then worldwide. He leads every ZAC engagement, from the first conversation through hands-on delivery.",
    ],
  },
  {
    slug: "design-principal",
    name: "Misha Gervits",
    role: "Design Principal",
    bio: [
      "A classically trained designer from New York with Ogilvy on his résumé. He leads brand, web and visual design at ZAC, and he's the reason our work never looks machine-made.",
    ],
  },
  {
    slug: "principal-engineer",
    name: "Luciano Monegatto",
    cardName: 'Luciano "Luke" Monegatto',
    role: "Principal Engineer",
    bio: [
      "Luke has built alongside Andrew since IBM, across web, apps and mobile. He's who we hand the hardest problems to, and we've never handed him one he couldn't solve.",
    ],
  },
];
