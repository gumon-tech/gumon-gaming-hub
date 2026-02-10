import type { Metadata } from "next";
import { SHARE_TITLE, SHARE_DESCRIPTION, ORG_NAME,SITE_NAME } from "@/lib/seo";
import SocialShare from "@/components/SocialShare";
import HeroActions from "@/components/HeroActions";
import Image from "next/image";
import WorldMomentsGallery from "@/components/WorldMomentsGallery";
import { WORLD_MOMENTS } from "@/lib/galleryImages";
import ScrollTopbarEffect from "@/components/ScrollTopbarEffect";
import ActiveNav from "@/components/ActiveNav";
import ScrollReveal from "@/components/ScrollReveal";
import LiveStatus from "@/components/LiveStatus";
import TopbarFX from "@/components/TopbarFX";
import SmoothNav from "@/components/SmoothNav";
import MagneticFX from "@/components/MagneticFX";
import HeroParallax from "@/components/HeroParallax";
import FloatingCta from "@/components/FloatingCta";
import { SITE_URL } from "@/lib/site";

const DISCORD_INVITE = process.env.NEXT_PUBLIC_DISCORD_INVITE || "";

const shareTitle = "Antlia Minecraft Server | Gumon Gaming Hub";
const shareDescription =
  "เล่นฟรี • Community • Long-term World — สมัครผ่าน Discord แล้วเข้ามาสร้างเมือง/ผจญภัยด้วยกัน!";

