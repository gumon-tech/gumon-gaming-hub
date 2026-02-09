"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = { href: string };

type LiveDetail = { online: boolean; players?: number };

function compactLabel(s: LiveDetail | null) {
  if (!s) return { title: "ANTLIA • QUICK JOIN", sub: "Join Discord to get IP + updates" };

  if (!s.online) return { title: "ANTLIA • OFFLINE", sub: "Maintenance — check Discord for updates" };

  const p = s.players;
  if (p === undefined) return { title: "ANTLIA • ONLINE", sub: "Server is live — join Discord for IP" };
  if (p >= 2) return { title: `ANTLIA • ONLINE`, sub: `${p} players in-world now` };
  if (p === 1) return { title: `ANTLIA • ONLINE`, sub: `1 player in-world now` };
  return { title: `ANTLIA • ONLINE`, sub: "Quiet moment — be the first to join" };
}

export default function FloatingCta({ href }: Props) {
  const [on, setOn] = useState(false);
  const [live, setLive] = useState<LiveDetail | null>(null);
  const nearFooterRef = useRef(false);

  // show/hide logic (เหมือนเดิม)
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>("footer.footer");
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero) return;

    let raf = 0;

    const update = () => {
      const y = window.scrollY || 0;

      const heroBottom = hero.getBoundingClientRect().bottom + y;
      const shouldShow = y > heroBottom - 60;

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + y;
        const vh = window.innerHeight || 0;
        nearFooterRef.current = y + vh > footerTop - 80;
      } else {
        nearFooterRef.current = false;
      }

      setOn(shouldShow && !nearFooterRef.current);
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

  // รับสถานะจาก LiveStatus ผ่าน event
  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent;
      const d = ce.detail as LiveDetail | undefined;
      if (!d || typeof d.online !== "boolean") return;
      setLive({ online: d.online, players: d.players });
    };

    window.addEventListener("antlia:status", handler as EventListener);
    return () => window.removeEventListener("antlia:status", handler as EventListener);
  }, []);

  const text = useMemo(() => compactLabel(live), [live]);
  const btnText = live && !live.online ? "STATUS →" : "JOIN →";

  return (
    <div className={`floatCta ${on ? "isOn" : ""}`} role="region" aria-label="Quick join">
      <div className="floatCtaLeft">
        <div className="floatCtaTitle">{text.title}</div>
        <div className="floatCtaSub">{text.sub}</div>
      </div>

      <a className="floatCtaBtn" href={href} target="_blank" rel="noreferrer">
        {btnText}
      </a>
    </div>
  );
}
