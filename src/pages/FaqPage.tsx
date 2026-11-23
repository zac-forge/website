import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Closing } from "../components/Closing";
import { SubpageHero } from "../components/SubpageHero";
import { RelatedOffers } from "../components/RelatedOffers";
import { Reveal } from "../components/Reveal";
import { FaqAccordion } from "../components/FaqAccordion";
import { FAQ } from "./faq";

/** The questions in their groups, in the list's own order. */
const GROUPS = FAQ.reduce<{ name: string; slug: string; items: typeof FAQ }[]>((groups, item) => {
  const last = groups[groups.length - 1];
  if (last && last.name === item.group) last.items.push(item);
  else groups.push({ name: item.group, slug: item.group.toLowerCase().replace(/\s+/g, "-"), items: [item] });
  return groups;
}, []);

/**
 * /faq (Drew, 2026-11-17): the questions that sat on the home page between
 * Team and Connect, word for word. The shared hero with the page name, the
 * headline "Questions" as the page's one h1 with jump links to the groups
 * beside it, each group's questions as the shared accordion (all answers
 * visible with scripting off), the offer tiles, and the home page's closing
 * section. No icon over the page name: the hero icons are drawn per offer.
 * The same list feeds the page's FAQPage schema. Not in the main nav,
 * linked from the footer.
 */
export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="offer-page">
        <SubpageHero title="FAQ" />

        <section className="section offer-lead faq-page">
          <div className="container offer-split">
            <Reveal className="offer-split-side">
              <h1 className="h2 offer-title">Questions</h1>
              <nav className="faq-jump" aria-label="Question groups">
                <ul>
                  {GROUPS.map((group) => (
                    <li key={group.slug}>
                      <a className="chip" href={`#${group.slug}`}>
                        {group.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>
            <div className="offer-split-main faq-groups">
              {GROUPS.map((group, i) => (
                <Reveal className="faq-group" key={group.slug}>
                  <h2 className="faq-group-heading" id={group.slug}>
                    {group.name}
                  </h2>
                  <FaqAccordion items={group.items} id={group.slug} openFirst={i === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <RelatedOffers label="What we do" />

        <Closing cta={{ label: "Start with a Reality Check", href: "/#contact" }} />
      </main>
      <Footer />
    </>
  );
}
