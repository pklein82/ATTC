// Erzeugt Favicons und das Social-Sharing-Bild (og-image.jpg) mit Playwright.
// Nur nötig, wenn sich Logo oder Branding ändern: node scripts/render-assets.mjs
import { createRequire } from 'node:module';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch { pw = require(`${process.env.NODE_PATH || '/opt/node22/lib/node_modules'}/playwright`); }

const browser = await pw.chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();
const svg = await readFile('src/static/favicon.svg', 'utf8');
for (const [size, out] of [[512, 'src/assets/img/favicon-512.png'], [180, 'src/assets/img/apple-touch-icon.png'], [32, 'favicon-32.png']]) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<style>*{margin:0}svg{width:${size}px;height:${size}px;display:block}</style>${svg}`);
  await page.screenshot({ path: out, omitBackground: true });
}
const font = (f) => `url(file://${resolve('src/assets/fonts', f)})`;
await page.setViewportSize({ width: 1200, height: 630 });
const tmp = resolve('.og-tmp.html');
await writeFile(tmp, `<style>
@font-face{font-family:Jost;src:${font('jost-var.woff2')};font-weight:300 800}
@font-face{font-family:Inter;src:${font('inter-var.woff2')};font-weight:300 800}
*{margin:0;box-sizing:border-box}body{width:1200px;height:630px;background:#0c1a26;color:#fff;font-family:Inter;position:relative;overflow:hidden}
.bg{position:absolute;inset:0;background:url(file://${resolve('src/assets/img/news/fachmesse-pano-1600.webp')}) center/cover;opacity:.28;filter:grayscale(.4)}
.ov{position:absolute;inset:0;background:radial-gradient(70% 80% at 90% 10%,rgba(77,116,146,.55),transparent 60%),linear-gradient(100deg,rgba(12,26,38,.97),rgba(12,26,38,.6))}
.c{position:absolute;inset:72px 80px;display:flex;flex-direction:column;justify-content:space-between}
.logo{font-family:Jost;font-weight:600;font-size:64px;letter-spacing:2px;color:#7fa6c4;display:flex;align-items:center;gap:22px}
.logo span{font-size:15px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.7);border-left:1px solid rgba(255,255,255,.3);padding-left:22px;line-height:1.3;font-weight:500}
h1{font-family:Jost;font-weight:500;font-size:68px;line-height:1.05;max-width:900px;letter-spacing:-1px}h1 em{font-style:normal;color:#f2a93b}
p{font-size:22px;color:rgba(255,255,255,.75)}</style>
<div class="bg"></div><div class="ov"></div><div class="c"><div class="logo">ATTC<span>Austrian Traffic<br>Telematics Cluster</span></div>
<div><h1>Wo Österreichs Mobilität <em>vernetzt</em> gedacht wird.</h1><p style="margin-top:22px">Seit 2003 die Kooperationsplattform für Verkehrstelematik</p></div></div>`);
await page.goto(`file://${tmp}`);
await page.waitForTimeout(300);
await page.screenshot({ path: 'src/assets/img/og-image.jpg', type: 'jpeg', quality: 85 });
await browser.close();
await (await import('node:fs/promises')).rm(tmp);
