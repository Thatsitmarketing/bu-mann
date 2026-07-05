import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="logo">
              <img src="/images/logo-icon.png" alt="" className="logo__mark" aria-hidden="true" />
              <span>
                Bußmann
                <small>Sassenberg · Meisterbetrieb</small>
              </span>
            </Link>
            <p>
              Ihr moderner Meisterbetrieb aus Sassenberg – für Hausgeräte, Elektro,
              Heizung, Sanitär, Photovoltaik, Smart Home und E-Mobilität.
            </p>
          </div>

          <div>
            <h4>Leistungen</h4>
            <ul>
              <li><Link href="/hausgeraete">Hausgeräte</Link></li>
              <li><Link href="/energietechnik">Elektrotechnik</Link></li>
              <li><Link href="/energietechnik">Heizung &amp; Sanitär</Link></li>
              <li><Link href="/energietechnik">Photovoltaik</Link></li>
              <li><Link href="/energietechnik">E-Mobilität</Link></li>
            </ul>
          </div>

          <div>
            <h4>Unternehmen</h4>
            <ul>
              <li><Link href="/ueber-uns">Über uns</Link></li>
              <li><Link href="/karriere">Karriere</Link></li>
              <li><Link href="/karriere">Ausbildung</Link></li>
              <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4>Kontakt</h4>
            <ul>
              <li><a href="tel:025834664">02583 4664</a></li>
              <li><a href="mailto:info@bussmann-sassenberg.de">info@bussmann-sassenberg.de</a></li>
              <li>Lappenbrink 29<br />48336 Sassenberg</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Bußmann GmbH &amp; Co. KG, Sassenberg</span>
          <nav aria-label="Rechtliches">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
