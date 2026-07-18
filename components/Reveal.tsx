"use client";

import { useEffect } from "react";

/**
 * Progressive scroll-reveal. Content is fully visible by default; we only
 * start hiding not-yet-seen sections AFTER the user's first real scroll,
 * and only for elements still below the viewport at that moment. Headless
 * renderers, printing, no-JS, reduced-motion, and full-page screenshots
 * therefore always see the finished page.
 */
export default function Reveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal-item]")
    );
    if (items.length === 0) return;

    let io: IntersectionObserver | null = null;

    const arm = () => {
      window.removeEventListener("scroll", arm);
      // Anything already at or near the viewport stays visible; only
      // elements well below the fold get the entrance treatment.
      const pending: HTMLElement[] = [];
      for (const el of items) {
        if (el.getBoundingClientRect().top > window.innerHeight * 1.1)
          pending.push(el);
        else el.classList.add("is-in");
      }
      if (pending.length === 0) return;

      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add("is-in");
              io?.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
      );

      document.documentElement.setAttribute("data-reveal", "");
      for (const el of pending) io.observe(el);
    };

    window.addEventListener("scroll", arm, { passive: true, once: true });

    return () => {
      window.removeEventListener("scroll", arm);
      io?.disconnect();
      document.documentElement.removeAttribute("data-reveal");
    };
  }, []);

  return null;
}
