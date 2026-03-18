type LoadingFallbackProps = {
  label?: string;
  variant?: "page" | "inline" | "modal";
};

export function LoadingFallback({
  label = "Loading",
  variant = "inline",
}: LoadingFallbackProps) {
  if (variant === "page") {
    return (
      <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center">
        <div className="flex items-center gap-3 text-[#111212]">
          <div className="w-5 h-5 border-2 border-black/60 border-t-transparent rounded-full animate-spin" />
          <span className="font-['Barlow',sans-serif] font-bold">{label}</span>
        </div>
      </div>
    );
  }

  if (variant === "modal") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="flex items-center gap-3 text-white">
          <div className="w-5 h-5 border-2 border-white/80 border-t-transparent rounded-full animate-spin" />
          <span className="font-['Barlow',sans-serif] font-bold">{label}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-[#111212]/80 py-6 justify-center">
      <div className="w-4 h-4 border-2 border-black/50 border-t-transparent rounded-full animate-spin" />
      <span className="font-['Barlow',sans-serif] font-bold text-sm">{label}</span>
    </div>
  );
}

