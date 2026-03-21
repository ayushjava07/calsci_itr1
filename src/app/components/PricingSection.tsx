import { Check } from "lucide-react";

export function PricingSection() {
  const features = [
    "Calculator, Graph & ChatGPT apps",
    "MicroPython & CalSci SDK",
    "GPIO for hardware projects",
    "Free firmware updates",
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <h2 id="pricing-heading" className="font-['Barlow',sans-serif] font-bold text-2xl md:text-3xl text-[var(--calsci-text)] text-center mb-4">
          Simple Pricing
        </h2>
        <p className="font-['Barlow',sans-serif] text-[var(--calsci-text-muted)] text-center text-sm mb-10">
          One device. All apps included.
        </p>
        <div className="bg-[var(--calsci-bg)] rounded-2xl border border-black/5 p-8 shadow-sm">
          <div className="text-center mb-6">
            <p className="font-['Barlow',sans-serif] text-sm text-[var(--calsci-text-muted)] uppercase tracking-wider mb-1">Early Access</p>
            <p className="font-['Barlow',sans-serif] font-bold text-3xl text-[var(--calsci-text)]">Join the waitlist</p>
            <p className="font-['Barlow',sans-serif] text-sm text-[var(--calsci-text-muted)] mt-2">Pricing announced at launch</p>
          </div>
          <ul className="space-y-4 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <Check className="flex-shrink-0 w-5 h-5 text-[var(--calsci-orange)]" aria-hidden />
                <span className="font-['Barlow',sans-serif] text-[15px] text-[var(--calsci-text)]">{f}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-waitlist"))}
            className="w-full bg-[var(--calsci-orange)] hover:bg-[var(--calsci-orange-hover)] text-white font-['Barlow',sans-serif] font-bold py-3.5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-offset-2"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
}
