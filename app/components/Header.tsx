"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Lang, PageKey, routes, ui } from "../../content/site";

export function Header({ lang, pageKey }: { lang: Lang; pageKey: PageKey }) {
  const [open, setOpen] = useState(false);
  const copy = ui[lang];
  const other: Lang = lang === "es" ? "en" : "es";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href={routes[lang].home} className="brand" aria-label={`${ui[lang].nav[0][1]} — Gretel Quintero Angulo`}>
          <span className="brand-mark" aria-hidden="true">G</span>
          <span>Gretel Q. Angulo</span>
        </Link>

        <nav className="desktop-nav" aria-label={lang === "es" ? "Navegación principal" : "Main navigation"}>
          {copy.nav.map(([key, label]) => (
            <Link key={key} href={routes[lang][key]} aria-current={pageKey === key ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="language-switch" href={routes[other][pageKey]} aria-label={copy.language}>
            <span className={lang === "es" ? "active" : ""}>ES</span>
            <span aria-hidden="true">/</span>
            <span className={lang === "en" ? "active" : ""}>EN</span>
          </Link>
          <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
            <span>{open ? copy.close : copy.menu}</span>
            <span className="menu-glyph" aria-hidden="true">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label={lang === "es" ? "Navegación móvil" : "Mobile navigation"}>
        {copy.nav.map(([key, label], index) => (
          <Link key={key} href={routes[lang][key]} onClick={() => setOpen(false)} aria-current={pageKey === key ? "page" : undefined}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            {label}
          </Link>
        ))}
        <div className="mobile-secondary">
          <Link href={routes[lang].blog} onClick={() => setOpen(false)}>Blog</Link>
          <Link href={routes[lang].agenda} onClick={() => setOpen(false)}>Agenda</Link>
        </div>
      </nav>
    </header>
  );
}
