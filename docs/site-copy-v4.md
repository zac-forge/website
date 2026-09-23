# Site Copy v4: AI visibility and Web Partner

> **DRAFT: needs Misha's input before finalizing.** The AI-Ready Brand System offer (Services row 04, the `/brand-system` page, and its schema and llms.txt entries) is Drew's first pass. Misha should review the positioning, the deliverables list, and the proof before Claude Code ships it. Everything else in this doc can ship without it. If the site goes live first, build the page behind a flag and leave row 04 out.

*Updated September 23, 2026. Supersedes v3. Written to be handed to Claude Code against `github.com/zac-forge/website`.*

*Strategy per the ZAC Offer Brief (https://claude.ai/artifact/7635KW5RE6oeJ81t2jZJS4) and `decisions-log.md` entry 2026-09-23. Voice per `voice-guide.md`: no contractions, no em dashes, no exclamation points.*

**What changed from v3**

- The site now sells the bridge-income offer set: AI Visibility (lead), Web Partner (the retainer), Accessibility and Performance, AI-Ready Brand System (design, pending Misha), and Fractional Digital Lead.
- **No prices anywhere**, on any page or in llms.txt. Remove the $6,500 Backlog Review and $5,000 Two-Week Proof. Both offers are retired from the site.
- **"AI" is allowed in offer names and offer page headlines** (decided September 23). It is still never an identity claim: no "AI-native," "AI-first," or "AI-powered" describing ZAC.
- Four new pages: `/ai-visibility`, `/web-partner`, `/accessibility`, `/brand-system` (the last pending Misha).
- hawaii.surf becomes the first AI visibility case study. Its card stays hidden until the results are in.

> **`[[Slots]]` remaining:** hawaii.surf results, Drew's bio line, the IBM/MMG timeline wording, the platforms list on the Web Partner page, Misha's review of the brand system page. Team section still ships nameless for Misha and Luke by default (unchanged from v3).

---

## Build instructions for Claude Code

| Change | Where |
|---|---|
| New section order (below) | Home page |
| Rewrite hero | Hero component |
| Keep case studies, add hidden hawaii.surf card behind a flag | TrackRecord component |
| Rewrite copy, keep the THEN/NOW animation | ShiftComparison component |
| Five rows instead of three, keep the row ignition interaction, each row links to its page | Services component |
| Unchanged copy | HowItWorks, FinalCTA, Footer |
| Two cards, no prices | StartHere component |
| Four new routes, shared offer-page template | `/ai-visibility`, `/web-partner`, `/accessibility`, `/brand-system` (behind a flag until Misha signs off) |
| Title, meta, OG, schema | Document head, per page |
| Full replacement | `public/llms.txt` |
| Add `/ai-visibility`, `/web-partner`, `/accessibility`, and `/brand-system` once live | `sitemap.xml` |

**Home section order:** Hero → TrackRecord → ShiftComparison → Services → HowItWorks → StartHere → FinalCTA

**Offer page template:** eyebrow, H1, intro, "What we check" or "What is included" list, "How it works" steps, proof block, FAQ (rendered as visible content and as FAQPage schema), closing CTA. All content must be in the server-rendered HTML. AI crawlers do not run JavaScript, so nothing on these pages can depend on client-side rendering.

---

# HOME

## 1. Header

Nav: `What we do` · `Track record` · `How we work` · `Start here`
CTA: `Book a call`

## 2. Hero

> **/ ZAC / SENIOR WEB PARTNER**
>
> # When a customer asks for a recommendation, is your name in the answer?
>
> More of your customers now ask ChatGPT, Google, or Perplexity who to call. The answer names two or three businesses. We find out whether you are one of them, fix what keeps you out, and stay on as the senior team behind your website.
>
> **[Book a call →]**  ·  [See what we check ↓]
>
> 19 years at IBM, including IBM.com. Systems we built in 2010 are still running.

*The headline does not contain "AI." The offer name carries the word one section down. The hero sells the fear of being left out of the answer.*

## 3. Track record

> **01 / TRACK RECORD**
>
> ## We have built this before.
>
> ZAC is the successor to Mahalo Media Group, the practice Andrew Johnston has run for over 15 years. `[[Timeline framing]]` Same principal, same standards.

**Case studies (unchanged from v3):** Heritage Global Partners, Legacy Studios and Teddy Bear Portraits, US Naval Academy and US Marines, Legal Access Alameda. Keep all v3 wording and phrasing rules (the $1B is transaction volume through the platform; the 90% figure is client-reported; no DoD seals; no IBM logo).

**New card, first position, hidden until the flag is on:**

> **hawaii.surf**
> Our own editorial publication on Hawaiian surf history, and our test bed for AI visibility. `[[Before: what ChatGPT, Google, Perplexity, and Claude said for N real questions on DATE.]]` `[[What we changed.]]` `[[After: how often hawaii.surf is named or cited now.]]`

*Ship the card only with real before and after numbers. It is Drew's own property, so say so plainly ("our own publication"). That candor is the credibility.*

**Team block:** unchanged from v3 (Andrew named; Creative Director and Senior Engineer by role until Misha and Luke confirm).

## 4. What changed

> **02 / WHAT CHANGED**
>
> ## Your customers stopped searching. They started asking.
>
> For twenty years, people typed a few words into Google and chose from ten links. Now more of them ask an assistant and get a short answer with two or three names in it. There is no page two.
>
> Assistants decide who to name from what they can read: your site, your reviews, your listings, and what other sites say about you. Much of that is technical, and most of it is fixable.
>
> | Then | Now |
> |---|---|
> | Ten links | Three names |
> | Keywords | Questions |
> | A ranking you can check | An answer that changes run to run |
> | Your site as the brochure | Your site as the source |
> | Tracked by position | Tracked by how often you are named |

*Keep the THEN/NOW animation. The old "14 hours" line is removed; it sold build speed, which is no longer the pitch.*

## 5. What we do

> **03 / WHAT WE DO**
>
> ### 01 AI VISIBILITY. Get named when customers ask.
> Real customer questions tested across ChatGPT, Google, Perplexity, and Claude · Crawler access and rendering · Structured data · Pages that answer what customers ask · Reviews, listings, and mentions · Monthly tracking
> [How the audit works →](/ai-visibility)
>
> ### 02 WEB PARTNER. One senior team accountable for your site.
> Fixes and change requests · Performance · Security and backups · Accessibility · A real improvement every month · Visibility tracking
> Not maintenance. Updates and backups are the floor, not the product.
> [What a Web Partner plan covers →](/web-partner)
>
> ### 03 ACCESSIBILITY AND PERFORMANCE. Find what locks people out and slows you down.
> Manual keyboard and screen reader testing · WCAG 2.2 AA · Accessibility statement · Page weight and third-party scripts · Core Web Vitals · Fixed in the code, not covered with an overlay
> [How we test →](/accessibility)
>
> ### 04 AI-READY BRAND SYSTEM. Make everything your team generates look like you.
> Brand direction · Identity and type · Design tokens · Component library · Rules files for AI coding tools · Claude Design, Canva, and Figma kits · Staff training
> [How the brand system works →](/brand-system)
> `[[Pending Misha's input.]]`
>
> ### 05 FRACTIONAL DIGITAL LEAD. Someone who owns digital, a few hours a week.
> Roadmap · Vendors and tools · Analytics · Direction for staff or volunteers · Budget decisions
>
> *We also move organizations off platforms they have outgrown, and repair sites and apps built quickly with AI tools. [Ask us about it.](#contact)*

## 6. How we work

> **04 / HOW WE WORK**
>
> ## One team. No layers.

Unchanged from v3: SENIOR-LED, RIGHT-SIZED, BUILT TO KEEP, with the same body copy.

## 7. Start here

> **05 / START HERE**
>
> ## Two ways in. Both small.
>
> ### AI Visibility Snapshot
> We run 20 of your customers' real questions through ChatGPT, Google, Perplexity, and Claude, compare you with three competitors, and check whether the assistants can read your site at all. Then we walk you through the five fixes that matter most. Results in about a week.
>
> ### Accessibility and Performance Snapshot
> We test your key pages by hand with a keyboard and a screen reader, measure page weight and load time, and give you the top issues in plain English, ranked by risk. Results in about a week.
>
> Either one credits toward a Web Partner plan.
>
> Not sure which? That is what the call is for.
>
> **[Book a call →]**

*No prices, no "two numbers" line. For Misha: two equal cards, calm, no atmosphere effects.*

## 8. Closing

Unchanged: "HAVE SOMETHING WORTH BUILDING? / Bring us the problem." Keep the horizon arc and ember field.

---

# /ai-visibility

**Title:** `AI Visibility Audit | ZAC Forge`
**Meta description:** `Find out whether ChatGPT, Google, Perplexity, and Claude recommend your business or your competitors, and what to fix first.`

> **AI VISIBILITY**
>
> # AI visibility: get named when customers ask.
>
> Ask ChatGPT who the best `[your category]` near you is. It will name a few businesses. We find out whether you are one of them, why or why not, and what to fix first.

### What we check

1. **Can the assistants read your site?** Firewall and CDN settings, robots.txt, and whether your content is in the page or only appears after JavaScript runs. Many AI crawlers do not run JavaScript, and some hosting setups block them by default.
2. **Do they understand what you are?** Structured data for your business, services, people, and location.
3. **Do you answer the questions customers ask?** Pages built around real questions, in your customers' words, with facts an assistant can quote.
4. **What do other sites say about you?** Reviews, directories, your Google Business Profile, press, and forums. Assistants lean on these.
5. **How often are you named?** The same questions, run repeatedly across four assistants, with every answer saved.

### How it works

1. **Snapshot.** 20 real questions, you against three competitors, the crawler check, and the top five fixes. About a week.
2. **Full audit.** 50 questions, up to five competitors, the full technical review, the sources assistants rely on for your category, and a 90-day plan.
3. **Fix and track.** We make the fixes, then track the same questions every month as part of a Web Partner plan.

### Proof

> `[[hawaii.surf case study: before and after. Hidden until results exist.]]`
>
> We run the same audit on our own site. `[[Result once zacforge.com passes.]]`

### Questions

**Can you guarantee we will be recommended?**
No. Assistants change their answers from one run to the next, and anyone who guarantees placement is guessing. We measure how often you are named across repeated runs and improve what drives it.

**Is this SEO with a new name?**
Part of it overlaps, and good search foundations still matter. The difference is that assistants read your site differently. Many cannot run JavaScript, some are blocked by default settings, and they rely heavily on reviews, listings, and what other sites say about you.

**Do we need to write a lot of new content?**
Usually not. Most of the gain comes from technical access, structured data, and a handful of pages that answer the questions your customers actually ask.

**Which assistants do you test?**
ChatGPT, Google AI Overviews and AI Mode, Perplexity, and Claude.

**How long before anything changes?**
Technical fixes can show up within weeks, as assistants re-read your site. Reviews and mentions take longer. We re-test at 30 days and track monthly after that.

> **[Book a call →]**

---

# /web-partner

**Title:** `Web Partner | ZAC Forge`
**Meta description:** `One senior team accountable for your website: fixes, performance, security, accessibility, and a real improvement every month. Not a maintenance plan.`

> **WEB PARTNER**
>
> # A web partner, not a maintenance plan.
>
> Updates and backups are the floor. What you are paying for is one senior person who knows your site, answers when you ask, and makes it better every month.

### Every plan includes

- Core, plugin, and theme updates
- Verified off-site backups
- Uptime and security monitoring
- A set amount of change requests each month
- One proactive improvement each month
- A monthly check of how often assistants name you

### Two levels

**Web Partner.** Everything above, with replies within two business days.

**Web Partner Plus.** Everything above, with more change requests, competitor tracking, two new or updated answer pages a month, a quarterly accessibility and performance re-check, a monthly call, and next-business-day replies.

**Fractional Digital Lead.** For organizations that need someone to own digital, not just maintain it. A few hours a week on roadmap, vendors, analytics, and direction for your staff, with Web Partner Plus included.

### How it starts

Most clients start with a Snapshot or a project. Every project we finish includes 30 days of care, so you see how we work before you commit. Plans start with three months, then run month to month with 30 days' notice.

### Questions

**What counts as a change request?**
Anything you would otherwise email a developer about: new pages, copy and image changes, forms, fixes, small features. If something is bigger than a month's allowance, we quote it separately before starting.

**What platforms do you work on?**
`[[Confirm list, for example: WordPress, custom builds, and most hosted platforms.]]`

**Who does the work?**
Andrew Johnston leads every account. A senior developer and a creative director join when the work calls for them.

> **[Book a call →]**

---

# /accessibility

**Title:** `Accessibility and Performance Audit | ZAC Forge`
**Meta description:** `Manual accessibility testing against WCAG 2.2 AA and a performance review, with fixes made in your code, not covered with an overlay.`

> **ACCESSIBILITY AND PERFORMANCE**
>
> # Accessibility and performance, fixed in the code.
>
> We do not sell a scan or a widget. We test your site by hand, fix the code, and document what we did.
>
> In 2025, 3,948 website accessibility lawsuits were filed in the US, 787 of them in California. 983 targeted sites that already had an overlay widget installed.

### What we test

- Keyboard navigation and focus, including menus, carousels, and forms
- Screen readers (VoiceOver and NVDA)
- Color contrast and text size
- Labels, headings, and landmarks
- Page weight, third-party scripts, and Core Web Vitals

### What you get

- Findings in plain English, ranked by risk, with the top 10 fixed first
- Fixes in your theme, components, and content
- An accessibility statement and a short conformance summary
- Removal of any overlay
- Optional quarterly re-check as part of a Web Partner plan

### Proof

> Our IBM.com work shipped under IBM's internal accessibility standards.

### Questions

**Will this make us ADA compliant?**
No one can honestly promise that. We reduce your risk, fix what we find, and document it, which is what matters if a demand letter ever arrives.

**We already have an accessibility widget. Is that enough?**
No. A quarter of 2025 lawsuits targeted sites that had one. We usually recommend removing it once the real issues are fixed.

**We receive federal health funding. Does a deadline apply?**
HHS-funded organizations with 15 or more employees have until May 11, 2027 under the Section 504 rule, and smaller ones until May 10, 2028.

> **[Book a call →]**

*Source the figures in a footnote: EcomBack 2025 ADA Website Accessibility Lawsuit Report; HHS press release on the Section 504 deadline extension.*

---

# /brand-system

> **Pending Misha's input.** Draft for review. Do not ship until he signs off on the positioning, the deliverables, and the proof.

**Title:** `AI-Ready Brand System | ZAC Forge`
**Meta description:** `A brand system your AI tools follow. Senior design, turned into tokens, components, and kits so every page, post, and deck your team makes looks like you.`

> **AI-READY BRAND SYSTEM**
>
> # A brand system your AI tools follow.
>
> Your team already makes pages, posts, and decks with AI. Without a system, every tool falls back on the same defaults: the same fonts, the same icons, the same gradients. The result looks like everyone else. A brand system is how you stop that.

### Why design matters more now

Generators produce the average of what they have seen. Taste is what moves the work away from the average, and a system is how taste gets written down so the tools can follow it. One well-made system now governs thousands of AI-made pieces. That makes senior design more valuable, not less.

### What you get

- A sharpened or rebuilt identity: mark, type, color, and voice
- Design tokens for color, type, spacing, and radius, with color contrast measured for accessibility
- A component library and page templates
- Rules files that keep AI coding tools such as Claude Code and Cursor on brand
- Ready-to-import kits for Claude Design, Canva, and Figma
- A tested prompt library, and a working session with your team

### How it works

1. **Brand Direction Review.** We review your site and 10 to 20 recent pieces, show where they read generic, and deliver a one-page direction with one redesigned key screen or asset. About a week.
2. **The system.** Design first, then the files your tools read. Three to eight weeks, depending on whether the identity is sharpened or rebuilt.
3. **Keep it current.** As part of a Web Partner plan, we review what your team makes each month, add templates, and update the system as the tools change.

### Who does the work

`[[Misha to confirm how he is described: e.g. "Our creative director spent years at Havas and Ogilvy and met Andrew on a cross-company team at the IBM Design Lab."]]` Engineering by the team that built IBM.com.

### Proof

> `[[ZAC's own brand as the first case study: the same prompt, generic without the system, on-brand with it. Hidden until built.]]`
>
> `[[Misha to choose portfolio pieces he is cleared to show.]]`

### Questions

**We already have a logo and brand guidelines. Is this for us?**
Probably. Most guidelines are a PDF written for people. This turns your existing brand into files your tools read every time they make something. We only rebuild the identity if it needs it.

**Which tools does it work with?**
Claude Design, Canva, Figma, and AI coding tools such as Claude Code and Cursor. `[[Confirm list with Misha.]]`

**Will our team need to learn anything new?**
One working session. After that, they use the tools they already use, and the output comes back on brand.

> **[Book a call →]**

---

# Metadata and schema

**Home title:** `ZAC Forge | AI Visibility and Senior Web Partner`
**Home meta description:** `Find out whether ChatGPT, Google, and Perplexity recommend your business, then fix what keeps you out. A senior web partner with 19 years at IBM behind it.`
**OG title:** `Is your name in the answer?`

**Schema (JSON-LD, server-rendered):**

- `ProfessionalService` for ZAC Forge: name, url, email `drew@zacforge.com` `[[or hello@, confirm which receives mail]]`, `areaServed`: Ventura County, CA and United States, `sameAs`: LinkedIn
- `Person` for Andrew Johnston, `worksFor` ZAC Forge
- `Service` for each of the five offers (Brand System only once live), with `provider` ZAC Forge. **No `offers` or `price` properties.**
- `FAQPage` on each offer page, matching the visible questions exactly

---

# llms.txt (full replacement)

```
# ZAC Forge

> A senior web partner. ZAC finds out whether AI assistants recommend a
> business, fixes what keeps it out, and stays on as the senior team behind
> its website.

ZAC is the successor to Mahalo Media Group, a practice run by founder Andrew
Johnston for over 15 years, after 19 years at IBM including IBM.com. Based in
Ventura County, California. Works remotely with clients anywhere in the US.

## Services

- [AI Visibility](https://zacforge.com/ai-visibility): Tests real customer
  questions across ChatGPT, Google AI Overviews and AI Mode, Perplexity, and
  Claude; fixes crawler access, rendering, structured data, answer content,
  and third-party mentions; tracks how often the business is named.
- [Web Partner](https://zacforge.com/web-partner): Ongoing senior care for a
  website: fixes, change requests, performance, security, accessibility, a
  monthly improvement, and visibility tracking. Not a maintenance plan.
- [Accessibility and Performance](https://zacforge.com/accessibility): Manual
  testing against WCAG 2.2 AA, performance review, fixes made in the code, and
  an accessibility statement. No overlays.
- [AI-Ready Brand System](https://zacforge.com/brand-system): Senior brand
  design turned into design tokens, components, rules files for AI coding
  tools, and Claude Design, Canva, and Figma kits, so AI-made work stays on
  brand. [Add only once the page is live.]
- Fractional Digital Lead: a few hours a week owning an organization's
  digital roadmap, vendors, and analytics.

## Start here

- AI Visibility Snapshot: 20 real customer questions, three competitors,
  a crawler access check, and the top five fixes. About a week.
- Accessibility and Performance Snapshot: manual testing of key pages and
  the top issues ranked by risk. About a week.

## Track record

- Heritage Global Partners: all web properties including hgpauction.com, with
  real-time auction creation from the sale floor. Live since 2010, with over
  $1 billion in assets sold through the platform.
- Legacy Studios and Teddy Bear Portraits: point of sale and same-day photo
  delivery across 41 states. Built 2016 to 2019, still running.
- US Naval Academy and US Marines: cadet booking and photo portals, live
  since 2017.
- Legal Access Alameda: web properties for a statewide group of attorneys
  providing disaster response and free legal assistance.

## Contact

- [Book a call](https://cal.com/zacforge/20-min-chat)
- [Email](mailto:hello@zacforge.com)
- [Website](https://zacforge.com/)
```

*Add the hawaii.surf case study to llms.txt when its card goes live.*

---

# Pre-launch checklist

- [ ] No dollar amounts anywhere: search the built site and llms.txt for "$" (the $1 billion HGP figure is the only allowed match)
- [ ] Backlog Review and Two-Week Proof removed everywhere
- [ ] No "AI-native," "AI-first," or "AI-powered" anywhere
- [ ] Offer pages fully present in server-rendered HTML (view source, not the browser inspector)
- [ ] Cloudflare or host bot settings allow GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, and Google-Extended
- [ ] Schema validates in Google's Rich Results Test; no price properties
- [ ] Sitemap includes the three new pages
- [ ] Confirm which address receives mail: hello@ or drew@
- [ ] hawaii.surf card stays hidden until before and after results are filled
- [ ] Fill remaining slots: timeline wording, bio line, platforms list
- [ ] **Misha reviews the brand system copy (row 04, `/brand-system`, llms.txt entry) before it ships**
- [ ] After launch, run the AI Visibility Snapshot on zacforge.com itself
