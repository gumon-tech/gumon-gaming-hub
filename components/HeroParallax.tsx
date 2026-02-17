"use client";

import { useEffect } from "react";

export default function HeroParallax() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const small = window.matchMedia("(max-width: 980px)");
    if (reduce.matches || small.matches) return;

    const img = document.querySelector<HTMLElement>(".heroImg");
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!img || !hero) return;

    let raf = 0;
    let lastTs = 0;
    const minFrameMs = 32; // ~30fps

    const update = () => {
      if (small.matches) {
        img.style.transform = "translate3d(0,0,0) scale(1.02)";
        return;
      }

      const rect = hero.getBoundingClientRect();
      const vh = window.innerHeight || 0;

      // progress: 0 (top) -> 1 (hero almost out)
      const t = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));

      // parallax amount (เบามาก)
      const y = (t - 0.5) * 14;   // -7..+7px
      const s = 1.02 + t * 0.02;  // 1.02..1.04

      img.style.transform = `translate3d(0, ${y}px, 0) scale(${s})`;
    };

    const onScroll = () => {
      const now = performance.now();
      if (now - lastTs < minFrameMs) return;
      lastTs = now;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      img.style.transform = "translate3d(0,0,0) scale(1.02)";
    };
  }, []);

  return null;
}
