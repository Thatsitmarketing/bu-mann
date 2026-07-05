"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "./Icons";
import { JOBS } from "@/lib/jobs";

type ApplicationFormProps = {
  /** Vorausgewählte Stelle – wird bei Aufruf von einer Job-Detailseite übergeben. */
  jobTitle?: string;
};

export default function ApplicationForm({ jobTitle }: ApplicationFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Hinweis: Hier später an ein Backend / einen Mail-Dienst anbinden.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form form--success-only">
        <p className="form__success" role="status">
          Vielen Dank für Ihre Bewerbung! Wir melden uns schnellstmöglich bei
          Ihnen zurück.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__field">
        <label htmlFor="app-name">Name*</label>
        <input id="app-name" name="name" type="text" required placeholder="Max Mustermann" />
      </div>
      <div className="form__field">
        <label htmlFor="app-email">E-Mail*</label>
        <input id="app-email" name="email" type="email" required placeholder="max@beispiel.de" />
      </div>
      <div className="form__field">
        <label htmlFor="app-phone">Telefon</label>
        <input id="app-phone" name="phone" type="tel" placeholder="02583 …" />
      </div>
      <div className="form__field">
        <label htmlFor="app-position">Stelle*</label>
        <select id="app-position" name="position" required defaultValue={jobTitle ?? ""}>
          {!jobTitle && (
            <option value="" disabled>
              Bitte wählen …
            </option>
          )}
          {JOBS.map((j) => (
            <option key={j.slug} value={j.title}>
              {j.title}
            </option>
          ))}
          <option value="Initiativbewerbung">Initiativbewerbung</option>
        </select>
      </div>
      <div className="form__field form__field--full">
        <label htmlFor="app-message">Ihr Anschreiben*</label>
        <textarea
          id="app-message"
          name="message"
          required
          placeholder="Erzählen Sie uns kurz von sich und warum Sie zu uns passen …"
        />
      </div>
      <div className="form__field form__field--full">
        <label htmlFor="app-cv">Lebenslauf / Zeugnisse (PDF)</label>
        <input id="app-cv" name="cv" type="file" accept="application/pdf,image/*" />
      </div>
      <label className="form__consent">
        <input type="checkbox" required name="consent" />
        <span>
          Ich habe die <Link href="/datenschutz">Datenschutzerklärung</Link> gelesen
          und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner
          Bewerbung einverstanden.*
        </span>
      </label>
      <button type="submit" className="btn btn--primary form__submit">
        Bewerbung absenden <ArrowRight />
      </button>
    </form>
  );
}
