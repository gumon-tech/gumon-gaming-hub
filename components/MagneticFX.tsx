"use client";

import { useEffect } from "react";

export default function MagneticFX() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnet]")
    );

    if (!els.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const onMove = (el: HTMLElement, e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      // intensity (ปรับได้)
      const strength = 0.12; // 0.10–0.16 กำลังดี
      const tx = Math.max(-14, Math.min(14, x * strength));
      const ty = Math.max(-10, Math.min(10, y * strength));

      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };

    const onLeave = (el: HTMLElement) => {
      el.style.transform = "translate3d(0,0,0)";
    };

    const handlers = els.map((el) => {
      const move = (e: PointerEvent) => onMove(el, e);
      const leave = () => onLeave(el);

      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);

      return { el, move, leave };
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
        el.style.transform = "translate3d(0,0,0)";
      });
    };
  }, []);

  return null;
}
