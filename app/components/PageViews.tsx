import Image from "next/image";
import Link from "next/link";
import { home, Lang, monopole, PageKey, pages, projects, routes, site, ui } from "../../content/site";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function HomeView({ lang }: { lang: Lang }) {
  const copy = home[lang];
  const interfaceCopy = ui[lang];
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="hero-lead">{copy.lead}</p>
            <div className="button-row">
              <Link className="button button-primary" href={routes[lang].about}>
                {lang === "es" ? "Conocer mi trayectoria" : "Discover my path"} <Arrow />
              </Link>
              <Link className="button button-ghost" href={routes[lang].contact}>{interfaceCopy.contact}</Link>
              <a className="text-link" href={site.cv}>{interfaceCopy.cv} <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <figure className="hero-portrait">
            <div className="portrait-frame">
              <Image src={site.portrait} alt={copy.portraitAlt} fill priority sizes="(max-width: 800px) 88vw, 34vw" />
            </div>
            <figcaption><span className="caption-line" aria-hidden="true" />{copy.portraitCaption}</figcaption>
          </figure>
          <div className="hero-orbit" aria-hidden="true"><span>observe</span><span>question</span><span>write</span></div>
        </div>
      </section>

      <section className="manifesto section-shell">
        <p className="section-index">00</p>
        <div><p className="kicker">{copy.introLabel}</p><p className="manifesto-text">{copy.intro}</p></div>
      </section>

      <section className="areas-section section-shell" aria-labelledby="areas-title">
        <div className="section-heading">
          <p className="section-index">01—04</p>
          <div>
            <p className="kicker">{lang === "es" ? "Cuatro lenguajes" : "Four languages"}</p>
            <h2 id="areas-title">{lang === "es" ? "La creatividad se expresa de varias formas" : "Creativity takes many forms"}</h2>
          </div>
        </div>
        <div className="area-list">
          {copy.areas.map((area) => (
            <Link className={`area-row tone-${area.tone}`} href={routes[lang][area.key]} key={area.key}>
              <span className="area-number">{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><span className="area-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="now-section">
        <div className="section-shell now-grid">
          <p className="section-index">05</p>
          <div><p className="kicker">{copy.noteTitle}</p><p>{copy.note}</p></div>
          <Link className="round-link" href={routes[lang].projects} aria-label={lang === "es" ? "Ver proyectos" : "View projects"}>↗</Link>
        </div>
      </section>
    </main>
  );
}

function ContactCallout({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  return (
    <aside className={`contact-callout ${compact ? "compact" : ""}`}>
      <p className="kicker">{lang === "es" ? "¿Hablamos?" : "Shall we talk?"}</p>
      <h2>{lang === "es" ? "Una pregunta puede ser el comienzo." : "A question can be the beginning."}</h2>
      <Link className="button button-light" href={routes[lang].contact}>{ui[lang].contact} <Arrow /></Link>
    </aside>
  );
}

type StandardKey = Exclude<PageKey, "home" | "projects" | "monopole">;

export function StandardView({ lang, pageKey }: { lang: Lang; pageKey: StandardKey }) {
  const content = pages[lang][pageKey];
  if (!content) return null;
  const showContact = ["teaching", "services", "outreach", "literature"].includes(pageKey);
  return (
    <main id="main-content" className={`inner-page page-${pageKey}`}>
      <header className="inner-hero section-shell">
        <p className="eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p className="inner-lead">{content.lead}</p>
        <div className="hero-rule" aria-hidden="true"><span /></div>
      </header>
      <div className="content-sections section-shell">
        {content.sections.map((section, index) => (
          <section className="content-section" key={section.title}>
            <p className="section-index">{String(index + 1).padStart(2, "0")}</p>
            <div className="section-body">
              <h2>{section.title}</h2>
              {section.text && <p>{section.text}</p>}
              {section.items && <ul className="editorial-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.aside && <p className="source-note">{section.aside}</p>}
              {pageKey === "science" && index === 1 && (
                <div className="inline-actions"><a className="button button-primary" href={site.orcid}>ORCID <Arrow /></a><a className="button button-ghost" href={site.cv}>{ui[lang].cv}</a></div>
              )}
              {pageKey === "resources" && index === 1 && <a className="text-link standalone" href={site.orcid}>ORCID 0000-0002-7301-5276 <Arrow /></a>}
              {pageKey === "resources" && index === 3 && <a className="button button-primary standalone" href={site.cv}>{ui[lang].cv} <span aria-hidden="true">↓</span></a>}
              {pageKey === "contact" && index === 1 && (
                <a className="email-link" href={`mailto:${site.email}?subject=${encodeURIComponent(lang === "es" ? "Propuesta de colaboración" : "Collaboration enquiry")}`}>{site.email} <Arrow /></a>
              )}
            </div>
          </section>
        ))}
      </div>
      {showContact && <ContactCallout lang={lang} />}
    </main>
  );
}

export function ProjectsView({ lang }: { lang: Lang }) {
  const copy = projects[lang];
  return (
    <main id="main-content" className="inner-page page-projects">
      <header className="inner-hero section-shell">
        <p className="eyebrow">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="inner-lead">{copy.lead}</p><div className="hero-rule" aria-hidden="true"><span /></div>
      </header>
      <section className="projects-grid section-shell" aria-label={lang === "es" ? "Lista de proyectos" : "Project list"}>
        {copy.items.map((project, index) => {
          const inner = <><div className="project-top"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.dates || "—"}</span></div><p className="kicker">{project.category}</p><h2>{project.title}</h2><p>{project.description}</p>{(project.page || project.external) && <span className="project-link">{lang === "es" ? "Descubrir" : "Discover"} <Arrow /></span>}</>;
          return project.page ? <Link className={`project-card project-${index + 1}`} href={routes[lang][project.page]} key={project.title}>{inner}</Link> : project.external ? <a className={`project-card project-${index + 1}`} href={project.external} key={project.title}>{inner}</a> : <article className={`project-card project-${index + 1}`} key={project.title}>{inner}</article>;
        })}
      </section>
      <ContactCallout lang={lang} compact />
    </main>
  );
}

export function MonopoleView({ lang }: { lang: Lang }) {
  const copy = monopole[lang];
  return (
    <main id="main-content" className="inner-page monopole-page">
      <header className="monopole-hero">
        <div className="section-shell"><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.title}</h1><p>{copy.lead}</p></div>
        <div className="stage-lines" aria-hidden="true"><span /><span /><span /></div>
      </header>
      <section className="monopole-intro section-shell"><p className="section-index">01</p><p>{copy.intro}</p></section>
      <section className="gallery-section section-shell">
        <div className="section-heading"><p className="section-index">02</p><div><p className="kicker">{copy.gallery}</p><h2>{copy.galleryNote}</h2></div></div>
        <div className="placeholder-gallery">{copy.placeholders.map((label, index) => <div className={`gallery-placeholder tile-${index + 1}`} key={label}><span className="placeholder-symbol" aria-hidden="true">{index % 2 ? "◯" : "＋"}</span><span>{label}</span></div>)}</div>
      </section>
      <section className="monopole-archive section-shell"><p className="section-index">03</p><div><h2>{lang === "es" ? "Archivo preparado para crecer" : "An archive ready to grow"}</h2><ul className="editorial-list">{copy.archive.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    </main>
  );
}
