"use client";

import { useEffect } from "react";

export default function TopbarFX() {
  useEffect(() => {
    const topbar = document.querySelector<HTMLElement>(".topbar");
    const bar = document.querySelector<HTMLElement>(".topbarProgress > span");
    if (!topbar || !bar) return;

    let raf = 0;

    const update = () => {
      const y = window.scrollY || 0;
      topbar.classList.toggle("isScrolled", y > 10);

      const doc = document.documentElement;
      const scrollH = doc.scrollHeight - doc.clientHeight;
      const p = scrollH > 0 ? Math.min(1, Math.max(0, y / scrollH)) : 0;

      bar.style.width = `${p * 100}%`;
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
