import {
  site, orgs, praesidium, vorstand, startmitglieder, generalsekretariat, ehrenmitglieder,
  memberOrgs, themes, talkMobility, kamingespraeche, milestones, weitereEvents, publications, news,
} from './data.mjs';
import { layout, esc, icon, picture, pageHero, sectionHead, ctaBand, fmtDate, fmtDateShort } from './layout.mjs';

const yearsActive = new Date().getFullYear() - site.founded;
const latestNews = [...news].sort((a, b) => b.date.localeCompare(a.date));
const featuredPub = publications.find((p) => p.featured);

const stats = [
  { value: site.founded, label: 'gegründet auf Initiative der ASFINAG', plain: true },
  { value: memberOrgs.length, label: 'Mitgliedsorganisationen aus Betrieb, Industrie und Forschung' },
  { value: kamingespraeche.length, label: 'Kamingespräche bei Mitgliedern und Partnern', suffix: '+' },
  { value: talkMobility.length, label: 'Ausgaben der Vortragsreihe talkMobility' },
];

// ---------- Bausteine ----------
const logoTile = (key) => `
<li class="logo-tile" title="${esc(orgs[key].full)}">
  <img src="/assets/img/logos/${key}.webp" alt="${esc(orgs[key].full)}" decoding="async">
</li>`;

const personCard = (p) => `
<li class="person" data-reveal>
  <div class="person__photo"><img src="/assets/img/people/${p.img}.webp" alt="" width="300" height="400" loading="lazy" decoding="async"></div>
  <div class="person__body">
    <p class="person__role">${esc(p.role)}</p>
    <h3 class="person__name">${esc(p.name)}</h3>
    ${p.org ? `<p class="person__org">${esc(orgs[p.org].full)}</p>` : ''}
    ${p.email ? `<a class="person__mail" href="mailto:${p.email}">${icon('mail')} ${p.email}</a>` : ''}
  </div>
</li>`;

const newsCard = (n, { large = false } = {}) => {
  const d = fmtDateShort(n.date);
  return `
<article class="news-card${large ? ' news-card--large' : ''}" data-reveal>
  <a class="news-card__link" href="/aktuelles/${n.slug}/">
    <div class="news-card__media">${picture(n.img, '', { sizes: large ? '(min-width: 1000px) 50vw, 100vw' : '(min-width: 1000px) 25vw, (min-width: 640px) 50vw, 100vw' })}</div>
    <div class="news-card__body">
      <p class="news-card__meta"><time datetime="${n.date}">${d.day}. ${d.month} ${d.year}</time><span>${esc(n.category)}</span></p>
      <h3 class="news-card__title">${esc(n.title)}</h3>
      ${large ? `<p class="news-card__teaser">${esc(n.teaser)}</p>` : ''}
      <span class="news-card__more">Weiterlesen ${icon('arrow')}</span>
    </div>
  </a>
</article>`;
};

const heroNetwork = () => `
<svg class="hero-network" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" data-network>
  <defs>
    <linearGradient id="ln" x1="0" x2="1"><stop offset="0" style="stop-color:var(--net)" stop-opacity="0"/><stop offset=".5" style="stop-color:var(--net)" stop-opacity=".55"/><stop offset="1" style="stop-color:var(--net)" stop-opacity="0"/></linearGradient>
  </defs>
  <g fill="none" stroke="url(#ln)" stroke-width="1.2">
    <path id="r1" d="M-40 620 C 260 560, 420 420, 720 430 S 1180 300, 1500 180"/>
    <path id="r2" d="M-40 300 C 240 330, 460 520, 760 540 S 1200 640, 1500 600"/>
    <path id="r3" d="M200 860 C 320 640, 520 380, 720 430 S 980 160, 1100 -40"/>
    <path id="r4" d="M-40 470 C 300 470, 520 260, 860 250 S 1260 360, 1500 380"/>
  </g>
  <g style="fill:var(--signal)">
    <circle r="3"><animateMotion dur="14s" repeatCount="indefinite"><mpath href="#r1"/></animateMotion></circle>
    <circle r="2.5" style="fill:var(--net-dot)"><animateMotion dur="18s" begin="-6s" repeatCount="indefinite"><mpath href="#r2"/></animateMotion></circle>
    <circle r="3"><animateMotion dur="16s" begin="-3s" repeatCount="indefinite"><mpath href="#r3"/></animateMotion></circle>
    <circle r="2.5" style="fill:var(--net-dot)"><animateMotion dur="20s" begin="-11s" repeatCount="indefinite"><mpath href="#r4"/></animateMotion></circle>
    <circle r="2" style="fill:var(--net-dot)"><animateMotion dur="14s" begin="-8s" repeatCount="indefinite"><mpath href="#r1"/></animateMotion></circle>
  </g>
  <g class="hero-network__nodes">
    <circle cx="720" cy="430" r="5"/><circle cx="860" cy="250" r="4"/><circle cx="760" cy="540" r="4"/><circle cx="420" cy="455" r="3.5"/>
  </g>
</svg>`;

