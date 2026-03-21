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
    return () => document.removeEventListener("keydown", handleEscape);
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
    } catch {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
    >
      <div
        className="relative rounded-2xl p-8 md:p-10 w-full max-w-md bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-[var(--calsci-text-muted)] hover:text-[var(--calsci-text)] rounded-lg hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)]"
          aria-label="Close"
        >
          ✕
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-[var(--calsci-text)]">
              You&apos;re on the list
            </h2>
            <p className="font-['Barlow',sans-serif] font-medium text-[var(--calsci-text-muted)] mt-2">
              We&apos;ll notify you when CalSci launches.
            </p>
          </div>
        ) : (
          <>
            <h2
              id="waitlist-title"
              className="font-['Barlow',sans-serif] font-bold text-2xl md:text-3xl text-[var(--calsci-text)] text-center mb-2"
            >
              Get Early Access
            </h2>
            <p className="font-['Barlow',sans-serif] font-medium text-[var(--calsci-text-muted)] text-center text-sm mb-6">
              Join the CalSci waitlist
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-black/15 rounded-xl px-4 py-3 font-['Barlow',sans-serif] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)]"
                aria-label="Your name"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-black/15 rounded-xl px-4 py-3 font-['Barlow',sans-serif] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)]"
                aria-label="Your email"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[var(--calsci-orange)] hover:bg-[var(--calsci-orange-hover)] text-white font-['Barlow',sans-serif] font-bold py-3.5 rounded-xl transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[var(--calsci-orange)] focus:ring-offset-2"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                      aria-hidden
                    />
                    Joining...
                  </span>
                ) : (
                  "Join Waitlist"
                )}
              </button>
              {error && (
                <p
                  role="alert"
                  className="text-red-600 text-sm font-medium text-center"
                >
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
