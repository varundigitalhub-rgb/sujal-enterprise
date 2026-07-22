# TODO - Product Catalog + Search + Modern Animations

## Plan / Implementation Steps
1. **Add scalable product data model**
   - Extend `js/config.js` to include fully detailed products for dynamic rendering.
   - Keep backward compatibility with existing `config.products` categories.

2. **Create dedicated Product Details pages (dynamic + SEO-friendly)**
   - Add `product.html` (generic renderer) that reads a slug from URL.
   - Create SEO-friendly URLs via Vite input mapping or query-based slug handling.

3. **Update Products page into a true catalog**
   - Replace category-only cards with all products displayed in a responsive grid.
   - Each product card: image, name, short description, `View Product`.

4. **Implement fast client-side search (Home + Products)**
   - Add search UI to `index.html` and `products.html`.
   - Add instant filtering by name/category/keywords/description.
   - Show friendly empty state + suggestions.

5. **Modern performance-friendly animations**
   - Add scroll reveal + fade/slide using IntersectionObserver (already partly present).
   - Add button/card hover micro-animations in CSS (already partly present).
   - Add smooth page transitions + lightweight loading animations.
   - Add animated counters on Home (already partly present) using `prefers-reduced-motion`.
   - Add animated gallery/product grid filtering transitions.
   - Add animated mobile menu transitions.

6. **Wire product inquiry form + WhatsApp from Product Details**
   - Prefill inquiry category/product fields based on slug.
   - WhatsApp inquiry button uses config business WhatsApp number.

7. **Add related products section + breadcrumb navigation**
   - Related products driven by shared categories/keywords.
   - Breadcrumb uses Home > Products > product name.

8. **Update sitemap/robots (if needed)**
   - Ensure Vite build includes new product pages.

9. **Manual verification checklist**
   - Product rendering, product details, breadcrumb, inquiry form validation/UX.
   - Search accuracy/performance on desktop/tablet/mobile.
   - Animations behave correctly with reduced motion.