// ---------- Startseite ----------
function home() {
  const [lead, ...rest] = latestNews;
  const lastKamin = kamingespraeche[0];
  const body = `
<section class="hero">
  <div class="hero__media">${picture('news/fachmesse-pano', '', { eager: true, w: 1600, h: 522 })}</div>
  ${heroNetwork()}
  <div class="container hero__inner">
    <p class="eyebrow eyebrow--light hero__eyebrow" data-reveal><span class="pulse" aria-hidden="true"></span>Austrian Traffic Telematics Cluster · seit ${site.founded}</p>
    <h1 class="hero__title" data-reveal>Wo Österreichs Mobilität <em>vernetzt</em> gedacht wird.</h1>
    <p class="hero__lead" data-reveal>Der ATTC bringt Infrastrukturbetreiber, Industrie und Forschung an einen Tisch – damit intelligente Verkehrssysteme schneller von der Idee in den Regelbetrieb kommen.</p>
    <div class="hero__actions" data-reveal>
      <a class="btn btn--signal btn--lg" href="/mitglied-werden/">Mitglied werden ${icon('arrow')}</a>
      <a class="btn btn--outline-light btn--lg" href="/cluster/">Den Cluster kennenlernen</a>
    </div>
  </div>
  <a class="hero__scroll" href="#intro" aria-label="Weiter zum Inhalt">${icon('arrow-down')}</a>
</section>

<section class="stats" id="intro" aria-label="Der ATTC in Zahlen">
  <div class="container">
    <ul class="stats__list">
      ${stats.map((s) => `<li class="stat" data-reveal><span class="stat__value"${s.plain ? '' : ` data-count="${s.value}"`}>${s.value}${s.suffix ? `<span class="stat__suffix">${s.suffix}</span>` : ''}</span><span class="stat__label">${s.label}</span></li>`).join('')}
    </ul>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div class="split__text">
      ${sectionHead({ eyebrow: 'Warum der ATTC', title: 'Telematik wirkt nur, wenn alle zusammenarbeiten.' })}
      <div class="prose" data-reveal>
        <p>Intelligente Verkehrssysteme entstehen an der Schnittstelle: zwischen Straße und Schiene, zwischen Betreiber und Systemanbieter, zwischen Labor und Alltag. Genau dort setzt der ATTC an.</p>
        <p>Seit ${yearsActive} Jahren vernetzt der Verein Entscheidungsträger:innen und Expert:innen aus den führenden Mobilitätsunternehmen Österreichs – vertraulich, praxisnah und mit dem Anspruch, gemeinsam mehr zu erreichen als jede:r für sich.</p>
      </div>
      <a class="link-arrow" href="/cluster/" data-reveal>Mehr über Ziele und Arbeitsweise ${icon('arrow')}</a>
    </div>
    <ol class="pillars" data-reveal>
      <li class="pillar"><span class="pillar__no">01</span><div><h3>Ideenwerkstatt</h3><p>Neue Technologien früh verstehen, bewerten und gemeinsam in bedarfsgerechte Produkte übersetzen.</p></div></li>
      <li class="pillar"><span class="pillar__no">02</span><div><h3>Kooperationsplattform</h3><p>Branchenübergreifende Projekte anstoßen – vom Piloten bis zur flächendeckenden Umsetzung.</p></div></li>
      <li class="pillar"><span class="pillar__no">03</span><div><h3>Stimme der Branche</h3><p>Im Dialog mit Politik, Verwaltung und internationaler Wissenschaft Rahmenbedingungen mitgestalten.</p></div></li>
    </ol>
  </div>
</section>

<section class="section section--tint">
  <div class="container">
    ${sectionHead({ eyebrow: 'Themenfelder', title: 'Woran wir gemeinsam arbeiten', text: 'Sechs Schwerpunkte prägen das Arbeitsprogramm – getragen von der Expertise unserer Mitglieder.' })}
    <ul class="theme-grid">
      ${themes.map((t, i) => `<li class="theme-card" data-reveal style="--d:${i * 40}ms"><span class="theme-card__icon">${icon(t.icon)}</span><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: 'Formate', title: 'Begegnung mit Substanz', text: 'Vom exklusiven Abend im kleinen Kreis bis zur Fachmesse mit über 130 Gästen.' })}
    <div class="formats">
      <a class="format format--feature" href="/veranstaltungen/#talkmobility" data-reveal>
        <div class="format__media">${picture('news/tm17', '', { sizes: '(min-width: 1000px) 60vw, 100vw' })}</div>
        <div class="format__body">
          <span class="format__tag">${icon('mic')} Vortragsreihe</span>
          <h3>talkMobility</h3>
          <p>Renommierte nationale und internationale Expert:innen zu den großen Mobilitätsfragen – zuletzt Ausgabe ${talkMobility[0].no}: „${esc(talkMobility[0].title)}“</p>
          <span class="link-arrow">Alle Ausgaben ${icon('arrow')}</span>
        </div>
      </a>
      <a class="format" href="/veranstaltungen/#kamingespraeche" data-reveal>
        <span class="format__tag">${icon('flame')} Im kleinen Kreis</span>
        <h3>Kamingespräche</h3>
        <p>Mitglieder öffnen ihre Türen: Leitstellen, Labore, Baustellen. Zuletzt: „${esc(lastKamin.title)}“ bei ${esc(lastKamin.host)}.</p>
        <span class="link-arrow">Zum Archiv ${icon('arrow')}</span>
      </a>
      <a class="format" href="/aktuelles/${news[0].slug}/" data-reveal>
        <span class="format__tag">${icon('layers')} Leistungsschau</span>
        <h3>ATTC-Fachmesse</h3>
        <p>17 Mitglieder zeigten 2024 ihre KI-Anwendungen für Straße, Schiene und Luftfahrt – live und zum Anfassen.</p>
        <span class="link-arrow">Rückblick ${icon('arrow')}</span>
      </a>
      <a class="format" href="/aktuelles/attc-klausur-2023/" data-reveal>
        <span class="format__tag">${icon('users')} Strategie</span>
        <h3>Klausur</h3>
        <p>Zwei Tage, ein Schwerpunktthema, offene Formate wie das World-Café – das strategische Herzstück des Jahres.</p>
        <span class="link-arrow">Mehr erfahren ${icon('arrow')}</span>
      </a>
    </div>
  </div>
</section>

<section class="section section--dark feature-pub">
  <div class="container feature-pub__inner">
    <div class="feature-pub__cover" data-reveal>
      <img src="/assets/img/covers/${featuredPub.cover}.webp" alt="Titelseite: ${esc(featuredPub.title)}" loading="lazy" width="480" height="680">
    </div>
    <div class="feature-pub__text" data-reveal>
      <p class="eyebrow eyebrow--light">${featuredPub.kind} ${featuredPub.year}</p>
      <h2 class="section-title section-title--light">KI in der Mobilität: Was Österreich jetzt braucht.</h2>
      <p>${esc(featuredPub.text)}</p>
      <div class="btn-row">
        <a class="btn btn--signal" href="/assets/docs/${featuredPub.file}" download>${icon('download')} Positionspapier (PDF, ${featuredPub.size})</a>
        <a class="btn btn--outline-light" href="/publikationen/">Alle Publikationen</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--row" data-reveal>
      <div>
        <p class="eyebrow">Aktuelles</p>
        <h2 class="section-title">Aus dem Netzwerk</h2>
      </div>
      <a class="btn btn--ghost" href="/aktuelles/">Alle Beiträge ${icon('arrow')}</a>
    </div>
    <div class="news-grid news-grid--home">
      ${newsCard(lead, { large: true })}
      ${rest.slice(0, 3).map((n) => newsCard(n)).join('')}
    </div>
  </div>
</section>

<section class="section section--tint members-teaser">
  <div class="container">
    ${sectionHead({ eyebrow: 'Mitglieder', title: `${memberOrgs.length} Organisationen. Ein Netzwerk.`, text: 'Von Infrastrukturbetreibern über Technologiekonzerne bis zu spezialisierten Ingenieurbüros und Forschungseinrichtungen.', align: 'section-head--center' })}
  </div>
  <div class="marquee" data-marquee>
    <ul class="marquee__track">${memberOrgs.map(logoTile).join('')}</ul>
    <ul class="marquee__track" aria-hidden="true">${memberOrgs.map(logoTile).join('')}</ul>
  </div>
  <div class="container center" data-reveal>
    <a class="btn btn--ghost" href="/mitglieder/">Alle Mitglieder ansehen ${icon('arrow')}</a>
  </div>
