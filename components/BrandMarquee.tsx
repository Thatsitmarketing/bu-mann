"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const BRANDS = [
  "Miele", "Vaillant", "Buderus", "Gira", "KNX",
  "Zehnder", "ABB", "Geberit", "Hansgrohe", "Kaldewei",
];

export default function BrandMarquee() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = root.current?.querySelector(".marquee__track");
      if (!track) return;
      // Endlos-Lauf: die Liste ist doppelt gerendert, -50% ergibt eine nahtlose Schleife
      gsap.to(track, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: root }
  );

  return (
    <div className="marquee" ref={root} aria-label="Unsere Markenpartner">
      <div className="marquee__track">
        {[...BRANDS, ...BRANDS].map((brand, i) => (
          <span key={i} aria-hidden={i >= BRANDS.length}>
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
