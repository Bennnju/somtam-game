/* ---------- Weapons ---------- */
const WEAPONS={
 pestle:{nm:'สาก',price:0,dmg:7,cd:280,guard:380,spNm:'ตำรัว',spCd:6000,interrupt:false,
  desc:'เร็ว ฟาดรัว คอมโบง่าย',sell:'ตอนขาย: ตำแรงขึ้น 20% กดน้อยลง',spd:5,pow:2,def:2},
 blade:{nm:'มีดดาบ',price:180,dmg:15,cd:650,guard:380,spNm:'ฟันกวาด',spCd:7000,interrupt:true,
  desc:'แรง ฟาดตอนศัตรูง้างจะขัดจังหวะได้',sell:'ตอนขาย: ลูกค้าปากจัดไม่ค่อยกล้าวีน',spd:3,pow:4,def:2},
 lid:{nm:'ฝาหม้อ',price:120,dmg:5,cd:360,guard:650,spNm:'กำแพงอลูมิเนียม',spCd:7000,interrupt:false,reflect:true,
  desc:'กันกว้าง กันแล้วสะท้อนดาเมจกลับ',sell:'ตอนขาย: ตอบลูกค้าวีนผิด แก้ตัวได้ 1 ครั้ง',spd:4,pow:1,def:5},
 mortar:{nm:'ครกศึก',price:260,dmg:24,cd:1200,guard:320,spNm:'ทุ่มครก',spCd:9000,interrupt:true,
  desc:'หนักสุด ทีเดียวจบ แต่เหวี่ยงช้ามาก',sell:'ตอนขาย: ชนะไฟต์ได้ความเกรงใจ x2',spd:1,pow:5,def:1}
};
const WART={
 pestle:`<svg viewBox="0 0 44 170"><path d="M15 4 C15 1 29 1 29 4 L31 118 C40 128 42 150 36 162 C30 170 14 170 8 162 C2 150 4 128 13 118Z" fill="url(#gWood)"/><path d="M19 10 L19 116" stroke="#fff" stroke-opacity=".25" stroke-width="3" stroke-linecap="round"/></svg>`,
 blade:`<svg viewBox="0 0 60 170"><path d="M24 120 L36 120 L38 166 L22 166Z" fill="url(#gWood)"/><rect x="16" y="113" width="28" height="9" rx="3" fill="#4a4a4a"/><path d="M25 114 C18 80 16 40 30 4 C45 30 47 80 36 114Z" fill="url(#gBlade)"/><path d="M31 12 C35 40 37 80 34 110" stroke="#fff" stroke-opacity=".65" stroke-width="2" fill="none"/><path d="M26 112 C21 80 20 46 29 14" stroke="#4d5860" stroke-opacity=".5" stroke-width="1.5" fill="none"/></svg>`,
 lid:`<svg viewBox="0 0 120 120"><ellipse cx="60" cy="62" rx="54" ry="52" fill="url(#gLid)" stroke="#7d8992" stroke-width="3"/><ellipse cx="60" cy="62" rx="40" ry="38" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2"/><ellipse cx="60" cy="62" rx="22" ry="20" fill="none" stroke="#7d8992" stroke-opacity=".4" stroke-width="1.5"/><rect x="47" y="53" width="26" height="17" rx="7" fill="#2d2d2d"/><ellipse cx="42" cy="36" rx="17" ry="8" fill="#fff" opacity=".5" transform="rotate(-20 42 36)"/></svg>`,
 mortar:`<svg viewBox="0 0 120 100"><path d="M40 82 L80 82 L85 96 L35 96Z" fill="#5a2610"/><path d="M8 28 C10 62 28 84 60 85 C92 84 110 62 112 28Z" fill="url(#gClay)"/><ellipse cx="60" cy="28" rx="52" ry="14" fill="#b2592c"/><ellipse cx="60" cy="30" rx="43" ry="10" fill="url(#gClayIn)"/><path d="M18 44 C24 62 36 74 50 79" stroke="#fff" stroke-opacity=".15" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`
};
const W={owned:{pestle:true},lv:{pestle:1,blade:1,lid:1,mortar:1},eq:'pestle'};
const lvMult=k=>1+.3*((W.lv[k]||1)-1);
const FEARS=['pa','je','lung','rival','critic','yt','student','office','hiso'];
const FOE={pa:[75,11,.95],je:[80,12,1.1],lung:[85,13,.8],hiso:[50,8,.9],rider:[70,11,1.25],critic:[60,9,1],thug:[130,16,1.1],student:[55,8,1],farang:[85,12,1],yt:[75,11,1.1],gym:[110,14,1],rival:[90,12,1.05],office:[65,10,1.15]};
const OWNER={p:{id:'owner',hair:'bun',acc:['scarf','apron','earrings'],lip:'#c0392b'},skin:'#d9a07a',hairColor:'#1d100a',shirt:'#2e86de'};

