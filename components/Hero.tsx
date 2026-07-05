"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowRight } from "./Icons";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero__title .line > span", {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.12,
      })
        .from(
          ".hero .eyebrow",
          { opacity: 0, x: -30, duration: 0.8 },
          "-=0.8"
        )
        .from(
          ".hero__aside > *",
          { opacity: 0, y: 30, duration: 0.8, stagger: 0.12 },
          "-=0.7"
        )
        .from(
          ".hero__media",
          { opacity: 0, y: 80, scale: 0.97, duration: 1.1 },
          "-=0.6"
        );

      // Sanfter Parallax-Effekt auf der Hero-Fläche
      gsap.to(".hero__media-inner", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero__media",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section className="hero" ref={root}>
      <div className="container">
        <div className="hero__grid">
          <div>
            <p className="eyebrow">Meisterbetrieb für Haus- &amp; Energietechnik in Sassenberg</p>
            <h1 className="display hero__title">
              <span className="line"><span>Alles aus einer Hand.</span></span>
              <span className="line"><span>Vom Hausgerät bis</span></span>
              <span className="line"><span>zur Energiewende.</span></span>
            </h1>
          </div>

          <div className="hero__aside">
            <p>
              Elektro, Heizung, Sanitär, Photovoltaik und Hausgeräte – wir planen,
              installieren und warten. Persönlich, meisterlich und aus der Region.
            </p>
            <div className="hero__cta-row">
              <Link href="/kontakt" className="btn btn--primary">
                Beratung anfragen <ArrowRight />
              </Link>
              <div className="hero__trust">
                <div>
                  <strong>Meisterbetrieb</strong> <span className="stars">★★★★★</span>
                  <br />
                  <small>Eigener Kundendienst &amp; Notdienst</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <div
            className="hero__media-inner"
            style={{ backgroundImage: "url(/images/ai/hero-elektriker.png)" }}
          />
          <div className="hero__media-scrim" />
          <div className="hero__media-badges">
            <p className="big">
              Handwerk mit Zukunft –<br />
              <em>seit Generationen in Sassenberg.</em>
            </p>
            <div className="hero__badge-list">
              <span>Elektro</span>
              <span>Heizung</span>
              <span>Sanitär</span>
              <span>Photovoltaik</span>
              <span>Hausgeräte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
