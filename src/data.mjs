// Alle Inhalte der Website an einer Stelle.
// Personen, Mitglieder, Veranstaltungen und News werden hier gepflegt;
// die Seiten in src/pages.mjs lesen ausschließlich aus diesen Daten.

export const site = {
  name: 'ATTC – Austrian Traffic Telematics Cluster',
  short: 'ATTC',
  url: 'https://www.attc.at',
  founded: 2003,
  email: 'office@attc.at',
  phone: '+43 676 9090983',
  phoneDisplay: '+43 (0)676 90 90 983',
  address: {
    co: 'c/o Verkehrsverbund Ost-Region (VOR) GmbH',
    street: 'Europaplatz 3/3',
    zip: '1150',
    city: 'Wien',
    country: 'Österreich',
  },
  zvr: '376112003',
  // Bestehender Mitgliederbereich (WordPress) bleibt vorerst erreichbar.
  memberLogin: 'https://www.attc.at/wp-login.php',
  englishSite: 'https://www.attc.at/en/',
  // Modus-Wechsler für die Design-Varianten (für den Live-Betrieb auf false setzen)
  themeSwitcher: true,
};

// Design-Varianten. „technik“ ist der Standard (kein data-theme-Attribut).
export const themes_design = [
  { id: 'technik', label: 'Technik', swatch: ['#0c1a26', '#f2a93b'], themeColor: '#0c1a26' },
  { id: 'editorial', label: 'Editorial', swatch: ['#f2ede4', '#b4532a'], themeColor: '#f2ede4' },
  { id: 'hell', label: 'Hell', swatch: ['#edf3f8', '#2b6a96'], themeColor: '#edf3f8' },
  { id: 'signal', label: 'Signal', swatch: ['#000000', '#ff7a1a'], themeColor: '#000000' },
];

// Mitgliedsorganisationen. `key` verweist auf assets/img/logos/<key>.webp
export const orgs = {
  oebb: { name: 'ÖBB', full: 'Österreichische Bundesbahnen' },
  asfinag: { name: 'ASFINAG', full: 'ASFINAG' },
  ait: { name: 'AIT', full: 'AIT Austrian Institute of Technology' },
  wienerlinien: { name: 'Wiener Linien', full: 'Wiener Linien' },
  a1: { name: 'A1', full: 'A1 Telekom Austria' },
  austrocontrol: { name: 'Austro Control', full: 'Austro Control' },
  hitachi: { name: 'Hitachi Rail', full: 'Hitachi Rail' },
  orf: { name: 'ORF', full: 'ORF' },
  swarco: { name: 'SWARCO', full: 'SWARCO' },
  kapsch: { name: 'Kapsch TrafficCom', full: 'Kapsch TrafficCom' },
  joanneum: { name: 'Joanneum Research', full: 'JOANNEUM RESEARCH' },
  oeamtc: { name: 'ÖAMTC', full: 'ÖAMTC' },
  mvoe: { name: 'Mobilitätsverbünde Österreich', full: 'Mobilitätsverbünde Österreich' },
  yunex: { name: 'Yunex Traffic', full: 'Yunex Traffic' },
  bosch: { name: 'Bosch', full: 'Robert Bosch' },
  siemens: { name: 'Siemens Mobility', full: 'Siemens Mobility' },
  andata: { name: 'ANDATA', full: 'ANDATA' },
  cpb: { name: 'CPB Software', full: 'CPB Software (Austria)' },
  ebe: { name: 'EBE Solutions', full: 'EBE Solutions' },
  evolit: { name: 'evolit', full: 'evolit consulting' },
  logistikum: { name: 'Logistikum', full: 'Logistikum der FH OÖ' },
  frequentis: { name: 'Frequentis', full: 'Frequentis' },
  m2c: { name: 'M2C', full: 'M2C Engineering & Consulting' },
  viadonau: { name: 'viadonau', full: 'viadonau' },
  ivm: { name: 'IVM', full: 'IVM' },
  kontron: { name: 'Kontron', full: 'Kontron Transportation' },
  ccaio: { name: 'cca.io', full: 'cca.io' },
  akkodis: { name: 'Akkodis', full: 'Akkodis' },
  nts: { name: 'NTS', full: 'NTS' },
};

export const praesidium = [
  { name: 'DI Dr. techn. Johann Pluy', role: 'Präsident', org: 'oebb', img: 'pluy' },
  { name: 'VDir Mag. Hartwig Hufnagl', role: 'Vizepräsident', org: 'asfinag', img: 'hufnagl' },
  { name: 'GF DIin Dr.in Brigitte Bach, MSc', role: 'Vizepräsidentin', org: 'ait', img: 'bach' },
  { name: 'GF Mag.a Alexandra Reinagl', role: 'Präsidiumsmitglied', org: 'wienerlinien', img: 'reinagl' },
  { name: 'GF Mag. Philipp Piber', role: 'Präsidiumsmitglied', org: 'austrocontrol', img: 'piber' },
  { name: 'CEO Dr. Hana Dellemann', role: 'Präsidiumsmitglied', org: 'hitachi', img: 'dellemann' },
  { name: 'Dir. Dr. Ing. Harald Kräuter', role: 'Präsidiumsmitglied', org: 'orf', img: 'kraeuter' },
  { name: 'CEO DI (FH) Michael Schuch, MAS, MSc', role: 'Präsidiumsmitglied', org: 'swarco', img: 'schuch' },
  { name: 'Mag. Thomas Reznicek', role: 'Präsidiumsmitglied', org: 'kapsch', img: 'reznicek' },
  { name: 'GF DI Dr. Heinz Mayer', role: 'Präsidiumsmitglied', org: 'joanneum', img: 'mayer' },
  { name: 'Martin Paweletz', role: 'Präsidiumsmitglied', org: 'oeamtc', img: 'paweletz' },
  { name: 'GF Mag.a Karin Zipperer', role: 'Präsidiumsmitglied', org: 'mvoe', img: 'zipperer' },
  { name: 'MD DI Marcus Racz', role: 'Präsidiumsmitglied', org: 'yunex', img: 'racz' },
  { name: 'Mag. Wilhelm Pruckner', role: 'Präsidiumsmitglied', org: 'bosch', img: 'pruckner' },
  { name: 'CEO Mag. Arnulf Wolfram', role: 'Präsidiumsmitglied', org: 'siemens', img: 'wolfram' },
];

