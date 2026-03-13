import imgF60172Bc599F47918588E49899B841A21 from "@/assets/app-header.png";
import { Instagram, Linkedin, Youtube } from "lucide-react";

function XIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative bg-white border-2 border-[#c55b00] rounded-lg shadow-sm size-10 lg:size-11 flex items-center justify-center overflow-hidden">
        <img
          alt="CalSci Logo"
          className="w-full h-full object-cover scale-[1.8]"
          src={imgF60172Bc599F47918588E49899B841A21}
        />
      </div>
      <span className="font-['Saira_Stencil_One',sans-serif] text-2xl lg:text-[26px] tracking-tight text-[#111212]">
        CALSCI
      </span>
    </div>
  );
}

export function Footer() {
  const footerLinks = {
    features: [
      { name: "pricing", label: "pricing" },
      { name: "docs", label: "docs" },
      { name: "simulator", label: "simulator" },
    ],
    support: [
      { name: "faqs", label: "FAQ'S" },
      { name: "contact", label: "contact" },
      { name: "account", label: "account" },
    ],
    legal: [
      { name: "privacy", label: "privacy" },
      { name: "terms", label: "terms of services" },
      { name: "cookies", label: "cookies" },
    ],
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-black/[0.03]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-3 space-y-8 pr-4">
            <Logo />
            <p className="font-['Barlow',sans-serif] font-bold text-lg text-black/80 max-w-[280px]">
              A Calculator That Talks to the Real World
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-black/90 hover:text-[#c55b00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={28} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="text-black/90 hover:text-[#c55b00] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={28} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="text-black/90 hover:text-[#c55b00] transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon size={24} />
              </a>
              <a
                href="#"
                className="text-black/90 hover:text-[#c55b00] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Features Links */}
          <div className="space-y-6">
            <h3 className="font-['Barlow',sans-serif] font-black text-[15px] uppercase tracking-wider text-black">
              features
            </h3>
            <ul className="space-y-4">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.name}`}
                    className="font-['Barlow',sans-serif] font-medium text-lg text-black/50 hover:text-[#c55b00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h3 className="font-['Barlow',sans-serif] font-black text-[15px] uppercase tracking-wider text-black">
              support
            </h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.name}`}
                    className="font-['Barlow',sans-serif] font-medium text-lg text-black/50 hover:text-[#c55b00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h3 className="font-['Barlow',sans-serif] font-black text-[15px] uppercase tracking-wider text-black">
              legal
            </h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.name}`}
                    className="font-['Barlow',sans-serif] font-medium text-lg text-black/50 hover:text-[#c55b00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-24 pt-10 border-t border-black/[0.05] flex justify-center">
          <p className="font-['Barlow',sans-serif] font-medium text-sm text-black/30">
            © {new Date().getFullYear()} CalSci. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
