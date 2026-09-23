import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

// Self-hosted open fallback for Avenir, the board's face, which ships with
// Apple devices only. Two weights, matching the two the board uses.
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/900.css";

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
