import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "คู่มือ Antlia Minecraft Server — Guides",
  description:
    "คู่มือเข้าเล่น Antlia Minecraft Server ทั้ง PC และมือถือ, คู่มือผู้เล่นฉบับละเอียด (อาชีพ เศรษฐกิจ Rank รถไฟ) และคู่มือ Lord เจ้าผู้ครองนคร",
  alternates: { canonical: `${SITE_URL}/guide/` },
};

export default function GuideHub() {
  return (
    <>
      <div className="guideHero">
        <div className="guideKicker">ANTLIA GUIDES</div>
        <h1 className="guideTitle">คู่มือ Antlia Server</h1>
        <p className="guideLead">
          ทุกอย่างที่ต้องรู้เกี่ยวกับการเล่นบน Antlia — ตั้งแต่เข้าเกมครั้งแรก
          จนถึงการปกครองนครของตัวเอง
        </p>
      </div>

      <div className="guideGrid">
        <Link className="guideCard" href="/guide/getting-started/">
          <div className="guideCardIcon">🎮</div>
          <div className="guideCardTitle">เริ่มเล่นครั้งแรก</div>
          <div className="guideCardDesc">
            วิธีเข้าเซิร์ฟเวอร์ทั้ง PC (Java) และมือถือ/Tablet (Bedrock)
            ขั้นตอนสมัคร ยืนยันตัวตนใน Discord จนถึง login สำเร็จ
          </div>
          <div className="guideCardCta">เริ่มอ่าน →</div>
        </Link>

        <Link className="guideCard" href="/guide/player/">
          <div className="guideCardIcon">📖</div>
          <div className="guideCardTitle">คู่มือผู้เล่น (Reference)</div>
          <div className="guideCardDesc">
            ระบบทั้งหมดแบบละเอียด — เงิน Antlia Coins, อาชีพทั้ง 9, Rank,
            ร้านค้า, รถไฟเดินทางระหว่างเมือง และคำสั่งทุกตัว
          </div>
          <div className="guideCardCta">เปิด Reference →</div>
        </Link>

        <Link className="guideCard" href="/guide/lord/">
          <div className="guideCardIcon">🛡️</div>
          <div className="guideCardTitle">คู่มือ Lord — เจ้าผู้ครองนคร</div>
          <div className="guideCardDesc">
            สำหรับผู้ปกครองเมือง — วิธีขอเปิดเมือง, จัดการเขตแดน, WorldEdit,
            NPC, Quest และระบบรถไฟของเมืองคุณ
          </div>
          <div className="guideCardCta">เปิดคู่มือ Lord →</div>
        </Link>
      </div>

      <div className="note" style={{ marginTop: 26 }}>
        มีคำถามเพิ่มเติม? ถามได้ใน Discord ห้อง <code>#minecraft-chat</code>{" "}
        — ทีมงานและเพื่อนผู้เล่นยินดีช่วยเสมอ
      </div>
    </>
  );
}
