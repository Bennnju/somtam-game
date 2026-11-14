/* ---------- Ingredient art (swap for painted PNGs in phase 5) ---------- */
function papayaArt(){
 let seed=11;const r=()=>{seed=(seed*9301+49297)%233280;return seed/233280};
 let s='<ellipse cx="50" cy="78" rx="42" ry="12" fill="#6f8f35" opacity=".35"/>';
 const strands=[];
 for(let i=0;i<54;i++){
  const x=12+r()*76;const top=34+Math.pow(Math.abs(x-50)/38,1.6)*34;const y=top+r()*(78-top);
  const len=12+r()*18,ang=(r()-.5)*1.8;
  const x2=x+Math.cos(ang)*len,y2=Math.min(82,y+Math.sin(ang)*len*.5);
  const cx=(x+x2)/2+(r()-.5)*12,cy=(y+y2)/2-3-r()*7;
  const col=['#d9ee9f','#c6e07f','#ecf7c4','#b6d46a','#f3fad8'][Math.floor(r()*5)];
  const w=(2.2+r()*1.8).toFixed(1);
  strands.push({y,d:`M${x.toFixed(1)} ${y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`,col,w});
 }
 strands.sort((a,b)=>a.y-b.y);
 for(const t of strands){s+=`<path d="${t.d}" transform="translate(0,1.2)" stroke="#7f9e3f" stroke-width="${t.w}" stroke-linecap="round" fill="none" opacity=".7"/><path d="${t.d}" stroke="${t.col}" stroke-width="${t.w}" stroke-linecap="round" fill="none"/>`}
 for(let i=0;i<6;i++){const x=24+r()*52,y=48+r()*24;s+=`<path d="M${x} ${y} q${6+r()*6} ${-4-r()*4} ${12+r()*8} ${r()*4}" stroke="#f0913a" stroke-width="2.2" stroke-linecap="round" fill="none"/>`}
 return `<svg viewBox="0 0 100 100">${s}</svg>`;
}
const CHILI1='<path d="M30 34 C44 30 64 42 75 63 C81 74 82 83 77 86 C70 82 59 71 48 60 C38 50 30 43 27 39Z" fill="url(#gChili)"/><path d="M35 37 C47 36 60 46 69 61" stroke="#fff" stroke-opacity=".6" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M73 72 C75 77 76 80 75 82" stroke="#fff" stroke-opacity=".35" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M23 35 C25 30 33 29 35 35 C32 40 26 40 23 35Z" fill="url(#gChiliG)"/><path d="M26 33 C21 27 16 24 10 26" stroke="#4f9a2a" stroke-width="4" fill="none" stroke-linecap="round"/>';
const ART={
 papaya:papayaArt(),
 garlic:`<svg viewBox="0 0 100 100">${[[-24,30,62],[0,50,56],[22,70,62]].map(([a,x,y])=>`<g transform="rotate(${a} ${x} ${y})"><path d="M${x} ${y-34} C${x+9} ${y-22} ${x+16} ${y-8} ${x+14} ${y+8} C${x+12} ${y+20} ${x-12} ${y+20} ${x-14} ${y+8} C${x-16} ${y-8} ${x-9} ${y-22} ${x} ${y-34}Z" fill="url(#gGarlic)"/><path d="M${x-4} ${y-24} C${x-8} ${y-8} ${x-8} ${y+6} ${x-5} ${y+14} M${x+5} ${y-20} C${x+8} ${y-4} ${x+7} ${y+8} ${x+5} ${y+14}" stroke="#a06aa0" stroke-opacity=".45" stroke-width="1.6" fill="none"/><path d="M${x-7} ${y-6} C${x-8} ${y} ${x-7} ${y+5} ${x-5} ${y+9}" stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none" opacity=".8"/></g>`).join('')}</svg>`,
 chili:`<svg viewBox="0 0 100 100"><g transform="translate(14,22) rotate(14 50 50) scale(.82)">${CHILI1}</g><g transform="translate(-6,-4) rotate(-12 50 50)">${CHILI1}</g></svg>`,
 lime:`<svg viewBox="0 0 100 100"><circle cx="40" cy="50" r="28" fill="url(#gLime)"/>${Array.from({length:18},(_,i)=>`<circle cx="${(40+Math.cos(i*2.4)*18*((i%3+1)/3)).toFixed(1)}" cy="${(50+Math.sin(i*2.4)*18*((i%3+1)/3)).toFixed(1)}" r="1" fill="#1d4a0e" opacity=".25"/>`).join('')}<ellipse cx="30" cy="38" rx="9" ry="5" fill="#fff" opacity=".4" transform="rotate(-35 30 38)"/><circle cx="68" cy="66" r="23" fill="#4f9a2a"/><circle cx="68" cy="66" r="20.5" fill="#f4fbd6"/><circle cx="68" cy="66" r="18.5" fill="url(#gLimeCut)"/>${Array.from({length:9},(_,i)=>{const a=i/9*Math.PI*2;return `<path d="M68 66 L${(68+Math.cos(a)*18).toFixed(1)} ${(66+Math.sin(a)*18).toFixed(1)}" stroke="#fbffe8" stroke-width="1.8"/>`}).join('')}<circle cx="68" cy="66" r="3" fill="#fbffe8"/><ellipse cx="62" cy="58" rx="6" ry="3" fill="#fff" opacity=".55"/></svg>`,
 tomato:`<svg viewBox="0 0 100 100"><circle cx="40" cy="60" r="25" fill="url(#gTom)"/><circle cx="68" cy="44" r="19" fill="url(#gTom)"/><ellipse cx="31" cy="50" rx="7" ry="4.5" fill="#fff" opacity=".55" transform="rotate(-30 31 50)"/><ellipse cx="62" cy="37" rx="5" ry="3" fill="#fff" opacity=".55" transform="rotate(-30 62 37)"/><path d="M40 36 l4 6 7-2-4 6 6 4-7 1-1 7-4-6-5 4 1-7-7-2 6-3-2-7z" fill="#3f8a24" transform="translate(0,1)"/><path d="M68 25 l3 5 6-1-3 5 5 3-6 1-1 6-3-5-5 3 1-6-6-2 5-3-1-6z" fill="#3f8a24"/></svg>`,
 sugar:`<svg viewBox="0 0 100 100"><ellipse cx="50" cy="70" rx="34" ry="13" fill="#4e2a0c"/><rect x="16" y="50" width="68" height="20" fill="url(#gSugarSide)"/><ellipse cx="50" cy="50" rx="34" ry="13" fill="url(#gSugarTop)"/>${Array.from({length:10},(_,i)=>{const a=i/10*Math.PI*2;return `<path d="M50 50 L${(50+Math.cos(a)*30).toFixed(1)} ${(50+Math.sin(a)*11).toFixed(1)}" stroke="#8a5420" stroke-opacity=".35" stroke-width="1"/>`}).join('')}<ellipse cx="40" cy="45" rx="12" ry="3.5" fill="#fff" opacity=".35"/><path d="M20 58 C24 64 30 68 38 69" stroke="#fff" stroke-opacity=".2" stroke-width="3" fill="none"/></svg>`,
 plara:`<svg viewBox="0 0 100 100"><rect x="30" y="38" width="40" height="46" rx="8" fill="url(#gPlara)"/><ellipse cx="50" cy="38" rx="20" ry="4" fill="#b08a48"/><ellipse cx="42" cy="58" rx="9" ry="3" fill="#c9a870" opacity=".7" transform="rotate(-20 42 58)"/><ellipse cx="57" cy="70" rx="8" ry="2.6" fill="#c9a870" opacity=".6" transform="rotate(15 57 70)"/><circle cx="56" cy="52" r="1.6" fill="#e0c690" opacity=".8"/><circle cx="40" cy="74" r="1.4" fill="#e0c690" opacity=".8"/><rect x="27" y="26" width="46" height="62" rx="10" fill="url(#gJar)" stroke="#fff" stroke-opacity=".6" stroke-width="1.5"/><rect x="29" y="16" width="42" height="12" rx="3" fill="#c0392b"/><rect x="29" y="16" width="42" height="4" rx="2" fill="#e25b4b"/><path d="M33 34 L33 80" stroke="#fff" stroke-opacity=".7" stroke-width="3" stroke-linecap="round"/></svg>`,
 crab:`<svg viewBox="0 0 100 100"><g stroke="#2a1a12" stroke-width="3.4" stroke-linecap="round" fill="none">${[-1,1].map(s=>[0,1,2].map(i=>`<path d="M${50+s*18} ${62+i*5} q${s*14} ${-2+i*3} ${s*20} ${8+i*5}"/>`).join('')).join('')}</g><path d="M34 48 q-12 -10 -16 -22" stroke="#3a2418" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M66 48 q12 -10 16 -22" stroke="#3a2418" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M12 24 c4 -10 16 -8 14 2 c-4 -2 -8 -2 -10 4z" fill="url(#gCrab)"/><path d="M88 24 c-4 -10 -16 -8 -14 2 c4 -2 8 -2 10 4z" fill="url(#gCrab)"/><ellipse cx="50" cy="62" rx="26" ry="18" fill="url(#gCrab)"/><path d="M30 60 C40 54 60 54 70 60" stroke="#a07a58" stroke-opacity=".4" stroke-width="1.5" fill="none"/><ellipse cx="42" cy="54" rx="9" ry="3.5" fill="#fff" opacity=".22"/><circle cx="44" cy="45" r="2.5" fill="#111"/><circle cx="56" cy="45" r="2.5" fill="#111"/></svg>`
};
const ING={
 papaya:{nm:'มะละกอสับ',max:2},garlic:{nm:'กระเทียม',max:4},chili:{nm:'พริกขี้หนู',max:15},lime:{nm:'มะนาว',max:3},
 tomato:{nm:'มะเขือเทศ',max:3},sugar:{nm:'น้ำตาลปี๊บ',max:3},plara:{nm:'ปลาร้า',max:2},crab:{nm:'ปูดอง',max:2}
};
const KEYS=['papaya','garlic','chili','lime','tomato','sugar','plara','crab'];
const LOCKED=[{nm:'หน่อไม้ดอง',lv:3,ic:'🎋'},{nm:'ผักก้านจอง',lv:3,ic:'🌿'},{nm:'กุ้งสด',lv:4,ic:'🦐'},{nm:'ปูม้า',lv:6,ic:'🦀'},{nm:'พริกพญานาค',lv:8,ic:'✨'}];
const MENUS=[
 {id:'thai',nm:'ตำไทย',price:50,base:{papaya:1,garlic:1,lime:1,tomato:1,sugar:1}},
 {id:'pu',nm:'ตำปู',price:60,base:{papaya:1,garlic:1,lime:1,tomato:1,sugar:1,crab:1}},
 {id:'plara',nm:'ตำปลาร้า',price:60,base:{papaya:1,garlic:1,lime:1,tomato:1,plara:1}},
 {id:'pupla',nm:'ตำปูปลาร้า',price:70,base:{papaya:1,garlic:1,lime:1,tomato:1,plara:1,crab:1}}
];

