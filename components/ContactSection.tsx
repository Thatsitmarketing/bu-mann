"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { ArrowRight, MailIcon, PhoneIcon, PinIcon, ClockIcon } from "./Icons";

export default function ContactSection({ id = "kontakt-formular" }: { id?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Hinweis: Hier später an ein Backend / einen Mail-Dienst anbinden.
    setSent(true);
  }

  return (
    <section className="contact section" id={id}>
      <div className="container contact__grid">
        <Reveal>
          <p className="eyebrow">Kontakt</p>
          <h2 className="h2">Erzählen Sie uns von Ihrem Projekt.</h2>
          <p className="lead" style={{ marginTop: "1.2rem", marginBottom: "2.4rem" }}>
            Ob neue Heizung, PV-Anlage oder defekte Waschmaschine – wir melden uns
            schnellstmöglich bei Ihnen zurück. Versprochen.
          </p>

          <div className="contact__info">
            <div className="contact__info-item">
              <span className="ico"><PhoneIcon /></span>
              <div>
                <strong>Telefon &amp; WhatsApp</strong>
                <a href="tel:025834664">02583 4664</a>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="ico"><MailIcon /></span>
              <div>
                <strong>E-Mail</strong>
                <a href="mailto:info@bussmann-sassenberg.de">info@bussmann-sassenberg.de</a>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="ico"><PinIcon /></span>
              <div>
                <strong>Adresse</strong>
                <p>Lappenbrink 29, 48336 Sassenberg</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="ico"><ClockIcon /></span>
              <div>
                <strong>Öffnungszeiten</strong>
                <p>
                  Mo, Di, Do, Fr: 9–12 &amp; 14:30–17 Uhr<br />
                  Mi &amp; Sa: 9–12 Uhr
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
              <label htmlFor="name">Name*</label>
              <input id="name" name="name" type="text" required placeholder="Max Mustermann" />
            </div>
            <div className="form__field">
              <label htmlFor="email">E-Mail*</label>
              <input id="email" name="email" type="email" required placeholder="max@beispiel.de" />
            </div>
            <div className="form__field">
              <label htmlFor="phone">Telefon</label>
              <input id="phone" name="phone" type="tel" placeholder="02583 …" />
            </div>
            <div className="form__field">
              <label htmlFor="topic">Anliegen*</label>
              <select id="topic" name="topic" required defaultValue="">
                <option value="" disabled>Bitte wählen …</option>
                <option>Hausgeräte – Kauf oder Reparatur</option>
                <option>Elektroinstallation</option>
                <option>Heizung / Wärmepumpe</option>
                <option>Sanitär / Bad</option>
                <option>Photovoltaik / Speicher</option>
                <option>E-Mobilität / Wallbox</option>
                <option>Smart Home</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <div className="form__field form__field--full">
              <label htmlFor="message">Ihre Nachricht*</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihr Anliegen …"
              />
            </div>
            <label className="form__consent">
              <input type="checkbox" required name="consent" />
              <span>
                Ich habe die <Link href="/datenschutz">Datenschutzerklärung</Link> gelesen
                und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage
                einverstanden.*
              </span>
            </label>
            {sent ? (
              <p className="form__success" role="status">
                Vielen Dank! Ihre Nachricht ist bei uns eingegangen – wir melden uns
                schnellstmöglich bei Ihnen.
              </p>
            ) : (
              <button type="submit" className="btn btn--primary form__submit">
                Nachricht senden <ArrowRight />
              </button>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
