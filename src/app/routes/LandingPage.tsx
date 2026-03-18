import { AppsSection } from "../components/AppsSection";
import { Hero } from "../components/Hero";
import { lazy, Suspense } from "react";
import { LazyOnVisible } from "../components/LazyOnVisible";
import { LoadingFallback } from "../components/LoadingFallback";

const Newsletter = lazy(() =>
  import("../components/Newsletter").then((mod) => ({
    default: mod.Newsletter,
  }))
);

export function LandingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <Hero />
      <AppsSection />
      <LazyOnVisible rootMargin="800px" minHeightClassName="min-h-[520px]">
        <Suspense
          fallback={<LoadingFallback variant="inline" label="Loading..." />}
        >
          <Newsletter />
        </Suspense>
      </LazyOnVisible>
    </main>
  );
}