export const vorstand = [
  { name: 'DIin Jacqueline Erhart', role: 'Vorstandsvorsitzende', org: 'asfinag', img: 'erhart' },
  { name: 'Thomas Alexander Ruthner', role: '1. Stv. der Vorstandsvorsitzenden', org: 'orf', img: 'ruthner' },
  { name: 'Prok. DI Christian Sagmeister', role: '2. Stv. der Vorstandsvorsitzenden', org: 'oebb', img: 'sagmeister' },
  { name: 'Dipl.-Ing. Florian Zigmund, MBA', role: 'Vorstandsmitglied', org: 'hitachi', img: 'zigmund' },
  { name: 'DI Mag. Anna Huditz', role: 'Vorstandsmitglied', org: 'ait', img: 'huditz' },
  { name: 'DI Dr. Waltraud Müllner', role: 'Vorstandsmitglied', org: 'a1', img: 'muellner' },
  { name: 'Mag. Helmut Beigl', role: 'Vorstandsmitglied', org: 'oeamtc', img: 'beigl' },
  { name: 'DI Dr. Martin Linauer, MSc', role: 'Vorstandsmitglied', org: 'kapsch', img: 'linauer' },
  { name: 'DI Alexander Sauter', role: 'Vorstandsmitglied', org: 'austrocontrol', img: 'sauter' },
  { name: 'Prok. DI Helmut Wiedenhofer', role: 'Vorstandsmitglied', org: 'joanneum', img: 'wiedenhofer' },
  { name: 'GF Florian Kogelbauer', role: 'Vorstandsmitglied', org: 'swarco', img: 'kogelbauer' },
  { name: 'Kalojan Daskalow', role: 'Vorstandsmitglied', org: 'wienerlinien', img: 'daskalow' },
  { name: 'Mag. Stefan Mayr', role: 'Vorstandsmitglied', org: 'mvoe', img: 'mayr' },
  { name: 'Mag. Alfred Gunacker', role: 'Vorstandsmitglied', org: 'yunex', img: 'gunacker' },
  { name: 'Dr. Gottfried Fuchs', role: 'Vorstandsmitglied', org: 'bosch', img: 'fuchs' },
  { name: 'Dkfm. Frank Mühmel', role: 'Vorstandsmitglied', org: 'siemens', img: 'muehmel' },
];

export const startmitglieder = [
  { name: 'GF Dr. Andreas Kuhn', org: 'andata', img: 'kuhn' },
  { name: 'GF Ing. Martin Schanda', org: 'cpb', img: 'schanda' },
  { name: 'GF Ing. Alfred Paukerl, MAS, MSc', org: 'ebe', img: 'paukerl' },
  { name: 'DI (FH) Paul Kleinrath, MBA', org: 'evolit', img: 'kleinrath' },
  { name: 'Mag. Dr. Wolfgang Schildorfer', org: 'logistikum', img: 'schildorfer' },
  { name: 'DI Karl Fesl, MBA', org: 'frequentis', img: 'fesl' },
  { name: 'GF Dr. Christian Robl', org: 'm2c', img: 'robl' },
  { name: 'DI (FH) Jürgen Trögl', org: 'viadonau', img: 'troegl' },
  { name: 'Akad. Werbekfm. Michael Gressl, MBA', org: 'ivm', img: 'gressl' },
  { name: 'Richard Neussl', org: 'kontron', img: 'neussl' },
  { name: 'Kuno Skach', org: 'ccaio', img: 'skach' },
  { name: 'Dipl.-Ing. Michael Sinnl', org: 'akkodis', img: 'sinnl' },
  { name: 'Thomas Hausegger', org: 'nts', img: 'hausegger' },
].map((p) => ({ ...p, role: 'Startmitglied' }));

export const generalsekretariat = [
  { name: 'DI (FH) René Moser, MBA', role: 'Generalsekretär', org: 'asfinag', img: 'moser' },
  {
    name: 'Dipl.-Kffr. Katharina Heimbuchner',
    role: 'Vereinsmanagement & Kommunikation',
    img: 'heimbuchner',
    email: 'katharina.heimbuchner@attc.at',
  },
];

export const ehrenmitglieder = [
  'Dr. Josef Fiala',
  'Dipl.-Ing. Martin Müllner (ASFINAG)',
  'VDir. Mag. Hartwig Hufnagl (ASFINAG)',
  'Helmut-Klaus Schimany, MAS, MSc (cMobility)',
  'Dipl.-Ing. Alois Schedl',
  'Ing. Mathias Reichhold',
  'Dr. Walter Hecke (Consualia GmbH)',
  'Mag. Christian Trattner (Alpine Bau GmbH)',
  'KommR Mag. Karin Zipperer, MBA (VOR)',
];

// Reihenfolge der Logowand: Präsidiums- und Vorstandsunternehmen, danach Startmitglieder.
export const memberOrgs = [
  ...new Set([...praesidium, ...vorstand, ...startmitglieder].map((p) => p.org)),
];

export const themes = [
  {
    id: 'c-its',
    title: 'Vernetztes Fahren & C-ITS',
    text: 'Straße und Fahrzeug tauschen in Echtzeit Warnungen zu Baustellen, Staus und Gefahrenstellen aus. Österreich zählt hier zur europäischen Spitze – mit ATTC-Mitgliedern an vorderster Front.',
    icon: 'signal',
  },
  {
    id: 'ki',
    title: 'Künstliche Intelligenz',
    text: 'Von adaptiver Verkehrssteuerung über intelligente Kreuzungen bis zu KI-gestützten Zug- und Flugleitsystemen: 17 Mitglieder zeigten 2024 ihre Anwendungen auf der ATTC-Fachmesse.',
    icon: 'spark',
  },
  {
    id: 'resilienz',
    title: 'Resiliente Infrastruktur',
    text: 'Blackout, Cyberangriffe, Extremwetter: Wir diskutieren, wie Verkehrssysteme auch unter Stress zuverlässig funktionieren – und welche Rolle moderne Technologien dabei spielen.',
    icon: 'shield',
  },
  {
    id: 'klima',
    title: 'Klima & neue Antriebe',
    text: 'E-Mobilität, Wasserstoffbus, Batterietechnologie und CO₂-Bepreisung – Telematik ist der Hebel, der klimafreundliche Mobilität effizient und alltagstauglich macht.',
    icon: 'leaf',
  },
  {
    id: 'daten',
    title: 'Daten & Verkehrsinformation',
    text: 'Verlässliche, verkehrsträgerübergreifende Information ist die Basis jeder Mobilitätsentscheidung. Der ATTC war Wegbereiter der Verkehrsauskunft Österreich (VAO).',
    icon: 'data',
  },
  {
    id: 'oev',
    title: 'Öffentlicher Verkehr & Schiene',
    text: 'Automatic Train Operation, BIM, digitale Ticketlösungen und U-Bahn-Bau: Bahn und ÖV sind Kernkompetenzen im Netzwerk.',
    icon: 'rail',
  },
];

