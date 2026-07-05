import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FadeTextCTA from "@/components/FadeTextCTA";
import ContactSection from "@/components/ContactSection";
import BrandMarquee from "@/components/BrandMarquee";
import { WashIcon, WrenchIcon, HomeIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Hausgeräte – Verkauf, Beratung & Reparatur",
  description:
    "Energieeffiziente Markengeräte, persönliche Beratung im Ausstellungsraum und ein eigener Kundendienst: Hausgeräte von Bußmann Sassenberg.",
};

const FEATURES = [
  {
    icon: <WashIcon />,
    title: "Verkauf von Klein- & Großgeräten",
    text: "Waschmaschine, Geschirrspüler, Backofen oder Kaffeevollautomat: In unserem Ausstellungsraum finden Sie energieeffiziente Qualitätsgeräte führender Markenhersteller – zum Anfassen und Vergleichen.",
  },
  {
    icon: <WrenchIcon />,
    title: "Eigener Kundendienst & Reparatur",
    text: "Unser werkseigener Kundendienst findet und behebt Defekte auch bei Einbaugeräten – schnell, ehrlich und fair. Reparieren statt wegwerfen, wann immer es sich lohnt.",
  },
  {
    icon: <HomeIcon />,
    title: "Lieferung, Montage & Einweisung",
    text: "Wir liefern Ihr neues Gerät, schließen es fachgerecht an und erklären Ihnen alle Funktionen. Ihr Altgerät entsorgen wir kostenlos – und Parkplätze gibt es direkt am Haus.",
  },
];

export default function HausgeraetePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Hausgeräte in Sassenberg</p>
            <h1 className="display">Markengeräte. Ehrliche Beratung. Echter Service.</h1>
            <p className="lead">
              Bei uns kaufen Sie kein Gerät von der Stange, sondern die Lösung, die zu
              Ihrem Haushalt passt – mit Beratung vor Ort, Lieferung, Einbau und einem
              Kundendienst, der auch nach dem Kauf für Sie da ist.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="feature-grid">
              {FEATURES.map((f) => (
                <article className="feature-card" key={f.title}>
                  <div className="ico">{f.icon}</div>
                  <h3 className="h3">{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
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
