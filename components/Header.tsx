"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, CloseIcon } from "./Icons";

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

  // Menü auch mit der Escape-Taste schließen.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`header ${scrolled ? "header--scrolled" : ""} ${
          overDark && !scrolled ? "header--over-dark" : ""
        } ${open ? "header--nav-open" : ""}`}
      >
        <div className="container header__inner">
          <Link href="/" className="logo" aria-label="Bußmann Sassenberg, zur Startseite">
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
            className="burger"
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-nav__top">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <img src="/images/logo-icon.png" alt="" className="logo__mark" aria-hidden="true" />
            <span>
              Bußmann
              <small>Sassenberg · Meisterbetrieb</small>
            </span>
          </Link>

          <button
            className="mobile-nav__close"
            onClick={() => setOpen(false)}
            aria-label="Menü schließen"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="mobile-nav__links" aria-label="Mobile Navigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              tabIndex={open ? undefined : -1}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="btn btn--primary mobile-nav__cta"
          onClick={() => setOpen(false)}
          tabIndex={open ? undefined : -1}
        >
          Beratung anfragen <ArrowRight />
        </Link>
      </div>
    </>
  );
}
