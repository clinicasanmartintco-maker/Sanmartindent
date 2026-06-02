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

## Language

All user-facing text is in **Spanish (Chile)**. Keep it that way for any new copy.
