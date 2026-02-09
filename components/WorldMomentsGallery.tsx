// components/WorldMomentsGallery.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import type { WorldMoment } from "@/lib/galleryImages";
import Captions from "yet-another-react-lightbox/plugins/captions";

type Props = {
  items: WorldMoment[];
  className?: string;
};

export default function WorldMomentsGallery({ items, className }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // ✅ Default = เปิดคำอธิบาย
  const [showInfo, setShowInfo] = useState(true);

  const slides = useMemo(
    () =>
      items.map((it) => ({
        src: `/images/gallery/${it.full}`,
        title: it.title,
        description: it.description,
      })),
    [items]
  );

  return (
    <div className={className}>
      <div className="wmHeader">
        <div className="wmBadge">WORLD MOMENTS</div>
        <h2 className="wmTitle">Screenshots from Antlia</h2>
        <p className="wmSubtitle">
          A cinematic peek into the world — tap any shot to go fullscreen.
        </p>
      </div>

      <div className="wmMasonry" aria-label="World Moments gallery">
        {items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            className="wmCard"
            onClick={() => {
              setIndex(i);
              setOpen(true);
              setShowInfo(true); // เปิดทุกครั้งที่เปิดภาพ (ถ้าอยากให้จำค่าผู้ใช้ เอาบรรทัดนี้ออก)
            }}
            aria-label={`Open image ${it.id}`}
            title={`${it.title} — ${it.description}`}
          >
            <div className="wmMedia">
              <Image
                src={`/images/gallery/${it.thumb}`}
                alt={it.alt}
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw"
                className="wmImg"
                priority={i < 6}
              />
              <div className="wmOverlay" />

              {/* ✅ เปลี่ยนเลขเป็นชื่อภาพ (ตามที่คุณขอในภาพที่ 2) */}
              <div className="wmMeta">
                <div className="wmMetaLine" />
                <div className="wmMetaText">
                  <span>{it.title}</span>
                  <span className="wmDot" />
                  <span>{String(it.id).padStart(2, "0")}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Zoom]}
        carousel={{ finite: false, preload: 2 }}
        controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
        animation={{ fade: 180, swipe: 220 }}
        render={{
          // ✅ ตรงนี้แหละ: ปุ่ม Toggle เอาไว้ "ทับ" อยู่บนสไลด์
          slide: ({ slide }) => (
            <div className="wmLightboxSlide">
              <img
                src={slide.src}
                alt={slide.title ?? "World Moment"}
                className="wmLightboxImage"
              />

              {/* ✅ ปุ่ม Toggle คำอธิบาย (มุมขวาบน) */}
              <button
                type="button"
                className="wmToggleInfo"
                onClick={() => setShowInfo((v) => !v)}
                aria-label={showInfo ? "Hide description" : "Show description"}
              >
                {showInfo ? "Hide info" : "Show info"}
              </button>

              {/* ✅ ปุ่มปิด (มุมขวาบน) - optional แต่แนะนำให้สวยและชัด */}
              <button
                type="button"
                className="wmClose"
                onClick={() => setOpen(false)}
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>

              {/* ✅ Panel คำอธิบาย */}
              {showInfo && (
                <div className="wmInfoPanel" role="note" aria-label="Image description">
                  <h3 className="wmInfoTitle">{slide.title}</h3>
                  <p className="wmInfoDesc">{slide.description}</p>
                </div>
              )}
            </div>
          ),
        }}
      />
    </div>
  );
}
