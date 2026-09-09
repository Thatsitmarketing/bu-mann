"use client";

/**
 * Zwei feste Anrufwidgets unten rechts.
 * Rot = Hausgeräte, Blau = Energietechnik, jeweils mit eigener Rufnummer.
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
  return (
    <div className="call-widgets">
      {LINES.map((line) => (
        <a
          key={line.key}
          className={`call-widget call-widget--${line.key}`}
          href={`tel:${line.dial}`}
          aria-label={`${line.label} anrufen: ${line.display} (${line.hint})`}
          title={`${line.label}: ${line.hint}`}
        >
          <span className="call-widget__icon">
            <PhoneGlyph />
          </span>
          <span className="call-widget__text">
            <span className="call-widget__label">{line.label}</span>
            <span className="call-widget__number">{line.display}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
