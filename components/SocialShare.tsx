"use client";

import { useMemo, useState, useEffect } from "react";

type Props = {
  title: string;
  text: string;
  url?: string;
};

export default function SocialShare({ title, text, url }: Props) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  // ✅ Fix hydration mismatch: initialize URLs after mount
  useEffect(() => {
    const finalUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    // avoid synchronous setState inside effect body
    const t = setTimeout(() => setShareUrl(finalUrl), 0);
    return () => clearTimeout(t);
  }, [url]);

  const encoded = useMemo(() => {
    if (!shareUrl) {
      return {
        facebook: "#",
        x: "#",
        line: "#",
        linkedin: "#",
        whatsapp: "#"
      };
    }
    const u = encodeURIComponent(shareUrl);
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} — ${text}`)}&url=${u}`,
      line: `https://social-plugins.line.me/lineit/share?url=${u}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n${text}\n${shareUrl}`)}`
    };
  }, [shareUrl, title, text]);

  async function onShareNative() {
    try {
      const nav = navigator as unknown as { share?: (data: { title?: string; text?: string; url?: string }) => Promise<void> };
      if (nav.share) {
        await nav.share({ title, text, url: shareUrl });
        return;
      }
      await onCopy();
    } catch {
      // ignore
    }
  }

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  }

  return (
    <div className="shareWrap">
      <div className="shareTop">
        <div className="shareTitle">Share</div>
        <button className="btn btnGhost" onClick={onShareNative} type="button">
          แชร์ (Native / Copy)
        </button>
      </div>

      <div className="shareGrid">
        <a className="shareBtn" href={encoded.facebook} target="_blank" rel="noreferrer">
          <span className="dot dotFb" /> Facebook
        </a>
        <a className="shareBtn" href={encoded.x} target="_blank" rel="noreferrer">
          <span className="dot dotX" /> X
        </a>
        <a className="shareBtn" href={encoded.line} target="_blank" rel="noreferrer">
          <span className="dot dotLine" /> LINE
        </a>
        <a className="shareBtn" href={encoded.whatsapp} target="_blank" rel="noreferrer">
          <span className="dot dotWa" /> WhatsApp
        </a>
        <a className="shareBtn" href={encoded.linkedin} target="_blank" rel="noreferrer">
          <span className="dot dotIn" /> LinkedIn
        </a>

        <button className="shareBtn" onClick={onCopy} type="button">
          <span className={`dot ${copied ? "dotOk" : "dotCopy"}`} /> {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>

      <div className="shareHint">
        * ภาพ/คำอธิบายตอนแชร์ไป Facebook/แพลตฟอร์มต่าง ๆ จะอิงจาก OG meta ใน <code>app/layout.tsx</code>
      </div>
    </div>
  );
}
