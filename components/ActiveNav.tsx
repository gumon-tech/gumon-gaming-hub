"use client";

import { useEffect } from "react";

type Props = {
  ids: string[]; // เช่น ["highlights","gallery"]
  offset?: number; // กัน topbar บัง
};

export default function ActiveNav({ ids, offset = 90 }: Props) {
  useEffect(() => {
    const navItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav]")
    );
    if (!navItems.length || !ids.length) return;

    let sectionTops: Array<{ id: string; top: number }> = [];
    let currentActive = "";

    const setActive = (id: string) => {
      if (id === currentActive) return;
      navItems.forEach((el) => {
        const isActive = el.getAttribute("data-nav") === id;
        el.classList.toggle("isActive", isActive);
        if (isActive) el.setAttribute("aria-current", "page");
        else el.removeAttribute("aria-current");
      });
      currentActive = id;
    };

    const measure = () => {
      sectionTops = ids
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const top = el.getBoundingClientRect().top + window.scrollY;
          return { id, top };
        })
        .filter((v): v is { id: string; top: number } => Boolean(v))
        .sort((a, b) => a.top - b.top);
    };

    const getCurrent = () => {
      const y = window.scrollY + offset + 1;
      let current = sectionTops[0]?.id ?? ids[0];
      for (const s of sectionTops) {
        if (s.top <= y) current = s.id;
        else break;
      }
      return current;
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setActive(getCurrent());
        ticking = false;
      });
    };

    // init (รองรับโหลดด้วย #gallery)
    measure();
    setActive(getCurrent());

    const onRecalc = () => {
      measure();
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onRecalc);
    window.addEventListener("load", onRecalc);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onRecalc);
      window.removeEventListener("load", onRecalc);
    };
  }, [ids, offset]);

  return null;
}