</section>

${ctaBand()}`;

  return layout({
    path: '/',
    title: 'ATTC – Austrian Traffic Telematics Cluster',
    description: `Der ATTC vernetzt seit ${site.founded} Infrastrukturbetreiber, Industrie und Forschung, um intelligente Verkehrssysteme in Österreich gemeinsam voranzubringen.`,
    body,
  });
}

// ---------- Cluster ----------
function cluster() {
  const body = `
${pageHero({ eyebrow: 'Der Cluster', title: 'Gemeinsam schneller<br>von der Idee zur Straße.', lead: `Gegründet ${site.founded} auf Initiative der ASFINAG, ist der ATTC heute die Kooperationsplattform für Verkehrstelematik in Österreich.`, img: 'news/fachmesse', crumbs: [{ label: 'Cluster' }] })}

<section class="section">
  <div class="container split split--top">
    <div>
      ${sectionHead({ eyebrow: 'Wer wir sind', title: 'Ein Verein mit einer klaren Aufgabe' })}
    </div>
    <div class="prose prose--lg" data-reveal>
      <p>Im ATTC arbeiten Führungskräfte und Expert:innen aus ${memberOrgs.length} Organisationen zusammen – mit unterschiedlicher Technologiebasis, unterschiedlichen Geschäftsfeldern und sich ergänzendem Fachwissen.</p>
      <p>Gemeinsam entwickeln sie Technologien weiter, verknüpfen sie miteinander und machen daraus neue Produkte. Sie weisen technische Machbarkeit und Marktfähigkeit nach, wecken Interesse für Innovationen, machen deren Nutzen transparent und fördern ihre Anwendung – im Interesse der österreichischen Volkswirtschaft und aller Verkehrsteilnehmer:innen.</p>
    </div>
  </div>
</section>

