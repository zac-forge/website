# Positioning memo: systems that outlive the engagement

*2026-08-20. A recommendation, not a decision. Nothing on the site has changed.*

> **Context:** the deployed site is a working copy. Misha is redesigning the brand and the site now, so this memo is intended as input to that work, not as a spec to execute against the current design.

---

## The short version

The v3 site sells **price**. Your rarest asset is **durability**. Those are different arguments, they are in tension, and right now the weaker one is in the largest type on the page.

The fix is smaller than a reposition. The page already has a section called "Why now" whose entire job is the economics argument. The hero is currently doing that section's job for it. Move the economics back to Why now, give the hero the durability claim, and the structure you shipped this morning holds.

---

## What is wrong with the current frame

"The projects you could not justify are affordable now" has three problems, in increasing order of seriousness.

**1. It anchors you to the deprioritized budget.** Work gets shelved because it lost a priority argument. The frame says, quietly, that ZAC does the things that were not important enough to fund. That is the bottom of the client's stack.

**2. It is a demand-generation frame wearing a positioning frame's clothes.** It names an *occasion to buy*. Occasion framings are strong in outbound and in campaigns. As the permanent identity of a firm they leak: a buyer without a shelved-project problem has just been told they are not the customer.

**3. It sells the one thing you cannot defend.** Cheapness is claimable by anyone and provable by no one. Worse, in this category cheap is a negative signal. The buyer's scar tissue is from a cheap engagement that left them with something nobody could maintain.

That third point is the real cost. **The price argument actively undercuts the durability argument.** Cheap and long-lasting sit badly together in a buyer's head. You are currently paying a credibility tax on your best asset in order to lead with your weakest.

---

## What the market supports

**Generalist positioning is invisible.** 89% of dev agencies position for 3 or more verticals on their homepage; 4% get cited by assistants in any of them. Specialists average $225,000 revenue per employee against $150,000 for generalists. The stated failure mode is precisely the generalist trap: too expensive for a buyer who could hire a freelancer, too generic for a buyer evaluating specialists.

**The category's deepest fear is abandonment.** The recurring complaint in the buyer literature is not cost or delay. It is being left holding an application built by an agency that then left: no documentation, nobody who can maintain it, dependencies rotting, the code "abandoned so long it is barely usable."

**The market has split into disposable and durable.** Fast-fashion software on one side, systems built to last on the other, with longevity now an explicit premium signal.

You are one of very few firms that can answer the abandonment fear with dated, checkable evidence instead of a promise.

---

## The positioning

> **ZAC builds systems that outlive the engagement.**

Not "quality software," which is unfalsifiable and universally claimed. The specific, checkable version:

> Systems we built in 2010 are in production today. Their owners run them without us.

Two claims, and the second is the one nobody else makes. Most agencies are structurally incentivized toward lock-in: the handover is where their revenue ends. You have documented proof of doing the opposite, moving Legacy Studios off proprietary software onto open source and then handing the system to their own team. **That is the most differentiated sentence on your entire site and it is currently buried in the middle of a case study.**

### What the buyer is actually buying

Not a build. Something that will still be working after the person who approved it has moved on, that their own team can run, and that will not become someone else's emergency in three years.

### Why the economics argument still earns its place

It answers "why now," which is a real question and already has a section. The order matters:

- **What we are:** we build things that last (hero)
- **Why you can act now:** the cost of building changed (Why now)
- **Proof:** 16 years of it (Track record)

Right now the first and second are the same argument, and the hero is the weaker telling of it.

---

## What changes

| | Now | Proposed |
|---|---|---|
| Hero headline | "The projects you could not justify are affordable now." | A durability claim |
| Hero proof line | "Systems still running since 2010." Set as fine print. | The load-bearing line, set large |
| Why now | Economics, second on the page | Unchanged copy, but it is now the only place the price argument lives |
| Track record | Case studies with "still running" as a detail | "Still running" becomes the through-line and the handover gets promoted |
| Start here | Two offers, priced | Unchanged. Price belongs here, where a buyer is ready for it. |
| Closing | Unchanged | Unchanged |

**Most of the site survives.** The Track record rebuild, Start here, the section order, and the closing all hold. This is a hero rewrite plus a promotion of the handover story, not a third rewrite.

---

## What this costs you

**Inbound may narrow slightly.** Durability appeals most to buyers with something that matters and who have been burned. A buyer who wants a cheap disposable prototype will self-select out. That is intended, and it is the same trade the specialist revenue data rewards, but it is a real trade.

**You give up the "affordable" hook.** It is a genuinely good hook and it converts. It just should not be the identity of the firm. It keeps its job in Why now and in Start here.

**Durability is slow to prove to a first-time buyer.** Someone who has never worked with you cannot verify that your systems last. This is why the dated case studies have to be prominent: 2010, 2016 to 2019, 2017, all still running. Dates do the work that adjectives cannot.

---

## Two things blocking this that are not copy

**The current design is category camouflage, and the redesign is the chance to fix it.** The positioning research names the pattern exactly: "Dark theme, monospace font, minimalist layout. When every competitor makes the identical choice the signal disappears." That describes the working copy now deployed.

Misha is already redesigning the brand and the site, which turns this from a problem into timing. **This memo should reach him as input rather than sitting downstream of his work.** If the positioning lands on durability, the design has something specific to express: age, continuity, systems in production for over a decade, dates as evidence. That is a far better brief than "senior technology studio," and it is a brief that argues against the dark-mono default rather than toward it.

Until the redesign lands, the copy carries the differentiation alone.

**Half of B2B buyers now start with an assistant, and your content is not in the served HTML.** The site is a single-page app, so a crawler that does not execute JavaScript sees an empty shell. On the channel that is now half of discovery, the case studies and the dates, which are the entire durability argument, are invisible. Prerendering has been parked since 2026-08-10. Under this positioning it stops being an SEO nicety and becomes the thing gating the argument.

---

## The biggest gap in this memo

**There is no customer language in it.** Every word above is derived from your case studies, the deck, and market research. Not one line comes from a person who actually bought from you.

The single highest-value thing available right now is four phone calls: Heritage Global, Legacy Studios, and two others. Ask what they were afraid of before hiring you, what they had tried, and what they tell people about the system now. Their verbatim answers will beat anything I can reason my way to, and one usable sentence from the client whose support calls dropped 90% is worth more than this entire document.

---

## Open questions for you

1. Does "outlive the engagement" overclaim anywhere? I am relying on the case studies being accurate about what is still in production today.
2. Is the handover story (moving a client off proprietary software and handing them the system) repeatable, or was Legacy Studios a one-off? If repeatable it becomes a service, not an anecdote.
3. Do you want inbound narrowed? This trades volume for fit.
4. Are you willing to revisit prerendering, given it now gates the argument rather than just the SEO score?
