/* ---------- Customers (14 personalities) ---------- */
const SKINS=['#f2d0b4','#e8b892','#d9a07a','#c68a62','#a8714c','#8a5a3a'];
const PERS=[
 {id:'pa',w:3,title:'ป้าขี้วีน',names:['ป้าสมศรี','ป้าบุญมี','ป้าละเอียด'],patience:32,tip:.6,chili:[2,5],weak:'soothe',
  hair:'bun',hairColors:['#6d6a6a','#8a8686','#3a3030'],shirts:['#b83a5e','#8e44ad','#c0392b'],acc:['curlers'],lip:'#7a2a1e',
  order:['เอา{menu} {chili} ป้ารีบนะ ไม่ได้มายืนรอทั้งวัน','{menu}จานนึง {chili} ทำดีๆ ล่ะ ร้านข้างๆ ยังถูกกว่าอีก'],
  wait:'ช้าจริงๆ ร้านนี้ ป้าแก่ตายก่อนได้กินพอดี!',
  happy:['เออ...ก็พอกินได้ แถมผักอีกกำได้ไหมล่ะ','อร่อยกว่าที่คิด แต่ป้าไม่ชมหรอกนะ'],
  rant:'นี่มันส้มตำหรือเศษอาหาร! ป้าไม่จ่ายเต็มหรอกนะ!',
  rep:{soothe:'ป้าจ๋า หนูขอโทษ เดี๋ยวแถมไข่เค็มให้ลูกนึงนะ',sass:'ร้านข้างๆ ถูกกว่าก็ไปซื้อร้านข้างๆ สิจ๊ะป้า',clap:'ป้าบ่นทุกร้านในตลาดแหละ ใครๆ ก็รู้!'},
  win:'ก็...ก็ได้ เห็นแก่ไข่เค็มหรอกนะ',lose:'ว่าไงนะ! มานี่ ป้าจะสอนมารยาทให้!',winRv:'แม่ค้ารู้จักง้อ เห็นแก่ไข่เค็มให้อีกดาว'},
 {id:'je',w:3,title:'เจ๊ปากจัด',names:['เจ๊แหม่ม','เจ๊ติ๋ม','เจ๊หน่อย'],patience:26,tip:.8,chili:[3,7],weak:'clap',
  hair:'long',hairColors:['#1d100a','#4a1f12','#7a1c2a'],shirts:['#7b2ff7','#e84393','#16a085'],acc:['earrings'],lip:'#c0392b',
  order:['{menu} {chili} เร็วๆ เจ๊ไม่ว่างมานั่งดูหน้าเธอ','ขอ{menu} {chili} ถ้าไม่อร่อยเจ๊ลงเพจแน่'],
  wait:'จะตำหรือจะนั่งสมาธิ! เจ๊รอจนเล็บขึ้นใหม่แล้ว!',
  happy:['โอเค ผ่าน เจ๊ให้ผ่านแค่ครั้งนี้','ก็แซ่บดี เดี๋ยวลงสตอรี่ให้ ไม่ต้องขอบใจ'],
  rant:'รสชาติแบบนี้กล้าเปิดร้าน หน้าด้านกว่าครกอีก!',
  rep:{soothe:'ขอโทษค่ะเจ๊ เดี๋ยวทำใหม่ให้นะคะ',sass:'เจ๊ลงเพจเลยค่ะ เพจเจ๊มีคนตามสามคนใช่ไหม',clap:'ปากจัดขนาดนี้ กินพริกเม็ดเดียวก็พอมั้งเจ๊!'},
  win:'ฮึ่ย! ...ปากดีใช้ได้ เจ๊ชอบ จ่ายก็ได้',lose:'กล้าดียังไง! ออกมาเคลียร์กันข้างนอกเลย!',winRv:'รสมือยังไม่ถึง แต่แม่ค้าปากถึง เจ๊นับถือ'},
 {id:'lung',w:2,title:'ลุงขี้เมา',names:['ลุงเปลี่ยน','ลุงคำ','ลุงสม'],patience:34,tip:.9,chili:[4,9],weak:'clap',
  hair:'bald',hairColors:['#4a4040','#777'],shirts:['#3d6b4f','#2c3e50','#7f8c8d'],acc:['plaid','stubble','rednose'],lip:'#6b2a1e',skins:['#b97c56','#a8714c','#c68a62'],
  order:['เอา{menu} {chili} แซ่บๆ เด้อ...ฮึก','{menu}... {chili}... เอ๊ะ หรือตำปู...ช่างมัน เอาตามนั้น ฮึก'],
  wait:'ลุงหิวแล้วเด้อ...ฮึก...เมาจะสร่างแล้วนิ',
  happy:['แซ่บอีหลี! อีกแก้ว...เอ้ย อีกจาน','นัวๆ ถึงใจ ลุงสิมาทุกมื้อเลย ฮึก'],
  rant:'บ่แซ่บ! บ่จ่าย! ลุงสิแจ้งผู้ใหญ่บ้าน...ฮึก!',
  rep:{soothe:'ลุงจ๋า ใจเย็นๆ ดื่มน้ำเปล่าก่อนเนาะ',sass:'ลุงเมาจนลิ้นเพี้ยนแล้วมั้งจ๊ะ',clap:'จ่ายมาเดี๋ยวนี้! ไม่งั้นโทรตามป้าที่บ้านมารับ!'},
  win:'อย่าๆ อย่าโทรหาเมียลุง...จ่ายแล้วๆ',lose:'ว่าลุงเมาเหรอ! มา มาวัดกันสักยก!',winRv:'แม่ค้าโหดกว่าเมียลุงอีก...ให้ดาวเพิ่มด้วยความกลัว'},
 {id:'hiso',w:2,title:'คุณหนูไฮโซ',names:['คุณหนูแพรว','คุณหนูพิม','คุณหนูมายด์'],patience:28,tip:1.6,chili:[0,3],weak:'sass',
  hair:'pony',hairColors:['#7a4422','#c48a3a','#2a1a12'],shirts:['#f4a7c6','#fdfdfd','#a29bfe'],acc:['sunglassesHead','pearls'],lip:'#d6336c',skins:['#f2d0b4','#f5dcc5','#e8b892'],
  order:['ขอ{menu} {chili} ค่ะ ใช้มะนาวออร์แกนิกใช่ไหมคะ','{menu} {chili} นะคะ เดี๋ยวหนูถ่ายรูปก่อนกิน'],
  wait:'นี่หนูต้องรอคิวเหมือนคนทั่วไปเหรอคะ',
  happy:['Oh my god อร่อยมากค่ะ ทิปให้นะคะ','รสชาติ authentic มาก หนูชอบ vibe ร้านนี้'],
  rant:'Eww! นี่มันอาหารหรือการทดลองวิทยาศาสตร์คะ!',
  rep:{soothe:'ขอโทษค่ะคุณหนู ร้านเล็กๆ ทำได้แค่นี้ค่ะ',sass:'กระเป๋าใบละแสน แต่มาบ่นส้มตำจานละห้าสิบนะคะ',clap:'ไม่ชอบก็กลับไปกินร้านในห้างไป!'},
  win:'ห...หนูไม่ได้งกนะคะ! จ่ายก็ได้ค่ะ',lose:'รปภ. ของหนูอยู่ในรถ! เรียกมาเคลียร์เดี๋ยวนี้!',winRv:'แม่ค้าแซะเก่ง หนูยอมรับ so savage'},
 {id:'dee',w:2,title:'ขาประจำใจดี',names:['ลุงชาญ','ยายอ่อน','น้าพร'],patience:44,tip:1,chili:[1,4],weak:null,
  hair:'short',hairColors:['#cfcac4','#e8e4df'],shirts:['#e2a33b','#5d8aa8','#9b7653'],acc:['glasses'],lip:'#7a2a1e',
  order:['สวัสดีจ้ะ เอา{menu} {chili} เหมือนเดิมนะ','วันนี้ขอ{menu} {chili} จ้ะ ไม่ต้องรีบนะลูก'],
  wait:'ไม่เป็นไรจ้ะ รอได้ๆ',
  happy:['อร่อยเหมือนเดิมเลยลูก','ฝีมือดีขึ้นทุกวันนะ เดี๋ยวพาเพื่อนมา'],
  sad:'ไม่เป็นไรนะลูก วันหลังค่อยทำใหม่ เป็นกำลังใจให้จ้ะ'},
 {id:'rider',w:2,title:'ไรเดอร์',names:['ไรเดอร์ต้น','ไรเดอร์บอย','ไรเดอร์แจ็ค'],patience:20,tip:.7,chili:[2,6],weak:'soothe',
  hair:'helmet',hairColors:['#2ecc71','#f39c12','#e74c3c'],shirts:['#27ae60','#e67e22','#c0392b'],acc:[],lip:'#6b2a1e',
  order:['ออเดอร์ด่วนครับ {menu} {chili} ลูกค้าโทรตามแล้ว','{menu} {chili} รีบๆ เลยพี่ ผมมีอีกสามงาน'],
  wait:'พี่! แอปเด้งเตือนแล้ว ลูกค้าจะกดยกเลิกแล้วนะ!',
  happy:['ได้ละ ขอบคุณครับ ซิ่งละนะ!','ไวดีพี่ ให้ห้าดาวในแอปเลย'],
  rant:'ช้าแล้วยังทำผิดอีก! ลูกค้าด่าผมนะพี่ ไม่ใช่ด่าพี่!',
  rep:{soothe:'ขอโทษนะน้อง เดี๋ยวพี่โทรขอโทษลูกค้าให้ แถมน้ำเย็นขวดนึง',sass:'ก็ขับมาช้าเองป่ะ มาโทษครกได้ไง',clap:'จะเอาไม่เอา! ไม่เอาก็กดยกเลิกไปเลย!'},
  win:'โอเคพี่ ไม่เป็นไร...ขอน้ำเย็นๆ ด้วยนะ',lose:'พี่พูดงี้ได้ไง! จอดมอไซค์ก่อน มาคุยกัน!',winRv:'ร้านช้าแต่แม่ค้าใจดี ไรเดอร์เข้าใจ'},
 {id:'critic',w:1.5,title:'นักรีวิวสายแซะ',names:['เพจกินแหลก','คุณต้นรีวิว','แอดมินชิมจนพุง'],patience:30,tip:1.2,chili:[2,6],weak:'sass',rvMult:3,
  hair:'bob',hairColors:['#1a1a1a','#5a2e1a'],shirts:['#222','#34495e'],acc:['thickGlasses'],lip:'#7a2a1e',
  order:['{menu} {chili} ครับ ขอถ่ายคลิปตอนตำด้วยนะ ผู้ติดตามรออยู่','ขอ{menu} {chili} จะดูซิว่าที่เขาลือกันจริงไหม'],
  wait:'ช้าแบบนี้ คลิปผมได้ฟุตเทจรอคิวยาวเลยนะ',
  happy:['ก็...ใช้ได้ เดี๋ยวลงคลิปให้ แต่ไม่ได้แปลว่าชอบนะ','รสชาติมีมิติ ให้ผ่านแบบงงๆ'],
  rant:'โอ้โห คอนเทนต์ดีเลย "ร้านส้มตำที่แย่ที่สุดในตลาด"!',
  rep:{soothe:'ขอโทษค่ะ อย่าลงคลิปเลยนะคะ',sass:'ลงเลยค่ะ ยอดวิวคลิปพี่จะได้เกินสิบสักทีไง',clap:'ถ่ายไปเลย! ถ่ายหน้าตัวเองตอนพูดไม่รู้เรื่องด้วยนะ!'},
  win:'ฮะ...ฮึ่ม แซะเก่งกว่าผมอีก เดี๋ยวตัดฉากนี้ออก',lose:'ดีมาก! ยอดวิวพุ่งแน่ มาเลย ไฟต์ออกกล้อง!',winRv:'แม่ค้าแซะกลับเจ็บกว่าผม ให้ดาวในฐานะคู่แข่งคอนเทนต์'},
 {id:'thug',w:1,title:'นักเลงหัวไม้',names:['เสือดำ','บักโต้ง','ไอ้เข้ม'],patience:26,tip:.5,chili:[5,10],weak:'none',rantAt:35,
  hair:'mohawk',hairColors:['#1a1a1a','#c0392b'],shirts:['#2d2d2d','#4a2a1a'],acc:['tank','chain','scar'],lip:'#5a1e14',skins:['#a8714c','#c68a62','#8a5a3a'],
  order:['{menu} {chili} อย่าให้ข้ารอนาน','ข้าเอา{menu} {chili} ถ้าไม่ถูกปาก ร้านนี้เจอดี'],
  wait:'ช้านักนะ! ข้าเริ่มหงุดหงิดแล้ว!',
  happy:['เออ...ถึงใจ ใช้ได้','แซ่บสะใจ วันหลังข้าจะพาลูกน้องมา'],grumble:'หึ...รอดไปนะวันนี้',
  rant:'แบบนี้มันดูถูกกัน! ออกมาข้างนอก!',
  rep:{soothe:'ใจเย็นๆ นะพี่ เดี๋ยวทำให้ใหม่',sass:'โอ้ย น่ากลัวจัง ไปยิมมาจากไหนคะ',clap:'เก่งแต่ปาก ลองเข้ามาสิ!'},
  lose:'ข้าไม่ฟัง! มาต่อยกันให้รู้เรื่อง!'},
 {id:'student',w:2,title:'นักศึกษาหอใน',names:['น้องเฟิร์ส','น้องมิ้นท์','น้องบอส'],patience:36,tip:.2,chili:[1,5],weak:'soothe',discount:10,
  hair:'short',hairColors:['#1a1a1a','#3a2418'],shirts:['#fdfdfd'],acc:['collar'],lip:'#7a2a1e',
  order:['พี่ครับ {menu} {chili} ...ขอลดสิบบาทได้ไหม ปลายเดือนแล้ว','{menu} {chili} ค่ะ ขอลดหน่อยนะพี่ เงินหมดแล้ว'],
  wait:'พี่ครับ ผมมีเรียนอีกสิบนาที...',
  happy:['อร่อยมากพี่! เดี๋ยวบอกเพื่อนทั้งหอ','คุ้มสุดในชีวิตปลายเดือนเลย'],
  rant:'พี่...หนูจ่ายเงินเก็บทั้งอาทิตย์มากินนะ ทำไมเป็นงี้',
  rep:{soothe:'โอ๋ๆ ไม่เป็นไรนะน้อง พี่ลดให้ แถมไข่ต้มด้วย',sass:'งั้นไปกินมาม่าที่หอไป',clap:'ปลายเดือนแล้วยังเรื่องมากอีก!'},
  win:'ขอบคุณครับพี่ ใจดีจัง',lose:'พี่ใจร้าย! ผมจะไปฟ้องรุ่นพี่ชมรมมวย!',winRv:'พี่แม่ค้าใจดีมาก น้องๆ ในหอแนะนำ'},
 {id:'farang',w:2,title:'นักท่องเที่ยวฝรั่ง',names:['จอห์น','เอมม่า','ฮันส์'],patience:38,tip:2,chili:[0,8],weak:'soothe',
  hair:'spiky',hairColors:['#e8c66a','#d9a54a','#c0753a'],shirts:['#00b894','#fd79a8','#0984e3'],acc:['hawaii','sunburn'],lip:'#b5524a',skins:['#f6d5c8','#f0c4b0','#ffe0d0'],
  order:['ซาหวัดดีครับ! {menu} {chili} ...not too spicy please!'],orderHot:['Hello! {menu} {chili} ...Thai spicy! I am strong!'],
  wait:'Excuse me... still waiting? ไม่เป็นไร...ไม่เป็นไรมากๆ',
  happy:['Oh wow! แซ่บ! แซ่บมากมาย!','Amazing! ห้าดาว! Five stars!'],
  rant:'What is this?! ไม่อร่อย! Very no good!',
  rep:{soothe:'Sorry sorry! ขอโทษค่ะ free mango sticky rice!',sass:'You want Thai food? This IS Thai food, darling',clap:'ไม่ชอบก็กลับไปกินเบอร์เกอร์ไป!'},
  win:'Oh... okay! Thank you! ขอบคุณครับ!',lose:'Excuse me?! I take Muay Thai class! Let\'s go!',winRv:'Very kind shop owner! ใจดีมากมาย'},
 {id:'yt',w:1,title:'ยูทูบเบอร์สายกินเผ็ด',names:['เจ้าแห่งพริก','ฮอตบอยชาแนล','สไปซี่เจ'],patience:30,tip:1.3,chili:[10,15],weak:'clap',
  hair:'cap',hairColors:['#e74c3c','#2d3436','#6c5ce7'],shirts:['#d63031','#fdcb6e','#2d3436'],acc:['headphones'],lip:'#7a2a1e',
  order:['{menu} {chili}!! วันนี้ชาแนลเราจะท้าตาย!','สวัสดีครับทุกคน วันนี้มาร้านนี้... {menu} {chili} จัดมา!'],
  wait:'คนดูเริ่มออกจากไลฟ์แล้วนะครับพี่!',
  happy:['โอ้ววว ปากพังแต่ใจฟู! กดไลก์ให้ร้านนี้!','เผ็ดจนเห็นจันทร์สามดวง! ร้านนี้ของจริงครับทุกคน!'],
  rant:'แค่นี้เรียกเผ็ดเหรอ! คนดูผิดหวังกันหมดแล้ว!',
  rep:{soothe:'ขอโทษค่ะ เดี๋ยวตำให้ใหม่อีกจาน',sass:'กินเผ็ดเก่งจริง ทำไมเหงื่อแตกตั้งแต่ยังไม่กินล่ะ',clap:'ปากเก่งนักก็มาตำเองเลย! ไลฟ์ไปเลย!'},
  win:'โห...คอนเทนต์ดีกว่าที่คิด! จ่ายครับๆ',lose:'ดราม่ามาแล้วครับทุกคน! ไฟต์สดในไลฟ์!',winRv:'แม่ค้าปากแซ่บกว่าส้มตำ คนดูชอบมาก'},
 {id:'gym',w:2,title:'หนุ่มสายฟิต',names:['พี่บิ๊กกล้าม','โค้ชเอ็ม','น้องเวย์'],patience:30,tip:.9,chili:[2,6],weak:'sass',noSugar:true,
  hair:'spiky',hairColors:['#1a1a1a','#3a2418'],shirts:['#0984e3','#2d3436','#e17055'],acc:['tank','headband'],lip:'#6b2a1e',
  order:['{menu} {chili} ไม่หวานนะครับ ผมคุมแคล','ขอ{menu} {chili} ไม่หวาน ขอโปรตีนเพิ่ม...อ้าว ไม่มีไก่เหรอ'],
  wait:'ผมรอนานจนกล้ามจะสลายแล้วครับ',
  happy:['แคลต่ำ แซ่บสูง ผ่านครับ!','นี่แหละ cheat meal ที่ไม่ cheat'],
  rant:'ทำแบบนี้แคลผมพังหมด! เสียเวลาเวิร์กเอาต์!',
  rep:{soothe:'ขอโทษค่ะ เดี๋ยวคำนวณแคลให้ใหม่',sass:'กล้ามใหญ่ขนาดนี้ ผิดนิดเดียวไม่ตายหรอกค่ะ',clap:'ไม่พอใจก็ไปเคี้ยวอกไก่ต้มไป!'},
  win:'เอ่อ...ก็จริงครับ เดี๋ยวไปคาร์ดิโอเพิ่ม',lose:'ดูถูกอกไก่ไม่ได้นะ! มาพิสูจน์แรงกัน!',winRv:'แม่ค้าพูดถูก กล้ามผมเลยรอด'},
 {id:'rival',w:1,title:'แม่ค้าร้านข้างๆ',names:['เจ๊หมวย ร้านข้างๆ','ป้าแตน ตำแตก'],patience:28,tip:.3,chili:[3,7],weak:'clap',
  hair:'bun',hairColors:['#1a1a1a','#3a2418'],shirts:['#e17055','#00b894'],acc:['apron','earrings'],lip:'#a93226',
  order:['ขอ{menu} {chili} หน่อย มาชิมว่าทำไมลูกค้าไปซื้อร้านเธอ','{menu} {chili} ...ไม่ได้มาสืบสูตรนะ แค่หิว'],
  wait:'ช้าแบบนี้ ลูกค้าเดินมาร้านฉันหมดแล้วมั้ง',
  happy:['หึ...ก็พอใช้ ร้านฉันยังอร่อยกว่า','ใช้มะนาวยี่ห้ออะไรน่ะ...ไม่ได้ถามเพราะอยากรู้นะ'],
  rant:'ฝีมือแค่นี้ ร้านฉันหลับตาตำยังอร่อยกว่า!',
  rep:{soothe:'ขอบคุณที่มาอุดหนุนนะคะเจ๊',sass:'มาชิมทุกวันเลยนะคะ ติดใจล่ะสิ',clap:'ถ้าอร่อยจริง ลูกค้าคงไม่มาต่อคิวร้านฉันหรอก!'},
  win:'ปากดีจริงๆ ...จ่ายก็ได้ แต่ฉันจำไว้แล้ว',lose:'กล้าดี! เอาครกมาเลย ดวลกันตรงนี้!',winRv:'ฝีมือยังไม่ถึง แต่ปากถึงกว่าที่คิด'},
 {id:'office',w:2,title:'สาวออฟฟิศรีบ',names:['พี่นิว ฝ่ายบัญชี','คุณจอย HR','พี่ฝน ฝ่ายขาย'],patience:18,tip:.8,chili:[2,5],weak:'soothe',
  hair:'bob',hairColors:['#2a1a12','#6b3a1e','#8e5a3a'],shirts:['#dfe6e9','#74b9ff','#fab1a0'],acc:['lanyard','earrings'],lip:'#c0392b',
  order:['{menu} {chili} ค่ะ พี่มีประชุมอีกสิบห้านาที','ขอ{menu} {chili} ใส่ถุงไปกินที่โต๊ะนะคะ ด่วนๆ'],
  wait:'บอสโทรตามแล้วค่ะ! เร็วๆ ได้ไหมคะ',
  happy:['ทันประชุม! ขอบคุณมากค่ะ','อร่อยจนลืมอีเมลที่ค้างอยู่เลย'],
  rant:'ช้าแล้วยังผิดอีก! พี่เข้าประชุมสายเพราะร้านนี้เลยนะ!',
  rep:{soothe:'ขอโทษค่ะพี่ ไม่คิดค่าพริกนะคะ ไปประชุมให้ทันน้า',sass:'ประชุมสายก็บอกบอสว่าติดส้มตำสิคะ',clap:'รีบนักก็ไปกินข้าวกล่องเซเว่นสิ!'},
  win:'ไม่เป็นไรค่ะ...ขอบคุณที่เข้าใจ',lose:'ตอนนี้พี่เครียดมากนะ! อย่ามายุ่ง! มาเลย!',winRv:'ร้านช้าไปหน่อย แต่แม่ค้าเข้าใจคนทำงาน'}
];
const PREFS=[{id:'normal',nm:'',lo:60,hi:90,w:7},{id:'crisp',nm:'ตำกรอบๆ เบามือ',lo:30,hi:58,w:1.5},{id:'fine',nm:'ตำนัวๆ ละเอียด',lo:88,hi:116,w:1.5}];
const MASHMAX=130;

