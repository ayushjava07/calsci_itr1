import { Menu, X, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import { LoadingFallback } from "./LoadingFallback";
import { CloudinaryImg } from "./CloudinaryImg";

const WaitlistModal = lazy(() =>
  import("./WaitlistModal").then((mod) => ({ default: mod.WaitlistModal }))
);

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative bg-white border-2 border-[#c55b00] rounded-lg shadow-[0px_2px_4px_rgba(197,91,0,0.2)] size-10 flex items-center justify-center overflow-hidden">
        <CloudinaryImg
          publicId="app-header_noczbw"
          variant="icon"
          alt="CalSci Logo"
          className="w-full h-full object-cover scale-[1.8]"
        />
      </div>

      <span className="font-['Saira_Stencil_One'] text-xl md:text-2xl text-[#111212]">
        CALSCI
      </span>
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = ["How It Works", "Features", "FAQ's", "Pricing"];

  /* lock scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center bg-black/5 rounded-full px-2 py-1.5 border border-white">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/#${item
                  .toLowerCase()
                  .replace(/'/g, "")
                  .replace(/ /g, "-")}`}
                className="font-['Barlow'] px-5 py-1.5 text-sm lg:text-[15px] text-[#2d2d2d] hover:text-[#c55b00] rounded-full hover:bg-white/50 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-[#c55b00] hover:bg-[#a64d00] text-white px-7 py-2.5 rounded-full font-bold text-sm shadow-[0_4px_12px_rgba(197,91,0,0.25)] hover:scale-105 transition"
            >
              Get Yours Now
              <ShoppingBag size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#c55b00]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">

          {/* overlay background */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* drawer */}
          <div className="absolute top-0 left-0 w-full bg-[#f8f9fa] pt-6 pb-10 px-6 shadow-2xl animate-slide-down">

            {/* top row */}
            <div className="flex items-center justify-between mb-8">
              <Logo />
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={28} className="text-[#c55b00]" />
              </button>
            </div>

            {/* nav items */}
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`/#${item
                    .toLowerCase()
                    .replace(/'/g, "")
                    .replace(/ /g, "-")}`}
                  className="text-lg text-[#2d2d2d] font-medium hover:text-[#c55b00]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA */}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="flex items-center justify-center gap-3 bg-[#c55b00] text-white px-6 py-4 rounded-xl font-bold text-base mt-8 shadow-lg"
            >
              Get Yours Now
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      )}

      {/* animation */}
      <style>
        {`
        @keyframes slideDown {
          from {
            transform: translateY(-30px);
            opacity:0;
          }
          to {
            transform: translateY(0);
            opacity:1;
          }
        }

        .animate-slide-down {
          animation: slideDown 0.25s ease-out;
        }
        `}
      </style>

      {isModalOpen ? (
        <Suspense fallback={<LoadingFallback variant="modal" label="Loading..." />}>
          <WaitlistModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      ) : null}
    </>
  );
}