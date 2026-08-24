import Link from "next/link";
import { Header } from "./Header";
import { Lang, PageKey, routes, site, ui } from "../../content/site";

export function Shell({ lang, pageKey, children }: { lang: Lang; pageKey: PageKey; children: React.ReactNode }) {
  const copy = ui[lang];
  return (
    <>
      <a className="skip-link" href="#main-content">{copy.skip}</a>
      <Header lang={lang} pageKey={pageKey} />
      {children}
      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <p className="footer-name">{site.name}</p>
            <p>{copy.footer}</p>
          </div>
          <div className="footer-links">
            <Link href={routes[lang].blog}>Blog</Link>
            <Link href={routes[lang].agenda}>Agenda</Link>
            <a href={site.orcid} rel="me">ORCID</a>
            <a href={site.cv}>{copy.cv}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{copy.updated}</span>
        </div>
      </footer>
    </>
  );
}
