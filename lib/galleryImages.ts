// lib/galleryImages.ts
export type WorldMoment = {
  id: number;
  thumb: string; // 800x450
  full: string;  // 1600x900
  title: string;
  description: string;
  alt: string;
};

const CAPTIONS: Record<number, { title: string; description: string; alt: string }> = {
  1:  { title: "Lantern Courtyard", description: "ลานหิน-ไม้ที่สว่างด้วยแสงโคมไฟ—โทนเมืองแฟนตาซีแบบอยู่จริง.", alt: "Lantern-lit medieval courtyard in Antlia" },
  2:  { title: "Inner Keep", description: "มุมภายในกำแพงเมือง โคมไฟ+ระเบียงไม้ ทำให้กลางคืนดูอบอุ่นมาก.", alt: "Inside the keep with wooden balconies and lanterns" },
  3:  { title: "Nightfall Overview", description: "ภาพรวมเมืองยามค่ำ—สะพาน ฟาร์ม และแสงไฟที่วางเป็นระบบ.", alt: "Night aerial view of Antlia with bridge and farms" },
  4:  { title: "Lakeside District", description: "ริมทะเลสาบกับหอคอยและแสงไฟสะท้อนน้ำ—บรรยากาศสงบแต่อลังการ.", alt: "Lakeside view with tower and city lights" },
  5:  { title: "Castle at Night", description: "ปราสาทส่องแสงในความมืด—ฟีล 'safe home' ของเมืองหลัก.", alt: "Castle exterior at night with lantern path" },
  6:  { title: "Dusk Approach", description: "ทางเดินขึ้นปราสาทช่วงฟ้าเริ่มมืด—cinematic แบบหนังเลย.", alt: "Approach path to the castle at dusk" },
  7:  { title: "Golden Hour Keep", description: "แสงเย็นกระทบกำแพงหิน—เมืองดูมีชีวิตและมีสเกล.", alt: "Golden hour view of castle and nearby buildings" },
  8:  { title: "Clocktower Garden", description: "หอนาฬิกาในโซนสวน/ทางเดิน โคมไฟสีฟ้าเพิ่มความแฟนตาซี.", alt: "Clocktower with garden paths and lanterns" },
  9:  { title: "Portal Monument", description: "อนุสาวรีย์พอร์ทัลเหมือนจุดพิธีกรรมของโลก—ตัดกับสถาปัตย์ใหญ่ไกล ๆ.", alt: "Large portal monument with purple core" },
  10: { title: "Main Street to the Clock", description: "ทางหลักสู่หอนาฬิกา—มุมที่บอกว่าเมืองนี้ถูกออกแบบมาเพื่อเดินจริง.", alt: "Main street leading to the clocktower" },
  11: { title: "Clocktower Close-up", description: "ดีเทลงานหอคอยชัด ๆ—โทน medieval ผสมความเนี้ยบแบบเมืองหลัก.", alt: "Close-up of the clocktower structure" },
  12: { title: "Village Paths", description: "โซนชุมชน/ฟาร์ม ทางเดินคมกริบ เขียวสด—อยู่ยาวได้สบาย.", alt: "Village paths with greenery and bamboo" },
  13: { title: "Ritual Hill", description: "พอร์ทัลตั้งบนเนินท่ามกลางดอกไม้—เหมือนจุดศูนย์รวมกิจกรรมของผู้เล่น.", alt: "Portal monument on a hill with flowers" },
  14: { title: "Clocktower Skyline", description: "หอคอยตัดกับท้องฟ้า—แลนด์มาร์กที่เห็นไกลและจำได้ทันที.", alt: "Clocktower rising into the bright sky" },
  15: { title: "Gate Tower", description: "หอคอยประตูเมือง—ฟีล checkpoint ก่อนเข้าโซนสำคัญ.", alt: "Stone gate tower entrance" },
  16: { title: "Blossom Avenue", description: "ถนน/สะพานข้างซากุระ—โซนนี้ให้ฟีลญี่ปุ่นนิด ๆ แต่ยังเข้ากับโลกหลัก.", alt: "Bridge avenue beside cherry blossom trees" },
  17: { title: "Town Core", description: "หอนาฬิกา + ฟาร์ม + พอร์ทัลในเฟรมเดียว—บอกตัวตนโลก Antlia ชัดมาก.", alt: "Clocktower with town core and portal in the distance" },
  18: { title: "Symmetry Walk", description: "มุมสะพานสมมาตรพาเข้าหอคอย—สวยแบบโปสเตอร์เกม.", alt: "Symmetric bridge view leading to the clocktower" },
  19: { title: "Rooftops & Clock", description: "บ้านชุมชนคู่กับหอคอย—ให้ฟีลเมืองที่คนอยู่จริง ไม่ใช่โชว์อย่างเดียว.", alt: "Village rooftops near the clocktower" },
  20: { title: "Cherry Bridge", description: "สะพานยาวข้างซากุระ—จุดเดินเล่น/ถ่ายรูปที่ชุมชนต้องชอบ.", alt: "Long bridge with cherry blossom trees" },
  21: { title: "Sunflare Tower", description: "มุมเงยหอคอยกับแสงแดด—ภาพนี้โหดมาก เหมือน key art.", alt: "Low-angle tower shot with sun flare" },
  22: { title: "Market Square", description: "จัตุรัสเมือง โคมไฟ ทางเดิน และฉากหลังเป็นสถาปัตย์ใหญ่—เมืองมีเลเยอร์.", alt: "Town square with paths and distant grand building" },
  23: { title: "Cathedral Viewpoint", description: "มุมมองข้ามน้ำไปยังอาคารใหญ่—ให้ความรู้สึก 'เมืองหลวง' ของโลก.", alt: "Viewpoint to a grand cathedral across the water" },
  24: { title: "Reflection Lake", description: "เงาสะท้อนบนผิวน้ำกับสถาปัตย์ใหญ่—ภาพนี้ขายโลกได้เลย.", alt: "Cathedral reflected on the lake surface" },
  25: { title: "Road to the Tower", description: "ทางเดินผ่านต้นไม้สู่หอคอย—โทนเมืองสงบ แต่มีสเกลด้านหลัง.", alt: "Path leading toward a tower through trees" },
  26: { title: "Lantern Causeway", description: "สะพานโคมไฟเส้นยาว—นำสายตาไปสุดขอบฟ้าแบบ cinematic.", alt: "Long lantern-lit bridge at sunrise" },
  27: { title: "Golden Bridge", description: "แสงเย็น+หมอกบาง ๆ—สะพานนี้คือ signature shot ของ Antlia.", alt: "Golden hour bridge with warm lanterns" },
  28: { title: "Twilight Run", description: "ฟ้าค่ำกับไฟโคม—เหมือนฉากก่อนการผจญภัยเริ่ม.", alt: "Twilight bridge with lanterns and distant tower" },
  29: { title: "Sunset Horizon", description: "เส้นทางไปพระอาทิตย์ตก—ปิดชุดภาพได้อย่างสมบูรณ์แบบ.", alt: "Sunset vanishing point on the lantern bridge" },
};

export const WORLD_MOMENTS: WorldMoment[] = Array.from({ length: 29 }, (_, i) => {
  const id = i + 1;
  const n = String(id).padStart(2, "0");
  const c = CAPTIONS[id];

  return {
    id,
    thumb: `world-moment-${n}-800x450.jpg`,
    full: `world-moment-${n}-1600x900.jpg`,
    title: c.title,
    description: c.description,
    alt: c.alt,
  };
});
