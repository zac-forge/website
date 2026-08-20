# Site Copy v3: Execution Deck

Complete copy for zacforge.com. Voice rules and guardrails live in `CLAUDE.md` at the repo root. Read that first.

> **No `[[slots]]` remain.** Both were picked on 2026-08-20 and are written inline below: Andrew's bio line in section 3, and the IBM/MMG timeline framing in the Track Record intro. The team section still ships **nameless by default**, see section 3.
>
> **Separators in the copy blocks below are `·`, not em dashes, and they mark two distinct fields.** Render them as separate elements (a heading and a paragraph). Never emit a literal `·` or `-` between them, and never an em dash anywhere.

---

## Structural changes

**Current order:** Hero → ShiftComparison → Services → HowItWorks → TrackRecord → FinalCTA
**New order:** Hero → **TrackRecord** → ShiftComparison → Services → HowItWorks → **StartHere** → FinalCTA

| Change | File |
|---|---|
| Reorder sections | `src/pages/Home.tsx` |
| New copy + proof line | `src/components/Hero.tsx` |
| **Full rebuild.** Case studies and team replace category chips | `src/components/TrackRecord.tsx` |
| New copy, keep THEN/NOW animation | `src/components/ShiftComparison.tsx` |
| Minor copy edits | `src/components/Services.tsx` |
| "AI-NATIVE" principle → "BUILT TO KEEP" | `src/components/HowItWorks.tsx` |
| **New component.** Two offer cards | `src/components/StartHere.tsx` |
| Title, meta, OG, Person schema for Andrew only | `index.html` |
| Full rewrite | `public/llms.txt` |
| Unchanged | `FinalCTA.tsx`, `Footer.tsx` |

---

# 1. Header

Nav: `What we do` · `How we work` · `Track record`
CTA: `Book a call`

*"About" becomes "Track record" so the nav itself signals proof.*

---

# 2. Hero

## Version A, ship this one

> **/ ZAC / TECHNOLOGY STUDIO**
>
> # The work you shelved is back on the table.
>
> Every company has projects that were worth doing but never worth what they cost. The internal tool nobody funded. The integration that stayed manual. The reporting that still runs on a spreadsheet.
>
> Those projects did not fail a value test. They failed a price test. The price changed.
>
> **[Book a call →]**  ·  [See what we have built ↓]
>
> 15 years. Over 100 engagements. Systems still running after 16.

## Version B, hold for later

*Kept here for reference. Not for this build.*

> # The system your business runs on, in the room where it happens.
>
> Auction floors. Photo days. Anywhere your business transacts with a customer standing in front of you, where there is no room for the system to be slow, confusing, or down.
>
> We have been building those systems for 15 years. They are still running.
>
> Over $1 billion in asset sales. 41 states. Two federal military academies.

*Version B is a vertical positioning built on the real through-line across HGP, Legacy and the academies: real-time, onsite, tablet-driven transaction systems. More memorable, but it narrows inbound. Revisit after the first ten client conversations.*

**Design notes:** the H1 runs 3 lines desktop, 4 mobile, and must still dominate. The three examples are the emotional hook. Set them apart from the paragraph rather than running them in. "The price changed." is the turn and can carry weight. The proof line under the CTA is load-bearing, not fine print.

---

# 3. Track record ← moved to position 2

> **01 / TRACK RECORD**
>
> ## We have built this before.
>
> ZAC is the successor to Mahalo Media Group, the practice Andrew Johnston has run for over 15 years. It started while he was still at IBM and has outlasted that tenure. Same principal, same standards, new economics.

*Timeline framing picked 2026-08-20. The two rejected candidates were "That run overlapped the IBM years rather than following them." and "Behind it sits a 20 year enterprise career, most of it at IBM." Do not re-offer the choice.*

### Case studies

> **Heritage Global Partners** · hgpauction.com
> Every web property, rebuilt. Real-time uploads and auction creation from the sale floor on connected tablets, in 2010. Still running today. **Over $1 billion in assets sold through the platform since launch.**
>
> **Legacy Studios · Teddy Bear Portraits**
> End-to-end point of sale and same-day photo delivery across **41 states**. Parents saw their photos in real time and bought on the spot. We moved them off proprietary software onto open source, then handed the system to their own team. Built 2016 to 2019. **Still running.** The client reported support calls dropped by over 90%.
>
> **US Naval Academy · US Marines**
> Branded cadet booking and photo portals for both academies, built on the platform we had already shipped. Delivered through Legacy Studios. Live since 2017 and still running.
>
> **Legal Access Alameda**
> Web properties for a statewide group of attorneys providing disaster response and free legal assistance across California.