function shade(hex,p){const n=parseInt(hex.slice(1),16);const f=c=>Math.max(0,Math.min(255,Math.round(c+(p/100)*255)));return '#'+[f(n>>16),f(n>>8&255),f(n&255)].map(x=>x.toString(16).padStart(2,'0')).join('')}

/* ---------- Customer art ---------- */
function hairParts(style,hc){
 let back='',front='';
 switch(style){
  case 'bun':back=`<circle cx="100" cy="42" r="23" fill="${hc}"/><circle cx="94" cy="36" r="8" fill="#fff" opacity=".12"/>`;
   front=`<path d="M47 104 C42 44 158 44 153 104 C146 76 122 64 100 66 C78 64 54 76 47 104Z" fill="${hc}"/>`;break;
  case 'long':back=`<path d="M46 100 C36 34 164 34 154 100 L162 196 C136 208 64 208 38 196Z" fill="${hc}"/>`;
   front=`<path d="M48 106 C42 48 158 44 152 102 C140 70 104 60 72 72 C60 78 52 92 48 106Z" fill="${hc}"/><path d="M80 62 C100 56 124 60 138 70" stroke="#fff" stroke-opacity=".15" stroke-width="4" fill="none"/>`;break;
  case 'bald':front=`<path d="M47 112 C45 92 50 82 58 78 L60 106Z" fill="${hc}"/><path d="M153 112 C155 92 150 82 142 78 L140 106Z" fill="${hc}"/><ellipse cx="88" cy="62" rx="16" ry="6" fill="#fff" opacity=".22"/>`;break;
  case 'pony':back=`<path d="M138 66 C180 76 182 150 162 196 C150 164 150 112 140 90Z" fill="${hc}"/>`;
   front=`<path d="M47 104 C40 42 160 38 153 100 C130 64 88 58 47 104Z" fill="${hc}"/><path d="M70 60 C90 50 120 52 140 66" stroke="#fff" stroke-opacity=".2" stroke-width="4" fill="none"/>`;break;
  case 'short':front=`<path d="M47 102 C42 46 158 46 153 102 C150 80 140 70 128 70 C110 77 82 77 70 70 C58 74 50 86 47 102Z" fill="${hc}"/>`;break;
  case 'helmet':front=`<path d="M40 100 C38 34 162 34 160 100 C140 86 60 86 40 100Z" fill="${hc}"/><path d="M40 100 C60 92 140 92 160 100 L158 108 C140 100 60 100 42 108Z" fill="${shade(hc,-20)}"/><path d="M60 60 C80 46 120 46 140 60" stroke="#fff" stroke-width="6" stroke-opacity=".45" fill="none" stroke-linecap="round"/><path d="M50 106 L60 150 M150 106 L140 150" stroke="#222" stroke-width="3"/>`;break;
  case 'cap':front=`<path d="M50 100 C48 82 54 76 60 74 L62 100Z M150 100 C152 82 146 76 140 74 L138 100Z" fill="#1a1a1a"/><path d="M48 92 C44 40 156 40 152 92 C130 78 70 78 48 92Z" fill="${hc}"/><path d="M152 86 C166 84 176 88 178 94 C168 96 158 94 150 92Z" fill="${shade(hc,-22)}"/><circle cx="100" cy="46" r="4" fill="${shade(hc,-22)}"/>`;break;
  case 'mohawk':front=`<path d="M86 72 C82 40 92 18 100 12 C108 18 118 40 114 72Z" fill="${hc}"/><path d="M50 100 C48 72 68 62 86 64 L86 74 C70 76 56 86 50 100Z M150 100 C152 72 132 62 114 64 L114 74 C130 76 144 86 150 100Z" fill="${hc}" opacity=".3"/>`;break;
  case 'bob':back=`<path d="M44 100 C36 38 164 38 156 100 L158 150 C150 156 140 156 134 150 L134 112 L66 112 L66 150 C60 156 50 156 42 150Z" fill="${hc}"/>`;
   front=`<path d="M48 98 C44 44 156 44 152 98 L150 84 C130 76 70 76 50 84Z" fill="${hc}"/>`;break;
  case 'spiky':front=`<path d="M46 100 L48 70 L58 78 L60 50 L74 64 L80 38 L92 58 L102 34 L110 56 L124 40 L128 62 L142 50 L142 74 L154 70 L154 100 C140 76 60 76 46 100Z" fill="${hc}"/>`;break;
 }
 return {back,front};
}
function custSVG(c,pre){
 const p=c.p,sk=c.skin,hc=c.hairColor,sh=c.shirt,A=p.acc||[];const H=hairParts(p.hair,hc);
 let body='',face='',top='',arms='';
 const tank=A.includes('tank');
 const shirtPath=tank?'M52 252 C52 212 64 190 78 184 L122 184 C136 190 148 212 148 252Z':'M24 252 C24 196 58 172 100 172 C142 172 176 196 176 252Z';
 if(tank)arms=`<path d="M22 252 C22 204 48 178 80 180 L72 252Z" fill="${shade(sk,-6)}"/><path d="M178 252 C178 204 152 178 120 180 L128 252Z" fill="${shade(sk,-6)}"/><path d="M36 214 C40 200 50 192 60 190" stroke="${shade(sk,-20)}" stroke-width="3" fill="none"/><path d="M164 214 C160 200 150 192 140 190" stroke="${shade(sk,-20)}" stroke-width="3" fill="none"/>`;
 if(A.includes('hawaii'))body+=[[60,210],[130,220],[90,236],[150,244],[48,240],[112,200]].map(([x,y],i)=>`<g fill="${['#ffeaa7','#ff7675','#fdcb6e'][i%3]}">${[0,72,144,216,288].map(a=>`<ellipse cx="${x}" cy="${y-5}" rx="3.5" ry="6" transform="rotate(${a} ${x} ${y})"/>`).join('')}<circle cx="${x}" cy="${y}" r="2.5" fill="#e17055"/></g>`).join('');
 if(A.includes('collar'))body+=`<path d="M78 174 L100 192 L86 200Z M122 174 L100 192 L114 200Z" fill="#fff" stroke="#ccc"/><path d="M96 192 L104 192 L106 230 L100 238 L94 230Z" fill="#1e3799"/>`;
 if(A.includes('plaid'))body+=`<path d="M56 176 C80 190 120 190 144 176 L150 192 C120 206 80 206 50 192Z" fill="url(#plaid)"/>`;
 if(A.includes('pearls'))body+=Array.from({length:11},(_,i)=>{const a=Math.PI*(.15+.7*i/10);return `<circle cx="${(100-Math.cos(a)*34).toFixed(1)}" cy="${(174+Math.sin(a)*14).toFixed(1)}" r="4" fill="#fffaf0" stroke="#d8cfc0" stroke-width=".8"/>`}).join('');
 if(A.includes('chain'))body+=`<path d="M72 182 Q100 214 128 182" stroke="#f1c40f" stroke-width="4" fill="none" stroke-dasharray="5 2"/><circle cx="100" cy="204" r="7" fill="#f1c40f" stroke="#c49b0b" stroke-width="2"/>`;
 if(A.includes('lanyard'))body+=`<path d="M80 176 L96 214 M120 176 L104 214" stroke="#3498db" stroke-width="3"/><rect x="87" y="212" width="26" height="32" rx="3" fill="#fff" stroke="#999"/><rect x="91" y="216" width="18" height="11" fill="#9bc"/><rect x="91" y="231" width="18" height="2" fill="#bbb"/><rect x="91" y="236" width="12" height="2" fill="#bbb"/>`;
 if(A.includes('apron'))body+=`<path d="M64 196 L136 196 L140 252 L60 252Z" fill="#fdfdfd" opacity=".93"/><path d="M66 196 L76 176 M134 196 L124 176" stroke="#fdfdfd" stroke-width="4"/><rect x="84" y="214" width="32" height="18" rx="3" fill="none" stroke="#e17055" stroke-width="2"/>`;
 if(A.includes('headphones'))body+=`<path d="M64 172 C64 198 136 198 136 172" stroke="#222" stroke-width="6" fill="none"/><rect x="54" y="164" width="16" height="22" rx="6" fill="#e74c3c"/><rect x="130" y="164" width="16" height="22" rx="6" fill="#e74c3c"/>`;
 if(A.includes('glasses'))face+=`<g fill="none" stroke="#3a3a3a" stroke-width="3"><circle cx="80" cy="102" r="14"/><circle cx="120" cy="102" r="14"/><path d="M94 101 L106 101 M66 100 L52 96 M134 100 L148 96"/></g><ellipse cx="76" cy="96" rx="5" ry="2.5" fill="#fff" opacity=".5"/>`;
 if(A.includes('thickGlasses'))face+=`<g fill="none" stroke="#111" stroke-width="5"><rect x="64" y="90" width="32" height="24" rx="5"/><rect x="104" y="90" width="32" height="24" rx="5"/><path d="M96 100 L104 100 M64 98 L52 94 M136 98 L148 94"/></g>`;
 if(A.includes('stubble'))face+=Array.from({length:24},(_,i)=>`<circle cx="${76+((i*37)%48)}" cy="${148+((i*13)%14)}" r="1.1" fill="#3a2a22" opacity=".5"/>`).join('');
 if(A.includes('rednose'))face+=`<circle cx="100" cy="122" r="9" fill="#e5533d" opacity=".7"/>`;
 if(A.includes('scar'))face+=`<path d="M122 82 L134 108" stroke="#7a3b2a" stroke-width="2.5"/><path d="M124 90 L132 88 M127 97 L135 95 M129 104 L136 102" stroke="#7a3b2a" stroke-width="1.5"/>`;
 if(A.includes('sunburn'))face+=`<ellipse cx="100" cy="116" rx="40" ry="10" fill="#ff5a4a" opacity=".25"/>`;
 if(A.includes('curlers'))top+=`<rect x="62" y="58" width="20" height="11" rx="5.5" fill="#ff7eb6" transform="rotate(-28 72 63)"/><rect x="90" y="50" width="20" height="11" rx="5.5" fill="#7ec8ff"/><rect x="118" y="58" width="20" height="11" rx="5.5" fill="#ffd36e" transform="rotate(28 128 63)"/>`;
 if(A.includes('sunglassesHead'))top+=`<rect x="64" y="52" width="30" height="14" rx="7" fill="#1a1a1a"/><rect x="106" y="52" width="30" height="14" rx="7" fill="#1a1a1a"/><rect x="94" y="56" width="12" height="3" fill="#1a1a1a"/><rect x="68" y="54" width="10" height="3" rx="1.5" fill="#fff" opacity=".4"/>`;
 if(A.includes('earrings'))top+=`<circle cx="48" cy="130" r="7" fill="none" stroke="#ffcf5a" stroke-width="3"/><circle cx="152" cy="130" r="7" fill="none" stroke="#ffcf5a" stroke-width="3"/>`;
 if(A.includes('scarf'))top+=`<path d="M42 98 C36 34 164 34 158 98 C140 70 60 70 42 98Z" fill="#d63031"/>${[[70,60],[100,50],[130,60],[86,74],[116,74],[56,82],[144,82]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3" fill="#fff" opacity=".85"/>`).join('')}<path d="M154 84 C168 80 176 90 172 100 C166 96 160 94 154 94Z" fill="#b71c1c"/>`;
 if(A.includes('headband'))top+=`<path d="M48 84 C70 72 130 72 152 84 L152 94 C130 82 70 82 48 94Z" fill="#e74c3c"/><path d="M152 88 L166 82 L162 96Z" fill="#e74c3c"/>`;
 return `<svg viewBox="0 0 200 250">
 <defs><radialGradient id="${pre}Sk" cx=".42" cy=".38" r=".75"><stop offset="0" stop-color="${shade(sk,10)}"/><stop offset=".7" stop-color="${sk}"/><stop offset="1" stop-color="${shade(sk,-14)}"/></radialGradient>
 <linearGradient id="${pre}Sh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${shade(sh,-14)}"/><stop offset=".45" stop-color="${shade(sh,6)}"/><stop offset="1" stop-color="${shade(sh,-20)}"/></linearGradient></defs>
 <rect x="84" y="148" width="32" height="38" rx="10" fill="${shade(sk,-12)}"/>
 ${arms}<path d="${shirtPath}" fill="url(#${pre}Sh)"/>
 ${tank?'':`<path d="M80 174 Q100 196 120 174" stroke="${shade(sh,-28)}" stroke-width="4" fill="none"/>`}
 ${body}
 <g class="head">
  ${H.back}
  <ellipse cx="48" cy="112" rx="9" ry="13" fill="${shade(sk,-8)}"/><ellipse cx="152" cy="112" rx="9" ry="13" fill="${shade(sk,-8)}"/>
  <ellipse cx="100" cy="106" rx="52" ry="58" fill="url(#${pre}Sk)"/>
  <ellipse class="flush" cx="100" cy="118" rx="48" ry="44" fill="#ff2a00" opacity="0" style="transition:opacity .3s"/>
  <ellipse cx="72" cy="126" rx="9" ry="5" fill="#ff6b6b" opacity=".22"/><ellipse cx="128" cy="126" rx="9" ry="5" fill="#ff6b6b" opacity=".22"/>
  <g class="eOpen"><ellipse cx="80" cy="102" rx="8" ry="9" fill="#fff"/><ellipse cx="120" cy="102" rx="8" ry="9" fill="#fff"/><circle cx="81" cy="104" r="4.8" fill="#2b1a10"/><circle cx="121" cy="104" r="4.8" fill="#2b1a10"/><circle cx="83" cy="101.5" r="1.6" fill="#fff"/><circle cx="123" cy="101.5" r="1.6" fill="#fff"/></g>
  <g class="eSquint" style="display:none" stroke="#2b1a10" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M72 96 L88 102 L72 108"/><path d="M128 96 L112 102 L128 108"/></g>
  <g class="eHeart" style="display:none" fill="#ff4f9a"><path d="M80 110 C68 100 70 92 76 92 C79 92 80 95 80 95 C80 95 81 92 84 92 C90 92 92 100 80 110Z"/><path d="M120 110 C108 100 110 92 116 92 C119 92 120 95 120 95 C120 95 121 92 124 92 C130 92 132 100 120 110Z"/></g>
  <g stroke="${shade(hc,-25)}" stroke-width="4.5" fill="none" stroke-linecap="round"><path class="bL"/><path class="bR"/></g>
  <path d="M100 106 C96 116 94 122 100 124" stroke="${shade(sk,-22)}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path class="mouth" stroke-linecap="round" stroke-linejoin="round"/>
  ${face}${H.front}${top}
 </g></svg>`;
}
const MOUTH={neutral:['M84 141 Q100 146 116 141','l'],happy:['M80 136 Q100 161 120 136 Q100 147 80 136Z','f'],eat:['M88 137 Q100 128 112 137 Q112 153 100 153 Q88 153 88 137Z','f'],chew:['M86 142 Q100 148 114 142','l'],angry:['M82 151 Q100 134 118 151','l'],yell:['M80 134 Q100 122 120 134 Q123 164 100 166 Q77 164 80 134Z','f'],sad:['M84 149 Q100 139 116 149','l']};
const BROW={neutral:['M68 84 Q80 78 92 82','M108 82 Q120 78 132 84'],angry:['M68 79 L93 90','M107 90 L132 79'],sad:['M68 87 Q80 79 92 80','M108 80 Q120 79 132 87'],happy:['M68 82 Q80 73 92 80','M108 80 Q120 73 132 82']};
function setMood(slot,m,eyes='open'){
 const r=slot.custEl,c=slot.c;if(!c)return;const el=r.querySelector('.mouth');if(!el)return;
 const mo=MOUTH[m]||MOUTH.neutral;el.setAttribute('d',mo[0]);
 if(mo[1]==='f'){el.setAttribute('fill','#5a1712');el.setAttribute('stroke',c.p.lip);el.setAttribute('stroke-width','3')}
 else{el.setAttribute('fill','none');el.setAttribute('stroke',c.p.lip);el.setAttribute('stroke-width','4.5')}
 const bm={happy:'happy',angry:'angry',yell:'angry',sad:'sad'}[m]||'neutral';
 r.querySelector('.bL').setAttribute('d',BROW[bm][0]);r.querySelector('.bR').setAttribute('d',BROW[bm][1]);
 r.querySelector('.eOpen').style.display=eyes==='open'?'':'none';r.querySelector('.eSquint').style.display=eyes==='squint'?'':'none';r.querySelector('.eHeart').style.display=eyes==='heart'?'':'none';
}

/* ---------- Sound ---------- */
let AC=null;
function ac(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(AC&&AC.state==='suspended')AC.resume().catch(()=>{});return AC}
function tone(f,d,type='sine',v=.2,slide=0,delay=0){const a=ac();if(!a)return;const t=a.currentTime+delay;const o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,f+slide),t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(a.destination);o.start(t);o.stop(t+d+.02)}
function noise(d,v=.2,hp=800){const a=ac();if(!a)return;const b=a.createBuffer(1,Math.floor(a.sampleRate*d),a.sampleRate),c=b.getChannelData(0);for(let i=0;i<c.length;i++)c[i]=(Math.random()*2-1)*(1-i/c.length);const s=a.createBufferSource();s.buffer=b;const f=a.createBiquadFilter();f.type='highpass';f.frequency.value=hp;const g=a.createGain();g.gain.value=v;s.connect(f).connect(g).connect(a.destination);s.start()}
const sfx={
 thud:(m)=>{tone(90+m*.9,.15,'sine',.5,-50);noise(.06,.12+m/900,300+m*10)},
 pop:()=>tone(520+Math.random()*200,.09,'triangle',.16,380),
 ding:()=>{tone(1318,.22,'sine',.14);tone(1760,.32,'sine',.12,0,.09)},
 cash:()=>{tone(1567,.12,'square',.06);tone(2093,.25,'square',.05,0,.08)},
 buzz:()=>tone(130,.35,'sawtooth',.08,-30),
 chomp:()=>noise(.06,.18,2000),
 fire:()=>{noise(.9,.12,300);tone(80,.8,'sawtooth',.05,40)},
 crunch:()=>{noise(.05,.3,3000);setTimeout(()=>noise(.05,.25,3000),70)},
 whoosh:()=>noise(.2,.1,1500),
 bell:()=>{tone(880,.5,'sine',.1);tone(1320,.4,'sine',.05,0,.02)},
 splat:()=>{noise(.12,.2,600);tone(70,.2,'sine',.4,-30)}
};

/* ---------- State ---------- */
const G={respect:0,day:1,money:0,spawned:0,perDay:8,stars:[],ds:null,orderNo:0,sel:0,paused:false,running:false};
const SLOTS=[0,1].map(i=>{const root=document.getElementById('s'+i);return{i,root,custEl:root.querySelector('.cust'),bub:root.querySelector('.bubble'),pbar:root.querySelector('.pbar'),c:null,sayT:null}});
let bowl={},bowlItems=[],mash=0;
let best=0;try{best=+localStorage.getItem('somtam_best')||0}catch(e){}

/* ---------- Tray ---------- */
function buildTray(){
 const t=$('#tray');t.innerHTML='';
 KEYS.forEach((k,i)=>{const b=document.createElement('button');b.className='card-i';
  b.innerHTML=`<span class="k">${i+1}</span><span class="ct" id="ct-${k}"></span>${ART[k]}<div class="nm">${ING[k].nm}</div>`;
  b.onclick=()=>addIng(k);t.appendChild(b)});
 LOCKED.forEach(l=>{const b=document.createElement('button');b.className='card-i locked';
  b.innerHTML=`<div class="lk">${l.ic}🔒</div><div class="nm">${l.nm}</div><div class="lv">ปลดล็อก Lv.${l.lv}</div>`;
  b.onclick=()=>toast(`${l.nm} ปลดล็อกที่ Lv.${l.lv} (เฟส 4)`);t.appendChild(b)});
}
function sky(){const s=$('#sky');for(let i=0;i<40;i++){const d=document.createElement('div');d.className='star';d.style.left=rnd(0,100)+'%';d.style.top=rnd(10,55)+'%';d.style.animationDelay=rnd(0,3)+'s';s.appendChild(d)}
 for(let i=0;i<8;i++){const l=document.createElement('div');l.className='lantern';l.style.left=rnd(2,98)+'%';l.style.animationDuration=rnd(14,26)+'s';l.style.animationDelay=-rnd(0,24)+'s';s.appendChild(l)}}

/* ---------- UI helpers ---------- */
function hud(){$('#hWpn').textContent=`${WEAPONS[W.eq].nm} Lv${W.lv[W.eq]}`;$('#hResp').textContent=G.respect;$('#hDay').textContent=G.day;$('#hCust').textContent=`${G.spawned}/${G.perDay}`;$('#hMoney').textContent=G.money;
 $('#hStar').textContent=G.stars.length?(G.stars.reduce((a,b)=>a+b,0)/G.stars.length).toFixed(1):'-'}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('show'),1400)}
function say(slot,txt,angry=false){const b=slot.bub;b.querySelector('.who').textContent=slot.c?`${slot.c.name} · ${slot.c.p.title}`:'';
 const el=b.querySelector('.txt');el.textContent='';b.classList.add('show');b.classList.toggle('angry',angry);
 clearInterval(slot.sayT);let i=0;const ch=[...txt];slot.sayT=setInterval(()=>{el.textContent=ch.slice(0,++i).join('');if(i>=ch.length)clearInterval(slot.sayT)},16)}
function hideSay(slot){slot.bub.classList.remove('show')}
function chiliText(n){if(n===0)return 'ไม่เผ็ด';if(n<=2)return `เผ็ดน้อย พริก ${n} เม็ด`;if(n<=5)return `พริก ${n} เม็ด`;if(n<=9)return `พริก ${n} เม็ด เผ็ดๆ`;return `พริก ${n} เม็ด ให้มันตายไปข้าง`}
function select(i){G.sel=i;SLOTS.forEach(s=>s.root.classList.toggle('sel',s.i===i));renderTickets();renderMash()}
function selC(){return SLOTS[G.sel].c}
function autoSelect(){const w=SLOTS.filter(s=>s.c&&s.c.state==='waiting');if(!w.length)return;if(!w.find(s=>s.i===G.sel)){w.sort((a,b)=>a.c.pat-b.c.pat);select(w[0].i)}}

function renderTickets(){
 SLOTS.forEach(s=>{const el=document.getElementById('t'+s.i),c=s.c;el.classList.toggle('sel',G.sel===s.i);
  if(!c){el.innerHTML=`<span class="tq">คิว ${s.i+1}</span><div class="empty">ว่าง</div>`;return}
  if(c.state==='arriving'){el.innerHTML=`<span class="tq">คิว ${s.i+1}</span><div class="empty">ลูกค้ากำลังเดินมา...</div>`;return}
  const head=`<span class="tq">คิว ${s.i+1}</span><h3>${c.menu.nm}<span>${c.menu.price}฿</span></h3><div class="who">${c.name} · ${c.p.title}</div>`;
  if(c.state!=='waiting'){el.innerHTML=head+`<div class="status">${{eating:'🍽 กำลังกิน...',rant:'💢 กำลังวีน!',leaving:'👋 กำลังกลับ'}[c.state]||''}</div>`;return}
  const active=G.sel===s.i;let rows='';
  KEYS.forEach(k=>{const w=c.want[k]||0,h=active?(bowl[k]||0):0;if(!w&&!h)return;const cls=active?(h===w?'ok':(h>w?'over':'')):'';
   rows+=`<div class="row ${cls}">${ART[k]}<span>${active?h+'/':''}${w}</span></div>`});
  el.innerHTML=head+`<div class="req">“${c.reqText}”</div><div class="rows">${rows}</div><div class="tp"><i style="width:${Math.max(0,c.pat/c.maxP*100)}%"></i></div>`;
 });
}
function renderCounts(){KEYS.forEach(k=>{const c=$('#ct-'+k),n=bowl[k]||0;c.textContent=n;c.classList.toggle('on',n>0)})}
function mashLabel(m){if(m<1)return 'ยังไม่ได้ตำ';if(m<30)return 'หยาบมาก';if(m<58)return 'กรอบๆ';if(m<=90)return 'เข้าเนื้อ';if(m<=116)return 'นัวๆ';return 'เละเป็นโจ๊ก!'}
function renderMash(){
 $('#mashFill').style.width=(Math.min(mash,MASHMAX)/MASHMAX*100)+'%';$('#mashTxt').textContent=mashLabel(mash)+(mash>=1?` ${Math.round(mash)}%`:'');
 const c=selC(),z=$('#mashZone');
 if(c&&c.state==='waiting'){z.style.display='block';z.style.left=(c.pref.lo/MASHMAX*100)+'%';z.style.width=((c.pref.hi-c.pref.lo)/MASHMAX*100)+'%'}else z.style.display='none';
}

/* ---------- Bowl & free pounding ---------- */
function addIng(k){
 if(!G.running)return;
 const n=bowl[k]||0;if(n>=ING[k].max){toast(`${ING[k].nm}เต็มครกแล้ว`);return}
 bowl[k]=n+1;sfx.pop();
 const a=rnd(0,Math.PI*2),r=Math.sqrt(Math.random());
 bowlItems.push({k,x:130+Math.cos(a)*r*62-19,y:72+Math.sin(a)*r*13-24,rot:rnd(-40,40),s:k==='chili'?.7:(k==='papaya'?1.4:.9),m:mash});
 drawBowl(true);renderCounts();renderTickets();
}
function drawBowl(drop=false){
 const c=$('#contents');c.innerHTML='';
 [...bowlItems].sort((a,b)=>a.y-b.y).forEach(it=>{const d=document.createElement('div');d.className='it';d.innerHTML=ART[it.k];
  const p=Math.min(1,Math.max(0,(mash-it.m))/100);
  d.style.left=it.x+'px';d.style.top=it.y+'px';const sc=it.s*(1-.55*p);d.style.transform=`rotate(${it.rot}deg) scale(${sc})`;d.style.opacity=1-.75*p;
  if(drop&&it===bowlItems[bowlItems.length-1])d.animate([{transform:`translateY(-60px) rotate(${it.rot}deg) scale(${sc})`,opacity:.3},{transform:`rotate(${it.rot}deg) scale(${sc})`,opacity:1}],{duration:220,easing:'cubic-bezier(.3,1.5,.6,1)'});
  c.appendChild(d)});
 const p=Math.min(1,mash/100),m=$('#mix');m.setAttribute('rx',(82*p).toFixed(1));m.setAttribute('ry',(17*p).toFixed(1));m.setAttribute('fill',mixColor(bowl));
}
function mixColor(b){const c=b.chili||0;if(b.plara)return c>5?'#8a4a1e':'#9a7a3a';if(c>6)return '#d9582a';if(c>2)return '#cf8a3a';return '#c9b45a'}
function resetBowl(){bowl={};bowlItems=[];mash=0;drawBowl();renderCounts();renderTickets();renderMash()}
function pound(){
 if(!G.running)return;
 if(!bowlItems.length){toast('ใส่วัตถุดิบก่อนตำ');return}
 const step=100/(4+bowlItems.length*.55)*rnd(.85,1.1)*(W.eq==='pestle'?1.2:1);
 mash=Math.min(150,mash+step);
 sfx.thud(Math.min(mash,120));
 $('#pestle').animate([{transform:'rotate(10deg) translateY(0)'},{transform:'rotate(5deg) translateY(46px)'},{transform:'rotate(10deg) translateY(0)'}],{duration:130,easing:'ease-out'});
 $('#mortarWrap svg.m').animate([{transform:'none'},{transform:'translateY(3px) scaleX(1.01)'},{transform:'none'}],{duration:110});
 const w=$('#mortarWrap'),col=mixColor(bowl);
 for(let i=0;i<5;i++){const s=document.createElement('div');s.style.cssText=`position:absolute;left:130px;top:70px;width:${rnd(5,10)}px;height:${rnd(5,10)}px;border-radius:50%;background:${col};z-index:4;pointer-events:none`;w.appendChild(s);
  s.animate([{transform:'translate(0,0)',opacity:1},{transform:`translate(${rnd(-90,90)}px,${rnd(-80,-20)}px)`,opacity:0}],{duration:rnd(350,600),easing:'cubic-bezier(.2,.7,.4,1)'}).onfinish=()=>s.remove()}
 if(mash>116&&mash-step<=116){toast('เละแล้ว! พอได้แล้ว');sfx.splat()}
 drawBowl();renderMash();
}

/* ---------- Customers ---------- */
function pickPers(){const tot=PERS.reduce((a,p)=>a+p.w,0);let r=Math.random()*tot;for(const p of PERS){r-=p.w;if(r<=0)return p}return PERS[0]}
function pickPref(){const tot=PREFS.reduce((a,p)=>a+p.w,0);let r=Math.random()*tot;for(const p of PREFS){r-=p.w;if(r<=0)return p}return PREFS[0]}
function makeOrder(){
 let p=pickPers();
 const busy=SLOTS.map(s=>s.c&&s.c.p.id);if(busy.includes(p.id))p=pickPers();
 const menu=pick(MENUS);const want={};KEYS.forEach(k=>want[k]=menu.base[k]||0);
 want.chili=Math.max(0,ri(p.chili[0],p.chili[1]+Math.min(4,G.day-1)));
 const mods=[];
 if(menu.base.sugar){if(p.noSugar){want.sugar=0}else{const r=Math.random();if(r<.22){want.sugar=0;mods.push('ไม่หวาน')}else if(r<.38){want.sugar=2;mods.push('หวานๆ')}}}
 if(Math.random()<.25){want.lime=2;mods.push('เปรี้ยวนำ')}
 if(Math.random()<.15){want.garlic=2;mods.push('กระเทียมเยอะ')}
 if(Math.random()<.12){want.tomato=0;mods.push('ไม่ใส่มะเขือเทศ')}
 const pref=pickPref();if(pref.nm)mods.push(pref.nm);
 const maxP=Math.max(16,p.patience*1.35*Math.pow(.92,G.day-1));
 const c={p,menu,want,pref,name:pick(p.names),pat:maxP,maxP,no:++G.orderNo,state:'arriving',warned:false,
  skin:pick(p.skins||SKINS),hairColor:pick(p.hairColors),shirt:pick(p.shirts)};
 const tail=[chiliText(want.chili),...mods];
 const lines=(p.orderHot&&want.chili>=5)?p.orderHot:p.order;
 c.line=pick(lines).replace('{menu}',menu.nm).replace('{chili}',tail.join(' '));
 if(p.noSugar&&menu.base.sugar)tail.splice(1,0,'ไม่หวาน');
 c.reqText=tail.join(' · ');
 return c;
}
async function arrive(slot){
 const c=makeOrder();slot.c=c;G.spawned++;hud();
 slot.custEl.className='cust out';slot.custEl.innerHTML=custSVG(c,'c'+slot.i+'_'+c.no);setMood(slot,'neutral');
 renderTickets();await sleep(40);slot.custEl.className='cust enter';sfx.bell();
 await sleep(600);
 if(!G.running)return;
 c.state='waiting';say(slot,c.line);slot.pbar.style.display='block';
 if(!selC()||selC().state!=='waiting')select(slot.i);else renderTickets();
 renderMash();
}
function trySpawn(slot,delay){setTimeout(()=>{if(!G.running||slot.c)return;if(G.spawned>=G.perDay){checkEnd();return}arrive(slot)},delay)}
function checkEnd(){if(G.running&&G.spawned>=G.perDay&&SLOTS.every(s=>!s.c))endDay()}

setInterval(()=>{
 if(!G.running||G.paused)return;
 SLOTS.forEach(s=>{const c=s.c;if(!c||c.state!=='waiting')return;
  c.pat-=.1;const f=Math.max(0,c.pat/c.maxP);const bar=s.pbar.querySelector('i');bar.style.width=(f*100)+'%';bar.style.background=f>.5?'#5fd068':f>.25?'#ffc23d':'#e2402b';
  const tb=document.querySelector(`#t${s.i} .tp i`);if(tb){tb.style.width=(f*100)+'%';tb.style.background=bar.style.background}
  if(f<.3&&!c.warned){c.warned=true;const nice=c.p.id==='dee'||c.p.id==='farang';say(s,c.p.wait,!nice);setMood(s,nice?'neutral':'angry');if(!nice){s.custEl.classList.add('shake');setTimeout(()=>s.custEl.classList.remove('shake'),500)}}
  if(c.pat<=0){c.state='rant';s.pbar.style.display='none';renderTickets();autoSelect();react(s,{score:0,reasons:['รอจนรากงอก ไม่ได้กินสักคำ!'],timedOut:true})}
 });
},100);