/* ---------- Fight ---------- */
// move: [type, name, weight, extra]  (combo extra = hits, taunt extra = effect)
const MOVES={
 pa:[['jab','ตบ',3],['heavy','เหวี่ยงกระเป๋า',2],['grab','ดึงผม',2],['block','ยกตะกร้าบัง',1]],
 je:[['combo','ตบรัว',3,3],['jab','จิกหัว',2],['taunt','ด่ากราด',1.5,'silence'],['heavy','ฟาดรองเท้า',1.5]],
 lung:[['jab','หมัดเมา',3],['heavy','หมัดเมาพิฆาต',2],['grab','กอดคอ',1.2]],
 hiso:[['jab','ฟาดกระเป๋าแบรนด์',3],['block','กางร่ม',2],['taunt','เรียกบอดี้การ์ด',1.5,'heal']],
 rider:[['heavy','บิดมอพุ่งชน',2.5],['combo','ต่อยรัว',2,2],['jab','ฟาดหมวกกันน็อก',2]],
 critic:[['grab','แฟลชกล้อง',2.5],['jab','ฟาดไม้เซลฟี่',3],['block','ยกกล้องบัง',1]],
 thug:[['combo','หมัดชุด',3,3],['heavy','หมัดหนัก',2.5],['grab','จับทุ่ม',2],['block','การ์ดสูง',1]],
 student:[['jab','ฟาดชีท',3],['block','ยกกระเป๋าบัง',1.5],['taunt','โทรเรียกรุ่นพี่',1.5,'heal']],
 farang:[['combo','เตะมวยไทย',3,3],['heavy','ศอกกลับ',2],['block','การ์ดมวย',1.5]],
 yt:[['jab','ยัดพริกใส่ปาก',2.5],['heavy','พ่นไฟ',2],['taunt','ขอยอดไลก์',2,'heal']],
 gym:[['taunt','เบ่งกล้าม',2,'buff'],['heavy','หมัดเวย์',2.5],['grab','ล็อกคอ',2],['jab','ตบหลัง',1.5]],
 rival:[['combo','ฟาดทัพพี',2.5,2],['heavy','สาดน้ำปลาร้า',2],['block','ยกครกบัง',1.5]],
 office:[['jab','ปาแฟ้ม',3],['combo','กระหน่ำแม็ก',2,3],['heavy','ฟาดแล็ปท็อป',1.5]]
};
const MT={
 jab:{ic:'👊',col:'#ffb020',dmg:.75,w:[400,540]},
 combo:{ic:'👊',col:'#ff8a00',dmg:.55,w:[440,520],next:[230,300]},
 heavy:{ic:'💥',col:'#ff3b1f',dmg:1.6,w:[780,980]},
 grab:{ic:'✋',col:'#a55eea',dmg:1.3,w:[640,760]},
 block:{ic:'🛡',col:'#3d8fd6'},
 taunt:{ic:'😤',col:'#20bf6b'}
};
let F=null,crowdTimer=null;
function fight(c){return new Promise(res=>{
 const wp=WEAPONS[W.eq],st=FOE[c.p.id]||[70,10,1],dm=1+.08*(G.day-1),now=performance.now();
 F={c,wp,res,php:100,fhp:Math.round(st[0]*dm),fmax:Math.round(st[0]*dm),fdmg:st[1]*dm,spd:st[2],buff:1,rage:false,
  moves:MOVES[c.p.id]||MOVES.thug,last:null,mv:null,comboLeft:0,
  end:now+30000,cd:0,spReady:now+1500,guardUntil:0,guardStart:0,guardCd:0,dodgeUntil:0,dodgeStart:0,dodgeCd:0,counterUntil:0,
  fs:'idle',fsUntil:now+1300,stunUntil:0,tauntHit:false,silenceUntil:0,done:false,started:now+900};
 $('#arFoeName').textContent=`${c.name} · ${c.p.title}`;$('#arMeName').textContent=`แม่ค้า · ${wp.nm} Lv${W.lv[W.eq]}`;
 $('#foe .body').innerHTML=custSVG(c,'fo'+c.no);$('#pl .body').innerHTML=custSVG(OWNER,'pl');
 const wpn=$('#wpn');wpn.className='w-'+W.eq;wpn.innerHTML=WART[W.eq];
 $('#aSp b').textContent='✨ '+wp.spNm;
 $('#foe').className='';$('#pl').className='';hideWarn();$('#buffTag').textContent='';
 setHP();$('#arenaOv').classList.add('show');
 setMood({custEl:$('#foe'),c},'angry');setMood({custEl:$('#pl'),c:OWNER},'angry');
 arMsg('ไฟต์!',900,'#ffd23f');sfx.bell();
 crowdTimer=setInterval(crowd,900);
 requestAnimationFrame(fightLoop);
})}
const CHEERS=['ซัดเลย!','แม่ค้าสู้ๆ!','โอ้ยยย!','เอาเลย!','มวยถูกคู่!','ตำมันเลย!','555+','ใครชนะเลี้ยงส้มตำ!','หลบดิ!','ระวังข้างหลัง!'];
function crowd(){const f=$('#arField');const d=document.createElement('div');d.className='cheer';d.textContent=pick(CHEERS);d.style.left=rnd(5,85)+'%';f.appendChild(d);
 d.animate([{transform:'translateY(10px)',opacity:0},{transform:'translateY(-6px)',opacity:1,offset:.2},{transform:'translateY(-24px)',opacity:0}],{duration:1400}).onfinish=()=>d.remove()}
