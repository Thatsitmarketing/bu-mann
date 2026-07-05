"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const STATS = [
  { value: 75, suffix: "+", label: "Jahre Handwerkstradition" },
  { value: 7, suffix: "", label: "Gewerke unter einem Dach" },
  { value: 10, suffix: "+", label: "starke Markenpartner" },
  { value: 100, suffix: "%", label: "eigener Kundendienst" },
];

export default function Stats() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = root.current?.querySelectorAll<HTMLElement>("[data-count]");
      items?.forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.v) + (el.dataset.suffix ?? "");
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <div className="section" ref={root}>
      <div className="container">
        <div className="stats">
          {STATS.map((s) => (
            <div className="stats__item" key={s.label}>
              <strong data-count={s.value} data-suffix={s.suffix}>
                0{s.suffix}
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