/* ---------- Scoring ---------- */
function evaluate(c,b,m){
 const w=c.want,h=k=>b[k]||0,R=[];let s=100;
 if(!h('papaya')){s-=45;R.push('ส้มตำไม่มีมะละกอ! ขายครกเปล่าเหรอ')}
 const dc=h('chili')-w.chili;
 if(dc>=2){s-=Math.min(42,dc*8);R.push(w.chili===0?`บอกไม่เผ็ด ใส่พริกมา ${h('chili')} เม็ด! จะฆ่ากันเหรอ`:`สั่งพริก ${w.chili} เม็ด ใส่มา ${h('chili')}! จะเอาชีวิตกันเหรอ`)}
 else if(dc<=-2){s-=Math.min(36,-dc*7);R.push(c.p.id==='yt'?`พริกแค่ ${h('chili')} เม็ด! คนดูหัวเราะเยาะผมแล้ว`:`สั่ง ${w.chili} เม็ด ได้มา ${h('chili')} จืดยังกับน้ำล้างครก`)}
 else if(dc!==0)s-=4;
 if(w.crab&&!h('crab')){s-=24;R.push('ปูหายไปไหน หนีลงคลองไปแล้วเหรอ')}
 if(!w.crab&&h('crab')){s-=18;R.push('ไม่ได้สั่งปู ใส่มาทำไม จะคิดเงินเพิ่มล่ะสิ')}
 if(w.plara&&!h('plara')){s-=24;R.push('ตำปลาร้าแต่ไม่มีปลาร้า! นัวตรงไหน')}
 if(!w.plara&&h('plara')){s-=22;R.push(c.p.id==='hiso'?'Eww ใส่ปลาร้ามาทำไมคะ กลิ่นติดกระเป๋าแบรนด์เนมหมดแล้ว':'ไม่ได้สั่งปลาร้า กลิ่นติดปากไปสามวันแล้วเนี่ย')}
 const ds=h('sugar')-w.sugar;
 if(ds>0){s-=ds*(c.p.noSugar?20:12);R.push(c.p.noSugar?'ใส่น้ำตาลมา! แคลผมพังหมดแล้ว':(w.sugar===0?'บอกไม่หวาน หวานยังกับคำโกหกของแฟนเก่า':'หวานจนมดขึ้นลิ้น'))}
 if(ds<0){s-=-ds*10;R.push('ไม่หวานเลย เปรี้ยวเค็มโดดเดี่ยว')}
 const dl=h('lime')-w.lime;
 if(dl>0){s-=dl*9;R.push('เปรี้ยวจนหน้าบิดไปข้างนึงแล้ว')}
 if(dl<0){s-=-dl*10;R.push(w.lime>=2?'บอกเปรี้ยวนำ มะนาวหายไปไหน':'ไม่มีมะนาว รสแบนยังกับกระดาษ')}
 const dg=h('garlic')-w.garlic;if(dg!==0){s-=Math.abs(dg)*6;if(dg<0)R.push('กระเทียมน้อย ไม่หอมเลย');else if(dg>1)R.push('กระเทียมเยอะจนผีไม่กล้าเข้าใกล้')}
 const dt=h('tomato')-w.tomato;if(dt!==0){s-=Math.abs(dt)*5;if(dt<0)R.push('มะเขือเทศหายไปไหน');else if(w.tomato===0)R.push('บอกไม่ใส่มะเขือเทศ ใส่มาทำไม')}
 const P=c.pref;let q=1;
 if(m<5){s-=30;q=0;R.push('ไม่ตำเลย! ยกครกมาให้ตำเองเหรอ')}
 else{const d=m<P.lo?P.lo-m:(m>P.hi?m-P.hi:0);q=Math.max(0,1-d/45);s-=Math.round((1-q)*26);
  if(d>10&&m<P.lo)R.push(P.id==='fine'?'บอกตำนัวๆ ได้มาหยาบยังกับสลัดฝรั่ง':'ตำไม่เข้าเนื้อ เครื่องปรุงแยกกันอยู่คนละบ้าน');
  if(d>10&&m>P.hi)R.push(P.id==='crisp'?'บอกตำกรอบๆ ทำไมเละงี้':'ตำจนเละเป็นโจ๊ก นี่ส้มตำหรือข้าวต้ม')}
 if(c.pat/c.maxP<.25){s-=10;R.push('รอนานจนแก่ คิวยาวกว่ารถติดหน้าห้าง')}
 return {score:Math.max(0,Math.min(100,Math.round(s))),reasons:R,q,mash:m};
}
const PERFECT=['อร่อยจนวิญญาณหลุด! ร้านนี้ต้องไปเปิดสาขาบนสวรรค์','แซ่บถึงทรวง ตำเข้าเนื้อ รสจัดจ้าน 10/10','กินแล้วเห็นจันทร์ดวงที่สาม ร้านนี้ของจริง'];
const GOOD=['ตำเข้าเนื้อ รสใช้ได้ ให้ผ่าน','อร่อยดี เดี๋ยวพาเพื่อนมา','รสมือดี แม่ค้าน่ารัก (มั้ง)'];
function starOf(s){return s>=90?5:s>=75?4:s>=55?3:s>=35?2:1}