export const talkMobility = [
  { no: 18, title: 'Moderne Technologien – Fluch oder Segen für resiliente Verkehrsinfrastrukturen?' },
  { no: 17, title: 'Künstliche Intelligenz in der Mobilität', date: '2024-05-22' },
  { no: 16, title: 'Generation Mobil(ität) – 20 Jahre ATTC', date: '2023-05-16' },
  { no: 15, title: 'Resiliente Mobilität bei einem Blackout' },
  { no: 14, title: 'Mobilität in Zeiten des Klimawandels' },
  { no: 13, title: 'Die Revolution der Mobilität – Der Mensch als Passagier der technologischen Entwicklung' },
  { no: 12, title: 'Verkehrspolitische Weichenstellungen für die Mobilitätslösungen von morgen' },
  { no: 11, title: 'Wie wir uns auch in Zukunft aufeinander zubewegen' },
  { no: 10, title: 'Der Weg in die automatisierte Sackgasse?' },
  { no: 9, title: 'In die Zukunft denken, Projekte konkret gestalten' },
  { no: 8, title: 'Wien – Freiburg: Smart Cities im Mobilitätscheck' },
  { no: 7, title: 'car2car-Communication – der automobile Datenaustausch' },
  { no: 6, title: 'Mit der Sonnenkraft um die Erde' },
  { no: 5, title: 'The Digital Human Telematic User' },
  { no: 4, title: 'Navigationssysteme' },
  { no: 3, title: 'Mysterium Klimawandel' },
  { no: 2, title: 'Google Maps – Die Landkarte der Zukunft' },
  { no: 1, title: '„Und es bewegt sich doch“ – Galileo, Realisierung einer europäischen Vision' },
];

// Kamingespräche: [Datum (ISO), Thema, Gastgeber]
export const kamingespraeche = [
  ['2026-03-25', 'Kompetenzzentrum e-Mobilität Siebenhirten', 'Wiener Linien'],
  ['2025-06-10', 'Informationsabend Kontron Transportation', 'Kontron'],
  ['2025-04-23', 'Rastplatz der Zukunft', 'ASFINAG'],
  ['2025-03-03', 'Schleusenbesuch Altenwörth', 'viadonau'],
  ['2025-02-19', 'M2C-Methodenexpertise in Bahntechnik, Telematik und Automotive', 'M2C'],
  ['2025-01-22', 'Resilienz der Infrastruktur', 'ÖBB'],
  ['2024-06-12', 'Mobile Begehungskontrolle mit KI', 'CPB Software'],
  ['2024-04-03', 'Informationsabend AIRlabs Austria', 'AIRlabs Austria'],
  ['2024-03-20', 'Connected Mobility', 'Bosch'],
  ['2024-02-14', 'Entwicklung U-Bahn-Bau', 'Wiener Linien'],
  ['2024-01-10', '10 Jahre Verkehrsauskunft Österreich', 'VAO'],
  ['2023-11-08', 'Autobatterien – quo vadis?', 'mit BVe'],
  ['2023-10-11', 'Wasserstoffbus', 'Wiener Linien'],
  ['2023-07-20', '5G und Katastrophenwarnung, Sender Kahlenberg', 'ORS'],
  ['2023-04-16', 'Mobilitätstransformation', 'Yunex Traffic'],
  ['2023-04-12', 'Cyber Security – stürmische Zeiten, sichere Häfen?', 'ÖBB'],
  ['2023-03-22', 'Aktuelle Mess-Sensorik für die Straßeninfrastruktur', 'AIT'],
  ['2023-02-22', 'Austausch mit MEP Barbara Thaler', 'Europäisches Parlament'],
  ['2023-01-17', 'Digitale Transformation', 'ATTC'],
  ['2022-11-09', 'Das Verkehrssystem und seine Herausforderungen (Infofrühstück)', 'ATTC'],
  ['2022-10-18', 'Hausmesse: Demo C-ITS-Fahrzeug', 'ASFINAG'],
  ['2022-06-21', 'Domino – Status quo', 'ASFINAG'],
  ['2022-04-20', 'Innovation und Technologie', 'BMK Sektion III'],
  ['2022-03-09', 'Informationsabend Umweltbundesamt', 'Umweltbundesamt'],
  ['2022-02-16', 'Informationsabend Magna Steyr', 'Magna Steyr'],
  ['2022-01-11', 'Klimaschutz & Energieeffizienz im Schienenverkehr', 'ÖBB'],
  ['2021-11-17', 'Realdatenerfassung mit mobiler Mess-Sensorik', 'ATTC'],
  ['2021-06-17', 'Geopolitik China', 'ATTC'],
  ['2021-05-11', 'Mobilität und Daten', 'its-ch'],
  ['2021-03-24', 'C-ITS im urbanen Raum – Vulnerable Road Users (Projekt COPE)', 'ATTC'],
  ['2021-01-13', 'Elektronischer Frachtbrief', 'ATTC'],
  ['2020-12-17', 'ÖV 2022 & 1-2-3-Ticket', 'ATTC'],
  ['2020-02-19', 'Potenziale zukünftiger Antriebsformen', 'OMV'],
  ['2020-01-15', 'E-Scooter', 'TIER'],
  ['2019-10-16', 'Unternehmenspräsentation', 'Wiener Linien'],
  ['2019-04-24', 'Car2X', 'ANDATA'],
  ['2019-03-13', 'ÖV 2022', 'ARGE ÖVV'],
  ['2019-01-23', 'Sichere, hochgenaue und verfügbare Lokalisierung', 'ÖBB'],
  ['2018-10-17', 'Connecting Austria', 'SWARCO'],
  ['2018-06-13', 'Building Information Modeling (BIM)', 'ÖBB'],
  ['2018-04-18', 'Bodenmarkierungen & Automated Driving', 'SWARCO'],
  ['2018-03-14', 'EVIS', 'ASFINAG'],
  ['2018-02-28', 'REM', 'ÖBB'],
  ['2018-01-17', 'Luftraum 4.0 – Drohnen', 'Austro Control'],
  ['2017-11-22', 'Unternehmenspräsentation Sender Kahlenberg', 'ORF'],
  ['2017-07-12', 'Unternehmenspräsentation Raffinerie Schwechat', 'OMV'],
  ['2017-04-26', 'Informationsabend mit Dr. Harrer', 'ASFINAG'],
  ['2017-03-01', 'Unternehmenspräsentation', 'ÖAMTC'],
  ['2017-01-25', 'Automatic Train Operation', 'ÖBB'],
  ['2016-03-09', 'Unternehmenspräsentation', 'Thales'],
  ['2015-11-04', 'Unternehmenspräsentation', 'PLOT'],
  ['2015-09-09', 'Unternehmenspräsentation', 'DPB'],
  ['2015-06-17', 'Unternehmenspräsentation', 'EBE'],
  ['2014-11-19', 'Unternehmenspräsentation', 'ÖBB'],
  ['2014-06-24', 'Unternehmenspräsentation', 'Siemens'],
  ['2014-02-12', 'Unternehmenspräsentation', 'ORF'],
  ['2013-03-30', 'Unternehmenspräsentation', 'OMV'],
  ['2013-01-30', 'Unternehmenspräsentation', 'IBM'],
  ['2012-10-10', 'Unternehmenspräsentation', 'Joanneum Research'],
  ['2012-02-14', 'Unternehmenspräsentation', 'Austro Control'],
  ['2012-01-25', 'Unternehmenspräsentation', 'A1 Telekom'],
  ['2011-11-09', 'Unternehmenspräsentation', 'Thales'],
  ['2010-06-16', 'Unternehmenspräsentation', 'NTT Data'],
  ['2010-05-06', 'Unternehmenspräsentation', 'SKIDATA'],
  ['2009-02-25', 'Unternehmenspräsentation', 'Kapsch TrafficCom'],
  ['2007-05-10', 'Unternehmenspräsentation', 'ASFINAG'],
  ['2006-05-07', 'Unternehmenspräsentation', 'SWARCO'],
].map(([date, title, host]) => ({ date, title, host }));

