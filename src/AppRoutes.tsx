import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";

/**
 * Routes only, with no router around them. The client wraps these in a
 * BrowserRouter and the prerender wraps them in a StaticRouter, so both
 * entries render the identical tree and hydration has nothing to reconcile.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
