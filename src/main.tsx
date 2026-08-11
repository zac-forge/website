import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
