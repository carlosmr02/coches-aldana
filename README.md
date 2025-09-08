# Concesionario Aldana – Sitio web estático

Sitio web estático profesional para un concesionario de coches en Talavera de la Reina (Toledo), con diseño elegante en escala de grises/negro, responsive, y preparado para SEO local.

## Estructura

- `index.html`: página principal con hero, destacados y reseñas
- `inventario.html`: listado con filtros (marca, motor, año, precio)
- `vehiculo.html`: ficha de detalle mediante query param `id`
- `servicios.html`, `sobre-nosotros.html`, `contacto.html`
- `data/vehicles.json`: datos de ejemplo de vehículos
- `assets/styles.css`, `assets/app.js`: estilos globales y scripts
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`

## Desarrollo local

Servir con cualquier servidor estático. Por ejemplo, con Python:

```bash
python -m http.server 8080
```

Y abrir `http://localhost:8080/`.

## SEO y accesibilidad

- Meta etiquetas, OpenGraph/Twitter, JSON-LD (`AutoDealer`, `Vehicle`, `BreadcrumbList`)
- Sitemap y robots.txt incluidos
- Etiquetas accesibles, contraste alto, navegación simple

## Personalización

1. Sustituye imágenes en `assets/cars/` y `assets/og-cover.jpg`
2. Actualiza datos de `data/vehicles.json` y textos de contacto
3. Ajusta colores en `assets/styles.css`
