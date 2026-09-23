import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home.tsx";
import OfferPage from "./pages/OfferPage.tsx";
import { LIVE_OFFERS } from "./pages/offers";
import { metaFor } from "./lib/meta";

/**
 * Keeps document.title in step with the route on the client. The prerender
 * writes the real head for every page, so this only matters in the dev server
 * and after client-side navigation.
 */
function RouteTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = metaFor(pathname).title;
  }, [pathname]);
  return null;
}

/**
 * Routes only, with no router around them. The client wraps these in a
 * BrowserRouter and the prerender wraps them in a StaticRouter, so both
 * entries render the identical tree and hydration has nothing to reconcile.
 */
export function AppRoutes() {
  return (
    <>
      <RouteTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        {LIVE_OFFERS.map((offer) => (
          <Route key={offer.path} path={offer.path} element={<OfferPage offer={offer} />} />
        ))}
      </Routes>
    </>
  );
}
