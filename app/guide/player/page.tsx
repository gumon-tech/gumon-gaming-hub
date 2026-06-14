import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "คู่มือผู้เล่น Antlia ฉบับละเอียด — Economy, Jobs, Rank, รถไฟ | Antlia Guides",
  description:
    "Reference ครบทุกระบบของ Antlia Minecraft Server — เงิน Antlia Coins, อาชีพทั้ง 9, Rank, ร้านค้าผู้เล่น, ระบบรถไฟเดินทางระหว่างเมือง และคำสั่งทั้งหมด",
  alternates: { canonical: `${SITE_URL}/guide/player/` },
};

export default function PlayerGuide() {
  return (
    <>
      <div className="guideHero">
        <div className="guideKicker">PLAYER REFERENCE</div>
        <h1 className="guideTitle">คู่มือผู้เล่น 📖</h1>
        <p className="guideLead">
          ระบบทั้งหมดของ Antlia แบบละเอียด — ใช้เป็น Reference
          เปิดดูได้ตลอดเวลา
        </p>
        <div className="tocChips">
          <a className="tocChip" href="#economy">💰 เศรษฐกิจ</a>
          <a className="tocChip" href="#jobs">⛏️ อาชีพ (Jobs)</a>
          <a className="tocChip" href="#ranks">🏅 Rank</a>
          <a className="tocChip" href="#travel">🚂 การเดินทาง</a>
          <a className="tocChip" href="#shops">🏪 ร้านค้า</a>
          <a className="tocChip" href="#cities">🏛️ เข้าเมือง</a>
          <a className="tocChip" href="#quests">📜 เควส</a>
          <a className="tocChip" href="#commands">⌨️ คำสั่งทั้งหมด</a>
          <a className="tocChip" href="#rules">📏 กฎ Anti-Exploit</a>
          <a className="tocChip" href="#tips">💡 Tips</a>
        </div>
      </div>

      <h2 className="docH2" id="economy">💰 ระบบเศรษฐกิจ</h2>
      <p className="docP">
        เงินในเกมคือ <strong>Antlia Coins (A)</strong> — ดูยอดเงินด้วย{" "}
        <code>/bal</code>
      </p>

      <h3 className="docH3">หาเงินได้จากไหน</h3>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>แหล่งรายได้</th>
              <th>วิธี</th>
              <th>หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Jobs</strong></td>
              <td>ทำงานตามอาชีพที่เลือก</td>
              <td>รายได้หลัก — ติด daily cap</td>
            </tr>
            <tr>
              <td><strong>Player Shops</strong></td>
              <td>ขายของให้ผู้เล่นอื่น (QuickShop)</td>
              <td>passive income ไม่ติด cap</td>
            </tr>
            <tr>
              <td><strong>Quests</strong></td>
              <td>ทำ quest พิเศษ</td>
              <td>เงินเพิ่มนอก cap</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="note noteWarn">
        ⚠️ <strong>Daily cap:</strong> รายได้จาก Jobs สูงสุด{" "}
        <strong>1,500 A/วัน</strong> (reset เที่ยงคืน) —
        วางแผนหาเงินให้เต็ม cap ทุกวัน
      </div>

      <h3 className="docH3">ค่าใช้จ่ายคำสั่ง (Command Costs)</h3>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>รายการ</th>
              <th>ค่าใช้จ่าย</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>/home</code> — กลับบ้าน</td><td>3 A</td></tr>
            <tr><td><code>/tpa</code> — teleport หาผู้เล่น</td><td>5 A</td></tr>
            <tr><td><code>/spawn</code> — กลับ spawn</td><td>5 A</td></tr>
            <tr><td><code>/back</code> — กลับจุดเดิม</td><td>12 A</td></tr>
            <tr><td><code>/sethome</code> — ตั้งจุด home</td><td>20 A</td></tr>
            <tr><td>🚂 ตั๋วรถไฟ (เดินทางระหว่างเมือง)</td><td>50–1,500 A ตามระยะทาง</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="docH2" id="jobs">⛏️ ระบบอาชีพ (Jobs)</h2>
      <p className="docP">
        เลือกได้หลายอาชีพพร้อมกัน แต่รายได้รวมยังอยู่ใน cap 1,500 A/วัน •
        ทุกอาชีพมี <strong>daily quest วันละ 1 อัน รางวัล 100 A</strong>{" "}
        (ไม่ติด cap) • level สูงสุดของทุกอาชีพคือ 200
      </p>
      <span className="cmd">{`/jobs browse          # ดูอาชีพทั้งหมด
/jobs join <ชื่อ>      # เข้าร่วมอาชีพ
/jobs leave <ชื่อ>     # ออกจากอาชีพ
/jobs info <ชื่อ>      # ดูรายได้ของอาชีพ
/jobs stats           # ดู level ตัวเอง`}</span>

      <h3 className="docH3">อาชีพทั้ง 9</h3>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>อาชีพ</th>
              <th>ทำอะไร</th>
              <th>รายได้/action สูงสุด</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Builder</strong></td><td>วางบล็อก</td><td>0.9 A</td></tr>
            <tr><td><strong>Crafter</strong></td><td>Craft ไอเทม</td><td>10 A (beacon)</td></tr>
            <tr><td><strong>Digger</strong></td><td>ขุดดิน/ทราย/กรวด</td><td>0.6 A (gravel, clay)</td></tr>
            <tr><td><strong>Enchanter</strong></td><td>เพิ่มคาถา</td><td>6 A (silk touch)</td></tr>
            <tr><td><strong>Farmer</strong></td><td>ปลูกพืช เลี้ยงสัตว์</td><td>3 A</td></tr>
            <tr><td><strong>Hunter</strong></td><td>ฆ่า mob</td><td>150 A (Ender Dragon)</td></tr>
            <tr><td><strong>Miner</strong></td><td>ขุดแร่</td><td>7 A (deepslate emerald)</td></tr>
            <tr><td><strong>Weaponsmith</strong></td><td>Craft อาวุธ/เกราะ</td><td>20 A (diamond chestplate)</td></tr>
            <tr><td><strong>Woodcutter</strong></td><td>ตัดไม้</td><td>0.25 A (log ปกติ)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="docH2" id="ranks">🏅 ระบบ Rank</h2>
      <p className="docP">
        เล่นนาน → Level อาชีพสูงขึ้น → Rank สูงขึ้นอัตโนมัติ → ได้สิทธิ์มากขึ้น
        (รายได้เท่ากันทุก rank — ไม่มีใครได้เปรียบเรื่องเงิน)
      </p>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>Rank</th>
              <th>เกณฑ์</th>
              <th>Home</th>
              <th>ร้านค้า</th>
              <th>พิเศษ</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>[Member]</strong></td><td>เริ่มต้นทุกคน</td><td>1</td><td>10</td><td>—</td></tr>
            <tr><td><strong>[Regular]</strong></td><td>อาชีพใดก็ได้ Lv.20</td><td>2</td><td>15</td><td>—</td></tr>
            <tr><td><strong>[Veteran]</strong></td><td>อาชีพใดก็ได้ Lv.50</td><td>3</td><td>20</td><td>—</td></tr>
            <tr><td><strong>[Elite]</strong></td><td>อาชีพใดก็ได้ Lv.100</td><td>5</td><td>30</td><td>—</td></tr>
            <tr><td><strong>[VIP]</strong></td><td>Admin ตั้งให้</td><td>10</td><td>30</td><td><code>/fly</code></td></tr>
            <tr><td><strong>[Lord]</strong></td><td>เจ้าผู้ครองนคร (อนุมัติโดย Crown)</td><td>5</td><td>30</td><td>
              <code>/fly</code> + <Link href="/guide/lord/" style={{ color: "#f1c40f" }}>ดูคู่มือ Lord →</Link>
            </td></tr>
          </tbody>
        </table>
      </div>
      <div className="note">
        Rank อัปเดต<strong>อัตโนมัติ</strong>ทันทีเมื่อ level อาชีพถึงเกณฑ์ —
        ไม่ต้องทำอะไรเพิ่ม
      </div>

      <h2 className="docH2" id="travel">🚂 การเดินทาง</h2>

      <h3 className="docH3">คำสั่งเดินทางพื้นฐาน</h3>
      <span className="cmd">{`/spawn            # กลับ spawn (5 A)
/home             # กลับบ้าน (3 A)
/sethome          # ตั้งบ้านที่จุดที่ยืน (20 A)
/tpa <ชื่อผู้เล่น>   # ขอ teleport ไปหาผู้เล่น (5 A)
/back             # กลับจุดก่อนหน้า เช่น หลังตาย (12 A)`}</span>

      <h3 className="docH3">เดินทางระหว่างเมือง — ระบบรถไฟ</h3>
      <p className="docP">
        การเดินทางระหว่างเมืองทั้งหมดใช้<strong>ตั๋วรถไฟ</strong> —
        ซื้อจาก Ticket Clerk ที่สถานีของแต่ละเมือง
      </p>
      <ol className="stepList">
        <li className="step">
          <div className="stepTitle">หา Ticket Clerk ที่สถานีรถไฟ</div>
          <div className="stepBody">
            NPC ชาวบ้าน (คนขายแผนที่) ประจำอยู่ที่สถานีของแต่ละเมือง
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">คลิกขวาเพื่อเปิดเมนูตั๋ว</div>
          <div className="stepBody">
            เห็นรายชื่อเมืองปลายทางทั้งหมดพร้อม<strong>ราคาตั๋ว</strong>ก่อนตัดสินใจ
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">เลือกเมือง → จ่ายเงิน → ออกเดินทาง</div>
          <div className="stepBody">
            ระบบหักเงินอัตโนมัติ แล้ว 🚂 ขบวนออกเดินทาง — teleport
            ถึงจุดลงของเมืองปลายทางทันที
          </div>
        </li>
      </ol>
      <div className="note">
        💡 ราคาตั๋วขึ้นกับ<strong>ระยะทาง</strong> — เมืองใกล้เริ่มต้น 50 A
        เมืองไกลสุดไม่เกิน 1,500 A • ทุกเมืองที่มี Clerk
        มีขากลับเสมอ • เมืองใหม่ที่ Lord เปิดจะโผล่ในเมนูอัตโนมัติ
      </div>

      <h2 className="docH2" id="shops">🏪 ร้านค้า</h2>

      <h3 className="docH3">Admin Shop</h3>
      <p className="docP">
        พิมพ์ <code>/astore</code> หรือคุยกับ NPC ร้านค้าในเมือง (Blacksmith,
        Grocer, Fisher, Builder, Decorator ฯลฯ) — ซื้อของพื้นฐานราคากลางจากระบบ
        และขายของให้ระบบได้ด้วย <code>/sell</code>
      </p>

      <h3 className="docH3">ร้านค้าผู้เล่น (QuickShop)</h3>
      <p className="docP">เปิดร้านขายของให้ผู้เล่นคนอื่น — passive income ที่ไม่ติด daily cap:</p>
      <ol className="stepList">
        <li className="step">
          <div className="stepTitle">วาง Chest ในที่ของคุณ</div>
          <div className="stepBody">เลือกตำแหน่งที่คนผ่านเยอะๆ ยิ่งดี</div>
        </li>
        <li className="step">
          <div className="stepTitle">Shift + คลิก Chest แล้วตั้งราคา</div>
          <div className="stepBody">เลือกไอเทมที่จะขาย ตั้งราคา buy/sell ตามต้องการ</div>
        </li>
        <li className="step">
          <div className="stepTitle">เปิดร้านสำเร็จ</div>
          <div className="stepBody">
            ตั้งร้านได้<strong>เฉพาะในเขตเมือง</strong>เท่านั้น (นอกเมืองตั้งไม่ได้) —
            แต่ละเมืองมีภาษีร้านค้าที่เจ้าเมืองตั้งเอง (0–10% เข้าคลังเมือง)
          </div>
        </li>
      </ol>
      <p className="docP">
        จำนวนร้านสูงสุดตาม Rank: Member 10 → Regular 15 → Veteran 20 →
        Elite/VIP 30 ร้าน
      </p>

      <h2 className="docH2" id="cities">🏛️ เข้าเมืองของ Lord</h2>
      <p className="docP">
        เมืองที่ Lord เปิดอาจเก็บ<strong>ภาษีเข้าเมือง</strong>กับคนนอกที่เดินข้ามเขตเข้าไป
        (เจ้าเมืองตั้งเอง 0–50A) — มีแจ้งเตือนตอนเข้า. ถ้าเดินทางด้วยรถไฟ ภาษีรวมอยู่ในค่าตั๋วแล้ว
      </p>
      <div className="note">
        💡 <strong>ชาวเมืองเข้าฟรี</strong> — ถ้าเป็นเจ้าของหรือสมาชิกเมือง (Lord
        <code>/rg addmember</code> ให้) ไม่เสียภาษีเข้าเมืองตัวเอง • เงินภาษีเข้า
        <strong>คลังเมือง</strong> ที่ Lord เอาไปทำรางวัลเควสคืนให้ลูกเมือง
      </div>

      <h2 className="docH2" id="quests">📜 เควส (Quests)</h2>
      <p className="docP">
        เควสคืองานที่ทำแล้วได้รางวัล (เงิน/ไอเทม) — มีทั้งเควสกลางของเซิร์ฟ และ
        <strong>เควสของเมือง</strong>ที่เจ้าเมือง (Lord) สร้างไว้ รางวัลมาจากคลังเมือง
      </p>
      <ol className="stepList">
        <li className="step">
          <div className="stepTitle">หาเควส</div>
          <div className="stepBody">
            พิมพ์ <code>/quests</code> เปิดสมุดเควส ดูเควสที่มี • หรือมองหา
            <strong>NPC กระดานเควส</strong>ในเมืองต่างๆ
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">รับเควส</div>
          <div className="stepBody">
            <strong>คลิกขวา NPC กระดานเควส</strong> เพื่อรับ — เควสของเมืองบางอันรับได้
            <strong>ที่ NPC ตัวนั้นเท่านั้น</strong> (พิมพ์ <code>/quests take</code> จากที่ไกลไม่ได้)
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">ทำให้สำเร็จ → รับรางวัล</div>
          <div className="stepBody">
            ทำภารกิจตามเงื่อนไข เสร็จแล้วได้รางวัลอัตโนมัติ — เงินเควสเป็นรายได้
            <strong>นอก daily cap</strong>
          </div>
        </li>
      </ol>
      <div className="note">
        💡 ดูเควสที่กำลังทำ/สถิติ: <code>/quests</code> • ยกเลิกเควส:{" "}
        <code>/quests quit &lt;ชื่อ&gt;</code>
      </div>

      <h2 className="docH2" id="commands">⌨️ คำสั่งทั้งหมด</h2>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>คำสั่ง</th>
              <th>ทำอะไร</th>
              <th>ค่าใช้จ่าย</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>/login &lt;รหัส&gt;</code></td><td>login เข้าเกม (ทุกครั้ง)</td><td>—</td></tr>
            <tr><td><code>/bal</code></td><td>ดูยอดเงิน</td><td>—</td></tr>
            <tr><td><code>/baltop</code></td><td>อันดับเศรษฐีของเซิร์ฟเวอร์</td><td>—</td></tr>
            <tr><td><code>/pay &lt;ผู้เล่น&gt; &lt;จำนวน&gt;</code></td><td>โอนเงินให้ผู้เล่นอื่น</td><td>—</td></tr>
            <tr><td><code>/jobs browse</code></td><td>ดูอาชีพทั้งหมด</td><td>—</td></tr>
            <tr><td><code>/jobs join &lt;ชื่อ&gt;</code></td><td>เข้าร่วมอาชีพ</td><td>—</td></tr>
            <tr><td><code>/jobs stats</code></td><td>ดู level อาชีพตัวเอง</td><td>—</td></tr>
            <tr><td><code>/astore</code></td><td>เปิด Admin Shop</td><td>—</td></tr>
            <tr><td><code>/sell</code></td><td>ขายไอเทมให้ระบบ (sellall)</td><td>—</td></tr>
            <tr><td><code>/quests</code></td><td>ดู quest ที่มี</td><td>—</td></tr>
            <tr><td><code>/spawn</code></td><td>กลับ spawn</td><td>5 A</td></tr>
            <tr><td><code>/home</code></td><td>กลับบ้าน</td><td>3 A</td></tr>
            <tr><td><code>/sethome</code></td><td>ตั้งจุด home</td><td>20 A</td></tr>
            <tr><td><code>/tpa &lt;ผู้เล่น&gt;</code></td><td>ขอ teleport หาผู้เล่น</td><td>5 A</td></tr>
            <tr><td><code>/back</code></td><td>กลับจุดก่อนหน้า</td><td>12 A</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="docH3">คำสั่ง Discord ที่ควรรู้</h3>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>คำสั่ง</th>
              <th>ทำอะไร</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>/gm-mc-verify &lt;รหัส&gt;</code></td><td>ยืนยันตัวตนหลังสมัครในเกม (ครั้งแรก)</td></tr>
            <tr><td><code>/gm-mc-changemypassword</code></td><td>เปลี่ยน/รีเซ็ตรหัสผ่านของตัวเอง</td></tr>
            <tr><td><code>/gm-mc-linked</code></td><td>ดู Minecraft account ที่ผูกกับ Discord ของคุณ</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="docH2" id="rules">📏 กฎ Anti-Exploit</h2>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>ข้อห้าม</th>
              <th>เหตุผล</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ขาย Ender Pearl, Sponge, Nether Star, Ink Sac ฯลฯ ใน Admin Shop</td>
              <td>เป็นไอเทมที่ farm ได้ไม่จำกัด</td>
            </tr>
            <tr>
              <td>ฆ่าผู้เล่นเพื่อหวังเงิน</td>
              <td>ไม่มีรายได้จากการฆ่าผู้เล่นในทุกอาชีพ</td>
            </tr>
            <tr>
              <td>ใช้ TreeFeller ตัดไม้ใหญ่หวังเงิน Job</td>
              <td>ระบบปิดแล้ว — ได้รายได้เฉพาะตัดด้วยมือ</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="docH2" id="tips">💡 Tips สำหรับผู้เล่นใหม่</h2>
      <ul className="docList">
        <li>
          <strong>เลือกอาชีพที่ทำแล้วสนุก</strong> ไม่ใช่แค่รายได้สูงสุด —
          Miner เหนื่อยแต่ consistent, Farmer ช้าแต่หลากหลาย
        </li>
        <li>
          <strong>ทำให้ครบ daily cap ทุกวัน</strong> — 1,500 A/วัน × 30 วัน =
          45,000 A ในเดือนแรก
        </li>
        <li>
          <strong>ตั้งร้านค้า</strong>เมื่อสะสมของพอ — passive income ไม่ติด cap
        </li>
        <li>
          <strong>ทำ Quests</strong> — ให้เงินเพิ่มนอก cap ทำทุกวันถ้าทำได้
        </li>
        <li>
          <strong>เก็บ level อาชีพไปเรื่อยๆ</strong> — Lv.20 ได้ Regular, Lv.50
          ได้ Veteran, Lv.100 ได้ Elite
        </li>
      </ul>

      <div className="guideBackRow">
        <Link className="btn btnGhost" href="/guide/">← คู่มือทั้งหมด</Link>
        <Link className="btn btnGhost" href="/guide/getting-started/">วิธีเข้าเล่น</Link>
        <Link className="btn btnPrimary" href="/guide/lord/">คู่มือ Lord →</Link>
      </div>
    </>
  );
}