function setHP(){if(!F)return;$('#hpMe').style.width=Math.max(0,F.php)+'%';$('#hpFoe').style.width=Math.max(0,F.fhp/F.fmax*100)+'%';
 $('#hpMeT').textContent=Math.max(0,Math.round(F.php));$('#hpFoeT').textContent=Math.max(0,Math.round(F.fhp))}
function arMsg(t,ms=700,col='#fff'){const m=$('#arMsg');m.textContent=t;m.style.color=col;m.getAnimations().forEach(a=>a.cancel());
 m.animate([{transform:'translate(-50%,-50%) scale(2.2)',opacity:0},{transform:'translate(-50%,-50%) scale(1)',opacity:1,offset:.2},{transform:'translate(-50%,-50%) scale(1)',opacity:1,offset:.8},{transform:'translate(-50%,-50%) scale(.9)',opacity:0}],{duration:ms,fill:'forwards'})}
function arPop(who,t,col,big){const el=$(who==='foe'?'#foe':'#pl'),f=$('#arField');const r=el.getBoundingClientRect(),fr=f.getBoundingClientRect();
 const d=document.createElement('div');d.className='arpop';d.textContent=t;d.style.color=col;d.style.fontSize=(big?32:22)+'px';
 d.style.left=(r.left-fr.left+r.width*rnd(.2,.55))+'px';d.style.top=(r.top-fr.top+r.height*rnd(.05,.3))+'px';f.appendChild(d);
 d.animate([{transform:'scale(.4) rotate(-8deg)',opacity:0},{transform:'scale(1.15) rotate(4deg)',opacity:1,offset:.2},{transform:'translateY(-30px)',opacity:0}],{duration:850}).onfinish=()=>d.remove()}
function shakeField(n=8){$('#arField').animate([{transform:'none'},{transform:`translate(${n}px,${-n/2}px)`},{transform:`translate(${-n}px,${n/2}px)`},{transform:'none'}],{duration:180})}
function showWarn(mv){const w=$('#warn'),t=MT[mv.type];w.innerHTML=`<span>${t.ic}</span>${mv.name}`;w.style.background=t.col;w.style.boxShadow=`0 0 18px ${t.col}`;w.className='on '+mv.type}
function hideWarn(){$('#warn').className=''}
function foeFace(m,e){if(F)setMood({custEl:$('#foe'),c:F.c},m,e)}
function meFace(m,e){setMood({custEl:$('#pl'),c:OWNER},m,e)}