### The team, ships nameless

**Build name and photo as optional props.** Adding a name later must be a content change, not a redesign.

**Ship this now:**

> **Andrew Johnston** · Founder
> Twenty years at IBM and fifteen running his own practice. ZAC is what happens when those stop being separate things.

*Picked 2026-08-20. Ship verbatim. The rejected option was "Two decades at IBM, finishing as technology director at IBM Design Lab in New York." Do not re-offer the choice and do not substitute the rejected line because it is shorter.*
>
> **Creative Director**
> Years at Havas and Ogilvy. He and Andrew met on a cross-company team at the IBM Design Lab.
>
> **Senior Engineer**
> Full stack. Built alongside Andrew at IBM.

**Swap in later, once confirmed:**

> **Misha `[[surname]]`** · Creative Director
> **Luciano `[[surname]]`** · Senior Engineer

*(Same background lines.)*

### Notes

**This section carries the entire strategy.** In v1 it was six abstract category chips sitting fifth on the page. The chips do not survive.

- The `$1B` and `41 states` are the numbers to set large.
- Client names can carry visual weight.
- Design the team block so a photo slot can be added later without disturbing layout.
- See `CLAUDE.md` for the attribution and compliance rules on the $1B figure, the 90% figure, IBM, and the DoD work. They are binding.

---

# 4. Why now

> **02 / WHY NOW**
>
> ## The cost of building changed.
> ### Your technology plan should too.
>
> Experience did not get cheaper. Judgment about what is worth building is still the hard part, and it still decides whether a project works.
>
> What changed is everything downstream of that decision. Experienced people now produce far more than they did two years ago, so the arithmetic that killed half your backlog no longer holds.
>
> | Then | Now |
> |---|---|
> | Large delivery teams | Lean senior team |
> | Long build cycles | Rapid iteration |
> | Heavy coordination | Direct collaboration |
> | Ideas waiting on budget | Ideas tested early |
> | Big upfront commitments | Value proven quickly |
>
> **This site is the example. Domain name to live site, including design, email, hosting, and certificates: about 14 hours.**

**Deliberate omission:** the word "AI" does not appear here or anywhere on the site. The economics are described directly. This is a strategic decision, not an oversight. Do not "improve" it by naming the technology.

**Keep the THEN/NOW row-draw animation exactly as built.** It is the strongest interaction on the current site.

---

# 5. What we do

> **03 / WHAT WE DO**
>
> ### 01 ADVISE · Find out what is worth building.
> Technology strategy · What to build and in what order · Second opinions on decisions and vendors · Workflow analysis · Architecture and planning
>
> ### 02 BUILD · Turn the right ideas into working systems.
> Custom software · Web applications · Internal tools · Workflow automation · Integrations · High-performance websites · Prototypes
>
> ### 03 PARTNER · Senior capability, ongoing.
> Fractional technology leadership · Continuous product development · Standing senior review · Specialist teams assembled to the work · Fixing what someone else built

*Changes: ADVISE statement moves into the client's language. "AI integrations and agents" folds into "integrations." "Fixing what someone else built" is added. Keep the row ignition interaction.*

---

# 6. How we work

> **04 / HOW WE WORK**
>
> ## One team. No layers.
>
> **SENIOR-LED**
> The person in the meeting is the person doing the work. There is no account manager between you and the build.
>
> **RIGHT-SIZED**
> Specialists come in when the work needs them and leave when it does not. You are not funding a permanent bench.
>
> **BUILT TO KEEP**
> Every project is pressure tested for security, usability, and scale against two decades of enterprise experience. We do not leave anything to chance by lazy automation. You own the code outright, and our systems are still running years after we handed them over.

**"AI-NATIVE" is removed as a principle** and replaced by "BUILT TO KEEP." This is the single biggest copy decision in the rewrite. Roughly 82% of technology buyers believe AI-generated code creates technical debt their organization cannot manage; v1 never addressed it, and three competitors make the AI-native claim in near-identical words.

**Keep the signal-flow sequence** (business → ZAC → working technology).

---

# 7. Start here ← new component

