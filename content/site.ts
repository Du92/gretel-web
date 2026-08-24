export type Lang = "es" | "en";
export type PageKey =
  | "home"
  | "about"
  | "science"
  | "teaching"
  | "literature"
  | "outreach"
  | "projects"
  | "monopole"
  | "services"
  | "resources"
  | "contact"
  | "blog"
  | "agenda";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const site = {
  name: "Gretel Quintero Angulo",
  email: "gretica.qa@gmail.com",
  orcid: "https://orcid.org/0000-0002-7301-5276",
  cv: `${basePath}/docs/gretel-quintero-angulo-cv-en.pdf`,
  portrait: `${basePath}/images/gretel.jpeg`,
};

export const routes: Record<Lang, Record<PageKey, string>> = {
  es: {
    home: "/es",
    about: "/es/sobre-mi",
    science: "/es/ciencia",
    teaching: "/es/docencia",
    literature: "/es/literatura",
    outreach: "/es/divulgacion",
    projects: "/es/proyectos",
    monopole: "/es/proyectos/monopolo-magnetico",
    services: "/es/servicios",
    resources: "/es/recursos",
    contact: "/es/contacto",
    blog: "/es/blog",
    agenda: "/es/agenda",
  },
  en: {
    home: "/en",
    about: "/en/about",
    science: "/en/science",
    teaching: "/en/teaching",
    literature: "/en/literature",
    outreach: "/en/outreach",
    projects: "/en/projects",
    monopole: "/en/projects/magnetic-monopole",
    services: "/en/services",
    resources: "/en/resources",
    contact: "/en/contact",
    blog: "/en/blog",
    agenda: "/en/agenda",
  },
};

export const routeIndex = Object.entries(routes).flatMap(([lang, list]) =>
  Object.entries(list).map(([key, path]) => ({
    lang: lang as Lang,
    key: key as PageKey,
    path,
  })),
);

export const ui = {
  es: {
    skip: "Saltar al contenido",
    menu: "Menú",
    close: "Cerrar",
    nav: [
      ["home", "Inicio"],
      ["about", "Sobre mí"],
      ["science", "Ciencia"],
      ["teaching", "Docencia"],
      ["literature", "Literatura"],
      ["outreach", "Divulgación"],
      ["projects", "Proyectos"],
      ["services", "Servicios"],
      ["resources", "Recursos"],
      ["contact", "Contacto"],
    ] as [PageKey, string][],
    language: "Cambiar a inglés",
    more: "Explorar",
    cv: "Descargar CV (inglés)",
    contact: "Contactar",
    footer:
      "Ciencia, docencia y literatura como formas complementarias de comprender el mundo.",
    updated: "Contenido profesional basado en el CV facilitado por su autora.",
  },
  en: {
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    nav: [
      ["home", "Home"],
      ["about", "About"],
      ["science", "Science"],
      ["teaching", "Teaching"],
      ["literature", "Literature"],
      ["outreach", "Outreach"],
      ["projects", "Projects"],
      ["services", "Services"],
      ["resources", "Resources"],
      ["contact", "Contact"],
    ] as [PageKey, string][],
    language: "Switch to Spanish",
    more: "Explore",
    cv: "Download CV (English)",
    contact: "Get in touch",
    footer:
      "Science, teaching and literature as complementary ways of understanding the world.",
    updated: "Professional content based on the CV supplied by its author.",
  },
};

