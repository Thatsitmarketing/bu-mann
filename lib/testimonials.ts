export type Testimonial = {
  name: string;
  meta: string;
  time: string;
  rating: number;
  text: string;
};

/** Echte Google-Rezensionen von Bußmann Sassenberg. */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Julian Reschke",
    meta: "Local Guide · 12 Rezensionen · 3 Fotos",
    time: "vor 2 Monaten",
    rating: 5,
    text: "Zuverlässig & Freundlich!",
  },
  {
    name: "DJxSIS",
    meta: "Local Guide · 65 Rezensionen · 31 Fotos",
    time: "vor einem Jahr",
    rating: 5,
    text: "Seit Jahren zufrieden und gut beraten. Die ganze Familie kauft hier ein.",
  },
  {
    name: "Sarah",
    meta: "Local Guide · 16 Rezensionen · 5 Fotos",
    time: "vor 2 Jahren",
    rating: 5,
    text: "Sehr freundliche telefonische Beratung! Vielen Dank!",
  },
  {
    name: "Michael Pieper",
    meta: "Local Guide · 299 Rezensionen · 1516 Fotos",
    time: "vor 5 Jahren",
    rating: 5,
    text: "Super Service und sehr nette Angestellten!! Gas/Wasser/Elektro und Heizung alles aus einer Hand!! Plus Hausgeräte!!",
  },
  {
    name: "Rudolf Heckmann",
    meta: "Local Guide · 18 Rezensionen",
    time: "vor einem Monat",
    rating: 5,
    text: "Am Abend vor Fronleichnam hatten unsere Mieter im Obergeschoss plötzlich einen Stromausfall. Da am nächsten Tag ein Feiertag war, musste die Ursache noch am selben Abend gefunden und behoben werden. Bereits am Telefon erkannte Herr Bußmann anhand der Schilderung, dass es sich nicht um einen gewöhnlichen Standardfall handelte. Trotzdem kam er noch am selben Abend vorbei und machte sich umgehend auf die Fehlersuche. Mithilfe professioneller Messtechnik konnte er die Ursache schnell lokalisieren und den Fehler zuverlässig beheben. Vielen Dank für die schnelle, kompetente und professionelle Hilfe – besonders zu dieser ungünstigen Uhrzeit kurz vor dem Feiertag. Klare Weiterempfehlung! 👍⚡",
  },
  {
    name: "Wolfgang Sandmann",
    meta: "Local Guide · 534 Rezensionen · 680 Fotos",
    time: "vor 2 Jahren",
    rating: 5,
    text: "Gute Beratung, was zum Kauf einer Waschmaschine geführt hat!",
  },
];
