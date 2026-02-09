"use client";

import { useEffect } from "react";

export default function SmoothNav() {
  useEffect(() => {
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[data-nav][href^="#"]')
    );

    if (!navLinks.length) return;

    const onClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const hash = a.getAttribute("href") || "";
      const id = hash.replace("#", "");
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      // ให้ browser อัปเดต URL hash แบบไม่กระตุก
      history.pushState(null, "", `#${id}`);

      // scroll แบบ smooth + กัน topbar บัง
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    navLinks.forEach((a) => a.addEventListener("click", onClick));
    return () => navLinks.forEach((a) => a.removeEventListener("click", onClick));
  }, []);

  return null;
}
