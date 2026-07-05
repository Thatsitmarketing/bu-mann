import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Bußmann GmbH & Co. KG, Sassenberg.",
};

export default function DatenschutzPage() {
  return (
    <section className="legal">
      <div className="container">
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          Bußmann GmbH &amp; Co. KG, Lappenbrink 29, 48336 Sassenberg
          <br />
          Telefon: 02583 4664 · E-Mail: info@bussmann-sassenberg.de
        </p>

        <h2>2. Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln Ihre
          personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
          Datenschutzvorschriften (DSGVO, BDSG) sowie dieser
          Datenschutzerklärung.
        </p>

        <h2>3. Datenerfassung auf dieser Website</h2>
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter
          automatisch Informationen in sogenannten Server-Log-Dateien erfasst
          (z.&nbsp;B. Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit der
          Anfrage). Diese Daten sind nicht bestimmten Personen zuordenbar und
          dienen der technischen Sicherheit und Stabilität der Website
          (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2>4. Kontaktformular und Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch
          Anfragen zukommen lassen, werden Ihre Angaben (Name, E-Mail-Adresse,
          Telefonnummer, Nachricht) zur Bearbeitung der Anfrage und für
          Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
          Ihre Einwilligung weiter (Rechtsgrundlage: Art. 6 Abs. 1 lit. b
          DSGVO).
        </p>

        <h2>5. Bewerbungen</h2>
        <p>
          Bewerbungsunterlagen, die Sie uns per E-Mail oder Post zusenden,
          verarbeiten wir ausschließlich zur Durchführung des
          Bewerbungsverfahrens (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO,
          § 26 BDSG). Nach Abschluss des Verfahrens werden die Unterlagen
          fristgerecht gelöscht, sofern keine Einwilligung zur längeren
          Speicherung vorliegt.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Außerdem haben Sie das Recht, sich bei der zuständigen
          Datenschutz-Aufsichtsbehörde zu beschweren (Landesbeauftragte für
          Datenschutz und Informationsfreiheit Nordrhein-Westfalen).
        </p>

        <h2>7. SSL-/TLS-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
          vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie an dem Schloss-Symbol in Ihrer
          Browserzeile.
        </p>
      </div>
    </section>
  );
}
