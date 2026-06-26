# Progreso de mejoras de layout — Portfolio React

Documento de contexto para retomar el trabajo en Cursor.  
**Última actualización:** junio 2025.

---

## Objetivo general

Mejorar el layout del portfolio **sin cambiar lógica ni contenido textual**. Solo JSX y CSS. Bootstrap 5 existente, sin librerías nuevas de estilos.

Reglas del proyecto: [`.cursor/rules/project-overview.md`](../.cursor/rules/project-overview.md)

---

## Plan principal (8 pasos) — Estado

| Paso | Descripción | Estado |
|------|-------------|--------|
| **1** | Shell global: variables CSS (`--sidebar-width`, etc.), `main` con `margin-left` + `width: calc()`, quitar grid Bootstrap roto en `App.jsx` | ✅ Hecho |
| **2** | Sistema de sección DRY: `.section-container`, `.section-divider`, `.section-tab` en `App.css` | ✅ Hecho |
| **3** | Ritmo vertical: `--section-gap: 4rem`, `--hero-offset`, quitar paddings duplicados | ✅ Hecho |
| **4** | Hero: `clamp` tipográfico, botones responsive, email con enlace, gradiente `#8b5cf6` | ✅ Hecho |
| **5** | About: grid de subsecciones (ver sección About más abajo) | ✅ Hecho (reorganizado después) |
| **6** | Projects: grid `col-md-4`, cards con borde/sombra, botón "Ver más", color `#8b5cf6` | ✅ Hecho |
| **7** | Contact: `id="contact"`, badge email, CSS corregido, footer | ✅ Hecho |
| **8** | Responsive: navbar móvil + offcanvas Bootstrap, `main` sin sidebar en `<992px` | ✅ Hecho |

---

## Archivos clave del sistema de layout

| Archivo | Rol |
|---------|-----|
| [`App.css`](App.css) | Variables globales, `.container-main`, `.section-container`, `.section-divider`, `.section-tab`, media queries responsive |
| [`App.jsx`](App.jsx) | `Sidebar` + `main` (sin `row`/`col` falsos) |
| [`components/Sidebar/Sidebar.jsx`](components/Sidebar/Sidebar.jsx) | Desktop: sidebar fijo. Móvil: navbar + offcanvas. Componente interno `SidebarPanel` |
| [`components/Sidebar/Sidebar.css`](components/Sidebar/Sidebar.css) | Estilos sidebar desktop y offcanvas |

### Variables CSS en `:root` (`App.css`)

```css
--sidebar-width: 37rem;        /* 30rem entre 992px y 1199px */
--content-max-width: 55rem;
--section-gap: 4rem;
--hero-offset: 7rem;           /* 2.5rem en móvil */
--about-icon-size-sm: 48px;
--about-icon-size-md: 52px;
--about-icon-size-lg: 56px;
```

---

## Sección About — Trabajo adicional

### Grid de 3 filas (propuesta de la usuaria)

1. **Fila 1:** Formación + Experiencia (`col-md-6` + `col-md-6`)
2. **Fila 2:** Tecnologías a ancho completo (`col-12`)
3. **Fila 3:** Soft Skills a ancho completo (`col-12`)

Archivo: [`components/About/About.jsx`](components/About/About.jsx)

### Mejoras About — Estado

| Sub-paso | Descripción | Estado |
|----------|-------------|--------|
| **About 1** | Unificar `.skills-card` (borde, padding, hover). Quitar caja doble en Experiencia (`.experience-card` → `.experience-content`) | ✅ Hecho |
| **About 2** | Iconos de tecnologías responsive (ver tabla abajo). Tecnologías dentro de `.skills-card`. Variables de tamaño de icono en `App.css` | ✅ Hecho |
| **About 3** | Soft skills responsive: centradas en móvil, `space-between` en desktop, hover coherente con Contact | ⏳ Pendiente |
| **About 4** | Variables CSS y `text-align: left` en `.about-text` en móvil | ⏳ Pendiente |
| **About 5** | Pulido final (opcional; tecnologías ya van en `.skills-card`) | ⏳ Parcial |

### Comportamiento iconos de tecnologías (`About.css`)

| Breakpoint | Comportamiento |
|------------|----------------|
| `< 576px` | Grid 4 columnas (4+4+3), iconos 48px |
| `576px – 991px` | Carrusel horizontal con scroll táctil, iconos 52px |
| `992px – 1199px` | Grid 6 columnas, 2 filas (6+5), iconos 52px |
| `≥ 1200px` | Una sola línea con `space-between`, hasta 56px |

---

## Detalles por componente

### Hero
- Contenedor: `section-container section-container--hero`
- Título/nombre con `clamp()`
- Botones: columna en móvil, fila desde `sm`
- Solo el icono de email tiene `mailto:`; LinkedIn/GitHub/YouTube sin URL aún

### Projects
- 3 cards iguales en `col-md-4`
- Modal Bootstrap sin cambios de lógica

### Contact
- `id="contact"` para navegación del sidebar
- Email como badge pill morado

### Responsive general
- `< 992px`: navbar fija + offcanvas; `main` a ancho completo
- Enlaces del offcanvas cierran con `data-bs-dismiss="offcanvas"`

---

## Pendiente / ideas para retomar

1. **About paso 3:** soft skills responsive (`.lista-softskills--row`)
2. **About paso 4:** `about-text` alineado a la izquierda en móvil
3. **URLs reales:** GitHub, LinkedIn, YouTube en Hero y Sidebar (ahora `#` o sin enlace)
4. **Color sidebar marco:** sigue `#6610f2`; resto del sitio usa `#8b5cf6` — unificar si se desea
5. **Descargar CV:** botón del Hero apunta a `#contact`, no a un PDF
6. **Probar en dispositivos reales** el carrusel de tecnologías en tablet

---

## Cómo continuar en Cursor

Di por ejemplo:
- `"Lee LAYOUT-PROGRESO.md y haz el paso 3 de About"`
- `"Continúa con las mejoras pendientes de About"`
- `"Unifica los colores morados del portfolio"`

No hacer cambios sin que la usuaria lo pida explícitamente (preferencia de trabajo paso a paso).
