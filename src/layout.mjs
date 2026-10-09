import { site, themes_design } from './data.mjs';

// Escape für Text aus den Daten. Redaktionelles HTML (news.body) wird bewusst nicht escaped.
export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const MONTHS = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
const MONTHS_SHORT = ['Jän', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

export const fmtDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d}. ${MONTHS[m - 1]} ${y}`;
};
export const fmtDateShort = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return { day: String(d).padStart(2, '0'), month: MONTHS_SHORT[m - 1], year: y };
};

// Responsives Bild aus assets/img/<base>-{800,1600}.webp
export const picture = (base, alt, { sizes = '100vw', cls = '', eager = false, w = 1600, h = 900 } = {}) =>
  `<img class="${cls}" src="/assets/img/${base}-1600.webp" srcset="/assets/img/${base}-800.webp 800w, /assets/img/${base}-1600.webp 1600w" sizes="${sizes}" alt="${esc(alt)}" width="${w}" height="${h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  'arrow-down': '<path d="M12 5v14M6 13l6 6 6-6"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  signal: '<path d="M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/><path d="M2 8.5a15 15 0 0 1 20 0"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/><circle cx="12" cy="12" r="2.5"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19 13 11"/>',
  data: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  rail: '<rect x="6" y="3" width="12" height="13" rx="3"/><path d="M6 10h12M9 20l-2 2M15 20l2 2M9 13h.01M15 13h.01"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  flame: '<path d="M12 21c4 0 7-2.7 7-7 0-4-3-6-4-9-1.5 2-2 3.5-2 5-1-1-2-2.5-2-4.5C8 8 5 11 5 14c0 4.3 3 7 7 7z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M8 7h7"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5.5 3.5-5.5 3.5z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
};
export const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;

// Wortmarke nach dem ATTC-Logo (Futura-Anmutung via Jost).
export const logo = (variant = '') => `
<a class="logo ${variant}" href="/" aria-label="ATTC – zur Startseite">
  <svg class="logo__mark" viewBox="0 0 120 34" aria-hidden="true"><text x="0" y="29" font-family="Jost, Futura, sans-serif" font-weight="600" font-size="36" letter-spacing="1.5" fill="currentColor">ATTC</text></svg>
  <span class="logo__sub">Austrian Traffic<br>Telematics Cluster</span>
</a>`;

export const NAV = [
  { href: '/cluster/', label: 'Cluster' },
  { href: '/gremien/', label: 'Gremien' },
  { href: '/mitglieder/', label: 'Mitglieder' },
  { href: '/veranstaltungen/', label: 'Veranstaltungen' },
  { href: '/aktuelles/', label: 'Aktuelles' },
  { href: '/publikationen/', label: 'Publikationen' },
];

const header = (path) => `
<a class="skip-link" href="#main">Zum Inhalt springen</a>
<header class="site-header" data-header>
  <div class="container site-header__inner">
    ${logo()}
    <nav class="main-nav" aria-label="Hauptnavigation">
      <ul>
        ${NAV.map((n) => `<li><a href="${n.href}"${path.startsWith(n.href) ? ' aria-current="page"' : ''}>${n.label}</a></li>`).join('')}
      </ul>
    </nav>
    <div class="site-header__actions">
      <a class="header-link" href="${site.memberLogin}" rel="nofollow">${icon('lock')}<span>Mitglieder</span></a>
      <a class="btn btn--primary btn--sm" href="/mitglied-werden/">Mitglied werden</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" data-nav-toggle>
        <span class="sr-only">Menü öffnen</span>${icon('menu', 'icon icon--open')}${icon('close', 'icon icon--close')}
      </button>
    </div>
  </div>
  <div class="mobile-nav" id="mobile-nav" hidden data-mobile-nav>
    <nav class="container" aria-label="Mobile Navigation">
      <ul>
        ${NAV.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
        <li><a href="/kontakt/">Kontakt</a></li>
      </ul>
      <div class="mobile-nav__cta">
        <a class="btn btn--primary" href="/mitglied-werden/">Mitglied werden ${icon('arrow')}</a>
        <a class="btn btn--ghost" href="${site.memberLogin}" rel="nofollow">${icon('lock')} Mitglieder-Login</a>
      </div>
    </nav>
  </div>
</header>`;

const footer = () => `
<footer class="site-footer">
  <div class="container">
    <div class="footer-cta">
      <div>
        <p class="eyebrow eyebrow--light">Kontakt</p>
        <p class="footer-cta__title">Lassen Sie uns über die Mobilität von morgen sprechen.</p>
      </div>
      <div class="footer-cta__actions">
        <a class="btn btn--light" href="mailto:${site.email}">${icon('mail')} ${site.email}</a>
        <a class="btn btn--outline-light" href="tel:${site.phone.replace(/\s/g, '')}">${icon('phone')} ${site.phoneDisplay}</a>
      </div>
    </div>
    <div class="footer-grid">
      <div class="footer-brand">
        ${logo('logo--light')}
        <p>Verein zur Förderung der Telematik. Seit ${site.founded} die Kooperationsplattform für Verkehrstelematik in Österreich.</p>
      </div>
      <div>
        <h2 class="footer-title">Adresse</h2>
        <address>
          Austrian Traffic Telematics Cluster<br>
          ${site.address.co}<br>
          ${site.address.street}, ${site.address.zip} ${site.address.city}<br>
          ${site.address.country}
        </address>
      </div>
      <div>
        <h2 class="footer-title">Cluster</h2>
        <ul class="footer-links">
          ${NAV.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <h2 class="footer-title">Service</h2>
        <ul class="footer-links">
          <li><a href="/mitglied-werden/">Mitglied werden</a></li>
          <li><a href="/kontakt/">Kontakt</a></li>
          <li><a href="${site.memberLogin}" rel="nofollow">Mitglieder-Login</a></li>
          <li><a href="${site.englishSite}" hreflang="en" lang="en">English</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} ATTC – Austrian Traffic Telematics Cluster · ZVR ${site.zvr}</p>
      <ul>
        <li><a href="/impressum/">Impressum</a></li>
        <li><a href="/datenschutz/">Datenschutz</a></li>
      </ul>
    </div>
  </div>
</footer>`;


