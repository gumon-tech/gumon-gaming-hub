"use client";

import { useEffect } from "react";

type Props = { selector?: string };

export default function ScrollReveal({ selector = ".reveal" }: Props) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("isIn");
          io.unobserve(el);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
      }
    );

    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, [selector]);

  return null;
}
