# Bienvenido a Landing Pad 🚀
Este proyecto es una **reimaginación tipo CMS para enlaces de portafolio**, basada en el diseño y funcionalidad del sitio original: [uxjairo.vercel.app](https://uxjairo.vercel.app).
https://i.imgur.com/3zgtn4y.png
📌 Reimaginado y adaptado por **Jairo Vargas**  
🎨 Diseño original por [Cosmic Themes](https://cosmicthemes.com/)

Este es un tema gratuito para Astro creado por [Cosmic Themes](https://cosmicthemes.com/). Es un excelente lugar para alojar enlaces a tus diversos proyectos y redes sociales.
[Demo del sitio web](https://landingpad.cosmicthemes.com/)

## Inicio Rápido

1. Haz un fork de este proyecto a tu propio repositorio y clónalo en tu máquina local.
2. Instala todos los paquetes necesarios con `npm install`.
3. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.
   - Por defecto, estará disponible en `localhost:4321`.
4. Edita el contenido ya sea usando Keystatic CMS en `localhost:4321/admin` o editando los archivos Markdown en `src/data/`.
   - También hay un botón de "Panel de Administración" que verás en la demo, que te llevará al editor CMS.
5. Si deseas, actualiza los colores en `tailwind.config.cjs`, o cualquier otro código para ajustar el diseño.
6. Actualiza la URL del sitio en `astro.config.mjs` y en `/public/robots.txt` para que coincida con tu dominio.
7. Cuando estés satisfecho, sube tus cambios a tu repositorio y [despliega en Netlify, Vercel, Cloudflare](https://cosmicthemes.com/deployment/), o el proveedor de tu elección.

## Características

- Página de inicio lista para producción, inspirada en Linktree, hecha para ser alojada como sitio estático.
- Integración opcional con Keystatic CMS para editar contenido.
- Optimización de imágenes incorporada usando `astro:assets`.
- Tailwind CSS para estilos.

## Otros Recursos

- Mira mi publicación del blog sobre [configuración recomendada de desarrollo web con Astro](https://cosmicthemes.com/blog/astro-web-development-setup/).
- Puedes aprender más en la [documentación del tema](https://cosmicthemes.com/docs/).

## Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

Sin embargo, si has adquirido [All Access](https://cosmicthemes.com/all-access/) de Cosmic Themes, existe una licencia sin requerimiento de atribución que puedes consultar en [Detalles de la licencia](https://cosmicthemes.com/license/).

## Información General sobre Astro

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada archivo se expone como una ruta basada en su nombre.

No hay nada especial sobre `src/components/`, pero es donde nos gusta colocar los componentes Astro/React/Vue/Svelte/Preact.

Cualquier recurso estático, como imágenes, puede colocarse en el directorio `public/`. También suelo usar `src/assets` para imágenes cuando se utiliza `astro:assets` para optimización.

### Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                    | Acción                                                   |
| :------------------------ | :-------------------------------------------------------- |
| `npm install`             | Instala las dependencias                                  |
| `npm run dev`             | Inicia el servidor local en `localhost:3000`              |
| `npm run build`           | Construye el sitio para producción en `./dist/`           |
| `npm run preview`         | Previsualiza tu build localmente antes de desplegarlo     |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check`      |
| `npm run astro -- --help` | Obtiene ayuda sobre el CLI de Astro                       |

### ¿Quieres aprender más?

No dudes en revisar la [documentación de Astro](https://docs.astro.build).
