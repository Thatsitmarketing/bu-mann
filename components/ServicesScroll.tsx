"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { ScrollTrigger, useGSAP } from "@/lib/gsap";
import {
  ArrowRight,
  BoltIcon,
  CarIcon,
  FlameIcon,
  DropIcon,
  SunIcon,
  WashIcon,
  HomeIcon,
} from "./Icons";

type Service = {
  word: string;
  title: string;
  text: string;
  href: string;
  icon: ReactNode;
};

const SERVICES: Service[] = [
  {
    word: "Elektrotechnik.",
    title: "Elektroinstallationen",
    text: "Von der Steckdose bis zur kompletten Gebäudeinstallation – modern geplant, sauber ausgeführt und sicher geprüft. Für Neubau, Sanierung und Industrie.",
    href: "/energietechnik",
    icon: <BoltIcon />,
  },
  {
    word: "Heizungstechnik.",
    title: "Heizung, Lüftung & Umweltenergien",
    text: "Energieeffiziente Heizsysteme, Wärmepumpen und Solarthermie – detailgetreu geplant und fachgerecht installiert. Damit Sie warm und sparsam durch den Winter kommen.",
    href: "/energietechnik",
    icon: <FlameIcon />,
  },
  {
    word: "Sanitärtechnik.",
    title: "Sanitär & Bad",
    text: "Vom tropfenden Hahn bis zum Wellness-Badezimmer: Wir realisieren Sanitärinstallationen, Hauswasserversorgung und Traumbäder – alles aus einer Hand.",
    href: "/energietechnik",
    icon: <DropIcon />,
  },
  {
    word: "Photovoltaik.",
    title: "Photovoltaik & Speicher",
    text: "Produzieren Sie Ihren eigenen Strom. Wir planen, montieren und warten Ihre PV-Anlage inklusive Speicher – für maximale Unabhängigkeit.",
    href: "/energietechnik",
    icon: <SunIcon />,
  },
  {
    word: "E-Mobilität.",
    title: "E-Mobilität & Wallboxen",
    text: "Laden Sie Ihr E-Auto bequem zu Hause. Wir installieren Ihre Wallbox fachgerecht und binden sie auf Wunsch in Ihre PV-Anlage ein.",
    href: "/energietechnik",
    icon: <CarIcon />,
  },
  {
    word: "Smart Home.",
    title: "Smart Home mit KNX & Gira",
    text: "Licht, Heizung, Jalousien und Sicherheit intelligent vernetzt. Wir machen Ihr Zuhause smart – herstellerunabhängig und zukunftssicher.",
    href: "/energietechnik",
    icon: <HomeIcon />,
  },
  {
    word: "Hausgeräte.",
    title: "Hausgeräte: Verkauf & Reparatur",
    text: "Energieeffiziente Markengeräte im Ausstellungsraum, Lieferung mit Einweisung, kostenlose Altgeräte-Entsorgung – und ein eigener Kundendienst, der wirklich kommt.",
    href: "/hausgeraete",
    icon: <WashIcon />,
  },
];

/**
 * Sticky-Sektion: Links bleibt die Überschrift stehen, das rote Wort
 * wechselt passend zur Leistung, die rechts gerade durchgescrollt wird.
 */
export default function ServicesScroll() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const cards = root.current?.querySelectorAll<HTMLElement>(".service-card");
      cards?.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="services-scroll section" ref={root} id="leistungen">
      <div className="container services-scroll__grid">
        <div className="services-scroll__sticky">
          <p className="eyebrow">Unsere Leistungen</p>
          <h2 className="services-scroll__title">
            Ein Betrieb.
            <br />
            Alle Gewerke.
            <br />
            <span className="services-scroll__word">
              {SERVICES.map((s, i) => (
                <span key={s.word} className={i === active ? "is-active" : ""}>
                  {s.word}
                </span>
              ))}
            </span>
          </h2>
          <p className="lead">
            Ob großes oder kleines Projekt: Wir beraten, planen und realisieren –
            mit eigenem Kundendienst und Notdienst, wenn es schnell gehen muss.
          </p>
        </div>

        <div className="services-scroll__list">
          {SERVICES.map((s) => (
            <article className="service-card" key={s.title}>
              <div className="service-card__icon">{s.icon}</div>
              <div>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
                <Link href={s.href} className="btn btn--primary service-card__cta">
                  Jetzt anfragen <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
