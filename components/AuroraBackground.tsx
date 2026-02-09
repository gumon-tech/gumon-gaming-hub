"use client";

import { useMemo } from "react";

export default function AuroraBackground() {
  // ✅ Disabled mouse parallax for performance
  // const mx = useMotionValue(0);
  // const my = useMotionValue(0);
  // const x1 = useTransform(mx, [-1, 1], ["-18px", "18px"]);
  // const y1 = useTransform(my, [-1, 1], ["-12px", "12px"]);
  // const x2 = useTransform(mx, [-1, 1], ["12px", "-12px"]);
  // const y2 = useTransform(my, [-1, 1], ["10px", "-10px"]);

  const particles = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: (i * 31) % 100,
      top: (i * 17) % 80,
      size: 6 + ((i * 11) % 12),
      delay: (i % 7) * 0.22,
      dur: 3.8 + ((i * 5) % 8) * 0.35,
      opacity: 0.08 + ((i * 7) % 10) / 100,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* keep your grid */}
      <div className="absolute inset-0 opacity-20 pixel-grid" />

      {/* aurora layer 1 - STATIC (no animation for performance) */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-72 left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-emerald-400/18 blur-2xl"
          style={{ opacity: 0.25 }}
        />
        <div
          className="absolute top-24 -left-60 h-[560px] w-[560px] rounded-full bg-fuchsia-500/14 blur-2xl"
          style={{ opacity: 0.16 }}
        />
      </div>

      {/* aurora layer 2 - STATIC (no animation for performance) */}
      <div className="absolute inset-0">
        <div
          className="absolute bottom-0 right-0 h-[720px] w-[720px] rounded-full bg-cyan-300/12 blur-2xl"
          style={{ opacity: 0.19 }}
        />
      </div>

      {/* floating pixel particles - REDUCED and STATIC */}
      {particles.slice(0, 4).map((p) => (
        <div
          key={p.id}
          className="absolute rounded-sm bg-white/8"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity * 0.6,
          }}
        />
      ))}

      {/* bottom “ground” band */}
      <div className="absolute inset-x-0 bottom-0 h-[34vh] bg-[linear-gradient(to_bottom,rgba(34,197,94,0.14),rgba(34,197,94,0.0)),linear-gradient(to_bottom,rgba(120,53,15,0.18),rgba(120,53,15,0.0))]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_35%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.78)_100%)]" />
    </div>
  );
}
