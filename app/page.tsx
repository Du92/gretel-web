import Image from "next/image";
import {
  academicLinks,
  contact,
  experience,
  highlights,
  services,
} from "./content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">GQ</span>
          <span className="brand-text">palabras con método</span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#mirada">Mirada</a>
          <a href="#servicios">Servicios</a>
          <a href="#trayectoria">Trayectoria</a>
        </nav>

        <a className="header-contact" href="#contacto">
          Hablemos <span aria-hidden="true">↘</span>
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-noise" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow reveal reveal-one">
              Escritura · Ciencia · Edición
            </p>
            <h1 className="reveal reveal-two">
              Gretel
              <span>Quintero</span>
            </h1>
            <p className="hero-intro reveal reveal-three">
              <strong>Escritora, física y editora freelance.</strong>
              <span>
                Hago que las ideas complejas encuentren una forma clara,
                precisa y memorable.
              </span>
            </p>

            <div className="hero-actions reveal reveal-four">
              <a className="button button-primary" href="#servicios">
                Descubrir mi mirada <span aria-hidden="true">↓</span>
              </a>
              <a
                className="text-link"
                href={contact.blog}
                target="_blank"
                rel="noreferrer"
              >
                Leer mi blog <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-portrait reveal reveal-three">
            <div className="portrait-frame">
              <Image
                src={`${basePath}/gretel.jpeg`}
                alt="Retrato de Gretel Quintero"
                width={421}
                height={339}
                priority
              />
            </div>
            <div className="availability-stamp" aria-label="Próximamente disponible">
              <strong>edición</strong>
              <span>freelance · 2026</span>
            </div>
          </div>

          <p className="hero-side-note" aria-hidden="true">
            curiosidad · precisión · imaginación
          </p>
        </section>

        <section className="manifesto page-section" id="mirada">
          <div className="section-kicker">
            <span>01</span>
            <p>Mi mirada</p>
          </div>
          <div className="manifesto-grid">
            <h2>
              Entre la ecuación
              <br />y la <em>narración.</em>
            </h2>
            <div className="manifesto-copy">
              <p className="lead">
                Creo en los textos que piensan con rigor y respiran con
                naturalidad.
              </p>
              <p>
                Durante más de quince años he investigado, enseñado, revisado
                artículos, acompañado tesis y llevado la ciencia a escenarios,
                aulas y televisión. Esa trayectoria me enseñó a encontrar el
                hilo esencial de una idea y a cuidar cómo llega a quien lee.
              </p>
              <p>
                Ahora quiero unir esa precisión con mi formación narrativa y
                mi amor por la literatura para acompañar textos que merecen su
                mejor versión.
              </p>
            </div>
          </div>

          <div className="word-ribbon" aria-label="Valores">
            <span>Precisión</span><i>✦</i><span>Escucha</span><i>✦</i>
            <span>Curiosidad</span><i>✦</i><span>Ritmo</span><i>✦</i>
            <span>Claridad</span>
          </div>
        </section>

        <section className="services page-section" id="servicios">
          <div className="services-topline">
            <div className="section-kicker section-kicker-light">
              <span>02</span>
              <p>Servicios en preparación</p>
            </div>
            <p className="services-note">
              Una práctica editorial en construcción, sostenida por años de
              escritura, revisión y acompañamiento académico.
            </p>
          </div>

          <div className="services-heading">
            <h2>Textos con pulso.</h2>
            <p>Ideas con dirección.</p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-note">{service.note}</span>
              </article>
            ))}
          </div>

          <div className="services-cta">
            <p>¿Tienes un texto que pide otra lectura?</p>
            <a href={`mailto:${contact.email}?subject=Proyecto%20editorial`}>
              Cuéntame tu proyecto <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="career page-section" id="trayectoria">
          <div className="section-kicker">
            <span>03</span>
            <p>Trayectoria</p>
          </div>

          <div className="career-intro">
            <h2>
              Una carrera dedicada a
              <em> comprender y explicar.</em>
            </h2>
            <div className="career-stats" aria-label="Resumen de trayectoria">
              <div><strong>15+</strong><span>años de docencia e investigación</span></div>
              <div><strong>4</strong><span>idiomas de trabajo</span></div>
              <div><strong>3</strong><span>tesis universitarias</span></div>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.years}-${item.role}`}>
                <time>{item.years}</time>
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="academic-links">
            <p>Archivo académico</p>
            <div>
              {academicLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="facets page-section" id="facetas">
          <div className="section-kicker">
            <span>04</span>
            <p>También soy</p>
          </div>
          <div className="facets-heading">
            <h2>La creatividad no vive en una sola disciplina.</h2>
            <p>
              Literatura, teatro, ciencia y comunicación: distintas formas de
              hacer visible una idea.
            </p>
          </div>
          <div className="facets-grid">
            {highlights.map((highlight, index) => (
              <article className={`facet-card facet-${index + 1}`} key={highlight.title}>
                <span>{highlight.label}</span>
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </article>
            ))}
          </div>

          <div className="credentials">
            <div>
              <span>2019</span>
              <h3>Ph.D. en Física</h3>
              <p>ICIMAF y Universidad de La Habana · Summa Cum Laude</p>
            </div>
            <div>
              <span>2013</span>
              <h3>Máster en Física</h3>
              <p>Universidad de La Habana · Summa Cum Laude</p>
            </div>
            <div>
              <span>2012–2013</span>
              <h3>Storytelling y técnicas narrativas</h3>
              <p>Centro de Formación Literaria Onelio Jorge Cardoso</p>
            </div>
          </div>
        </section>

        <section className="contact page-section" id="contacto">
          <div className="contact-orbit" aria-hidden="true" />
          <p className="contact-kicker">Un buen texto empieza con una conversación.</p>
          <h2>¿Escribimos la próxima página?</h2>
          <a className="contact-email" href={`mailto:${contact.email}`}>
            {contact.email} <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-meta">
            <p>Disponible próximamente para proyectos editoriales freelance.</p>
            <div>
              <a href={contact.blog} target="_blank" rel="noreferrer">Blog ↗</a>
              <a href={contact.orcid} target="_blank" rel="noreferrer">ORCID ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">GQ</span>
          <span className="brand-text">palabras con método</span>
        </a>
        <p>© 2026 Gretel Quintero Angulo</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  );
}
