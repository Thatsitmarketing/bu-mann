export type FaqEntry = {
  id: string;
  /** Stichworte/Phrasen, die eine Nutzerfrage auf diese Antwort matchen. */
  keywords: string[];
  answer: string;
};

/**
 * Wissensbasis des Chat-Widgets. Jeder Eintrag deckt über seine Keyword-Liste
 * mehrere mögliche Formulierungen derselben Frage ab (in Summe ca. 200
 * Frage-Varianten über alle Einträge hinweg).
 */
export const FAQ_KNOWLEDGE: FaqEntry[] = [
  // ---------- Öffnungszeiten ----------
  {
    id: "oeffnungszeiten-hausgeraete",
    keywords: [
      "öffnungszeiten hausgeräte",
      "wann habt ihr auf",
      "wann ist geöffnet",
      "wann öffnet der laden",
      "öffnungszeiten ausstellung",
      "ladenöffnungszeiten",
      "wann kann ich vorbeikommen",
    ],
    answer:
      "Unsere Hausgeräte-Abteilung hat Mo, Di, Do, Fr von 9–12 und 14:30–17 Uhr geöffnet, Mi und Sa von 9–12 Uhr.",
  },
  {
    id: "oeffnungszeiten-energietechnik",
    keywords: [
      "öffnungszeiten energietechnik",
      "bürozeiten",
      "wann ist das büro besetzt",
      "öffnungszeiten büro",
    ],
    answer:
      "Unser Energietechnik-Büro ist Mo, Di, Do, Fr von 8–12 und 14–17 Uhr erreichbar, Mi von 8–12 Uhr.",
  },
  {
    id: "oeffnungszeiten-wochenende",
    keywords: [
      "sonntags geöffnet",
      "samstag geöffnet",
      "wochenende geöffnet",
      "habt ihr sonntags auf",
    ],
    answer:
      "Samstags haben wir von 9–12 Uhr für Hausgeräte geöffnet, sonntags bleibt der Laden geschlossen – im Notfall erreichen Sie uns über unseren Notdienst.",
  },
  {
    id: "feiertage",
    keywords: ["feiertag geöffnet", "an feiertagen", "weihnachten geöffnet", "ostern geöffnet"],
    answer:
      "An gesetzlichen Feiertagen bleibt unser Betrieb geschlossen. Rufen Sie uns bei einem Notfall trotzdem an – wir schauen, was möglich ist.",
  },

  // ---------- Kontakt ----------
  {
    id: "telefonnummer",
    keywords: ["telefonnummer", "wie erreiche ich euch", "eure nummer", "anrufen", "telefon"],
    answer: "Sie erreichen uns telefonisch und per WhatsApp unter 02583 4664.",
  },
  {
    id: "email",
    keywords: ["email adresse", "e-mail", "mailadresse", "wie schreibe ich euch"],
    answer: "Unsere E-Mail-Adresse lautet info@bussmann-sassenberg.de.",
  },
  {
    id: "adresse",
    keywords: ["adresse", "wo seid ihr", "wo ist der laden", "standort", "anfahrt"],
    answer: "Sie finden uns unter Lappenbrink 29, 48336 Sassenberg – Parkplätze gibt es direkt am Haus.",
  },
  {
    id: "whatsapp",
    keywords: ["whatsapp", "über whatsapp schreiben"],
    answer: "Ja, Sie erreichen uns auch per WhatsApp unter 02583 4664.",
  },
  {
    id: "parkplatz",
    keywords: ["parkplatz", "parken", "wo kann ich parken"],
    answer: "Direkt an unserem Standort in der Lappenbrink 29 stehen Kundenparkplätze zur Verfügung.",
  },

  // ---------- Notdienst ----------
  {
    id: "notdienst-allgemein",
    keywords: ["notdienst", "notfall", "dringend hilfe", "sofort hilfe"],
    answer:
      "Für dringende Fälle in Elektro, Heizung und Sanitär erreichen Sie unseren Kunden- und Notdienst telefonisch unter 02583 4664.",
  },
  {
    id: "notdienst-nachts",
    keywords: ["notdienst nachts", "nachts erreichbar", "notdienst wochenende"],
    answer:
      "Unser Notdienst ist auch außerhalb der regulären Öffnungszeiten für dringende Fälle erreichbar – rufen Sie einfach 02583 4664 an.",
  },
  {
    id: "heizungsausfall",
    keywords: ["heizung ausgefallen", "heizung defekt", "keine heizung", "heizung springt nicht an"],
    answer:
      "Bei einem Heizungsausfall melden Sie sich am besten sofort telefonisch bei uns (02583 4664) – wir versuchen, kurzfristig einen Techniker zu schicken.",
  },
  {
    id: "rohrbruch",
    keywords: ["rohrbruch", "wasserschaden", "wasser tritt aus", "leitung geplatzt"],
    answer:
      "Bei einem Rohrbruch oder Wasserschaden zuerst den Haupthahn schließen und uns umgehend unter 02583 4664 kontaktieren.",
  },
  {
    id: "stromausfall",
    keywords: ["stromausfall", "sicherung raus", "kein strom mehr"],
    answer:
      "Prüfen Sie zunächst den Sicherungskasten. Lässt sich die Sicherung nicht wieder einschalten oder tritt der Fehler wiederholt auf, kontaktieren Sie unseren Elektro-Notdienst unter 02583 4664.",
  },

  // ---------- Elektro ----------
  {
    id: "elektroinstallation-allgemein",
    keywords: ["elektroinstallation", "elektriker beauftragen", "elektroarbeiten"],
    answer:
      "Wir übernehmen komplette Elektroinstallationen für Neubau, Sanierung und Gewerbe – von der Steckdose bis zur Gebäudeautomation.",
  },
  {
    id: "sicherungskasten",
    keywords: ["sicherungskasten erneuern", "zählerschrank", "verteilerkasten austauschen"],
    answer:
      "Ja, wir modernisieren veraltete Sicherungskästen und Zählerschränke fachgerecht und normgerecht.",
  },
  {
    id: "e-check",
    keywords: ["e-check", "elektroprüfung", "sicherheitsprüfung elektro"],
    answer:
      "Wir führen E-Checks und Sicherheitsprüfungen an elektrischen Anlagen durch – sprechen Sie uns für einen Termin an.",
  },
  {
    id: "kernbohrung",
    keywords: ["kernbohrung", "bohrung trocken nass", "wanddurchbruch"],
    answer:
      "Wir führen sowohl trockene als auch nasse Kernbohrungen fachgerecht durch – zum Beispiel für Leitungsdurchführungen.",
  },
  {
    id: "steckdose-nachruesten",
    keywords: ["steckdose nachrüsten", "steckdose verlegen", "zusätzliche steckdosen"],
    answer:
      "Kein Problem – wir rüsten zusätzliche Steckdosen und Anschlüsse nach, egal ob im Neubau oder Bestand.",
  },

  // ---------- Heizung ----------
  {
    id: "waermepumpe-allgemein",
    keywords: ["wärmepumpe", "wärmepumpe einbauen", "wärmepumpe kosten", "wärmepumpe lohnt sich"],
    answer:
      "Wir planen und installieren Wärmepumpen von Vaillant und Buderus – nach einer Vor-Ort-Beratung sagen wir Ihnen, ob und welche Wärmepumpe für Ihr Haus geeignet ist.",
  },
  {
    id: "gasheizung-austausch",
    keywords: ["gasheizung austauschen", "alte heizung ersetzen", "heizungstausch"],
    answer:
      "Wir beraten Sie gerne zum Austausch einer alten Gas- oder Ölheizung gegen eine moderne, effiziente Lösung wie eine Wärmepumpe oder Hybridheizung.",
  },
  {
    id: "foerderung-heizung",
    keywords: ["förderung heizung", "bafa förderung", "kfw förderung heizung", "zuschuss heizung"],
    answer:
      "Für viele Heizungsmodernisierungen gibt es staatliche Förderungen (z.B. über BAFA oder KfW). Wir beraten Sie, welche Förderung für Ihr Projekt infrage kommt.",
  },
  {
    id: "solarthermie",
    keywords: ["solarthermie", "solarkollektoren", "warmwasser solar"],
    answer:
      "Solarthermie-Anlagen zur Warmwasserbereitung und Heizungsunterstützung gehören zu unserem Leistungsspektrum – wir planen und installieren sie fachgerecht.",
  },
  {
    id: "heizungswartung",
    keywords: ["heizungswartung", "heizung warten lassen", "wartungsvertrag heizung"],
    answer:
      "Ja, wir bieten Wartungsverträge für Ihre Heizungsanlage an, damit sie zuverlässig und effizient läuft.",
  },
  {
    id: "brennwerttechnik",
    keywords: ["brennwerttherme", "brennwertkessel", "brennwerttechnik"],
    answer:
      "Wir installieren moderne Brennwerttechnik von Vaillant und Buderus für maximale Energieeffizienz.",
  },
  {
    id: "fussbodenheizung",
    keywords: ["fußbodenheizung", "fußbodenheizung nachrüsten"],
    answer:
      "Wir planen und verlegen auch Fußbodenheizungen – sowohl im Neubau als auch bei einer Sanierung.",
  },

  // ---------- Sanitär ----------
  {
    id: "badsanierung",
    keywords: ["badsanierung", "bad renovieren", "bad umbauen", "neues bad"],
    answer:
      "Von der Planung bis zur Fliese: Wir realisieren komplette Badsanierungen mit Geberit, Hansgrohe und Kaldewei – meist in 2–3 Wochen Bauzeit.",
  },
  {
    id: "barrierefreies-bad",
    keywords: ["barrierefreies bad", "altersgerechtes bad", "bodengleiche dusche"],
    answer:
      "Wir bauen barrierefreie und altersgerechte Bäder inklusive bodengleicher Dusche – für mehr Sicherheit und Komfort im Alltag.",
  },
  {
    id: "wc-reparatur",
    keywords: ["toilette verstopft", "wc defekt", "spülkasten kaputt"],
    answer:
      "Bei einem defekten WC oder Spülkasten kommen wir gerne vorbei – rufen Sie uns unter 02583 4664 an, um einen Termin zu vereinbaren.",
  },
  {
    id: "wasserhahn-tropft",
    keywords: ["wasserhahn tropft", "armatur undicht", "hahn tropft"],
    answer:
      "Ein tropfender Wasserhahn lässt sich meist schnell reparieren. Kontaktieren Sie uns für einen Termin.",
  },
  {
    id: "hauswasserversorgung",
    keywords: ["hauswasserversorgung", "brunnenanschluss", "eigenwasserversorgung"],
    answer: "Wir installieren und warten Hauswasserversorgungen für Ihr Zuhause.",
  },
  {
    id: "dachrinnen",
    keywords: ["dachrinne", "fallrohr", "regenrinne reinigen"],
    answer: "Wir übernehmen auch Montage und Reparatur von Dachrinnen und Fallrohren.",
  },

  // ---------- Photovoltaik ----------
  {
    id: "pv-kosten",
    keywords: ["photovoltaik kosten", "pv anlage preis", "was kostet eine solaranlage"],
    answer:
      "Die Kosten einer PV-Anlage hängen von Dachfläche, gewünschter Leistung und Speicher ab. Am besten vereinbaren Sie einen kostenlosen Beratungstermin, dann können wir konkret kalkulieren.",
  },
  {
    id: "pv-foerderung",
    keywords: ["photovoltaik förderung", "pv förderung", "förderung solaranlage"],
    answer:
      "Für Photovoltaikanlagen gibt es je nach Region und Zeitpunkt verschiedene Förderungen und Steuervorteile. Wir beraten Sie gerne zu den aktuellen Möglichkeiten.",
  },
  {
    id: "pv-speicher",
    keywords: ["batteriespeicher", "stromspeicher", "pv speicher sinnvoll"],
    answer:
      "Ein Batteriespeicher erhöht Ihren Eigenverbrauch deutlich. Wir planen PV-Anlagen auf Wunsch inklusive passendem Speicher.",
  },
  {
    id: "einspeiseverguetung",
    keywords: ["einspeisevergütung", "strom verkaufen", "überschusseinspeisung"],
    answer:
      "Überschüssigen Strom können Sie gegen Einspeisevergütung ins Netz einspeisen – wir übernehmen für Sie die technische Anmeldung.",
  },
  {
    id: "pv-wartung",
    keywords: ["pv anlage warten", "solaranlage reinigen", "pv wartung"],
    answer: "Ja, wir übernehmen auch Wartung und Reinigung bestehender Photovoltaikanlagen.",
  },
  {
    id: "balkonkraftwerk",
    keywords: ["balkonkraftwerk", "steckersolar", "mini pv anlage"],
    answer:
      "Kleinere Steckersolar-Lösungen (Balkonkraftwerke) beraten wir ebenfalls gerne, unser Schwerpunkt liegt allerdings auf größeren Dachanlagen.",
  },

  // ---------- E-Mobilität ----------
  {
    id: "wallbox-kosten",
    keywords: ["wallbox kosten", "was kostet eine wallbox", "ladestation preis"],
    answer:
      "Die Kosten einer Wallbox hängen vom Modell und Ihrem Hausanschluss ab. Gerne erstellen wir Ihnen ein individuelles Angebot.",
  },
  {
    id: "wallbox-installation",
    keywords: ["wallbox installieren", "wallbox einbauen lassen", "ladestation zuhause"],
    answer:
      "Wir installieren Ihre Wallbox fachgerecht und abgestimmt auf Ihren Hausanschluss – auf Wunsch auch kombiniert mit Ihrer PV-Anlage.",
  },
  {
    id: "wallbox-foerderung",
    keywords: ["wallbox förderung", "förderung ladestation"],
    answer:
      "Je nach aktuellem Förderprogramm gibt es Zuschüsse für private Wallboxen. Wir informieren Sie gerne über die aktuellen Möglichkeiten.",
  },
  {
    id: "ladeleistung",
    keywords: ["ladeleistung wallbox", "wie schnell lädt die wallbox", "11kw oder 22kw"],
    answer:
      "Die passende Ladeleistung hängt von Ihrem Hausanschluss und Fahrzeug ab – üblich sind 11 kW oder 22 kW. Wir beraten Sie zur optimalen Lösung.",
  },

  // ---------- Smart Home ----------
  {
    id: "smarthome-allgemein",
    keywords: ["smart home", "haus automatisieren", "intelligentes zuhause"],
    answer:
      "Wir vernetzen Licht, Heizung, Jalousien und Sicherheit mit KNX und Gira – herstellerunabhängig und zukunftssicher.",
  },
  {
    id: "smarthome-nachruesten",
    keywords: ["smart home nachrüsten", "knx nachrüsten", "bestandsgebäude smart machen"],
    answer:
      "Ja, Smart-Home-Technik lässt sich auch in bestehenden Gebäuden nachrüsten – wir beraten Sie zu den passenden Möglichkeiten.",
  },
  {
    id: "knx-gira",
    keywords: ["knx", "gira", "was ist knx"],
    answer:
      "KNX ist ein herstellerunabhängiger Standard für Gebäudeautomation, den wir u.a. mit Gira-Komponenten umsetzen.",
  },
  {
    id: "smarthome-kosten",
    keywords: ["smart home kosten", "was kostet smart home"],
    answer:
      "Die Kosten hängen stark vom Umfang ab – von einzelnen smarten Schaltern bis zur Vollautomation. Wir erstellen Ihnen gerne ein individuelles Angebot.",
  },

  // ---------- Hausgeräte ----------
  {
    id: "hausgeraete-verkauf",
    keywords: ["hausgeräte kaufen", "waschmaschine kaufen", "neues gerät kaufen", "backofen kaufen"],
    answer:
      "In unserem Ausstellungsraum finden Sie energieeffiziente Markengeräte führender Hersteller – inklusive persönlicher Beratung, Lieferung und Einweisung.",
  },
  {
    id: "hausgeraete-reparatur",
    keywords: ["waschmaschine reparieren", "gerät defekt", "hausgerät kaputt", "reparatur hausgeräte"],
    answer:
      "Unser eigener Kundendienst repariert Klein- und Großgeräte – auch bei bereits eingebauten Küchengeräten.",
  },
  {
    id: "miele-haendler",
    keywords: ["miele händler", "verkauft ihr miele", "miele geräte"],
    answer: "Ja, Miele gehört zu unseren Markenpartnern im Hausgeräte-Verkauf.",
  },
  {
    id: "lieferung-montage",
    keywords: ["lieferung neues gerät", "montage hausgerät", "einweisung gerät"],
    answer:
      "Wir liefern Ihr neues Gerät, schließen es fachgerecht an und erklären Ihnen alle Funktionen vor Ort.",
  },
  {
    id: "altgeraete-entsorgung",
    keywords: ["altgerät entsorgen", "altes gerät abholen", "entsorgung waschmaschine"],
    answer: "Die Entsorgung Ihres Altgeräts übernehmen wir beim Kauf eines Neugeräts kostenlos.",
  },
  {
    id: "garantie-hausgeraete",
    keywords: ["garantie hausgerät", "gewährleistung gerät", "wie lange garantie"],
    answer:
      "Die Garantiedauer richtet sich nach dem Hersteller – in der Regel 2 Jahre gesetzliche Gewährleistung. Wir beraten Sie gerne zu den Details Ihres Geräts.",
  },
  {
    id: "ersatzteile",
    keywords: ["ersatzteil bestellen", "ersatzteile hausgeräte", "gibt es das ersatzteil noch"],
    answer:
      "Wir bestellen passende Ersatzteile für Ihr Gerät und übernehmen den fachgerechten Einbau.",
  },

  // ---------- Karriere ----------
  {
    id: "offene-stellen",
    keywords: ["offene stellen", "freie jobs", "sucht ihr mitarbeiter", "stellenangebote"],
    answer:
      "Wir suchen aktuell u.a. Elektroniker:innen, Anlagenmechaniker:innen SHK und Kundendiensttechniker:innen. Alle Details finden Sie auf unserer Karriereseite unter /karriere.",
  },
  {
    id: "ausbildung",
    keywords: ["ausbildungsplatz", "azubi werden", "ausbildung bei euch", "lehrstelle"],
    answer:
      "Ja, wir bilden jedes Jahr in Elektro und Sanitär/Heizung/Klima aus – schauen Sie auf unserer Karriereseite vorbei.",
  },
  {
    id: "bewerbung-ablauf",
    keywords: ["wie bewerbe ich mich", "bewerbung schicken", "bewerbungsprozess"],
    answer:
      "Am einfachsten bewerben Sie sich direkt über das Bewerbungsformular auf der jeweiligen Stellenseite unter /karriere.",
  },
  {
    id: "initiativbewerbung",
    keywords: ["initiativbewerbung", "bewerbung ohne stelle", "blind bewerben"],
    answer:
      "Auch ohne passende Stellenanzeige freuen wir uns über Ihre Initiativbewerbung unter /karriere/initiativbewerbung.",
  },
  {
    id: "gehalt",
    keywords: ["wie viel gehalt", "verdienst", "bezahlung stelle", "wie viel verdient man"],
    answer:
      "Die Gehaltsspanne finden Sie direkt auf jeder Stellenseite unter /karriere – abhängig von Position und Erfahrung.",
  },
  {
    id: "quereinstieg",
    keywords: ["quereinstieg möglich", "quereinsteiger", "ohne ausbildung bewerben"],
    answer:
      "Grundsätzlich sind wir offen für Quereinsteiger:innen mit technischem Interesse – sprechen Sie uns gerne direkt an.",
  },
  {
    id: "praktikum",
    keywords: ["praktikum machen", "praktikumsplatz", "schülerpraktikum"],
    answer:
      "Praktikumsplätze bieten wir nach Absprache an – am besten melden Sie sich direkt bei uns unter info@bussmann-sassenberg.de.",
  },

  // ---------- Preise / Kosten ----------
  {
    id: "kostenvoranschlag",
    keywords: ["kostenvoranschlag", "unverbindliches angebot", "kostenlose beratung"],
    answer:
      "Eine erste Beratung und ein Kostenvoranschlag sind bei uns unverbindlich – kontaktieren Sie uns einfach für einen Termin.",
  },
  {
    id: "stundenlohn-handwerker",
    keywords: ["stundenlohn", "was kostet eine handwerkerstunde"],
    answer:
      "Unsere Stundensätze richten sich nach Gewerk und Aufwand – für ein konkretes Angebot sprechen Sie uns am besten direkt an.",
  },
  {
    id: "anfahrtspauschale",
    keywords: ["anfahrtspauschale", "anfahrtskosten"],
    answer:
      "Anfahrtskosten hängen vom jeweiligen Projekt ab – Details erhalten Sie in Ihrem individuellen Angebot.",
  },
  {
    id: "zahlungsarten",
    keywords: ["zahlungsarten", "wie kann ich bezahlen", "überweisung möglich", "rechnung"],
    answer:
      "Üblicherweise erfolgt die Zahlung per Überweisung nach Rechnungsstellung. Sprechen Sie uns bei Fragen gerne direkt an.",
  },

  // ---------- Termine ----------
  {
    id: "termin-vereinbaren",
    keywords: ["termin vereinbaren", "beratungstermin", "wann könnt ihr kommen"],
    answer:
      "Am schnellsten geht's telefonisch unter 02583 4664 oder über unser Kontaktformular unter /kontakt.",
  },
  {
    id: "wartezeit",
    keywords: ["wie lange dauert es bis termin", "wartezeit termin"],
    answer:
      "Die Wartezeit hängt von Auftragslage und Dringlichkeit ab – bei Notfällen versuchen wir, kurzfristig einen Termin zu finden.",
  },

  // ---------- Unternehmen ----------
  {
    id: "unternehmen-allgemein",
    keywords: ["wer seid ihr", "was macht bußmann", "über das unternehmen"],
    answer:
      "Bußmann ist ein moderner Meisterbetrieb aus Sassenberg für Hausgeräte, Elektro, Heizung, Sanitär, Photovoltaik, Smart Home und E-Mobilität.",
  },
  {
    id: "meisterbetrieb",
    keywords: ["meisterbetrieb", "seid ihr ein meisterbetrieb"],
    answer: "Ja, wir sind ein inhabergeführter Meisterbetrieb mit Sitz in Sassenberg.",
  },
  {
    id: "einsatzgebiet",
    keywords: ["einsatzgebiet", "wo seid ihr tätig", "arbeitet ihr auch außerhalb"],
    answer:
      "Unser Schwerpunkt liegt in Sassenberg und dem Münsterland, größere Projekte realisieren wir auch darüber hinaus.",
  },
  {
    id: "bewertungen",
    keywords: ["bewertungen", "google rezensionen", "erfahrungen mit euch"],
    answer:
      "Unsere Kund:innen bewerten uns bei Google im Schnitt mit 4,9 von 5 Sternen – schauen Sie gerne selbst vorbei.",
  },
  {
    id: "team-groesse",
    keywords: ["wie viele mitarbeiter", "teamgröße", "wie groß ist die firma"],
    answer:
      "Wir sind ein eingespieltes Team aus Fachkräften in Elektro, Heizung, Sanitär und Hausgeräte-Service.",
  },

  // ---------- Rechtliches ----------
  {
    id: "datenschutz",
    keywords: ["datenschutz", "was passiert mit meinen daten", "dsgvo"],
    answer:
      "Alle Informationen zum Umgang mit Ihren Daten finden Sie in unserer Datenschutzerklärung unter /datenschutz.",
  },
  {
    id: "impressum",
    keywords: ["impressum", "wer ist der betreiber", "rechtliche angaben"],
    answer: "Unser vollständiges Impressum finden Sie unter /impressum.",
  },

  // ---------- Smalltalk ----------
  {
    id: "gruss",
    keywords: ["hallo", "hi", "guten tag", "moin", "servus"],
    answer:
      "Hallo! Schön, dass Sie da sind. Wie kann ich Ihnen zu unseren Leistungen, Öffnungszeiten oder offenen Stellen weiterhelfen?",
  },
  {
    id: "dank",
    keywords: ["danke", "vielen dank", "super danke"],
    answer: "Gerne! Wenn Sie noch weitere Fragen haben, bin ich da.",
  },
  {
    id: "abschied",
    keywords: ["tschüss", "auf wiedersehen", "bis bald"],
    answer: "Auf Wiedersehen! Bei weiteren Fragen bin ich jederzeit für Sie da.",
  },
  {
    id: "wer-bist-du",
    keywords: ["wer bist du", "bist du ein mensch", "bist du ein bot"],
    answer:
      "Ich bin der digitale Assistent von Bußmann Sassenberg und beantworte Ihnen gerne Fragen rund um unsere Leistungen, Karriere und Kontakt.",
  },
];

