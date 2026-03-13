import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycby1n6_En2iAUrZd3tpI6Al_f9IX1p8_PMrR7ia2aOUrtbyBw2ZHFTCk2fJPRJRrZ7aN/exec";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed");

      setIsSuccess(true);
      setName("");
      setEmail("");

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2500);

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return createPortal(

    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >

      {/* Card */}
      <div
        className="relative rounded-[28px] p-10 md:p-12 w-full max-w-lg mx-4 shadow-2xl"
        style={{
          background: "linear-gradient(180deg,#C55B00 0%,#FFBA7F 100%)",
        }}
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-black/70 hover:text-black text-xl"
        >
          ✕
        </button>

        {isSuccess ? (

          <div className="text-center py-10">

            <h2 className="font-['Barlow'] font-black text-3xl text-[#111212]">
              You're on the list 🚀
            </h2>

            <p className="font-['Barlow'] font-bold text-[#111212]/80 mt-2">
              We'll notify you when CalSci launches.
            </p>

          </div>

        ) : (

          <>
            {/* Heading */}

            <div className="text-center mb-8">

              <h2 className="font-['Barlow'] font-black text-4xl text-[#111212] leading-tight">
                Get Early Access
              </h2>

              <p className="font-['Barlow'] font-bold text-[#111212]/90 mt-2">
                Join the CalSci waitlist
              </p>

            </div>

            {/* Form */}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#f39c12] border-2 border-[#d35400] rounded-xl px-5 py-3 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 font-['Barlow'] font-bold shadow-inner"
              />

              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#f39c12] border-2 border-[#d35400] rounded-xl px-5 py-3 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 font-['Barlow'] font-bold shadow-inner"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="bg-white rounded-xl px-6 py-3 text-black font-['Barlow'] font-black shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
              >

                {isLoading ? (

                  <div className="flex items-center justify-center gap-2">

                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>

                    Joining...

                  </div>

                ) : (

                  "Join Waitlist"

                )}

              </button>

              {error && (
                <p className="text-red-600 text-sm font-bold text-center">
                  {error}
                </p>
              )}

            </form>
          </>
        )}

      </div>

    </div>,

    document.body
  );
}