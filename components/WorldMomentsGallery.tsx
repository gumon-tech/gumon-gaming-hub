// components/WorldMomentsGallery.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import type { WorldMoment } from "@/lib/galleryImages";

type Props = { items: WorldMoment[]; className?: string };

export default function WorldMomentsGallery({ items, className }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(true);

  const slides = useMemo(
    () =>
      items.map((it) => ({
        src: `/images/gallery/${it.full}`,
        title: it.title,
        description: it.description,
        alt: it.alt,
      })),
    [items]
  );

  return (
    <div className={className}>
      <div className="wmHeader reveal">
        <div className="wmBadge">WORLD MOMENTS</div>
        <h2 className="wmTitle">Screenshots from Antlia</h2>
        <p className="wmSubtitle">
          A cinematic peek into the world — tap any shot to go fullscreen.
        </p>
      </div>

      <div className="wmMasonry reveal d2" aria-label="World Moments gallery">
        {items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            className="wmCard"
            onClick={() => {
              setIndex(i);
              setOpen(true);
              setShowInfo(true);
            }}
            aria-label={`Open image ${it.title}`}
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
                loading={i < 6 ? "eager" : "lazy"}
                decoding="async"
              />

              <div className="wmOverlay" />
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
        on={{
          view: ({ index: i }) => setIndex(i),
        }}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        toolbar={{
          buttons: [
            "zoom",
            <button
              key="toggle-info"
              type="button"
              className="wmToolbarBtn"
              onClick={() => setShowInfo((v) => !v)}
              aria-label={showInfo ? "Hide description" : "Show description"}
              title={showInfo ? "Hide info" : "Show info"}
            >
              {showInfo ? "Hide info" : "Show info"}
            </button>,
            "close",
          ],
        }}
        render={{
          controls: () => {
            if (!open || !showInfo) return null;

            const s = slides[index];
            if (!s) return null;

            const title = s.title ?? "";
            const description = s.description ?? "";
            if (!title && !description) return null;

            return (
              <div className="wmCaptionRoot">
                <div
                  className="wmInfoPanel"
                  role="note"
                  aria-label="Image description"
                >
                  <div className="wmInfoKicker">WORLD MOMENT</div>
                  {title ? <h3 className="wmInfoTitle">{title}</h3> : null}
                  {description ? (
                    <p className="wmInfoDesc">{description}</p>
                  ) : null}
                </div>
              </div>
            );
          },
        }}

      />
    </div>
  );
}
