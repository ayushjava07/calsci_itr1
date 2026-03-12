import svgPaths from "../../imports/svg-peme8j89c1";
import imgF60172Bc599F47918588E49899B841A21 from "figma:asset/7705ee2450563ed81e1e5f877dbbeef073bf1bd2.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative bg-white border-2 border-[#c55b00] rounded-md shadow-md size-12 flex items-center justify-center">
        <div className="relative size-8 rounded overflow-hidden">
          <img 
            alt="CalSci Logo" 
            className="absolute inset-0 object-cover w-full h-full scale-[2.6]" 
            src={imgF60172Bc599F47918588E49899B841A21} 
          />
        </div>
      </div>
      <span className="font-['Saira_Stencil_One',sans-serif] text-2xl md:text-3xl text-[#111212]">
        CALSCI
      </span>
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["How It Works", "Features", "FAQ's", "Pricing"];

  return (
    <header className="sticky top-0 z-50 bg-[#f2f2f2]/95 backdrop-blur-sm border-b border-[#c55b00]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#f2f2f2] rounded-xl px-2 py-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/'/g, '').replace(/ /g, '-')}`}
                className="font-['Saira_SemiCondensed',sans-serif] px-4 py-2 text-sm lg:text-base text-black hover:text-[#c55b00] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:flex items-center gap-2 bg-[#c55b00] hover:bg-[#a64d00] text-white px-6 py-2 rounded-xl font-['Saira_SemiCondensed',sans-serif] font-bold text-sm lg:text-base transition-colors">
            Get Yours Now
            <svg className="w-3 h-3.5" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
              <path clipRule="evenodd" d={svgPaths.p106c45f0} fill="white" fillRule="evenodd" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#c55b00]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/'/g, '').replace(/ /g, '-')}`}
                className="font-['Saira_SemiCondensed',sans-serif] px-4 py-2 text-base text-black hover:text-[#c55b00] hover:bg-white/50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="flex items-center justify-center gap-2 bg-[#c55b00] text-white px-6 py-3 rounded-xl font-['Saira_SemiCondensed',sans-serif] font-bold text-base mt-2">
              Get Yours Now
              <svg className="w-3 h-3.5" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
                <path clipRule="evenodd" d={svgPaths.p106c45f0} fill="white" fillRule="evenodd" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
