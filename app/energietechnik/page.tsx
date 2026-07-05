import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FadeTextCTA from "@/components/FadeTextCTA";
import ContactSection from "@/components/ContactSection";
import {
  BoltIcon,
  FlameIcon,
  DropIcon,
  SunIcon,
  CarIcon,
  HomeIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Energietechnik – Elektro, Heizung, Sanitär & Photovoltaik",
  description:
    "Elektro-, Heizungs- und Sanitärinstallationen, Photovoltaik, E-Mobilität und Smart Home: Energietechnik vom Meisterbetrieb Bußmann in Sassenberg.",
};

const FEATURES = [
  {
    icon: <BoltIcon />,
    title: "Elektroinstallationen",
    text: "Komplette Gebäudeinstallationen für Neubau, Sanierung und Industrie – inklusive Kernbohrungen (trocken und nass), Hauswasserversorgung und Materialverkauf ab Lager.",
  },
  {
    icon: <FlameIcon />,
    title: "Heizung, Lüftung & Umweltenergien",
    text: "Wärmepumpen, moderne Brennwerttechnik und Solarthermie von Vaillant und Buderus – detailgetreu geplant für maximale Effizienz und minimale Heizkosten.",
  },
  {
    icon: <DropIcon />,
    title: "Sanitär & Wellness-Bäder",
    text: "Von der Reparatur bis zum kompletten Traumbad mit Geberit, Hansgrohe und Kaldewei. Wir planen und bauen Bäder, in denen Sie ankommen.",
  },
  {
    icon: <SunIcon />,
    title: "Photovoltaik & Speicher",
    text: "Eigener Sonnenstrom vom Dach: Wir übernehmen Planung, Montage, Anmeldung und Wartung Ihrer PV-Anlage – auf Wunsch mit Batteriespeicher.",
  },
  {
    icon: <CarIcon />,
    title: "E-Mobilität & Wallboxen",
    text: "Fachgerechte Installation Ihrer Wallbox, abgestimmt auf Ihren Hausanschluss – und clever kombiniert mit Photovoltaik für günstiges Laden.",
  },
  {
    icon: <HomeIcon />,
    title: "Smart Home mit KNX & Gira",
    text: "Licht, Wärme, Beschattung und Sicherheit intelligent gesteuert. Wir vernetzen Ihr Zuhause mit KNX und Gira – zukunftssicher und komfortabel.",
  },
];

export default function EnergietechnikPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Energietechnik vom Meisterbetrieb</p>
            <h1 className="display">Die Energiewende? Beginnt bei Ihnen zu Hause.</h1>
            <p className="lead">
              Egal ob großes oder kleines Projekt: Wir realisieren Elektro-, Heizungs-
              und Sanitärinstallationen für Wohnhäuser und Industrie – mit
              detailgetreuer Planung, moderner Technik und einem Notdienst, auf den
              Sie sich verlassen können.
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
