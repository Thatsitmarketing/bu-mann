"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Zwei feste Anrufwidgets unten rechts.
 * Rot = Hausgeräte, Blau = Energietechnik, jeweils mit eigener Rufnummer.
 *
 * Im Ruhezustand ist nur der runde Hörer sichtbar, damit auf dem Smartphone
 * nichts vom Inhalt verdeckt wird. Am Desktop fährt der Text beim Überfahren
 * aus, auf Touchgeräten öffnet der erste Tipp das Widget und der zweite wählt.
 *
 * Rufnummern zentral hier pflegen: `display` ist die sichtbare Schreibweise,
 * `dial` die Version für den tel Link (ohne Leerzeichen).
 */
const LINES = [
  {
    key: "hausgeraete",
    label: "Hausgeräte",
    hint: "Verkauf und Kundendienst",
    display: "02583 4664",
    dial: "+4925834664",
  },
  {
    key: "energietechnik",
    label: "Energietechnik",
    hint: "Elektro, Heizung und Sanitär",
    display: "02583 4318",
    dial: "+4925834318",
  },
] as const;

function PhoneGlyph() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 3h4l1.5 5-2.5 1.5a12 12 0 0 0 6.5 6.5L16 13.5l5 1.5v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export default function CallWidgets() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);

  // Auf Touchgeräten wieder einklappen, sobald daneben getippt oder gescrollt wird.
  useEffect(() => {
    if (!openKey) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpenKey(null);
    };
    const onScroll = () => setOpenKey(null);

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, [openKey]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, key: string) => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    // Mit Maus wählt der Klick sofort, der Text ist ja schon ausgefahren.
    if (canHover) return;
    if (openKey !== key) {
      event.preventDefault();
      setOpenKey(key);
    }
  };

  return (
    <div className="call-widgets" ref={root}>
      {LINES.map((line) => {
        const isOpen = openKey === line.key;
        return (
          <a
            key={line.key}
            className={`call-widget call-widget--${line.key} ${
              isOpen ? "call-widget--open" : ""
            }`}
            href={`tel:${line.dial}`}
            aria-label={`${line.label} anrufen: ${line.display} (${line.hint})`}
            aria-expanded={isOpen}
            onClick={(event) => handleClick(event, line.key)}
          >
            <span className="call-widget__icon">
              <PhoneGlyph />
            </span>
            <span className="call-widget__panel">
              <span className="call-widget__text">
                <span className="call-widget__label">{line.label}</span>
                <span className="call-widget__number">{line.display}</span>
                <span className="call-widget__hint">{line.hint}</span>
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
