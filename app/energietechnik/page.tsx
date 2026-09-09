import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FadeTextCTA from "@/components/FadeTextCTA";
import ContactSection from "@/components/ContactSection";
import ServiceModules from "@/components/ServiceModules";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Energietechnik: Elektro, Heizung, Sanitär und Photovoltaik",
  description:
    "Elektroinstallationen, Heizungsbau, Sanitär, Photovoltaik, E-Mobilität und Smart Home: Energietechnik vom Meisterbetrieb Bußmann in Sassenberg.",
};

export default function EnergietechnikPage() {
  return (
    <>
      <section
        className="page-hero page-hero--media"
        style={{
          backgroundImage: "url(/images/photos/waermepumpe-beratung.jpg)",
          backgroundPosition: "62% center",
        }}
      >
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <Reveal>
            <p className="eyebrow eyebrow--light">Energietechnik vom Meisterbetrieb</p>
            <h1 className="display display--light">
              Die Energiewende? Beginnt bei Ihnen zu Hause.
            </h1>
            <p className="lead lead--light">
              Egal ob großes oder kleines Projekt: Wir realisieren Installationen für
              Elektro, Heizung und Sanitär in Wohnhäusern und in der Industrie, mit
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
            <h2 className="h2 section-title">
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
