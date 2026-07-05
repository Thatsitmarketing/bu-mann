import Reveal from "./Reveal";

const PHOTOS = [
  { src: "/images/gallery/bad-waschtisch-03.jpg", alt: "Modernes Bad mit Waschtisch – Referenzprojekt" },
  { src: "/images/gallery/bad-dusche-02.jpg", alt: "Begehbare Dusche mit Handtuchheizkörper – Referenzprojekt" },
  { src: "/images/gallery/bad-wanne-01.jpg", alt: "Freistehende Badewanne – Referenzprojekt" },
  { src: "/images/gallery/smarthome-gira-panel.jpg", alt: "Gira Smart-Home-Bedienpanel – Referenzprojekt" },
  { src: "/images/gallery/bad-wc-02.jpg", alt: "Gäste-WC mit Dachschräge – Referenzprojekt" },
  { src: "/images/gallery/bad-waschtisch-01.jpg", alt: "Aufsatzwaschbecken im Gästebad – Referenzprojekt" },
];

export default function ProjectGallery() {
  return (
    <section className="section gallery">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Aus unseren Projekten</p>
          <h2 className="h2" style={{ maxWidth: "18ch" }}>
            Echte Bäder. Echte Technik. Echte Handschrift.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="gallery__grid">
            {PHOTOS.map((p) => (
              <div className="gallery__item" key={p.src}>
                <img src={p.src} alt={p.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
