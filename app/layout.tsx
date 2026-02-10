import type { Metadata } from "next";
import "./globals.css";

const siteName = "Gumon Gaming Hub — Antlia Server";
const title = "Antlia Minecraft Server | Gumon Gaming Hub";
const description =
  "เซิร์ฟเวอร์ Minecraft เล่นฟรีจาก Gumon Gaming Hub — เน้น Community, การสร้างเมือง, และโลกแบบ Long-term ที่พัฒนาไปเรื่อย ๆ สมัครผ่าน Discord ได้เลย!";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://game.gumon.io";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  applicationName: siteName,

  alternates: {
    canonical: baseUrl,
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    type: "website",
    url: baseUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/images/og/og-universal-antlia.png",
        width: 1200,
        height: 630,
        alt: "Antlia Minecraft Server",
      },
    ],
    locale: "th_TH",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/images/og/og-x-antlia-minecraft.png",
        width: 1200,
        height: 675,
        alt: "Antlia Minecraft Server",
      },
    ],
  },
};


// Move themeColor to viewport export to satisfy Next.js metadata requirements
export const viewport = {
  themeColor: "#0b1220",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-21x9-1920x823.png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/gallery/world-moment-01-800x450.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="/images/gallery/world-moment-02-800x450.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="/images/gallery/world-moment-03-800x450.jpg"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
