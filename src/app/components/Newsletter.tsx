import { useState } from "react";
import { CloudinaryImg } from "./CloudinaryImg";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzQ6J60EAcwCoaWiR9FJ5hGvsaYKOvkVP4-5vjue7oTHoVUxOPlhBTFX1gZ4vSrwnFCfw/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");
    setMessage("");

    const formData = new FormData();
    formData.append("email", email);

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setMessage("Thanks for subscribing! 🎉");
      setEmail("");

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="relative rounded-[32px] p-12 md:p-16 overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(180deg,#C55B00 0%,#FFBA7F 100%)",
          }}
        >

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-['Barlow'] font-black text-4xl md:text-5xl lg:text-6xl text-[#111212] leading-tight mb-4">
                Subscribe to our newsletter
              </h2>

              <p className="font-['Barlow'] font-bold text-lg text-[#111212]/90">
                Be the first to receive Updates, Tips and more.
              </p>
            </div>

            {/* Form */}
            <div className="flex-1 max-w-md w-full">

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <div className="flex flex-col md:flex-row gap-3">

                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#f39c12] border-2 border-[#d35400] rounded-xl px-5 py-3 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 font-bold shadow-inner"
                  />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-white rounded-xl px-6 py-3 text-black font-black shadow-lg hover:shadow-xl transition hover:scale-105 active:scale-95 disabled:opacity-60 whitespace-nowrap"
                  >
                    {status === "loading" ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Subscribing
                      </div>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>

                <p className="text-xs text-[#111212]/80 font-bold mb-20">
                  By subscribing you agree to our Privacy Policy
                </p>

                {message && (
                  <p
                    className={`text-sm font-semibold ${
                      status === "success"
                        ? "text-green-700"
                        : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}

              </form>
            </div>
          </div>

          {/* Panda */}
          <div
            className="
            absolute bottom-0 
            left-1/2 -translate-x-1/2 
            md:left-auto md:translate-x-0 md:right-6
            w-32 md:w-44
            translate-y-1/4
            pointer-events-none
          "
          >
            <CloudinaryImg
              publicId="subscriber-panda_roq4e9"
              variant="card"
              alt="CalSci panda mascot"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}