/* ---------- Serve & short, non-blocking effects ---------- */
function serve(){
 if(!G.running)return;
 const slot=SLOTS[G.sel],c=slot.c;
 if(!c||c.state!=='waiting'){toast('เลือกคิวที่ลูกค้ารออยู่ก่อน');return}
 if(!bowlItems.length){toast('ครกยังว่างอยู่เลย');return}
 const snap={...bowl},ev=evaluate(c,snap,mash),col=mixColor(snap);
 c.state='eating';slot.pbar.style.display='none';
 resetBowl();autoSelect();renderTickets();renderMash();
 (async()=>{
  await flyPlate(slot,col);hideSay(slot);
  for(let i=0;i<2;i++){setMood(slot,'eat');sfx.chomp();await sleep(150);setMood(slot,'chew');await sleep(150)}
  await effects(slot,snap,ev);
  await react(slot,ev);
 })();
}
function flyPlate(slot,col){return new Promise(res=>{
 sfx.whoosh();const from=$('#mortarWrap').getBoundingClientRect(),to=slot.custEl.getBoundingClientRect(),gm=$('#game').getBoundingClientRect();
 const d=document.createElement('div');const x0=from.left-gm.left+from.width/2-50,y0=from.top-gm.top+56;
 d.style.cssText=`position:absolute;z-index:12;width:100px;height:40px;border-radius:50%;left:${x0}px;top:${y0}px;background:radial-gradient(ellipse at 50% 45%,${col} 0 38%,#e9f0f3 40%,#fff 60%,#cfd8dc 72%);box-shadow:0 6px 10px #0006`;
 $('#game').appendChild(d);
 const dx=(to.left-gm.left+to.width*.5-50)-x0,dy=(to.top-gm.top+to.height*.72)-y0;
 d.animate([{transform:'translate(0,0)'},{transform:`translate(${dx*.5}px,${dy-50}px) scale(.9)`},{transform:`translate(${dx}px,${dy}px) scale(.7)`,opacity:1},{transform:`translate(${dx}px,${dy}px) scale(.55)`,opacity:0}],{duration:600,easing:'ease-in-out'}).onfinish=()=>{d.remove();res()};
})}
function stagePt(slot,fx,fy){const c=slot.custEl.getBoundingClientRect(),s=$('#stage').getBoundingClientRect();return{x:c.left-s.left+c.width*fx,y:c.top-s.top+c.height*fy}}
function spawn(cls,x,y,html){const d=document.createElement('div');d.className=cls;d.style.left=x+'px';d.style.top=y+'px';if(html)d.innerHTML=html;$('#fx').appendChild(d);return d}
function popText(slot,t,col,k=0){const p=stagePt(slot,.12,.02);const d=spawn('poptext',p.x,p.y-k*26,t);d.style.color=col;
 d.animate([{transform:'translateY(10px) scale(.5)',opacity:0},{transform:'translateY(-6px) scale(1.08)',opacity:1,offset:.18},{transform:'translateY(-16px)',opacity:1,offset:.8},{transform:'translateY(-28px)',opacity:0}],{duration:1300}).onfinish=()=>d.remove()}
