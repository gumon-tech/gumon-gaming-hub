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

    const setActive = (id: string) => {
      navItems.forEach((el) => {
        const isActive = el.getAttribute("data-nav") === id;
        el.classList.toggle("isActive", isActive);
        if (isActive) el.setAttribute("aria-current", "page");
        else el.removeAttribute("aria-current");
      });
    };

    const getCurrent = () => {
      const y = window.scrollY + offset + 1;

      // เลือก section ที่ top <= y และใกล้ y ที่สุด (ตัวล่าสุดที่ผ่าน)
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= y) current = id;
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
    setActive(getCurrent());

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset]);

  return null;
}
