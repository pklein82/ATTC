// ATTC – progressive Verbesserungen. Die Seite funktioniert vollständig ohne JavaScript.
(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header: transparent über dem Hero, danach solide
  const header = document.querySelector('[data-header]');
  const hasHero = document.querySelector('.hero, .page-hero, .not-found');
  if (!hasHero) header.classList.add('is-solid');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile Navigation
  const toggle = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  mobileNav.querySelectorAll('li, .mobile-nav__cta').forEach((el, i) => el.style.setProperty('--i', i));
  mobileNav.hidden = false; // Sichtbarkeit steuert ab jetzt CSS (is-open), damit Öffnen/Schließen unterbrechbar bleibt
  let headerTimer;
  const setNav = (open, { instant = false } = {}) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Menü schließen' : 'Menü öffnen';
    document.body.style.overflow = open ? 'hidden' : '';
    mobileNav.classList.toggle('is-instant', instant);
    mobileNav.classList.toggle('is-open', open);
    clearTimeout(headerTimer);
    if (open) header.classList.add('is-open');
    // Header erst nach dem Ausblenden wieder transparent
    else headerTimer = setTimeout(() => header.classList.remove('is-open'), instant ? 0 : 160);
    if (instant) requestAnimationFrame(() => requestAnimationFrame(() => mobileNav.classList.remove('is-instant')));
  };
  toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
  mobileNav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setNav(false, { instant: true }); toggle.focus(); }
  });
  window.matchMedia('(min-width: 1101px)').addEventListener('change', (e) => e.matches && setNav(false, { instant: true }));

  // Modus-Wechsler für die Design-Varianten
  const switcher = document.querySelector('[data-theme-switch]');
  if (switcher) {
    const buttons = [...switcher.querySelectorAll('[data-set-theme]')];
    const metaColor = document.querySelector('meta[name="theme-color"]');
    const sync = () => {
      const current = root.getAttribute('data-theme') || 'technik';
      buttons.forEach((b) => {
        const on = b.dataset.setTheme === current;
        b.setAttribute('aria-pressed', String(on));
        if (on && metaColor) metaColor.content = b.dataset.themeColor;
      });
    };
    const apply = (id) => {
      if (id === 'technik') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', id);
      sync();
      try { localStorage.setItem('attc-design', id); } catch {}
      // Link teilbar halten: ?design=… in der Adresszeile
      const url = new URL(location.href);
      if (id === 'technik') url.searchParams.delete('design'); else url.searchParams.set('design', id);
      history.replaceState(null, '', url);
    };
    buttons.forEach((b) => b.addEventListener('click', () => {
      const id = b.dataset.setTheme;
      if ((root.getAttribute('data-theme') || 'technik') === id) return;
      // Überblendung nur mit View Transitions und ohne reduzierte Bewegung
      if (document.startViewTransition && !reduceMotion) document.startViewTransition(() => apply(id));
      else apply(id);
    }));
    sync();
  }

  // Reveal beim Scrollen
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Zähler in der Kennzahlenleiste
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window && !reduceMotion) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        const target = Number(el.dataset.count);
        const start = performance.now();
        const dur = 900;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          el.firstChild.nodeValue = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        el.firstChild.nodeValue = '0';
        requestAnimationFrame(tick);
        co.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  }

  // Hero-Netzwerk: Animation bei reduzierter Bewegung anhalten
  if (reduceMotion) document.querySelectorAll('[data-network]').forEach((svg) => svg.pauseAnimations?.());

  // Subnav: aktiven Abschnitt markieren (horizontal mitscrollen, ohne die Seite zu bewegen)
  const subnav = document.querySelector('[data-subnav]');
  if (subnav && 'IntersectionObserver' in window) {
    const list = subnav.querySelector('ul');
    const links = [...subnav.querySelectorAll('a[href^="#"]')];
    const sections = links.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    const visible = new Set();
    const update = () => {
      const current = sections.find((s) => visible.has(s));
      links.forEach((l) => l.classList.toggle('is-active', !!current && l.getAttribute('href') === `#${current.id}`));
      const active = links.find((l) => l.classList.contains('is-active'));
      if (active) list.scrollTo({ left: active.offsetLeft - 16, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    const so = new IntersectionObserver((entries) => {
      entries.forEach((en) => (en.isIntersecting ? visible.add(en.target) : visible.delete(en.target)));
      update();
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach((s) => so.observe(s));
  }

  // Kamingespräche-Archiv: Suche + Jahresfilter
  const archive = document.querySelector('[data-archive]');
  if (archive) {
    const items = [...archive.querySelectorAll('.archive-item')];
    const search = archive.querySelector('[data-archive-search]');
    const chips = [...archive.querySelectorAll('[data-year]')].filter((el) => el.tagName === 'BUTTON');
    const empty = archive.querySelector('[data-archive-empty]');
    const status = archive.querySelector('[data-archive-status]');
    let year = 'all';
    const apply = () => {
      const q = search.value.trim().toLowerCase();
      let n = 0;
      items.forEach((it) => {
        const show = (year === 'all' || it.dataset.year === year) && (!q || it.dataset.text.includes(q));
        it.hidden = !show;
        if (show) n++;
      });
      empty.hidden = n > 0;
      status.textContent = `${n} ${n === 1 ? 'Termin' : 'Termine'} gefunden`;
    };
    chips.forEach((c) => c.addEventListener('click', () => {
      delete archive.dataset.instant;
      year = c.dataset.year;
      chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
      apply();
    }));
    search.addEventListener('input', () => { archive.dataset.instant = ''; apply(); });
  }

  // Kontaktformular → vorbereitete E-Mail (keine Datenübertragung an den Server)
  const form = document.querySelector('[data-mail-form]');
  if (form) {
    const error = form.querySelector('[data-form-error]');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const f = new FormData(form);
      const required = ['name', 'message'];
      let ok = true;
      required.forEach((k) => {
        const el = form.elements[k];
        const bad = !String(f.get(k) || '').trim();
        el.setAttribute('aria-invalid', String(bad));
        if (bad) ok = false;
      });
      error.hidden = ok;
      if (!ok) { form.querySelector('[aria-invalid="true"]').focus(); return; }
      const subject = `${f.get('topic')} – Anfrage über attc.at`;
      const body = `${f.get('message')}\n\n—\n${f.get('name')}${f.get('org') ? `\n${f.get('org')}` : ''}`;
      window.location.href = `mailto:${form.dataset.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
