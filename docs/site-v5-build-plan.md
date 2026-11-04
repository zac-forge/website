# Site v5 Build Plan: Reality Check copy on Misha's look, then live

*Created November 4, 2026. Copy source: `claude/site-copy-v5.md`. Goal: zacforge.com running v5 before the warm-list canvass starts.*

**Where things stand:** branch `v4` already carries Misha's light look (grey base, the Z gradient shapes as SVG, his type) with the v4 copy. This job applies v5 copy on that build, pulls the layout toward comp 7 where it differs, adds two routes and the contact form, and merges to production.

---

## Before starting

- [ ] Repo cloned on the machine running Claude Code (`github.com/zac-forge/website`; after the stolen Mac, check whether it is on the Air at `~/Desktop/zac` or needs a fresh clone) and `git push` works
- [ ] Save `site-copy-v5.md` into the repo at `docs/site-copy-v5.md`
- [ ] Figma MCP connected if Claude Code is to read comp 7 (file `gLk6osGozuEch8I8bPv616`, node `198:427`); Drew's seat allows a limited number of reads a month, so one `get_design_context` read of comp 7, no more
- [ ] Resend and Turnstile keys, if available. Not required for launch; the form falls back to mailto

## Steps

1. **Branch.** Work on `v4` (or branch `v5` off it). Production untouched until step 6.
2. **Layout toward comp 7.** One Figma read of comp 7. Carry over: full-width colored bands for the hero (navy), What changed (maroon), Who we are (sky blue), with the rounded sweep edges; the three-step row under What changed; the process row under How we work. Keep the existing tokens, shapes, and type. Anything the comp doesn't cover, extend from the existing v4 system and note it in `design/DESIGN-SYSTEM-NOTES.md`.
3. **Apply v5 copy.** New section order, hero, logo band, four stacked case studies, the Reality Check section, What we fix, How we work, Who we are, closing form. Routes `/reality-check` and `/fix-week` on the offer-page template. `/web-partner` rewritten. Eyebrow and CTA changes on the three existing offer pages. llms.txt, schema, sitemap, metadata.
4. **Contact form.** Per the build notes in the copy doc. Keys in: Resend plus Turnstile. Keys out: logs and mailto fallback. Either way it ships.
5. **Checks.** Build passes; view-source shows the content; "$" only on the $1B figure; zero hits for AI-native / AI-first / AI-powered, Backlog Review, Two-Week Proof, Snapshot, Advise; no em dashes; no DoD seal in any image; `/brand-system` still 404 with the flag off; preview still noindex. Full-page screenshots at 1440 and 390 for Drew to approve.
6. **Go live.** On Drew's OK: merge to main, deploy, confirm zacforge.com serves v5, confirm production robots.txt and meta still allow indexing (the noindex was preview-only), submit the sitemap in Search Console.
7. **After.** Run the Reality Check on zacforge.com itself. Post the preview link in the Misha Slack thread as a rough build off comp 7, his call on everything.

---

## Prompt for Claude Code (paste as one message)

```
Read docs/site-copy-v5.md first. It is the content spec for this job and it
supersedes docs/site-copy-v4.md.

Context: branch v4 already has the new light design (grey base, the Z gradient
SVG shapes, the current type and tokens). Keep all of that. This job changes the
words and the section layout, adds two pages and a contact form, and then goes
to production on my say-so.

1. Branch. Create v5 off v4 and work there. Do not touch main until step 6.

2. Layout. Read Misha's comp 7 once through the Figma MCP server (file
   gLk6osGozuEch8I8bPv616, node 198:427). I have a limited number of reads, so
   one get_design_context call, no more. Carry over from it: full-width colored
   bands with rounded sweep edges for the hero (navy), the What changed section
   (maroon), and the Who we are section (sky blue); the three-step row
   (Senior team, Optimized process, Delivery) under What changed; the process
   row under How we work. Add any new color values to the existing tokens file
   with a note in design/DESIGN-SYSTEM-NOTES.md saying they were read off the
   comp and are provisional. Keep the existing type, spacing, and SVG shapes.
   Where the comp doesn't cover a layout, extend the existing system and note
   it; don't invent a new style.

3. Copy. Apply docs/site-copy-v5.md exactly: the new home section order, hero,
   logo band (text wordmarks, muted, never labeled as clients), four stacked
   case-study cards (text first, number set large, no carousel, no full-page
   screenshots), the Reality Check section with all five lines visible, What we
   fix, How we work, Who we are (by role for the creative director and senior
   engineer), and the closing form. Add routes /reality-check and /fix-week on
   the offer-page template. Rewrite /web-partner. On /ai-visibility,
   /accessibility, and /brand-system apply only the eyebrow line and closing
   CTA changes in the "Existing offer pages" section, and remove the Snapshot
   step from /ai-visibility. Leave /brand-system behind its flag. Replace
   public/llms.txt. Update schema, sitemap, titles, and meta per the doc. All
   content in server-rendered HTML. Where the doc has a [[slot]], render the
   working text given in the slot, never the brackets.

4. Contact form. Fields: name, email, message ("What did you build, and what's
   wrong with it?"), url (optional). Server-rendered form posting to
   /api/contact. Write the handler for this project's runtime (Pages Function
   or Worker route, match what exists): validate, verify a Turnstile token,
   send through Resend to drew@zacforge.com, return a plain thank-you page. If
   RESEND_API_KEY or the Turnstile keys are missing from the environment, the
   handler must still return the thank-you page and log the submission, and
   the form must render a mailto:drew@zacforge.com fallback link that carries
   the same fields in the body. Document both keys in the README.

5. Checks, and report each one: build passes; view-source on every page shows
   the content; the only "$" on the site and in llms.txt is the $1 billion
   figure; zero hits for "AI-native", "AI-first", "AI-powered", "Backlog
   Review", "Two-Week Proof", "Snapshot", "Advise"; no em dashes anywhere in
   copy; no DoD seal or insignia in any image; /brand-system returns 404 with
   the flag off; the preview still sends noindex. Deploy the preview with `npx wrangler deploy --name website-v5-preview` and give
   me full-page screenshots of the home page at 1440px and 390px plus the two
   new pages. Stop and wait for my OK.

6. Go live, only after I say so: merge v5 into main, deploy production, confirm
   https://zacforge.com serves the new hero and /reality-check, and confirm the
   production robots.txt and meta tags still allow indexing (the noindex was
   for the preview only). Tell me when it's up and what, if anything, from the
   copy doc you couldn't apply.
```

---

## Status

- Nov 4: plan written, copy reviewed, docs and CLAUDE.md committed on branch `v5` (patch in Drew's Downloads/zac-v5/). Drew applies and pushes, then runs the prompt in Claude Code.
