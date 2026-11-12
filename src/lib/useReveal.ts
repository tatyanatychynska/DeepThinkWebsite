import { useEffect, useRef } from "react";

/**
 * Reveals elements on scroll. Add `className="reveal"` to any element,
 * mount this once near the root, and matching nodes fade/slide in when
 * they enter the viewport.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}

/** Stagger helper — inline style delay for reveal children. */
export function delay(ms: number): React.CSSProperties {
  return { transitionDelay: `${ms}ms` };
}
