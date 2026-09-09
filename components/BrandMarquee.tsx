"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Brand = {
  name: string;
  src: string;
  /** Feinjustierung, damit alle Logos optisch gleich gross wirken */
  scale?: number;
};

/**
 * Markenpartner von bussmann-sassenberg.de.
 * Die Logodateien liegen unter /public/images/brands – zum Austauschen
 * einfach die Datei mit gleichem Namen ersetzen.
 */
const BRANDS: Brand[] = [
  { name: "Miele", src: "/images/brands/miele.svg", scale: 0.78 },
  { name: "Vaillant", src: "/images/brands/vaillant.png" },
  { name: "Buderus", src: "/images/brands/buderus.png", scale: 1.05 },
  { name: "Gira", src: "/images/brands/gira.png", scale: 0.9 },
  { name: "KNX", src: "/images/brands/knx.png", scale: 0.8 },
  { name: "Zehnder", src: "/images/brands/zehnder.png", scale: 1.15 },
  { name: "ABB", src: "/images/brands/abb.png", scale: 0.85 },
  { name: "Geberit", src: "/images/brands/geberit.png", scale: 1.05 },
  { name: "hansgrohe", src: "/images/brands/hansgrohe.jpg", scale: 1.05 },
  { name: "Kaldewei", src: "/images/brands/kaldewei.jpg" },
];

export default function BrandMarquee() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = root.current?.querySelector(".marquee__track");
      if (!track) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      // Endlos-Lauf: die Liste ist doppelt gerendert, -50% ergibt eine nahtlose Schleife
      gsap.to(track, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: root }
  );

  return (
    <section className="brands">
      <div className="container brands__head">
        <p className="eyebrow eyebrow--center">Starke Markenpartner</p>
        <p className="brands__lead">
          Wir arbeiten mit Herstellern, die unseren Anspruch an
          Qualität, Langlebigkeit und Service teilen.
        </p>
      </div>

      <div className="marquee" ref={root}>
        <ul className="marquee__track" aria-label="Unsere Markenpartner">
          {[...BRANDS, ...BRANDS].map((brand, i) => {
            const duplicate = i >= BRANDS.length;
            return (
              <li
                className="marquee__item"
                key={`${brand.name}-${i}`}
                aria-hidden={duplicate || undefined}
              >
                <img
                  src={brand.src}
                  alt={duplicate ? "" : `${brand.name} Logo`}
                  decoding="async"
                  style={brand.scale ? { transform: `scale(${brand.scale})` } : undefined}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
