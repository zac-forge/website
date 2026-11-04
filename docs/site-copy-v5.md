# Site Copy v5: the Reality Check

*November 4, 2026. Supersedes Site Copy v4 (`site-copy-v2.md`). Written to be handed to Claude Code against `github.com/zac-forge/website`. Direction per `decisions-log.md` decisions 31 to 42. Voice per `voice-guide.md`: contractions fine, no em dashes, no exclamation points, no prices, "AI" names the problem and the offers but never describes ZAC.*

**What changed from v4**

- One problem, one front door. The hero sells the problem (AI made everyone an IT expert, it didn't make it work). The front door is a free Reality Check. The paid step is the Fix Week. Every other offer is a fix behind that.
- Home section order and the "What we do" section are rebuilt. "Start here" is gone; the Reality Check is the start.
- Case studies: four, stacked, text first, no carousel. Legal Access Alameda is back. Teddy Bear Portraits now notes an outside vendor maintains it unchanged.
- Logo band added: "Where our team has worked."
- Two new routes: `/reality-check` and `/fix-week`. `/web-partner` rewritten. `/ai-visibility`, `/accessibility`, and `/brand-system` keep their v4 body copy with a new eyebrow line that places them behind the check (see "Existing offer pages" below). `/brand-system` stays behind its flag.
- Contact form replaces the bare email link in the closing section (decision 40). Until the form's backend exists, the form posts to a mailto fallback; see build notes.
- Look and feel: Misha's comp 7, read from Figma and applied as provisional tokens. See the Claude Code prompt.

**`[[Slots]]` still open:** Legal Access card details and URL; Misha's and Luke's bio lines and public names (ship by role until confirmed); timeline wording for IBM and MMG.

---

## Home section order

Hero → Logo band → Track record → What changed → The Reality Check → What we fix → How we work → Who we are → Closing

Every section is server-rendered HTML. Nothing on the page depends on client-side rendering to exist.

---

# HOME

## 1. Header

Nav: `What we do` · `Track record` · `How we work` · `Who we are`
CTA: `Get a Reality Check` (anchors to the Reality Check section)

## 2. Hero

> **/ ZAC / SENIOR TEAM, PLAIN ANSWERS**
>
> # The systems we built in 2010 are still running.
>
> AI made everyone an IT expert. It didn't make it work. If you built something with AI this year, or paid someone who did, and it half works, looks like everyone else's, or nobody can find it, send it to us. We'll check it, free, and tell you straight.
>
> **[Get a Reality Check →]**  ·  [See what we've built ↓]
>
> 19 years at IBM, including IBM.com, and a practice run alongside it since 2010 for clients who still run what we built.

*Misha's headline stays. The problem line is the second sentence of the body, not the H1; the H1 is the proof, the body is the problem. The "19 years / 15 years" line is the `[[timeline wording]]` slot; ship it as written unless Drew changes it.*

## 3. Logo band

> **WHERE OUR TEAM HAS WORKED**
>
> IBM · Walmart · Ogilvy · Viacom · Nike

*Wordmarks or plain text, muted. Never labeled as clients. If any mark can't be cleared for use, set it in text.*

## 4. Track record

> **01 / TRACK RECORD**
>
> ## We've built this before.
>
> ZAC is built on the practice Andrew Johnston has run since 2010. It started while he was still at IBM and outlasted that tenure. Same principal, same standards, new economics.
>
> Every system below was handed to the people who own it. They run them without us.

**Four cards, stacked, full width, text first. Each card: client, one line of meta (URL and years), body, one number set large. One tight crop of a real screen at most; no full-page shots.**

> **Heritage Global Partners**
> hgpauction.com · Live since 2010
>
> Every web property rebuilt, including the flagship auction site. Real-time uploads and auction creation from the sale floor on connected tablets, in 2010. The platform has carried over $1 billion in asset sales since launch. Sixteen years in production, maintained by someone else.
>
> *Number:* **$1B+** in asset sales through the platform

> **Legacy Studios · Teddy Bear Portraits**
> teddybearportraits.com · Built 2016 to 2019 · Still running
>
> End-to-end point of sale for onsite use across 41 states. Tablets connected to a central database, so parents saw their photos in real time and bought the same day. We moved them off proprietary software onto open source and handed it over. The client reported support calls dropped by over 90%. The platform is now maintained by an outside vendor, unchanged.
>
> *Number:* **41 states**

> **US Naval Academy · US Military Academy**
> usna.legacystudios.com · usma.legacystudios.com · Live since 2017
>
> A separately branded cadet portal for each academy, built on the platform already shipped for Teddy Bear Portraits. Bookings, photos, and information for the full photo experience. Delivered through Legacy Studios, and still running.
>
> *Number:* **Live since 2017**

> **Legal Access Alameda**
> `[[URL if live]]` · `[[Years]]`
>
> Web properties for a statewide group of attorneys providing disaster response and free legal assistance, built and rebuilt over several years. `[[What was built, when, what is still live.]]`
>
> *Number:* `[[years as a client]]`

*Phrasing rules carry over: the $1B is transaction volume through the platform, never "we sold." The 90% is client-reported. No DoD seals or insignia in any image, including the officer's cap badge on the Naval Academy page. No IBM logo here.*

## 5. What changed

> **02 / WHAT CHANGED**
>
> ## Same judgment. More output.
>
> One senior person directing a managed team of specialists and AI now does what used to take a small team. The standard didn't change. The speed did.
>
> What also changed: everyone else got the same tools. Sites, apps, brands, and content that used to need a team now get made in an afternoon. A lot of it half works, looks like everything else, and the person who made it can't fix it. That's where we come in.

*Three-step row from Misha's comp: SENIOR TEAM → OPTIMIZED PROCESS → DELIVERY, with one line each:*
> **Senior team.** The people on your call are the people who do the work.
> **Optimized process.** AI does the volume. We do the judgment.
> **Delivery.** You own the code, the files, and the accounts.

## 6. The Reality Check

> **03 / THE REALITY CHECK**
>
> ## Send us what you built. We'll tell you straight.
>
> Free. Five questions. A short scorecard in plain English, with the evidence, and what it would take to fix. Whether it's a site, an app, a brand, a landing page, or a workflow, and whether AI made it or someone you hired did.
>
> ### 1. Does it work?
> Security, sign-in, data, and what happens when something fails.
>
> ### 2. Is it fast?
> Load time and Core Web Vitals, measured, not guessed.
>
> ### 3. Can everyone use it?
> Keyboard and screen reader tests against WCAG 2.2 AA.
>
> ### 4. Can anyone find it?
> What ChatGPT, Google, and Perplexity say when a customer asks, with screenshots.
>
> ### 5. Does it look like you, or like AI?
> Our design director's read, and what one screen would look like done right.
>
> **[Get a Reality Check →]**  ·  [How the check works](/reality-check)
>
> Then, if you want it fixed: **the Fix Week.** One week, fixed price. We fix the worst thing on the scorecard, redesign the one screen that looks most like AI made it, and hand back a ranked list of what's left. [What a Fix Week covers →](/fix-week)

*Five lines, shown in full, no accordion, no carousel. This section should be the visual stop on the page (Misha's maroon band in comp 7).*

## 7. What we fix

> **04 / WHAT WE FIX**
>
> ## The bigger fixes, when the check calls for them.
>
> **AI Visibility.** Get named when customers ask ChatGPT, Google, or Perplexity who to call. [More →](/ai-visibility)
>
> **Rescue.** A site or app built quickly with AI tools, finished and made solid, or rebuilt if it can't be saved. [Ask us →](#contact)
>
> **Accessibility and performance.** Fixed in the code, not covered with a widget. [More →](/accessibility)
>
> **Brand system.** Senior design turned into files your AI tools follow, so everything your team makes looks like you. `[[link when /brand-system flag is on, otherwise plain text]]`
>
> **Platform escape.** Off the platform you've outgrown, onto something you own. [Ask us →](#contact)
>
> **Web Partner.** After the fix, one senior team keeps it running and makes it better every month. [More →](/web-partner)

*Six short rows, each one line plus a link. No icons needed; Misha's comp uses his gradient marks for three columns, which can carry over to the first three if he wants.*

## 8. How we work

> **05 / HOW WE WORK**
>
> ## Check. Fix. Partner.
>
> **Check.** The free Reality Check. You learn what's wrong and what it costs to fix before you spend anything.
>
> **Fix.** The Fix Week, then the bigger fixes if the scorecard calls for them. Fixed price, agreed up front.
>
> **Partner.** Web Partner keeps it running and makes it better every month.
>
> **Senior-led.** The people on the call do the work. No account layer.
>
> **Right-sized.** We tell you what's not worth fixing. A lot of it isn't.
>
> **You own the code.** The repo, the accounts, the files, and the design. If we disappeared tomorrow, you'd be fine. That's the point.

## 9. Who we are

> **06 / WHO WE ARE**
>
> **Andrew Johnston, founder.** Twenty years at IBM and fifteen running his own practice. ZAC is what happens when those stop being separate things.
>
> **Design director.** `[[Misha's line, pending his confirmation of public name and wording. Working version:]]` Associate creative director at Ogilvy, then design lead on work for Walmart, Viacom, and Nike, and at the IBM Design Lab.
>
> **Senior engineer.** `[[Luke's line, pending. Working version:]]` Senior engineer at IBM. WordPress and PHP, React and Node, and mobile.

*Ship by role until names are confirmed (names are known: Misha Gervits, Design Director; Luke Monegatto, Senior Engineer; add them only when Drew says consent is given). Photos when they exist; neutral placeholders until then, not stock.*

## 10. Closing

> **BRING US THE PROBLEM**
>
> ## Send us what you built.
>
> Name · Email · What did you build, and what's wrong with it? · Link to it (optional)
>
> **[Send it →]**
>
> Or [book a 20-minute call](https://cal.com/zacforge/20-min-chat) if you'd rather talk first.

*Form fields exactly as listed. See build notes for the backend.*

---

# /reality-check

**Title:** `The Reality Check | ZAC Forge`
**Meta description:** `Built something with AI and it half works? Send it to us. A free five-question check, in plain English, with what it would take to fix.`

> **THE REALITY CHECK**
>
> # Send us what you built. We'll tell you straight.
>
> Everyone can build a site, an app, or a brand now. Most of it half works. You already suspect yours does, or you wouldn't be here. The Reality Check is a free, honest look at it from a senior team, five questions, one short scorecard, no obligation.

### What we check

1. **Does it work?** We try to break it. Sign-in, forms, payments, data, and what happens when something fails. We read the code if you give us access.
2. **Is it fast?** Load time and Core Web Vitals, measured on a real phone and a real connection.
3. **Can everyone use it?** Keyboard only, then a screen reader, against WCAG 2.2 AA.
4. **Can anyone find it?** We ask ChatGPT, Google, and Perplexity the questions your customers ask and show you who gets named. Often it's not you.
5. **Does it look like you, or like AI?** Our design director reads it against your business, and shows what one screen would look like done right.

### What you get

A one-page scorecard. Each question gets a verdict in plain English, the evidence, and what a fix would take. Nothing you need a developer to translate.

### How it works

1. **Send it.** The form below, or a call if you'd rather talk. A link is enough; access helps.
2. **We check it.** A few days. We don't touch anything.
3. **You read the scorecard.** Then decide. If you want it fixed, the Fix Week is the next step. If you don't, you still know where you stand.

### Questions

**Why is it free?**
Because the check is how we find out whether we can help. If we can, you'll see it in the scorecard and we'll quote the fix. If we can't, we'll say so.

**Is this a sales pitch?**
It ends with a quote if there's something worth fixing. The scorecard itself is yours either way, and it'll say so when something isn't worth the money.

**What can you check?**
Websites, web apps, mobile apps, landing pages, brand work, and automated workflows. If it's software or design and it exists, we can look at it.

**Do I need to give you access?**
A link is enough for most of it. Code or admin access lets us check the first question properly. We don't change anything.

**What if it's fine?**
Then the scorecard says so, and you've lost nothing.

> **[Get a Reality Check →]**

---

# /fix-week

**Title:** `The Fix Week | ZAC Forge`
**Meta description:** `One week, fixed price. We fix the worst thing on your Reality Check scorecard, redesign the one screen that looks most like AI made it, and rank what's left.`

> **THE FIX WEEK**
>
> # One week. The worst thing fixed. One screen done right.
>
> The Fix Week is what follows a Reality Check when something needs fixing. One week, one fixed price agreed before we start, and three things at the end of it.

### What you get

1. **The worst thing, fixed.** Whatever the scorecard put at the top: the broken sign-in, the form that drops submissions, the page that takes nine seconds, the site ChatGPT can't read. Fixed in your code, tested, and documented.
2. **One screen redesigned.** The page or screen that looks most like AI made it, redesigned by our design director so it looks like you. Built when it fits in the week; otherwise delivered ready to build.
3. **A ranked list of what's left.** Everything else from the scorecard, in order, with what each one would take. So you can decide what's next, or do some of it yourself.

### How it works

1. **Scope.** From the scorecard, we agree what "the worst thing" is and what the price is. Both in writing before day one.
2. **The week.** Five business days. You see progress as it happens.
3. **Handover.** Before and after, side by side. The code is yours. Thirty days of care after, so you see how we work before you commit to anything ongoing.

### After the week

Most clients either take one or two more items off the ranked list, or move to a Web Partner plan so it stays fixed. Some do neither. The list is yours regardless.

### Questions

**What if the worst thing can't be fixed in a week?**
Then we say so in the scoping and quote it as its own project instead. The Fix Week is for things that fit in a week; we don't stretch it.

**Can I pick which thing gets fixed?**
Yes, if it's on the scorecard. We'll tell you if we'd pick differently and why.

**Do you need access to everything?**
To the code and hosting for the fix, and to your brand assets for the redesign. We don't touch anything outside the agreed scope.

**Who does the work?**
Andrew Johnston on the fix, with a senior engineer when it calls for one. Our design director on the redesign. The people you talk to.

> **[Start with a Reality Check →](/reality-check)**

---

# /web-partner

**Title:** `Web Partner | ZAC Forge`
**Meta description:** `After the fix, one senior team keeps your site running and makes it better every month. Not a maintenance plan.`

> **WEB PARTNER**
>
> # Keep it fixed. Make it better.
>
> Updates and backups are the floor. What you're paying for is one senior person who knows your site, answers when you ask, and improves it every month.

### Every plan includes

- Core, plugin, and theme updates
- Verified off-site backups
- Uptime and security monitoring
- A set amount of change requests each month
- One proactive improvement each month
- A monthly check of how often ChatGPT, Google, and Perplexity name you

### Two levels

**Web Partner.** Everything above, with replies within two business days.

**Web Partner Plus.** Everything above, with more change requests, competitor tracking, two new or updated answer pages a month, a quarterly accessibility and performance re-check, a monthly call, and next-business-day replies.

### How it starts

Most clients come to Web Partner after a Fix Week. Every project we finish includes 30 days of care, so you see how we work before you commit. Plans start with three months, then run month to month with 30 days' notice.

### Questions

**What counts as a change request?**
Anything you'd otherwise email a developer about: new pages, copy and image changes, forms, fixes, small features. If something is bigger than a month's allowance, we quote it separately before starting.

**What platforms do you work on?**
WordPress, custom builds on modern frameworks, and most hosted platforms. If you built it on an AI tool and want off, see Platform Escape.

**Who does the work?**
Andrew Johnston leads every account. A senior engineer and a design director join when the work calls for them.

> **[Start with a Reality Check →](/reality-check)**

---

# Existing offer pages

`/ai-visibility`, `/accessibility`, and `/brand-system` keep their v4 body copy. Two changes each:

1. Replace the eyebrow and add one line under the H1: *"Usually the fix for question 4 on the Reality Check."* (visibility) / *"Usually the fix for question 3."* (accessibility) / *"Usually the fix for question 5."* (brand system).
2. Replace the closing CTA with **[Start with a Reality Check →](/reality-check)**.

Remove the "Snapshot" step from the `/ai-visibility` "How it works" list; the Reality Check replaces it. The rest stands. `/brand-system` stays behind its flag until Misha signs off.

---

# Metadata and schema

**Home title:** `ZAC Forge | Built it with AI? We'll check it.`
**Home meta description:** `AI made everyone an IT expert. It didn't make it work. A free five-question check from a senior team with 19 years at IBM behind it, then a fixed-price fix.`
**OG title:** `The systems we built in 2010 are still running.`

**Schema (JSON-LD, server-rendered):**

- `ProfessionalService` for ZAC Forge: name, url, email `drew@zacforge.com`, `areaServed`: United States, `sameAs`: LinkedIn
- `Person` for Andrew Johnston, `worksFor` ZAC Forge
- `Service` for the Reality Check, the Fix Week, Web Partner, AI Visibility, Accessibility and Performance (Brand System once live), `provider` ZAC Forge. **No `offers` or `price` properties.**
- `FAQPage` on each offer page, matching the visible questions exactly

---

# llms.txt (full replacement)

```
# ZAC Forge

> A senior web and software team. ZAC checks sites, apps, and brands that were
> built with AI tools or by someone who has since left, says plainly what is
> wrong, and fixes it for a fixed price.

ZAC is built on the practice Andrew Johnston has run since 2010, after 19 years
at IBM including IBM.com and the IBM Design Lab. Works remotely with clients
anywhere in the US.

## Start here

- [The Reality Check](https://zacforge.com/reality-check): a free five-question
  check on anything built with AI tools or inherited: does it work, is it fast,
  can everyone use it, can anyone find it, does it look like you or like AI.
  One short scorecard in plain English with the evidence and what a fix takes.
- [The Fix Week](https://zacforge.com/fix-week): one week, fixed price. The
  worst thing on the scorecard fixed, one screen redesigned so it looks like
  the client and not like AI, and a ranked list of what is left.

## Services

- [AI Visibility](https://zacforge.com/ai-visibility): tests real customer
  questions across ChatGPT, Google, and Perplexity; fixes crawler access,
  structured data, answer content, and third-party mentions; tracks how often
  the business is named.
- [Accessibility and Performance](https://zacforge.com/accessibility): manual
  testing against WCAG 2.2 AA, performance review, fixes made in the code. No
  overlays.
- [Web Partner](https://zacforge.com/web-partner): ongoing senior care after
  the fix: updates, backups, monitoring, change requests, one improvement a
  month, and visibility tracking. Not a maintenance plan.
- Rescue: finishing and hardening sites and apps built quickly with AI tools,
  or rebuilding them when they cannot be saved.
- Platform Escape: moving organizations off platforms they have outgrown onto
  something they own.
- AI-Ready Brand System: senior brand design turned into tokens, components,
  and kits so AI-made work stays on brand. [Add link once the page is live.]

## Track record

- Heritage Global Partners: all web properties including hgpauction.com, with
  real-time auction creation from the sale floor. Live since 2010, with over
  $1 billion in assets sold through the platform.
- Legacy Studios and Teddy Bear Portraits: point of sale and same-day photo
  delivery across 41 states. Built 2016 to 2019, still running, now maintained
  by an outside vendor unchanged.
- US Naval Academy and US Military Academy: cadet booking and photo portals,
  live since 2017.
- Legal Access Alameda: web properties for a statewide group of attorneys
  providing disaster response and free legal assistance, built and rebuilt
  over several years.

## Contact

- [Send us what you built](https://zacforge.com/#contact)
- [Book a call](https://cal.com/zacforge/20-min-chat)
- [Email](mailto:drew@zacforge.com)
- [Website](https://zacforge.com/)
```

---

# Build notes for Claude Code

**Contact form.** Fields: name, email, message ("What did you build, and what's wrong with it?"), url (optional). Server-rendered `<form>` posting to `/api/contact`. Implement `functions/api/contact.ts` (or the Worker route equivalent) that validates, checks a Turnstile token, and sends through Resend to drew@zacforge.com. If Resend and Turnstile keys are not yet in the environment, the handler must still return a friendly success page and log the submission to the Worker console, and the form must fall back to a `mailto:drew@zacforge.com` link with the same fields in the body, so nothing is lost before the keys exist. Add Turnstile and Resend to the README's env list.

**Design.** See the Claude Code prompt in `site-v5-build-plan.md`.

**Pre-launch checklist**

- [ ] No dollar amounts anywhere: search the built site and llms.txt for "$" (the $1 billion HGP figure is the only allowed match)
- [ ] Backlog Review, Two-Week Proof, Snapshot, and Advise / Build / Partner removed everywhere
- [ ] No "AI-native," "AI-first," or "AI-powered" anywhere
- [ ] No em dashes in any copy
- [ ] Offer pages fully present in server-rendered HTML (view source)
- [ ] Bot settings allow GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, and Google-Extended
- [ ] Schema validates; no price properties
- [ ] Sitemap includes `/reality-check` and `/fix-week`
- [ ] Contact form submits (keys in) or falls back cleanly (keys out)
- [ ] No DoD seal or insignia in any image
- [ ] `/brand-system` stays behind its flag
- [ ] After launch, run the Reality Check on zacforge.com itself