export const home = {
  es: {
    eyebrow: "Física · Escritora · Investigadora · Profesora · Divulgadora",
    title: "Gretel Quintero Angulo",
    lead:
      "Investigo la naturaleza, enseño física y escribo para explorar otras formas de comprender el mundo. Mi trabajo reúne investigación científica, docencia, divulgación y creación literaria.",
    portraitAlt: "Retrato de Gretel Quintero Angulo",
    portraitCaption: "Una mirada entre la ciencia y la palabra",
    introLabel: "Una trayectoria, varias formas de crear",
    intro:
      "La física y la literatura no son aquí mundos separados. Ambas nacen de la curiosidad: observar, formular preguntas y encontrar una forma precisa —o inesperada— de narrar lo que descubrimos.",
    areas: [
      {
        key: "literature" as PageKey,
        number: "01",
        title: "Escritura",
        text: "Poesía, ficción y un cuaderno para pensar el oficio de escribir.",
        tone: "coral",
      },
      {
        key: "teaching" as PageKey,
        number: "02",
        title: "Docencia",
        text: "Más de una década acompañando el aprendizaje universitario de la física.",
        tone: "ochre",
      },
      {
        key: "science" as PageKey,
        number: "03",
        title: "Investigación",
        text: "Materia densa, campos magnéticos intensos y modelización físico-matemática.",
        tone: "blue",
      },
      {
        key: "outreach" as PageKey,
        number: "04",
        title: "Divulgación",
        text: "Conferencias, teatro y proyectos que abren la ciencia a nuevos públicos.",
        tone: "green",
      },
    ],
    noteTitle: "Ahora",
    note:
      "Este espacio reúne una trayectoria internacional entre Cuba y Alemania, y está preparado para crecer con nuevas publicaciones, cursos, proyectos literarios y colaboraciones.",
  },
  en: {
    eyebrow: "Physicist · Writer · Researcher · Lecturer · Science Communicator",
    title: "Gretel Quintero Angulo",
    lead:
      "I study nature, teach physics and write to explore different ways of understanding the world. My work brings together scientific research, education, outreach and literary creation.",
    portraitAlt: "Portrait of Gretel Quintero Angulo",
    portraitCaption: "A perspective shaped by science and words",
    introLabel: "One path, many forms of creativity",
    intro:
      "Physics and literature are not separate worlds here. Both begin with curiosity: observing, asking questions and finding a precise —or unexpected— way to tell what we discover.",
    areas: [
      {
        key: "literature" as PageKey,
        number: "01",
        title: "Writing",
        text: "Poetry, fiction and a notebook devoted to the craft of writing.",
        tone: "coral",
      },
      {
        key: "teaching" as PageKey,
        number: "02",
        title: "Teaching",
        text: "More than a decade supporting university students as they learn physics.",
        tone: "ochre",
      },
      {
        key: "science" as PageKey,
        number: "03",
        title: "Research",
        text: "Dense matter, intense magnetic fields and physical-mathematical modelling.",
        tone: "blue",
      },
      {
        key: "outreach" as PageKey,
        number: "04",
        title: "Outreach",
        text: "Talks, theatre and projects that bring science to wider audiences.",
        tone: "green",
      },
    ],
    noteTitle: "Now",
    note:
      "This space brings together an international path across Cuba and Germany, and is ready to grow with new publications, courses, literary projects and collaborations.",
  },
};

export type ContentSection = {
  title: string;
  text?: string;
  items?: string[];
  aside?: string;
};

type PageContent = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: ContentSection[];
};

