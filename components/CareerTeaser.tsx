import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";
import { JOBS } from "@/lib/jobs";

export default function CareerTeaser() {
  const featured = JOBS.slice(0, 3);

  return (
    <section
      className="career-teaser"
      style={{ backgroundImage: "url(/images/ai/karriere-bg.png)" }}
    >
      <div className="career-teaser__overlay" />
      <div className="container career-teaser__content">
        <Reveal>
          <p className="eyebrow eyebrow--light">Karriere bei Bußmann</p>
          <h2 className="h2 display--light" style={{ maxWidth: "16ch" }}>
            Werde Teil unseres Teams.
          </h2>
          <p className="lead lead--light" style={{ marginBottom: "2.4rem" }}>
            Ob Fachkraft oder Azubi: Wir suchen Menschen, die anpacken – in
            Elektro, Heizung, Sanitär und im Hausgeräte-Service.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="career-teaser__jobs">
            {featured.map((job) => (
              <Link href={`/karriere/${job.slug}`} key={job.slug} className="career-teaser__job">
                <span className="tag">{job.tag}</span>
                <strong>{job.title}</strong>
                <span className="career-teaser__job-arrow">
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <Link href="/karriere" className="btn btn--primary" style={{ marginTop: "2.4rem" }}>
            Alle Stellen ansehen <ArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
