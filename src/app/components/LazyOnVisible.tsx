import { type ReactNode, useEffect, useRef, useState } from "react";

type LazyOnVisibleProps = {
  children: ReactNode;
  rootMargin?: string;
  minHeightClassName?: string;
};

export function LazyOnVisible({
  children,
  rootMargin = "600px",
  minHeightClassName = "min-h-[200px]",
}: LazyOnVisibleProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={ref} className={!isVisible ? minHeightClassName : undefined}>
      {isVisible ? children : null}
    </div>
  );
}