function hurtFoe(dmg,label,big){
 if(!F||F.done)return;dmg=Math.max(1,Math.round(dmg));F.fhp-=dmg;setHP();
 const foe=$('#foe');foe.animate([{filter:'brightness(2) saturate(.3)'},{filter:'none'}],{duration:200});
 $('#foe .body').animate([{transform:'scaleX(-1)'},{transform:'scaleX(-1) translateX(-16px) rotate(-5deg)'},{transform:'scaleX(-1)'}],{duration:220});
 if(label)arPop('foe',label,'#ffd23f',big||dmg>=22);arPop('foe','-'+dmg,'#fff');
 sfx.thud(Math.min(120,dmg*4));if(dmg>=18)shakeField(10);
 foeFace('yell','squint');setTimeout(()=>F&&!F.done&&foeFace('angry'),300);
 if(!F.rage&&F.fhp>0&&F.fhp<F.fmax*.35){F.rage=true;F.spd*=1.3;foe.classList.add('rage');arMsg('โกรธจัด!',900,'#ff5a3c');arPop('foe','🔥 โหมดเดือด','#ff5a3c',true)}
}
function hurtMe(dmg,label){
 dmg=Math.round(dmg);F.php-=dmg;setHP();const pl=$('#pl');
 pl.animate([{filter:'brightness(1.6) sepia(1) hue-rotate(-40deg) saturate(5)'},{filter:'none'}],{duration:260});
 $('#pl .body').animate([{transform:'none'},{transform:'translateX(-18px) rotate(-5deg)'},{transform:'none'}],{duration:240});
 arPop('pl',label||pick(['โอ๊ย!','อุ๊ย!','เจ็บนะ!']),'#ff6b5a',!!label);arPop('pl','-'+dmg,'#ff9a8a');sfx.splat();shakeField(12);
 meFace('yell','squint');setTimeout(()=>F&&!F.done&&meFace('angry'),350);
}
function pickMove(){
 let ms=F.moves;if(F.last==='block'||F.last==='taunt')ms=ms.filter(m=>m[0]!==F.last);
 const tot=ms.reduce((a,m)=>a+m[2],0);let r=Math.random()*tot;for(const m of ms){r-=m[2];if(r<=0)return{type:m[0],name:m[1],x:m[3]}}return{type:ms[0][0],name:ms[0][1],x:ms[0][3]};
}
function windTime(mv,first=true){const t=MT[mv.type];let w=first?rnd(t.w[0],t.w[1]):rnd(t.next[0],t.next[1]);if(F.c.p.id==='lung')w*=rnd(.6,1.5);return w/F.spd}

