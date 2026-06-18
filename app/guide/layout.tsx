import Image from "next/image";
import Link from "next/link";
import { ORG_NAME, SITE_NAME } from "@/lib/seo";

const DISCORD_INVITE = process.env.NEXT_PUBLIC_DISCORD_INVITE || "";

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="page">
      <div className="noiseOverlay" aria-hidden="true" />

      <header className="topbar">
        <Link href="/" className="brand">
          <Image
            className="brandLogo"
            src="/logo.png"
            alt="Gumon Gaming Hub logo"
            width={34}
            height={34}
          />
          <div className="brandText">
            <div className="brandName">GUMON GAMING HUB</div>
            <div className="brandSub">Antlia Server — Guides</div>
          </div>
        </Link>

        <nav className="topActions">
          <Link className="btn btnGhost" href="/guide/">
            คู่มือทั้งหมด
          </Link>
          <a
            className="btn btnPrimary"
            href={DISCORD_INVITE}
            target="_blank"
            rel="noreferrer"
          >
            JOIN DISCORD
          </a>
        </nav>
      </header>

      <div className="guideMain">
        <div className="container">{children}</div>
      </div>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">
            <span>
              © {new Date().getFullYear()} {ORG_NAME} • {SITE_NAME}
            </span>
          </div>
          <div className="footerRight">
            <Link href="/">Home</Link>
            <span className="sep">•</span>
            <Link href="/guide/">Guides</Link>
            <span className="sep">•</span>
            <Link href="/terms/">Terms of Service</Link>
            <span className="sep">•</span>
            <Link href="/privacy/">Privacy Policy</Link>
            <span className="sep">•</span>
            <a href={DISCORD_INVITE} target="_blank" rel="noreferrer">
              Discord
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
