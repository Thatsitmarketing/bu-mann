"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Beratung",
    text: "Wir hören zu, besichtigen vor Ort und beraten ehrlich – zu Technik, Kosten und Fördermöglichkeiten.",
  },
  {
    n: "02",
    title: "Planung",
    text: "Detailgetreue Planung Ihres Projekts: von der Materialauswahl bis zum realistischen Zeitplan.",
  },
  {
    n: "03",
    title: "Umsetzung",
    text: "Unsere Meister und Fachkräfte installieren sauber, termintreu und mit Blick fürs Detail.",
  },
  {
    n: "04",
    title: "Service",
    text: "Auch nach der Abnahme sind wir da: mit Wartung, Kundendienst und eigenem Notdienst.",
  },
];

export default function ProcessSection() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".process-step__line",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section className="section process" ref={root}>
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--center eyebrow--light">So arbeiten wir</p>
          <h2
            className="h2 display--light"
            style={{ textAlign: "center", marginInline: "auto", maxWidth: "18ch" }}
          >
            Vom ersten Anruf bis zur Wartung danach.
          </h2>
        </Reveal>

        <div className="process-step__line" />

        <div className="process__grid">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="process-step">
                <span className="process-step__number">{s.n}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
