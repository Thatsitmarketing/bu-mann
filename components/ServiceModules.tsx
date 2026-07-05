"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export type Module = {
  title: string;
  text: string;
  image: string;
};

const DEFAULT_MODULES: Module[] = [
  {
    title: "Elektrotechnik",
    text: "Gebäudeinstallationen für Neubau, Sanierung und Industrie – inklusive Kernbohrungen und Materialverkauf ab Lager.",
    image: "/images/ai/module-elektro.png",
  },
  {
    title: "Heizung & Umweltenergien",
    text: "Wärmepumpen, Brennwerttechnik und Solarthermie – detailgetreu geplant für maximale Effizienz.",
    image: "/images/ai/module-heizung.png",
  },
  {
    title: "Sanitär & Bad",
    text: "Von der Reparatur bis zum Wellness-Bad mit Geberit, Hansgrohe und Kaldewei.",
    image: "/images/ai/module-sanitaer.png",
  },
  {
    title: "Photovoltaik & Speicher",
    text: "Planung, Montage, Anmeldung und Wartung Ihrer PV-Anlage – auf Wunsch mit Batteriespeicher.",
    image: "/images/ai/module-pv.png",
  },
  {
    title: "E-Mobilität",
    text: "Fachgerechte Wallbox-Installation, clever kombiniert mit Photovoltaik für günstiges Laden.",
    image: "/images/ai/module-emobility.png",
  },
  {
    title: "Smart Home",
    text: "Licht, Wärme, Beschattung und Sicherheit intelligent vernetzt mit KNX und Gira.",
    image: "/images/ai/module-smarthome.png",
  },
];

/** Interaktives Modul-Raster mit Scroll-Reveal und Hover-Animation je Leistung. */
export default function ServiceModules({ modules }: { modules?: Module[] }) {
  const root = useRef<HTMLDivElement>(null);
  const items = modules ?? DEFAULT_MODULES;

  useGSAP(
    () => {
      const cards = root.current?.querySelectorAll<HTMLElement>(".module-card");
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateZ: i % 2 === 0 ? -3 : 3 },
          {
            opacity: 1,
            y: 0,
            rotateZ: 0,
            duration: 0.9,
            delay: (i % 3) * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          }
        );

        const img = card.querySelector<HTMLElement>(".module-card__img");
        const onEnter = () =>
          gsap.to(img, { rotate: 6, scale: 1.08, duration: 0.5, ease: "power3.out" });
        const onLeave = () =>
          gsap.to(img, { rotate: 0, scale: 1, duration: 0.5, ease: "power3.out" });
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
      });
    },
    { scope: root }
  );

  return (
    <div className="module-grid" ref={root}>
      {items.map((m) => (
        <article className="module-card" key={m.title}>
          <div className="module-card__media">
            <img src={m.image} alt={m.title} className="module-card__img" loading="lazy" />
          </div>
          <h3 className="h3">{m.title}</h3>
          <p>{m.text}</p>
        </article>
      ))}
    </div>
  );
}
