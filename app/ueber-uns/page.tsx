import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BrandMarquee from "@/components/BrandMarquee";
import TeamSection from "@/components/TeamSection";
import CareerTeaser from "@/components/CareerTeaser";
import FadeTextCTA from "@/components/FadeTextCTA";
import { HomeIcon, WrenchIcon, PhoneIcon, PinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Bußmann Sassenberg ist ein inhabergeführter Meisterbetrieb für Hausgeräte und Energietechnik – Elektro, Heizung, Sanitär, Photovoltaik und Smart Home aus einer Hand.",
};

const VALUES = [
  {
    icon: <HomeIcon />,
    title: "Alles aus einer Hand",
    text: "Elektro, Heizung, Sanitär, Photovoltaik, Smart Home und Hausgeräte – Sie brauchen nur einen Ansprechpartner statt fünf.",
  },
  {
    icon: <WrenchIcon />,
    title: "Meisterqualität",
    text: "Als eingetragener Meisterbetrieb stehen wir mit unserem Namen für saubere, normgerechte und langlebige Arbeit.",
  },
  {
    icon: <PhoneIcon />,
    title: "Eigener Kundendienst",
    text: "Kein anonymes Callcenter: Unser werkseigener Kundendienst und Notdienst ist für Sie da, wenn es darauf ankommt.",
  },
  {
    icon: <PinIcon />,
    title: "Regional verwurzelt",
    text: "Wir sind aus Sassenberg für das Münsterland – mit kurzen Wegen, festen Gesichtern und echter Verbundenheit zur Region.",
  },
];

const STATS = [
  { value: "75+", label: "Jahre Handwerkstradition" },
  { value: "7", label: "Gewerke unter einem Dach" },
  { value: "10+", label: "starke Markenpartner" },
  { value: "4,9★", label: "bei 60+ Google-Rezensionen" },
];

export default function UeberUnsPage() {
  return (
    <>
      <section
        className="page-hero page-hero--media"
        style={{ backgroundImage: "url(/images/photos/heizungsinstallation.jpg)" }}
      >
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <Reveal>
            <p className="eyebrow eyebrow--light">Über uns</p>
            <h1 className="display display--light">
              Ihr Meisterbetrieb aus Sassenberg – seit Generationen.
            </h1>
            <p className="lead lead--light">
              Was als Handwerksbetrieb begann, ist heute Ihr Partner für modernes
              Wohnen: Hausgeräte, Elektro, Heizung, Sanitär, Photovoltaik, Smart Home
              und E-Mobilität – ehrlich beraten und meisterlich umgesetzt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Firmengeschichte / Wer wir sind */}
      <section className="section">
        <div className="container about-story">
          <Reveal>
            <div className="about-story__text">
              <p className="eyebrow">Wer wir sind</p>
              <h2 className="h2">Handwerk mit Handschlag-Qualität.</h2>
              <p>
                Bußmann ist ein inhabergeführter Meisterbetrieb im Herzen von
                Sassenberg. Bei uns bekommen Sie Haus- und Energietechnik aus einer
                Hand – von der ersten Beratung über die detailgetreue Planung bis zur
                fachgerechten Montage und Wartung.
              </p>
              <p>
                Ob Waschmaschine, Wärmepumpe, Photovoltaikanlage oder ein komplett
                neues Bad: Wir denken Projekte zu Ende und lassen unsere Kundschaft
                auch nach dem Auftrag nicht allein. Genau dafür haben wir einen eigenen
                Kundendienst und Notdienst.
              </p>
              <p>
                Bei der Erdwärme arbeiten wir eng mit dem Brunnenbau-Meisterbetrieb
                Hellweg zusammen – so kommt Ihre Erdwärmeheizung von der Bohrung bis
                zur Installation aus einer Kooperation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <figure className="about-story__media">
              <img
                src="/images/photos/waermepumpe-beratung.jpg"
                alt="Beratung zu einer modernen Wärmepumpe im Technikraum"
                loading="lazy"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Werte */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">Warum Bußmann</p>
            <h2 className="h2" style={{ maxWidth: "20ch", marginBottom: "3rem" }}>
              Vier Gründe, uns zu vertrauen.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="feature-grid feature-grid--4">
              {VALUES.map((v) => (
                <article className="feature-card" key={v.title}>
                  <div className="ico">{v.icon}</div>
                  <h3 className="h3">{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Zahlen */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="stats">
              {STATS.map((s) => (
                <div className="stats__item" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <BrandMarquee />
      <TeamSection />
      <CareerTeaser />

      <FadeTextCTA
        variant="navy"
        words={[
          { text: "Lernen" },
          { text: "Sie" },
          { text: "uns" },
          { text: "persönlich" },
          { text: "kennen.", accent: true },
        ]}
        ctaLabel="Kontakt aufnehmen"
        ctaHref="/kontakt"
      />
    </>
  );
}
