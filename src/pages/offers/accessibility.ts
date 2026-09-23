import type { Offer } from "./types";

export const accessibility: Offer = {
  path: "/accessibility",
  row: "03",
  rowTitle: "Accessibility and performance",
  rowStatement: "Find what locks people out and slows you down.",
  rowItems: [
    "Manual keyboard and screen reader testing",
    "WCAG 2.2 AA",
    "Accessibility statement",
    "Page weight and third-party scripts",
    "Core Web Vitals",
    "Fixed in the code, not covered with an overlay",
  ],
  rowLink: "How we test",
  title: "Accessibility and Performance Audit | ZAC Forge",
  description:
    "Manual accessibility testing against WCAG 2.2 AA and a performance review, with fixes made in your code, not covered with an overlay.",
  serviceName: "Accessibility and Performance",
  serviceDescription:
    "Manual testing against WCAG 2.2 AA, performance review, fixes made in the code, and an accessibility statement. No overlays.",
  eyebrow: "ACCESSIBILITY AND PERFORMANCE",
  h1: "Accessibility and performance, fixed in the code.",
  intro: [
    "We do not sell a scan or a widget. We test your site by hand, fix the code, and document what we did.",
    "In 2025, 3,948 website accessibility lawsuits were filed in the US, 787 of them in California. 983 targeted sites that already had an overlay widget installed.",
  ],
  blocks: [
    {
      heading: "What we test",
      kind: "bullets",
      items: [
        "Keyboard navigation and focus, including menus, carousels, and forms",
        "Screen readers (VoiceOver and NVDA)",
        "Color contrast and text size",
        "Labels, headings, and landmarks",
        "Page weight, third-party scripts, and Core Web Vitals",
      ],
    },
    {
      heading: "What you get",
      kind: "bullets",
      items: [
        "Findings in plain English, ranked by risk, with the top 10 fixed first",
        "Fixes in your theme, components, and content",
        "An accessibility statement and a short conformance summary",
        "Removal of any overlay",
        "Optional quarterly re-check as part of a Web Partner plan",
      ],
    },
  ],
  proof: ["Our IBM.com work shipped under IBM's internal accessibility standards."],
  faq: [
    {
      question: "Will this make us ADA compliant?",
      answer:
        "No one can honestly promise that. We reduce your risk, fix what we find, and document it, which is what matters if a demand letter ever arrives.",
    },
    {
      question: "We already have an accessibility widget. Is that enough?",
      answer:
        "No. A quarter of 2025 lawsuits targeted sites that had one. We usually recommend removing it once the real issues are fixed.",
    },
    {
      question: "We receive federal health funding. Does a deadline apply?",
      answer:
        "HHS-funded organizations with 15 or more employees have until May 11, 2027 under the Section 504 rule, and smaller ones until May 10, 2028.",
    },
  ],
  footnote:
    "Sources: EcomBack 2025 ADA Website Accessibility Lawsuit Report. HHS press release on the Section 504 deadline extension.",
};