const themeSwitcher = () => !site.themeSwitcher ? '' : `
<div class="theme-switch" role="group" aria-label="Design-Variante wählen" data-theme-switch>
  <span class="theme-switch__label">Design</span>
  <div class="theme-switch__options">
    ${themes_design.map((t) => `<button type="button" data-set-theme="${t.id}" data-theme-color="${t.themeColor}" aria-pressed="${t.id === 'technik'}"><span class="theme-switch__swatch" style="background:linear-gradient(135deg, ${t.swatch[0]} 50%, ${t.swatch[1]} 50%)"></span>${t.label}</button>`).join('')}
  </div>
</div>`;

export function layout({ path, title, description, body, image = '/assets/img/og-image.jpg', jsonLd = null, type = 'website' }) {
  const fullTitle = path === '/' ? `${site.name}` : `${title} · ATTC`;
  const canonical = site.url + path;
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Austrian Traffic Telematics Cluster',
      alternateName: 'ATTC',
      url: site.url,
      logo: `${site.url}/assets/img/favicon-512.png`,
      foundingDate: String(site.founded),
      email: site.email,
      telephone: site.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        postalCode: site.address.zip,
        addressLocality: site.address.city,
        addressCountry: 'AT',
      },
    },
    ...(jsonLd ? [jsonLd] : []),
  ];
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="de" href="${canonical}">
<meta name="theme-color" content="#0c1a26">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="ATTC – Austrian Traffic Telematics Cluster">
<meta property="og:locale" content="de_AT">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.url}${image}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/jost-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
${site.themeSwitcher ? `<script>(function(){try{var ok=${JSON.stringify(themes_design.map((t) => t.id))},q=new URLSearchParams(location.search).get('design'),t=q||localStorage.getItem('attc-design');if(q)localStorage.setItem('attc-design',q);if(t&&t!=='technik'&&ok.indexOf(t)>-1)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()</script>` : ''}
<link rel="stylesheet" href="/assets/css/main.css?v=__VERSION__">
<script src="/assets/js/main.js?v=__VERSION__" defer></script>
<script type="application/ld+json">${JSON.stringify(ld.length === 1 ? ld[0] : ld)}</script>
</head>
<body>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
${themeSwitcher()}
</body>
</html>
`;
}

// Wiederkehrende Bausteine
export const pageHero = ({ eyebrow, title, lead, img, crumbs = [] }) => `
<section class="page-hero${img ? ' page-hero--image' : ''}">
  ${img ? `<div class="page-hero__media">${picture(img, '', { eager: true })}</div>` : ''}
  <div class="page-hero__grid" aria-hidden="true"></div>
  <div class="container page-hero__inner">
    ${crumbs.length ? `<nav class="breadcrumbs" aria-label="Brotkrumen"><ol><li><a href="/">Start</a></li>${crumbs.map((c) => (c.href ? `<li><a href="${c.href}">${esc(c.label)}</a></li>` : `<li aria-current="page">${esc(c.label)}</li>`)).join('')}</ol></nav>` : ''}
    ${eyebrow ? `<p class="eyebrow eyebrow--light" data-reveal>${esc(eyebrow)}</p>` : ''}
    <h1 class="page-hero__title" data-reveal>${title}</h1>
    ${lead ? `<p class="page-hero__lead" data-reveal>${lead}</p>` : ''}
  </div>
</section>`;

export const sectionHead = ({ eyebrow, title, text, align = '', id = '' }) => `
<div class="section-head ${align}" data-reveal>
  ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
  <h2 class="section-title"${id ? ` id="${id}"` : ''}>${title}</h2>
  ${text ? `<p class="section-lead">${text}</p>` : ''}
</div>`;

export const ctaBand = ({ title = 'Gestalten Sie die Mobilität von morgen mit.', text = 'Werden Sie Teil eines Netzwerks, in dem Betreiber, Industrie und Forschung gemeinsam Lösungen auf die Straße, die Schiene und in die Luft bringen.', primary = { href: '/mitglied-werden/', label: 'Mitglied werden' }, secondary = { href: '/kontakt/', label: 'Kontakt aufnehmen' } } = {}) => `
<section class="cta-band">
  <div class="container cta-band__inner" data-reveal>
    <div class="cta-band__lines" aria-hidden="true"></div>
    <div class="cta-band__text">
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
    <div class="cta-band__actions">
      <a class="btn btn--signal btn--lg" href="${primary.href}">${primary.label} ${icon('arrow')}</a>
      ${secondary ? `<a class="btn btn--outline-light btn--lg" href="${secondary.href}">${secondary.label}</a>` : ''}
    </div>
  </div>
</section>`;
