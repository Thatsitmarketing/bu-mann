# Bußmann Sassenberg: Website Redesign

Moderne, mehrseitige Homepage für den Meisterbetrieb Bußmann GmbH & Co. KG
(Hausgeräte und Energietechnik, Sassenberg), gebaut mit **Next.js** und **GSAP**.

## Seiten

- `/`: Startseite (Hero, Markenpartnerslider, Leistungen mit Scrolleffekt, Bewertungen, Ablauf, FAQ, Kontaktformular)
- `/hausgeraete`: Verkauf, Reparatur und Kundendienst
- `/energietechnik`: Elektro, Heizung, Sanitär, Photovoltaik, E-Mobilität, Smart Home
- `/ueber-uns`: Firmengeschichte, Werte, Team und Karriereteaser
- `/karriere`: offene Stellen und Ausbildung
- `/kontakt`: Kontaktformular und Öffnungszeiten
- `/impressum`, `/datenschutz`: Rechtliches (im Footer verlinkt)

## Animationen (GSAP + ScrollTrigger)

- Hero mit Zeilenreveal und Parallaxfläche
- Sticky Leistungssektion: rotes Schlagwort wechselt beim Scrollen passend zur Karte
- Fadetext CTAs: Großtext blendet Wort für Wort beim Scrollen ein (Scrub)
- Markenpartnerslider mit echten Logos, durchgehend in Originalfarbe
- Scrollreveals

## Design

Farben aus dem bestehenden Markenauftritt: Rot `#a8353a`, Dunkelblau `#192e4d`.
Schrift: Manrope (next/font).

## Entwicklung

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Produktionsbuild
```

Hinweis: Das Kontaktformular ist clientseitig vorbereitet und muss noch an
einen Maildienst bzw. ein Backend angebunden werden.

## Anrufwidgets

Unten rechts liegen zwei feste Anrufbuttons (`components/CallWidgets.tsx`):
rot für Hausgeräte (02583 4664), blau für Energietechnik (02583 4318).
Sie haben den früheren Chatassistenten ersetzt. Im Ruhezustand ist nur der
runde Hörer sichtbar; am Desktop fährt der Text beim Überfahren aus, auf dem
Smartphone öffnet der erste Tipp das Widget und der zweite wählt. Die
Rufnummern werden zentral im Array `LINES` gepflegt.

## Bilder

Alle Heroes und Hintergründe nutzen echte Fotos aus `public/images/photos`
und `public/images/gallery`. Aus `public/images/ai` sind nur noch die
Modulkacheln und ein Motiv für die Elektrostellenanzeigen im Einsatz.
Details stehen in der `CLAUDE.md`.

## Deployment (Cloudflare Pages)

Das Projekt läuft über `@cloudflare/next-on-pages`. Die `wrangler.toml` setzt
das nötige `nodejs_compat`-Flag bereits im Code. Falls das Pages Projekt schon
existiert und der Fehler *"Node.JS Compatibility Error, no nodejs_compat
compatibility flag set"* auftritt, muss das Flag zusätzlich einmalig im
Cloudflare-Dashboard nachgezogen werden:

**Pages Projekt → Settings → Functions → Compatibility Flags** → für
*Production* und *Preview* jeweils `nodejs_compat` hinzufügen und neu
deployen.
