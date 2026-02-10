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
  1:  { title: "Lantern Courtyard", description: "ลานหินและไม้ที่โอบล้อมด้วยแสงโคมไฟ อบอุ่นแบบเมืองแฟนตาซีที่มีชีวิตจริง.", alt: "Lantern-lit medieval courtyard in Antlia" },
  2:  { title: "Inner Keep", description: "มุมภายในกำแพงเมือง แสงไฟอ่อนสะท้อนระเบียงไม้ ให้ความรู้สึกปลอดภัยยามค่ำคืน.", alt: "Inside the keep with wooden balconies and lanterns" },
  3:  { title: "Nightfall Overview", description: "ภาพรวมของเมืองยามค่ำคืน สะพาน ฟาร์ม และแสงไฟที่ค่อย ๆ เผยตัวตนของ Antlia.", alt: "Night aerial view of Antlia with bridge and farms" },
  4:  { title: "Lakeside District", description: "แสงไฟจากเมืองสะท้อนผืนน้ำริมทะเลสาบ เงียบสงบและงดงามในแบบของมัน.", alt: "Lakeside view with tower and city lights" },
  5:  { title: "Castle at Night", description: "ปราสาทที่ส่องสว่างท่ามกลางความมืด เป็นหัวใจและบ้านของเมืองนี้.", alt: "Castle exterior at night with lantern path" },
  6:  { title: "Dusk Approach", description: "เส้นทางสู่ปราสาทในช่วงฟ้าเริ่มมืด แสงสุดท้ายของวันทำให้ทุกอย่างดูเหมือนฉากภาพยนตร์.", alt: "Approach path to the castle at dusk" },
  7:  { title: "Golden Hour Keep", description: "แสงเย็นแตะผิวกำแพงหิน เมืองทั้งเมืองดูมีชีวิตและกำลังหายใจ.", alt: "Golden hour view of castle and nearby buildings" },
  8:  { title: "Clocktower Garden", description: "หอนาฬิกาท่ามกลางสวนและทางเดิน โคมไฟสีฟ้าเพิ่มกลิ่นอายแฟนตาซีเบา ๆ.", alt: "Clocktower with garden paths and lanterns" },
  9:  { title: "Portal Monument", description: "พอร์ทัลกลางเมืองที่ให้ความรู้สึกเหมือนจุดเริ่มต้นของเรื่องราวมากมาย.", alt: "Large portal monument with purple core" },
  10: { title: "Main Street to the Clock", description: "ถนนสายหลักที่พาไปยังหอนาฬิกา ทุกก้าวเหมือนถูกออกแบบมาเพื่อการเดินจริง.", alt: "Main street leading to the clocktower" },
  11: { title: "Clocktower Close-up", description: "ดีเทลของหอนาฬิกาที่เผยงานสถาปัตยกรรมแบบคลาสสิกและมั่นคง.", alt: "Close-up of the clocktower structure" },
  12: { title: "Village Paths", description: "ทางเดินในเขตชุมชน รายล้อมด้วยความเขียวสด ให้บรรยากาศเรียบง่ายและเป็นมิตร.", alt: "Village paths with greenery and bamboo" },
  13: { title: "Ritual Hill", description: "พอร์ทัลบนเนินดอกไม้ มองแล้วเหมือนจุดศูนย์รวมของพลังและผู้คน.", alt: "Portal monument on a hill with flowers" },
  14: { title: "Clocktower Skyline", description: "หอนาฬิกาที่ตัดกับท้องฟ้า กลายเป็นเส้นขอบฟ้าที่จดจำได้ทันที.", alt: "Clocktower rising into the bright sky" },
  15: { title: "Gate Tower", description: "หอคอยประตูเมือง จุดเปลี่ยนผ่านก่อนเข้าสู่โลกภายใน.", alt: "Stone gate tower entrance" },
  16: { title: "Blossom Avenue", description: "ถนนข้างซากุระที่พริ้วไหว เติมความอ่อนโยนให้กับเมืองหลัก.", alt: "Bridge avenue beside cherry blossom trees" },
  17: { title: "Town Core", description: "หัวใจของ Antlia ที่ทุกองค์ประกอบมาบรรจบกันในเฟรมเดียว.", alt: "Clocktower with town core and portal in the distance" },
  18: { title: "Symmetry Walk", description: "สะพานสมมาตรที่นำสายตาไปสู่หอนาฬิกา อย่างกับโปสเตอร์โลกแฟนตาซี.", alt: "Symmetric bridge view leading to the clocktower" },
  19: { title: "Rooftops & Clock", description: "หลังคาบ้านเรียงรายกับหอนาฬิกา เมืองที่รู้สึกได้ว่ามีคนอาศัยอยู่จริง.", alt: "Village rooftops near the clocktower" },
  20: { title: "Cherry Bridge", description: "สะพานยาวข้างซากุระ จุดพักใจและมุมโปรดของใครหลายคน.", alt: "Long bridge with cherry blossom trees" },
  21: { title: "Sunflare Tower", description: "มุมเงยของหอคอยกับแสงอาทิตย์ ภาพที่ให้ความรู้สึกเหมือน key art.", alt: "Low-angle tower shot with sun flare" },
  22: { title: "Market Square", description: "จัตุรัสเมืองที่เต็มไปด้วยแสงไฟและมิติของสถาปัตยกรรม.", alt: "Town square with paths and distant grand building" },
  23: { title: "Cathedral Viewpoint", description: "มุมมองข้ามน้ำไปยังอาคารใหญ่ ให้บรรยากาศของเมืองหลวง.", alt: "Viewpoint to a grand cathedral across the water" },
  24: { title: "Reflection Lake", description: "เงาสะท้อนของสถาปัตยกรรมบนผืนน้ำ ภาพที่นิ่งและทรงพลัง.", alt: "Cathedral reflected on the lake surface" },
  25: { title: "Road to the Tower", description: "เส้นทางเงียบสงบที่มุ่งสู่หอคอย เมืองค่อย ๆ เผยสเกลในระยะไกล.", alt: "Path leading toward a tower through trees" },
  26: { title: "Lantern Causeway", description: "สะพานโคมไฟทอดยาว นำสายตาไปสู่ขอบฟ้าอย่างนุ่มนวล.", alt: "Long lantern-lit bridge at sunrise" },
  27: { title: "Golden Bridge", description: "แสงเย็นและหมอกบางบนสะพาน ภาพจำของ Antlia ในยามเช้า.", alt: "Golden hour bridge with warm lanterns" },
  28: { title: "Twilight Run", description: "ฟ้ายามค่ำกับแสงโคม เหมือนช่วงเวลาก่อนการเดินทางจะเริ่มต้น.", alt: "Twilight bridge with lanterns and distant tower" },
  29: { title: "Sunset Horizon", description: "เส้นทางสู่พระอาทิตย์ตก ปิดเรื่องราวของชุดภาพนี้อย่างสมบูรณ์.", alt: "Sunset vanishing point on the lantern bridge" },
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
