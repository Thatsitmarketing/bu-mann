import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ApplicationForm from "@/components/ApplicationForm";
import { ArrowRight } from "@/components/Icons";
import { JOBS, getJobBySlug } from "@/lib/jobs";

export function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: job.title,
    description: job.summary,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <>
      <section className="job-hero">
        <div className="container">
          <Reveal>
            <Link href="/karriere" className="job-hero__back">
              ← Zurück zu allen Stellen
            </Link>
            <div className="job-hero__grid">
              <div>
                <span className="tag">{job.tag}</span>
                <h1 className="h2">{job.title}</h1>
                <p className="lead">{job.summary}</p>
                <div className="job-hero__salary">
                  <span>Gehaltsspanne</span>
                  <strong>{job.salary}</strong>
                </div>
                <a href="#bewerbung" className="btn btn--primary">
                  Jetzt bewerben <ArrowRight />
                </a>
              </div>
              <div className="job-hero__media">
                <img src={job.image} alt={job.title} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container job-detail__grid">
          <Reveal>
            <div className="job-detail__content">
              <p>{job.intro}</p>

              <h3 className="h3">Ihre Aufgaben</h3>
              <ul>
                {job.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <h3 className="h3">Ihr Profil</h3>
              <ul>
                {job.profile.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <h3 className="h3">Das bieten wir</h3>
              <ul>
                {job.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div id="bewerbung" className="job-detail__form">
              <p className="eyebrow">Bewerbung</p>
              <h2 className="h3" style={{ marginBottom: "1.4rem" }}>
                Jetzt für diese Stelle bewerben
              </h2>
              <ApplicationForm jobTitle={job.title} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
