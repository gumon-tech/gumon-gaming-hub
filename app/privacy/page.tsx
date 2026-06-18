import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";
import { SITE_NAME, ORG_NAME } from "@/lib/seo";

const DISCORD_INVITE = process.env.NEXT_PUBLIC_DISCORD_INVITE || "";

export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัว (Privacy Policy) | ${SITE_NAME}`,
  description: "นโยบายการจัดเก็บ รักษา และดูแลความปลอดภัยข้อมูลส่วนบุคคลของผู้เล่น Antlia Minecraft Server และเว็บไซต์",
  alternates: { canonical: `${SITE_URL}/privacy/` },
};

export default function PrivacyPolicy() {
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
            <div className="brandSub">Antlia Server — Privacy Policy</div>
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
            <div className="guideKicker">PRIVACY POLICY</div>
            <h1 className="guideTitle">นโยบายความเป็นส่วนตัว 🛡️</h1>
            <p className="guideLead">
              เราใส่ใจและเคารพความเป็นส่วนตัวของผู้เล่นทุกคน นโยบายนี้อธิบายถึงข้อมูลที่เราจัดเก็บ วิธีนำไปใช้งาน และการดูแลรักษาความปลอดภัยของข้อมูล
            </p>
          </div>

          <div className="note">
            เมื่อท่านใช้งานเว็บไซต์ ลงทะเบียนบัญชี หรือเข้าเล่นในเซิร์ฟเวอร์ Antlia Minecraft Server ถือว่าท่านยอมรับแนวปฏิบัติที่ระบุไว้ในนโยบายความเป็นส่วนตัวนี้
          </div>

          <h2 className="docH2">1. ข้อมูลที่เราเก็บรวบรวม</h2>
          <p className="docP">
            เราเก็บรวบรวมข้อมูลเฉพาะเท่าที่จำเป็นเพื่อการให้บริการเซิร์ฟเวอร์เกมและการรักษาความปลอดภัยของระบบ:
          </p>
          <ul className="docList">
            <li><strong>ข้อมูลบัญชีผู้ใช้ในเกม:</strong> ชื่อผู้เล่นในเกม (Username), ตัวระบุเฉพาะของตัวละคร (UUID), และรหัสผ่านที่ท่านใช้ตั้งค่า (รหัสผ่านนี้จะถูกเข้ารหัสแบบทางเดียวโดยระบบ AuthMe ทันที และทีมงานจะไม่สามารถเห็นรหัสผ่านจริงของท่านได้)</li>
            <li><strong>ข้อมูลการเชื่อมโยง Discord:</strong> ID บัญชี Discord (Discord User ID) และชื่อบัญชี Discord ของท่าน เพื่อใช้ผูกข้อมูลยืนยันตัวตนผ่านระบบบอตของ Antlia (`/gm-mc-verify`)</li>
            <li><strong>ข้อมูลประวัติการเชื่อมต่อและพฤติกรรมในเกม:</strong> ที่อยู่ IP (IP Address) ที่เชื่อมต่อ, ประวัติล็อกอินเข้าและออกจากเกม (Join/Leave log), บันทึกการพิมพ์พูดคุยในช่องแชท (Chat Logs) ทั้งในเกมและแชนเนล Discord ที่ใช้ระบบเชื่อมโยงห้องแชท (Chat Bridge), และประวัติการทำงานของระบบบันทึกความปลอดภัยของเกม (เช่น ข้อมูลประวัติการวาง/ทำลายบล็อกและไอเทมในหีบ เพื่อใช้ตรวจสอบเวลามีเหตุลักขโมยหรือทำลายสิ่งก่อสร้าง)</li>
            <li><strong>ข้อมูลเว็บไซต์:</strong> ข้อมูลการเข้าชมเว็บไซต์ game.gumon.io เช่น ชนิดของเบราว์เซอร์, ที่อยู่ IP, หน้าที่เยี่ยมชม และคุกกี้ที่บันทึกข้อมูลแบบไม่ระบุตัวตน (เช่น Google Analytics) เพื่อนำมาวิเคราะห์การใช้งานเว็บไซต์</li>
          </ul>

          <h2 className="docH2">2. วิธีการนำข้อมูลไปใช้งาน</h2>
          <p className="docP">
            ข้อมูลส่วนบุคคลที่จัดเก็บจะใช้เฉพาะวัตถุประสงค์ต่อไปนี้:
          </p>
          <ul className="docList">
            <li><strong>เพื่อระบุตัวตนและรักษาความปลอดภัย:</strong> ใช้ในการตรวจสอบความถูกต้องก่อนเข้าเล่น (Authentication) ป้องกันการสวมรอยบัญชี ป้องกันการบุกรุก และจำกัดสิทธิ์ผู้เล่น 1 คนต่อ 1 บัญชี เพื่อความเป็นธรรมในระบบเศรษฐกิจ</li>
            <li><strong>เพื่อการควบคุมดูแลและการตรวจสอบ (Moderation):</strong> ใช้ประวัติแชท บันทึกการเข้าใช้งาน และบันทึกกิจกรรมในเกมเพื่อสืบสวนหาข้อเท็จจริงในกรณีที่มีการแจ้งปัญหาเรื่องการทำผิดกฎ (เช่น การใช้โปรแกรมโกง, การขโมย, การกลั่นแกล้ง หรือการป่วนเซิร์ฟเวอร์)</li>
            <li><strong>เพื่อปรับปรุงระบบและพัฒนาเกม:</strong> เพื่อวิเคราะห์ปัญหาเชิงเทคนิค ค้นหาข้อผิดพลาดของปลั๊กอิน ปรับปรุงระบบเน็ตเวิร์ก และปรับปรุงประสิทธิภาพของเซิร์ฟเวอร์และเว็บไซต์ให้ดียิ่งขึ้น</li>
          </ul>

          <h2 className="docH2">3. การเปิดเผยและการแบ่งปันข้อมูลแก่บุคคลภายนอก</h2>
          <p className="docP">
            เรามุ่งมั่นที่จะรักษาข้อมูลของท่านเป็นความลับอย่างสูงสุด <strong>เราจะไม่ขาย แลกเปลี่ยน ให้เช่า หรือเปิดเผยข้อมูลส่วนบุคคลของผู้เล่นให้กับบุคคลภายนอกเพื่อประโยชน์ทางการค้าโดยเด็ดขาด</strong>
          </p>
          <p className="docP">
            ข้อมูลต่าง ๆ จะเข้าถึงได้เฉพาะทีมงานผู้จัดทำและผู้ดูแลระบบที่ได้รับสิทธิ์ตามสมควรเพื่อการดูแลระบบเท่านั้น อย่างไรก็ดี เราอาจส่งต่อหรือเปิดเผยข้อมูลหากมีกรณีดังต่อไปนี้:
          </p>
          <ul className="docList">
            <li>ได้รับการร้องขออย่างถูกต้องตามกฎหมายจากเจ้าหน้าที่รัฐที่มีอำนาจ</li>
            <li>เพื่อปกป้องความปลอดภัย ความมั่นคง และทรัพย์สินของเซิร์ฟเวอร์ ชุมชนผู้เล่น และทีมงานผู้ดูแลระบบ</li>
            <li>การแบ่งปันข้อมูลที่ไม่ระบุตัวตน (เช่น สถิติจำนวนผู้เล่นรวม, สถิติเศรษฐกิจรวมในเกม) เพื่อประโยชน์ในการเผยแพร่ข่าวสารชุมชน</li>
          </ul>

          <h2 className="docH2">4. การรักษาความปลอดภัยของข้อมูล</h2>
          <p className="docP">
            เรามีมาตรการรักษาความปลอดภัยทางเทคนิคที่เหมาะสมเพื่อป้องกันการสูญหาย การเข้าถึง การแก้ไข หรือการเปิดเผยข้อมูลโดยมิชอบ:
          </p>
          <ul className="docList">
            <li>รหัสผ่านของท่านจะถูกเข้ารหัสผ่านอัลกอริทึมแฮช (Cryptographic Hashing) ที่ไม่สามารถย้อนรอยได้</li>
            <li>เซิร์ฟเวอร์และฐานข้อมูลตั้งอยู่บนระบบคลาวด์เน็ตเวิร์กที่ปลอดภัยและมีระบบป้องกันการเข้าถึงจากเครือข่ายภายนอก</li>
            <li>การสื่อสารข้อมูลบนเว็บไซต์และเซิร์ฟเวอร์ใช้โปรโตคอลที่ปลอดภัย</li>
          </ul>

          <h2 className="docH2">5. ระยะเวลาการเก็บรักษาข้อมูล</h2>
          <ul className="docList">
            <li>ข้อมูลบัญชีเกม บัญชี Discord ที่ผูกไว้ และสถานะทางเศรษฐกิจในเกมจะถูกจัดเก็บไว้จนกว่าท่านจะแจ้งขอลบบัญชี</li>
            <li>ข้อมูลประวัติกิจกรรม (Action Logs), ประวัติการแชท (Chat Logs) และประวัติ IP จะถูกเก็บรักษาไว้ชั่วคราวเป็นระยะเวลาจำกัด (ประมาณ 30 ถึง 90 วัน) จากนั้นระบบจะลบข้อมูลทิ้งโดยอัตโนมัติ เว้นแต่กรณีที่มีการสืบสวนคดีความผิดกฎหรืออยู่ระหว่างดำเนินการทางวินัย</li>
          </ul>

          <h2 className="docH2">6. สิทธิ์ของผู้เล่นเกี่ยวกับการดูแลข้อมูลส่วนตัว</h2>
          <p className="docP">
            ท่านในฐานะเจ้าของข้อมูลมีสิทธิ์ตามกฎหมายในการจัดการข้อมูลของท่าน ดังนี้:
          </p>
          <ul className="docList">
            <li>สิทธิ์ในการขอเปลี่ยนรหัสผ่านเพื่อความปลอดภัย (สามารถทำได้ด้วยคำสั่ง <code>/gm-mc-changemypassword</code> ใน Discord)</li>
            <li>สิทธิ์ในการตรวจสอบข้อมูลบัญชีของตนเองที่ผูกไว้</li>
            <li>สิทธิ์ในการขอยกเลิกบัญชีและการยืนยันตัวตน (ลบบัญชีและข้อมูลส่วนบุคคล) โดยสามารถแจ้งความประสงค์ได้ที่ช่องทางติดต่อผู้ดูแลระบบใน Discord ของเรา (หลังจากการลบข้อมูลแล้ว บัญชีเกมของท่านจะถูกลบและไม่สามารถใช้เข้าเล่นในเซิร์ฟเวอร์ได้อีกต่อไป)</li>
          </ul>

          <h2 className="docH2">7. การเก็บข้อมูลของเยาวชน</h2>
          <p className="docP">
            เราไม่มีนโยบายเจาะจงเก็บข้อมูลของเด็กอายุต่ำกว่า 13 ปีเป็นพิเศษ หากท่านเป็นบิดามารดาหรือผู้ปกครองและพบว่าบุตรหลานของท่านให้ข้อมูลส่วนบุคคลไว้กับเราโดยไม่ได้รับความยินยอม ท่านสามารถติดต่อเพื่อประสานงานให้เราลบข้อมูลนั้นออกจากระบบได้
          </p>

          <h2 className="docH2">8. การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว</h2>
          <p className="docP">
            เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นระยะเพื่อให้สอดคล้องกับคุณสมบัติของเกม ข้อกำหนดทางเทคนิค หรือข้อกำหนดทางกฎหมายที่เปลี่ยนแปลงไป โดยจะประกาศบนหน้านี้พร้อมทั้งอัปเดตวันที่มีผลบังคับใช้ เราขอแนะนำให้ผู้เล่นตรวจสอบหน้านี้เป็นระยะ การใช้งานเซิร์ฟเวอร์ต่อไปหลังการเปลี่ยนแปลงถือว่าท่านรับทราบและตกลงตามนโยบายที่ปรับปรุงแล้ว
          </p>

          <div className="guideBackRow">
            <Link className="btn btnGhost" href="/">← กลับหน้าหลัก</Link>
            <Link className="btn btnPrimary" href="/terms/">
              เงื่อนไขการให้บริการ (Terms of Service) →
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
