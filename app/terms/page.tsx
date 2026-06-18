import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";
import { SITE_NAME, ORG_NAME } from "@/lib/seo";

const DISCORD_INVITE = process.env.NEXT_PUBLIC_DISCORD_INVITE || "";

export const metadata: Metadata = {
  title: `เงื่อนไขการให้บริการ (Terms of Service) | ${SITE_NAME}`,
  description: "ข้อตกลง เงื่อนไข และกฎระเบียบในการเล่นบน Antlia Minecraft Server และการใช้งานบริการที่เกี่ยวข้อง",
  alternates: { canonical: `${SITE_URL}/terms/` },
};

export default function TermsOfService() {
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
            <div className="brandSub">Antlia Server — Terms of Service</div>
          </div>
        </Link>

        <nav className="topActions">
          <Link className="btn btnGhost" href="/">
            หน้าแรก
          </Link>
          <Link className="btn btnGhost" href="/guide/">
            คู่มือการเล่น
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
        <div className="container">
          <div className="guideHero">
            <div className="guideKicker">LEGAL AGREEMENT</div>
            <h1 className="guideTitle">เงื่อนไขการให้บริการ ⚖️</h1>
            <p className="guideLead">
              โปรดอ่านเงื่อนไขการให้บริการนี้อย่างละเอียดก่อนเข้าเล่นเซิร์ฟเวอร์ Antlia Minecraft Server หรือใช้บริการใด ๆ ของเรา
            </p>
          </div>

          <div className="note">
            เซิร์ฟเวอร์ Antlia Minecraft Server เป็นการให้บริการร่วมกันของชุมชน <strong>Gumon Technology</strong> 
            การเข้าเล่นเกมและร่วมกิจกรรมในเซิร์ฟเวอร์หรือ Discord ถือว่าท่านยอมรับข้อตกลงนี้ทุกประการ
          </div>

          <h2 className="docH2">1. ความสัมพันธ์กับผู้ผลิตเกม (Mojang AB / Microsoft)</h2>
          <p className="docP">
            เซิร์ฟเวอร์ Antlia Minecraft Server ดำเนินงานโดยอิสระโดยกลุ่มพัฒนาของชุมชน Gumon Technology 
            และ<strong>ไม่มีส่วนเกี่ยวข้อง ไม่ได้รับเงินสนับสนุน หรือรับการสนับสนุนจาก Mojang AB, Microsoft หรือพันธมิตรของทาง Mojang แต่อย่างใด</strong> 
            การให้บริการและระบบทั้งหมดดำเนินการตามเงื่อนไขการค้าและข้อตกลงการใช้งาน (EULA) ของ Mojang อย่างถูกต้อง
          </p>

          <h2 className="docH2">2. บัญชีผู้เล่น ความปลอดภัย และระบบยืนยันตัวตน</h2>
          <p className="docP">
            เพื่อให้สังคมภายในเซิร์ฟเวอร์มีความปลอดภัยและน่าอยู่ยิ่งขึ้น ผู้เล่นทุกคนจะต้องปฏิบัติตามระบบจัดการบัญชีดังนี้:
          </p>
          <ul className="docList">
            <li><strong>การลงทะเบียนในเกม:</strong> ผู้เล่นต้องสมัครบัญชีในเกมผ่านระบบ AuthMe ด้วยคำสั่ง <code>/register</code> และเข้าเกมด้วย <code>/login</code> ด้วยรหัสผ่านที่ปลอดภัย</li>
            <li><strong>การยืนยันตัวตนผ่าน Discord:</strong> ผู้เล่นต้องเชื่อมโยงบัญชี Minecraft กับ Discord ของเซิร์ฟเวอร์ด้วยคำสั่ง <code>/gm-mc-verify</code> และผ่านขั้นตอนการอนุมัติ (Approval) จากทีมงานก่อนเข้าเล่น</li>
            <li><strong>ความปลอดภัยของรหัสผ่าน:</strong> รหัสผ่านและบัญชีผู้เล่นเป็นความรับผิดชอบของท่านแต่เพียงผู้เดียว ทีมงาน Antlia จะไม่มีการถามรหัสผ่านของคุณไม่ว่าจะในกรณีใด ๆ ทั้งในเกมและภายนอกเกม</li>
            <li><strong>การจำกัดบัญชี (Multi-Account Limit):</strong> เพื่อรักษาระบบเศรษฐกิจและป้องกันการปั๊มเหรียญ Antlia Coins (ซึ่งจำกัดที่ 1,500 A ต่อวันต่อคน) <strong>ผู้เล่น 1 คนอนุญาตให้มีบัญชีในเซิร์ฟเวอร์ได้เพียง 1 บัญชีเท่านั้น</strong> การใช้บัญชีสำรอง (Alt Account) หรือสร้างหลายบัญชีเพื่อเอาเปรียบระบบ ถือเป็นความผิดร้ายแรงและจะถูกลงโทษแบนถาวรทุกบัญชี</li>
          </ul>

          <h2 className="docH2">3. กฎระเบียบและมารยาทในการเล่นเกม (Code of Conduct)</h2>
          <p className="docP">
            เพื่อสร้างประสบการณ์การเล่นที่ดีร่วมกัน ผู้เล่นทุกคนตกลงที่จะปฏิบัติตามกฎกติกาอย่างเคร่งครัด:
          </p>
          <ul className="docList">
            <li><strong>การห้ามใช้โปรแกรมโกง (No Cheats/Hacks):</strong> ห้ามใช้ Modified Client, Hacked Client (เช่น Fly, KillAura, Jesus, Reach ฯลฯ) หรือม็อดที่ช่วยค้นหาแร่ (X-ray) หรือสคริปต์ช่วยเล่น (Auto-clicker, Baritone) ที่ให้ประโยชน์อย่างไม่ยุติธรรม ม็อดที่อนุญาตคือม็อดเพื่อเพิ่มประสิทธิภาพการประมวลผลหรือความสวยงาม เช่น Sodium, OptiFine, Shaders หรือม็อดแผนที่ที่ไม่มีระบบแสดงแร่หรือผู้เล่นอื่น</li>
            <li><strong>การห้ามทำลายทรัพย์สินและสิ่งก่อสร้าง (No Griefing & Stealing):</strong> ห้ามทำลายสิ่งก่อสร้าง ขโมยไอเทม บุกรุก หรือดัดแปลงพื้นที่ของผู้อื่นโดยไม่ได้รับอนุญาต ไม่ว่าจะเป็นพื้นที่ในระบบเคลม (Towny/Claims) หรือพื้นที่อิสระก็ตาม</li>
            <li><strong>การสื่อสารในชุมชน:</strong> ห้ามสแปมช่องแชท, ใช้ข้อความหยาบคาย, แสดงความเกลียดชัง (Hate Speech), คุกคามผู้อื่น (Harassment), หลอกลวง, หรือพูดคุยเกี่ยวกับหัวข้อที่อ่อนไหว เช่น ศาสนา การเมือง หรือสถาบันต่างๆ ทั้งในเกมและ Discord</li>
            <li><strong>ระบบเศรษฐกิจและการซื้อขายด้วยเงินจริง (No RMT):</strong> การซื้อขายไอเทม ที่ดิน หรือเงินในเกม (Antlia Coins) ด้วยเงินจริง (Real Money Trading - RMT) ถือเป็นสิ่งต้องห้าม หากตรวจสอบพบจะดำเนินการแบนบัญชีผู้เกี่ยวข้องทั้งหมดทันที รวมถึงห้ามการใช้ประโยชน์จากบั๊กของระบบ (Exploits) หรือการปั๊มไอเทม (Duplication)</li>
          </ul>

          <h2 className="docH2">4. การดำเนินการทางวินัยและบทลงโทษ</h2>
          <p className="docP">
            หากตรวจสอบพบว่าผู้เล่นคนใดละเมิดกฎกติกาหรือเงื่อนไขการให้บริการนี้ ทีมงานของ Antlia ขอสงวนสิทธิ์ในการดำเนินการลงโทษตามดุลยพินิจของทีมงาน:
          </p>
          <ul className="docList">
            <li>การลงโทษมีตั้งแต่ การตักเตือน, การกักบริเวณในคุก (Jail), การปิดกั้นการสนทนา (Mute), การคัดออกจากเซิร์ฟเวอร์ (Kick), ไปจนถึงการแบนบัญชีและ Discord ชั่วคราวหรือถาวร (Ban)</li>
            <li><strong>การตัดสินของทีมงานและผู้ดูแลระบบสูงสุดของ Antlia Server ถือเป็นที่สิ้นสุดในทุกกรณี</strong></li>
            <li>เซิร์ฟเวอร์จะไม่มีการชดเชยไอเทม ข้อมูล หรือความเสียหายใด ๆ ที่เกิดขึ้นจากการถูกลงโทษเนื่องจากการทำผิดกฎ</li>
          </ul>

          <h2 className="docH2">5. ระบบช่วยเหลือและการสนับสนุนเซิร์ฟเวอร์ (Donations)</h2>
          <p className="docP">
            เซิร์ฟเวอร์ Antlia เป็นเซิร์ฟเวอร์ที่มุ่งเน้นชุมชน <strong>เล่นฟรี 100% (Free to Play) และไม่มีระบบ Pay-to-Win</strong> (ไม่มีการขายไอเทมหรือยศที่ช่วยให้เล่นเก่งกว่าผู้เล่นอื่น)
          </p>
          <p className="docP">
            หากในอนาคตมีระบบรับเงินสนับสนุน (Donations) หรือการซื้อยศ/ไอเทมตกแต่ง (Cosmetic) การสนับสนุนทั้งหมดจะถือเป็นความสมัครใจของผู้เล่นเพื่อสนับสนุนค่าใช้จ่ายในการเปิดเซิร์ฟเวอร์ (เช่น ค่าเครื่องเซิร์ฟเวอร์ ระบบเน็ตเวิร์ก และคลาวด์) เงินที่ผู้เล่นสนับสนุนไม่สามารถขอคืนได้ (Non-Refundable) ไม่ว่าในกรณีใดก็ตาม
          </p>

          <h2 className="docH2">6. การปฏิเสธความรับผิดชอบ (Disclaimer) และขีดจำกัดความรับผิด</h2>
          <p className="docP">
            ทีมงานผู้พัฒนาพยายามดูแลระบบให้มีเสถียรภาพสูงสุด อย่างไรก็ดี:
          </p>
          <ul className="docList">
            <li>เซิร์ฟเวอร์นี้ให้บริการตามสภาพที่เป็นอยู่ (As-Is Basis) ทีมงานไม่รับประกันว่าเซิร์ฟเวอร์จะเปิดให้บริการตลอดเวลาโดยไม่มีการขัดข้อง หรือไม่มีข้อผิดพลาด (Bugs)</li>
            <li>ทีมงานไม่รับผิดชอบต่อความสูญเสียใด ๆ ของข้อมูลบัญชีผู้เล่น สิ่งปลูกสร้าง ไอเทม หรือเงินในเกม ที่เกิดจากข้อบกพร่องของระบบ, ข้อมูลสูญหายจากการย้อนเซิร์ฟเวอร์ (Rollbacks), ปัญหาทางเครือข่าย หรือการปิดตัวของเซิร์ฟเวอร์</li>
          </ul>

          <h2 className="docH2">7. การปรับปรุงแก้ไขเงื่อนไข</h2>
          <p className="docP">
            ทีมงาน Antlia ขอสงวนสิทธิ์ในการแก้ไขหรือเปลี่ยนแปลงเงื่อนไขการให้บริการและกฎกติกาการเล่นนี้ได้ทุกเวลา เพื่อความเหมาะสมของชุมชน โดยการแก้ไขจะมีผลบังคับใช้ทันทีเมื่อเผยแพร่ลงบนเว็บไซต์นี้หรือในช่องทางประกาศของ Discord การที่ท่านยังคงเข้าใช้งานเซิร์ฟเวอร์ต่อไปหลังมีการเปลี่ยนแปลง จะถือว่าท่านตกลงยอมรับเงื่อนไขใหม่เหล่านั้น
          </p>

          <div className="guideBackRow">
            <Link className="btn btnGhost" href="/">← กลับหน้าหลัก</Link>
            <Link className="btn btnPrimary" href="/privacy/">
              นโยบายความเป็นส่วนตัว (Privacy Policy) →
            </Link>
          </div>
        </div>
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
