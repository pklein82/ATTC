// Statischer Build ohne Abhängigkeiten: node build.mjs → dist/
import { mkdir, rm, writeFile, cp, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { allPages } from './src/pages.mjs';
import { readdir, stat } from 'node:fs/promises';
import { site, news, talkMobility } from './src/data.mjs';

const OUT = 'dist';
// Optionaler Unterpfad, z. B. BASE_PATH=/attc für GitHub Pages (https://<user>.github.io/attc/)
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');
const withBase = (html) =>
  !BASE
    ? html
    : html
        .replace(/(\s(?:href|src|action|content)=")\/(?!\/)/g, `$1${BASE}/`)
        .replace(/(\ssrcset=")([^"]+)"/g, (_, a, v) => `${a}${v.replace(/(^|,\s*)\/(?!\/)/g, `$1${BASE}/`)}"`)
        .replace(/url\('\/(?!\/)/g, `url('${BASE}/`);

await rm(OUT, { recursive: true, force: true });
await cp('src/assets', join(OUT, 'assets'), { recursive: true });
await cp('src/static', OUT, { recursive: true });

// Cache-Busting: Hash aus CSS + JS
const hash = createHash('sha256')
  .update(await readFile('src/assets/css/main.css'))
  .update(await readFile('src/assets/js/main.js'))
  .digest('hex')
  .slice(0, 10);

// Dateigrößen der talkMobility-PDFs für die Download-Angaben
const docSizes = {};
for (const f of await readdir('src/assets/docs/talkmobility')) docSizes[f] = (await stat(join('src/assets/docs/talkmobility', f))).size;
const pages = allPages(docSizes);
for (const [path, html] of pages) {
  const file = path.endsWith('.html') ? join(OUT, path) : join(OUT, path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, withBase(html.replaceAll('__VERSION__', hash)));
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = pages
  .map(([p]) => p)
  .filter((p) => !p.endsWith('.html'))
  .map((p) => {
    const n = news.find((x) => p === `/aktuelles/${x.slug}/`);
    return `  <url><loc>${site.url}${p}</loc><lastmod>${n ? n.date : today}</lastmod></url>`;
  });
await writeFile(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
await writeFile(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);

// Weiterleitungen von den alten WordPress-URLs (301), damit Links und Rankings erhalten bleiben.
const redirects = [
  ['/wer-ist-der-attc/', '/cluster/'],
  ['/wer-ist-der-attc/prasidium/', '/gremien/#praesidium'],
  ['/wer-ist-der-attc/vorstand/', '/gremien/#vorstand'],
  ['/wer-ist-der-attc/startmitglieder/', '/gremien/#startmitglieder'],
  ['/wer-ist-der-attc/generalsekretaer/', '/gremien/#generalsekretariat'],
  ['/veranstaltungen/talk-mobility/', '/veranstaltungen/#talkmobility'],
  ['/veranstaltungen/kamingesprache/', '/veranstaltungen/#kamingespraeche'],
  ['/veranstaltungen/weitere-events/', '/veranstaltungen/#weitere'],
  ['/trendmobility/', '/publikationen/'],
  ['/positionspapier-ki-in-der-mobilitaet-2024/', '/assets/docs/positionspapier-ki-2024.pdf'],
  ...news.map((n) => [`/${n.oldSlug}/`, `/aktuelles/${n.slug}/`]),
  ...talkMobility.map((t) => [`/veranstaltungen/talk-mobility/${t.oldSlug}/`, `/veranstaltungen/talkmobility/${t.no}/`]),
];
// Netlify / Cloudflare Pages
await writeFile(join(OUT, '_redirects'), redirects.map(([from, to]) => `${from} ${to} 301`).join('\n') + '\n');
// nginx-Snippet für klassisches Hosting
await writeFile(
  join(OUT, 'nginx-redirects.conf'),
  redirects.map(([from, to]) => `location = ${from.replace(/\/$/, '')} { return 301 ${to}; }\nlocation = ${from} { return 301 ${to}; }`).join('\n') + '\n',
);

console.log(`✓ ${pages.length} Seiten nach ${OUT}/ gebaut (assets v${hash}${BASE ? `, Basis ${BASE}` : ''})`);