export const milestones = [
  { year: '2003', title: 'Gründung', text: 'Auf Initiative der ASFINAG als Verein zur Förderung der Telematik gegründet.' },
  { year: '2008', title: '5 Jahre ATTC', text: '„Big Picture – Traffic 2030“ im Dachfoyer der Wiener Hofburg mit Prof. Konrad Paul Liessmann.' },
  { year: '2012', title: 'ITS World Congress Wien', text: 'Startpunkt der Verkehrsauskunft Österreich (VAO) – mitgetragen aus dem ATTC-Netzwerk.' },
  { year: '2013', title: '10 Jahre – Innovation by Network', text: 'Jubiläumsfeier im Saturn Tower mit Podium zu intelligenten Mobilitätslösungen.' },
  { year: '2022', title: 'C-ITS live erlebt', text: 'Mitglieder zeigen den Stand der Technik vernetzter Verkehrslösungen in der Autobahnmeisterei Kaisermühlen.' },
  { year: '2023', title: '20 Jahre ATTC', text: 'talkMobility 16 im Palais Pálffy – mit Videobotschaft der Bundesministerin.' },
  { year: '2024', title: 'KI-Positionspapier', text: '2. ATTC-Fachmesse mit 130+ Entscheidungsträger:innen und Forderungen an die Bundesregierung.' },
];

export const weitereEvents = [
  { date: '2016-11-16', title: 'Verkehrsauskunft Österreich (VAO) – Präsentation', text: 'GF Mag. Mayr und GF DI (FH) Müllner geben Einblick in die Erfolgsgeschichte der VAO, die mit dem ITS World Congress 2012 in Wien begann.' },
  { date: '2013-05-07', title: '10 Jahre ATTC – Innovation by Network', text: 'Jubiläumsfeier in der Wolke 21 des Saturn Towers mit Podiumsdiskussion zu „Intelligenten Mobilitätslösungen von heute und morgen“.' },
  { date: '2012-09-06', title: '7. Internationales Expertenforum „Traffic & Transport Information Systems“', text: 'FH St. Pölten: „New challenges, New education, New jobs“.' },
  { date: '2012-03-19', title: '2. Internationales Wintertourismussymposium', text: '„Intelligente Verkehrslösungen für den Wintertourismus“ in Innsbruck.' },
  { date: '2010-10-21', title: 'Verkehrstelematik-Symposion „E-Mobility needs Telematik“', text: 'In Kooperation mit der ÖVG: Anforderungen an die Telematik im Rahmen der E-Mobility, diskutiert in drei Schwerpunktpanels.' },
  { date: '2010-10-06', title: 'Data & Mobility 2010 – 3. Lakeside-Konferenz', text: '„Transforming information into intelligent traffic and transportation services“, Congress Center Villach.' },
  { date: '2009-11-04', title: 'VK-Telematiksymposion', text: '„Telematik – Die Brücke zwischen Mobilitätsanbieter und Nutzer“.' },
  { date: '2008-07-09', title: 'Safety in Mobility 2008 – 2. Lakeside-Konferenz', text: '„Intelligent Weather Information Systems and Services in Traffic and Transport“, Klagenfurt.' },
  { date: '2008-03-13', title: '5 Jahre ATTC – Big Picture Traffic 2030', text: 'Dachfoyer der Wiener Hofburg mit Prof. Dr. Konrad Paul Liessmann und DI Paul Forstreiter.' },
];

