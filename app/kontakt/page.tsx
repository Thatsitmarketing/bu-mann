import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Bußmann Sassenberg: Hausgeräte 02583 4664, Energietechnik 02583 4318, Lappenbrink 29, 48336 Sassenberg.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">So erreichen Sie uns</p>
            <h1 className="display">Sprechen wir über Ihr Projekt.</h1>
            <p className="lead">
              Rufen Sie an, schreiben Sie uns oder kommen Sie einfach vorbei.
              Parkplätze finden Sie direkt am Haus.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactSection />

      <section className="section" style={{ paddingTop: 0, background: "var(--white)" }}>
        <div className="container">
          <Reveal>
            <div className="hours-grid">
              <div className="hours">
                <h3 className="h3">Öffnungszeiten Hausgeräte</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Mo, Di, Do, Fr</td>
                      <td>9:00 bis 12:00 Uhr und 14:30 bis 17:00 Uhr</td>
                    </tr>
                    <tr>
                      <td>Mi &amp; Sa</td>
                      <td>9:00 bis 12:00 Uhr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="hours">
                <h3 className="h3">Bürozeiten Energietechnik</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Mo, Di, Do, Fr</td>
                      <td>8:00 bis 12:00 Uhr und 14:00 bis 17:00 Uhr</td>
                    </tr>
                    <tr>
                      <td>Mi</td>
                      <td>8:00 bis 12:00 Uhr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