export const SUGGESTED_QUESTIONS = [
  "Wie erreiche ich den Notdienst?",
  "Was kostet eine Photovoltaik-Anlage?",
  "Bietet ihr Ausbildungsplätze an?",
];

const FALLBACK_ANSWER =
  "Dazu habe ich leider noch keine passende Antwort. Rufen Sie uns gerne direkt unter 02583 4664 an oder schreiben Sie uns über unser Kontaktformular – wir helfen schnell weiter.";

/** Grobes Stemming für Deutsch: schneidet Wörter auf einen gemeinsamen Stamm,
 * damit z.B. "kostet"/"kosten" oder "ausbildungsplätze"/"ausbildungsplatz" matchen. */
function stem(word: string): string {
  return word.length > 6 ? word.slice(0, 6) : word;
}

// Häufige Füllwörter ohne thematischen Aussagewert – zählen nicht ins Matching.
const STOPWORDS = new Set([
  "wie", "was", "wo", "wann", "wer", "warum", "welche", "welcher", "welches",
  "ich", "du", "sie", "wir", "ihr", "euch", "uns", "mein", "meine", "eure",
  "der", "die", "das", "den", "dem", "des", "ein", "eine", "einen", "einem",
  "und", "oder", "aber", "auch", "noch", "schon", "nur", "sehr", "mal",
  "ist", "sind", "war", "waren", "bin", "bist", "hat", "habt", "habe", "haben",
  "kann", "könnt", "könnte", "kannst", "will", "wollt", "würde",
  "für", "mit", "von", "bei", "auf", "zu", "im", "in", "an", "am", "aus",
  "erreiche", "erreichen", "gibt", "es", "man", "einfach", "bitte", "danke",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[?!.,;:()„"'’]/g, "")
    .replace(/[-/]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w))
    .map(stem);
}

export function matchAnswer(input: string): string {
  const inputTokens = new Set(tokenize(input));
  if (inputTokens.size === 0) return FALLBACK_ANSWER;

  let best: { entry: FaqEntry; score: number } | null = null;

  for (const entry of FAQ_KNOWLEDGE) {
    let score = 0;
    for (const kw of entry.keywords) {
      const kwTokens = tokenize(kw);
      const overlap = kwTokens.filter((t) => inputTokens.has(t)).length;
      // Vollständiger Phrasentreffer wird zusätzlich stark belohnt.
      if (overlap === kwTokens.length && kwTokens.length > 0) score += overlap * 2;
      else score += overlap;
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score };
    }
  }

  return best ? best.entry.answer : FALLBACK_ANSWER;
}
