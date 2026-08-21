import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

// Self-hosted fonts (weights per docs/IMPLEMENTATION.md in the handoff package).
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

import "./styles/globals.css";
import "./styles/motion.css";
import "./styles/layout.css";
import "./styles/interactive.css";
import App from "./App.tsx";

const root = document.getElementById("root")!;
const tree = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build prerenders this page to static HTML, so crawlers and
// assistants that do not execute JavaScript still receive the copy. Hydration
// adopts that markup instead of discarding it.
//
// The dev server serves the bare template, where #root contains only the
// <!--app-html--> placeholder, and hydrateRoot against that would report the
// entire tree as a mismatch. So the entry picks based on what is there.
//
// firstElementChild, not firstChild: the placeholder is a comment node, which
// is a child, so firstChild is truthy in dev and sends it down the wrong path.
if (root.firstElementChild) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
