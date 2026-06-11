import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "คู่มือ Lord — เจ้าผู้ครองนคร | Antlia Guides",
  description:
    "คู่มือ Lord ของ Antlia ฉบับเต็ม — วิธีขอเปิดเมือง, ตั้ง warp รถไฟ, Ticket Clerk, จัดการเขตแดน WorldGuard, WorldEdit, NPC, Quest และทุกสิทธิ์ของเจ้าผู้ครองนคร",
  alternates: { canonical: `${SITE_URL}/guide/lord/` },
};

export default function LordGuide() {
  return (
    <>
      <div className="guideHero">
        <div className="guideKicker" style={{ color: "#f1c40f" }}>
          LORD&apos;S HANDBOOK
        </div>
        <h1 className="guideTitle">คู่มือ Lord — เจ้าผู้ครองนคร 🛡️</h1>
        <p className="guideLead">
          Lord คือผู้ปกครองเมืองที่มีอธิปไตยเต็มในเขตของตนเอง —
          คู่มือนี้พาคุณตั้งแต่การขอเปิดเมือง จนถึงทุกเครื่องมือขั้นสูงที่ Lord
          ใช้ได้
        </p>
        <div className="tocChips">
          <a className="tocChip" href="#what-is-lord">👑 Lord คืออะไร</a>
          <a className="tocChip" href="#onboarding">🏗️ เปิดเมือง Step by Step</a>
          <a className="tocChip" href="#rail">🚂 ระบบรถไฟ</a>
          <a className="tocChip" href="#region">🗺️ จัดการเขตเมือง</a>
          <a className="tocChip" href="#worldedit">🧱 WorldEdit</a>
          <a className="tocChip" href="#npc">🧑‍🌾 NPC</a>
          <a className="tocChip" href="#quests">📜 Quests</a>
          <a className="tocChip" href="#limits">🚫 ข้อจำกัด</a>
          <a className="tocChip" href="#cheatsheet">⌨️ ตารางคำสั่ง</a>
        </div>
      </div>

      <h2 className="docH2" id="what-is-lord">👑 Lord คืออะไร?</h2>
      <p className="docP">
        <strong>Lord</strong> (เจ้าผู้ครองนคร) คือ role
        ปกครองที่ได้รับการแต่งตั้งโดย <strong>Crown</strong> (ทีมผู้ดูแล) —
        ไม่ใช่ rank ที่ grind ได้ แต่เป็นตำแหน่งที่ผู้เล่นยื่นขอเปิดเมืองและผ่านการอนุมัติ
      </p>
      <span className="cmd">{`👑 The Crown   อำนาจระดับโลก — ดูแลทุกเมือง อนุมัติเมืองใหม่ ตัดสินข้อพิพาท
      │
🛡️  Lord        อธิปไตยเต็มในเขตเมืองตนเอง — build, ล็อกเมือง, NPC, quest
      │
🧑  ชาวเมือง    Member → Regular → Veteran → Elite`}</span>
      <ul className="docList">
        <li>Prefix ในเกม: <span className="badgeLord">[Lord of &lt;ชื่อเมือง&gt;]</span> สีทอง</li>
        <li>Discord role: <code>@Lord</code> + role ประจำเมือง <code>@Lord · &lt;ชื่อเมือง&gt;</code></li>
        <li>ได้ perk ทั้งหมดของ Elite (home 5 จุด, ร้านค้า 30) + สิทธิ์ปกครองเพิ่มเติม</li>
        <li>มีสิทธิ์ <code>/fly</code> — บินได้สำหรับงาน build ในเมือง</li>
      </ul>

      <h2 className="docH2" id="onboarding">🏗️ เปิดเมือง — Step by Step</h2>

      <ol className="stepList">
        <li className="step">
          <div className="stepTitle">
            สำรวจพื้นที่ + จดพิกัดมุมเมือง{" "}
            <span className="badgeGame">IN-GAME</span>
          </div>
          <div className="stepBody">
            เดินไปยืนที่มุมแต่ละมุมของพื้นที่ที่ต้องการ กด <strong>F3</strong>{" "}
            จดค่า <strong>X</strong> และ <strong>Z</strong> ทุกมุม —
            รูปร่างเมืองเป็นหลายเหลี่ยมอิสระได้ ไม่ต้องเป็นสี่เหลี่ยม (อย่างน้อย
            3 มุม)
            <span className="cmd">{`ตัวอย่าง:  มุม NW: 100, 200   มุม NE: 160, 200
          มุม SE: 160, 260   มุม SW: 100, 260
→ กรอกเป็น  points: 100,200 160,200 160,260 100,260`}</span>
            <strong>ข้อจำกัดพื้นที่:</strong> ขั้นต่ำ 400 บล็อก² • สูงสุดต่อเมือง
            128,164 บล็อก² (เท่า Frostmere) • จำนวนเมืองต่อคน{" "}
            <strong>ไม่จำกัด</strong> (ขอแค่ไม่ทับเมืองอื่น)
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">
            ยื่นขอเปิดเมือง <span className="badgeDiscord">DISCORD</span>
          </div>
          <div className="stepBody">
            <span className="cmd">{`/gm-mc-claim-city
  name:    ชื่อเมือง (a-z, 0-9, _, - เช่น lakeside)
  points:  พิกัดมุม x,z คั่นช่องว่าง เช่น 100,200 160,200 160,260
  y:       ช่วงความสูง (ไม่บังคับ, default -64:320)
  display: ชื่อแสดงผล (ไม่บังคับ — ไทย/เว้นวรรคได้)`}</span>
            ระบบตรวจอัตโนมัติ: รูปปิดถูกต้อง / ขนาดไม่เกินเพดาน /
            ไม่ทับเมืองอื่น / ชื่อไม่ซ้ำ — ถ้าไม่ผ่านบอทจะแจ้งว่าผิดตรงไหน
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">รอ Crown อนุมัติ</div>
          <div className="stepBody">
            เมื่อกดอนุมัติ ระบบทำให้อัตโนมัติทั้งหมด: สร้างเขตเมือง
            (WorldGuard region) + ตั้ง protection เริ่มต้น (คนนอก build
            ไม่ได้, ปิด PvP) + ให้ยศ Lord + prefix{" "}
            <span className="badgeLord">[Lord of &lt;เมือง&gt;]</span> + สร้าง
            Discord role ประจำเมือง + ประกาศ —
            และระบบสุ่มจุด warp ปลอดภัยในเขตเมืองให้ก่อน
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">
            ตั้งจุด Warp รถไฟ <span className="badgeDiscord">DISCORD</span>
          </div>
          <div className="stepBody">
            ไปยืนในเกมตรงจุดที่อยากให้ผู้โดยสารมาลง (เช่น หน้าสถานี) กด F3 จด
            X, Y, Z แล้วใช้คำสั่ง:
            <span className="cmd">/gm-mc-set-city-warp x:&lt;X&gt; y:&lt;Y&gt; z:&lt;Z&gt; [title:&lt;ชื่อ&gt;]</span>
            ระบบตรวจว่าพิกัดอยู่ในเขตเมืองของคุณ — เปลี่ยนภายหลังได้ตลอด
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">
            วาง Ticket Clerk (คนขายตั๋วรถไฟ){" "}
            <span className="badgeDiscord">DISCORD</span>
          </div>
          <div className="stepBody">
            ยืนตรงจุดที่อยากให้ NPC ยืน จดพิกัด แล้ว:
            <span className="cmd">/gm-mc-set-city-clerk x:&lt;X&gt; y:&lt;Y&gt; z:&lt;Z&gt; direction:&lt;เหนือ|ใต้|ตะวันออก|ตะวันตก&gt;</span>
            NPC จะหันหาผู้เล่นที่เข้าใกล้ — ผู้เล่นคลิกขวาเพื่อซื้อตั๋วไปเมืองอื่น
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">
            ปรับ Protection เมือง <span className="badgeGame">IN-GAME</span>
          </div>
          <div className="stepBody">
            ระบบตั้งค่าพื้นฐานให้แล้ว แต่ปรับเองได้ตลอด เช่น:
            <span className="cmd">{`/rg flag <เมือง> use allow                 # ให้คนนอกใช้ประตู/ปุ่ม
/rg flag <เมือง> greeting "ยินดีต้อนรับ"   # ข้อความต้อนรับ
/rg addmember <เมือง> <ผู้เล่น>            # เพิ่มสมาชิกเมือง (build ได้)`}</span>
          </div>
        </li>
      </ol>

      <div className="note noteGold">
        ✅ <strong>Checklist หลังได้เป็น Lord:</strong> ตั้ง warp รถไฟ → วาง
        Ticket Clerk → ปรับ flags เมือง → ตั้งข้อความ greeting/farewell →
        ลงพิกัดเมืองใน <code>#แผนที่อาณาจักร</code> → ประชาสัมพันธ์เมือง
      </div>

      <h2 className="docH2" id="rail">🚂 ระบบรถไฟของเมือง</h2>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>คำสั่ง (Discord)</th>
              <th>ทำอะไร</th>
              <th>หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>/gm-mc-set-city-warp x y z [title]</code></td>
              <td>ตั้ง/ย้ายจุดที่ผู้โดยสารมาลง</td>
              <td>เปลี่ยนได้ตลอด • <code>title</code> เปลี่ยนชื่อในเมนูตั๋วด้วย</td>
            </tr>
            <tr>
              <td><code>/gm-mc-set-city-clerk x y z direction</code></td>
              <td>วาง/ย้าย NPC ขายตั๋ว</td>
              <td>1 Clerk ต่อเมือง — รันซ้ำ = ย้ายตำแหน่ง</td>
            </tr>
            <tr>
              <td><code>/gm-mc-remove-city-clerk x z</code></td>
              <td>ลบ NPC ขายตั๋ว</td>
              <td>ระบุพิกัดในเขตเมือง</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="note">
        💡 เมืองของคุณจะโผล่ในเมนูตั๋วของทุกสถานีอัตโนมัติ —
        ราคาตั๋วคำนวณตามระยะทางโดยระบบ (50–1,500 A) ไม่ต้องตั้งเอง •
        การวาง Clerk ในเมืองคุณ = ผู้เล่นในเมืองมีขากลับ/เดินทางต่อได้
      </div>

      <h2 className="docH2" id="region">🗺️ จัดการเขตเมือง (WorldGuard)</h2>
      <p className="docP">
        Lord จัดการได้เฉพาะ region ที่ตัวเองเป็นเจ้าของ —
        คำสั่งทั้งหมดใช้ในเกม:
      </p>
      <span className="cmd">{`/rg info <เมือง>                       # ดูข้อมูล region + flags ทั้งหมด
/rg flag <เมือง> <flag> <ค่า>          # ตั้งค่า flag
/rg flag <เมือง> <flag>                # ลบ flag (กลับ default)
/rg addmember <เมือง> <ผู้เล่น>        # เพิ่มสมาชิก (build ในเมืองได้)
/rg removemember <เมือง> <ผู้เล่น>     # ถอดสมาชิก
/rg setpriority <เมือง> <ตัวเลข>       # ความสำคัญ region (default 10)
/rg teleport <เมือง>                   # teleport ไป region ตัวเอง`}</span>

      <h3 className="docH3">Flags ที่ใช้บ่อย</h3>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>Flag</th>
              <th>ค่า</th>
              <th>ผล</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>build</code></td><td><code>deny</code> (default)</td><td>คนนอกวาง/ทุบบล็อกไม่ได้</td></tr>
            <tr><td><code>pvp</code></td><td><code>deny</code> (default)</td><td>ปิด PvP ในเมือง</td></tr>
            <tr><td><code>use</code></td><td><code>allow</code></td><td>คนนอกใช้ประตู/ปุ่ม/คันโยกได้</td></tr>
            <tr><td><code>chest-access</code></td><td><code>deny</code></td><td>กันคนนอกเปิดหีบ</td></tr>
            <tr><td><code>mob-spawning</code></td><td><code>deny</code></td><td>ปิดการเกิด mob ธรรมชาติ</td></tr>
            <tr><td><code>creeper-explosion</code></td><td><code>deny</code></td><td>กัน Creeper ระเบิดในเมือง</td></tr>
            <tr><td><code>fire-spread</code></td><td><code>deny</code></td><td>กันไฟลาม</td></tr>
            <tr><td><code>greeting</code></td><td><code>&quot;ข้อความ&quot;</code></td><td>ข้อความต้อนรับเมื่อเข้าเขตเมือง</td></tr>
            <tr><td><code>farewell</code></td><td><code>&quot;ข้อความ&quot;</code></td><td>ข้อความเมื่อออกจากเมือง</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="docH2" id="worldedit">🧱 WorldEdit / FAWE</h2>
      <p className="docP">
        Lord ใช้ WorldEdit ได้เต็มรูปแบบ{" "}
        <strong>ภายในเขตเมืองตัวเองเท่านั้น</strong> — ถ้าสั่งนอกเขตจะถูกระบบยกเลิก
        (&quot;Outside allowed region&quot;)
      </p>
      <span className="cmd">{`//wand                  # รับขวานเลือกพื้นที่ (ซ้าย=pos1, ขวา=pos2)
//pos1  //pos2          # ตั้งจุดเลือกจากตำแหน่งที่ยืน
//expand <n> <ทิศ>      # ขยายพื้นที่เลือก
//set <block>           # เปลี่ยนทุกบล็อกในพื้นที่
//replace <เก่า> <ใหม่>  # แทนที่บล็อกเฉพาะชนิด
//copy  //paste         # คัดลอก / วาง
//rotate <องศา>         # หมุน clipboard
//undo  //redo          # ย้อนกลับ / ทำซ้ำ
//drain <radius>        # ระบายน้ำ/ลาวา
//smooth                # ปรับพื้นดินให้เรียบ`}</span>

      <h2 className="docH2" id="npc">🧑‍🌾 NPC (Citizens)</h2>
      <p className="docP">
        Lord สร้าง NPC ได้ — ใช้ตกแต่งเมือง ทำคนนำทาง ผูกกับ quest ฯลฯ
      </p>
      <span className="cmd">{`/npc create <ชื่อ>              # สร้าง NPC ตรงที่ยืน
/npc select                    # เลือก NPC ที่ใกล้ที่สุด
/npc type <ประเภท>             # เปลี่ยนร่าง (villager, cat, ...)
/npc skin <username>           # ใช้ skin ของผู้เล่น
/npc rename <ชื่อใหม่>          # เปลี่ยนชื่อ
/npc move                      # ย้ายมาตรงที่ยืน
/npc lookclose                 # หันหาผู้เล่นที่เข้าใกล้
/npc command add --player <คำสั่ง>   # คลิกขวาแล้วรันคำสั่งในนามผู้เล่น
/npc remove                    # ลบ NPC`}</span>
      <div className="note">
        💡 สิทธิ์ NPC เป็นแบบ server-wide (Crown เชื่อใจ Lord) —
        โปรดใช้ในเขตเมืองตัวเองหรือพื้นที่ที่ได้รับอนุญาตเท่านั้น
      </div>

      <h2 className="docH2" id="quests">📜 Quests</h2>
      <p className="docP">
        Lord สร้าง quest ของเมืองตัวเองได้ผ่าน Quest Editor — ตั้งเงื่อนไข
        ภารกิจ (ฆ่า mob / เก็บของ / ไปสถานที่ / คุยกับ NPC) และรางวัล
        (ไอเทม / เงิน) ได้เอง
      </p>
      <span className="cmd">{`/quests editor          # เปิด Quest Editor
/quests list            # ดู quest ทั้งหมด
/quests stats <ผู้เล่น>  # ดูสถิติ quest ของผู้เล่น`}</span>

      <h3 className="docH3">โบนัส: ประตูมิติ Nether</h3>
      <p className="docP">
        Lord สร้างประตู Nether ได้ (ผู้เล่นทั่วไปถูกระบบบล็อก) — ก่อกรอบ
        Obsidian แล้วจุดด้วย Flint &amp; Steel ตามปกติ
      </p>

      <h2 className="docH2" id="limits">🚫 สิ่งที่ Lord ทำไม่ได้ (สงวนให้ Crown)</h2>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>การกระทำ</th>
              <th>เหตุผล</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>สร้าง/ขยาย region เอง (<code>/rg define</code>, <code>/rg redefine</code>)</td><td>กันเขตทับซ้อน — ต้องผ่านระบบ claim + Crown อนุมัติ</td></tr>
            <tr><td>จัดการ region ของเมืองอื่น</td><td>อธิปไตยจำกัดเฉพาะเมืองตนเอง</td></tr>
            <tr><td>WorldEdit นอกเขตเมืองตัวเอง</td><td>ระบบจำกัดอัตโนมัติ</td></tr>
            <tr><td>แก้ยศ/สิทธิ์ผู้เล่น (LuckPerms, op)</td><td>สงวนสิทธิ์ระดับเซิร์ฟเวอร์</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="docH2" id="cheatsheet">⌨️ ตารางคำสั่ง Lord (Cheat Sheet)</h2>

      <h3 className="docH3">Discord Commands</h3>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>คำสั่ง</th>
              <th>พารามิเตอร์บังคับ</th>
              <th>ไม่บังคับ</th>
              <th>ทำอะไร</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>/gm-mc-claim-city</code></td><td>name, points</td><td>y, display</td><td>ขอเปิดเมืองใหม่</td></tr>
            <tr><td><code>/gm-mc-set-city-warp</code></td><td>x, y, z</td><td>title</td><td>ตั้ง/ย้ายจุดลงรถไฟ</td></tr>
            <tr><td><code>/gm-mc-set-city-clerk</code></td><td>x, y, z, direction</td><td>—</td><td>วาง/ย้าย NPC ขายตั๋ว</td></tr>
            <tr><td><code>/gm-mc-remove-city-clerk</code></td><td>x, z</td><td>—</td><td>ลบ NPC ขายตั๋ว</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="docH3">In-Game Commands</h3>
      <div className="docTableWrap">
        <table className="docTable">
          <thead>
            <tr>
              <th>คำสั่ง</th>
              <th>ทำอะไร</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>/rg info | flag | addmember | removemember</code></td><td>จัดการเขตเมือง</td></tr>
            <tr><td><code>{"//set //replace //copy //paste ..."}</code></td><td>WorldEdit ในเขตเมือง</td></tr>
            <tr><td><code>/npc create | type | skin | command ...</code></td><td>จัดการ NPC</td></tr>
            <tr><td><code>/quests editor</code></td><td>สร้าง/แก้ quest</td></tr>
          </tbody>
        </table>
      </div>

      <div className="note noteGold">
        🏛️ Lord ทุกคนมีห้อง Discord เฉพาะ: <code>#สภาขุนนาง</code>{" "}
        (ประสานงานระหว่าง Lord), <code>#แผนที่อาณาจักร</code> (ลงพิกัดเมือง),{" "}
        <code>#สารถึงขุนนาง</code> (รับเรื่องจากชาวเมือง) และห้องเสียง{" "}
        <code>ห้องขุนนาง</code>
      </div>

      <div className="guideBackRow">
        <Link className="btn btnGhost" href="/guide/">← คู่มือทั้งหมด</Link>
        <Link className="btn btnGhost" href="/guide/player/">คู่มือผู้เล่น</Link>
      </div>
    </>
  );
}
