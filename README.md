# ATTC – Website-Relaunch

Neuentwicklung von [attc.at](https://www.attc.at/): ein statischer, schneller und DSGVO-freundlicher Auftritt ohne CMS-Laufzeit, Cookies oder Tracking.

## Schnellstart

```bash
npm run dev      # baut nach dist/ und startet die Vorschau auf http://localhost:4173
npm run check    # Build + Prüfung aller internen Links, Bilder, Anker, Titel und Alt-Texte
```

Voraussetzung: Node.js ≥ 20. Es werden **keine** npm-Pakete benötigt.

## Struktur

| Pfad | Inhalt |
|---|---|
| `src/data.mjs` | **Alle Inhalte**: Gremien, Mitglieder, News, Veranstaltungen, Publikationen |
| `src/pages.mjs` | Seitenaufbau (Start, Cluster, Gremien, Mitglieder, Mitglied werden, Veranstaltungen, Aktuelles, Publikationen, Kontakt, Impressum, Datenschutz, 404) |
| `src/layout.mjs` | Header, Footer, Meta-Tags/SEO, wiederkehrende Bausteine, Icons |
| `src/assets/` | CSS-Designsystem, JavaScript, selbst gehostete Schriften (Jost, Inter), Bilder (WebP), PDFs |
| `src/static/` | Favicon, Web-Manifest (landen im Wurzelverzeichnis) |
| `build.mjs` | Build → `dist/` inkl. `sitemap.xml`, `robots.txt` und 301-Weiterleitungen |

## Inhalte pflegen

- **News**: neuen Eintrag oben in `news` in `src/data.mjs` ergänzen, Bild als `src/assets/img/news/<name>-800.webp` und `-1600.webp` ablegen.
- **Kamingespräch**: Zeile in `kamingespraeche` ergänzen – Archiv, Jahresfilter und Kennzahlen aktualisieren sich automatisch.
- **Personen**: Einträge in `praesidium`, `vorstand`, `startmitglieder` bzw. `generalsekretariat` (Porträt 300×400 WebP in `img/people/`).

## Deployment

Der Inhalt von `dist/` kann auf jedem Webserver/Static-Host liegen.

- **GitHub Pages**: Workflow `.github/workflows/pages.yml` baut bei jedem Push automatisch (mit `BASE_PATH=/<repo>`).
- **Eigene Domain / Webserver**: `npm run build`, dann `dist/` hochladen. Für die alten WordPress-URLs liegen Weiterleitungen als `_redirects` (Netlify/Cloudflare) und `nginx-redirects.conf` bei.

## Technische Eckpunkte

- Responsive (Mobile-first), barrierearm: Skip-Link, Fokus-Stile, ARIA, `prefers-reduced-motion`
- Keine Cookies, kein Tracking, keine externen Requests → kein Cookie-Banner nötig
- Strukturierte Daten (Organization, NewsArticle), Open-Graph-Bild, Sitemap
- Bilder als WebP mit `srcset`, Lazy Loading, Cache-Busting für CSS/JS
