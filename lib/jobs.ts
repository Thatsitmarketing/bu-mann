export type JobCategory =
  | "Handwerk & Technik"
  | "Kaufmännisch & Leitung"
  | "Ausbildung";

export type Job = {
  slug: string;
  category: JobCategory;
  tag: string;
  title: string;
  image: string;
  salary: string;
  summary: string;
  intro: string;
  tasks: string[];
  profile: string[];
  benefits: string[];
};

/** Reihenfolge der Kategorien in der Karriere-Übersicht. */
export const JOB_CATEGORIES: JobCategory[] = [
  "Handwerk & Technik",
  "Kaufmännisch & Leitung",
  "Ausbildung",
];

export const JOBS: Job[] = [
  {
    slug: "kaufmaennische-mitarbeiterin-hausgeraete",
    category: "Kaufmännisch & Leitung",
    tag: "Teilzeit · Verkauf",
    title: "Kaufmännische:r Mitarbeiter:in Hausgeräte (m/w/d)",
    image: "/images/ai/hausgeraete-hero.png",
    salary: "1.500 – 2.000 € brutto / Monat (Teilzeit)",
    summary:
      "Beratung und Verkauf im Ausstellungsraum, Büroorganisation, Rechnungen, Angebote und Terminplanung – das Herz unseres Hausgeräte-Teams.",
    intro:
      "Sie behalten auch an stressigen Tagen den Überblick und lächeln dabei? Dann sind Sie die Verstärkung, die unser Hausgeräte-Team sucht. Sie sind erste Ansprechperson für unsere Kundschaft im Ausstellungsraum und halten gleichzeitig im Hintergrund die Fäden zusammen.",
    tasks: [
      "Beratung und Verkauf energieeffizienter Hausgeräte im Ausstellungsraum",
      "Erstellung von Angeboten, Rechnungen und Auftragsbestätigungen",
      "Terminplanung für Lieferung, Montage und Kundendienst",
      "Allgemeine Büroorganisation und Korrespondenz",
    ],
    profile: [
      "Abgeschlossene kaufmännische Ausbildung",
      "Freude am Kundenkontakt und sicheres, freundliches Auftreten",
      "Organisationstalent und strukturierte Arbeitsweise",
      "Sichere MS-Office-Kenntnisse",
    ],
    benefits: [
      "Familiäres Arbeitsklima im Meisterbetrieb",
      "Flexible Teilzeitmodelle",
      "Planbare, verlässliche Arbeitszeiten",
      "Mitarbeiterrabatte auf Hausgeräte",
    ],
  },
  {
    slug: "projektleitung-meister",
    category: "Kaufmännisch & Leitung",
    tag: "Vollzeit · Projektleitung",
    title: "Projektleiter:in / Meister:in / Kaufmännische Fachkraft (m/w/d)",
    image: "/images/photos/waermepumpe-beratung.jpg",
    salary: "3.800 – 5.200 € brutto / Monat",
    summary:
      "Kundenkontakt und Projektverantwortung in Elektro, Heizung und Sanitär – idealerweise mit Meisterbrief und Erfahrung mit Photovoltaik und Wärmepumpen.",
    intro:
      "Sie behalten bei mehreren Baustellen gleichzeitig den Durchblick, verhandeln gerne mit Kund:innen und Lieferanten und wollen Verantwortung übernehmen? Als Projektleiter:in koordinieren Sie unsere Vorhaben von der ersten Beratung bis zur Übergabe.",
    tasks: [
      "Projektsteuerung in Elektro-, Heizungs- und Sanitärinstallationen",
      "Kundenberatung zu Photovoltaik, Wärmepumpen und Sanierungen",
      "Kalkulation, Angebotserstellung und Materialdisposition",
      "Führung und Koordination unserer Montageteams vor Ort",
    ],
    profile: [
      "Meisterbrief oder vergleichbare Qualifikation in Elektro/SHK wünschenswert",
      "Mehrjährige Berufserfahrung in der Projektabwicklung",
      "Unternehmerisches Denken und Verhandlungsgeschick",
      "Führerschein Klasse B",
    ],
    benefits: [
      "Firmenwagen auch zur privaten Nutzung möglich",
      "Eigenverantwortliches Arbeiten mit kurzen Entscheidungswegen",
      "Attraktive, leistungsgerechte Vergütung",
      "Fort- und Weiterbildungen (u.a. Photovoltaik, Wärmepumpe)",
    ],
  },
  {
    slug: "elektroniker-energie-gebaeudetechnik",
    category: "Handwerk & Technik",
    tag: "Vollzeit · Elektro",
    title: "Elektroniker:in für Energie- & Gebäudetechnik (m/w/d)",
    image: "/images/ai/hero-elektriker.png",
    salary: "3.200 – 4.200 € brutto / Monat",
    summary:
      "Abwechslungsreiche Installations- und Montagearbeiten, Wartung und Modernisierung – vom Einfamilienhaus bis zum Industrieprojekt.",
    intro:
      "Kabel verlegen, Verteilerkästen anschließen, Smart-Home-Systeme in Betrieb nehmen: Bei uns wird es nie langweilig. Sie arbeiten selbstständig auf wechselnden Baustellen und sind Teil eines eingespielten Teams.",
    tasks: [
      "Elektroinstallationen in Neubau, Sanierung und Industrie",
      "Installation von Smart-Home-Systemen (KNX, Gira)",
      "Wartung, Prüfung und Modernisierung bestehender Anlagen",
      "Anschluss von Wallboxen und PV-Anlagen",
    ],
    profile: [
      "Abgeschlossene Ausbildung als Elektroniker:in oder vergleichbar",
      "Selbstständige und sorgfältige Arbeitsweise",
      "Teamfähigkeit und Kundenorientierung",
      "Führerschein Klasse B von Vorteil",
    ],
    benefits: [
      "Moderne Werkzeuge und Fahrzeugausstattung",
      "Firmenevents und familiäres Miteinander",
      "Vermögenswirksame Leistungen",
      "Sicherer Arbeitsplatz in zukunftssicherer Branche",
    ],
  },
  {
    slug: "anlagenmechaniker-heizung-sanitaer",
    category: "Handwerk & Technik",
    tag: "Vollzeit · SHK",
    title: "Anlagenmechaniker:in Heizung/Sanitär (m/w/d)",
    image: "/images/photos/heizungsinstallation.jpg",
    salary: "3.200 – 4.300 € brutto / Monat",
    summary:
      "Neubau, Sanierung und Wartung energieeffizienter Heiztechnik, Sanitäranlagen und Wellness-Bäder.",
    intro:
      "Von der tropfenden Armatur bis zum kompletten Wellness-Bad: Sie sorgen dafür, dass bei unseren Kund:innen alles läuft – im wahrsten Sinne des Wortes. Auch Wärmepumpen und moderne Heiztechnik gehören zu Ihrem Alltag.",
    tasks: [
      "Installation und Wartung von Heizungs- und Sanitäranlagen",
      "Einbau von Wärmepumpen und Solarthermie-Systemen",
      "Bau von Bädern – von der Sanierung bis zum Wellness-Bad",
      "Kundendienst- und Notdiensteinsätze",
    ],
    profile: [
      "Abgeschlossene Ausbildung als Anlagenmechaniker:in SHK oder vergleichbar",
      "Erfahrung mit modernen Heiztechniken von Vorteil",
      "Zuverlässigkeit und handwerkliches Geschick",
      "Führerschein Klasse B",
    ],
    benefits: [
      "Attraktive Zuschläge für Notdienst",
      "Moderne Fahrzeuge und Werkzeuge",
      "Weiterbildung zum Meister möglich",
      "Familiärer Meisterbetrieb mit kurzen Wegen",
    ],
  },
  {
    slug: "kundendiensttechniker-hausgeraete",
    category: "Handwerk & Technik",
    tag: "Vollzeit · Kundendienst",
    title: "Kundendiensttechniker:in Hausgeräte (m/w/d)",
    image: "/images/photos/gastherme-wartung.jpg",
    salary: "2.900 – 3.800 € brutto / Monat",
    summary:
      "Montage, Reparatur und Fehlersuche an Hausgeräten – auch bei Einbaugeräten. Sie sind das Gesicht unseres Service.",
    intro:
      "Sie haben ein Händchen für Technik und ein freundliches Wort für unsere Kundschaft? Als Kundendiensttechniker:in sind Sie direkt vor Ort im Einsatz und lösen Probleme, die andere aufgeben würden.",
    tasks: [
      "Fehlersuche und Reparatur an Klein- und Großgeräten",
      "Montage und Anschluss von Einbaugeräten",
      "Ersatzteilbestellung und Dokumentation der Einsätze",
      "Freundlicher, lösungsorientierter Kundenkontakt vor Ort",
    ],
    profile: [
      "Technische Ausbildung, z.B. Elektroniker:in oder vergleichbar",
      "Freude am direkten Kundenkontakt",
      "Selbstständige, strukturierte Arbeitsweise",
      "Führerschein Klasse B",
    ],
    benefits: [
      "Eigenes Servicefahrzeug",
      "Feste Tourenplanung statt Dauerstress",
      "Eigenverantwortliches Arbeiten",
      "Kollegiales Team mit flachen Hierarchien",
    ],
  },
  {
    slug: "ausbildung-elektroniker",
    category: "Ausbildung",
    tag: "Ausbildung · Elektro",
    title: "Ausbildung Elektroniker:in für Energie- & Gebäudetechnik (m/w/d)",
    image: "/images/ai/hero-elektriker.png",
    salary: "780 – 1.000 € Ausbildungsvergütung / Monat (steigend je Lehrjahr)",
    summary:
      "Du hast Interesse an Technik, Strom und smarter Gebäudetechnik? Dann bist du bei uns richtig.",
    intro:
      "Steckdose, Sicherungskasten, Smart-Home-Steuerung: In deiner Ausbildung lernst du bei uns alles, was einen modernen Elektroniker ausmacht – praxisnah, auf echten Baustellen und mit erfahrenen Kolleg:innen an deiner Seite.",
    tasks: [
      "Mitarbeit bei Elektroinstallationen in Neubau und Sanierung",
      "Kennenlernen von Smart-Home-Technik (KNX, Gira)",
      "Grundlagen der Photovoltaik- und Wallbox-Installation",
      "Begleitender Berufsschulunterricht",
    ],
    profile: [
      "Guter Hauptschul- oder Realschulabschluss",
      "Interesse an Technik und handwerklichem Arbeiten",
      "Zuverlässigkeit und Teamgeist",
      "Räumliches Vorstellungsvermögen und Sorgfalt",
    ],
    benefits: [
      "Top Ausbildung in einem modernen Unternehmen",
      "Abwechslungsreiche Aufgaben und spannende Projekte",
      "Starkes Team und persönliche Betreuung",
      "Beste Chancen auf Übernahme nach der Ausbildung",
    ],
  },
  {
    slug: "ausbildung-shk",
    category: "Ausbildung",
    tag: "Ausbildung · SHK",
    title: "Ausbildung Anlagenmechaniker:in Sanitär-, Heizungs- & Klimatechnik (m/w/d)",
    image: "/images/photos/waermepumpe-wartung.jpg",
    salary: "780 – 1.000 € Ausbildungsvergütung / Monat (steigend je Lehrjahr)",
    summary:
      "Du packst gerne mit an und sorgst dafür, dass es warm, sauber und komfortabel bleibt? Dann komm in unser Team!",
    intro:
      "Rohre biegen, Heizungen einbauen, Bäder verlegen: In deiner Ausbildung zum Anlagenmechaniker SHK lernst du das komplette Handwerk rund ums warme, saubere Zuhause – inklusive moderner Wärmepumpen und Solartechnik.",
    tasks: [
      "Mitarbeit beim Einbau von Heizungs- und Sanitäranlagen",
      "Kennenlernen moderner Wärmepumpen- und Solartechnik",
      "Unterstützung bei Bädersanierungen",
      "Begleitender Berufsschulunterricht",
    ],
    profile: [
      "Guter Hauptschul- oder Realschulabschluss",
      "Handwerkliches Geschick und Interesse an Technik",
      "Zuverlässigkeit und Teamgeist",
      "Keine Scheu vor körperlicher Arbeit",
    ],
    benefits: [
      "Top Ausbildung in einem modernen Unternehmen",
      "Abwechslungsreiche Aufgaben und spannende Projekte",
      "Starkes Team und persönliche Betreuung",
      "Beste Chancen auf Übernahme nach der Ausbildung",
    ],
  },
];

export function getJobBySlug(slug: string) {
  return JOBS.find((j) => j.slug === slug);
}
