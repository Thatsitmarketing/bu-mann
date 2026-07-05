"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Reveal from "./Reveal";
import GoogleIcon from "./GoogleIcon";
import { TESTIMONIALS } from "@/lib/testimonials";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    function updatePerView() {
      const w = window.innerWidth;
      setPerView(w >= 1100 ? 3 : w >= 720 ? 2 : 1);
    }
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);

  const goTo = useCallback(
    (i: number) => {
      const clamped = Math.min(Math.max(i, 0), maxIndex);
      setIndex(clamped);
    },
    [maxIndex]
  );

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  useGSAP(
    () => {
      if (!trackRef.current) return;
      const slide = trackRef.current.children[0] as HTMLElement | undefined;
      if (!slide) return;
      const slideWidth = slide.getBoundingClientRect().width + 24; // + gap
      gsap.to(trackRef.current, {
        x: -index * slideWidth,
        duration: 0.6,
        ease: "power3.out",
      });
    },
    { dependencies: [index, perView] }
  );

  // Auto-advance, pausiert bei Hover.
  useEffect(() => {
    const el = trackRef.current?.closest(".testimonials");
    let paused = false;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    el?.addEventListener("mouseenter", onEnter);
    el?.addEventListener("mouseleave", onLeave);

    const timer = window.setInterval(() => {
      if (paused) return;
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5500);

    return () => {
      window.clearInterval(timer);
      el?.removeEventListener("mouseenter", onEnter);
      el?.removeEventListener("mouseleave", onLeave);
    };
  }, [maxIndex]);

  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal>
          <div className="testimonials__head">
            <div>
              <p className="eyebrow">
                <GoogleIcon size={20} /> Google Rezensionen
              </p>
              <h2 className="h2" style={{ maxWidth: "18ch" }}>
                Das sagen unsere Kund:innen.
              </h2>
            </div>
            <div className="testimonials__score">
              <strong>4,9</strong>
              <span className="stars">★★★★★</span>
              <small>Basierend auf 60+ Google-Rezensionen</small>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="testimonials__viewport">
            <div className="testimonials__track" ref={trackRef}>
              {TESTIMONIALS.map((t) => (
                <article className="testimonial-card" key={t.name + t.time}>
                  <div className="testimonial-card__head">
                    <div className="testimonial-card__avatar">{initials(t.name)}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.meta}</span>
                    </div>
                  </div>
                  <div className="testimonial-card__rating">
                    <span className="stars">{"★".repeat(t.rating)}</span>
                    <time>{t.time}</time>
                  </div>
                  <p>{t.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="testimonials__controls">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Vorherige Bewertungen"
          >
            ←
          </button>
          <div className="testimonials__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === index ? "is-active" : ""}
                onClick={() => goTo(i)}
                aria-label={`Zu Bewertung ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === maxIndex}
            aria-label="Weitere Bewertungen"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
