import { useState } from "react";
import { lazy, Suspense } from "react";
import { LoadingFallback } from "./LoadingFallback";
import { CloudinaryImg } from "./CloudinaryImg";

const WaitlistModal = lazy(() =>
  import("./WaitlistModal").then((mod) => ({ default: mod.WaitlistModal }))
);

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative bg-[var(--calsci-bg)] overflow-hidden flex flex-col items-center"
      aria-labelledby="hero-heading"
    >
      <div className="relative w-full flex flex-col items-center pt-16 md:pt-24 pb-14 px-4">
        {/* Hero image */}
        <div className="relative z-10 w-full flex justify-center">
          <CloudinaryImg
            publicId="fh1_zx1vti"
            variant="hero"
            alt="CalSci programmable calculator device with display"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-[min(900px,100%)] sm:w-[min(1100px,100%)] md:w-[min(1300px,100%)] lg:w-[min(1500px,100%)] max-w-none object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.08)]"
          />
        </div>

        {/* Text + CTA */}
        <div className="relative z-20 text-center mt-10 md:mt-14 max-w-2xl">
          <h1
            id="hero-heading"
            className="font-['Barlow',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.2] text-[var(--calsci-text)]"
          >
            CalSci: Calculator That Talks to the Real World
          </h1>
          <p className="mt-4 font-['Barlow',sans-serif] text-base md:text-lg text-[var(--calsci-text-muted)]">
            Scientific calculator, graphing, and ChatGPT in one device. Programmable with MicroPython.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-[var(--calsci-orange)] hover:bg-[var(--calsci-orange-hover)] text-white font-['Barlow',sans-serif] font-bold text-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-offset-2"
              aria-label="Get early access to CalSci"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
      {isModalOpen ? (
        <Suspense
          fallback={<LoadingFallback variant="modal" label="Loading..." />}
        >
          <WaitlistModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      ) : null}
    </section>
  );
}
