import Reveal from "./Reveal";

const PHOTOS = [
  { src: "/images/gallery/bad-waschtisch-03.jpg", alt: "Referenzprojekt: modernes Bad mit Waschtisch" },
  { src: "/images/gallery/bad-dusche-02.jpg", alt: "Referenzprojekt: begehbare Dusche mit Handtuchheizkörper" },
  { src: "/images/gallery/bad-wanne-01.jpg", alt: "Referenzprojekt: freistehende Badewanne" },
  { src: "/images/gallery/smarthome-gira-panel.jpg", alt: "Referenzprojekt: Bedienpanel von Gira für Smart Home" },
  { src: "/images/gallery/bad-wc-02.jpg", alt: "Referenzprojekt: Gäste WC mit Dachschräge" },
  { src: "/images/gallery/bad-waschtisch-01.jpg", alt: "Referenzprojekt: Aufsatzwaschbecken im Gästebad" },
];

export default function ProjectGallery() {
  return (
    <section className="section gallery">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Aus unseren Projekten</p>
          <h2 className="h2 section-title">
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