<section class="section section--tint">
  <div class="container">
    ${sectionHead({ eyebrow: 'Ziele · Wege · Nutzen', title: 'Was uns antreibt – und was dabei herauskommt' })}
    <div class="triad">
      <article class="triad__item" data-reveal>
        <span class="triad__label">Ziele</span>
        <h3>Wofür wir stehen</h3>
        <ul class="checklist">
          <li>Ideenwerkstatt und Kooperationsplattform für unsere Mitglieder sein</li>
          <li>Bedarfsgerechte Produkte für die Verkehrstelematik fördern</li>
          <li>Technologien zur Verbesserung der österreichischen Verkehrsinfrastruktur unterstützen</li>
          <li>Innovative Technologien gemeinsam entwickeln</li>
        </ul>
      </article>
      <article class="triad__item" data-reveal style="--d:80ms">
        <span class="triad__label">Wege</span>
        <h3>Wie wir arbeiten</h3>
        <ul class="checklist">
          <li>Das Netzwerk zur Entwicklung von Telematiktechnologien stetig erweitern</li>
          <li>Know-how und Innovationen im Telematikbereich bündeln</li>
          <li>Branchenübergreifende Kooperationen für gemeinsame Projekte fördern</li>
          <li>In den Dialog mit Politik sowie internationaler Wissenschaft treten</li>
        </ul>
      </article>
      <article class="triad__item" data-reveal style="--d:160ms">
        <span class="triad__label">Nutzen</span>
        <h3>Was dabei entsteht</h3>
        <ul class="checklist">
          <li>Eine Plattform für koordinierte nationale und internationale Aktivitäten</li>
          <li>Die Schnittstelle zwischen Betreibern, Systemanbietern und Hochschulen</li>
          <li>Neue, attraktive Arbeitsplätze für Fachkräfte</li>
          <li>Projekte mit unmittelbarem Nutzen für Verkehrsteilnehmer:innen</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: 'Themenfelder', title: 'Unsere Schwerpunkte' })}
    <ul class="theme-grid">
      ${themes.map((t, i) => `<li class="theme-card" data-reveal style="--d:${i * 40}ms"><span class="theme-card__icon">${icon(t.icon)}</span><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${sectionHead({ eyebrow: 'Meilensteine', title: `${yearsActive} Jahre Verkehrstelematik made in Austria` }).replace('section-title', 'section-title section-title--light').replace('class="eyebrow"', 'class="eyebrow eyebrow--light"')}
    <ol class="timeline">
      ${milestones.map((m) => `<li class="timeline__item" data-reveal><span class="timeline__year">${m.year}</span><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p></li>`).join('')}
    </ol>
  </div>
</section>

<section class="section">
  <div class="container split">
    <figure class="framed" data-reveal>
      ${picture('hero/mitglieder', 'Illustration: Die Mitglieder des ATTC als vernetzte Stadtlandschaft', { sizes: '(min-width: 1000px) 50vw, 100vw', w: 1600, h: 1131 })}
    </figure>
    <div>
      ${sectionHead({ eyebrow: 'Organisation', title: 'Getragen von den Köpfen der Branche' })}
      <div class="prose" data-reveal>
        <p>Das <strong>Präsidium</strong> setzt die strategischen Leitlinien, der <strong>Vorstand</strong> steuert das Arbeitsprogramm, das <strong>Generalsekretariat</strong> hält das Netzwerk im Alltag zusammen. Unsere <strong>Startmitglieder</strong> bringen die Innovationskraft spezialisierter Unternehmen und Forschungseinrichtungen ein.</p>
      </div>
      <div class="btn-row" data-reveal>
        <a class="btn btn--primary" href="/gremien/">Zu den Gremien ${icon('arrow')}</a>
        <a class="btn btn--ghost" href="/mitglieder/">Alle Mitglieder</a>
      </div>
    </div>
  </div>
</section>

${ctaBand()}`;
  return layout({ path: '/cluster/', title: 'Der Cluster', description: 'Ziele, Arbeitsweise und Themenfelder des Austrian Traffic Telematics Cluster – der Kooperationsplattform für Verkehrstelematik in Österreich.', body });
}

// ---------- Gremien ----------
function gremien() {
  const groups = [
    { id: 'praesidium', title: 'Präsidium', text: 'Setzt die strategischen Leitlinien des Clusters.', people: praesidium },
    { id: 'vorstand', title: 'Vorstand', text: 'Verantwortet das Arbeitsprogramm und die operative Vereinsarbeit.', people: vorstand },
    { id: 'generalsekretariat', title: 'Generalsekretariat', text: 'Erste Anlaufstelle für Mitglieder, Partner und Presse.', people: generalsekretariat },
    { id: 'startmitglieder', title: 'Startmitglieder', text: 'Spezialisierte Unternehmen und Forschungseinrichtungen mit hoher Innovationskraft.', people: startmitglieder },
  ];
  const body = `
${pageHero({ eyebrow: 'Gremien', title: 'Die Menschen hinter dem ATTC', lead: 'Führungskräfte aus Österreichs Mobilitätsunternehmen, die ihre Erfahrung ehrenamtlich in den Cluster einbringen.', crumbs: [{ label: 'Gremien' }] })}

<nav class="subnav" aria-label="Gremien" data-subnav>
  <div class="container"><ul>
    ${groups.map((g) => `<li><a href="#${g.id}">${g.title}<span>${g.people.length}</span></a></li>`).join('')}
    <li><a href="#ehrenmitglieder">Ehrenmitglieder<span>${ehrenmitglieder.length}</span></a></li>
  </ul></div>
</nav>

${groups.map((g, i) => `
<section class="section${i % 2 ? ' section--tint' : ''}" id="${g.id}" aria-labelledby="${g.id}-title">
  <div class="container">
    ${sectionHead({ eyebrow: `${String(i + 1).padStart(2, '0')} · ${g.people.length} Personen`, title: g.title, text: g.text, id: `${g.id}-title` })}
    <ul class="people-grid">${g.people.map(personCard).join('')}</ul>
  </div>
</section>`).join('')}

<section class="section section--dark" id="ehrenmitglieder" aria-labelledby="ehren-title">
  <div class="container split split--top">
    <div>
      <p class="eyebrow eyebrow--light">Ehrenmitglieder</p>
      <h2 class="section-title section-title--light" id="ehren-title">Mit Dank für außerordentliche Verdienste</h2>
    </div>
    <ul class="honor-list">
      ${ehrenmitglieder.map((n) => `<li data-reveal>${esc(n)}</li>`).join('')}
    </ul>
  </div>
</section>

${ctaBand({ title: 'Fragen an das Generalsekretariat?', text: 'Wir verbinden Sie gerne mit den richtigen Ansprechpartner:innen im Netzwerk.', primary: { href: '/kontakt/', label: 'Kontakt aufnehmen' }, secondary: null })}`;
  return layout({ path: '/gremien/', title: 'Gremien', description: 'Präsidium, Vorstand, Generalsekretariat, Startmitglieder und Ehrenmitglieder des Austrian Traffic Telematics Cluster.', body });
}

// ---------- Mitglieder ----------
function mitglieder() {
  const praesOrgs = [...new Set([...praesidium, ...vorstand].map((p) => p.org))];
  const startOrgs = [...new Set(startmitglieder.map((p) => p.org))];
  const block = (title, text, keys) => `
  <div class="member-block" data-reveal>
    <div class="member-block__head"><h2 class="h3">${title}</h2><p>${text}</p></div>
    <ul class="logo-grid">${keys.map((k) => `<li class="logo-card"><img src="/assets/img/logos/${k}.webp" alt="" loading="lazy" decoding="async"><span>${esc(orgs[k].full)}</span></li>`).join('')}</ul>
  </div>`;
  const body = `
${pageHero({ eyebrow: 'Mitglieder', title: `${memberOrgs.length} Organisationen,<br>ein gemeinsames Ziel.`, lead: 'Betreiber von Straße, Schiene, Wasserstraße und Luftraum, Technologieführer, Forschungseinrichtungen und spezialisierte Dienstleister.', crumbs: [{ label: 'Mitglieder' }] })}
<section class="section">
  <div class="container">
    ${block('Präsidiumsunternehmen', 'Die großen Infrastrukturbetreiber, Technologiekonzerne und Forschungseinrichtungen des Landes.', praesOrgs)}
    ${block('Startmitglieder', 'Spezialisierte Unternehmen, Ingenieurbüros und Hochschulen mit hoher Innovationskraft.', startOrgs)}
  </div>
</section>
${ctaBand({ title: 'Ihr Logo fehlt hier noch?', text: 'Wir freuen uns über Organisationen, die Verkehrstelematik in Österreich aktiv mitgestalten wollen.' })}`;
  return layout({ path: '/mitglieder/', title: 'Mitglieder', description: `Die ${memberOrgs.length} Mitgliedsorganisationen des Austrian Traffic Telematics Cluster – von ASFINAG und ÖBB bis zu spezialisierten Technologieunternehmen.`, body });
}

// ---------- Mitglied werden ----------
function mitgliedWerden() {
  const benefits = [
    ['users', 'Direkter Draht zu Entscheider:innen', 'Vorstände und Geschäftsführungen der wichtigsten Mobilitätsunternehmen – auf Augenhöhe und im vertraulichen Rahmen.'],
    ['flame', 'Exklusive Einblicke', 'Kamingespräche führen hinter die Kulissen: Leitstellen, Labore, Werkstätten und Großprojekte der Mitglieder.'],
    ['layers', 'Bühne für Ihre Lösungen', 'Präsentieren Sie Ihre Produkte auf der ATTC-Fachmesse, bei der Klausur oder als Gastgeber eines Kamingesprächs.'],
    ['spark', 'Gemeinsame Projekte', 'Finden Sie Partner für Pilotprojekte und Förderanträge – branchen- und verkehrsträgerübergreifend.'],
    ['book', 'Sichtbarkeit', 'Veröffentlichen Sie Fachbeiträge in Trend Mobility und gestalten Sie Positionspapiere des Clusters mit.'],
    ['globe', 'Gehör in Politik & Verwaltung', 'Der ATTC bündelt die Stimme der Branche gegenüber Ministerien, Behörden und EU-Institutionen.'],
  ];
  const steps = [
    ['Erstgespräch', 'Sie melden sich beim Generalsekretariat. Wir lernen Ihre Organisation kennen und beantworten Ihre Fragen zur Mitgliedschaft.'],
    ['Kennenlernen', 'Erleben Sie den ATTC bei einer Veranstaltung und lernen Sie Mitglieder und Gremien persönlich kennen.'],
    ['Aufnahme', 'Nach der Aufnahme gemäß Vereinsstatuten sind Sie Teil des Netzwerks – und vom ersten Termin an dabei.'],
  ];
  const mail = `mailto:${site.email}?subject=${encodeURIComponent('Interesse an einer ATTC-Mitgliedschaft')}`;
  const body = `
${pageHero({ eyebrow: 'Mitglied werden', title: 'Teil des Netzwerks werden, das Mobilität bewegt.', lead: 'Der ATTC ist offen für Unternehmen und Forschungseinrichtungen, die Verkehrstelematik in Österreich aktiv mitgestalten wollen.', img: 'news/fachmesse-3', crumbs: [{ label: 'Mitglied werden' }] })}
<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: 'Ihr Mehrwert', title: 'Was eine Mitgliedschaft bringt' })}
    <ul class="benefit-grid">
      ${benefits.map(([ic, t, x], i) => `<li class="benefit" data-reveal style="--d:${i * 40}ms"><span class="benefit__icon">${icon(ic)}</span><h3>${t}</h3><p>${x}</p></li>`).join('')}
    </ul>
  </div>
</section>
<section class="section section--tint">
  <div class="container split split--top">
    <div>
      ${sectionHead({ eyebrow: 'So einfach geht’s', title: 'In drei Schritten zur Mitgliedschaft' })}
      <a class="btn btn--primary btn--lg" href="${mail}" data-reveal>${icon('mail')} Jetzt Erstgespräch anfragen</a>
    </div>
    <ol class="steps">
      ${steps.map(([t, x], i) => `<li class="step" data-reveal><span class="step__no">${i + 1}</span><div><h3>${t}</h3><p>${x}</p></div></li>`).join('')}
    </ol>
  </div>
</section>
<section class="section">
  <div class="container">
    <figure class="quote-block" data-reveal>
      <blockquote><p>„Gemeinsam gelingt es uns immer wieder, Innovationen von der Idee über Piloten zur Praxisanwendung zu bringen.“</p></blockquote>
      <figcaption><strong>Hartwig Hufnagl</strong> · Vorstandsdirektor ASFINAG, bei der ATTC-Fachmesse 2024</figcaption>
    </figure>
  </div>
</section>
${ctaBand({ title: 'Bereit für das Erstgespräch?', text: `Schreiben Sie uns an ${site.email} oder rufen Sie an: ${site.phoneDisplay}.`, primary: { href: mail, label: 'E-Mail schreiben' }, secondary: { href: '/kontakt/', label: 'Kontaktformular' } })}`;
  return layout({ path: '/mitglied-werden/', title: 'Mitglied werden', description: 'Vorteile und Ablauf einer Mitgliedschaft im Austrian Traffic Telematics Cluster: Netzwerk, exklusive Einblicke, gemeinsame Projekte und Sichtbarkeit.', body });
}

// ---------- Veranstaltungen ----------
function veranstaltungen() {
  const years = [...new Set(kamingespraeche.map((k) => k.date.slice(0, 4)))];
  const body = `
${pageHero({ eyebrow: 'Veranstaltungen', title: 'Wissen teilen.<br>Netzwerk erleben.', lead: 'Der ATTC tritt mit Politik, Wissenschaft und Expert:innen in den Dialog – und macht den Nutzen der Telematik für eine breite Öffentlichkeit sichtbar.', img: 'news/tm16-podium', crumbs: [{ label: 'Veranstaltungen' }] })}

<nav class="subnav" aria-label="Veranstaltungsformate" data-subnav>
  <div class="container"><ul>
    <li><a href="#talkmobility">talkMobility<span>${talkMobility.length}</span></a></li>
    <li><a href="#kamingespraeche">Kamingespräche<span>${kamingespraeche.length}</span></a></li>
    <li><a href="#weitere">Weitere Events<span>${weitereEvents.length}</span></a></li>
  </ul></div>
</nav>

<section class="section" id="talkmobility" aria-labelledby="tm-title">
  <div class="container split split--top">
    <div class="sticky-col">
      ${sectionHead({ eyebrow: 'Vortragsreihe', title: 'talkMobility', id: 'tm-title', text: 'Ein aktuelles Thema im Mittelpunkt einer breiten Öffentlichkeit – relevant für Politik, Wirtschaft, Industrie und vor allem für die mobile Bevölkerung. Dazu lädt der ATTC renommierte nationale und internationale Expert:innen ein.' })}
      <figure class="framed framed--sm" data-reveal>${picture('news/tm17', 'talkMobility 17: Künstliche Intelligenz in der Mobilität', { sizes: '(min-width: 1000px) 40vw, 100vw', w: 1600, h: 900 })}</figure>
    </div>
    <ol class="tm-list">
      ${talkMobility.map((t) => `<li class="tm-item" data-reveal><span class="tm-item__no">tM ${t.no}</span><div><h3>${esc(t.title)}</h3>${t.date ? `<p><time datetime="${t.date}">${fmtDate(t.date)}</time></p>` : ''}</div></li>`).join('')}
    </ol>
  </div>
</section>

<section class="section section--tint" id="kamingespraeche" aria-labelledby="kg-title">
  <div class="container">
    ${sectionHead({ eyebrow: 'Im kleinen Kreis', title: 'Kamingespräche', id: 'kg-title', text: `Seit ${kamingespraeche.at(-1).date.slice(0, 4)} öffnen Mitglieder und Partner ihre Türen – für Unternehmenspräsentationen, Fachvorträge und Besichtigungen. ${kamingespraeche.length} Termine im Archiv.` })}
    <div class="archive" data-archive>
      <div class="archive__controls">
        <label class="search-field">
          <span class="sr-only">Archiv durchsuchen</span>
          ${icon('search')}
          <input type="search" placeholder="Thema oder Gastgeber suchen …" data-archive-search>
        </label>
        <div class="chips" role="group" aria-label="Nach Jahr filtern">
          <button type="button" class="chip" aria-pressed="true" data-year="all">Alle</button>
          ${years.map((y) => `<button type="button" class="chip" aria-pressed="false" data-year="${y}">${y}</button>`).join('')}
        </div>
      </div>
      <ol class="archive__list" data-archive-list>
        ${kamingespraeche.map((k) => {
          const d = fmtDateShort(k.date);
          const report = news.find((n) => n.kamin === k.date);
          const title = report ? `<a href="/aktuelles/${report.slug}/">${esc(k.title)}</a>` : esc(k.title);
          return `<li class="archive-item${report ? ' archive-item--report' : ''}" data-year="${d.year}" data-text="${esc(`${k.title} ${k.host}`.toLowerCase())}"><time class="archive-item__date" datetime="${k.date}"><span>${d.day}. ${d.month}</span>${d.year}</time><div><h3>${title}</h3><p>${esc(k.host)}${report ? ' · Bericht lesen' : ''}</p></div></li>`;
        }).join('')}
      </ol>
      <p class="archive__empty" hidden data-archive-empty>Keine Termine gefunden. Versuchen Sie einen anderen Suchbegriff.</p>
      <p class="archive__status sr-only" aria-live="polite" data-archive-status></p>
    </div>
  </div>
</section>

<section class="section" id="weitere" aria-labelledby="we-title">
  <div class="container">
    ${sectionHead({ eyebrow: 'Symposien & Jubiläen', title: 'Weitere Events', id: 'we-title', text: 'Konferenzen, Symposien und Feierstunden aus der Geschichte des Clusters.' })}
    <ol class="event-list">
      ${weitereEvents.map((e) => `<li class="event-row" data-reveal><time datetime="${e.date}">${fmtDate(e.date)}</time><div><h3>${esc(e.title)}</h3><p>${esc(e.text)}</p></div></li>`).join('')}
    </ol>
  </div>
</section>

${ctaBand({ title: 'Gastgeber eines Kamingesprächs werden?', text: 'Mitglieder präsentieren ihre Projekte und Standorte dem Netzwerk. Sprechen Sie uns an.', primary: { href: '/kontakt/', label: 'Kontakt aufnehmen' }, secondary: { href: '/mitglied-werden/', label: 'Mitglied werden' } })}`;
  return layout({ path: '/veranstaltungen/', title: 'Veranstaltungen', description: 'talkMobility, Kamingespräche, Fachmesse und Klausur: die Veranstaltungsformate des Austrian Traffic Telematics Cluster mit vollständigem Archiv.', body });
}

// ---------- Aktuelles ----------
function aktuelles() {
  const body = `
${pageHero({ eyebrow: 'Aktuelles', title: 'Neuigkeiten aus dem Cluster', lead: 'Berichte von Veranstaltungen, Personalia, Publikationen und Medienbeiträge.', crumbs: [{ label: 'Aktuelles' }] })}
<section class="section">
  <div class="container">
    <div class="news-grid news-grid--index">
      ${latestNews.map((n, i) => newsCard(n, { large: i === 0 })).join('')}
    </div>
  </div>
</section>
${ctaBand()}`;
  return layout({ path: '/aktuelles/', title: 'Aktuelles', description: 'Neuigkeiten, Veranstaltungsberichte und Publikationen des Austrian Traffic Telematics Cluster.', body });
}

function article(n) {
  const idx = latestNews.indexOf(n);
  const prev = latestNews[idx + 1];
  const next = latestNews[idx - 1];
  const related = latestNews.filter((x) => x !== n).slice(0, 3);
  const body = `
<article class="article">
  <header class="article-hero">
    <div class="container container--narrow">
      <nav class="breadcrumbs breadcrumbs--dark" aria-label="Brotkrumen"><ol><li><a href="/">Start</a></li><li><a href="/aktuelles/">Aktuelles</a></li><li aria-current="page">${esc(n.title)}</li></ol></nav>
      <p class="article-meta"><span class="tag">${esc(n.category)}</span><time datetime="${n.date}">${fmtDate(n.date)}</time></p>
      <h1 class="article-title">${esc(n.title)}</h1>
      <p class="article-lead">${esc(n.teaser)}</p>
    </div>
    <div class="container article-media">${picture(n.img, '', { eager: true, sizes: '(min-width: 1200px) 1100px, 100vw' })}</div>
  </header>
  <div class="container container--narrow">
    <div class="prose prose--article">${n.body}</div>
    ${n.video ? `<p><a class="btn btn--primary" href="${n.video}" target="_blank" rel="noopener">${icon('play')} Video auf YouTube ansehen</a></p>` : ''}
    ${n.gallery ? `<div class="gallery">${n.gallery.map((g) => `<figure>${picture(g, '', { sizes: '(min-width: 800px) 33vw, 100vw' })}</figure>`).join('')}</div>` : ''}
    <nav class="article-nav" aria-label="Weitere Beiträge">
      ${prev ? `<a class="article-nav__prev" href="/aktuelles/${prev.slug}/"><span>Älterer Beitrag</span>${esc(prev.title)}</a>` : '<span></span>'}
      ${next ? `<a class="article-nav__next" href="/aktuelles/${next.slug}/"><span>Neuerer Beitrag</span>${esc(next.title)}</a>` : '<span></span>'}
    </nav>
  </div>
</article>
<section class="section section--tint">
  <div class="container">
    <div class="section-head section-head--row"><div><p class="eyebrow">Weiterlesen</p><h2 class="section-title">Mehr aus dem Netzwerk</h2></div><a class="btn btn--ghost" href="/aktuelles/">Alle Beiträge ${icon('arrow')}</a></div>
    <div class="news-grid">${related.map((r) => newsCard(r)).join('')}</div>
  </div>
</section>`;
  return layout({
    path: `/aktuelles/${n.slug}/`,
    title: n.title,
    description: n.teaser,
    image: `/assets/img/${n.img}-1600.webp`,
    type: 'article',
    jsonLd: { '@context': 'https://schema.org', '@type': 'NewsArticle', headline: n.title, datePublished: n.date, description: n.teaser, image: `${site.url}/assets/img/${n.img}-1600.webp`, publisher: { '@type': 'Organization', name: 'ATTC – Austrian Traffic Telematics Cluster' } },
    body,
  });
}

// ---------- Publikationen ----------
function publikationen() {
  const others = publications.filter((p) => !p.featured);
  const body = `
${pageHero({ eyebrow: 'Publikationen', title: 'Trend Mobility &amp; Positionspapiere', lead: 'Das Magazin Trend Mobility holt die Aktivitäten der ATTC- und ITS-Community vor den Vorhang und bleibt den Mobilitätstrends von morgen auf der Spur.', crumbs: [{ label: 'Publikationen' }] })}
<section class="section">
  <div class="container">
    <article class="pub-feature" data-reveal>
      <img class="pub-feature__cover" src="/assets/img/covers/${featuredPub.cover}.webp" alt="Titelseite: ${esc(featuredPub.title)}" width="480" height="680" loading="lazy">
      <div>
        <p class="eyebrow">${featuredPub.kind} · ${featuredPub.year}</p>
        <h2 class="section-title">${esc(featuredPub.title)}</h2>
        <p class="section-lead">${esc(featuredPub.text)}</p>
        <a class="btn btn--primary" href="/assets/docs/${featuredPub.file}" download>${icon('download')} PDF herunterladen (${featuredPub.size})</a>
      </div>
    </article>
    <ul class="pub-grid">
      ${others.map((p) => `
      <li class="pub-card" data-reveal>
        <a class="pub-card__cover" href="/assets/docs/${p.file}" aria-label="${esc(p.title)} als PDF öffnen"><img src="/assets/img/covers/${p.cover}.webp" alt="" loading="lazy" width="480" height="680"></a>
        <div class="pub-card__body">
          <p class="pub-card__kind">${esc(p.kind)} · ${p.year}</p>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.text)}</p>
          <div class="pub-card__links">
            <a class="link-arrow" href="/assets/docs/${p.file}" download>${icon('download')} PDF, ${p.size}</a>
            ${p.alt ? `<a class="link-arrow" href="/assets/docs/${p.alt.file}" hreflang="en" download>${icon('download')} ${p.alt.label}</a>` : ''}
          </div>
        </div>
      </li>`).join('')}
    </ul>
  </div>
</section>
<section class="section section--tint">
  <div class="container split">
    <div>${sectionHead({ eyebrow: 'Mitschreiben', title: 'Ihr Beitrag im nächsten Trend Mobility' })}</div>
    <div class="prose" data-reveal>
      <p>Auch Nicht-Mitglieder sind herzlich eingeladen, ihre Visionen und Beiträge zu Verkehr(stelematik) und Mobilität mit unserer Leserschaft zu teilen. Die gedruckte Ausgabe senden wir Ihnen auf Anfrage gerne zu.</p>
      <div class="btn-row">
        <a class="btn btn--primary" href="mailto:${site.email}?subject=${encodeURIComponent('Beitrag für Trend Mobility')}">${icon('mail')} Beitrag vorschlagen</a>
        <a class="btn btn--ghost" href="mailto:${site.email}?subject=${encodeURIComponent('Bestellung Trend Mobility (Print)')}">Printausgabe bestellen</a>
      </div>
    </div>
  </div>
</section>`;
  return layout({ path: '/publikationen/', title: 'Publikationen', description: 'Trend Mobility Magazin, Positionspapier „KI in der Mobilität“ und Fachartikel des Austrian Traffic Telematics Cluster zum Download.', body });
}

