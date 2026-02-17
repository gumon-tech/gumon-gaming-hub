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
  const heroBottomRef = useRef(0);
  const footerTopRef = useRef(Number.POSITIVE_INFINITY);
  const onRef = useRef(false);

  // show/hide logic (เหมือนเดิม)
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>("footer.footer");
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero) return;

    let raf = 0;

    const measure = () => {
      heroBottomRef.current = hero.getBoundingClientRect().top + window.scrollY + hero.offsetHeight;
      footerTopRef.current = footer
        ? footer.getBoundingClientRect().top + window.scrollY
        : Number.POSITIVE_INFINITY;
    };

    const update = () => {
      const y = window.scrollY || 0;

      const shouldShow = y > heroBottomRef.current - 60;

      const vh = window.innerHeight || 0;
      nearFooterRef.current = y + vh > footerTopRef.current - 80;

      const nextOn = shouldShow && !nearFooterRef.current;
      if (nextOn !== onRef.current) {
        onRef.current = nextOn;
        setOn(nextOn);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    const onRecalc = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onRecalc);
    window.addEventListener("load", onRecalc);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onRecalc);
      window.removeEventListener("load", onRecalc);
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
