# Guía de edición y publicación

Esta guía permite mantener la web sin recorrer todos los componentes. Para cambios habituales basta con editar `content/site.ts`, `content/blog/` y `public/`.

## 1. Arquitectura

El sitio utiliza Next.js con generación estática para GitHub Pages. Las páginas comparten componentes, pero cada elemento del menú tiene una URL independiente. El archivo `content/site.ts` contiene las rutas y los textos en los dos idiomas.

```text
app/
  [lang]/[[...slug]]/page.tsx   rutas ES y EN
  components/                  cabecera, pie y vistas reutilizables
  globals.css                  diseño completo
content/
  site.ts                      contenido y traducciones
  blog/                        borradores Markdown
public/
  docs/                        CV
  images/                      retrato y futuras fotografías
```

No edites `app/components/` para cambiar una frase: el texto debe modificarse en `content/site.ts`.

## 2. Editar la portada

Busca `export const home` en `content/site.ts`. Dentro de `es` y `en` encontrarás:

- `eyebrow`: lista profesional situada sobre el nombre.
- `lead`: presentación principal.
- `intro`: manifiesto editorial.
- `areas`: los cuatro bloques de Escritura, Docencia, Investigación y Divulgación.
- `note`: bloque “Ahora”.

Modifica siempre ambas versiones. Conserva las claves `key` y `tone`; controlan el enlace y el color.

## 3. Cambiar traducciones

Los idiomas están en objetos paralelos `es` y `en`. Para encontrar una frase, usa la búsqueda del editor. Evita traducir únicamente una página: cada cambio público debe tener equivalente natural en el otro idioma.

Las rutas se definen en `routes`. Si cambias una ruta, actualiza solo ese objeto: el menú, el selector de idioma, las etiquetas `hreflang` y los enlaces internos usan esos valores.

## 4. Añadir o modificar un proyecto

Busca `export const projects`. Cada objeto admite:

```ts
{
  title: "Nombre",
  dates: "2026–2027",
  category: "Divulgación",
  description: "Descripción breve y verificable.",
  external: "https://sitio-oficial.example"
}
```

Duplica el objeto en `es` y `en`, con la traducción correspondiente. Si aún no existe URL, omite `external`: la tarjeta seguirá visible sin mostrar un botón roto. La página especial de Monopolo Magnético utiliza `page: "monopole"`.

## 5. Añadir una entrada del blog

Duplica una plantilla de `content/blog/`, cambia el nombre del archivo y completa:

- `title`, `date`, `language`, `summary`, `image`, `category` y `status`.
- Mantén `status: "draft"` mientras se revisa.
- Usa `status: "published"` únicamente cuando el texto esté autorizado.

La versión actual deja las plantillas fuera de la interfaz. Para activar un listado automático será necesario conectar la carpeta a una colección de contenido; las plantillas ya fijan el formato que debe conservarse.

## 6. Añadir una actividad a la agenda

En esta versión la agenda muestra un mensaje prudente. Para anunciar una actividad, edita la sección `agenda` dentro de `pages.es` y `pages.en`. Añade una entrada a `items` con fecha, nombre, lugar/modalidad y enlace verificado. Si crecerá con frecuencia, conviene mover posteriormente la agenda a una colección Markdown siguiendo el patrón del blog.

## 7. Añadir publicaciones

Busca la página `science` en `pages.es` y `pages.en`. Añade una sección o una lista con título, autores, revista, año y DOI. No uses enlaces incompletos. ORCID ya está centralizado en `site.orcid`.

## 8. Sustituir fotografías

1. Copia la nueva imagen optimizada en `public/images/`.
2. Usa un nombre seguro, por ejemplo `gretel-retrato-2026.jpg`.
3. En `content/site.ts`, cambia `site.portrait`.
4. Ajusta `portraitAlt` en español e inglés.

Recomendación: JPG o WebP, al menos 1200 px en el lado largo y menos de 500 KB. No publiques una foto sin permiso.

## 9. Galería de Monopolo Magnético

Guarda las imágenes en `public/images/monopolo/`. Para cada una registra autoría, permiso y texto alternativo. La cuadrícula actual usa marcos de sustitución deliberados; no simula fotografías. Para convertirlos en imágenes reales, reemplaza los objetos `placeholders` en `monopole` por una lista con `src`, `alt` y `caption`, y muestra esa lista en `MonopoleView` dentro de `app/components/PageViews.tsx`.

## 10. Colores y tipografías

En la parte superior de `app/globals.css` están las variables:

- `--paper`, `--ink` y `--line`: base editorial.
- `--coral`: escritura.
- `--ochre`: docencia.
- `--blue`: investigación.
- `--green`: divulgación.
- `--serif` y `--sans`: familias tipográficas.

Mantén contraste WCAG AA. Si incorporas una fuente web, guárdala localmente en `public/fonts/` y declara `@font-face`; evita servicios externos y cookies.

## 11. Actualizar el CV

Sustituye `public/docs/gretel-quintero-angulo-cv-en.pdf` conservando el nombre. Antes de publicarlo elimina dirección, teléfono, fecha y lugar de nacimiento. Si añades una versión española, crea un segundo archivo y añade su ruta a `site` y los botones correspondientes.

## 12. Probar en local

Instala Node.js 22 y ejecuta:

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. Revisa `/es/`, `/en/`, el selector `ES / EN`, el menú móvil y al menos una página interna de cada idioma.

## 13. Generar producción

```bash
npm run build
npm run start
```

Para comprobar exactamente la exportación estática de GitHub Pages:

```bash
npm run build:pages
```

La carpeta resultante es `out/`.

## 14. Publicar en GitHub Pages

1. Crea un repositorio vacío en GitHub.
2. Sube todos los archivos del proyecto, excepto `node_modules`, `.next` y `out`.
3. En **Settings → Pages**, selecciona **GitHub Actions** como origen.
4. Haz `push` a la rama `main`.
5. El workflow `.github/workflows/deploy-pages.yml` compilará y publicará la web.

La configuración detecta el nombre del repositorio y corrige automáticamente el prefijo de rutas, imágenes, CV, favicon, manifest, sitemap y robots cuando no hay dominio propio.

## 15. Conectar un dominio personalizado

1. Copia `CNAME.example` como `public/CNAME`.
2. Sustituye el ejemplo por el dominio real, sin `https://`.
3. En el workflow añade `CUSTOM_DOMAIN: "true"` al bloque `env` del paso de compilación y sustituye `NEXT_PUBLIC_SITE_URL` por la URL completa del dominio.
4. En GitHub Pages escribe el mismo dominio en **Custom domain**.
5. En el registrador configura los DNS que indique GitHub y activa **Enforce HTTPS** cuando esté disponible.
6. Define `NEXT_PUBLIC_SITE_URL` con `https://dominio-real.es` para que canonical, sitemap y Open Graph utilicen la URL definitiva.

## 16. Lista de comprobación antes de publicar

- Ejecutar `npm run build` sin errores.
- Revisar español e inglés.
- Comprobar menú y teclado en móvil.
- Verificar correo, ORCID y CV.
- Buscar `http` en `content/` y confirmar cada enlace.
- Confirmar que no se publica información privada.
- Optimizar fotografías y escribir textos alternativos.
- Revisar `CONTENT_TODO.md`.
