import type { Metadata } from "next";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";

const siteName = "Gumon Gaming Hub — Antlia Server";
const title = "Antlia Minecraft Server | Gumon Gaming Hub";
const description =
  "เซิร์ฟเวอร์ Minecraft เล่นฟรีจาก Gumon Gaming Hub — เน้น Community, การสร้างเมือง, และโลกแบบ Long-term ที่พัฒนาไปเรื่อย ๆ สมัครผ่าน Discord ได้เลย!";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  applicationName: siteName,

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  },

  openGraph: {
    type: "website",
    url: baseUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/images/hero-16x9-1920x1080.jpg",
        width: 1920,
        height: 1080,
        alt: "Antlia Minecraft Server — sunset view"
      }
    ],
    locale: "th_TH"
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-16x9-1920x1080.jpg"]
  },
};

// Move themeColor to viewport export to satisfy Next.js metadata requirements
export const viewport = {
  themeColor: "#0b1220",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <AuroraBackground />
        {children}
      </body>
    </html>
  );
}
