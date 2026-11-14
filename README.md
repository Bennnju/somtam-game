#  ส้มตำข้ามภพ (Som Tam Across Realms)

เกมทำร้านส้มตำ 2D บนเว็บ — รับออเดอร์ 2 คิวพร้อมกัน ตำตามใจ ลูกค้าปากจัด 14 นิสัย
เอฟเฟกต์ตามเครื่องปรุง ระบบด่ากลับ และฉากท้าต่อยพร้อมอาวุธ 4 ชิ้น

## เล่น
เปิด `index.html` ในเบราว์เซอร์ได้เลย (ไม่ต้องมีเซิร์ฟเวอร์) รองรับทั้งคอมและมือถือ

## โครงสร้าง
| ไฟล์ | หน้าที่ |
|---|---|
| `src/head.html` | `<head>` + CSS ทั้งหมด |
| `src/defs.html` | SVG gradient ที่ใช้ร่วมกัน |
| `src/body.html` | โครง HTML ของฉาก, ป๊อปอัป, ฉากต่อย, ร้านอาวุธ |
| `src/art.js` | ภาพวัตถุดิบ (SVG) + เมนู |
| `src/fight.js` | อาวุธ, ฉากต่อย, ร้านอาวุธ |
| `src/game.js` | ลูกค้า, ออเดอร์, การตำ, ให้คะแนน, รีวิว, วงจรวัน |
| `build.sh` | รวม `src/` เป็น `index.html` ไฟล์เดียว |

แก้ไฟล์ใน `src/` แล้วรัน `./build.sh` (Windows ใช้ Git Bash) ก่อน commit ทุกครั้ง

## Deploy
- **itch.io**: New project → Kind = HTML → อัปโหลด `index.html` → ติ๊ก *This file will be played in the browser* และ *Mobile friendly*
- **GitHub Pages**: Settings → Pages → Deploy from branch `main` / root
- **Netlify Drop**: ลากโฟลเดอร์ที่มี `index.html` ไปที่ app.netlify.com/drop

## เครดิต
- ฟอนต์ Mitr, Sarabun (Google Fonts, SIL Open Font License)
- โค้ดและภาพ SVG สร้างร่วมกับ AI (Claude)
