import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FadeTextCTA from "@/components/FadeTextCTA";
import ContactSection from "@/components/ContactSection";
import BrandMarquee from "@/components/BrandMarquee";
import ServiceModules, { type Module } from "@/components/ServiceModules";

export const metadata: Metadata = {
  title: "Hausgeräte – Verkauf, Beratung & Reparatur",
  description:
    "Energieeffiziente Markengeräte, persönliche Beratung im Ausstellungsraum und ein eigener Kundendienst: Hausgeräte von Bußmann Sassenberg.",
};

const MODULES: Module[] = [
  {
    title: "Waschen & Trocknen",
    text: "Energieeffiziente Waschmaschinen, Trockner und Waschtrockner führender Marken – für saubere Wäsche ohne hohe Stromrechnung.",
    image: "/images/ai/module-hausgeraete.png",
  },
  {
    title: "Kühlen & Gefrieren",
    text: "Kühlschränke, Gefrierschränke und Kühl-Gefrier-Kombis in allen Größen – sparsam, leise und langlebig.",
    image: "/images/ai/module-kuehlen.png",
  },
  {
    title: "Kochen & Backen",
    text: "Herde, Backöfen, Kochfelder und Dunstabzüge – zum Anfassen und Vergleichen in unserem Ausstellungsraum.",
    image: "/images/ai/module-kochen.png",
  },
  {
    title: "Geschirrspülen",
    text: "Geschirrspüler als Einbau- oder Standgerät – wassersparend und flüsterleise, fachgerecht angeschlossen.",
    image: "/images/ai/module-spuelen.png",
  },
  {
    title: "Kleingeräte",
    text: "Kaffeevollautomaten, Staubsauger und viele weitere Kleingeräte für den Alltag – mit ehrlicher Beratung.",
    image: "/images/ai/module-kleingeraete.png",
  },
  {
    title: "Lieferung & Kundendienst",
    text: "Wir liefern, montieren und weisen ein – und unser eigener Kundendienst repariert auch Einbaugeräte.",
    image: "/images/ai/module-lieferung.png",
  },
];

export default function HausgeraetePage() {
  return (
    <>
      <section
        className="page-hero page-hero--media"
        style={{ backgroundImage: "url(/images/ai/hausgeraete-hero.png)" }}
      >
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <Reveal>
            <p className="eyebrow eyebrow--light">Hausgeräte in Sassenberg</p>
            <h1 className="display display--light">
              Markengeräte. Ehrliche Beratung. Echter Service.
            </h1>
            <p className="lead lead--light">
              Bei uns kaufen Sie kein Gerät von der Stange, sondern die Lösung, die zu
              Ihrem Haushalt passt – mit Beratung vor Ort, Lieferung, Einbau und einem
              Kundendienst, der auch nach dem Kauf für Sie da ist.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">Unser Sortiment</p>
            <h2 className="h2" style={{ maxWidth: "20ch", marginBottom: "3rem" }}>
              Für jeden Raum das passende Gerät.
            </h2>
          </Reveal>
          <ServiceModules modules={MODULES} />
        </div>
      </section>

      <BrandMarquee />

      <FadeTextCTA
        words={[
          { text: "Waschmaschine" },
          { text: "kaputt?" },
          { text: "Wir" },
          { text: "sind" },
          { text: "schon" },
          { text: "unterwegs.", accent: true },
        ]}
        ctaLabel="Reparatur anfragen"
        ctaHref="/kontakt"
      />

      <ContactSection />
    </>
  );
}
