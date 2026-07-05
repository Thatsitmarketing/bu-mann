import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ApplicationForm from "@/components/ApplicationForm";
import { ArrowRight, WrenchIcon, HomeIcon, SunIcon, PhoneIcon, BoltIcon, ClockIcon } from "@/components/Icons";
import { JOBS, JOB_CATEGORIES } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Karriere & Ausbildung",
  description:
    "Jobs mit Zukunft beim Meisterbetrieb Bußmann in Sassenberg: offene Stellen in Elektro, Heizung, Sanitär und Hausgeräte-Service – plus Ausbildungsplätze.",
};

const BENEFITS = [
  {
    icon: <HomeIcon />,
    title: "Familiärer Meisterbetrieb",
    text: "Inhabergeführt, kurze Entscheidungswege und ein Team, in dem man sich beim Namen kennt.",
  },
  {
    icon: <WrenchIcon />,
    title: "Moderne Ausstattung",
    text: "Aktuelle Werkzeuge, gut ausgestattete Fahrzeuge und Technik auf dem neuesten Stand.",
  },
  {
    icon: <SunIcon />,
    title: "Zukunftstechnik",
    text: "Wärmepumpe, Photovoltaik und Smart Home statt Handwerk von gestern – du arbeitest an der Energiewende.",
  },
  {
    icon: <BoltIcon />,
    title: "Weiterbildung",
    text: "Fort- und Weiterbildungen bis zum Meister – wir investieren in deine Entwicklung.",
  },
  {
    icon: <ClockIcon />,
    title: "Feierabend zu Hause",
    text: "Kurze Wege in der Region, planbare Arbeitszeiten und ein sicherer Arbeitsplatz.",
  },
  {
    icon: <PhoneIcon />,
    title: "Faire Vergütung",
    text: "Attraktive, leistungsgerechte Bezahlung inklusive Zuschlägen und vermögenswirksamer Leistungen.",
  },
];

export default function KarrierePage() {
  return (
    <>
      <section
        className="page-hero page-hero--media"
        style={{ backgroundImage: "url(/images/ai/karriere-bg.png)" }}
      >
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <Reveal>
            <p className="eyebrow eyebrow--light">Karriere bei Bußmann</p>
            <h1 className="display display--light">Handwerk mit Zukunft. Team mit Herz.</h1>
            <p className="lead lead--light">
              Ob erfahrene Fachkraft, Quereinsteiger:in oder Azubi: Bei uns arbeitest
              du an der Energiewende vor der eigenen Haustür – in einem
              Familienbetrieb, in dem man sich kennt und aufeinander verlässt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Offene Stellen, nach Kategorie gruppiert */}
      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">Offene Stellen</p>
            <h2 className="h2" style={{ maxWidth: "20ch", marginBottom: "2.5rem" }}>
              Finde deinen Platz in unserem Team.
            </h2>
          </Reveal>

          {JOB_CATEGORIES.map((category) => {
            const jobs = JOBS.filter((j) => j.category === category);
            if (jobs.length === 0) return null;
            return (
              <div className="job-category" key={category}>
                <Reveal>
                  <h3 className="job-category__title">
                    {category}
                    <span>{jobs.length} {jobs.length === 1 ? "Stelle" : "Stellen"}</span>
                  </h3>
                </Reveal>
                <Reveal delay={0.05}>
                  <div className="job-list">
                    {jobs.map((job) => (
                      <Link href={`/karriere/${job.slug}`} className="job-card" key={job.slug}>
                        <div className="job-card__media">
                          <img src={job.image} alt="" loading="lazy" />
                        </div>
                        <div className="job-card__body">
                          <span className="tag">{job.tag}</span>
                          <h4 className="h3">{job.title}</h4>
                          <p>{job.summary}</p>
                          <span className="job-card__salary">{job.salary}</span>
                        </div>
                        <span className="btn btn--ghost job-card__cta">
                          Details ansehen <ArrowRight />
                        </span>
                      </Link>
                    ))}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Vorteile */}
      <section className="section career-benefits">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow--center">Deine Vorteile</p>
            <h2 className="h2" style={{ textAlign: "center", marginInline: "auto", maxWidth: "20ch" }}>
              Darauf kannst du dich bei uns freuen.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="benefit-grid">
              {BENEFITS.map((b) => (
                <article className="benefit-card" key={b.title}>
                  <div className="benefit-card__icon">{b.icon}</div>
                  <div>
                    <h3 className="h3">{b.title}</h3>
                    <p>{b.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bewerbungsformular mit Stellenauswahl */}
      <section className="section contact" id="bewerbung">
        <div className="container contact__grid">
          <Reveal>
            <p className="eyebrow">Jetzt bewerben</p>
            <h2 className="h2">Werde Teil unseres Teams.</h2>
            <p className="lead" style={{ marginTop: "1.2rem" }}>
              Wähle einfach die passende Stelle aus und schick uns deine Bewerbung –
              oder bewirb dich initiativ. Wir melden uns schnellstmöglich bei dir.
            </p>
            <p className="lead" style={{ marginTop: "1rem", fontSize: "1rem" }}>
              Fragen vorab? Ruf uns an unter{" "}
              <a href="tel:025834664" style={{ color: "var(--red)", fontWeight: 700 }}>
                02583 4664
              </a>{" "}
              oder schreib an{" "}
              <a
                href="mailto:kpb@bussmann-sassenberg.de"
                style={{ color: "var(--red)", fontWeight: 700 }}
              >
                kpb@bussmann-sassenberg.de
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ApplicationForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