export const publications = [
  {
    title: 'Positionspapier: KI in der Mobilität',
    year: 2024,
    kind: 'Positionspapier',
    text: 'Erfolgreich umgesetzte KI-Use-Cases der Mitglieder und konkrete Forderungen an die Bundesregierung – von einer nationalen KI-Strategie für Mobilität bis zur Dateninfrastruktur.',
    file: 'positionspapier-ki-2024.pdf',
    cover: 'positionspapier-ki-2024',
    size: '0,8 MB',
    featured: true,
  },
  { title: 'Trend Mobility No. 3', year: 2023, kind: 'Magazin', text: 'Ausgabe Mai 2023 – Aktivitäten der ATTC- und ITS-Community und die Mobilitätstrends von morgen.', file: 'trendmobility-2023.pdf', cover: 'trendmobility-2023', size: '6,0 MB' },
  { title: 'Trend Mobility No. 2', year: 2022, kind: 'Magazin', text: 'Ausgabe April 2022.', file: 'trendmobility-2022.pdf', cover: 'trendmobility-2022', size: '3,2 MB' },
  { title: 'Trend Mobility No. 1', year: 2021, kind: 'Magazin', text: 'Ausgabe April 2021 – die ATTC-Schriftenreihe 2020.', file: 'trendmobility-2021.pdf', cover: 'trendmobility-2021', size: '8,7 MB' },
  { title: 'NEMO – Noise and Emissions Monitoring', year: 2024, kind: 'Fachartikel · Kapsch TrafficCom', text: 'Trend-Mobility-Beitrag zu Lärm- und Emissionsmonitoring im Straßenverkehr.', file: 'nemo-kapsch-de.pdf', alt: { label: 'English', file: 'nemo-kapsch-en.pdf' }, cover: 'nemo-kapsch-de', size: '0,6 MB' },
];

