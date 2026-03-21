import { Menu, X, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import { LoadingFallback } from "./LoadingFallback";
import { CloudinaryImg } from "./CloudinaryImg";
import { Link } from "react-router";

const WaitlistModal = lazy(() =>
  import("./WaitlistModal").then((mod) => ({ default: mod.WaitlistModal }))
);

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-offset-2 rounded-lg"
      aria-label="CalSci home"
    >
      <div className="relative bg-white border-2 border-[var(--calsci-orange)] rounded-lg shadow-sm size-9 flex items-center justify-center overflow-hidden">
        <CloudinaryImg
          publicId="app-header_noczbw"
          variant="icon"
          alt=""
          aria-hidden
          className="w-full h-full object-cover scale-[1.8]"
        />
      </div>
      <span className="font-['Saira_Stencil_One'] text-lg md:text-xl text-[var(--calsci-text)]">
        CALSCI
      </span>
    </Link>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [{ label: "Features", href: "/#features" }];

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/5"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-['Barlow',sans-serif] px-4 py-2 text-sm text-[var(--calsci-text-muted)] hover:text-[var(--calsci-orange)] rounded-lg hover:bg-black/[0.03] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-inset"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-[var(--calsci-orange)] hover:bg-[var(--calsci-orange-hover)] text-white px-5 py-2.5 rounded-xl font-['Barlow',sans-serif] font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-offset-2"
              aria-label="Get early access"
            >
              Get Early Access
              <ShoppingBag size={16} aria-hidden />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--calsci-orange)] hover:bg-black/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={24} aria-hidden />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileMenuOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setMobileMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 w-full max-h-[90vh] overflow-auto bg-white pt-6 pb-10 px-6 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <Logo />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[var(--calsci-orange)] hover:bg-black/5 rounded-lg"
                aria-label="Close menu"
              >
                <X size={24} aria-hidden />
              </button>
            </div>
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-['Barlow',sans-serif] py-3 text-base text-[var(--calsci-text)] font-medium hover:text-[var(--calsci-orange)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full mt-6 bg-[var(--calsci-orange)] hover:bg-[var(--calsci-orange-hover)] text-white px-6 py-3.5 rounded-xl font-['Barlow',sans-serif] font-bold"
            >
              Get Early Access
              <ShoppingBag size={18} aria-hidden />
            </button>
          </div>
        </div>
      )}

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
    </>
  );
}
