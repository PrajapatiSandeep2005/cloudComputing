import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return (
      !("IntersectionObserver" in window) ||
      prefersReducedMotion
    );
  });

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
