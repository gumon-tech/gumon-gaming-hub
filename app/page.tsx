import SocialShare from "@/components/SocialShare";
import HeroActions from "@/components/HeroActions";

const DISCORD_INVITE = "https://discord.gg/WuNtDV9nTW";

export default function Page() {
  const shareTitle = "Antlia Minecraft Server | Gumon Gaming Hub";
  const shareText =
    "เล่นฟรี • Community • Long-term World — สมัครผ่าน Discord แล้วเข้ามาสร้างเมือง/ผจญภัยด้วยกัน!";

  return (
    <main className="page">
      <div className="bgGrid" aria-hidden="true" />
      <div className="bgGlow" aria-hidden="true" />
      <div className="bgParticles" aria-hidden="true" />

      <header className="topbar">
        <div className="brand">
          <img className="brandLogo" src="/logo.png" alt="Gumon Gaming Hub logo" />
          <div className="brandText">
            <div className="brandName">GUMON GAMING HUB</div>
            <div className="brandSub">Antlia Server</div>
          </div>
        </div>

        <nav className="topActions">
          <a className="btn btnGhost" href="#highlights">Highlights</a>
          <a className="btn btnGhost" href="#howto">How to join</a>
          <a className="btn btnPrimary btnPulse" href={DISCORD_INVITE} target="_blank" rel="noreferrer">
            JOIN DISCORD
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroMedia" aria-hidden="true">
          <div
            className="heroImg"
            style={{ backgroundImage: `url(/images/minecraft-castle-featured.jpg)` }}
          />
          <div className="heroVignette" />
          <div className="heroScanlines" />
          <div className="heroDust" />
        </div>

        <div className="container heroInner">
          <div className="pillRow">
            <span className="pill"><span className="pillLed" /> FREE TO PLAY</span>
            <span className="pill">COMMUNITY</span>
            <span className="pill">LONG-TERM WORLD</span>
          </div>

          <h1 className="heroTitle">
            Antlia <span className="heroTitleAccent">Minecraft Server</span>
          </h1>

          <p className="heroLead">{shareText}</p>

          {/* ✅ ปุ่มที่มี onClick ย้ายมาไว้ใน Client Component */}
          <HeroActions inviteUrl={DISCORD_INVITE} />

          <div className="inviteRow">
            <span className="inviteLabel">INVITE:</span>
            <a className="inviteLink" href={DISCORD_INVITE} target="_blank" rel="noreferrer">
              {DISCORD_INVITE}
            </a>
          </div>

          <div className="chipRow">
            <span className="chip">✦ Cozy + Epic Builds</span>
            <span className="chip">⛨ Fair Gameplay</span>
            <span className="chip">👥 Active Community</span>
          </div>

          <div className="heroCards">
            <div className="card cardTall" id="highlights">
              <div className="cardHead">
                <div className="cardTitle">SERVER HIGHLIGHTS</div>
                <div className="cardBadge">
                  <img src="/logo.png" alt="" />
                </div>
              </div>

              <div className="feature">
                <div className="featureIcon">👥</div>
                <div className="featureText">
                  <div className="featureName">Community First</div>
                  <div className="featureDesc">ชุมชนอบอุ่น เล่นด้วยกัน สร้างเมืองร่วมกัน</div>
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
                  <div className="featureDesc">โลกพัฒนาไปเรื่อย ๆ เหมาะกับสายเล่นยาว</div>
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
                  <div className="statDesc">ลงทะเบียนและประกาศข่าวในที่เดียว</div>
                </div>

                <div className="stat">
                  <div className="statLabel">WORLD</div>
                  <div className="statValue">LONG-TERM</div>
                  <div className="statDesc">เมืองโตขึ้นเรื่อย ๆ แบบมีเรื่องราว</div>
                </div>
              </div>
            </div>
          </div>

          <div className="belowHero">
            <SocialShare title={shareTitle} text={shareText} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="sectionTitle">World Moments</h2>
            <p className="sectionDesc">
              ภาพบรรยากาศในโลก Antlia — แนะนำใช้ภาพ 16:9 เป็น OG/แชร์ และ 21:9 เป็น Hero Banner
            </p>
          </div>

          <div className="gallery">
            <div className="shot shotMain">
              <div className="shotImg" style={{ backgroundImage: "url(/images/minecraft-castle-featured.jpg)" }} />
              <div className="shotOverlay">
                <div className="shotTitle">Featured View</div>
                <div className="shotSub">ปราสาท • ประตู Nether • ดินแดนลึกลับ</div>
              </div>
            </div>

            <div className="shot shotSide">
              <div className="shotImg" style={{ backgroundImage: "url(/images/minecraft-tower-icon.jpg)" }} />
              <div className="shotOverlay">
                <div className="shotTitle">Icon View</div>
                <div className="shotSub">OG / Thumbnail / Card</div>
              </div>
            </div>

            <div className="shot shotSide">
              <div className="shotImg" style={{ backgroundImage: "url(/images/minecraft-world-mobile.jpg)" }} />
              <div className="shotOverlay">
                <div className="shotTitle">Mobile View</div>
                <div className="shotSub">Portrait / Social Story</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="sectionTitle">Platform Support</h2>
            <p className="sectionDesc">
              เล่นได้ทุกแพลตฟอร์ม บน PC, Tablet, หรือมือถือก็ได้ เลือกได้ Java Edition หรือ Bedrock Edition
            </p>
          </div>

          <div className="compatGrid">
            <div className="compatCard">
              <div className="compatIcon">💻</div>
              <div className="compatTitle">PC</div>
              <div className="compatDesc">Windows / Mac / Linux</div>
              <div className="compatTags">
                <span className="compatTag">Java</span>
                <span className="compatTag">Bedrock</span>
              </div>
            </div>

            <div className="compatCard">
              <div className="compatIcon">📱</div>
              <div className="compatTitle">Mobile</div>
              <div className="compatDesc">iPhone / Android</div>
              <div className="compatTags">
                <span className="compatTag">Bedrock</span>
              </div>
            </div>

            <div className="compatCard">
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

      <section className="section">
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
              <a className="btn btnPrimary btnBig btnShine" href={DISCORD_INVITE} target="_blank" rel="noreferrer">
                JOIN DISCORD <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">
            <span>© {new Date().getFullYear()} GUMON GAMING HUB • ANTILIA SERVER</span>
          </div>
          <div className="footerRight">
            <a href={DISCORD_INVITE} target="_blank" rel="noreferrer">Discord</a>
            <span className="sep">•</span>
            <a href="#highlights">Highlights</a>
            <span className="sep">•</span>
            <a href="#howto">How to join</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
