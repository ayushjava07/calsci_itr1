import img71E2E290371E467788Ab2E7709A30B5D1 from "figma:asset/a9ad06c960db0ae2e317c4089aaaa28718fd8518.png";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="py-12 md:py-16 bg-[#f2f2f2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative rounded-xl p-8 md:p-12 lg:p-16 overflow-hidden"
          style={{ 
            background: "linear-gradient(180deg, rgb(197, 91, 0) 0%, rgb(255, 186, 127) 100%)" 
          }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-['Saira_SemiCondensed',sans-serif] font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#111212] leading-tight mb-4">
                Subscribe to our newsletter
              </h2>
              <p className="font-['Barlow',sans-serif] text-base md:text-lg text-[#111212]/80">
                Be the first to receive updates, tips and more.
              </p>
            </div>

            {/* Subscription Form */}
            <div className="flex-1 max-w-md w-full">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-[rgba(255,133,28,0.84)] border border-[#c55b00] rounded-2xl px-6 py-3 text-base md:text-lg text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-white/50 font-['Saira_SemiCondensed',sans-serif]"
                />
                <button
                  type="submit"
                  className="bg-white border border-[#c55b00] rounded-2xl px-8 py-3 text-base md:text-lg text-black font-['Saira_SemiCondensed',sans-serif] font-medium hover:bg-[#f8f8f8] transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Decorative Panda */}
          <div className="absolute -bottom-2 -right-2 md:bottom-0 md:right-8 w-24 md:w-32 lg:w-36 opacity-90">
            <img 
              alt="CalSci mascot" 
              className="w-full h-auto object-contain drop-shadow-lg" 
              src={img71E2E290371E467788Ab2E7709A30B5D1} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
