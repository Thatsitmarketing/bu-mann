# CLAUDE.md

Arbeitsanleitung für Claude Code in diesem Repository.

## Projekt

Website der **Bußmann GmbH & Co. KG**, Meisterbetrieb für Hausgeräte und
Energietechnik in Sassenberg (Lappenbrink 29, 48336 Sassenberg).
Kunde von That's it. Marketing. Die Seite ersetzt den bisherigen Auftritt
unter `bussmann-sassenberg.de`.

## Stack

- **Next.js 15** (App Router, TypeScript, React 19)
- **GSAP + ScrollTrigger** für alle Animationen (`lib/gsap.ts`)
- Reines CSS in `app/globals.css` (keine UI Bibliothek, keine CSS Module)
- Deployment über **Cloudflare Pages** via `@cloudflare/next-on-pages`

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Produktionsbuild, muss vor jedem Commit grün sein
npm run start   # Produktionsserver lokal
```

## Struktur

```
app/
  page.tsx                    Startseite
  hausgeraete/                Verkauf, Reparatur, Kundendienst
  energietechnik/             Elektro, Heizung, Sanitär, PV, E Mobilität, Smart Home
  ueber-uns/                  Firmengeschichte, Team
  karriere/                   Stellenübersicht, Detailseiten, Initiativbewerbung
  kontakt/                    Kontaktformular und Öffnungszeiten
  impressum/, datenschutz/    Rechtliches
  layout.tsx                  Header, Footer, Anrufwidgets
  globals.css                 komplettes Designsystem
components/                   alle Sektionen und Widgets
lib/
  gsap.ts                     zentrale GSAP Registrierung
  jobs.ts                     Stellenangebote
  testimonials.ts             Google Bewertungen
public/images/
  brands/                     Logos der Markenpartner
  gallery/, photos/           echte Fotos
  ai/                         KI generierte Motive
```

## Design

| Token | Wert | Verwendung |
| --- | --- | --- |
| `--red` | `#a8353a` | Hausgeräte, Akzente, CTAs |
| `--navy` | `#192e4d` | Energietechnik, Flächen, Typo |
| `--ink` | `#14213a` | Fließtext |

Schrift: **Manrope** über `next/font`.
Farben stammen aus dem bestehenden Bußmann Logo.

## Wichtige Bausteine

### Anrufwidgets (`components/CallWidgets.tsx`)

Zwei fest positionierte Buttons unten rechts, eingebunden in `app/layout.tsx`.
Sie haben den früheren Chat Assistenten ersetzt.

- **Rot** `--red`: Hausgeräte, **02583 4664** (Verkauf und Kundendienst)
- **Blau** `--navy`: Energietechnik, **02583 4318** (Elektro, Heizung, Sanitär)

Rufnummern werden zentral im Array `LINES` gepflegt: `display` ist die
sichtbare Schreibweise, `dial` die internationale Form für den `tel:` Link.
Wird eine Nummer geändert, müssen auch `components/Footer.tsx`,
`components/ContactSection.tsx`, `components/FaqSection.tsx` (Notdienst),
`app/kontakt/page.tsx` (Metadaten) und `app/impressum/page.tsx` mitgezogen
werden.

### Markenpartner Slider (`components/BrandMarquee.tsx`)

Endlos laufender Logoslider auf der Startseite. Die Liste ist doppelt
gerendert, GSAP schiebt den Track um `-50 %`, dadurch entsteht die nahtlose
Schleife. Logos laufen in Graustufen und färben sich beim Hover ein.
`prefers-reduced-motion` stoppt die Animation.

Partner (Stand: von `bussmann-sassenberg.de` übernommen): Miele, Vaillant,
Buderus, Gira, KNX, Zehnder, ABB, Geberit, hansgrohe, Kaldewei.

Logodateien liegen in `public/images/brands/`. Zum Austauschen einfach die
Datei mit gleichem Namen ersetzen, optische Größe über `scale` im Array
`BRANDS` feinjustieren.

> **Offen:** `miele.svg` ist eine typografische Interimswortmarke in der
> offiziellen Markenfarbe `#8C0014`, kein Originallogo. Sobald die Datei aus
> dem Miele Partnerportal vorliegt, ersetzen. Die übrigen Logos liegen nur in
> 150 px Breite vor und sollten bei Gelegenheit durch SVG oder größere PNG
> ersetzt werden.

## Konventionen

- Alle Texte auf Deutsch, Ansprache Sie (Karriereseiten duzen bewusst).
- Keine Spiegelstriche und Bindestriche in Fließtexten.
- Neue Sektionen bekommen eine Klasse im BEM Stil und ihren Block in
  `app/globals.css`, passend zur bestehenden Kommentarstruktur.
- Animationen immer über `useGSAP` mit `scope`, damit sauber aufgeräumt wird.
- Interaktive Komponenten brauchen `"use client"`.
- `npm run build` muss vor jedem Commit fehlerfrei durchlaufen.

## Deployment

Cloudflare Pages führt `npm clean-install` aus und danach den Buildbefehl
`npx @cloudflare/next-on-pages@1`. Die `wrangler.toml` setzt `nodejs_compat`.

**Buildkette ist bewusst gepinnt.** Die drei Pakete stehen exakt in den
devDependencies, damit `npx` die lokale Installation benutzt statt beim Build
frisch aufzulösen:

| Paket | Pin | Grund |
| --- | --- | --- |
| `@cloudflare/next-on-pages` | `1.13.16` | letzte 1.x, verlangt `next <= 15.5.2` |
| `wrangler` | `4.100.0` | ab 4.110 verlangt wrangler `@cloudflare/workers-types@^5`, next-on-pages aber `^4` |
| `vercel` | `47.0.4` | Peer von next-on-pages, Obergrenze `<= 47.0.4` |

`next` steht auf `^15.3.4` und ist über die `package-lock.json` auf `15.4.11`
aufgelöst, weil next-on-pages nur bis `15.5.2` unterstützt. Die Lockdatei
gehört deshalb zwingend ins Repository. Wer eines dieser Pakete anhebt, muss
`npx @cloudflare/next-on-pages@1` lokal durchlaufen lassen, bevor gepusht wird.

Tritt der Fehler *"Node.JS Compatibility Error"* auf, muss das Flag einmalig
im Dashboard unter
**Pages Projekt → Settings → Functions → Compatibility Flags** für Production
und Preview gesetzt werden.

## Offene Punkte

- Kontaktformular und Bewerbungsformular sind clientseitig vorbereitet und
  noch nicht an einen Mailversand angebunden.
- Originallogo Miele nachziehen (siehe oben).