// News. `body` ist HTML (vertrauenswürdiger, redaktioneller Inhalt).
export const news = [
  {
    slug: 'kontron-transportation-kritische-kommunikation',
    oldSlug: 'veranstaltungen/kamingesprache/attc-informationsabend-kontron',
    kamin: '2025-06-10',
    date: '2025-06-10',
    category: 'Kamingespräch',
    title: 'Zu Gast bei Kontron Transportation: Kommunikation, auf die sich Millionen verlassen',
    teaser: 'FRMCS als Nachfolger von GSM-R, E-Ticketing und intelligente Maut: Das Kamingespräch im Juni gab Einblick in Systeme, ohne die Bahn und Öffis nicht fahren.',
    img: 'news/kontron',
    body: `
<p>Wenn Züge sicher fahren, Fahrgäste ihr Ticket entwerten und Mautsysteme den Verkehr lenken, läuft im Hintergrund betriebskritische Kommunikation – Tag für Tag, für Millionen Menschen. Wie diese Systeme heute funktionieren und wohin sie sich entwickeln, zeigte Kontron Transportation den Mitgliedern des ATTC bei einem Kamingespräch im Juni an seinem Wiener Standort.</p>
<p>Durch den Abend führten Managing Director Richard Neussl sowie die Fachexperten Reinhard Steiner-Krause und Karel Feix.</p>
<h2>FRMCS: Der nächste Standard für die Bahn</h2>
<p>Im Mittelpunkt stand das <strong>Future Railway Mobile Communication System (FRMCS)</strong> – der kommende internationale Standard für mobile Bahnkommunikation, der GSM-R ablösen wird. Für Infrastrukturbetreiber ist der Umstieg eines der großen Digitalisierungsprojekte der nächsten Jahre. Anschaulich wurde das durch „FRED“, den virtuellen Avatar von Kontron Transportation, der auf unterhaltsame Weise durch die FRMCS-Welt führt.</p>
<h2>Von der Schiene bis zur Mautstation</h2>
<p>Neben der Bahn ging es um Lösungen für den öffentlichen Verkehr – etwa <strong>elektronisches Ticketing und Entwertungssysteme</strong>, die Mobilität für Fahrgäste einfacher machen. Auch intelligente Ansätze in der <strong>Mauttechnologie</strong> wurden vorgestellt, die Verkehr gezielter steuern und Infrastruktur nachhaltiger nutzen können.</p>
<p>Wie bei jedem Kamingespräch blieb ausreichend Zeit für den persönlichen Austausch unter Fachkolleg:innen. Der ATTC dankt Kontron Transportation herzlich für die Gastfreundschaft und den offenen Dialog.</p>
<p><a class="link-arrow" href="/veranstaltungen/#kamingespraeche">Alle Kamingespräche im Archiv</a></p>`,
  },
  {
    slug: 'rastplatz-der-zukunft-roggendorf',
    oldSlug: 'veranstaltungen/kamingesprache/attc-vor-ort-der-rastplatz-der-zukunft-in-roggendorf',
    kamin: '2025-04-23',
    date: '2025-04-23',
    category: 'Kamingespräch',
    title: 'Vor Ort in Roggendorf: So sieht der Rastplatz der Zukunft aus',
    teaser: 'Über 30 Expert:innen besuchten mit der ASFINAG den neuen Rastplatz an der A1 – mit Ladepunkten für Pkw und Lkw, Stellplatz-Detektion in Echtzeit und eigener Solarstromversorgung.',
    img: 'news/rastplatz',
    gallery: ['news/rastplatz-praesentation', 'news/rastplatz-laden', 'news/rastplatz-aussen'],
    body: `
<p>Wie sieht der Rastplatz der Zukunft aus? Dieser Frage gingen am 23. April 2025 über 30 Expertinnen und Experten des ATTC gemeinsam mit der ASFINAG nach. Ziel war der 2024 eröffnete <strong>Rastplatz Roggendorf an der A1 Westautobahn</strong> – ein Beispiel dafür, wie Rastinfrastruktur innovativ, nachhaltig und nutzerfreundlich zugleich sein kann.</p>
<p>ASFINAG-Vorstand Hartwig Hufnagl, damals ATTC-Präsident, begrüßte die Gäste und betonte die strategische Bedeutung moderner Rastanlagen für Verkehrssicherheit, Energieversorgung und nachhaltige Mobilität. Danach folgte eine Präsentation der technischen Highlights und Planungsgrundlagen – und ein Rundgang über das Gelände.</p>
<h2>Was den Rastplatz besonders macht</h2>
<ul>
<li><strong>Telematik schon bei der Zufahrt:</strong> Ein intelligentes Stellplatz-Detektionssystem meldet die Belegung der Parkflächen in Echtzeit – bereits bei der Zu- und Einfahrt.</li>
<li><strong>Laden für Pkw und Lkw:</strong> Zahlreiche Ladepunkte fördern die Elektromobilität auch im Schwerverkehr.</li>
<li><strong>Weitgehend energieautark:</strong> Über 260 Photovoltaik-Paneele versorgen Beleuchtung, Betriebsanlagen und Ladeinfrastruktur; ein Speicher sichert die Versorgung bei Nacht und Schlechtwetter.</li>
<li><strong>Schwammstadt-Prinzip:</strong> Regen- und Oberflächenwasser wird gespeichert und vor Ort versickert. Das entlastet die Kanalisation und unterstützt die Grundwasserneubildung. Nachhaltige Baustoffe und der Erhalt bestehender Bäume waren Teil der Planung.</li>
<li><strong>Sicherheit und Komfort:</strong> Ein durchdachtes Beleuchtungskonzept und flächendeckende Notrufeinrichtungen sorgen für Sicherheit in der Nacht; barrierefreie Zugänge, Spielplatz, Outdoor-Fitnessgeräte und eine Hundeauslaufzone für Aufenthaltsqualität.</li>
</ul>
<p>Für die ATTC-Mitglieder war der Besuch mehr als eine Exkursion: Er zeigte, wie Planung und Technologie zusammenwirken, wenn Verkehrsinfrastruktur spürbar besser werden soll. Herzlichen Dank an die ASFINAG für die Einladung und die Führung.</p>
<p><a class="link-arrow" href="/veranstaltungen/#kamingespraeche">Alle Kamingespräche im Archiv</a></p>`,
  },
  {
    slug: '2-attc-fachmesse-ki-in-der-mobilitaet',
    oldSlug: '2-attc-fachmesse-zur-kuenstlichen-intelligenz-in-der-mobilitaet',
    date: '2024-11-28',
    category: 'Fachmesse',
    title: '2. ATTC-Fachmesse: Künstliche Intelligenz in der Mobilität',
    teaser: '17 Mitglieder, über 130 Entscheidungsträger:innen und ein Positionspapier mit klaren Forderungen an die neue Bundesregierung.',
    img: 'news/fachmesse',
    gallery: ['news/fachmesse-pano', 'news/fachmesse-2', 'news/fachmesse-3'],
    body: `
<p>Am 19. November fand die 2. ATTC-Fachmesse statt – diesmal zum Thema <strong>„Künstliche Intelligenz (KI) in der Mobilität“</strong>. ATTC-Präsident und ASFINAG-Vorstand Hartwig Hufnagl sowie ATTC-Vizepräsident und ÖBB-Infra-Vorstand Johann Pluy begrüßten über 130 Entscheidungsträger:innen und Expert:innen aus der Branche in der ÖBB Innovation Factory.</p>
<p>Der ATTC hat sich in den vergangenen 14 Monaten intensiv mit den Möglichkeiten der KI in der Mobilität beschäftigt. Bereits beim talkMobility 17 im Mai wurde deutlich, wie viel Expertise im Netzwerk vorhanden ist. Auf der Fachmesse präsentierten 17 ATTC-Mitglieder ihre KI-Produkte und -Anwendungen – von intelligenten Kreuzungen und adaptiver Verkehrssteuerung über KI-unterstützte Zug- und Flugleitsysteme bis zu Softwarelösungen für die Mobilität der Zukunft.</p>
<h2>Das Positionspapier</h2>
<p>Vorgestellt wurde auch das ATTC-Positionspapier zur Künstlichen Intelligenz. Es dokumentiert erfolgreich implementierte KI-Use-Cases der Mitglieder und richtet konkrete Forderungen an die Bundesregierung: eine nationale KI-Strategie mit Fokus auf Mobilität und Verkehr, den Ausbau einer geeigneten Dateninfrastruktur sowie Fördermaßnahmen für Innovationen und Start-ups.</p>
<p><a class="link-arrow" href="/assets/docs/positionspapier-ki-2024.pdf">Positionspapier herunterladen (PDF)</a></p>
<blockquote><p>„Die Fachmesse hat eindrucksvoll gezeigt, dass wir nicht nur die Telematik-Kompetenz in Österreich sind, sondern darüber hinaus enormes Innovationspotenzial haben und dieses auch auf den Boden bringen. Gemeinsam gelingt es uns immer wieder, Innovationen von der Idee über Piloten zur Praxisanwendung zu bringen.“</p><cite>Hartwig Hufnagl, damals ATTC-Präsident</cite></blockquote>
<p>Mehr dazu im ORF: <a href="https://on.orf.at/video/14252246/mayrs-magazin-wissen-fuer-alle-vom-22112024" rel="noopener" target="_blank">Mayrs Magazin vom 22.11.2024</a>.</p>`,
  },
  {
    slug: 'fuehrungswechsel-im-praesidium',
    oldSlug: 'attc-fuehrungswechsel-im-attc-praesidium',
    date: '2024-06-07',
    category: 'Verein',
    title: 'Führungswechsel im ATTC-Präsidium',
    teaser: 'Mag. Hartwig Hufnagl folgt Dr. Josef Fiala als ATTC-Präsident nach. Die Amtsübergabe fand im Österreichischen Parlament statt.',
    img: 'news/kelsen',
    body: `
<p>Mag. Hartwig Hufnagl wurde im Zuge der Generalversammlung des ATTC am 22. Mai 2024 zum ATTC-Präsidenten ernannt. Der ASFINAG-Manager folgte in dieser Funktion VD Dr. Josef Fiala nach, der das Präsidentenamt von 2019 bis 2024 innehatte und es aufgrund seines bevorstehenden Ruhestands zurücklegte. Hufnagl kehrte damit in führender Position in den ATTC zurück, den er bereits zwischen 2006 und 2019 als Generalsekretär maßgeblich gelenkt hatte.</p>
<p>Mag. Hufnagl ist seit Februar 2019 Vorstandsdirektor der ASFINAG für Betrieb/COO und verantwortet unter anderem Betrieb und Erhaltung, Planung und Bau, Strategie, Innovation sowie Forschung und Entwicklung. Er gilt als ausgewiesener Telematik-Experte.</p>
<h2>Amtsübergabe im Parlament</h2>
<p>Die offizielle Amtsübergabe erfolgte in den Räumlichkeiten des Österreichischen Parlaments im Kelsen. Vizepräsidentin Mag.<sup>a</sup> Alexandra Reinagl dankte Josef Fiala für seine Verdienste und würdigte ihn als Integrationsfigur, der es gelungen ist, den ATTC als maßgeblichen Akteur in der ITS-Community zu etablieren.</p>
<p>Beim anschließenden talkMobility 17 zum Thema „Künstliche Intelligenz in der Mobilität“ wurde Dr. Josef Fiala – fünf Jahre Präsident und acht Jahre Vorstandsvorsitzender – die Ehrenmitgliedschaft verliehen.</p>
<p>Bereits im Jänner 2024 wurde DI (FH) René Moser, MBA (ASFINAG) zum Vorstandsvorsitzenden und im Februar 2024 DI<sup>in</sup> Jacqueline Erhart zur Generalsekretärin bestellt.</p>
<p class="note">Hinweis: Die aktuelle Besetzung aller Gremien finden Sie unter <a href="/gremien/">Gremien</a>.</p>`,
  },
  {
    slug: 'attc-klausur-2023',
    oldSlug: 'attc-klausur-2023',
    date: '2023-09-20',
    category: 'Klausur',
    title: 'ATTC-Klausur 2023: Künstliche Intelligenz',
    teaser: 'World-Café in der Oststeiermark: vier Marktstände, Quantencomputing von der TU Wien und die höchste Teilnehmerzahl der Klausur-Geschichte.',
    img: 'news/klausur',
    body: `
<p>Am 14. und 15. September fand die ATTC-Klausur in der Oststeiermark statt – Thema: Künstliche Intelligenz. In Form eines World-Cafés erwarteten die Teilnehmenden vier Informations-Marktstände:</p>
<ul>
<li><strong>Frequentis</strong> – AI for safety-critical domains</li>
<li><strong>Austro Control Digital Services &amp; Dallmeier Electronics</strong> – KI in Kameras und Bildverarbeitung, Remote-Tower-Lösungen</li>
<li><strong>ANDATA</strong> – KI in der Fahrzeugsicherheit und im automatisierten, vernetzten Fahren</li>
<li><strong>FH Technikum Wien</strong> – AI und Data Science in angewandten F&amp;E-Projekten</li>
</ul>
<p>Abgerundet wurde das Programm durch einen Einblick in Entwicklung und Einsatz von Quantencomputern von Univ.-Prof. Ivona Brandic (TU Wien).</p>
<p>Mit der größten Teilnehmerzahl seit Beginn der Reihe zählt die Klausur zu den Flagship-Veranstaltungen im Arbeitsprogramm des ATTC. Herzlichen Dank an alle, die zum Gelingen beigetragen haben.</p>`,
  },
  {
    slug: 'talkmobility-16-20-jahre-attc',
    oldSlug: 'talk-mobility-16',
    date: '2023-05-16',
    category: 'talkMobility',
    title: 'talkMobility 16 & 20 Jahre ATTC',
    teaser: 'Jubiläum im Palais Pálffy: Podium zur „Generation Mobil(ität)“ mit Anders Indset, Angelika Kiessling-Kranzelmayer und Wolfgang Kieslich.',
    img: 'news/tm16-podium',
    body: `
<p>Am 16. Mai 2023 lud der ATTC zum 16. talkMobility ins Palais Pálffy – und feierte dabei sein 20-jähriges Bestehen. Bundesministerin Leonore Gewessler gratulierte per Videobotschaft und hob die besondere Stellung des ATTC und seiner Mitglieder in der österreichischen Verkehrstelematik hervor.</p>
<p>Am Podium diskutierten Anders Indset, Angelika Kiessling-Kranzelmayer und Wolfgang Kieslich unter der Moderation von Olivia Peter zum Thema <strong>„Generation Mobil(ität)“</strong>.</p>
<h2>Pragmatisch und verantwortungsbewusst</h2>
<p>Die neue Ö3-Jugendstudie unter rund 40.000 Jugendlichen passte perfekt zum Abend: Die Generation Z ist überraschend pragmatisch (leistbare Mobilität on demand) und denkt verantwortungsbewusst (Klima- und Umweltschutz).</p>
<p>Herausgearbeitet wurde die Bedeutung unternehmerischer Innovationskraft für die Mobilitätslösungen von morgen. Dem Verzichtsdenken wurden Wettbewerb und Anstrengung gegenübergestellt – im Rahmen einer transparenten Demokratie und einer ausgewogenen Rechtsordnung. Regionen brauchen dabei unterschiedliche Lösungsansätze im Personen- und Warenverkehr, wie persönliche Beispiele aus Kigali, Ruanda zeigten.</p>
<p>Auch virtuelle Mobilität (Homeoffice) wurde diskutiert: Sie reduziert nicht automatisch die Spitzenlasten der Infrastruktur, kann aber mit kluger Verteilung der physischen Mobilität dazu beitragen, die Grenzkosten zu senken – vorausgesetzt, es gibt einen regulatorischen Rahmen und wirtschaftliche Anreize.</p>`,
  },
  {
    slug: 'wie-koennen-fahrzeuge-mit-der-strasse-sprechen',
    oldSlug: 'wie-koennen-fahrzeuge-mit-der-strasse-sprechen',
    date: '2023-01-12',
    category: 'C-ITS',
    title: 'Wie können Fahrzeuge mit der Straße sprechen?',
    teaser: 'Car2X-Kommunikation warnt in Echtzeit vor Baustellen, Unfällen und Staus. Jacqueline Erhart erklärt im ÖAMTC-Podcast, wie das funktioniert.',
    img: 'news/car2x',
    body: `
<p>Mit Car2X-Kommunikation vernetzte Fahrzeuge können in Echtzeit vor herannahenden Baustellen, Unfällen, Staus, Geschwindigkeitslimits und Gefahrenstellen gewarnt werden – sowohl von der Straße als auch von anderen Fahrzeugen.</p>
<p>In Episode 29 des <a href="https://www.oeamtc.at/podcast/" rel="noopener" target="_blank">ÖAMTC-Podcasts</a> erklärt Jacqueline Erhart (ASFINAG), heute ATTC-Vorstandsvorsitzende, wie Car2X das Fahren sicherer macht und Unfälle verhindern hilft.</p>`,
  },
  {
    slug: 'c-its-verkehrsloesungen-autobahnmeisterei',
    oldSlug: 'c-its-demo-18-10-2022',
    date: '2022-10-19',
    category: 'C-ITS',
    title: 'C-ITS-Verkehrslösungen in der Autobahnmeisterei',
    teaser: 'ATTC-Mitglieder zeigen in Kaisermühlen den künftigen Stand der Technik – und warum Österreich bei ITS international an der Spitze steht.',
    img: 'news/cits-demo',
    body: `
<p>Am 18. Oktober 2022 zeigten die Mitglieder des ATTC den künftigen Stand der Technik für die ITS-Verkehrslösungen von morgen. Eingeladen waren Expertinnen und Experten aus Forschung &amp; Entwicklung, von Betreibern und aus der öffentlichen Verwaltung an den ASFINAG-Standort Kaisermühlen. Ehrengast war MSc. Gerhard Menzel, Leiter der BMK-Stabsstelle für intelligente Verkehrssysteme &amp; Digitale Transformation.</p>
<blockquote><p>„Kooperative intelligente Transportsysteme sind die Wegbereiter der zukünftigen und vernetzten Mobilität. Mit unseren Erfolgen im Bereich C-ITS setzen wir in Europa einen Meilenstein und richten den Blick auf die kommende Stufe im intelligenten Verkehrsmanagement.“</p><cite>Dr. Josef Fiala, damals ATTC-Präsident und ASFINAG-Vorstandsdirektor</cite></blockquote>
<h2>Was ist C-ITS?</h2>
<p>C-ITS steht für kooperative intelligente Transportsysteme – die Vernetzung von Straße, Bahn, öffentlichem Verkehr und Fahrzeugen. Infrastruktur und Fahrzeuge warnen einander vor lokalen Gefahrenstellen, bringen aktuelle Informationen direkt ins Cockpit, passen über intelligente Ampeln den Verkehrsfluss an oder geben Einsatzfahrzeugen Vorrang. Als erste Straßenbetreiberin der Welt setzt die ASFINAG C-ITS (auch Car2X oder V2X) im Regelbetrieb ein.</p>
<p class="note">Foto: Markus Schieder</p>`,
  },
  {
    slug: 'wenn-autos-mit-autos-sprechen',
    oldSlug: 'die-presse-interview',
    date: '2022-09-23',
    category: 'Presse',
    title: 'Wenn Autos mit Autos sprechen',
    teaser: '„Die Presse“ über Smart Streets: Österreich wird das erste Land Europas, das alle Autobahnen für vernetzte Mobilität ausrüstet.',
    img: 'news/smart-streets',
    body: `
<p>Michael Loibner berichtete am 22. September 2022 in „Die Presse“ über Smart Streets und sprach dafür unter anderem mit Jacqueline Erhart (ASFINAG). Der ATTC wird darin als branchenübergreifender Kompetenzbündler vorgestellt.</p>
<blockquote><p>„Österreich wird das erste Land in Europa sein, das alle seine Autobahnen mit der nötigen Technologie versieht, um automatisierte und vernetzte Mobilität zu ermöglichen.“</p><cite>Jacqueline Erhart, ASFINAG</cite></blockquote>
<h2>Die Straße spricht mit dem Auto</h2>
<p>Punktgenaue Verkehrsinformationen – etwa über Baustellen oder herannahende Einsatzfahrzeuge – erreichen nur jene Fahrer:innen, die sie betreffen. Dafür werden im Schnitt alle vier Kilometer WLAN-Boxen aufgestellt; die Informationen werden in Echtzeit ins Fahrzeug gespielt. Im nächsten Schritt soll Sensortechnik in der Infrastruktur das „Blickfeld“ der Fahrzeuge erweitern und Assistenzsysteme sowie automatisiertes Fahren unterstützen.</p>
<p>Damit das Konzept funktioniert, braucht es auch die passende Technik in den Fahrzeugen: herstellerübergreifend abgestimmte Kommunikation und zentimetergenaue Positionsbestimmung, wie Kay Römer (TU Graz) betont. An der TU Graz wurde dazu ein Verfahren entwickelt, das Funkreflexionen nicht als Störung, sondern zur präzisen Ortung nutzt – Voraussetzung für automatisiertes Konvoifahren.</p>
<p class="note">Quelle: „Die Presse“, 22.09.2022, S. 15, Ressort Report</p>`,
  },
  {
    slug: 'c-its-imagevideo-asfinag',
    oldSlug: 'c-its-imagevideo-asfinag',
    date: '2022-09-01',
    category: 'C-ITS',
    title: 'C-ITS-Imagevideo der ASFINAG',
    teaser: 'Wie Informationen über Baustellen und Unfälle per Funk direkt von der Straße ins Fahrzeug kommen – in zwei Minuten erklärt.',
    img: 'news/cits-video',
    video: 'https://youtu.be/g0Zrp1BBBow',
    body: `
<p>C-ITS steht für „Co-operative Intelligent Transport Systems“ und beschreibt den Austausch von Informationen zwischen Fahrzeugen und der Straße über Funk. Informationen über Verkehrsstörungen durch Baustellen und Unfälle werden direkt von der Straße an das Fahrzeug gesendet und dort angezeigt – so können Fahrer:innen schneller und besser auf die Situation reagieren.</p>`,
  },
  {
    slug: 'trend-mobility-magazin-2022',
    oldSlug: 'attc-trendmoobility-2022',
    date: '2022-04-26',
    category: 'Publikation',
    title: 'Trend Mobility Magazin 2022',
    teaser: 'Die zweite Ausgabe holt die Aktivitäten der ATTC- und ITS-Community vor den Vorhang.',
    img: 'news/trendmobility',
    body: `
<p>Das Magazin Trend Mobility holt die Aktivitäten der ATTC- und ITS-Community vor den Vorhang und bleibt künftigen Mobilitätstrends auf der Spur – zur Förderung der Verkehrstelematik und der Digitalisierung der Mobilität insgesamt.</p>
<p>Auch Nicht-Mitglieder sind herzlich eingeladen, ihre Visionen und Beiträge zu Verkehr(stelematik) und Mobilität mit der Leserschaft zu teilen.</p>
<p><a class="link-arrow" href="/assets/docs/trendmobility-2022.pdf">Trend Mobility 2022 herunterladen (PDF)</a></p>`,
  },
];
