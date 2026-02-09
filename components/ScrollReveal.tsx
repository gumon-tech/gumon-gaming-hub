"use client";

import { useEffect } from "react";

type Props = { selector?: string };

export default function ScrollReveal({ selector = ".reveal" }: Props) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!els.length) return;

    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      // เข้าโซนแล้วค่อย reveal (กันพลาดตอนโหลด/shift)
      return r.top < vh * 0.88 && r.bottom > vh * 0.10;
    };

    const tick = () => {
      els.forEach((el) => {
        if (!el.classList.contains("isIn") && inView(el)) {
          el.classList.add("isIn");
        }
      });
    };

    // init + listen
    tick();
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // เผื่อรูปโหลดแล้วดัน layout
    window.addEventListener("load", tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", tick);
    };
  }, [selector]);

  return null;
}
