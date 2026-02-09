// lib/galleryImages.ts
export type WorldMoment = {
  id: number;
  thumb: string; // 800x450
  full: string;  // 1600x900
};

export const WORLD_MOMENTS: WorldMoment[] = Array.from({ length: 29 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: i + 1,
    thumb: `world-moment-${n}-800x450.jpg`,
    full: `world-moment-${n}-1600x900.jpg`,
  };
});