export const pages: Record<Lang, Partial<Record<PageKey, PageContent>>> = {
  es: {
    about: {
      eyebrow: "Sobre mí",
      title: "Una curiosidad que atraviesa disciplinas",
      lead:
        "Gretel Quintero Angulo es doctora en Física, investigadora, profesora y escritora. Su trayectoria conecta el trabajo académico con la enseñanza, la divulgación y una formación sostenida en literatura.",
      sections: [
        {
          title: "Biografía breve",
          text: "Formada en la Universidad de La Habana y en el Instituto de Cibernética, Matemática y Física de Cuba, ha desarrollado más de una década de experiencia docente universitaria e investigación en física teórica. Entre 2023 y 2025 realizó una estancia posdoctoral en la Heinrich-Heine-Universität Düsseldorf con una beca Alexander von Humboldt.",
        },
        {
          title: "Ciencia y literatura",
          text: "Su investigación se centra en la modelización analítica y numérica de materia densa y sistemas sometidos a campos magnéticos intensos. En paralelo, ha ampliado su formación en narración, humanismo, género y comunicación. La literatura constituye otra vía para observar y narrar el mundo, no un apéndice de su actividad científica.",
        },
        {
          title: "Trayectoria internacional",
          text: "Su carrera se ha desarrollado principalmente entre La Habana y Düsseldorf, con estancias académicas en París y Trieste. Ha trabajado en investigación, docencia, mentoría, evaluación académica y organización científica, y fue directora del Departamento de Física Teórica de la Universidad de La Habana entre junio de 2021 y noviembre de 2022.",
        },
        {
          title: "Formación",
          items: [
            "Doctorado en Física — ICIMAF y Universidad de La Habana, 2019. Summa Cum Laude.",
            "Máster en Física — Universidad de La Habana, 2013. Summa Cum Laude.",
            "Licenciatura en Física — Universidad de La Habana, 2007. Summa Cum Laude.",
            "Curso de Técnicas Narrativas — Centro de Formación Literaria Onelio Jorge Cardoso, 2012–2013.",
            "Diplomado en Humanismo y Sociedad, 2015–2016; y en Teoría de Género y Comunicación, 2021.",
          ],
        },
      ],
    },
    science: {
      eyebrow: "Ciencia",
      title: "Modelar lo que ocurre bajo condiciones extremas",
      lead:
        "Su trabajo combina física teórica, herramientas matemáticas y métodos numéricos para estudiar materia densa, sistemas astrofísicos y excitaciones en presencia de campos magnéticos intensos.",
      sections: [
        {
          title: "Líneas de investigación",
          items: [
            "Astrofísica y estrellas compactas magnetizadas.",
            "Física de partículas, física estadística y materia condensada.",
            "Materia densa bajo campos magnéticos intensos.",
            "Excitaciones tipo axión en aislantes topológicos y materia de quarks.",
            "Equilibrio hidrostático relativista de estrellas magnetizadas.",
            "Modelización matemática, analítica y numérica.",
          ],
        },
        {
          title: "Publicaciones y actividad científica",
          text: "Ha presentado resultados en seminarios y congresos, redactado artículos científicos y participado en procesos de revisión por pares. La relación completa y verificada de publicaciones puede consultarse mediante su identificador ORCID.",
          aside: "Los títulos de publicaciones no se reproducen aquí porque no estaban incluidos en el documento fuente.",
        },
        {
          title: "Supervisión académica",
          items: [
            "Trabajo de grado: ecuaciones de estructura estelar para estrellas compactas magnetizadas — Adriel Rodríguez Concepción Pérez, finalizado en julio de 2024.",
            "Tesis de máster: termodinámica de un gas de bosones vectoriales neutros — Lismary de la Caridad Suárez González, codirección, diciembre de 2020.",
            "Trabajo de grado: cálculo de observables de estrellas extrañas magnetizadas — Samantha López Pérez, codirección, julio de 2020.",
          ],
        },
        {
          title: "Organización científica",
          items: [
            "Workshop on Heavy Ion Collisions and Compact Stars — HIPSTARS 2022.",
            "Escuela de Verano Germano-Cubana 2021, celebrada en enero de 2022.",
            "FT-45, ICIMAF, 2021; HIPSTARS, 2020.",
            "XV Simposio de la Sociedad Cubana de Física, 2020.",
            "STARS/SMFNS 2019, La Habana y Varadero.",
          ],
        },
        {
          title: "Premios y financiación",
          items: [
            "Humboldt Research Fellowship for Postdocs — Düsseldorf, 2023–2025.",
            "Ayudas de la Office of External Activities del ICTP — 2018, 2019 y 2020.",
            "Ayuda SCAC de la Embajada de Francia en Cuba para una estancia en LUTH, Observatorio de París — 2018.",
            "Federated Institutes Programme del ICTP para una estancia en Trieste — 2018.",
            "Participación en proyectos nacionales cubanos de física teórica y ciencia básica — 2016–2022.",
          ],
        },
      ],
    },
    teaching: {
      eyebrow: "Docencia",
      title: "Enseñar física es construir formas de pensar",
      lead:
        "Más de una década de experiencia universitaria articula docencia, diseño curricular, mentoría, supervisión y evaluación académica.",
      sections: [
        {
          title: "Filosofía docente",
          text: "Su trayectoria muestra una práctica docente vinculada a la claridad conceptual, el razonamiento matemático y el acompañamiento progresivo del estudiante. La experiencia en distintos niveles —desde laboratorios y asignaturas básicas hasta la dirección de tesis— permite adaptar la enseñanza a objetivos y etapas diversas.",
        },
        {
          title: "Asignaturas impartidas",
          items: [
            "Física Estadística.",
            "Métodos Matemáticos para Físicos.",
            "Métodos Matemáticos para Físicos e Ingenieros.",
            "Análisis Matemático y Geometría Analítica.",
            "Mecánica Teórica.",
            "Laboratorios de Mecánica y Óptica.",
          ],
        },
        {
          title: "Experiencia universitaria",
          text: "Se formó como docente de posgrado entre 2007 y 2009 y continuó como profesora instructora, asistente y asociada en la Facultad de Física de la Universidad de La Habana. Ha diseñado cursos y programas, acompañado a estudiantes y profesorado joven, evaluado tesis y proyectos, y supervisado trabajos de grado y máster.",
        },
        {
          title: "Responsabilidad académica",
          text: "Entre junio de 2021 y noviembre de 2022 dirigió el Departamento de Física Teórica. También ha participado en comités de admisión, evaluación docente, escuelas de verano y organización de actividades educativas y científicas.",
        },
        {
          title: "Cursos y materiales",
          text: "Esta sección está preparada para publicar guías, bibliografías, cursos y talleres. Los materiales aparecerán únicamente cuando cuenten con una versión autorizada para descarga.",
        },
      ],
    },
    literature: {
      eyebrow: "Literatura",
      title: "La palabra como otra forma de investigar",
      lead:
        "Poesía, ficción y reflexión sobre el proceso creativo conviven aquí con una formación científica que afina la observación y la pregunta.",
      sections: [
        {
          title: "Una segunda casa",
          text: "La escritura ocupa un lugar propio en esta trayectoria. Gretel cursó formación en técnicas narrativas en el Centro Onelio Jorge Cardoso y mantiene un interés sostenido por la literatura, la historia, el cine y el teatro.",
        },
        {
          title: "Libros",
          text: "Las futuras páginas de libros podrán reunir portada, sinopsis, fragmentos, presentaciones, reseñas, premios y enlaces de información o compra. No se muestra todavía ningún título porque el material editorial no estaba incluido en los documentos facilitados.",
        },
        {
          title: "Poesía y ficción",
          text: "El espacio está preparado para poemarios, poemas seleccionados, novelas, relatos y proyectos en desarrollo. Cada publicación podrá activarse desde el archivo central de contenido cuando exista una versión autorizada.",
        },
        {
          title: "Cuaderno de escritura",
          text: "Un futuro cuaderno reunirá notas sobre lecturas y procesos creativos. Las entradas se gestionarán como archivos Markdown para que puedan añadirse sin modificar los componentes de la web.",
        },
      ],
    },
    outreach: {
      eyebrow: "Divulgación",
      title: "Tender puentes entre el conocimiento y la comunidad",
      lead:
        "Su experiencia de divulgación combina organización, comunicación, formación, televisión y teatro científico.",
      sections: [
        {
          title: "Género y ciencia",
          text: "Organizó talleres por el Día Internacional de la Mujer y la Niña en la Ciencia junto con ICIMAF, la Sociedad Cubana de Física y la Sociedad Cubana de Matemática en 2021, 2022 y 2023.",
        },
        {
          title: "Ciencia en otros formatos",
          items: [
            "Asesoría científica para el programa cubano Una calle, mil caminos, episodio «La vida media del muón», emitido en 2021.",
            "Fundación y dirección del grupo de teatro científico Monopolo Magnético, 2015–2020.",
            "Cofundación y organización del Encuentro Cubano de Estudiantes de Posgrado en Física (FISESP), 2018 y 2020.",
            "Organización y docencia en la primera escuela de verano para estudiantes de secundaria de la Facultad de Física, 2019.",
            "Participación en el comité cubano de IAU100 NameExoWorlds, 2019.",
          ],
        },
        {
          title: "Archivo de actividades",
          text: "La sección está preparada para incorporar conferencias, festivales, pódcast, vídeos, artículos, talleres y apariciones en prensa con filtros por formato cuando exista material verificado.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "Experiencia científica y docente al servicio de nuevos proyectos",
      lead:
        "Propuestas flexibles para estudiantes, instituciones, equipos de comunicación y personas que trabajan con textos científicos o divulgativos.",
      sections: [
        {
          title: "Docencia y formación",
          items: [
            "Cursos y talleres de física.",
            "Apoyo en asignaturas universitarias.",
            "Formación en métodos matemáticos para ciencias.",
            "Mentoría académica.",
            "Diseño de materiales y programas docentes.",
          ],
        },
        {
          title: "Divulgación científica",
          text: "Diseño y desarrollo de charlas, talleres y contenidos que conecten conceptos científicos con públicos diversos, apoyado en experiencia docente, organizativa y de comunicación.",
        },
        {
          title: "Edición y revisión",
          text: "Lectura de claridad, estructura y estilo para textos científicos, académicos y divulgativos. Cada propuesta se valora según el alcance, el público y el nivel de especialización, sin presentar este servicio como una certificación editorial.",
        },
      ],
    },
    resources: {
      eyebrow: "Recursos",
      title: "Materiales para aprender, enseñar y comunicar",
      lead:
        "Un archivo en crecimiento para reunir documentos autorizados y enlaces profesionales.",
      sections: [
        {
          title: "Material docente",
          text: "Guías, bibliografías y materiales descargables aparecerán aquí cuando estén preparados para publicación.",
        },
        {
          title: "Perfil científico",
          text: "El perfil ORCID reúne la identidad científica y permite acceder al registro de publicaciones disponible públicamente.",
        },
        {
          title: "Prensa y colaboraciones",
          text: "La estructura admite un dossier de prensa, una biografía breve y fotografías autorizadas. Estos recursos permanecen ocultos hasta que Gretel aporte los archivos definitivos.",
        },
        {
          title: "Currículum",
          text: "El PDF actualmente disponible está redactado en inglés. La copia preparada para la web omite deliberadamente la dirección, el teléfono y los datos personales sensibles del documento original.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Conversemos",
      lead:
        "Para propuestas de investigación, docencia, literatura, divulgación, revisión o colaboración, puedes escribir indicando brevemente el contexto y el objetivo.",
      sections: [
        {
          title: "Motivos de contacto",
          items: [
            "Investigación y colaboraciones científicas.",
            "Cursos, talleres y mentoría académica.",
            "Literatura y proyectos culturales.",
            "Divulgación y medios de comunicación.",
            "Edición y revisión de textos.",
          ],
        },
        {
          title: "Correo profesional",
          text: "El formulario abre tu aplicación de correo y no almacena datos ni utiliza servicios externos.",
        },
      ],
    },
    blog: {
      eyebrow: "Cuaderno",
      title: "Ciencia, escritura y el trabajo entre ambas",
      lead:
        "Este espacio reunirá futuras notas sobre investigación, docencia, lecturas, historia de la ciencia y procesos creativos.",
      sections: [
        {
          title: "Próximamente",
          text: "Aún no hay entradas públicas. El proyecto incluye una plantilla Markdown de demostración marcada como borrador para facilitar la publicación futura.",
        },
      ],
    },
    agenda: {
      eyebrow: "Agenda",
      title: "Próximas actividades",
      lead:
        "Conferencias, cursos, talleres, congresos y presentaciones se anunciarán aquí.",
      sections: [
        {
          title: "Sin actividades confirmadas",
          text: "Próximamente se anunciarán nuevas actividades. La agenda está preparada para publicar fechas, lugares, modalidades y enlaces de inscripción sin modificar los componentes de la web.",
        },
      ],
    },
  },
  en: {
    about: {
      eyebrow: "About",
      title: "A curiosity that crosses disciplines",
      lead:
        "Gretel Quintero Angulo holds a PhD in Physics and works across research, teaching and writing. Her path connects academic work with education, outreach and sustained literary training.",
      sections: [
        {
          title: "Short biography",
          text: "Educated at the University of Havana and Cuba's Institute of Cybernetics, Mathematics and Physics, she has more than a decade of university teaching and theoretical-physics research experience. From 2023 to 2025 she conducted postdoctoral work at Heinrich Heine University Düsseldorf with an Alexander von Humboldt fellowship.",
        },
        {
          title: "Science and literature",
          text: "Her research centres on analytical and numerical modelling of dense matter and systems under intense magnetic fields. Alongside it, she has pursued training in storytelling, humanism, gender and communication. Literature is another way of observing and narrating the world, rather than an appendix to her scientific work.",
        },
        {
          title: "An international path",
          text: "Her career has unfolded mainly between Havana and Düsseldorf, with academic stays in Paris and Trieste. She has worked in research, teaching, mentoring, academic assessment and scientific organisation, and headed the University of Havana's Department of Theoretical Physics from June 2021 to November 2022.",
        },
        {
          title: "Education",
          items: [
            "PhD in Physics — ICIMAF and University of Havana, 2019. Summa Cum Laude.",
            "MSc in Physics — University of Havana, 2013. Summa Cum Laude.",
            "BSc in Physics — University of Havana, 2007. Summa Cum Laude.",
            "Storytelling and Narrative Techniques — Onelio Jorge Cardoso Literary Training Centre, 2012–2013.",
            "Diplomas in Humanism and Society, 2015–2016, and Gender Theory and Communication, 2021.",
          ],
        },
      ],
    },
    science: {
      eyebrow: "Science",
      title: "Modelling matter under extreme conditions",
      lead:
        "Her work combines theoretical physics, mathematical tools and numerical methods to study dense matter, astrophysical systems and excitations in intense magnetic fields.",
      sections: [
        {
          title: "Research areas",
          items: [
            "Astrophysics and magnetised compact stars.",
            "Particle physics, statistical physics and condensed matter.",
            "Dense matter under intense magnetic fields.",
            "Axion-like excitations in topological insulators and quark matter.",
            "Relativistic hydrostatic equilibrium of magnetised stars.",
            "Mathematical, analytical and numerical modelling.",
          ],
        },
        {
          title: "Publications and scientific activity",
          text: "She has presented research at seminars and conferences, written scientific articles and contributed to peer review. Her complete verified publication record is available through ORCID.",
          aside: "Publication titles are not reproduced here because they were not listed in the supplied source document.",
        },
        {
          title: "Academic supervision",
          items: [
            "BSc thesis: stellar structure equations for magnetised compact stars — Adriel Rodríguez Concepción Pérez, completed July 2024.",
            "MSc thesis: thermodynamics of a neutral vector boson gas — Lismary de la Caridad Suárez González, co-supervised, December 2020.",
            "BSc thesis: computation of observables of magnetised strange stars — Samantha López Pérez, co-supervised, July 2020.",
          ],
        },
        {
          title: "Scientific organisation",
          items: [
            "Workshop on Heavy Ion Collisions and Compact Stars — HIPSTARS 2022.",
            "German-Cuban Summer School 2021, held in January 2022.",
            "FT-45, ICIMAF, 2021; HIPSTARS, 2020.",
            "15th Symposium of the Cuban Physics Society, 2020.",
            "STARS/SMFNS 2019, Havana and Varadero.",
          ],
        },
        {
          title: "Awards and funding",
          items: [
            "Humboldt Research Fellowship for Postdocs — Düsseldorf, 2023–2025.",
            "ICTP Office of External Activities grants — 2018, 2019 and 2020.",
            "SCAC grant from the French Embassy in Cuba for a stay at LUTH, Paris Observatory — 2018.",
            "ICTP Federated Institutes Programme grant for a stay in Trieste — 2018.",
            "Participation in Cuban national theoretical physics and basic-science projects — 2016–2022.",
          ],
        },
      ],
    },
    teaching: {
      eyebrow: "Teaching",
      title: "Teaching physics means building ways of thinking",
      lead:
        "More than a decade of university experience connects classroom teaching, curriculum design, mentoring, supervision and academic assessment.",
      sections: [
        {
          title: "Teaching approach",
          text: "Her record reflects a practice grounded in conceptual clarity, mathematical reasoning and gradual student support. Experience across levels —from laboratories and foundation courses to thesis supervision— makes it possible to adapt teaching to different goals and stages.",
        },
        {
          title: "Courses taught",
          items: [
            "Statistical Physics.",
            "Mathematical Methods for Physicists.",
            "Mathematical Methods for Physicists and Engineers.",
            "Mathematical Analysis and Analytic Geometry.",
            "Theoretical Mechanics.",
            "Mechanics and Optics Laboratories.",
          ],
        },
        {
          title: "University experience",
          text: "After postgraduate teaching training from 2007 to 2009, she continued as Instructor, Assistant Professor and Associate Professor at the University of Havana's Faculty of Physics. She has designed courses and programmes, mentored students and junior lecturers, assessed theses and projects, and supervised BSc and MSc work.",
        },
        {
          title: "Academic responsibility",
          text: "From June 2021 to November 2022 she headed the Department of Theoretical Physics. Her service also includes admissions, teaching assessment, summer schools and the organisation of educational and scientific activities.",
        },
        {
          title: "Courses and resources",
          text: "This section is ready for future guides, reading lists, courses and workshops. Resources will appear only when an authorised downloadable version is available.",
        },
      ],
    },
    literature: {
      eyebrow: "Literature",
      title: "Words as another way of investigating",
      lead:
        "Poetry, fiction and reflection on the creative process meet a scientific background that sharpens observation and inquiry.",
      sections: [
        {
          title: "A second home",
          text: "Writing has a place of its own in this path. Gretel trained in narrative techniques at the Onelio Jorge Cardoso Centre and has a long-standing interest in literature, history, cinema and theatre.",
        },
        {
          title: "Books",
          text: "Future book pages can bring together covers, synopses, excerpts, presentations, reviews, awards and information or purchase links. No titles are shown yet because editorial material was not included in the supplied documents.",
        },
        {
          title: "Poetry and fiction",
          text: "The space is ready for poetry collections, selected poems, novels, short stories and works in progress. Each item can be activated from the central content file once an authorised version is available.",
        },
        {
          title: "Writing notebook",
          text: "A future notebook will gather notes on reading and creative processes. Entries are managed as Markdown files so that new writing can be added without changing the site components.",
        },
      ],
    },
    outreach: {
      eyebrow: "Outreach",
      title: "Building bridges between knowledge and community",
      lead:
        "Her outreach experience spans organisation, communication, education, television and science theatre.",
      sections: [
        {
          title: "Gender and science",
          text: "She organised workshops for the International Day of Women and Girls in Science with ICIMAF, the Cuban Physics Society and the Cuban Mathematics Society in 2021, 2022 and 2023.",
        },
        {
          title: "Science in other formats",
          items: [
            "Scientific adviser to the Cuban television programme Una calle, mil caminos for the episode ‘La vida media del muón’, broadcast in 2021.",
            "Founder and director of the science-theatre group Magnetic Monopole, 2015–2020.",
            "Co-founder and organiser of the Cuban Meeting for Graduate Students in Physics (FISESP), 2018 and 2020.",
            "Organiser and lecturer at the first summer school for secondary students at the Faculty of Physics, 2019.",
            "Member of the Cuban steering committee for IAU100 NameExoWorlds, 2019.",
          ],
        },
        {
          title: "Activity archive",
          text: "This section is ready for talks, festivals, podcasts, videos, articles, workshops and press appearances, with format filters once verified material is available.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Scientific and teaching experience for new projects",
      lead:
        "Flexible proposals for students, institutions, communication teams and people working with scientific or outreach texts.",
      sections: [
        {
          title: "Teaching and training",
          items: [
            "Physics courses and workshops.",
            "Support for university-level subjects.",
            "Mathematical methods for science.",
            "Academic mentoring.",
            "Design of teaching resources and programmes.",
          ],
        },
        {
          title: "Science communication",
          text: "Design and development of talks, workshops and content that connect scientific ideas with different audiences, supported by teaching, organisational and communication experience.",
        },
        {
          title: "Editing and review",
          text: "Feedback on clarity, structure and style for scientific, academic and outreach texts. Each proposal is considered according to scope, audience and level of specialisation, without presenting the service as a professional editing certification.",
        },
      ],
    },
    resources: {
      eyebrow: "Resources",
      title: "Materials for learning, teaching and communicating",
      lead:
        "A growing archive for authorised documents and professional links.",
      sections: [
        {
          title: "Teaching materials",
          text: "Guides, reading lists and downloadable materials will appear here once they are ready for publication.",
        },
        {
          title: "Scientific profile",
          text: "ORCID provides a persistent research identity and access to the publicly available publication record.",
        },
        {
          title: "Press and collaborations",
          text: "The structure supports a press kit, short biography and authorised photographs. These resources remain hidden until Gretel supplies the final files.",
        },
        {
          title: "Curriculum vitae",
          text: "The PDF currently available is in English. The web-ready copy deliberately omits the address, phone number and sensitive personal data from the original document.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk",
      lead:
        "For research, teaching, literature, outreach, review or collaboration proposals, please write with a brief note about the context and goal.",
      sections: [
        {
          title: "Reasons to get in touch",
          items: [
            "Research and scientific collaborations.",
            "Courses, workshops and academic mentoring.",
            "Literature and cultural projects.",
            "Outreach and media.",
            "Editing and text review.",
          ],
        },
        {
          title: "Professional email",
          text: "The form opens your email application. It stores no data and uses no external service.",
        },
      ],
    },
    blog: {
      eyebrow: "Notebook",
      title: "Science, writing and the work between them",
      lead:
        "This space will gather future notes on research, teaching, reading, the history of science and creative processes.",
      sections: [
        {
          title: "Coming soon",
          text: "There are no public entries yet. The project includes a draft Markdown template to make future publishing straightforward.",
        },
      ],
    },
    agenda: {
      eyebrow: "Agenda",
      title: "Upcoming activities",
      lead:
        "Talks, courses, workshops, conferences and presentations will be announced here.",
      sections: [
        {
          title: "No confirmed activities",
          text: "New activities will be announced soon. The agenda is ready for dates, locations, formats and registration links without changes to the site components.",
        },
      ],
    },
  },
};

export const projects = {
  es: {
    eyebrow: "Proyectos",
    title: "Ideas que encuentran su propio formato",
    lead:
      "Escritura, divulgación y creación colectiva se cruzan en una selección de proyectos abiertos a crecer con nuevos archivos y enlaces.",
    items: [
      {
        title: "Monopolo Magnético",
        dates: "2015–2020",
        category: "Teatro científico",
        description:
          "Grupo teatral fundado y dirigido por Gretel, integrado por estudiantes y profesores de Física de la Universidad de La Habana.",
        page: "monopole" as PageKey,
      },
      {
        title: "El insomnio",
        dates: "",
        category: "Escritura",
        description:
          "Espacio personal de escritura asociado al blog elinsomniodegretel.de. La cronología y los enlaces definitivos están pendientes de confirmación.",
        external: "https://elinsomniodegretel.de",
      },
      {
        title: "Napkin Notes",
        dates: "",
        category: "Divulgación",
        description:
          "Proyecto incluido por Gretel en la estructura de su web. La descripción, las fechas y los enlaces oficiales se añadirán cuando estén verificados.",
      },
      {
        title: "Scattering",
        dates: "",
        category: "Proyecto",
        description:
          "Proyecto en espera de una descripción autorizada, cronología, imágenes y enlaces oficiales.",
      },
    ],
  },
  en: {
    eyebrow: "Projects",
    title: "Ideas that find their own form",
    lead:
      "Writing, outreach and collective creation meet in a selection of projects ready to grow with new archives and links.",
    items: [
      {
        title: "Magnetic Monopole",
        dates: "2015–2020",
        category: "Science theatre",
        description:
          "A theatre group founded and directed by Gretel, bringing together physics students and lecturers from the University of Havana.",
        page: "monopole" as PageKey,
      },
      {
        title: "El insomnio",
        dates: "",
        category: "Writing",
        description:
          "A personal writing space connected to elinsomniodegretel.de. Its chronology and definitive links remain to be confirmed.",
        external: "https://elinsomniodegretel.de",
      },
      {
        title: "Napkin Notes",
        dates: "",
        category: "Outreach",
        description:
          "A project named by Gretel for inclusion on the site. Its description, dates and official links will be added once verified.",
      },
      {
        title: "Scattering",
        dates: "",
        category: "Project",
        description:
          "Awaiting an authorised description, timeline, images and official links.",
      },
    ],
  },
};

export const monopole = {
  es: {
    eyebrow: "Proyecto · 2015–2020",
    title: "Monopolo Magnético",
    lead:
      "Un grupo teatral fundado y dirigido por Gretel, formado por estudiantes y profesores de Física de la Universidad de La Habana.",
    intro:
      "Monopolo Magnético llevó la ciencia al escenario como experiencia colectiva. Esta página conserva la identidad del proyecto y está preparada para reconstruir su historia mediante obras, participantes, fotografías, carteles, vídeos y prensa.",
    gallery: "Archivo visual",
    galleryNote:
      "Las fotografías reales se incorporarán aquí cuando exista una selección autorizada.",
    placeholders: ["Representaciones", "El grupo", "Carteles", "Tras bambalinas"],
    archive: [
      "Historia y cronología del grupo.",
      "Obras y representaciones.",
      "Participantes y colaboraciones.",
      "Vídeos, prensa y redes sociales.",
    ],
  },
  en: {
    eyebrow: "Project · 2015–2020",
    title: "Magnetic Monopole",
    lead:
      "A theatre group founded and directed by Gretel, formed by physics students and lecturers at the University of Havana.",
    intro:
      "Magnetic Monopole brought science to the stage as a collective experience. This page preserves the project's identity and is ready to reconstruct its history through productions, participants, photographs, posters, videos and press coverage.",
    gallery: "Visual archive",
    galleryNote:
      "Real photographs will be added here once an authorised selection is available.",
    placeholders: ["Performances", "The group", "Posters", "Behind the scenes"],
    archive: [
      "History and timeline.",
      "Plays and performances.",
      "Participants and collaborations.",
      "Videos, press and social media.",
    ],
  },
};

export const seo: Record<Lang, Record<PageKey, { title: string; description: string }>> = {
  es: Object.fromEntries(
    Object.keys(routes.es).map((key) => {
      const page = key as PageKey;
      const title =
        page === "home"
          ? "Gretel Quintero Angulo — Física, escritora y profesora"
          : `${
              page === "projects"
                ? projects.es.title
                : page === "monopole"
                  ? monopole.es.title
                  : pages.es[page]?.title ?? "Gretel Quintero Angulo"
            } — Gretel Quintero Angulo`;
      const description =
        page === "home"
          ? home.es.lead
          : page === "projects"
            ? projects.es.lead
            : page === "monopole"
              ? monopole.es.lead
              : pages.es[page]?.lead ?? home.es.lead;
      return [key, { title, description }];
    }),
  ) as Record<PageKey, { title: string; description: string }>,
  en: Object.fromEntries(
    Object.keys(routes.en).map((key) => {
      const page = key as PageKey;
      const title =
        page === "home"
          ? "Gretel Quintero Angulo — Physicist, writer and lecturer"
          : `${
              page === "projects"
                ? projects.en.title
                : page === "monopole"
                  ? monopole.en.title
                  : pages.en[page]?.title ?? "Gretel Quintero Angulo"
            } — Gretel Quintero Angulo`;
      const description =
        page === "home"
          ? home.en.lead
          : page === "projects"
            ? projects.en.lead
            : page === "monopole"
              ? monopole.en.lead
              : pages.en[page]?.lead ?? home.en.lead;
      return [key, { title, description }];
    }),
  ) as Record<PageKey, { title: string; description: string }>,
};
