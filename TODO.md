# TODO - Sujal Enterprise (Product Catalog / Search / Animations)

## Catalog + Details (core)
- [ ] Extend `js/config.js` with a detailed, scalable per-product dataset (slug, images gallery, full description, specifications, sizes/grades, features, applications, material specs, standards, related product IDs).
- [ ] Implement build-time generation for static product detail pages at `/product/<slug>.html`.
- [ ] Add `product.html` entry renderer (template) that reads the slug and renders the full details including breadcrumb, related products, and inquiry/WhatsApp.
- [ ] Implement `products.html` catalog grid: product cards with image, name, short description, and “View Product”.


## Search (fast client-side)
- [ ] Add search box on `index.html` (Home) and on `products.html` (top).
- [ ] Implement instant filtering by name, category, keywords, and description using config-driven dataset.
- [ ] Add friendly empty state + suggestions.

## Modern animations (lightweight)
- [ ] Ensure scroll reveal for key sections is consistent sitewide.

- [ ] Add subtle hover animations for cards/buttons/nav items.
- [ ] Add smooth page transition + lightweight loader.
- [ ] Add animated counters on Home (already present; ensure premium timing + reduced-motion support).
- [ ] Add gallery/product grid filtering transitions.
- [ ] Add animated mobile menu transitions.

## Final verification
- [ ] Products render correctly from config.
- [ ] Product details page loads correct slug content, has breadcrumb + related products.
- [ ] Search works on desktop/tablet/mobile.
- [ ] Animations respect `prefers-reduced-motion`.

