import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router";
import { CloudinaryImg } from "./CloudinaryImg";

function XIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-offset-2 rounded-lg w-fit"
      aria-label="CalSci home"
    >
      <div className="relative bg-white border-2 border-[var(--calsci-orange)] rounded-lg shadow-sm size-10 flex items-center justify-center overflow-hidden">
        <CloudinaryImg
          publicId="app-header_noczbw"
          variant="icon"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover scale-[1.8]"
        />
      </div>
      <span className="font-['Saira_Stencil_One'] text-xl text-[var(--calsci-text)]">
        CALSCI
      </span>
    </Link>
  );
}

export function Footer() {
  const footerLinks = {
    product: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#how-it-works", label: "How It Works" },
    ],
    support: [
      { href: "/#faqs", label: "FAQs" },
      { href: "mailto:hello@calsci.com", label: "Contact" },
    ],
    legal: [
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms" },
      { to: "/cookies", label: "Cookies" },
    ],
  };

  return (
    <footer
      className="bg-white pt-20 pb-10 border-t border-black/5"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-3 space-y-6">
            <Logo />
            <p className="font-['Barlow',sans-serif] font-medium text-base text-[var(--calsci-text-muted)] max-w-[280px]">
              A programmable calculator with AI, graphing, and MicroPython.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/vir.twirl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--calsci-text-muted)] hover:text-[var(--calsci-orange)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-offset-2 rounded"
                aria-label="Instagram"
              >
                <Instagram size={22} strokeWidth={2} />
              </a>
              <a
                href="https://www.youtube.com/@CalSci"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--calsci-text-muted)] hover:text-[var(--calsci-orange)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-offset-2 rounded"
                aria-label="YouTube"
              >
                <Youtube size={22} strokeWidth={2} />
              </a>
              <a
                href="https://x.com/virTwirl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--calsci-text-muted)] hover:text-[var(--calsci-orange)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-offset-2 rounded"
                aria-label="X (Twitter)"
              >
                <XIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/calsci-io/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--calsci-text-muted)] hover:text-[var(--calsci-orange)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-offset-2 rounded"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-['Barlow',sans-serif] font-bold text-sm uppercase tracking-wider text-[var(--calsci-text)]">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-['Barlow',sans-serif] font-medium text-sm text-[var(--calsci-text-muted)] hover:text-[var(--calsci-orange)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-['Barlow',sans-serif] font-bold text-sm uppercase tracking-wider text-[var(--calsci-text)]">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-['Barlow',sans-serif] font-medium text-sm text-[var(--calsci-text-muted)] hover:text-[var(--calsci-orange)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-['Barlow',sans-serif] font-bold text-sm uppercase tracking-wider text-[var(--calsci-text)]">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-['Barlow',sans-serif] font-medium text-sm text-[var(--calsci-text-muted)] hover:text-[var(--calsci-orange)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/5 text-center">
          <p className="font-['Barlow',sans-serif] font-medium text-sm text-[var(--calsci-text-muted)]">
            © {new Date().getFullYear()} CalSci. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
