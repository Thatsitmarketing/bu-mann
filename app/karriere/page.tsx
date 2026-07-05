import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FadeTextCTA from "@/components/FadeTextCTA";
import { ArrowRight } from "@/components/Icons";
import { JOBS } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Karriere & Ausbildung",
  description:
    "Jobs mit Zukunft beim Meisterbetrieb Bußmann in Sassenberg: offene Stellen in Elektro, Heizung, Sanitär und Hausgeräte-Service – plus Ausbildungsplätze.",
};

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

      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <Reveal>
            <div className="job-list">
              {JOBS.map((job) => (
                <Link href={`/karriere/${job.slug}`} className="job-card" key={job.slug}>
                  <div className="job-card__media">
                    <img src={job.image} alt="" loading="lazy" />
                  </div>
                  <div className="job-card__body">
                    <span className="tag">{job.tag}</span>
                    <h3 className="h3">{job.title}</h3>
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
        ctaHref="/karriere/initiativbewerbung"
      />
    </>
  );
}