function fireFx(slot,ms,big){const dir=slot.i===0?1:-1;const end=performance.now()+ms;const iv=setInterval(()=>{if(performance.now()>end){clearInterval(iv);return}const m=stagePt(slot,.5,.57);
 for(let k=0;k<(big?4:2);k++){const d=spawn('flame',m.x-14,m.y-14);const dx=rnd(130,240)*(big?1.3:1)*dir,dy=rnd(-60,30);
  d.animate([{transform:'scale(.35)',opacity:1},{transform:`translate(${dx}px,${dy}px) scale(${rnd(1.6,big?3.2:2.3)})`,opacity:0}],{duration:rnd(420,700),easing:'ease-out'}).onfinish=()=>d.remove()}},28)}
function sweat(slot){for(let i=0;i<5;i++)setTimeout(()=>{const p=stagePt(slot,rnd(.3,.7),.3);const d=spawn('drop',p.x,p.y);d.animate([{transform:'translateY(0)',opacity:1},{transform:`translate(${rnd(-20,20)}px,55px)`,opacity:0}],{duration:600,easing:'ease-in'}).onfinish=()=>d.remove()},i*110)}
function sparkles(slot,n=12){for(let i=0;i<n;i++)setTimeout(()=>{const p=stagePt(slot,rnd(.05,.95),rnd(0,.6));const d=spawn('spark',p.x,p.y,pick(['✦','✧','♥','✦']));d.style.color=pick(['#ffe680','#ffb3e6','#fff']);
 d.animate([{transform:'scale(0)',opacity:1},{transform:'translateY(-26px) scale(1.3) rotate(90deg)',opacity:0}],{duration:750}).onfinish=()=>d.remove()},i*55)}
