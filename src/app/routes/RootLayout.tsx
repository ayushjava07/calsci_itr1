import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { ScrollToTop } from "./ScrollToTop";
import { lazy, Suspense } from "react";
import { LazyOnVisible } from "../components/LazyOnVisible";
import { LoadingFallback } from "../components/LoadingFallback";

const Footer = lazy(() =>
  import("../components/Footer").then((mod) => ({ default: mod.Footer }))
);

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <ScrollToTop />
      <Header />
      <Outlet />
      <LazyOnVisible rootMargin="600px" minHeightClassName="min-h-[260px]">
        <Suspense fallback={<LoadingFallback variant="inline" label="Loading..." />}>
          <Footer />
        </Suspense>
      </LazyOnVisible>
    </div>
  );
}

