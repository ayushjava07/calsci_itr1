import imgSubscriberPanda from "@/assets/subscriber-panda.png";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-20 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-[28px] md:rounded-[32px] p-12 md:p-14 lg:p-16 overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(180deg,#C55B00 0%,#FFBA7F 100%)",
          }}
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-['Barlow',sans-serif] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111212] leading-tight mb-4">
                Subscribe to our newsletter
              </h2>

              <p className="font-['Barlow',sans-serif] font-bold text-base md:text-lg text-[#111212]/90">
                Be the first to receive Updates, Tips and more.
              </p>
            </div>

            {/* Form */}
            <div className="flex-1 max-w-md w-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[#f39c12] border-2 border-[#d35400] rounded-xl px-5 py-3 text-base text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 font-['Barlow',sans-serif] font-bold shadow-inner"
                  />

                  <button
                    type="submit"
                    className="bg-white rounded-xl px-6 py-3 text-base text-black font-['Barlow',sans-serif] font-black shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>

                <p className="font-['Barlow',sans-serif] font-bold text-xs text-[#111212]/80 text-center sm:text-left mb-20">
                  By subscribing you agree to our Privacy Policy
                </p>
              </form>
            </div>
          </div>

          {/* Panda Responsive */}
          <div
            className="
            absolute bottom-0 
            left-1/2 -translate-x-1/2 
            md:left-auto md:translate-x-0 md:right-4
            sm:right-10
            w-28 sm:w-36 md:w-44 lg:w-40
            translate-y-1/4
            pointer-events-none
          "
          >
            <img
              alt="CalSci panda mascot"
              src={imgSubscriberPanda}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
