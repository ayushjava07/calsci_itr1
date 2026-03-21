import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What makes CalSci different?", a: "CalSci combines a scientific calculator, graphing tool, and ChatGPT-powered AI in one device. You can also build custom apps with MicroPython." },
  { q: "When will CalSci ship?", a: "Join our waitlist to be notified when pre-orders open. We're targeting 2025 for early access." },
  { q: "Can I program my own apps?", a: "Yes. CalSci supports MicroPython and includes GPIO for hardware projects. Use the CalSci SDK to build and deploy custom apps." },
  { q: "What's included?", a: "Every CalSci comes with Calculator, Graph, and ChatGPT apps pre-installed. The SDK and documentation are free." },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[var(--calsci-bg)]" aria-labelledby="faq-heading">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 id="faq-heading" className="font-['Barlow',sans-serif] font-bold text-2xl md:text-3xl text-[var(--calsci-text)] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="bg-white rounded-xl border border-black/5 overflow-hidden">
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-['Barlow',sans-serif] font-semibold text-[var(--calsci-text)] hover:bg-black/[0.02] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-inset"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  {q}
                  <ChevronDown className={`flex-shrink-0 ml-2 w-5 h-5 text-[var(--calsci-orange)] transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} aria-hidden />
                </button>
              </dt>
              <dd id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} className={openIndex === i ? "block" : "hidden"}>
                <p className="px-5 pb-4 pt-0 font-['Barlow',sans-serif] text-[var(--calsci-text-muted)] text-[15px] leading-relaxed">{a}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