function wisps(slot){for(let i=0;i<10;i++)setTimeout(()=>{const p=stagePt(slot,rnd(.1,.9),rnd(.5,.95));const d=spawn('wisp',p.x,p.y);
 d.animate([{transform:'scale(.5)',opacity:.9},{transform:`translate(${rnd(-30,30)}px,-100px) scale(1.8)`,opacity:0}],{duration:1000,easing:'ease-out'}).onfinish=()=>d.remove()},i*70)}
function soulFx(slot){const p=stagePt(slot,.5,.08);const d=spawn('ghost',p.x-26,p.y,`<svg viewBox="0 0 56 66"><path d="M28 2 C44 2 52 16 52 30 L52 60 L44 54 L36 62 L28 54 L20 62 L12 54 L4 60 L4 30 C4 16 12 2 28 2Z" fill="#fff" opacity=".9"/><circle cx="20" cy="26" r="4" fill="#333"/><circle cx="36" cy="26" r="4" fill="#333"/><ellipse cx="28" cy="38" rx="5" ry="3" fill="#ff8fb0"/></svg>`);
 d.style.filter='drop-shadow(0 0 12px #fff)';d.animate([{transform:'translateY(40px) scale(.4)',opacity:0},{transform:'translateY(-10px) scale(1)',opacity:.95,offset:.3},{transform:'translate(14px,-56px) rotate(8deg)',opacity:.9,offset:.7},{transform:'translate(-6px,-20px) scale(.5)',opacity:0}],{duration:1500,easing:'ease-in-out'}).onfinish=()=>d.remove()}

