# Web de Gretel Quintero Angulo

Toda la info estara en site.ts, todo lo que quieras cambiar los puedes hacer ahi directamente.
Lo puedes cambiar directamente en el repo y en cuanto hagas el commit el se desplegara automaticamente

De todos modos si quieres desplegarlo en local aqui te dejo el paso a paso basico

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

## Organización principal

- `content/site.ts`: todos los textos, rutas, proyectos y metadatos bilingües.
- `content/blog/`: plantillas Markdown para entradas.
- `app/components/`: presentación reutilizable; normalmente no hay que editarla.
- `app/globals.css`: colores, tipografías, espaciado y responsive.
- `public/images/`: fotografías e imagen social.
- `public/docs/`: CV descargable.
- `GUIA_DE_EDICION.md`: instrucciones detalladas de mantenimiento y publicación.
- `CONTENT_TODO.md`: materiales que todavía debe facilitar Gretel.

