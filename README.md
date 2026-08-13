# Portfolio de Gretel Quintero

Gretilla esta es la web, es estática de una sola página, construida con Next.js y preparada para publicarse en GitHub Pages.

## Requisitos

- Node.js 22 o superior
- npm

## Instalar

```bash
npm install
```

## Ejecutar en local

```bash
npm run dev
```

Abre la URL que muestra Next.js en la terminal. Normalmente será `http://localhost:3000`.

## Generar la versión estática

```bash
npm run build
```

El resultado se genera en la carpeta `out/`.

## Probar la carpeta exportada

```bash
npm run preview
```

## Editar la web

- `app/content.ts`: servicios, experiencia, facetas y enlaces.
- `app/page.tsx`: estructura de la página, textos principales y secciones.
- `app/globals.css`: colores, tipografías, responsive y diseño visual.
- `public/gretel.jpeg`: retrato principal.
- `public/favicon.svg`: favicon del sitio.

## Publicar en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub.
2. Entra en **Settings -> Pages**.
3. En **Build and deployment**, selecciona **GitHub Actions**.
4. Haz push a la rama `main`.

El workflow `.github/workflows/deploy-pages.yml` ejecuta `npm ci`, genera la exportación estática con `npm run build:github` y publica la carpeta `out/`. La variable `NEXT_PUBLIC_BASE_PATH` se toma de GitHub Pages para que estilos, scripts e imágenes funcionen también en URLs de proyecto como `Du92.github.io/gretel-web/`.

## Estructura

```text
app/
  content.ts       Contenido editable
  globals.css      Estilos globales
  layout.tsx       Metadatos y layout raíz
  page.tsx         Página única del portfolio
public/
  favicon.svg
  gretel-portrait-000.jpg
.github/workflows/
  deploy-pages.yml Workflow de publicación en GitHub Pages
next.config.ts     Exportación estática y basePath
package.json       Scripts y dependencias
tsconfig.json      Configuración TypeScript
```