// ---------- Kontakt ----------
function kontakt() {
  const [gs, office] = generalsekretariat;
  const body = `
${pageHero({ eyebrow: 'Kontakt', title: 'Wir freuen uns auf Ihre Nachricht.', lead: 'Ob Mitgliedschaft, Veranstaltung, Presseanfrage oder Beitrag für Trend Mobility – das Generalsekretariat ist für Sie da.', crumbs: [{ label: 'Kontakt' }] })}
<section class="section">
  <div class="container contact">
    <div class="contact__info" data-reveal>
      <ul class="contact-list">
        <li>${icon('mail')}<div><span>E-Mail</span><a href="mailto:${site.email}">${site.email}</a></div></li>
        <li>${icon('phone')}<div><span>Telefon</span><a href="tel:${site.phone.replace(/\s/g, '')}">${site.phoneDisplay}</a></div></li>
        <li>${icon('pin')}<div><span>Adresse</span><address>Austrian Traffic Telematics Cluster<br>${site.address.co}<br>${site.address.street}, ${site.address.zip} ${site.address.city}</address><a class="link-arrow" href="https://www.openstreetmap.org/search?query=${encodeURIComponent(`${site.address.street.split('/')[0]}, ${site.address.zip} ${site.address.city}`)}" target="_blank" rel="noopener">Auf der Karte zeigen ${icon('external')}</a></div></li>
      </ul>
      <div class="contact-people">
        ${[gs, office].map((p) => `<div class="contact-person"><img src="/assets/img/people/${p.img}.webp" alt="" width="300" height="400" loading="lazy"><div><strong>${esc(p.name)}</strong><span>${esc(p.role)}</span>${p.email ? `<a href="mailto:${p.email}">${p.email}</a>` : ''}</div></div>`).join('')}
      </div>
    </div>
    <form class="contact-form" data-mail-form data-to="${site.email}" data-reveal novalidate>
      <h2 class="h3">Nachricht schreiben</h2>
      <p class="form-hint">Das Formular öffnet Ihr E-Mail-Programm mit einer vorbereiteten Nachricht. Es werden keine Daten auf dieser Website gespeichert.</p>
      <div class="field-row">
        <div class="field"><label for="f-name">Name *</label><input id="f-name" name="name" autocomplete="name" required></div>
        <div class="field"><label for="f-org">Organisation</label><input id="f-org" name="org" autocomplete="organization"></div>
      </div>
      <div class="field">
        <label for="f-topic">Anliegen</label>
        <select id="f-topic" name="topic">
          <option>Mitgliedschaft</option><option>Veranstaltungen</option><option>Presse &amp; Medien</option><option>Beitrag für Trend Mobility</option><option>Sonstiges</option>
        </select>
      </div>
      <div class="field"><label for="f-msg">Ihre Nachricht *</label><textarea id="f-msg" name="message" rows="6" required></textarea></div>
      <p class="form-error" role="alert" hidden data-form-error>Bitte füllen Sie Name und Nachricht aus.</p>
      <button class="btn btn--primary btn--lg" type="submit">${icon('mail')} E-Mail vorbereiten</button>
    </form>
  </div>
</section>`;
  return layout({ path: '/kontakt/', title: 'Kontakt', description: `Kontakt zum Generalsekretariat des Austrian Traffic Telematics Cluster: ${site.email}, ${site.phoneDisplay}, ${site.address.street}, ${site.address.zip} ${site.address.city}.`, body });
}

