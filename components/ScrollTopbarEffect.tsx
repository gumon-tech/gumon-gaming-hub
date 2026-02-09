"use client";

import { useEffect } from "react";

export default function ScrollTopbarEffect() {
  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 20);
    };

    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
