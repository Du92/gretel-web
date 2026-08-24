# Web de Gretel Quintero Angulo

Sitio personal bilingüe, multipágina y estático para presentar la trayectoria científica, docente, literaria y divulgativa de Gretel Quintero Angulo.

## Puesta en marcha

Requisitos: Node.js 22 o posterior y npm.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. El español es el idioma inicial; las rutas `/es/` y `/en/` contienen las versiones completas.

## Comandos

```bash
npm run dev          # servidor local
npm run build        # compilación de producción
npm run start        # abrir la compilación de producción
npm run build:pages  # exportación estática para GitHub Pages
```

La exportación detecta automáticamente el nombre del repositorio y aplica su prefijo a rutas, imágenes, documentos y metadatos. Por ello funciona tanto en `usuario.github.io/repositorio/` como, tras activar `CUSTOM_DOMAIN`, en un dominio propio.

## Organización principal

- `content/site.ts`: todos los textos, rutas, proyectos y metadatos bilingües.
- `content/blog/`: plantillas Markdown para entradas.
- `app/components/`: presentación reutilizable; normalmente no hay que editarla.
- `app/globals.css`: colores, tipografías, espaciado y responsive.
- `public/images/`: fotografías e imagen social.
- `public/docs/`: CV descargable.
- `GUIA_DE_EDICION.md`: instrucciones detalladas de mantenimiento y publicación.
- `CONTENT_TODO.md`: materiales que todavía debe facilitar Gretel.

## Privacidad y licencia

La web pública y la copia descargable del CV omiten dirección, teléfono, fecha y lugar de nacimiento. El código usa licencia MIT. La fotografía, el CV, los textos biográficos y el futuro contenido literario conservan los derechos de su autora y no quedan liberados por esa licencia.
