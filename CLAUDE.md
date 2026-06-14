# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static website for **San Martin Dent**, a dental clinic in Temuco, Chile. No build tools, no dependencies — open `index.html` directly in a browser to preview.

## Clinic data (single source of truth)

| Field | Value |
|---|---|
| WhatsApp | `56967270623` (used in all `wa.me` links) |
| Address | Avenida San Martín 0795, Temuco, La Araucanía |
| Hours | Lun–Vie 9:00–19:00 / Sáb 9:00–14:00 *(confirm with owner)* |
| Founders | Dr. Ignacio San Martín, Dr. Andrés Alegría, Dr. Nicolás Gallardo |
| Services | Diseño de sonrisas (adultos +40), Implantes dentales, Odontología integral |

WhatsApp deep-link format used throughout: `https://wa.me/56967270623?text=<URL-encoded message>`

## Brand & design tokens (styles.css `:root`)

```
--bg:        #172940   /* dark navy — main background */
--bg-light:  #1e3551   /* lighter navy — alternate sections */
--accent:    #f19f05   /* golden — CTAs, highlights, logo color */
--text:      #f2f2f2   /* off-white — headings */
--text-muted:#a8b8cc   /* muted blue-grey — body copy */
```

Fonts loaded from Google Fonts CDN: **Montserrat** (headings/UI) + **Open Sans** (body). Icons via **Font Awesome 6.5** CDN.

## Architecture

Two pages share one stylesheet and one script:

- `index.html` — single-page layout with anchor sections: `#inicio`, `#servicios`, `#nosotros`, `#contacto`
- `equipo.html` — separate team page; links back to `index.html#*` anchors
- `styles.css` — all styles for both pages; team-page styles are under the `/* ===== TEAM PAGE ===== */` block
- `script.js` — mobile hamburger menu, scroll-based active nav link, Intersection Observer fade-in for `.service__card`, `.team__card`, `.contact__item`
- `assets/` — logo and doctor photos go here (`logo.png` required; doctor photos are optional, referenced by HTML comments in `equipo.html`)

CSS follows BEM naming: `.block__element--modifier`. Sections alternate between `--bg` and `--bg-light` backgrounds. The `.container` class (max-width 1100px, auto margins) centers content on every section.

## Adding a new doctor card (equipo.html)

Copy this block inside `.team__grid` under "Equipo Clínico":

```html
<div class="team__card">
    <div class="team__avatar">
        <img src="assets/nombre-foto.jpg" alt="Nombre del Doctor">
    </div>
    <div class="team__info">
        <h3 class="team__name">Dr. Nombre Apellido</h3>
        <p class="team__title">Especialidad</p>
        <p class="team__bio">Descripción breve.</p>
    </div>
</div>
```

If no photo is available yet, replace `<img>` with `<i class="fas fa-user-doctor"></i>`.

## Adding a new service (index.html)

Duplicate a `.service__card` block inside `.services__grid`. Only one card should carry `.service__card--featured` (the visually elevated center card). Update the `wa.me` link text to match the service name.

## SEO — objetivo principal

El posicionamiento en Google es una prioridad del proyecto. Cada encabezado (`h1`–`h3`) debe incluir palabras clave reales que los pacientes de Temuco y La Araucanía buscan.

### Palabras clave objetivo (por intención de búsqueda)

| Intención | Palabras clave |
|---|---|
| Servicio + ciudad | "dentista Temuco", "clínica dental Temuco", "odontólogo Temuco" |
| Servicio específico | "implantes dentales Temuco", "diseño de sonrisa Temuco", "blanqueamiento dental Temuco" |
| Urgencia / precio | "dentista urgencia Temuco", "dentista económico Temuco", "hora dental Temuco" |
| Segmento adultos | "dentista adultos mayores Temuco", "prótesis dental Temuco", "rehabilitación oral Temuco" |
| Zona | "dentista Avenida San Martín", "dentista La Araucanía" |

### Reglas de aplicación

