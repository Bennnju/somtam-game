#!/usr/bin/env bash
# รวมไฟล์ใน src/ เป็น index.html ไฟล์เดียว (เล่นได้ทันที / อัปขึ้น itch.io, Netlify, GitHub Pages)
set -e
cd "$(dirname "$0")"
{
  cat src/head.html src/defs.html src/body.html
  echo '<script>'
  cat <<'JS'
const $=s=>document.querySelector(s);
const rnd=(a,b)=>a+Math.random()*(b-a);
const ri=(a,b)=>Math.floor(rnd(a,b+1));
const pick=a=>a[Math.floor(Math.random()*a.length)];
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
JS
  cat src/art.js src/fight.js src/game.js
  echo '</script>'
  echo '</body></html>'
} > index.html
echo "built index.html ($(wc -c < index.html) bytes)"
