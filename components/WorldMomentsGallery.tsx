// components/WorldMomentsGallery.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

import type { WorldMoment } from "@/lib/galleryImages";

type Props = {
  items: WorldMoment[];
  className?: string;
};

export default function WorldMomentsGallery({ items, className }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(
    () =>
      items.map((it) => ({
        src: `/images/gallery/${it.full}`,
        title: "World Moments",
        description: `Antlia • ${String(it.id).padStart(2, "0")}`,
      })),
    [items]
  );

  return (
    <div className={className}>
      <div className="wmHeader">
        <div className="wmBadge">WORLD MOMENTS</div>
        <h2 className="wmTitle">Screenshots from Antlia</h2>
        <p className="wmSubtitle">
          A cinematic peek into the world — every block tells a story.
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
            }}
            aria-label={`Open image ${it.id}`}
          >
            <div className="wmMedia">
              <Image
                src={`/images/gallery/${it.thumb}`}
                alt={`World Moments ${it.id}`}
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw"
                className="wmImg"
                priority={i < 6}
              />
              <div className="wmOverlay" />
              <div className="wmMeta">
                <div className="wmMetaLine" />
                <div className="wmMetaText">
                  <span>ANTLIA</span>
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
        plugins={[Zoom, Captions]}
        carousel={{ finite: false, preload: 2 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        animation={{ fade: 180, swipe: 220 }}
      />
    </div>
  );
}
