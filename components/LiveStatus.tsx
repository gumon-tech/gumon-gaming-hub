// components/LiveStatus.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  discordUrl: string;
  serverLabel?: string; // e.g. "Antlia"
  hint?: string;        // base hint when online (optional)
  refreshMs?: number;   // default 60000
};

type StatusState = {
  online: boolean;
  players?: number;
  max?: number;
  version?: string;
  checkedAt?: Date;
};

function buildEndpoint() {
  const host = process.env.NEXT_PUBLIC_MC_HOST;
  const type = (process.env.NEXT_PUBLIC_MC_TYPE || "java").toLowerCase();
  const javaPort = process.env.NEXT_PUBLIC_MC_JAVA_PORT;
  const bedrockPort = process.env.NEXT_PUBLIC_MC_BEDROCK_PORT;

  if (!host) return null;

  if (type === "bedrock") {
    // bedrock requires port in most setups
    const port = bedrockPort || "19132";
    return `https://api.mcstatus.io/v2/status/bedrock/${host}:${port}`;
  }

  // default java
  const port = javaPort || "25565";
  return `https://api.mcstatus.io/v2/status/java/${host}:${port}`;
}

function broadcastStatus(detail: { online: boolean; players?: number }) {
  try {
    window.dispatchEvent(new CustomEvent("antlia:status", { detail }));
  } catch {
    // ignore (very rare)
  }
}


function getUiText(input: { online: boolean; players?: number }) {
  // OFFLINE
  if (!input.online) {
    return {
      pillClass: "offline",
      dotClass: "offline",
      label: "Offline • Maintenance",
      hint: "Join Discord for updates",
    };
  }

  // ONLINE
  const p = input.players;

  if (p === undefined || Number.isNaN(p)) {
    return {
      pillClass: "online",
      dotClass: "online",
      label: "Online",
      hint: "Server is live",
    };
  }

  if (p >= 2) {
    return {
      pillClass: "online",
      dotClass: "online",
      label: `Online • ${p} players`,
      hint: "Join the world now",
    };
  }

  if (p === 1) {
    return {
      pillClass: "online",
      dotClass: "online",
      label: "Online • 1 player",
      hint: "Someone is already in",
    };
  }

  // p === 0
  return {
    pillClass: "online",
    dotClass: "online",
    label: "Online • Quiet moment",
    hint: "Be the first to join",
  };
}

export default function LiveStatus({
  discordUrl,
  serverLabel = "Antlia",
  hint,
  refreshMs = 60_000,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<StatusState>({ online: true });

  const endpoint = useMemo(() => buildEndpoint(), []);

  // Fetch status (and refresh)
  useEffect(() => {
    if (!endpoint) {
      setStatus({ online: false, checkedAt: new Date() });
      broadcastStatus({ online: false });
      return;
    }


    let cancelled = false;

    const fetchOnce = async () => {
      try {
        const res = await fetch(endpoint, { cache: "no-store" });
        const data = await res.json();

        if (cancelled) return;

        const online = Boolean(data?.online);
        const players =
          typeof data?.players?.online === "number" ? data.players.online : undefined;

        setStatus({
          online,
          players,
          max: typeof data?.players?.max === "number" ? data.players.max : undefined,
          version: data?.version?.name_clean || data?.version?.name || undefined,
          checkedAt: new Date(),
        });

        broadcastStatus({ online, players });

      } catch {
        if (!cancelled) {
          setStatus({ online: false, checkedAt: new Date() });
          broadcastStatus({ online: false });
        }
      }
    };

    fetchOnce();
    const t = window.setInterval(fetchOnce, refreshMs);

    return () => {
      cancelled = true;
      window.clearInterval(t);
    };
  }, [endpoint, refreshMs]);

  const ui = useMemo(() => {
    const base = getUiText({ online: status.online, players: status.players });
    // ถ้าผู้ใช้ส่ง hint มา และ online อยู่ ให้ใช้ hint นั้นแทน base.hint
    const finalHint = status.online ? (hint || base.hint) : base.hint;
    return { ...base, finalHint };
  }, [status.online, status.players, hint]);

  const last = useMemo(() => {
    const d = status.checkedAt || new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }, [status.checkedAt]);

  async function copyDiscord() {
    try {
      await navigator.clipboard.writeText(discordUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="liveBar" role="status" aria-label="Server status">
      <div className="liveLeft">
        <div className={`livePill ${ui.pillClass}`}>
          <span className={`liveDot ${ui.dotClass}`} />
          <span>
            {serverLabel} • {ui.label}
          </span>
        </div>

        <div className="liveMeta">
          <div>Last update: {last}</div>
          <div>{ui.finalHint}</div>
          {status.version ? <div>Version: {status.version}</div> : null}
        </div>
      </div>

      <div className="liveActions">
        <button className="btn btnGhost" data-magnet type="button" onClick={copyDiscord}>
          {copied ? "✓ COPIED" : "COPY DISCORD"}
        </button>

        <a className="btn btnPrimary btnShine" data-magnet href={discordUrl} target="_blank" rel="noreferrer">
          OPEN DISCORD <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
}
