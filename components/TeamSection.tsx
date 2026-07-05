"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const TEAM = [
  { name: "Geschäftsführung", role: "Meisterbetrieb in Familienhand" },
  { name: "Elektro-Team", role: "Elektroniker für Energie- & Gebäudetechnik" },
  { name: "Heizung & Sanitär", role: "Anlagenmechaniker SHK" },
  { name: "Hausgeräte-Service", role: "Kundendiensttechniker & Beratung" },
  { name: "Planung & Projekte", role: "Projektleitung & Kalkulation" },
  { name: "Büro & Organisation", role: "Termine, Angebote & Abrechnung" },
  { name: "Ausstellung", role: "Hausgeräte-Beratung vor Ort" },
  { name: "Auszubildende", role: "Der Nachwuchs von morgen" },
];

function initials(name: string) {
  return name
    .split(/[\s&-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function TeamSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".team-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team__grid",
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section className="team section" ref={root}>
      <div className="container">
        <div className="team__head">
          <p className="eyebrow eyebrow--center">Unser Team</p>
          <h2 className="h2">Menschen, die anpacken. Für Sie da.</h2>
        </div>

        <figure className="team__photo">
          <img
            src="/images/photos/team.jpg"
            alt="Das Team von Bußmann Sassenberg vor den Firmenfahrzeugen"
            loading="lazy"
          />
        </figure>

        <div className="team__grid">
          {TEAM.map((m) => (
            <article className="team-card" key={m.name}>
              <div className="team-card__avatar" aria-hidden="true">
                {initials(m.name)}
              </div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
