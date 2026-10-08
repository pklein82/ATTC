// Qualitätsprüfung des Builds: interne Links, Bilder, Anker, Alt-Texte, Titel.
// Aufruf: node scripts/check.mjs (nach dem Build)
import { readdir, readFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = 'dist';
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');
const files = [];
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
}
await walk(ROOT);

const exists = (p) => access(p).then(() => true, () => false);
const errors = [];
const idsByFile = new Map();
const docs = new Map();

for (const f of files) {
  const html = await readFile(f, 'utf8');
  docs.set(f, html);
  idsByFile.set(f, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}

for (const [f, html] of docs) {
  if (!/<title>[^<]{5,}<\/title>/.test(html)) errors.push(`${f}: fehlender <title>`);
  if (!/<meta name="description" content="[^"]{30,}"/.test(html)) errors.push(`${f}: Meta-Description zu kurz`);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) errors.push(`${f}: genau eine <h1> erwartet`);
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt="/.test(m[0])) errors.push(`${f}: <img> ohne alt: ${m[0].slice(0, 80)}`);

  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g), ...html.matchAll(/\ssrcset="([^"]+)"/g)]
    .flatMap((m) => m[1].split(',').map((s) => s.trim().split(/\s+/)[0]));
  for (const ref of refs) {
    if (!ref.startsWith('/') || ref.startsWith('//')) continue;
    if (BASE && !ref.startsWith(`${BASE}/`)) { errors.push(`${f}: Link ohne Basis-Pfad: ${ref}`); continue; }
    const [pathPart, hash] = ref.slice(BASE.length).split('?')[0].split('#');
    let target = join(ROOT, pathPart);
    if (pathPart.endsWith('/')) target = join(target, 'index.html');
    if (!(await exists(target))) { errors.push(`${f}: Link-Ziel fehlt: ${ref}`); continue; }
    if (hash && target.endsWith('.html') && !idsByFile.get(target)?.has(hash)) errors.push(`${f}: Anker fehlt: ${ref}`);
  }
  for (const m of html.matchAll(/\shref="#([^"]+)"/g)) {
    if (!idsByFile.get(f).has(m[1])) errors.push(`${f}: In-Page-Anker fehlt: #${m[1]}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n✗ ${errors.length} Problem(e) in ${files.length} Seiten`);
  process.exit(1);
}
console.log(`✓ ${files.length} Seiten geprüft – keine defekten Links, Bilder oder Anker`);