function fightLoop(now){
 if(!F||F.done)return;
 $('#arTime').textContent=Math.max(0,Math.ceil((F.end-now)/1000));
 const sp=Math.max(0,F.spReady-now),sil=now<F.silenceUntil;
 $('#aSp').style.setProperty('--cd',(sil?100:sp/F.wp.spCd*100)+'%');$('#aSp').classList.toggle('ready',sp<=0&&!sil);$('#aSp').classList.toggle('silenced',sil);
 $('#aHit').classList.toggle('cool',now<F.cd);$('#aDodge').classList.toggle('cool',now<F.dodgeCd);$('#aGuard').classList.toggle('cool',now<F.guardCd);
 $('#pl').classList.toggle('counter',now<F.counterUntil);
 if(now>=F.started){
  const foe=$('#foe');
  if(now<F.stunUntil){if(F.fs!=='stun'){F.fs='stun';foe.classList.remove('wind','blocking','taunting');foe.classList.add('stun');hideWarn()}}
  else if(F.fs==='stun'){F.fs='idle';foe.classList.remove('stun');F.fsUntil=now+rnd(250,500)}
  else if(F.fs==='idle'&&now>=F.fsUntil){
   const mv=pickMove();F.mv=mv;F.last=mv.type;showWarn(mv);
   if(mv.type==='block'){F.fs='block';F.fsUntil=now+rnd(1300,1900);foe.classList.add('blocking')}
   else if(mv.type==='taunt'){F.fs='taunt';F.fsUntil=now+1400/Math.min(F.spd,1.2);F.tauntHit=false;foe.classList.add('taunting');foeFace('happy')}
   else{F.fs='wind';F.comboLeft=mv.type==='combo'?(mv.x||3)-1:0;F.fsUntil=now+windTime(mv);foe.classList.add('wind');tone(mv.type==='heavy'?200:340,.12,'square',.05,mv.type==='heavy'?-60:180)}
  }
  else if(F.fs==='wind'&&now>=F.fsUntil)strike(now);
  else if(F.fs==='block'&&now>=F.fsUntil){F.fs='idle';foe.classList.remove('blocking');hideWarn();F.fsUntil=now+rnd(150,400)}
  else if(F.fs==='taunt'&&now>=F.fsUntil){foe.classList.remove('taunting');hideWarn();F.fs='idle';F.fsUntil=now+rnd(300,600);
   const e=F.mv.x;if(e==='buff'){F.buff+=.35;$('#buffTag').textContent=`💪 แรงขึ้น x${F.buff.toFixed(2)}`;arPop('foe','บัฟแล้ว!','#20bf6b',true)}
   else if(e==='heal'){const h=Math.round(F.fmax*.18);F.fhp=Math.min(F.fmax,F.fhp+h);setHP();arPop('foe','+'+h+' ฟื้นพลัง','#7ef08a',true)}
   else if(e==='silence'){F.silenceUntil=now+3500;arPop('pl','โดนด่าจนใบ้!','#20bf6b',true);arMsg('ท่าไม้ตายถูกปิด 3 วิ',900,'#20bf6b')}
   tone(500,.25,'triangle',.08,300);foeFace('angry')}
  else if(F.fs==='recover'&&now>=F.fsUntil){F.fs='idle';foe.classList.remove('wind');F.fsUntil=now+rnd(380,950)/F.spd}
 }
 if(F.fhp<=0)return endFight('win');
 if(F.php<=0)return endFight('lose');
 if(now>=F.end)return endFight('draw');
 requestAnimationFrame(fightLoop);
}
function strike(now){
 const foe=$('#foe'),mv=F.mv,t=MT[mv.type],m=lvMult(W.eq);
 foe.classList.remove('wind');foe.classList.remove('strike','strikeBig');void foe.offsetWidth;foe.classList.add(mv.type==='heavy'||mv.type==='grab'?'strikeBig':'strike');
 const dmg=F.fdmg*t.dmg*F.buff,guard=now<=F.guardUntil,dodge=now<=F.dodgeUntil;
 if(dodge){const perfect=now-F.dodgeStart<=280;
  if(perfect){F.counterUntil=now+900;arPop('pl','หลบสวย! สวนเลย!','#8fd3ff',true);tone(1200,.12,'triangle',.1)}else arPop('pl','หลบได้','#8fd3ff')}
 else if(guard){const perfect=now-F.guardStart<=260;
  if(mv.type==='grab'){hurtMe(dmg,mv.name==='แฟลชกล้อง'?'ตาพร่า! กันไม่ได้':'โดนจับทุ่ม!')}
  else if(mv.type==='heavy'&&!F.wp.reflect){hurtMe(dmg*.55,'กันไม่อยู่!')}
  else if(F.wp.reflect){arPop('pl','สะท้อน!','#8fd3ff',true);hurtFoe(dmg*(perfect?1.5:1)*m,'แป๊ง!');tone(1400,.15,'triangle',.12)}
  else if(perfect){arPop('pl','กันพอดี! สวน!','#8fd3ff',true);hurtFoe(F.wp.dmg*m*.8,'สวนกลับ!')}
  else{arPop('pl','กันได้','#8fd3ff');hurtMe(dmg*.15)}}
 else{let d=dmg;hurtMe(d,mv.type==='heavy'?'โดนเต็มๆ!':(mv.type==='grab'?'โดนจับทุ่ม!':null))}
 if(F.comboLeft>0){F.comboLeft--;F.fs='wind';F.fsUntil=now+windTime(mv,false);setTimeout(()=>{if(F&&!F.done&&F.fs==='wind'){foe.classList.add('wind');showWarn(mv)}},60)}
 else{F.fs='recover';F.fsUntil=now+380;hideWarn()}
}
function fHit(){
 const now=performance.now();if(!F||F.done||now<F.started||now<F.cd)return;
 const wp=F.wp;F.cd=now+wp.cd;
 const w=$('#wpn');w.getAnimations().forEach(a=>a.cancel());w.animate(SWING[W.eq],{duration:Math.min(260,wp.cd*.8)});
 $('#pl .body').animate([{transform:'none'},{transform:'translateX(40px)'},{transform:'none'}],{duration:200});
 let dmg=wp.dmg*lvMult(W.eq)*rnd(.9,1.1),label=null,big=false;
 if(now<F.counterUntil){dmg*=2;label='สวนแรง x2!';big=true;F.counterUntil=0}
 if(F.fs==='block'){
  if(W.eq==='mortar'){F.stunUntil=now+900;$('#foe').classList.remove('blocking');hideWarn();label='ทะลวงการ์ด!';big=true}
  else{hurtFoe(dmg*.2,'ไม่เข้า!');return}}
 else if(F.fs==='taunt'){dmg*=2;label='ตีตอนเบ่ง!';big=true;F.tauntHit=true;F.fs='recover';F.fsUntil=now+600;$('#foe').classList.remove('taunting');hideWarn()}
 else if(F.fs==='wind'){
  const mt=F.mv.type;
  if(mt==='grab'){label='แกะออก!';big=true;F.fs='recover';F.fsUntil=now+650;F.comboLeft=0;$('#foe').classList.remove('wind');hideWarn()}
  else{dmg*=1.4;label=label||'สวนตอนง้าง!';if(wp.interrupt){F.fs='recover';F.fsUntil=now+650;F.comboLeft=0;$('#foe').classList.remove('wind');hideWarn();label='ขัดจังหวะ!'}}
 }
 hurtFoe(dmg,label||pick(['ปั้ก!','โป๊ก!','ตุ้บ!','เพี้ยะ!']),big);
}
function fGuard(){
 const now=performance.now();if(!F||F.done||now<F.guardCd)return;
 F.guardStart=now;F.guardUntil=now+F.wp.guard;F.guardCd=now+F.wp.guard+240;
 const pl=$('#pl');pl.classList.add('guard');setTimeout(()=>pl.classList.remove('guard'),F.wp.guard);tone(600,.06,'triangle',.08);
}
function fDodge(){
 const now=performance.now();if(!F||F.done||now<F.dodgeCd)return;
 F.dodgeStart=now;F.dodgeUntil=now+340;F.dodgeCd=now+760;
 $('#pl').animate([{transform:'none',opacity:1},{transform:'translateX(-70px) translateY(-16px)',opacity:.55,offset:.4},{transform:'none',opacity:1}],{duration:420,easing:'ease-out'});noise(.12,.08,2500);
}
function fSpecial(){
 const now=performance.now();if(!F||F.done||now<F.started||now<F.spReady)return;
 if(now<F.silenceUntil){arPop('pl','ยังใบ้อยู่!','#20bf6b');return}
 const wp=F.wp,m=lvMult(W.eq);F.spReady=now+wp.spCd;arMsg(wp.spNm+'!',700,'#ffb3e6');
 const breakGuard=()=>{if(F.fs==='block'||F.fs==='wind'||F.fs==='taunt'){F.fs='recover';F.fsUntil=now+500;F.comboLeft=0;$('#foe').classList.remove('blocking','wind','taunting');hideWarn();if(F.fs!=='stun')F.tauntHit=true}};
 if(W.eq==='pestle'){breakGuard();for(let i=0;i<5;i++)setTimeout(()=>{if(!F||F.done)return;$('#wpn').animate(SWING.pestle,{duration:80});hurtFoe(wp.dmg*m*.9,i===4?'ตำรัว!!':null,i===4)},i*95)}
 else if(W.eq==='blade'){breakGuard();$('#wpn').animate(SWING.blade,{duration:300});$('#pl .body').animate([{transform:'none'},{transform:'translateX(90px)'},{transform:'none'}],{duration:350});hurtFoe(wp.dmg*m*2.3,'ฟันกวาด!!',true);F.stunUntil=now+500}
 else if(W.eq==='lid'){F.guardStart=now;F.guardUntil=now+1800;F.guardCd=now+1800;const pl=$('#pl');pl.classList.add('guard','wall');setTimeout(()=>pl.classList.remove('guard','wall'),1800)}
 else if(W.eq==='mortar'){breakGuard();$('#wpn').animate([{transform:'translate(0,0) rotate(0)'},{transform:'translate(180px,-60px) rotate(360deg)'},{transform:'translate(0,0) rotate(720deg)'}],{duration:600});setTimeout(()=>{if(!F||F.done)return;hurtFoe(wp.dmg*m*1.9,'โครมมม!!',true);F.stunUntil=performance.now()+1600},300)}
}
const SWING={
 pestle:[{transform:'rotate(-20deg)'},{transform:'rotate(80deg)'},{transform:'rotate(-20deg)'}],
 blade:[{transform:'rotate(-40deg)'},{transform:'rotate(110deg)'},{transform:'rotate(-40deg)'}],
 lid:[{transform:'translateX(0) rotate(0)'},{transform:'translateX(40px) rotate(20deg)'},{transform:'none'}],
 mortar:[{transform:'rotate(-30deg) translateY(-20px)'},{transform:'rotate(40deg) translateY(10px)'},{transform:'rotate(-30deg) translateY(-20px)'}]
};
async function endFight(r){
 F.done=true;clearInterval(crowdTimer);
 const foe=$('#foe'),pl=$('#pl');hideWarn();foe.classList.remove('wind','blocking','taunting','stun','rage');
 if(r==='win'){foe.classList.add('ko');arMsg('K.O.!',1500,'#ffd23f');sfx.ding();foeFace('sad','squint');meFace('happy')}
 else if(r==='lose'){pl.classList.add('ko');arMsg('แพ้ราบคาบ...',1500,'#ff6b5a');sfx.buzz();meFace('sad','squint');foeFace('happy')}
 else{arMsg('หมดเวลา! เสมอ',1500,'#fff');sfx.buzz()}
 await sleep(1600);
 $('#arenaOv').classList.remove('show');
 const res=F.res;F=null;res(r);
}
$('#aHit').addEventListener('pointerdown',e=>{e.preventDefault();fHit()});
$('#aGuard').addEventListener('pointerdown',e=>{e.preventDefault();fGuard()});
$('#aDodge').addEventListener('pointerdown',e=>{e.preventDefault();fDodge()});
$('#aSp').addEventListener('pointerdown',e=>{e.preventDefault();fSpecial()});
$('#foe').addEventListener('pointerdown',e=>{e.preventDefault();fHit()});

