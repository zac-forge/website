import type { Offer } from "./types";

export const accessibility: Offer = {
  path: "/accessibility",
  navTitle: "Accessibility",
  // The home card's line (2026-11-18).
  summary:
    "Public agencies and federally funded health providers face federal accessibility deadlines in 2027 and 2028. We fix the site's code. We don't cover it with a widget.",
  title: "Accessibility fixes for ADA Title II deadlines | ZAC Forge",
  description:
    "Public agencies and HHS-funded health providers face accessibility deadlines in 2027 and 2028. We test by hand, fix the code to WCAG 2.1 AA, and document it.",
  serviceName: "Accessibility",
  serviceDescription:
    "Manual accessibility testing and code fixes to WCAG 2.1 AA, for public agencies facing ADA Title II deadlines, HHS-funded health providers facing Section 504 deadlines, and private businesses. Findings ranked by risk, fixes made in the code, and a written record. No overlays.",
  heroTitle: "Accessibility",
  heroIcon: { src: "/art/subpage/subpage-icon-accessibility.svg", width: 47, height: 47 },
  // TODO(Misha): no card design for Accessibility yet. The
  // site blue and the hero's accessibility icon stand in (question 44).
  accent: "var(--color-offer-accessibility)",
  heroAccent: "var(--color-hero-accessibility)",
  cardIcon: "/art/subpage/subpage-icon-accessibility.svg",
  eyebrow: "ACCESSIBILITY AND PERFORMANCE",
  h1: "Accessibility and performance, corrected in the code.",
  subline: "Question 3 on our free [Reality Check](/reality-check) shows where you stand.",
  intro: [
    "Public agencies and federally funded health providers have federal deadlines in 2027 and 2028 to make their websites work for people with disabilities. We test your site by hand, fix the code to WCAG 2.1 AA, and document what we did. We don't sell a scan or a widget.",
  ],
  blocks: [
    // Deadline dates. Recheck if NFB v. DOJ is decided or the rules are revised.
    {
      heading: "Who has a deadline",
      kind: "titled",
      intro: ["Two federal rules set the same standard for websites and mobile apps: WCAG 2.1 Level AA."],
      items: [
        {
          title: "State and local government (ADA Title II)",
          body: "Cities, counties, public schools and colleges, public hospitals, libraries, transit agencies, and special districts.",
          bullets: [
            "Population of 50,000 or more: April 26, 2027",
            "Under 50,000, and special districts: April 26, 2028",
          ],
        },
        {
          title: "Health care (Section 504, HHS)",
          body: "Hospitals, clinics, health centers, and practices that receive funding from the US Department of Health and Human Services.",
          bullets: ["15 or more employees: May 11, 2027", "Fewer than 15 employees: May 10, 2028"],
        },
        {
          title: "Vendors",
          body: "If you build or run a website for one of these organizations, they will need your work to meet the same standard.",
        },
      ],
      outro: [
        "Both sets of dates were pushed back a year in 2026. That extension is being challenged in court, so the dates could change. Not sure which rule covers you? Ask your attorney. We're not lawyers. We can tell you what's wrong with your site either way.",
        "Dates checked November 2026.",
      ],
    },
    {
      heading: "No deadline? The risk is already here.",
      kind: "paragraphs",
      items: [
        "In 2025, 3,948 website accessibility lawsuits were filed in the US, 787 of them in California. 983 targeted sites that already had an overlay widget installed.",
      ],
    },
    {
      heading: "What we test",
      kind: "bullets",
      intro: ["Scanners catch some problems and miss others. We run them, then test by hand."],
      items: [
        "Keyboard only: every menu, carousel, and form, with no mouse",
        "Screen readers: VoiceOver and NVDA",
        "Color contrast and text size",
        "Labels, headings, and landmarks, the signposts a screen reader follows",
        "Speed: page weight, third-party scripts, and Core Web Vitals",
      ],
      outro: ["Speed is on this page because we fix both in the same pass through your code."],
    },
    {
      heading: "What you get",
      kind: "bullets",
      items: [
        "Findings in plain English, ranked by risk. We fix the top 10 first.",
        "Fixes in your theme, components, and content, to WCAG 2.1 AA",
        "A written record: what we tested, what we fixed, and what's left",
        "An accessibility statement for your site and a short conformance summary",
        "Your overlay widget removed, once the real problems are fixed",
        "An optional re-check each quarter, as part of a Web Partner plan",
      ],
    },
    {
      heading: "What we can't do",
      kind: "bullets",
      items: [
        "We can't certify legal compliance. We're not lawyers, and nobody can promise you'll never get a demand letter.",
        "We can't fix software you don't control, like a patient portal, scheduling tool, or payment page run by a vendor. We'll tell you which problems are theirs to fix.",
        "A site doesn't stay accessible by itself. Every new page and plugin can break it. That's what the quarterly re-check is for.",
      ],
    },
    {
      heading: "For health providers",
      kind: "paragraphs",
      items: [
        "Start with what patients do online: find a provider, book a visit, fill out a form, pay a bill. Those pages come first. Our team has worked on HIPAA-regulated healthcare systems. For anything behind a login, you set us up with a test account. We test with dummy data and never touch patient information.",
      ],
    },
    {
      heading: "How it works",
      kind: "numbered",
      items: [
        { title: "Reality Check.", body: "Free. Question 3 shows where you stand." },
        {
          title: "The fix.",
          body: "We test by hand, rank what we find, and fix it in your code. Quoted after the check. One price, agreed before we start.",
        },
        { title: "The record.", body: "You get the documentation and an accessibility statement." },
        { title: "The re-check.", body: "Each quarter if you want it, as part of a Web Partner plan." },
      ],
      outro: [
        "How long it takes depends on the size of the site. If your date is in 2027, start with the free check now, so you know the size of the job.",
      ],
    },
  ],
  faq: [
    {
      question: "Will this make us ADA compliant?",
      answer:
        "Nobody can promise that, and we're not lawyers. We fix your site to WCAG 2.1 AA, the standard the federal rules name, test it with real assistive technology, and document what we did. If a demand letter ever arrives, you'll have the record to show your work.",
    },
    {
      question: "We already have an accessibility widget. Is that enough?",
      answer:
        "No. A quarter of the 2025 lawsuits targeted sites that had one. We usually recommend removing it once the real issues are fixed.",
    },
    {
      question: "Which deadline applies to us?",
      answer:
        "State and local government bodies fall under ADA Title II: April 26, 2027 for a population of 50,000 or more, April 26, 2028 for smaller ones and special districts. Organizations that receive HHS funding fall under Section 504: May 11, 2027 with 15 or more employees, May 10, 2028 with fewer. Some, such as public hospitals, may fall under both. Your attorney can tell you which applies.",
    },
    {
      question: "The deadlines already moved once. Will they move again?",
      answer:
        "They might. The 2026 extension is being challenged in court. We'd plan around the dates as written. The work is the same whenever the date lands.",
    },
    {
      question: "Your Reality Check says WCAG 2.2 and this page says 2.1. Which is it?",
      answer:
        "Both. 2.2 is the newer version and includes what 2.1 requires. We test against 2.2 and fix to at least 2.1 AA, the version the federal rules name.",
    },
  ],
  footnote:
    "Sources: EcomBack 2025 ADA Website Accessibility Lawsuit Report. US Department of Justice interim final rule, April 20, 2026 (ADA Title II). US Department of Health and Human Services interim final rule, May 2026 (Section 504).",
  cta: { label: "Start with a Reality Check", href: "/#contact" },
};
