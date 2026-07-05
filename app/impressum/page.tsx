import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Bußmann GmbH & Co. KG, Sassenberg.",
};

export default function ImpressumPage() {
  return (
    <section className="legal">
      <div className="container">
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Bußmann GmbH &amp; Co. KG
          <br />
          Lappenbrink 29
          <br />
          48336 Sassenberg
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 02583 4664
          <br />
          E-Mail: info@bussmann-sassenberg.de
        </p>

        <h2>Vertreten durch</h2>
        <p>Die Geschäftsführung der Bußmann GmbH &amp; Co. KG.</p>

        <h2>Registereintrag &amp; Umsatzsteuer</h2>
        <p>
          Registergericht, Registernummer und Umsatzsteuer-Identifikationsnummer:
          Bitte hier die vollständigen Angaben des Unternehmens ergänzen.
        </p>

        <h2>Aufsichtsbehörde / Kammer</h2>
        <p>
          Mitglied der zuständigen Handwerkskammer. Es gelten die
          berufsrechtlichen Regelungen der Handwerksordnung (HwO).
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Bußmann GmbH &amp; Co. KG, Lappenbrink 29, 48336 Sassenberg
        </p>

        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
          bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen.
        </p>
      </div>
    </section>
  );
}
