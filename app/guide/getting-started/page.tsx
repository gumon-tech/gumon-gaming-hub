import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

const MC_HOST = process.env.NEXT_PUBLIC_MC_HOST || "mc-antlia.gumon.io";
const JAVA_PORT = process.env.NEXT_PUBLIC_MC_JAVA_PORT || "25565";
const BEDROCK_PORT = process.env.NEXT_PUBLIC_MC_BEDROCK_PORT || "19132";
const DISCORD_INVITE = process.env.NEXT_PUBLIC_DISCORD_INVITE || "";

export const metadata: Metadata = {
  title: "วิธีเข้าเล่น Antlia — PC & มือถือ | Antlia Guides",
  description:
    "ขั้นตอนเข้าเล่น Antlia Minecraft Server ครั้งแรก ทั้ง Java (PC) และ Bedrock (มือถือ/Tablet) — สมัคร ยืนยันตัวตนใน Discord และ login",
  alternates: { canonical: `${SITE_URL}/guide/getting-started/` },
};

export default function GettingStarted() {
  return (
    <>
      <div className="guideHero">
        <div className="guideKicker">GETTING STARTED</div>
        <h1 className="guideTitle">เริ่มเล่นครั้งแรก 🎮</h1>
        <p className="guideLead">
          Antlia เล่นฟรี รองรับทั้ง Java (PC) และ Bedrock (มือถือ / Tablet /
          PC) — ทำตามขั้นตอนนี้ทีละข้อ ใช้เวลาประมาณ 5 นาทีก็เข้าเกมได้
        </p>
        <div className="tocChips">
          <a className="tocChip" href="#server-address">📡 ที่อยู่เซิร์ฟเวอร์</a>
          <a className="tocChip" href="#join-pc">💻 เข้าจาก PC (Java)</a>
          <a className="tocChip" href="#join-mobile">📱 เข้าจากมือถือ (Bedrock)</a>
          <a className="tocChip" href="#register">📝 สมัคร + ยืนยันตัวตน</a>
          <a className="tocChip" href="#first-steps">🌱 ก้าวแรกในเกม</a>
          <a className="tocChip" href="#troubleshoot">🛟 ปัญหาที่พบบ่อย</a>
        </div>
      </div>

      <h2 className="docH2" id="server-address">📡 ที่อยู่เซิร์ฟเวอร์</h2>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>Edition</th>
              <th>Address</th>
              <th>Port</th>
              <th>อุปกรณ์</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Java</strong></td>
              <td><code>{MC_HOST}</code></td>
              <td><code>{JAVA_PORT}</code> (default)</td>
              <td>PC — Windows / Mac / Linux</td>
            </tr>
            <tr>
              <td><strong>Bedrock</strong></td>
              <td><code>{MC_HOST}</code></td>
              <td><code>{BEDROCK_PORT}</code></td>
              <td>มือถือ iOS / Android, Tablet, Windows</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="note">
        Java ต้องใช้ Minecraft เวอร์ชัน <strong>1.21.11 ขึ้นไป</strong> •
        Bedrock เชื่อมต่อผ่าน Geyser ใช้ address เดียวกัน
      </div>

      <h2 className="docH2" id="join-pc">💻 เข้าจาก PC (Java Edition)</h2>
      <ol className="stepList">
        <li className="step">
          <div className="stepTitle">เปิด Minecraft Java แล้วไปที่ Multiplayer</div>
          <div className="stepBody">จากหน้าหลักของเกม กด <strong>Multiplayer</strong> → <strong>Add Server</strong></div>
        </li>
        <li className="step">
          <div className="stepTitle">กรอกข้อมูลเซิร์ฟเวอร์</div>
          <div className="stepBody">
            Server Name: <code>Antlia</code> (ตั้งอะไรก็ได้)<br />
            Server Address: <code>{MC_HOST}</code>
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">กด Done แล้ว Join Server</div>
          <div className="stepBody">
            เข้าเซิร์ฟเวอร์ได้เลย — ครั้งแรกระบบจะให้สมัครสมาชิกก่อน (ดูหัวข้อถัดไป)
          </div>
        </li>
      </ol>

      <h2 className="docH2" id="join-mobile">📱 เข้าจากมือถือ / Tablet (Bedrock Edition)</h2>
      <ol className="stepList">
        <li className="step">
          <div className="stepTitle">เปิด Minecraft แล้วไปที่แท็บ Servers</div>
          <div className="stepBody">
            จากหน้า Play เลือกแท็บ <strong>Servers</strong> → เลื่อนลงล่างสุด กด{" "}
            <strong>Add Server</strong>
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">กรอกข้อมูลเซิร์ฟเวอร์</div>
          <div className="stepBody">
            Server Name: <code>Antlia</code><br />
            Server Address: <code>{MC_HOST}</code><br />
            Port: <code>{BEDROCK_PORT}</code>
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">Save แล้วกดเข้าเซิร์ฟเวอร์</div>
          <div className="stepBody">
            ต้อง login ด้วยบัญชี Microsoft ก่อน (Bedrock บังคับ) แล้วเข้าได้เลย
          </div>
        </li>
      </ol>
      <div className="note noteWarn">
        ⚠️ ผู้เล่น Bedrock จะมีชื่อในเกมขึ้นต้นด้วยจุด เช่น{" "}
        <code>.YourName</code> — เป็นเรื่องปกติของระบบ
        ใช้ชื่อแบบมีจุดนี้เวลาเกี่ยวข้องกับคำสั่งต่างๆ
      </div>

      <h2 className="docH2" id="register">📝 สมัครสมาชิก + ยืนยันตัวตน (ครั้งแรกเท่านั้น)</h2>
      <ol className="stepList">
        <li className="step">
          <div className="stepTitle">
            สมัครในเกม <span className="badgeGame">IN-GAME</span>
          </div>
          <div className="stepBody">
            เมื่อเข้าเซิร์ฟเวอร์ครั้งแรก พิมพ์ในช่องแชท:
            <span className="cmd">/register &lt;รหัสผ่าน&gt; &lt;รหัสผ่าน&gt;</span>
            ตั้งรหัสผ่านที่จำได้ — ใช้ login ทุกครั้งที่เข้าเกม
            (ห้ามใช้รหัสง่ายๆ เช่น 123456)<br />
            หลังสมัคร จะได้รับ <strong>รหัส 6 หลัก</strong> แล้วถูก kick
            ออกจากเกมชั่วคราว — ไม่ต้องตกใจ เป็นขั้นตอนปกติ
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">
            ยืนยันตัวตนใน Discord <span className="badgeDiscord">DISCORD</span>
          </div>
          <div className="stepBody">
            เข้า{" "}
            <a href={DISCORD_INVITE} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
              Discord ของ Antlia
            </a>{" "}
            แล้วพิมพ์คำสั่งพร้อมรหัส 6 หลักที่ได้:
            <span className="cmd">/gm-mc-verify &lt;รหัส 6 หลัก&gt;</span>
            จะได้รับ Role &quot;Minecraft Player&quot; ทันที
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">รอ Admin อนุมัติ</div>
          <div className="stepBody">
            ทีมงานจะกดอนุมัติคำขอของคุณ — ปกติไม่นาน
            เมื่ออนุมัติแล้วกลับเข้าเกมได้เลย
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">
            Login ทุกครั้งที่เข้าเกม <span className="badgeGame">IN-GAME</span>
          </div>
          <div className="stepBody">
            <span className="cmd">/login &lt;รหัสผ่าน&gt;</span>
            พิมพ์ทุกครั้งที่เข้าเซิร์ฟเวอร์ เพื่อความปลอดภัยของบัญชี
          </div>
        </li>
      </ol>

      <h2 className="docH2" id="first-steps">🌱 ก้าวแรกในเกม</h2>
      <ol className="stepList">
        <li className="step">
          <div className="stepTitle">เลือกอาชีพกับ Antlia Careers</div>
          <div className="stepBody">
            คุยกับ <strong>Antlia Careers</strong> (หมาสีขาว) ที่ spawn —
            อาชีพคือแหล่งรายได้หลักของเกม มีให้เลือก 9 อาชีพ
            เลือกหลายอาชีพพร้อมกันได้
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">ดูของใน Antlia Store</div>
          <div className="stepBody">
            คุยกับ <strong>Antlia Store</strong> (แมวสีแดง) ที่ spawn
            หรือพิมพ์ <code>/astore</code> เพื่อดูสินค้าใน Admin Shop
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">เริ่มหาเงิน Antlia Coins (A)</div>
          <div className="stepBody">
            ทำงานตามอาชีพที่เลือกเพื่อรับเงิน — หาได้สูงสุด{" "}
            <strong>1,500 A ต่อวัน</strong> ดูยอดเงินด้วย <code>/bal</code><br />
            อ่านรายละเอียดระบบทั้งหมดได้ใน{" "}
            <Link href="/guide/player/" style={{ color: "var(--accent)" }}>
              คู่มือผู้เล่น (Reference) →
            </Link>
          </div>
        </li>
      </ol>

      <h2 className="docH2" id="troubleshoot">🛟 ปัญหาที่พบบ่อย</h2>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>ปัญหา</th>
              <th>วิธีแก้</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ลืมรหัสผ่าน</td>
              <td>
                ใช้คำสั่ง <code>/gm-mc-changemypassword</code> ใน Discord
                เพื่อตั้งรหัสใหม่ (ต้องเป็นบัญชีที่ verify แล้ว)
              </td>
            </tr>
            <tr>
              <td>เข้าเกมแล้วขยับไม่ได้ / พิมพ์อะไรก็ไม่ตอบ</td>
              <td>
                ยังไม่ได้ login — พิมพ์ <code>/login &lt;รหัสผ่าน&gt;</code> ก่อน
              </td>
            </tr>
            <tr>
              <td>สมัครแล้วแต่เข้าเกมไม่ได้</td>
              <td>
                อาจยังไม่ผ่านการอนุมัติ — เช็คใน Discord
                ว่าทำขั้นตอน <code>/gm-mc-verify</code> ครบหรือยัง
              </td>
            </tr>
            <tr>
              <td>Bedrock หาเซิร์ฟเวอร์ไม่เจอ</td>
              <td>
                เช็คว่ากรอก Port <code>{BEDROCK_PORT}</code> ถูกต้อง
                และเชื่อมต่อด้วยบัญชี Microsoft แล้ว
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="docP">
        ติดปัญหาอื่นๆ ถามได้เลยใน Discord ห้อง <code>#minecraft-chat</code>
      </p>

      <div className="guideBackRow">
        <Link className="btn btnGhost" href="/guide/">← คู่มือทั้งหมด</Link>
        <Link className="btn btnPrimary" href="/guide/player/">
          คู่มือผู้เล่น (Reference) →
        </Link>
      </div>
    </>
  );
}