/* =========================
   Metadata (Homepage OG)
========================= */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SHARE_TITLE,
  description: SHARE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [
      {
        url: "/images/og/og-facebook-gumon-game-text-sub.png",
        width: 1200,
        height: 630,
        alt: "Antlia Minecraft Server — Community • Java & Bedrock",
      },
    ],
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
/* =========================
   Page Component
========================= */
export default function Page() {
  return (
    <main className="page">
      <div className="noiseOverlay" aria-hidden="true" />

      <TopbarFX />
      <SmoothNav />
      <MagneticFX />
      <HeroParallax />
      <ActiveNav ids={["highlights", "gallery"]} offset={96} />
      <ScrollTopbarEffect />
      <ScrollReveal />

      {/* ================= Topbar ================= */}
      <header className="topbar">
        <div className="brand">
          <Image
            className="brandLogo"
            src="/logo.png"
            alt="Gumon Gaming Hub logo"
            width={34}
            height={34}
          />
          <div className="brandText">
            <div className="brandName">GUMON GAMING HUB</div>
            <div className="brandSub">Antlia Server</div>
          </div>
        </div>

        <nav className="topActions">
          <a className="btn btnGhost" data-magnet data-nav="highlights" href="#highlights">
            Highlights
          </a>
          <a className="btn btnGhost" data-magnet data-nav="gallery" href="#gallery">
            Gallery
          </a>
          <a
            className="btn btnPrimary btnPulse"
            data-magnet
            href={DISCORD_INVITE}
            target="_blank"
            rel="noreferrer"
          >
            JOIN DISCORD
          </a>
        </nav>

        <div className="topbarProgress" aria-hidden="true">
          <span />
        </div>
      </header>

      {/* ================= Hero ================= */}
      <section className="hero">
        <div className="heroMedia" aria-hidden="true">
          <div
            className="heroImg"
            style={{ backgroundImage: `url(/images/hero-21x9-1920x823.png)` }}
          />
          <div className="heroVignette" />
          <div className="heroScanlines" />
          <div className="heroDust" />
          <div className="heroSweep" />
        </div>

        <div className="container heroInner reveal">
          <div className="pillRow">
            <span className="pill">
              <span className="pillLed" /> FREE TO PLAY
            </span>
            <span className="pill">COMMUNITY</span>
            <span className="pill">LONG-TERM WORLD</span>
          </div>

          <h1 className="heroTitle reveal d1">
            Antlia <span className="heroTitleAccent">Minecraft Server</span>
          </h1>

          <p className="heroLead reveal d2">{SHARE_DESCRIPTION}</p>

          <HeroActions inviteUrl={DISCORD_INVITE} />

          <LiveStatus
            discordUrl={DISCORD_INVITE}
            serverLabel="Antlia"
            hint="Join Discord to get IP + rules + updates"
          />

          <div className="inviteRow reveal d4">
            <span className="inviteLabel">INVITE:</span>
            <a
              className="inviteLink"
              data-magnet
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer"
            >
              {DISCORD_INVITE}
            </a>
          </div>

          <div className="chipRow reveal d5">
            <span className="chip">✦ Cozy + Epic Builds</span>
            <span className="chip">⛨ Fair Gameplay</span>
            <span className="chip">👥 Active Community</span>
          </div>

          <div id="highlights" className="anchor" />

          {/* ================= Highlights ================= */}
          <div className="heroCards reveal">
            <div className="card cardTall">
              <div className="cardHead">
                <div className="cardTitle">SERVER HIGHLIGHTS</div>
                <div className="cardBadge">
                  <Image src="/logo.png" alt="" width={26} height={26} />
                </div>
              </div>

              <div className="feature">
                <div className="featureIcon">👥</div>
                <div className="featureText">
                  <div className="featureName">Community First</div>
                  <div className="featureDesc">
                    ชุมชนอบอุ่น เล่นด้วยกัน สร้างเมืองร่วมกัน
                  </div>
                </div>
              </div>

              <div className="feature">
                <div className="featureIcon">⛨</div>
                <div className="featureText">
                  <div className="featureName">Safe &amp; Fair</div>
                  <div className="featureDesc">กติกาชัดเจน ไม่ Pay-to-Win</div>
                </div>
              </div>

              <div className="feature">
                <div className="featureIcon">⚡</div>
                <div className="featureText">
                  <div className="featureName">Long-term World</div>
                  <div className="featureDesc">
                    โลกพัฒนาไปเรื่อย ๆ เหมาะกับสายเล่นยาว
                  </div>
                </div>
              </div>

              <div className="howto" id="howto">
                <div className="howtoTitle">HOW TO JOIN</div>
                <ol className="howtoList">
                  <li>เข้า Discord</li>
                  <li>ลงทะเบียน / อ่านกติกา</li>
                  <li>รับ IP/วิธีเข้าเล่น แล้วลุย!</li>
                </ol>
              </div>
            </div>

            <div className="card cardWide">
              <div className="stats">
                <div className="stat">
                  <div className="statLabel">FREE TO PLAY</div>
                  <div className="statValue glowText">100%</div>
                  <div className="statDesc">เล่นฟรี เข้าร่วมได้เลย</div>
                </div>

                <div className="stat">
                  <div className="statLabel">REGISTER</div>
                  <div className="statValue">DISCORD</div>
                  <div className="statDesc">
                    ลงทะเบียนและประกาศข่าวในที่เดียว
                  </div>
                </div>

                <div className="stat">
                  <div className="statLabel">WORLD</div>
                  <div className="statValue">LONG-TERM</div>
                  <div className="statDesc">
                    เมืองโตขึ้นเรื่อย ๆ แบบมีเรื่องราว
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="belowHero">
            <SocialShare title={SHARE_TITLE} text={SHARE_DESCRIPTION} />
          </div>
        </div>
      </section>

      {/* ================= Platform Support ================= */}
      <section className="section">
        <div className="container">
          <div className="sectionHead reveal">
            <h2 className="sectionTitle">Platform Support</h2>
            <p className="sectionDesc">
              เล่นได้ทุกแพลตฟอร์ม บน PC, Tablet, หรือมือถือก็ได้ เลือกได้ Java
              Edition หรือ Bedrock Edition
            </p>
          </div>

          <div className="compatGrid">
            <div className="compatCard reveal d1" data-magnet>
              <div className="compatIcon">💻</div>
              <div className="compatTitle">PC</div>
              <div className="compatDesc">Windows / Mac / Linux</div>
              <div className="compatTags">
                <span className="compatTag">Java</span>
                <span className="compatTag">Bedrock</span>
              </div>
            </div>

            <div className="compatCard reveal d2" data-magnet>
              <div className="compatIcon">📱</div>
              <div className="compatTitle">Mobile</div>
              <div className="compatDesc">iPhone / Android</div>
              <div className="compatTags">
                <span className="compatTag">Bedrock</span>
              </div>
            </div>

            <div className="compatCard reveal d3" data-magnet>
              <div className="compatIcon">⌨️</div>
              <div className="compatTitle">Tablet</div>
              <div className="compatDesc">iPad / Android Tablet</div>
              <div className="compatTags">
                <span className="compatTag">Bedrock</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="sectionDivider" aria-hidden="true" />
      </div>

      {/* ================= Gallery ================= */}
      <section className="section" id="gallery">
        <WorldMomentsGallery items={WORLD_MOMENTS} />
      </section>

      {/* ================= Final CTA ================= */}
      <section className="section reveal">
        <div className="container">
          <div className="finalCta">
            <div className="finalCtaCard">
              <div className="finalCtaGlow" aria-hidden="true" />
              <div className="finalCtaText">
                <div className="finalCtaTitle">Ready to join Antlia?</div>
                <div className="finalCtaDesc">
                  กดเข้าดิสคอร์ดเพื่อสมัคร แล้วมาสร้างเมือง / สำรวจ / ผจญภัยด้วยกัน
                </div>
              </div>
              <a
                className="btn btnPrimary btnBig btnShine"
                data-magnet
                href={DISCORD_INVITE}
                target="_blank"
                rel="noreferrer"
              >
                START YOUR JOURNEY <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">
            <span>
              © {new Date().getFullYear()} {ORG_NAME} • {SITE_NAME}
            </span>
          </div>
          <div className="footerRight">
            <a href={DISCORD_INVITE} target="_blank" rel="noreferrer">
              Discord
            </a>
            <span className="sep">•</span>
            <a data-nav="highlights" href="#highlights">
              Highlights
            </a>
            <span className="sep">•</span>
            <a data-nav="gallery" href="#gallery">
              Gallery
            </a>
          </div>
        </div>
      </footer>

      <FloatingCta href={DISCORD_INVITE} />
    </main>
  );
}
