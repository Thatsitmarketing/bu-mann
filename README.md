# Bußmann Sassenberg – Website Redesign

Moderne, mehrseitige Homepage für den Meisterbetrieb Bußmann GmbH & Co. KG
(Hausgeräte & Energietechnik, Sassenberg) – gebaut mit **Next.js** und **GSAP**.

## Seiten

- `/` – Startseite (Hero, Leistungen mit Scroll-Effekt, Fade-Text-CTAs, Team, Kontaktformular)
- `/hausgeraete` – Verkauf, Reparatur & Kundendienst
- `/energietechnik` – Elektro, Heizung, Sanitär, Photovoltaik, E-Mobilität, Smart Home
- `/karriere` – Offene Stellen & Ausbildung
- `/kontakt` – Kontaktformular & Öffnungszeiten
- `/impressum`, `/datenschutz` – Rechtliches (im Footer verlinkt)

## Animationen (GSAP + ScrollTrigger)

- Hero mit Zeilen-Reveal und Parallax-Fläche
- Sticky-Leistungssektion: rotes Schlagwort wechselt beim Scrollen passend zur Karte
- Fade-Text-CTAs: Großtext blendet Wort für Wort beim Scrollen ein (Scrub)
- Marken-Marquee, animierte Zähler, Scroll-Reveals

## Design

Farben aus dem bestehenden Markenauftritt: Rot `#a8353a`, Dunkelblau `#192e4d`.
Schrift: Manrope (next/font).

## Entwicklung

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Produktions-Build
```

Hinweis: Das Kontaktformular ist client-seitig vorbereitet und muss noch an
einen Mail-Dienst bzw. ein Backend angebunden werden.
