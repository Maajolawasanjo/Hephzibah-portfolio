"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive reveal enhancer. Without JavaScript, reduced-motion support,
 * or IntersectionObserver, every element remains fully visible.
 */
export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (elements.length === 0) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.revealState = "visible";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.dataset.revealState = "visible";
            observer.unobserve(element);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    const viewportHeight = window.innerHeight;
    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= viewportHeight * 0.9 || rect.bottom <= 0) {
        element.dataset.revealState = "visible";
      } else {
        element.dataset.revealState = "pending";
        observer.observe(element);
      }
    }

    const onPreferenceChange = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      observer.disconnect();
      elements.forEach((element) => {
        element.dataset.revealState = "visible";
      });
    };

    media.addEventListener("change", onPreferenceChange);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", onPreferenceChange);
      // Always restore content when navigating away or unmounting.
      elements.forEach((element) => {
        element.dataset.revealState = "visible";
      });
    };
  }, [pathname]);

  return null;
}
