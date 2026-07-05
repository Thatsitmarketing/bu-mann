"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowRight } from "./Icons";

type Word = { text: string; accent?: boolean };

type FadeTextCTAProps = {
  words: Word[];
  ctaLabel: string;
  ctaHref: string;
  variant?: "light" | "navy";
};

/**
 * Großer Text, der beim Scrollen Wort für Wort einblendet (Scrub),
 * darunter ein zentrierter Call-to-Action.
 */
export default function FadeTextCTA({
  words,
  ctaLabel,
  ctaHref,
  variant = "light",
}: FadeTextCTAProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!root.current) return;
      gsap.to(root.current.querySelectorAll(".word"), {
        opacity: 1,
        stagger: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          end: "center center",
          scrub: 0.6,
        },
      });
      gsap.from(root.current.querySelector(".btn"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 45%",
          once: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className={`fade-cta ${variant === "navy" ? "fade-cta--navy" : ""}`}
    >
      <div className="container">
        <p className="fade-cta__text">
          {words.map((w, i) => (
            <span key={i}>
              <span className={`word ${w.accent ? "word--accent" : ""}`}>{w.text}</span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
        <Link
          href={ctaHref}
          className={`btn ${variant === "navy" ? "btn--primary" : "btn--navy"}`}
        >
          {ctaLabel} <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
