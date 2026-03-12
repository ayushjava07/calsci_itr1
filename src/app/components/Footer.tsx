import svgPaths from "../../imports/svg-peme8j89c1";
import imgF60172Bc599F47918588E49899B841A21 from "figma:asset/7705ee2450563ed81e1e5f877dbbeef073bf1bd2.png";
import { Instagram, Linkedin, Twitter } from "lucide-react";

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

export function Footer() {
  const footerLinks = {
    features: [
      { name: "pricing", label: "Pricing" },
      { name: "docs", label: "Docs" },
      { name: "emulator", label: "Emulator" },
    ],
    support: [
      { name: "faqs", label: "FAQ's" },
      { name: "contact", label: "Contact" },
      { name: "account", label: "Account" },
    ],
    legal: [
      { name: "privacy", label: "Privacy" },
      { name: "terms", label: "Terms of Service" },
      { name: "cookies", label: "Cookies" },
    ],
  };

  return (
    <footer className="bg-[#f2f2f2] border-t border-[#c55b00]/10 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 font-['Barlow',sans-serif] text-sm text-black/70 max-w-xs">
              A Calculator That Takes You Beyond The World
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                className="text-black hover:text-[#c55b00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-[#c55b00] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-[#c55b00] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Features Links */}
          <div>
            <h3 className="font-['Saira_SemiCondensed',sans-serif] font-semibold text-lg text-black mb-4">
              Features
            </h3>
            <ul className="space-y-2">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.name}`}
                    className="font-['Barlow',sans-serif] text-sm text-black/70 hover:text-[#c55b00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-['Saira_SemiCondensed',sans-serif] font-semibold text-lg text-black mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.name}`}
                    className="font-['Barlow',sans-serif] text-sm text-black/70 hover:text-[#c55b00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-['Saira_SemiCondensed',sans-serif] font-semibold text-lg text-black mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.name}`}
                    className="font-['Barlow',sans-serif] text-sm text-black/70 hover:text-[#c55b00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#c55b00]/10">
          <p className="font-['Barlow',sans-serif] text-sm text-black/60 text-center">
            © {new Date().getFullYear()} CalSci. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
