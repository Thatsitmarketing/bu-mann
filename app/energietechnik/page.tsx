import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FadeTextCTA from "@/components/FadeTextCTA";
import ContactSection from "@/components/ContactSection";
import ServiceModules from "@/components/ServiceModules";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Energietechnik – Elektro, Heizung, Sanitär & Photovoltaik",
  description:
    "Elektro-, Heizungs- und Sanitärinstallationen, Photovoltaik, E-Mobilität und Smart Home: Energietechnik vom Meisterbetrieb Bußmann in Sassenberg.",
};

export default function EnergietechnikPage() {
  return (
    <>
      <section
        className="page-hero page-hero--media"
        style={{ backgroundImage: "url(/images/ai/energietechnik-hero.png)" }}
      >
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <Reveal>
            <p className="eyebrow eyebrow--light">Energietechnik vom Meisterbetrieb</p>
            <h1 className="display display--light">
              Die Energiewende? Beginnt bei Ihnen zu Hause.
            </h1>
            <p className="lead lead--light">
              Egal ob großes oder kleines Projekt: Wir realisieren Elektro-, Heizungs-
              und Sanitärinstallationen für Wohnhäuser und Industrie – mit
              detailgetreuer Planung, moderner Technik und einem Notdienst, auf den
              Sie sich verlassen können.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">Alle Leistungen im Überblick</p>
            <h2 className="h2" style={{ maxWidth: "20ch", marginBottom: "3rem" }}>
              Ein Modul für jede Herausforderung.
            </h2>
          </Reveal>
          <ServiceModules />
        </div>
      </section>

      <ProjectGallery />

      <FadeTextCTA
        variant="navy"
        words={[
          { text: "Wärmepumpe," },
          { text: "Photovoltaik," },
          { text: "Wallbox" },
          { text: "–" },
          { text: "alles" },
          { text: "aus" },
          { text: "einer" },
          { text: "Hand.", accent: true },
        ]}
        ctaLabel="Projekt anfragen"
        ctaHref="/kontakt"
      />

      <ContactSection />
    </>
  );
}
