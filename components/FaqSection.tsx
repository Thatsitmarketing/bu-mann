"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Bietet Bußmann auch einen Notdienst an?",
    a: "Ja. Für dringende Fälle in Elektro, Heizung und Sanitär erreichen Sie unseren Kunden- und Notdienst telefonisch unter 02583 4664.",
  },
  {
    q: "In welchem Gebiet sind Sie tätig?",
    a: "Unser Schwerpunkt liegt in Sassenberg und dem Münsterland, größere Projekte realisieren wir auch darüber hinaus – sprechen Sie uns einfach an.",
  },
  {
    q: "Gibt es eine Förderung für Photovoltaik oder Wärmepumpen?",
    a: "Für viele Maßnahmen der Energietechnik gibt es staatliche Förderprogramme (z.B. BAFA, KfW). Wir beraten Sie gerne, welche Förderung für Ihr Projekt infrage kommt.",
  },
  {
    q: "Reparieren Sie auch Einbaugeräte anderer Marken?",
    a: "Unser Kundendienst repariert Hausgeräte unabhängig vom Hersteller – auch bei bereits eingebauten Küchengeräten.",
  },
  {
    q: "Wie lange dauert eine Badsanierung im Schnitt?",
    a: "Je nach Umfang planen wir für eine komplette Badsanierung meist 2–3 Wochen reine Bauzeit – den genauen Zeitplan erhalten Sie in der Projektplanung.",
  },
  {
    q: "Bieten Sie auch Ausbildungsplätze an?",
    a: "Ja, wir bilden jedes Jahr in den Bereichen Elektro und Sanitär/Heizung/Klima aus. Alle Infos finden Sie auf unserer Karriereseite.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section faq">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--center">Häufige Fragen</p>
          <h2 className="h2" style={{ textAlign: "center", marginInline: "auto", maxWidth: "18ch" }}>
            Fragen? Wir haben Antworten.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="faq__list">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={item.q}>
                  <button
                    className="faq__question"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className="faq__toggle" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div className="faq__answer" style={{ maxHeight: isOpen ? "220px" : "0px" }}>
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