> **05 / START HERE**
>
> ## Two ways in. Both small.
>
> ### Backlog Review · 2 to 3 weeks, from $6,500
> You know something should work better, but not what to do first. We go through everything that has been shelved or never funded and tell you which of it is now affordable, what each would take, and which one to do first. Including what is not worth doing.
> Credited in full against a build started within 60 days.
>
> ### Two-Week Proof · 2 weeks, $5,000
> You already know what you want. Pick the smallest real version of it. We build it in two weeks for a fixed price, and you finish with working software and a clear idea of what it is like to work with us.
>
> **Every quote comes with two numbers: what the work would have cost the old way, and what it costs now.**
>
> Not sure which? That is what the call is for.
>
> **[Book a call →]**

**Design:** two cards, equal weight, clearly parallel. The calmest, most practical part of the page. **No atmosphere effects here.** This is what a serious buyer screenshots.

---

# 8. Closing

> **HAVE SOMETHING WORTH BUILDING?**
>
> # Bring us the problem.
>
> Whether you know exactly what you need or only know something should work better, that is enough to start.
>
> **[Book a call →]**  ·  [Send a message]

**Unchanged from v1. Do not touch it.** Best copy on the existing site. Keep the horizon arc and ember field.

---

# 9. Metadata

**Title:** `ZAC: A senior technology studio`

**Meta description:**
> A senior technology studio. 15 years, over 100 engagements, and systems still running after 16. We build what your business runs on.

**OG title:** `ZAC: The work you shelved is back on the table.`

**Structured data:** keep Organization schema. **Add Person schema for Andrew Johnston only** while the other two are unnamed.

---

# 10. llms.txt, full replacement

```
# ZAC

> A senior technology studio. ZAC advises on what is worth building, builds the
> systems that follow, and partners as ongoing senior capability, without agency
> overhead.

ZAC is the successor to Mahalo Media Group, a practice run by founder Andrew
Johnston for over 15 years across more than 100 engagements. The team is small
and senior: one point of contact, with development, design, and strategy behind
it, plus specialists brought in when a project calls for more depth.

## Track record

- Heritage Global Partners: all web properties including hgpauction.com, with
  real-time auction creation from the sale floor on connected tablets. Live since
  2010, with over $1 billion in assets sold through the platform.
- Legacy Studios and Teddy Bear Portraits: end-to-end point of sale and same-day
  photo delivery across 41 states, migrated from proprietary software to open
  source and handed to the client's own team. Built 2016 to 2019, still running.
- US Naval Academy and US Marines: branded cadet booking and photo portals, live
  since 2017.
- Legal Access Alameda: web properties for a statewide group of attorneys
  providing disaster response and free legal assistance.

## Services

- [Advise](https://zacforge.com/#services): Technology strategy, what to build and
  in what order, second opinions on decisions and vendors, workflow analysis,
  architecture and planning.
- [Build](https://zacforge.com/#services): Custom software, web applications,
  internal tools, workflow automation, integrations, high-performance websites,
  prototypes.
- [Partner](https://zacforge.com/#services): Fractional technology leadership,
  continuous product development, standing senior review, specialist teams,
  fixing what someone else built.

## Start here

- Backlog Review: 2 to 3 weeks, from $6,500. What has been shelved, what is now
  affordable, and what to do first.
- Two-Week Proof: 2 weeks, $5,000. The smallest real version of the thing, built
  for a fixed price.

## Contact

- [Book a call](https://cal.com/zacforge/20-min-chat): A 20 minute conversation.
- [Email](mailto:hello@zacforge.com): hello@zacforge.com
- [Website](https://zacforge.com/)
```

---

# Pre-launch checklist

- [ ] Confirm `hello@zacforge.com` receives mail
- [x] Andrew's bio line picked (2026-08-20)
- [x] IBM/MMG timeline wording picked (2026-08-20)
- [ ] Team block built with optional name and photo props
- [ ] Ask Misha and Luciano using the exact lines above; swap in names if they agree
- [ ] Confirm client-name permissions where contracts require it
- [ ] Verify the "since 2017" academy date if possible
- [ ] No DoD seals, no IBM logo
- [ ] Person schema for Andrew added alongside Organization schema
- [ ] `bash scripts/voice-check.sh` passes. It covers `src/ public/ index.html package.json README.md`
      for "AI", em dashes, semicolons, exclamation points, and the banned vocabulary list.
