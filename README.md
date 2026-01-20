# Helpless Houston — Guía del proyecto

¡Bienvenido a Helpless Houston! Este repositorio es un blog construido con Astro. Aquí tienes una guía práctica y amigable que explica qué es Astro, cómo ejecutar este proyecto y un resumen claro de los cambios que se han aplicado paso a paso.

**¿Qué es Astro?**

- Astro es un moderno framework para construir sitios estáticos y rápidos. Permite usar componentes (incluyendo React/Vue/Svelte) y Markdown, y renderiza HTML optimizado para producción. Su filosofía se centra en enviar menos JavaScript al cliente (islands architecture) y ofrecer alto rendimiento por defecto.

## Comenzar (comandos)

Desde la raíz del proyecto:

```powershell
npm install    # instalar dependencias
npm run dev    # iniciar servidor de desarrollo (hot-reload)
npm run build  # construir sitio para producción
npm run preview# ver la build localmente (por defecto http://localhost:4321)
```

## Estructura mínima

```
/
  public/
  src/
    blog/                # colección de posts (Markdown)
    components/          # componentes reutilizables (Navigation, BlogPost...)
    layouts/             # layouts (BaseLayout, MarkdownPostLayout)
    pages/               # rutas (index.astro, about.astro, blog.astro, posts/[...slug].astro)
  astro.config.mjs
  package.json
```

## Cambios realizados (resumen paso a paso)

1. Títulos dinámicos
   - Añadí `pageTitle` en el frontmatter y lo uso en las páginas principales (`src/pages/about.astro`, `src/pages/index.astro`, `src/pages/blog.astro`) para que el título del `head` y los `h1` sean dinámicos.

2. Estilos locales y variables CSS
   - Añadí una etiqueta `<style define:vars={{skillColor}}>` en `src/pages/about.astro`.
   - Estilé `h1` (púrpura) y las entradas de la lista `.skill` (color definido por `skillColor`, `crimson`).

3. Componentes y navegación
   - Añadí/organicé `src/components/Navigation.astro`, `BlogPost.astro`, y otros componentes para mantener la UI consistente.
   - Importé `src/styles/global.css` en las páginas donde corresponde.

4. Layouts
   - Creé `src/layouts/BaseLayout.astro` como envoltorio común para contenidos.
   - `src/layouts/MarkdownPostLayout.astro` renderiza metadatos (`frontmatter`) y el contenido de cada post.

5. Migración a Colecciones de contenido
   - Moví los posts Markdown a `src/blog/`.
   - Creé `src/content.config.ts` con un esquema para la colección `blog` (campos: `title`, `pubDate` (Date), `description`, `author`, `image`, `tags`).
   - Añadí `src/pages/posts/[...slug].astro` que genera cada página de post desde la colección usando `getCollection('blog')` y `render()`.

6. Reemplazo de `import.meta.glob()` por `getCollection()`
   - Actualicé páginas que listan posts (por ejemplo `src/pages/blog.astro`, `src/pages/tags/[tag].astro`, `src/pages/tags/index.astro`) para usar `getCollection('blog')`.
   - Ahora accedemos a frontmatter vía `post.data` y generamos enlaces como `/posts/{post.id}/`.

7. RSS
   - Añadí `src/pages/rss.xml.js` y actualicé `astro.config.mjs` con la propiedad `site`. Recuerda reemplazar `https://example.com` por la URL real de tu despliegue (Netlify/Vercel) para que el feed contenga enlaces correctos.

8. Limpieza general
   - Eliminé posts duplicados en `src/pages/posts/` y solucioné imports rotos.

## Comprobar el feed RSS

1. Construye la web:

```powershell
npm run build
```

2. Previsualiza la build (local):

```powershell
npm run preview
# luego abre http://localhost:4321/rss.xml
```

## Consejos y siguientes pasos

- Actualiza `astro.config.mjs` → `site` con la URL real de tu sitio de producción.
- Si quieres que convierta las fechas a otro formato, puedo ajustar `MarkdownPostLayout.astro` y usar `toLocaleDateString()` con opciones de localización.
- ¿Quieres que ejecute la build aquí y verifique que `/rss.xml` se genera correctamente? Dímelo y lo hago.

---

Si prefieres que deje el README más breve, más técnico o en inglés, te lo adapto.

***
Archivo actualizado: README.md
