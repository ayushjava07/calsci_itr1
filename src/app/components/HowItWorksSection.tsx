export function HowItWorksSection() {
  const steps = [
    { step: 1, title: "Order", description: "Join the waitlist and secure your spot for early access." },
    { step: 2, title: "Receive", description: "Get your CalSci device with pre-loaded Calculator, Graph, and ChatGPT apps." },
    { step: 3, title: "Build", description: "Create custom apps with MicroPython and the CalSci SDK." },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white" aria-labelledby="how-it-works-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="how-it-works-heading" className="font-['Barlow',sans-serif] font-bold text-2xl md:text-3xl text-[var(--calsci-text)] text-center mb-12">
          How It Works
        </h2>
        <ol className="space-y-8 md:space-y-12">
          {steps.map(({ step, title, description }) => (
            <li key={step} className="flex gap-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--calsci-orange)] text-white font-bold flex items-center justify-center text-sm" aria-hidden>
                {step}
              </span>
              <div>
                <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-[var(--calsci-text)]">{title}</h3>
                <p className="font-['Barlow',sans-serif] text-base text-[var(--calsci-text-muted)] mt-1">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
