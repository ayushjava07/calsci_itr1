import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Preserve hash scrolling for the landing page anchors.
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      // If the hash target doesn't exist, do not force-scroll.
      // This preserves default browser behavior and avoids surprising jumps.
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