async function effects(slot,b,ev){
 // all effects play together, ~1.2s total
 const c=b.chili||0,el=slot.custEl,fl=el.querySelector('.flush'),hd=el.querySelector('.head');let k=0;let eyes='open',mood='chew';
 if(c>=6){popText(slot,c>=10?'🔥🔥 พ่นไฟมังกร!':'🔥 พ่นไฟ!','#ffb23d',k++);fl.style.opacity=.55;mood='yell';eyes='squint';sfx.fire();fireFx(slot,c>=10?1200:900,c>=10);sweat(slot);el.classList.add('shake')}
 else if(c>=3){popText(slot,'🥵 เผ็ดซี้ด!','#ff6b5a',k++);fl.style.opacity=.32;mood='yell';fireFx(slot,350,false);sweat(slot)}
 if((b.lime||0)>=2){popText(slot,'🍋 เปรี้ยวจี๊ด!','#e6ff6b',k++);eyes='squint';hd.classList.add('sour')}
 if(b.plara){popText(slot,'🟢 นัวลอยฟุ้ง!','#9cf07a',k++);el.classList.add('stink');wisps(slot)}
 if((b.sugar||0)>=2){popText(slot,'✨ หวานจนตัวลอย!','#ffb3e6',k++);if(eyes==='open')eyes='heart';el.classList.add('float');sparkles(slot)}
 if(b.crab){popText(slot,'🦀 กรุบ!','#ffd23f',k++);sfx.crunch()}
 if((b.garlic||0)>=3)popText(slot,'🧄 หอมจนผีหนี!','#fff',k++);
 if(!k)popText(slot,'😶 ...','#fff');
 setMood(slot,mood,eyes);
 await sleep(1200);
 fl.style.opacity=0;hd.classList.remove('sour');el.classList.remove('shake','stink','float');setMood(slot,'neutral');
 if(ev.score>=90){el.classList.add('gold');popText(slot,'👻 อร่อยจนวิญญาณหลุด!','#ffe680');soulFx(slot);sparkles(slot,10);sfx.ding();await sleep(1100);el.classList.remove('gold')}
}

