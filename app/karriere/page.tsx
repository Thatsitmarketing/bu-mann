import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FadeTextCTA from "@/components/FadeTextCTA";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Karriere & Ausbildung",
  description:
    "Jobs mit Zukunft beim Meisterbetrieb Bußmann in Sassenberg: offene Stellen in Elektro, Heizung, Sanitär und Hausgeräte-Service – plus Ausbildungsplätze.",
};

const JOBS = [
  {
    tag: "Teilzeit · Verkauf",
    title: "Kaufmännische:r Mitarbeiter:in Hausgeräte (m/w/d)",
    text: "Beratung und Verkauf im Ausstellungsraum, Büroorganisation, Rechnungen, Angebote und Terminplanung – das Herz unseres Hausgeräte-Teams.",
  },
  {
    tag: "Vollzeit · Projektleitung",
    title: "Projektleiter:in / Meister:in / Kaufmännische Fachkraft (m/w/d)",
    text: "Kundenkontakt und Projektverantwortung in Elektro, Heizung und Sanitär – idealerweise mit Meisterbrief und Erfahrung mit Photovoltaik und Wärmepumpen.",
  },
  {
    tag: "Vollzeit · Elektro",
    title: "Elektroniker:in für Energie- & Gebäudetechnik (m/w/d)",
    text: "Abwechslungsreiche Installations- und Montagearbeiten, Wartung und Modernisierung – vom Einfamilienhaus bis zum Industrieprojekt.",
  },
  {
    tag: "Vollzeit · SHK",
    title: "Anlagenmechaniker:in Heizung/Sanitär (m/w/d)",
    text: "Neubau, Sanierung und Wartung energieeffizienter Heiztechnik, Sanitäranlagen und Wellness-Bäder.",
  },
  {
    tag: "Vollzeit · Kundendienst",
    title: "Kundendiensttechniker:in Hausgeräte (m/w/d)",
    text: "Montage, Reparatur und Fehlersuche an Hausgeräten – auch bei Einbaugeräten. Sie sind das Gesicht unseres Service.",
  },
];

export default function KarrierePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Karriere bei Bußmann</p>
            <h1 className="display">Handwerk mit Zukunft. Team mit Herz.</h1>
            <p className="lead">
              Ob erfahrene Fachkraft, Quereinsteiger:in oder Azubi: Bei uns arbeitest
              du an der Energiewende vor der eigenen Haustür – in einem
              Familienbetrieb, in dem man sich kennt und aufeinander verlässt.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="job-list">
              {JOBS.map((job) => (
                <article className="job-card" key={job.title}>
                  <div>
                    <span className="tag">{job.tag}</span>
                    <h3 className="h3">{job.title}</h3>
                    <p>{job.text}</p>
                  </div>
                  <a
                    className="btn btn--ghost"
                    href="mailto:kpb@bussmann-sassenberg.de?subject=Bewerbung"
                  >
                    Jetzt bewerben <ArrowRight />
                  </a>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="stats" style={{ marginTop: "3rem" }}>
              <div className="stats__item">
                <strong>Azubis</strong>
                <span>Ausbildung in Elektro &amp; SHK – jedes Jahr neue Plätze</span>
              </div>
              <div className="stats__item">
                <strong>Region</strong>
                <span>Kurze Wege, feste Kundschaft, Feierabend zu Hause</span>
              </div>
              <div className="stats__item">
                <strong>Technik</strong>
                <span>Wärmepumpe, PV &amp; Smart Home statt Handwerk von gestern</span>
              </div>
              <div className="stats__item">
                <strong>Familie</strong>
                <span>Inhabergeführter Meisterbetrieb mit echtem Teamgeist</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FadeTextCTA
        words={[
          { text: "Kein" },
          { text: "passendes" },
          { text: "Angebot" },
          { text: "dabei?" },
          { text: "Bewirb" },
          { text: "dich" },
          { text: "initiativ.", accent: true },
        ]}
        ctaLabel="Initiativbewerbung senden"
        ctaHref="mailto:kpb@bussmann-sassenberg.de?subject=Initiativbewerbung"
      />
    </>
  );
}
