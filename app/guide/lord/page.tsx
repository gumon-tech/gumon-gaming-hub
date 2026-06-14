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
          <a className="tocChip" href="#treasury">💰 คลังเมือง</a>
          <a className="tocChip" href="#quests">📜 สร้างเควส</a>
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

      <div className="note">
        🧱 <strong>ทางลัดในเกม:</strong> แทนที่จะพิมพ์พิกัดมุมใน Discord — เลือกพื้นที่ด้วย WorldEdit
        (<code>//sel poly</code> หรือ <code>//pos1 //pos2</code>) แล้วพิมพ์ <code>/claimcity &lt;ชื่อ&gt;</code> ในเกม
        ระบบจะส่งคำขอไปให้ Crown อนุมัติบน Discord ให้อัตโนมัติ • ตั้ง warp/clerk ก็ทำในเกมได้ที่จุดที่ยืน
        (<code>/setcitywarp</code> <code>/setcityclerk</code>)
      </div>
      <div className="note noteGold">
        ✅ <strong>Checklist หลังได้เป็น Lord:</strong> ตั้ง warp รถไฟ → วาง
        Ticket Clerk → ปรับ flags เมือง → ตั้งข้อความ greeting/farewell → ตั้งภาษี
        (<code>/setcitytax</code> <code>/setshoptax</code>) → ลงพิกัดเมืองใน{" "}
        <code>#แผนที่อาณาจักร</code> → ประชาสัมพันธ์เมือง
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
        <strong>FAWE</strong> (FastAsyncWorldEdit) คือเครื่องมือก่อสร้างทีละจำนวนมาก
        — เลือกพื้นที่แล้วสั่งคำสั่งเดียว บล็อกหลายหมื่นก้อนเกิดทันที จุดสำคัญ:
      </p>
      <ul className="docList">
        <li><strong>ฟรี ไม่กินไอเทมในกระเป๋า</strong> — <code>//set stone</code> เสกหินเต็มพื้นที่โดยไม่ต้องมีหินเลย (สร้างโครงเมืองไม่ต้องซื้อวัสดุ)</li>
        <li><strong>ใช้ได้เฉพาะในเขตเมืองตัวเอง</strong> — สั่งนอกเขตจะถูกยกเลิก (&quot;Outside allowed region&quot;)</li>
        <li>ทุกคำสั่งขึ้นต้นด้วย <code>//</code> (สแลชสองอัน) — ส่วน brush ใช้ <code>/</code> เดียว</li>
      </ul>

      <figure className="docFigure" style={{ margin: "1.25rem 0" }}>
        <svg
          width="100%"
          viewBox="0 0 680 250"
          role="img"
          aria-label="หลักการ FAWE: เลือกพื้นที่ด้วย wand แล้วสั่งสร้างได้หลายรูปทรง เช่น //set //walls //sphere //pyramid"
          style={{ display: "block" }}
        >
          <defs>
            <marker id="faweArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#7f93b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
          <rect x="1" y="1" width="678" height="248" rx="14" fill="rgba(15,23,39,0.55)" stroke="#1b2a44" />
          <text x="22" y="34" fill="#f1c40f" fontSize="17" fontWeight="500">เลือกพื้นที่ครั้งเดียว → สั่งสร้างได้หลายรูปทรง</text>
          <text x="22" y="56" fill="#9fb3d1" fontSize="13">ขั้น 1 — เลือกมุมตรงข้าม 2 จุดด้วย wand</text>

          <polygon points="52,128 82,106 172,106 142,128" fill="#28395a" stroke="#3b5680" />
          <polygon points="142,128 172,106 172,166 142,188" fill="#1f2d44" stroke="#3b5680" />
          <rect x="52" y="128" width="90" height="60" fill="#22324d" stroke="#3b5680" />
          <circle cx="52" cy="188" r="6" fill="#f1c40f" />
          <circle cx="172" cy="106" r="6" fill="#f1c40f" />
          <text x="18" y="208" fill="#9fb3d1" fontSize="12">pos1</text>
          <text x="162" y="100" fill="#9fb3d1" fontSize="12">pos2</text>

          <line x1="190" y1="147" x2="246" y2="147" stroke="#7f93b3" strokeWidth="2" markerEnd="url(#faweArrow)" />
          <text x="246" y="56" fill="#9fb3d1" fontSize="13">ขั้น 2 — สั่ง 1 คำสั่ง</text>

          <rect x="262" y="108" width="70" height="70" fill="#60a5fa" />
          <text x="297" y="200" fill="#d7e7ff" fontSize="13" textAnchor="middle">//set</text>
          <text x="297" y="218" fill="#9fb3d1" fontSize="11" textAnchor="middle">เต็มก้อน</text>

          <g fill="#60a5fa">
            <rect x="368" y="108" width="70" height="14" />
            <rect x="368" y="164" width="70" height="14" />
            <rect x="368" y="108" width="14" height="70" />
            <rect x="424" y="108" width="14" height="70" />
          </g>
          <text x="403" y="200" fill="#d7e7ff" fontSize="13" textAnchor="middle">//walls</text>
          <text x="403" y="218" fill="#9fb3d1" fontSize="11" textAnchor="middle">เฉพาะผนัง</text>

          <circle cx="513" cy="143" r="37" fill="#60a5fa" />
          <text x="513" y="200" fill="#d7e7ff" fontSize="13" textAnchor="middle">//sphere</text>
          <text x="513" y="218" fill="#9fb3d1" fontSize="11" textAnchor="middle">ทรงกลม</text>

          <polygon points="623,108 585,178 661,178" fill="#60a5fa" />
          <text x="623" y="200" fill="#d7e7ff" fontSize="13" textAnchor="middle">//pyramid</text>
          <text x="623" y="218" fill="#9fb3d1" fontSize="11" textAnchor="middle">พีระมิด</text>

          <text x="22" y="240" fill="#7f93b3" fontSize="12">เกิดทันที ไม่กินไอเทม · พลาดแล้วพิมพ์ //undo ย้อนได้</text>
        </svg>
        <figcaption className="docP" style={{ fontSize: "0.85rem", opacity: 0.8, marginTop: "0.4rem" }}>
          หลักการ FAWE — เลือกพื้นที่ที่อยากได้ก่อน แล้วเลือกได้ว่าจะให้บล็อกออกมาเป็นรูปทรงไหน
        </figcaption>
      </figure>

      <h3 className="docH3">ขั้นที่ 1 — เลือกพื้นที่ก่อนเสมอ</h3>
      <span className="cmd">{`//wand              # รับขวานเลือกพื้นที่ (คลิกซ้าย=pos1, คลิกขวา=pos2)
//pos1  //pos2      # ตั้งจุดเลือกจากตำแหน่งที่ยืน (ไม่ต้องใช้ขวาน)
//sel  //desel      # ดู / ยกเลิก พื้นที่ที่เลือก
//expand <n> <ทิศ>  # ขยายพื้นที่เลือก (//contract = หด)`}</span>

      <h3 className="docH3">เติม / แทนที่ / ขึ้นโครง</h3>
      <span className="cmd">{`//set <block>          # เติมเต็มพื้นที่ (พื้น/ฐานเมือง)
//replace <เก่า> <ใหม่>  # แทนเฉพาะบล็อกชนิดเดียว
//walls <block>        # สร้างแค่ 4 ด้านข้าง (กำแพง/ตึก)
//faces <block>        # 4 ด้าน + พื้น + เพดาน (กล่องปิด)
//hollow               # ควักไส้ในให้กลวง (ตึกข้างในว่าง)
//overlay <block>      # โปะทับด้านบนบล็อกเดิม (ปูหญ้าบนภูเขา)`}</span>

      <h3 className="docH3">รูปทรงสำเร็จรูป (ยืนตรงจุดศูนย์กลางแล้วสั่ง)</h3>
      <span className="cmd">{`//sphere <block> <รัศมี>      # ทรงกลม/โดม (ใส่ -h = กลวง)
//cyl <block> <รัศมี> <สูง>    # ทรงกระบอก/หอคอย (//hcyl = กลวง)
//pyramid <block> <ขนาด>      # พีระมิด/หลังคา
//line <block>   //curve      # เส้นตรง / เส้นโค้ง (ขอบถนน/ราง)`}</span>

      <h3 className="docH3">คัดลอก–วาง &amp; ทำซ้ำ</h3>
      <span className="cmd">{`//copy   //paste       # คัดลอกสิ่งที่เลือก แล้วแปะที่อื่น
//rotate <องศา>  //flip  # หมุน / พลิก clipboard ก่อนวาง
//stack <n> <ทิศ>      # ทำซ้ำต่อกัน n ชุด (กำแพง/รั้ว/รางยาวๆ)
//move <n> <ทิศ>       # ย้ายสิ่งที่เลือก
//undo   //redo        # ย้อนกลับ / ทำซ้ำ (พลาดแล้วกู้ได้ทันที)`}</span>

      <h3 className="docH3">Brush — &quot;ปืนพ่นบล็อก&quot; (วาดสด ไม่ต้องเลือกพื้นที่)</h3>
      <p className="docP">
        Brush เปลี่ยนไอเทมในมือเป็นหัวพ่น เล็งแล้วคลิกขวาเพื่อสร้างตรงนั้น —
        เหมาะกับงานออร์แกนิก เช่น ภูเขา เนิน ตกแต่ง
      </p>
      <span className="cmd">{`/br sphere <block> <รัศมี>  # พ่นทรงกลม (ปั้นเนินเขา)
/br smooth <ขนาด>          # พ่นปรับผิวให้เรียบ
/mask <block>              # ล็อกให้ brush แก้เฉพาะบล็อกที่กำหนด
//drain <radius>           # ระบายน้ำ/ลาวารอบตัว`}</span>

      <h3 className="docH3">ลำดับงานจริงตอนสร้างเมือง</h3>
      <ol className="docList">
        <li>ปรับพื้น: เลือกพื้นที่เมือง → <code>//set grass_block</code></li>
        <li>กำแพง: เลือกแนวกำแพง → <code>//walls stone_bricks</code> → <code>//expand 6 up</code></li>
        <li>หอคอยมุม: ยืนกลางมุม → <code>//cyl stone_bricks 4 12</code> → ยอด <code>//pyramid stone_bricks 5</code></li>
        <li>ถนน: เลือกแนวถนน → <code>//set polished_andesite</code></li>
        <li>บ้านต้นแบบ: สร้าง 1 หลังด้วยมือ → <code>//copy</code> → ไปจุดอื่น <code>//paste</code> ซ้ำได้เรื่อยๆ</li>
        <li>พลาดตรงไหน → <code>//undo</code></li>
      </ol>
      <div className="note">
        💡 <strong>//undo คือเพื่อนที่ดีที่สุด</strong> — สั่งผิดเสกบล็อกพังเมือง
        พิมพ์ <code>//undo</code> ย้อนได้ทันที • คู่มือเต็มพร้อมภาพจริง:{" "}
        <a href="https://www.planetminecraft.com/blog/fawe-tutorial/" target="_blank" rel="noopener noreferrer">Planet Minecraft FAWE Tutorial</a>{" "}
        และ{" "}
        <a href="https://intellectualsites.gitbook.io/fastasyncworldedit/features/main-commands-and-permissions" target="_blank" rel="noopener noreferrer">คู่มือคำสั่งทางการ</a>
      </div>

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
        💡 จัดการ NPC ได้<strong>เฉพาะในเขตเมืองตัวเอง</strong> — ระบบบล็อกการสร้าง/แก้/ลบ NPC
        นอกเขตของคุณอัตโนมัติ (และคุณลบ NPC แปลกปลอมในเมืองตัวเองได้ แม้คนอื่นเป็นคนสร้าง)
      </div>

      <h2 className="docH2" id="treasury">💰 คลังเมือง &amp; เศรษฐกิจ</h2>
      <p className="docP">
        ทุกเมืองมี <strong>คลังเมือง (City Treasury)</strong> — กระเป๋ากลางของเมืองที่ใช้จ่าย
        รางวัลเควสให้ลูกเมือง. กฎเหล็ก: <strong>เงินในคลังถอนเข้ากระเป๋าตัวเองไม่ได้</strong> —
        ออกได้ทางเดียวคือจ่ายเป็นรางวัลเควส (กันเงินเฟ้อ + กันโกง)
      </p>

      <figure className="docFigure" style={{ margin: "1.25rem 0" }}>
        <svg width="100%" viewBox="0 0 680 210" role="img"
          aria-label="การไหลของเงินในคลังเมือง: รายรับเข้าคลัง แล้วออกเป็นรางวัลเควสเท่านั้น" style={{ display: "block" }}>
          <defs>
            <marker id="trArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#7f93b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
          <rect x="1" y="1" width="678" height="208" rx="14" fill="rgba(15,23,39,0.5)" stroke="#1b2a44" />
          <text x="22" y="30" fill="#f1c40f" fontSize="16" fontWeight="500">เงินเข้าคลัง → ออกเป็นรางวัลเควสเท่านั้น</text>

          <g fontSize="12">
            <rect x="20" y="48" width="150" height="26" rx="6" fill="rgba(52,211,153,0.12)" stroke="#2e7d5b" />
            <text x="30" y="65" fill="#d7e7ff">💠 Seed 100,000A</text>
            <rect x="20" y="80" width="150" height="26" rx="6" fill="rgba(52,211,153,0.12)" stroke="#2e7d5b" />
            <text x="30" y="97" fill="#d7e7ff">🪙 ภาษีเข้าเมือง</text>
            <rect x="20" y="112" width="150" height="26" rx="6" fill="rgba(52,211,153,0.12)" stroke="#2e7d5b" />
            <text x="30" y="129" fill="#d7e7ff">🏪 ภาษีร้านค้า + AStore</text>
            <rect x="20" y="144" width="150" height="26" rx="6" fill="rgba(52,211,153,0.12)" stroke="#2e7d5b" />
            <text x="30" y="161" fill="#d7e7ff">👑 Crown grant</text>
          </g>
          <line x1="174" y1="109" x2="258" y2="109" stroke="#7f93b3" strokeWidth="2" markerEnd="url(#trArrow)" />

          <rect x="262" y="74" width="150" height="70" rx="10" fill="rgba(241,196,15,0.12)" stroke="#f1c40f" />
          <text x="337" y="105" fill="#f1c40f" fontSize="22" textAnchor="middle">🏛️</text>
          <text x="337" y="128" fill="#f1c40f" fontSize="13" textAnchor="middle">คลังเมือง</text>

          <line x1="416" y1="109" x2="494" y2="109" stroke="#7f93b3" strokeWidth="2" markerEnd="url(#trArrow)" />
          <rect x="498" y="86" width="160" height="46" rx="10" fill="rgba(52,211,153,0.15)" stroke="#34d399" />
          <text x="578" y="107" fill="#34d399" fontSize="13" textAnchor="middle">📜 รางวัลเควส</text>
          <text x="578" y="123" fill="#9fb3d1" fontSize="11" textAnchor="middle">→ จ่ายผู้เล่น</text>

          <text x="262" y="186" fill="#e06c6c" fontSize="12">❌ ถอนเข้ากระเป๋า Lord ไม่ได้ — ไม่มีคำสั่งนั้นอยู่จริง</text>
        </svg>
        <figcaption className="docP" style={{ fontSize: "0.85rem", opacity: 0.8, marginTop: "0.4rem" }}>
          คลังเมืองเป็นทางเดียว — เงินเข้าได้หลายทาง แต่ออกได้เฉพาะเป็นรางวัลเควส (ไม่เข้ากระเป๋าตัวเอง)
        </figcaption>
      </figure>

      <h3 className="docH3">คลังเติมจากไหน</h3>
      <ul className="docList">
        <li><strong>Seed 100,000A</strong> ตอนเปิดเมือง (อัตโนมัติ)</li>
        <li><strong>ภาษีเข้าเมือง</strong> — เก็บคนนอกที่เดินข้ามเขตเข้าเมือง (ชาวเมือง + รถไฟจ่ายตอนซื้อตั๋ว)</li>
        <li><strong>ภาษีร้านค้า</strong> — % จากธุรกรรมร้านผู้เล่นในเมือง + commission เมื่อลูกเมืองซื้อจาก AStore</li>
        <li><strong>Crown grant</strong> — ขอเพิ่มทุนผ่าน Crown (ครั้งละ ≤ 100,000A)</li>
      </ul>

      <h3 className="docH3">คำสั่งคลัง &amp; ภาษี (Lord)</h3>
      <span className="cmd">{`/citytreasury              # ดูยอดคลัง + เรตภาษี ของเมืองที่ยืนอยู่
/setcitytax <จำนวน>        # ตั้งภาษีเข้าเมือง (0–50A, 0 = ปิด)
/setshoptax <%>            # ตั้งภาษีร้านค้าผู้เล่น (0–10%)`}</span>
      <div className="note">
        💡 ดูคลังจาก Discord ได้: <code>/gm-mc-city-treasury</code> (เห็นทุกเมืองที่คุณเป็นเจ้าของ) •
        โบนัสตอนเป็น Lord ครั้งแรก: <strong>25,000A + Starter Kit</strong> เข้ากระเป๋าส่วนตัว (ครั้งเดียวตลอดชีวิต)
      </div>

      <h2 className="docH2" id="quests">📜 สร้างเควสเมือง — Step by Step</h2>
      <p className="docP">
        Lord สร้างเควสให้เมืองตัวเองได้ โดยเควส<strong>ผูกกับ NPC</strong> ที่คุณวาง —
        ผู้เล่นต้องมา<strong>คลิกรับที่ NPC ตัวนั้นเท่านั้น</strong> รางวัลหักจากคลังเมือง
      </p>

      <figure className="docFigure" style={{ margin: "1.25rem 0" }}>
        <svg width="100%" viewBox="0 0 680 170" role="img"
          aria-label="วงจรเควสเมือง 5 ขั้น: Lord วาง NPC, ขอเปิดเควส, Crown อนุมัติ, ผู้เล่นรับที่ NPC, ได้รางวัลจากคลัง" style={{ display: "block" }}>
          <defs>
            <marker id="qArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#7f93b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
          <rect x="1" y="1" width="678" height="168" rx="14" fill="rgba(15,23,39,0.5)" stroke="#1b2a44" />
          <text x="22" y="28" fill="#f1c40f" fontSize="15" fontWeight="500">วงจรเควสเมือง — ผู้เล่นรับได้ที่ NPC เท่านั้น</text>

          <g>
            <rect x="14" y="44" width="110" height="86" rx="10" fill="rgba(15,23,39,0.7)" stroke="#1b2a44" />
            <circle cx="32" cy="62" r="11" fill="#f1c40f" /><text x="32" y="66" fill="#0b1220" fontSize="12" fontWeight="500" textAnchor="middle">1</text>
            <text x="69" y="86" fontSize="20" textAnchor="middle">🧑</text>
            <text x="69" y="108" fill="#d7e7ff" fontSize="11" textAnchor="middle">วาง NPC</text>
            <text x="69" y="122" fill="#9fb3d1" fontSize="10" textAnchor="middle">ในเมือง</text>

            <rect x="146" y="44" width="110" height="86" rx="10" fill="rgba(15,23,39,0.7)" stroke="#1b2a44" />
            <circle cx="164" cy="62" r="11" fill="#f1c40f" /><text x="164" y="66" fill="#0b1220" fontSize="12" fontWeight="500" textAnchor="middle">2</text>
            <text x="201" y="86" fontSize="20" textAnchor="middle">📜</text>
            <text x="201" y="108" fill="#d7e7ff" fontSize="11" textAnchor="middle">ขอเปิดเควส</text>
            <text x="201" y="122" fill="#9fb3d1" fontSize="10" textAnchor="middle">/requestquest</text>

            <rect x="278" y="44" width="110" height="86" rx="10" fill="rgba(15,23,39,0.7)" stroke="#1b2a44" />
            <circle cx="296" cy="62" r="11" fill="#f1c40f" /><text x="296" y="66" fill="#0b1220" fontSize="12" fontWeight="500" textAnchor="middle">3</text>
            <text x="333" y="86" fontSize="20" textAnchor="middle">👑</text>
            <text x="333" y="108" fill="#d7e7ff" fontSize="11" textAnchor="middle">Crown อนุมัติ</text>
            <text x="333" y="122" fill="#9fb3d1" fontSize="10" textAnchor="middle">สร้างอัตโนมัติ</text>

            <rect x="410" y="44" width="110" height="86" rx="10" fill="rgba(15,23,39,0.7)" stroke="#1b2a44" />
            <circle cx="428" cy="62" r="11" fill="#f1c40f" /><text x="428" y="66" fill="#0b1220" fontSize="12" fontWeight="500" textAnchor="middle">4</text>
            <text x="465" y="86" fontSize="20" textAnchor="middle">🧍</text>
            <text x="465" y="108" fill="#d7e7ff" fontSize="11" textAnchor="middle">รับที่ NPC</text>
            <text x="465" y="122" fill="#9fb3d1" fontSize="10" textAnchor="middle">คลิกขวา</text>

            <rect x="542" y="44" width="110" height="86" rx="10" fill="rgba(52,211,153,0.13)" stroke="#34d399" />
            <circle cx="560" cy="62" r="11" fill="#34d399" /><text x="560" y="66" fill="#0b1220" fontSize="12" fontWeight="500" textAnchor="middle">5</text>
            <text x="597" y="86" fontSize="20" textAnchor="middle">💰</text>
            <text x="597" y="108" fill="#34d399" fontSize="11" textAnchor="middle">ได้รางวัล</text>
            <text x="597" y="122" fill="#9fb3d1" fontSize="10" textAnchor="middle">จากคลัง</text>
          </g>
          <line x1="126" y1="87" x2="144" y2="87" stroke="#7f93b3" strokeWidth="2" markerEnd="url(#qArrow)" />
          <line x1="258" y1="87" x2="276" y2="87" stroke="#7f93b3" strokeWidth="2" markerEnd="url(#qArrow)" />
          <line x1="390" y1="87" x2="408" y2="87" stroke="#7f93b3" strokeWidth="2" markerEnd="url(#qArrow)" />
          <line x1="522" y1="87" x2="540" y2="87" stroke="#7f93b3" strokeWidth="2" markerEnd="url(#qArrow)" />
          <text x="22" y="158" fill="#7f93b3" fontSize="11">รับจากที่อื่น (/quests take จากไกล) = ระบบบล็อก — ต้องมาที่ NPC เท่านั้น</text>
        </svg>
        <figcaption className="docP" style={{ fontSize: "0.85rem", opacity: 0.8, marginTop: "0.4rem" }}>
          วงจรเควสเมือง — Lord วาง NPC → ขอเปิดเควส → Crown กดอนุมัติ (เควสสร้างอัตโนมัติ) → ผู้เล่นมารับที่ NPC → ได้รางวัลจากคลัง
        </figcaption>
      </figure>

      <ol className="stepList">
        <li className="step">
          <div className="stepTitle">วาง NPC &quot;กระดานเควส&quot; ในเมือง <span className="badgeGame">IN-GAME</span></div>
          <div className="stepBody">
            ยืนในเขตเมืองตัวเอง สร้าง NPC แล้วเลือกให้มันถูก select อยู่:
            <span className="cmd">{`/npc create QuestBoard      # สร้าง NPC (ได้เฉพาะในเขตเมืองคุณ)
/npc select                 # เลือก NPC ตัวนั้น (หรือคลิกที่ NPC)`}</span>
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">ขอเปิดเควส — ผูกกับ NPC ที่เลือก <span className="badgeGame">IN-GAME</span></div>
          <div className="stepBody">
            ระบุภารกิจแบบมีโครงสร้าง: <code>&lt;questId&gt; &lt;kill|break|place&gt; &lt;เป้าหมาย&gt; &lt;จำนวน&gt; &lt;รางวัล A&gt; [ชื่อ]</code>
            — ระบบจับ NPC ที่คุณเลือกไว้อัตโนมัติ:
            <span className="cmd">{`/requestquest zombiecull kill zombie 10 80 Clear the Undead
# kill mob: zombie · break/place block: เช่น IRON_ORE · รางวัล ≤ 200A หักจากคลัง`}</span>
            คำขอจะถูกส่งไปให้ Crown อนุมัติบน Discord อัตโนมัติ
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">Crown กดอนุมัติ — เควสถูกสร้างอัตโนมัติ <span className="badgeDiscord">CROWN</span></div>
          <div className="stepBody">
            Crown แค่กดปุ่ม <strong>อนุมัติ</strong> บน Discord → ระบบ<strong>สร้างเควส + เปิดใช้งานทันที</strong>
            (ไม่ต้องเข้า <code>/quests editor</code> เอง) ผูกกับ NPC + ตั้งรางวัลให้เสร็จ
            <br /><em>เงินรางวัล ≤ เพดาน 200A · ไม่มี command/permission reward (ระบบสร้างให้เฉพาะ kill/break/place + เงิน)</em>
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">ผู้เล่นมารับเควสที่ NPC <span className="badgeGame">PLAYER</span></div>
          <div className="stepBody">
            ลูกเมืองเดินมา<strong>คลิกขวา NPC กระดานเควส</strong> → รับเควส. รับจากที่อื่น (เช่น
            <code>/quests take</code> จากไกลๆ) <strong>ไม่ได้</strong> — ระบบบังคับให้รับที่ NPC ตัวนั้นเท่านั้น
          </div>
        </li>
        <li className="step">
          <div className="stepTitle">ทำสำเร็จ → คลังจ่ายรางวัลอัตโนมัติ</div>
          <div className="stepBody">
            เมื่อทำเควสจบ ระบบหักรางวัลจาก<strong>คลังเมือง</strong>แล้วจ่ายให้ผู้เล่น —
            ถ้าคลังไม่พอ เควสค้างไว้จนเติมคลัง (ไม่มีการพิมพ์เงินใหม่ — กันเงินเฟ้อ)
          </div>
        </li>
      </ol>
      <div className="note noteGold">
        🎯 ทางลัด: ขอเปิดเควสผ่าน Discord ได้ด้วย <code>/gm-mc-quest-request</code> (เลือก type/target/amount/reward
        เหมือนกัน แต่ไม่ผูก NPC — รับที่ไหนก็ได้) • Crown กดอนุมัติแล้วเควสถูกสร้างอัตโนมัติเหมือนกัน •
        flow ผูก NPC ในเกมเหมาะกับ &quot;กระดานเควสประจำเมือง&quot; (มีสัญลักษณ์เหนือหัว NPC) มากกว่า
      </div>

      <h3 className="docH3">เควสใหญ่หลายฉาก — Quest Builder (MMORPG)</h3>
      <p className="docP">
        อยากได้เควสเนื้อเรื่องหลายขั้น (หลาย stage) หรือหลายภารกิจในขั้นเดียว + รางวัลเป็นไอเทมด้วย —
        ใช้ <code>/questbuild</code> สร้างทีละขั้น (เลือก NPC ก่อน) แล้วค่อย submit:
      </p>
      <span className="cmd">{`/npc select                          # เลือก NPC กระดานเควสก่อน
/questbuild new dragonsaga ตำนานมังกร   # เริ่มสร้าง (ผูกกับ NPC)
/questbuild obj kill zombie 20         # objective ของ stage 1
/questbuild obj break iron_ore 10      # หลาย objective ใน stage เดียวได้
/questbuild stage                      # ขึ้น stage 2 (เนื้อเรื่องต่อ)
/questbuild obj craft diamond_sword 1
/questbuild money 150                  # รางวัลเงิน (≤200, หักคลัง)
/questbuild item diamond 2             # รางวัลไอเทม (มีราคาหักคลัง)
/questbuild daily                      # ทำซ้ำได้ทุก 24 ชม. (ถ้าต้องการ)
/questbuild show                       # ดูสรุป + เช็คว่าผ่านเกณฑ์ไหม
/questbuild submit                     # ส่ง Crown อนุมัติ → สร้างอัตโนมัติ`}</span>
      <div className="note">
        💡 ประเภท objective: <code>kill</code> <code>break</code> <code>place</code> <code>craft</code>{" "}
        <code>smelt</code> <code>tame</code> <code>fish</code> • เควสยิ่งรางวัลแพง ยิ่งต้องมี objective
        มากขึ้น (กันฟาร์มเงินคลัง) • ไอเทมรางวัลของแรงๆ (netherite/totem/shulker ฯลฯ) ใส่ไม่ได้
      </div>

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
            <tr><td><code>/claimcity &lt;ชื่อ&gt; [display]</code></td><td>จองเมืองจาก WorldEdit selection (//sel poly) → ส่ง Crown อนุมัติ</td></tr>
            <tr><td><code>/citytreasury</code></td><td>ดูยอดคลัง + เรตภาษีของเมืองที่ยืน</td></tr>
            <tr><td><code>/setcitytax &lt;จำนวน&gt;</code> · <code>/setshoptax &lt;%&gt;</code></td><td>ตั้งภาษีเข้าเมือง / ภาษีร้านค้า</td></tr>
            <tr><td><code>/setcitywarp</code> · <code>/setcityclerk</code> · <code>/removecityclerk</code></td><td>ตั้งจุดลงรถไฟ / วาง-ลบ NPC ขายตั๋ว (ที่ตำแหน่งที่ยืน)</td></tr>
            <tr><td><code>/requestquest &lt;id&gt; &lt;kill|break|place&gt; &lt;target&gt; &lt;n&gt; &lt;รางวัล&gt;</code></td><td>เควสด่วน 1 ภารกิจ ผูก NPC ที่เลือก → Crown อนุมัติ = สร้างเอง</td></tr>
            <tr><td><code>/questbuild &lt;new|obj|stage|money|item|daily|submit&gt;</code></td><td>สร้างเควสใหญ่หลายฉาก/หลายภารกิจ + รางวัลไอเทม (MMORPG)</td></tr>
            <tr><td><code>/rg info | flag | addmember | removemember</code></td><td>จัดการเขตเมือง</td></tr>
            <tr><td><code>{"//set //replace //copy //paste ..."}</code></td><td>WorldEdit ในเขตเมือง</td></tr>
            <tr><td><code>/npc create | select | type | skin | command ...</code></td><td>จัดการ NPC (ในเขตเมืองตัวเอง)</td></tr>
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
