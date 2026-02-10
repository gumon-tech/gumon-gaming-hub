import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SHARE_TITLE, SHARE_DESCRIPTION, ORG_NAME } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SHARE_TITLE,
  description: SHARE_DESCRIPTION,
  applicationName: SITE_NAME,

  alternates: { canonical: SITE_URL },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
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
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
              description: SHARE_DESCRIPTION,
              publisher: {
                "@type": "Organization",
                name: ORG_NAME,
                url: SITE_URL,
              },
              inLanguage: "th-TH",
            }),
          }}
        />


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