// ---------- Rechtliches ----------
function impressum() {
  const body = `
${pageHero({ eyebrow: 'Rechtliches', title: 'Impressum', crumbs: [{ label: 'Impressum' }] })}
<section class="section">
  <div class="container container--narrow prose prose--article">
    <h2>Medieninhaber und Herausgeber</h2>
    <p><strong>ATTC – Austrian Traffic Telematics Cluster</strong><br>Verein zur Förderung der Telematik<br>${site.address.co}<br>${site.address.street}<br>${site.address.zip} ${site.address.city}<br>${site.address.country}</p>
    <p>Telefon: <a href="tel:${site.phone.replace(/\s/g, '')}">${site.phoneDisplay}</a><br>E-Mail: <a href="mailto:${site.email}">${site.email}</a><br>Web: <a href="${site.url}">www.attc.at</a></p>
    <p>ZVR-Zahl: ${site.zvr}</p>
    <h2>Grundlegende Richtung</h2>
    <p>Information über die Tätigkeit des Vereins zur Förderung der Telematik im Verkehrswesen sowie über Veranstaltungen und Publikationen des ATTC.</p>
    <h2>Bildnachweise</h2>
    <p>Fotos: ATTC und Mitgliedsorganisationen; Foto C-ITS-Veranstaltung 2022: Markus Schieder. Logos: jeweilige Mitgliedsorganisationen.</p>
    <h2>Haftung für Links</h2>
    <p>Diese Website enthält Links zu externen Websites, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte verlinkter Seiten ist stets der jeweilige Anbieter verantwortlich.</p>
    <p><a href="/datenschutz/">Zur Datenschutzerklärung</a></p>
  </div>
</section>`;
  return layout({ path: '/impressum/', title: 'Impressum', description: 'Impressum des ATTC – Austrian Traffic Telematics Cluster, Verein zur Förderung der Telematik.', body });
}