- El `<h1>` de `index.html` debe contener "dentista Temuco" o "clínica dental Temuco" de forma natural.
- Cada sección (`#servicios`, `#nosotros`, `#contacto`) debe tener un `<h2>` con al menos una palabra clave de la tabla.
- Las cards de servicios usan `<h3>`: incluir siempre "Temuco" o la especialidad explícita.
- El atributo `<title>` y `<meta name="description">` de cada página deben incluir las palabras clave primarias + "Temuco".
- No forzar keywords — el texto debe sonar natural en español chileno.
- `equipo.html`: los `<h2>` y `<h3>` deben mencionar "dentistas Temuco" o "equipo odontológico Temuco".

### Meta tags mínimos requeridos en cada página

```html
<title>Clínica Dental Temuco | San Martin Dent</title>
<meta name="description" content="Dentistas en Temuco especializados en implantes dentales, diseño de sonrisa y odontología integral. Agenda tu hora por WhatsApp.">
<meta name="keywords" content="dentista Temuco, clínica dental Temuco, implantes dentales Temuco, diseño de sonrisa Temuco">
<link rel="canonical" href="https://sanmartindent.cl/">
```

## Generación de imágenes con IA (Higgsfield)

### API
- Base URL: `https://platform.higgsfield.ai`
- Endpoint imagen: `POST /flux-pro/kontext/max/text-to-image`
- Auth header: `Authorization: Key <ID>:<SECRET>` (credenciales en `HIGGSFIELD_API_KEY` env var)
- Polling: `GET /requests/{request_id}/status` cada 5 s hasta `status == "completed"`
- Resultado: `response.images[0].url`
- Post-proceso: convertir PNG → JPEG 82% calidad, redimensionar a ≤1200px ancho (System.Drawing en PowerShell)

### Tamaños objetivo por uso
| Uso | Dimensión solicitada | Ancho JPEG final |
|---|---|---|
| Hero / og:image | `16:9` | 1200 px |
| Imagen inline artículo | `16:9` | 1200 px |
| Retrato / antes-después | `4:3` | 800 px |

### Prompt template obligatorio para imágenes del sitio

Todas las imágenes generadas para San Martin Dent deben seguir esta estructura de prompt:

```
[DESCRIPCIÓN DE ESCENA: persona/s chilena/s de 45–60 años en situación cotidiana relacionada con sonrisa/confianza/vida social],
[AMBIENTE: consultorio dental elegante / evento social / entorno profesional / espacio doméstico cálido],
[EMOCIÓN: inseguridad / confianza recuperada / alegría natural / calidez profesional],
[LUZ: luz natural suave / iluminación cinematográfica cálida / fondo neutro elegante],
shallow depth of field, medium shot or close-up, candid and natural expression,
fair white skin, light complexion, Caucasian appearance, white Chilean appearance,
NO Black or African-descent people, NO dark skin tones — all subjects must appear Chilean mestizo or white,
photorealistic, professional photography, cinematic lighting,
no text, no logos, no watermarks
```

**Reglas de aplicación:**
- Reemplazar cada `[BLOQUE]` con la descripción concreta de la escena antes de enviar el prompt.
- Nunca omitir las líneas fijas (shallow depth of field, complexión, restricción de raza, no text…).
- El perfil físico es siempre: chileno/a de tez blanca o mestiza, 45–60 años, apariencia natural cotidiana. **Nunca incluir personas de tez oscura o raza negra** — el público objetivo es chileno.
- Para escenas antes/después: usar seeds consecutivos (ej. 501 / 502) para mantener coherencia visual.
- Guardar las imágenes en `assets/blog/` con nombres descriptivos en kebab-case.

## Deploy policy — IMPORTANTE

El sitio está alojado en **Netlify** (dominio `sanmartindent.cl`), conectado al repositorio GitHub `clinicasanmartintco-maker/Sanmartindent`. Cada deploy en Netlify consume créditos.

**Reglas obligatorias:**

- **Nunca hacer `git push` automáticamente** después de un cambio. Siempre hacer commit local y esperar confirmación explícita del usuario antes de subir.
- Acumular todos los cambios pendientes en commits locales. Solo hacer push cuando el usuario diga explícitamente "publica", "sube" o "deploy".
- Antes de proponer un push, listar brevemente qué cambios se van a publicar para que el usuario decida.
- El usuario abre el sitio localmente (`index.html` en Chrome) para verificar antes de publicar.

## Language

All user-facing text is in **Spanish (Chile)**. Keep it that way for any new copy.
