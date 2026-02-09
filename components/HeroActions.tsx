"use client";

import { useState } from "react";

type Props = {
  inviteUrl: string;
};

export default function HeroActions({ inviteUrl }: Props) {
  const [copied, setCopied] = useState(false);

  async function copyInvite() {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = inviteUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <div className="ctaRow reveal d3">
      <a
        className="btn btnPrimary btnBig btnShine"
        data-magnet
        href={inviteUrl}
        target="_blank"
        rel="noreferrer"
      >
        REGISTER VIA DISCORD <span className="arrow">→</span>
      </a>

      <button className="btn btnGhost btnBig" data-magnet type="button" onClick={copyInvite}>
        {copied ? "✓ COPIED!" : "COPY INVITE"}
      </button>
    </div>
  );
}