function datenschutz() {
  const body = `
${pageHero({ eyebrow: 'Rechtliches', title: 'Datenschutzerklärung', crumbs: [{ label: 'Datenschutz' }] })}
<section class="section">
  <div class="container container--narrow prose prose--article">
    <p class="lead">Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten ausschließlich auf Grundlage der Datenschutz-Grundverordnung (DSGVO), des Datenschutzgesetzes (DSG) und des Telekommunikationsgesetzes (TKG 2021).</p>
    <h2>Das Wichtigste in Kürze</h2>
    <ul>
      <li>Diese Website setzt <strong>keine Cookies</strong> und verwendet <strong>keine Analyse- oder Tracking-Dienste</strong>.</li>
      <li>Schriften und alle übrigen Ressourcen werden <strong>von unserem eigenen Server</strong> geladen – es werden keine Daten an Google Fonts, YouTube oder andere Drittanbieter übertragen, solange Sie keinen externen Link anklicken.</li>
      <li>Das Kontaktformular übermittelt nichts an unseren Server; es bereitet lediglich eine E-Mail in Ihrem eigenen E-Mail-Programm vor.</li>
    </ul>
    <h2>Verantwortlicher</h2>
    <p>ATTC – Austrian Traffic Telematics Cluster, Verein zur Förderung der Telematik<br>${site.address.co}<br>${site.address.street}, ${site.address.zip} ${site.address.city}, ${site.address.country}<br>E-Mail: <a href="mailto:${site.email}">${site.email}</a></p>
    <h2>Zweck der Datenverarbeitung</h2>
    <p>Der ATTC hat als Verein zur Förderung der Telematik die Aufgabe, ein Netzwerk an Mitgliedsunternehmen zu bilden und dieses mit thematisch relevanten Informationen zu versorgen. Dazu verarbeiten wir Daten von Mitgliedern und Interessent:innen: Name, Adresse, Telefonnummer, E-Mail-Adressen, Ansprechpersonen sowie im Rahmen unserer Tätigkeit entstehende Termine, Protokolle und Berichte.</p>
    <h2>Rechtsgrundlagen</h2>
    <p>Die Verarbeitung erfolgt auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), zur Erfüllung der Mitgliedschaft bzw. vorvertraglicher Maßnahmen (lit. b), zur Erfüllung rechtlicher Verpflichtungen (lit. c) oder auf Grundlage unseres berechtigten Interesses am sicheren Betrieb dieser Website (lit. f).</p>
    <h2>Besuch der Website (Server-Logfiles)</h2>
    <p>Beim Aufruf dieser Website speichert der Webserver aus Gründen der Systemsicherheit automatisch technische Daten: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL sowie Browser- und Betriebssystemangaben. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt, es werden keine Nutzerprofile erstellt, und sie werden nach Ablauf der Speicherfrist des Hosting-Betreibers gelöscht.</p>
    <h2>Kontakt per E-Mail und Telefon</h2>
    <p>Wenn Sie uns kontaktieren, verwenden wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage und für die damit verbundene Korrespondenz. Bitte beachten Sie, dass die Vertraulichkeit unverschlüsselter E-Mails nicht gewährleistet ist.</p>
    <h2>Weitergabe an Dritte</h2>
    <p>Eine Weitergabe erfolgt nur im Rahmen gesetzlicher Vorschriften oder soweit dies für die Vereinstätigkeit erforderlich ist (z. B. Steuerberatung, IT-Dienstleister). Mit Auftragsverarbeitern bestehen Verträge gemäß Art. 28 DSGVO. Eine Übermittlung in Drittstaaten erfolgt nur, wenn die Voraussetzungen der Art. 44 ff. DSGVO erfüllt sind.</p>
    <h2>Externe Links</h2>
    <p>Diese Website enthält Links zu externen Angeboten (z. B. YouTube, ORF, ÖAMTC). Erst durch das Anklicken verlassen Sie unsere Website; ab diesem Zeitpunkt gelten die Datenschutzbestimmungen des jeweiligen Anbieters.</p>
    <h2>Speicherdauer</h2>
    <p>Personenbezogene Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungsfristen (bis zu sieben Jahre) entgegenstehen.</p>
    <h2>Ihre Rechte</h2>
    <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie auf jederzeitigen Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft. Wenden Sie sich dazu bitte an <a href="mailto:${site.email}">${site.email}</a>.</p>
    <p>Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren: Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, <a href="https://www.dsb.gv.at" target="_blank" rel="noopener">www.dsb.gv.at</a>.</p>
  </div>
</section>`;
  return layout({ path: '/datenschutz/', title: 'Datenschutz', description: 'Datenschutzerklärung des ATTC – Austrian Traffic Telematics Cluster. Keine Cookies, kein Tracking.', body });
}

