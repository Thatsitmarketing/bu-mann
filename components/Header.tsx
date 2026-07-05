"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "./Icons";

const NAV = [
  { href: "/", label: "Startseite" },
  { href: "/hausgeraete", label: "Hausgeräte" },
  { href: "/energietechnik", label: "Energietechnik" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
];

// Seiten mit dunklem Bild-Hero: dort wird der transparente Header hell dargestellt.
const DARK_HERO_ROUTES = ["/hausgeraete", "/energietechnik", "/ueber-uns", "/karriere"];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overDark = DARK_HERO_ROUTES.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`header ${scrolled ? "header--scrolled" : ""} ${
          overDark && !scrolled ? "header--over-dark" : ""
        }`}
      >
        <div className="container header__inner">
          <Link href="/" className="logo" aria-label="Bußmann Sassenberg – Startseite">
            <img src="/images/logo-icon.png" alt="" className="logo__mark" aria-hidden="true" />
            <span>
              Bußmann
              <small>Sassenberg · Meisterbetrieb</small>
            </span>
          </Link>

          <nav className="nav" aria-label="Hauptnavigation">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/kontakt" className="btn btn--primary header__cta">
            Beratung anfragen <ArrowRight />
          </Link>

          <button
            className={`burger ${open ? "burger--open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav ${open ? "mobile-nav--open" : ""}`} aria-label="Mobile Navigation">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