/* ---------- Weapon shop ---------- */
function upCost(k){return 100*(W.lv[k]||1)}
function renderShop(){
 $('#shMoney').textContent=G.money;$('#shResp').textContent=G.respect;
 $('#shGrid').innerHTML=Object.entries(WEAPONS).map(([k,w])=>{
  const own=W.owned[k],eq=W.eq===k,lv=W.lv[k];
  const bar=(n)=>'<i class="on"></i>'.repeat(n)+'<i></i>'.repeat(5-n);
  let btn='';
  if(!own)btn=`<button class="sbtn buy" data-a="buy" data-k="${k}" ${G.money<w.price?'disabled':''}>ซื้อ ${w.price}฿</button>`;
  else btn=(eq?`<button class="sbtn eq" disabled>✓ ถืออยู่</button>`:`<button class="sbtn" data-a="eq" data-k="${k}">ถืออันนี้</button>`)+
   (lv<3?`<button class="sbtn up" data-a="up" data-k="${k}" ${G.money<upCost(k)?'disabled':''}>⬆ Lv${lv+1} (${upCost(k)}฿)</button>`:`<button class="sbtn up" disabled>Lv สูงสุด</button>`);
  return `<div class="wcard ${eq?'sel':''} ${own?'':'lockw'}"><div class="wart w-${k}">${WART[k]}</div><div class="winfo"><b>${w.nm}</b> ${own?`<span class="lv">Lv${lv}</span>`:''}
   <div class="stat"><span>เร็ว</span>${bar(w.spd)}</div><div class="stat"><span>แรง</span>${bar(w.pow)}</div><div class="stat"><span>กัน</span>${bar(w.def)}</div>
   <div class="wd">${w.desc} · ท่าไม้ตาย: ${w.spNm}</div><div class="ws">${w.sell}</div><div class="wb">${btn}</div></div></div>`}).join('');
 $('#shGrid').querySelectorAll('button[data-a]').forEach(b=>b.onclick=()=>{const k=b.dataset.k,a=b.dataset.a;
  if(a==='buy'&&G.money>=WEAPONS[k].price){G.money-=WEAPONS[k].price;W.owned[k]=true;W.eq=k;sfx.cash()}
  if(a==='eq'){W.eq=k;sfx.pop()}
  if(a==='up'&&G.money>=upCost(k)){G.money-=upCost(k);W.lv[k]++;sfx.ding()}
  hud();renderShop()});
}
