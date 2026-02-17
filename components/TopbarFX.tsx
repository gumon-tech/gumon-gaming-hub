"use client";

import { useEffect } from "react";

export default function TopbarFX() {
  useEffect(() => {
    const topbar = document.querySelector<HTMLElement>(".topbar");
    const bar = document.querySelector<HTMLElement>(".topbarProgress > span");
    if (!topbar || !bar) return;

    let raf = 0;
    let lastScrolled = false;
    let lastProgress = -1;

    const update = () => {
      const y = window.scrollY || 0;
      const isScrolled = y > 10;
      if (isScrolled !== lastScrolled) {
        topbar.classList.toggle("isScrolled", isScrolled);
        lastScrolled = isScrolled;
      }

      const doc = document.documentElement;
      const scrollH = doc.scrollHeight - doc.clientHeight;
      const p = scrollH > 0 ? Math.min(1, Math.max(0, y / scrollH)) : 0;
      if (Math.abs(p - lastProgress) < 0.001) return;
      lastProgress = p;

      bar.style.transform = `scaleX(${p})`;
    };

    const onScroll = () => {
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
    };
  }, []);

  return null;
}