function notFound() {
  const body = `
<section class="not-found">
  ${heroNetwork()}
  <div class="container">
    <p class="eyebrow eyebrow--light">Fehler 404</p>
    <h1>Diese Route ist gesperrt.</h1>
    <p>Die gesuchte Seite existiert nicht oder wurde verschoben. Wir leiten Sie gerne um.</p>
    <div class="btn-row">
      <a class="btn btn--signal" href="/">Zur Startseite ${icon('arrow')}</a>
      <a class="btn btn--outline-light" href="/aktuelles/">Aktuelles</a>
      <a class="btn btn--outline-light" href="/kontakt/">Kontakt</a>
    </div>
  </div>
</section>`;
  return layout({ path: '/404.html', title: 'Seite nicht gefunden', description: 'Die angeforderte Seite wurde nicht gefunden.', body });
}

export function allPages() {
  return [
    ['/', home()],
    ['/cluster/', cluster()],
    ['/gremien/', gremien()],
    ['/mitglieder/', mitglieder()],
    ['/mitglied-werden/', mitgliedWerden()],
    ['/veranstaltungen/', veranstaltungen()],
    ['/aktuelles/', aktuelles()],
    ...news.map((n) => [`/aktuelles/${n.slug}/`, article(n)]),
    ['/publikationen/', publikationen()],
    ['/kontakt/', kontakt()],
    ['/impressum/', impressum()],
    ['/datenschutz/', datenschutz()],
    ['/404.html', notFound()],
  ];
}
