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
  photos/                     echte Fotos (Team, Heizung, Sanitär, Kundendienst)
  gallery/                    echte Referenzfotos (Bäder, Smart Home)
  legacy/                     Scans von der alten Seite
  ai/                         KI Illustrationen, nur noch für Modulkacheln
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

Im Ruhezustand ist nur der runde Hörer sichtbar, damit auf dem Smartphone
nichts vom Inhalt verdeckt wird. Mit Maus fährt der Text beim Überfahren aus,
auf Touchgeräten öffnet der erste Tipp das Widget und der zweite wählt. Das
Ausfahren läuft rein über CSS: `.call-widget` ist ein Raster, dessen zweite
Spalte von `0fr` auf `1fr` wächst (`:hover`, `:focus-visible`,
`.call-widget--open`). Der Zustand `--open` kommt aus React und wird beim Tippen
daneben oder beim Scrollen wieder zurückgesetzt.

Rufnummern werden zentral im Array `LINES` gepflegt: `display` ist die
sichtbare Schreibweise, `dial` die internationale Form für den `tel:` Link.
Wird eine Nummer geändert, müssen auch `components/Footer.tsx`,
`components/ContactSection.tsx`, `components/FaqSection.tsx` (Notdienst),
`app/kontakt/page.tsx` (Metadaten) und `app/impressum/page.tsx` mitgezogen
werden.

### Header und mobiles Menü (`components/Header.tsx`)

Ab 920 px Breite wird die Hauptnavigation durch den Burger ersetzt. Das
Overlay `.mobile-nav` bringt oben das Logo und rechts daneben einen runden
Schließen Button, darunter die Navigation und den CTA. Solange das Menü offen
ist, wird der Burger ausgeblendet (`.header--nav-open`), Escape und jeder
Menüpunkt schließen es. Das Overlay liegt über dem Header (`z-index` 105 zu
100), deshalb braucht es das eigene Logo.

### Leistungssektion (`components/ServicesScroll.tsx`)

Links bleibt die Überschrift sticky stehen, rechts scrollen die Karten
`.service-card` durch. Ab 920 px wird daraus eine Spalte. Ab 720 px dreht
`.service-card` auf `flex-direction: row-reverse`: das Icon steht dann rechts,
Überschrift, Text und Button stehen links. Der Textblock trägt dafür die
Klasse `.service-card__body`.

### Markenpartner Slider (`components/BrandMarquee.tsx`)

Endlos laufender Logoslider auf der Startseite. Die Liste ist doppelt
gerendert, GSAP schiebt den Track um `-50 %`, dadurch entsteht die nahtlose
Schleife. Logos laufen immer in ihrer Originalfarbe, es gibt keinen
Graustufenfilter und keine reduzierte Deckkraft mehr. Beim Hover wächst das
einzelne Logo leicht (`scale(1.06)`), `mix-blend-mode: multiply` blendet die
weissen Kanten der JPG Logos aus. `prefers-reduced-motion` stoppt die
Animation.

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

### Bildmaterial

Alle großen Motive sind echte Fotos aus dem Bestand des Kunden, keine KI
Bilder. Zuordnung:

| Platz | Datei |
| --- | --- |
| Startseite Hero | `photos/heizungsinstallation.jpg` (Ausschnitt `26% center`) |
| Über uns Hero | `photos/gastherme-wartung.jpg` |
| Energietechnik Hero | `photos/waermepumpe-beratung.jpg` |
| Hausgeräte Hero | `photos/waermepumpe-wartung.jpg` |
| Karriere Hero | `photos/team.jpg` |
| Karriere Teaser | `photos/heizungsinstallation.jpg` |
| Team Sektion | `photos/team.jpg` |
| Referenzgalerie | `gallery/*` |

Die Bildausschnitte sind bewusst gesetzt: In `heizungsinstallation.jpg` ist
rechts die Arbeitskleidung eines fremden Betriebs zu sehen, deshalb steht die
`background-position` dort auf `26% center`.

Aus dem KI Ordner sind nur noch die zwölf Modulkacheln
(`ai/module-*.png`, schlichte Strichillustrationen) und `ai/hero-elektriker.png`
für die beiden Elektro Stellenanzeigen im Einsatz. Sobald echte Fotos für
Elektroarbeiten und für die Sortimentskacheln vorliegen, werden sie ersetzt.

> **Hinweis:** `bussmann-sassenberg.de` ist aus der Cloud Session nicht
> erreichbar (Egress Policy). Neue Fotos von der alten Seite müssen lokal
> heruntergeladen und ins Repository gelegt werden.

## Konventionen

- Alle Texte auf Deutsch, Ansprache Sie (Karriereseiten duzen bewusst).
- Keine Spiegelstriche und Bindestriche, weder in Fließtexten noch in
  Überschriften, Formularlabels, Metadaten oder Kommentaren. Statt
  Gedankenstrich wird umformuliert, aus Bereichen wird "von bis", aus
  Klammerformen wie "Fort- und Weiterbildung" werden ausgeschriebene Wörter.
  Feste Schreibweisen werden aufgelöst: aus E-Mobilität wird Elektromobilität,
  aus E-Auto wird Elektroauto, aus E-Mail wird Mail oder Mailadresse, aus
  Kühl-Gefrier-Kombi wird Kombigerät. Ausnahmen sind nur wörtliche
  Kundenzitate in `lib/testimonials.ts`, Eigennamen wie Nordrhein-Westfalen
  sowie technische Bezeichner (CSS Klassen, HTML Attribute, Dateinamen,
  Domains und Mailadressen).
- Die Auszeichnung über einer Überschrift ist die Klasse `.eyebrow`. Sie
  besteht nur aus Text, es gibt keine dekorativen Striche mehr davor oder
  dahinter. `.eyebrow--center` zentriert, `.eyebrow--light` färbt für dunkle
  Flächen um. Einzige Ausnahme ist die Auszeichnung über den Google
  Bewertungen, sie bleibt eine Flexzeile, weil dort das Google Icon steht.
- Überschriften brauchen saubere Umbrüche: `text-wrap: balance` steht global
  auf `h1` bis `h4`, Sektionsüberschriften bekommen die Klasse
  `.section-title` (Breite und Abstand), keine Inline Styles mehr.
- Jede Änderung am Layout auch bei 390 px prüfen. Die mobilen Abstände stehen
  gesammelt im Block "Mobile Feinschliff" am Ende von `app/globals.css`.
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
- Echte Fotos für Elektroarbeiten fehlen, deshalb steht bei den beiden
  Elektro Stellenanzeigen noch `ai/hero-elektriker.png`.
- Die zwölf Modulkacheln sind Illustrationen. Sobald echte Produkt- und
  Anlagenfotos vorliegen, ersetzen und `.module-card__media` auf
  `object-fit: cover` umstellen.