/* ---------- Reactions ---------- */
async function react(slot,ev){
 const c=slot.c,p=c.p,price=c.menu.price-(p.discount||0);
 if(ev.score>=50){setMood(slot,'happy');say(slot,pick(p.happy));sfx.cash();
  const tip=ev.score>=80?Math.round(c.menu.price*.45*p.tip*(ev.score-70)/30):0;
  await sleep(900);return finish(slot,ev,{money:price+tip,tip,stars:starOf(ev.score)})}
 if(p.id==='dee'){setMood(slot,'sad');say(slot,p.sad);await sleep(1300);
  return finish(slot,ev,{money:Math.round(price*.5),stars:Math.max(2,starOf(ev.score)),text:'แม่ค้าใจดี แต่วันนี้รสมือหลุดไปหน่อยนะ'})}
 const calm=50-Math.min(15,G.respect*1.5)-(W.eq==='blade'&&FEARS.includes(p.id)?10:0);
 if(!ev.timedOut&&!p.rantAt&&ev.score>=calm){setMood(slot,'angry');say(slot,W.eq==='blade'&&FEARS.includes(p.id)?'(เหลือบเห็นมีดดาบ) ...ช่างเถอะ ไม่วีนก็ได้':'ร้านนี้แม่ค้าโหด...ไม่อยากมีเรื่อง จ่ายก็ได้',true);await sleep(1200);
  return finish(slot,ev,{money:price,stars:starOf(ev.score),tag:'😤 ไม่กล้าวีน'})}
 if(p.rantAt&&ev.score>=p.rantAt){setMood(slot,'angry');say(slot,p.grumble,true);await sleep(1200);
  return finish(slot,ev,{money:price,stars:starOf(ev.score)})}
 return rant(slot,ev);
}
let rantChain=Promise.resolve();
function rant(slot,ev){
 const c=slot.c,p=c.p;c.state='rant';renderTickets();
 setMood(slot,'yell');say(slot,(ev.timedOut?'รอนานขนาดนี้! ':'')+p.rant,true);sfx.buzz();slot.custEl.classList.add('shake');setTimeout(()=>slot.custEl.classList.remove('shake'),500);
 rantChain=rantChain.then(()=>new Promise(res=>{
  if(!G.running)return res();
  G.paused=true;
  $('#rantLine').textContent=`${c.name}: “${ev.timedOut?'รอนานขนาดนี้! ':''}${p.rant}”`;
  $('#rantHint').textContent=p.weak==='none'?'⚠ นักเลงคนนี้ดูท่าจะไม่ฟังอะไรทั้งนั้น...':'ลูกค้าแต่ละนิสัยแพ้ทางไม่เหมือนกัน';
  document.querySelectorAll('.rbtn').forEach(b=>{b.querySelector('span').textContent=p.rep[b.dataset.c];b.onclick=()=>done(b.dataset.c)});
  $('#rantOv').classList.add('show');
  const tb=$('#rTimer');tb.style.transition='none';tb.style.width='100%';requestAnimationFrame(()=>requestAnimationFrame(()=>{tb.style.transition='width 7s linear';tb.style.width='0%'}));
  const to=setTimeout(()=>done(null),7000);let fin=false;
  async function done(choice){if(fin)return;
   if(choice&&choice!==p.weak&&W.eq==='lid'&&!c.retried){c.retried=true;toast('🛡 ฝาหม้อกันคำด่าไว้ได้! ลองตอบใหม่');sfx.thud(80);
    const bb=document.querySelector(`.rbtn[data-c="${choice}"]`);bb.disabled=true;bb.style.opacity=.35;return}
   fin=true;clearTimeout(to);$('#rantOv').classList.remove('show');document.querySelectorAll('.rbtn').forEach(b=>{b.disabled=false;b.style.opacity=''});
   G.ds.rants++;const price=c.menu.price-(p.discount||0);
   if(choice&&choice===p.weak){G.paused=false;say(slot,p.win);setMood(slot,'sad');sfx.cash();G.ds.wins++;res();await sleep(1100);
    finish(slot,ev,{money:Math.round(price*.6),stars:Math.max(2,starOf(ev.score)),text:(ev.reasons[0]?ev.reasons[0]+' ... ':'')+p.winRv,tag:'🗣 ด่าชนะ'})}
   else{const line=choice?p.lose:'ไม่ตอบเหรอ! งั้นมาต่อยกัน!';say(slot,line,true);setMood(slot,'angry');sfx.buzz();
    await sleep(900);G.ds.fights++;
    const r=await fight(c);G.paused=false;res();
    if(r==='win'){const gain=W.eq==='mortar'?4:2;G.respect+=gain;G.ds.fightWins++;say(slot,'ย...ยอมแล้ว! จ่ายเต็มเลยก็ได้!');setMood(slot,'sad','squint');sfx.cash();await sleep(1000);
     finish(slot,ev,{money:price,stars:3,text:pick(['แม่ค้าต่อยหนักกว่ารสมือ ยอมจ่ายเต็ม','รสมือยังไม่ถึง แต่หมัดถึง! เกรงใจเลย','อย่ามีเรื่องกับแม่ค้าร้านนี้ เชื่อผม']),tag:`🥊 ชนะไฟต์ · 💪+${gain}`})}
    else if(r==='draw'){say(slot,'เหนื่อยแล้ว...วันนี้พอแค่นี้!',true);await sleep(900);
     finish(slot,ev,{money:-10,stars:2,text:'ต่อยกันจนเหนื่อย ต่างคนต่างแยกย้าย',tag:'🥊 เสมอ'})}
    else{G.respect=Math.max(0,G.respect-1);say(slot,'ฮ่าๆ! ร้านกระจอก!',true);setMood(slot,'happy');await sleep(900);
     finish(slot,ev,{money:-30,stars:1,text:'ร้านนี้แม่ค้าปากดีแต่ต่อยไม่เป็น! '+(ev.reasons[0]||''),tag:'🥊 แพ้ไฟต์ · 💪-1'})}}
  }
 }));
}
function finish(slot,ev,o){
 const c=slot.c,p=c.p;if(!c)return;c.state='leaving';renderTickets();
 const mult=p.rvMult||1;
 G.money+=o.money;G.ds.inc+=o.money;for(let i=0;i<mult;i++){G.stars.push(o.stars);G.ds.stars.push(o.stars)}hud();
 let text=o.text;
 if(!text){if(ev.score>=90)text=pick(PERFECT);else if(ev.score>=70)text=pick(GOOD)+(ev.reasons[0]?' แต่'+ev.reasons[0]:'');else text=ev.reasons.slice(0,2).join(' ')||'ก็พอกินได้ ไม่ได้ว้าวอะไร'}
 G.ds.log.push({name:c.name,title:p.title,stars:o.stars,text,money:o.money,mult});
 hideSay(slot);
 const pop=document.createElement('div');pop.className='rvpop';
 pop.innerHTML=`<span class="mn ${o.money>=0?'pos':'neg'}">${o.money>=0?'+':''}${o.money}฿${o.tip?` <small>(ทิป ${o.tip})</small>`:''}</span><div class="st"><b>${'★'.repeat(o.stars)}</b>${'★'.repeat(5-o.stars)}</div><small>${c.name}${mult>1?` · รีวิวมีน้ำหนัก x${mult}`:''}${o.tag?' · '+o.tag:''}</small><div class="tx">“${text}”</div>`;
 slot.root.appendChild(pop);pop.animate([{transform:'scale(.6)',opacity:0},{transform:'scale(1)',opacity:1,offset:.1},{opacity:1,offset:.85},{opacity:0}],{duration:3200,easing:'ease-out'}).onfinish=()=>pop.remove();
 (async()=>{await sleep(500);slot.custEl.className='cust out';await sleep(650);slot.c=null;renderTickets();autoSelect();renderMash();
  if(G.spawned>=G.perDay)checkEnd();else trySpawn(slot,rnd(900,2200))})();
}

/* ---------- Day ---------- */
function endDay(){
 G.running=false;
 const ds=G.ds,avg=ds.stars.length?(ds.stars.reduce((a,b)=>a+b,0)/ds.stars.length):0;
 $('#sDay').textContent=G.day;$('#sInc').textContent=(ds.inc>=0?'+':'')+ds.inc+' ฿';$('#sStar').textContent=avg.toFixed(1)+' ★';
 $('#sWin').textContent=`${ds.wins}/${ds.rants}`;$('#sFight').textContent=`ชนะ ${ds.fightWins}/${ds.fights}`;
 if(G.money>best){best=G.money;try{localStorage.setItem('somtam_best',best)}catch(e){}$('#sBest').textContent='🏆 สถิติเงินสะสมสูงสุดใหม่: '+best+' ฿'}else $('#sBest').textContent='สถิติสูงสุด: '+best+' ฿';
 $('#sLog').innerHTML=ds.log.map(r=>`<div><span class="s">${'★'.repeat(r.stars)}</span> <b>${r.name}</b> <small>(${r.title}${r.mult>1?' x'+r.mult:''})</small><br>“${r.text}” <small>${r.money>=0?'+':''}${r.money}฿</small></div>`).join('');
 $('#sumOv').classList.add('show');
}
function newDay(first){
 if(!first)G.day++;G.perDay=8+(G.day-1)*2;G.spawned=0;G.ds={inc:0,stars:[],rants:0,wins:0,fights:0,fightWins:0,log:[]};G.running=true;G.paused=false;
 resetBowl();hud();select(0);trySpawn(SLOTS[0],200);trySpawn(SLOTS[1],3200);
}

/* ---------- Input ---------- */
$('#bStart').onclick=()=>{ac();sfx.ding();$('#titleOv').classList.remove('show');newDay(true)};
$('#bDay').onclick=()=>{$('#sumOv').classList.remove('show');renderShop();$('#shopOv').classList.add('show')};
$('#bOpen').onclick=()=>{$('#shopOv').classList.remove('show');newDay(false)};
$('#bPound').onclick=pound;$('#bServe').onclick=serve;
$('#bReset').onclick=()=>{if(G.running&&bowlItems.length){resetBowl();toast('เทครกทิ้งแล้ว')}};
$('#mortarWrap').addEventListener('pointerdown',e=>{e.preventDefault();pound()});
SLOTS.forEach(s=>{s.root.onclick=()=>{if(s.c&&s.c.state==='waiting')select(s.i)};document.getElementById('t'+s.i).onclick=()=>{if(s.c&&s.c.state==='waiting')select(s.i)}});
document.addEventListener('keydown',e=>{
 if(F){const k=e.key.toLowerCase();if(e.code==='Space'||k==='a'||k==='j'){e.preventDefault();if(!e.repeat)fHit()}else if(k==='s'||k==='k'){e.preventDefault();fGuard()}else if(k==='w'||k==='i'||e.key==='ArrowUp'||e.key==='Shift'){e.preventDefault();fDodge()}else if(k==='d'||k==='l'){e.preventDefault();fSpecial()}return}
 if(e.code==='Space'){e.preventDefault();if(!e.repeat)pound();return}
 if(e.repeat)return;
 if(e.key==='Enter'){e.preventDefault();serve();return}
 if(e.key==='ArrowLeft'||e.key==='ArrowRight'||e.key==='Tab'){e.preventDefault();const o=SLOTS[1-G.sel];if(o.c&&o.c.state==='waiting')select(o.i);return}
 const n=parseInt(e.key,10);if(n>=1&&n<=8)addIng(KEYS[n-1]);
});
buildTray();sky();renderTickets();hud();drawBowl();renderMash();
