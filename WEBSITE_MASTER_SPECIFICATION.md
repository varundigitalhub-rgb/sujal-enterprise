# Sujal Enterprise — Website Master Specification

> **Author:** Lead Frontend Architect
> **Date:** 2026-07-30
> **Version:** 1.0
> **Status:** Final Draft

---

## Table of Contents

1. Project Vision
2. Business Goals
3. Target Users
4. Design Philosophy
5. Navigation Structure
6. Page Hierarchy
7. Section Order (Per Page)
8. Design System
9. Typography
10. Colors
11. Spacing
12. Buttons
13. Cards
14. Animations
15. Icons
16. Responsive Strategy
17. SEO Plan
18. Accessibility Plan
19. Performance Plan
20. Component Library
21. Reusable Components
22. Product Page Structure
23. Material Page Structure
24. Contact Page Structure
25. Footer Structure
26. Coding Standards
27. Existing Project Strengths
28. Existing Project Weaknesses
29. Risks
30. Development Phases
31. Recommended Implementation Order

---

## 1. Project Vision

### Elevator Pitch

Sujal Enterprise is a Mumbai-based ISO 9001, 45001 & PED certified manufacturer, supplier, exporter, and stockist of Stainless Steel (SS), Mild Steel (MS), and GI Fittings. The website must communicate trust, industrial authority, premium quality, and global reach while serving as a high-conversion lead generation engine.

### Vision Statement

To build a digital presence that positions Sujal Enterprise as the most trusted industrial supply partner in India — combining the credibility of ISO certifications with the convenience of modern e-commerce browsing, instant inquiry, and WhatsApp-based sales.

### Tone of Voice

- **Professional** — industrial authority without jargon overload
- **Trustworthy** — certifications, specifications, traceability front and center
- **Approachable** — easy inquiry, WhatsApp connect, responsive service
- **Global** — export-ready, serving international standards (ASTM, ASME, ANSI)

---

## 2. Business Goals

| Goal | Description |
|------|-------------|
| **Lead Generation** | Convert visitors into inquiries via forms, WhatsApp, and phone calls |
| **Product Discovery** | Let buyers quickly find the right product + material combination |
| **Trust Building** | Display ISO certifications, quality processes, and client industries |
| **SEO Dominance** | Rank for high-intent queries like "SS 304 flanges supplier Mumbai" |
| **Mobile Conversion** | Enable frictionless browsing and inquiry on mobile (primary B2B browsing device in India) |
| **Global Reach** | Present export capabilities, international standards, and country coverage |
| **Performance** | Sub-2s load time, 90+ Lighthouse score |

---

## 3. Target Users

| Persona | Need | Behavior |
|---------|------|----------|
| **Procurement Manager** (EPC/Industrial) | Find certified products with spec sheets, compare grades, request bulk quotes | Desktop, searches by grade/standard, downloads specs |
| **Wholesale Trader** (Bharat Lokhand Bazaar) | Check stock availability, call/WhatsApp directly, fast reordering | Mobile-first, uses WhatsApp, minimal form filling |
| **Project Engineer** (Construction/Infrastructure) | Verify material suitability, check certifications, request samples | Searches by application/industry, reads technical details |
| **International Buyer** (Export) | Evaluate standards compliance (ASTM/ASME), request CFR/CIF quotes | Email inquiries, checks country coverage, downloads company profile |
| **Small Fabricator** (Local) | Quick purchases of standard sizes, competitive pricing, nearby delivery | Mobile, calls directly, visits shop at Bharat Lokhand Bazaar |

---

## 4. Design Philosophy

### Principles

1. **Industrial Premium** — Clean lines, dark/steel accents, generous whitespace, subtle micro-interactions. Think "Apple meets heavy industry."
2. **Data-Driven Layout** — Every section on every page is populated from a single `config.js` source of truth. Zero hardcoded content.
3. **Progressive Disclosure** — Present the essential first; reveal specifications, grades, and technical details on demand.
4. **Conversion-First** — Every page is a landing page. Every page has a clear CTA: inquire, call, WhatsApp, or email.
5. **Mobile-First B2B** — The primary conversion path on mobile is WhatsApp. The UI must make WhatsApp access effortless.

### What We Preserve (from reference)

- Complete page inventory (11 pages + 2 detail templates)
- Navigation structure (products dropdown, materials dropdown, search)
- Business hierarchy (products → materials → industries → quality)
- Config-driven architecture
- Dynamic routing via vite.config.js
- Web3Forms integration pattern

### What We Elevate

- Visual design (modern, premium, consistent)
- Typography (larger, more readable, proper hierarchy)
- Color usage (intentional, accessible, branded)
- Spacing (generous, consistent 8px grid)
- Animations (subtle, purposeful, performant)
- Image quality (proper gallery, lightbox, lazy loading)
- Form UX (inline validation, smart defaults, loading states)
- Mobile navigation (bottom bar, sticky CTA, gesture-friendly)

---

## 5. Navigation Structure

### Primary Navigation (Desktop)

```
[LOGO]          Home | About | Products ▼ | Materials ▼ | Industries | Gallery | Quality | Contact | 🔍
```

- Logo: Left-aligned, links to `/`
- Products Dropdown: Lists all 8 products from `config.products[]`
- Materials Dropdown: Lists all 4 materials from `config.materials[]`
- Active page highlighted with accent underline/indicator
- Search opens a full-screen overlay with live results

### Primary Navigation (Mobile)

```
[☰ HAMBURGER]  [LOGO centered]  [🔍]  [💬 WhatsApp]
```

- Slide-in drawer from left with full menu tree
- Products and Materials as expandable accordion submenus
- Sticky WhatsApp icon bottom-right
- Search icon top-right opens overlay

### Secondary Navigation

- Breadcrumbs on every subpage (Home > Products > Flanges)
- Sidebar on detail pages (product.html, material.html) with:
  - Category navigation
  - Materials list
  - Quick inquiry form
  - CTA buttons (Call, WhatsApp, Email)

### Utility Navigation (Footer)

- Quick Links: Home, About, Products, Materials, Industries, Gallery, Quality, Contact
- Our Products: Dynamic list from `config.products[]` (up to 6)
- Contact Info: Address, phones, email, WhatsApp
- Social Links: From `config.business.social`

---

## 6. Page Hierarchy

```
Level 0: Homepage (/)                              [Lead generation hub]
Level 1: About (/about-us.html)                    [Company story + trust]
Level 1: Products (/products.html)                 [Product catalog + search]
Level 1: Materials (/materials.html)               [Material catalog + search]
Level 1: Industries (/industries-served.html)      [Market reach + credibility]
Level 1: Gallery (/gallery.html)                   [Visual proof + inventory]
Level 1: Quality (/certifications-quality.html)    [Trust + certifications]
Level 1: Contact (/contact-us.html)                [All contact channels]
Level 1: Services (/services.html)                 [Custom services offering]
Level 2: Product Detail (/products/:slug/)         [Full product page]
Level 2: Material Detail (/materials/:slug/)       [Full material page]
```

### Dynamic Routes (generated at build time by vite.config.js)

```
Products: /products/flanges/, /products/round-bar/, /products/pipes/,
          /products/sheets/, /products/plates/, /products/buttweld-fittings/,
          /products/forged-fittings/, /products/channel-angle/

Materials: /materials/mild-steel/, /materials/stainless-steel/,
           /materials/alloy-steel/, /materials/ibr/
```

---

## 7. Section Order (Per Page)

### Homepage (/)

```
1.  Header (injected)                      — Dynamic header + navigation
2.  Hero Slider                            — 3-5 slides (config-driven)
3.  Stats Counter                          — Years, products, clients, countries
4.  About / Who We Are                    — Company intro + certifications
5.  Featured Products                      — 3-6 product category cards (config-driven)
6.  Why Choose Us                          — 4 feature cards (config-driven)
7.  Materials Overview                     — Material category preview
8.  Industries Served                      — 4 industry cards
9.  CTA Banner                             — Call-to-action + WhatsApp
10. Contact Section                        — Address, map, quick contact
11. Footer (injected)                      — Dynamic footer
```

### Products Page (/products.html)

```
1.  Header (injected)
2.  Page Hero + Breadcrumbs               — Title + breadcrumb
3.  Search + Filter Bar                   — Search input + category filters
4.  Product Grid (dynamic cards)           — Config-driven, searchable, filterable
5.  CTA Banner                             — Inquiry / WhatsApp
6.  Footer (injected)
```

### Product Detail Page (/products/:slug/)

```
1.  Header (injected)
2.  Loading State                          — Spinner while data loads
3.  [70% Left] Hero section               — Title, breadcrumb, badge, CTA buttons
4.  [70% Left] Product Overview           — Description
5.  [70% Left] Gallery (main + thumbs)    — Images with lightbox
6.  [70% Left] Specifications Table       — Searchable, copyable
7.  [70% Left] Standards & Grades         — Chips/tags
8.  [70% Left] Applications               — Icon cards
9.  [70% Left] Available Materials        — Dynamic material chips + links
10. [70% Left] Sizes & Dimensions         — Size chart
11. [70% Left] Top Selling Variants       — Popular SKUs
12. [70% Left] Pricing & Delivery         — Info cards
13. [70% Left] FAQ Accordion              — Schema marked up
14. [70% Left] Related Products           — Dynamic cards
15. [70% Left] CTA Banner                 — Product-specific CTA
16. [70% Left] Inquiry Form              — Full inquiry form
17. [30% Right] Sidebar                  — Navigation, materials, quick inquiry, CTAs
18. Footer (injected)
```

### Materials Page (/materials.html)

```
1.  Header (injected)
2.  Page Hero + Breadcrumbs
3.  Search + Filter
4.  Material Grid (dynamic cards)
5.  Inquiry Section                       — Material-specific inquiry form
6.  CTA Banner
7.  Footer (injected)
```

### Material Detail Page (/materials/:slug/)

```
(Same 70/30 layout as product detail)
1.  Header (injected)
2.  Loading State
3.  [70%] Hero + Breadcrumbs + CTA
4.  [70%] Overview
5.  [70%] Gallery + Lightbox
6.  [70%] Specifications Table
7.  [70%] Grades
8.  [70%] Applications
9.  [70%] Industries Served
10. [70%] Products Available in This Material
11. [70%] Packaging
12. [70%] Cities Supplied / Countries Exported
13. [70%] FAQ
14. [70%] Related Materials
15. [70%] CTA Banner
16. [70%] Inquiry Form
17. [30%] Sidebar
18. Footer (injected)
```

### About Page (/about-us.html)

```
1.  Header (injected)
2.  Page Hero + Breadcrumbs
3.  Company Story
4.  Mission + Vision
5.  Certifications Strip
6.  Infrastructure / Warehouse
7.  Team / Leadership
8.  Why Choose Us
9.  CTA Banner
10. Footer (injected)
```

### Industries Served (/industries-served.html)

```
1.  Header (injected)
2.  Page Hero + Breadcrumbs
3.  Industries Grid (icon cards with descriptions)
4.  Inquiry Section
5.  CTA Banner
6.  Footer (injected)
```

### Gallery (/gallery.html)

```
1.  Header (injected)
2.  Page Hero + Breadcrumbs
3.  Filter Tabs
4.  Gallery Grid (lazy-loaded images, lightbox)
5.  CTA Banner
6.  Footer (injected)
```

### Quality Page (/certifications-quality.html)

```
1.  Header (injected)
2.  Page Hero + Breadcrumbs
3.  Certification Cards (ISO 9001, 45001, PED)
4.  Quality Process (step-by-step)
5.  Testing & Inspection
6.  CTA Banner
7.  Footer (injected)
```

### Contact Page (/contact-us.html)

```
1.  Header (injected)
2.  Page Hero + Breadcrumbs
3.  Contact Info Cards (address, phone, email, hours)
4.  Inquiry Form
5.  Map Embed
6.  Social Links
7.  CTA Banner
8.  Footer (injected)
```

### Services Page (/services.html)

```
1.  Header (injected)
2.  Page Hero + Breadcrumbs
3.  Service Cards
4.  Process/How It Works
5.  Inquiry Section
6.  CTA Banner
7.  Footer (injected)
```

---

## 8. Design System

### Grid System

- **12-column flexbox grid** (not CSS Grid framework — keep lightweight)
- Max container width: **1280px**
- Nested columns: 2-col, 3-col, 4-col via modifier classes
- Gutters: 24px (desktop), 16px (tablet), 12px (mobile)

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Badges, chips, tags |
| `--radius-md` | 8px | Cards, buttons, inputs |
| `--radius-lg` | 12px | Modals, containers |
| `--radius-xl` | 16px | Hero sections, CTAs |
| `--radius-full` | 9999px | Avatars, pills |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Cards resting |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1)` | Elevated cards |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.15)` | Hero overlays |

### Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | 150ms ease | Color changes, hovers |
| `--transition-base` | 250ms ease | Most interactions |
| `--transition-slow` | 400ms ease | Modals, page transitions |

---

## 9. Typography

### Font Family

- **Primary:** `Inter` (sans-serif) — clean, modern, excellent legibility at all sizes
- **Monospace:** `JetBrains Mono` or `SF Mono` — for specifications, codes, technical data
- **Fallback:** `system-ui, -apple-system, sans-serif`

### Type Scale

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | Usage |
|-------|---------------|---------------|--------|-------------|-------|
| Hero/H1 | 56px | 32px | 700 | 1.1 | Page hero titles |
| H2 | 40px | 28px | 700 | 1.2 | Section headings |
| H3 | 28px | 22px | 600 | 1.3 | Card titles, subsection heads |
| H4 | 20px | 18px | 600 | 1.4 | Feature card titles |
| Body Large | 18px | 16px | 400 | 1.6 | Lead paragraphs |
| Body | 16px | 15px | 400 | 1.6 | Default body text |
| Body Small | 14px | 13px | 400 | 1.5 | Metadata, captions |
| Label | 13px | 12px | 600 | 1.4 | Form labels, badges |
| Tiny | 11px | 11px | 500 | 1.3 | Tags, chips |

### Letter Spacing

- Headings (H1-H3): `-0.02em`
- Body: `0em`
- Labels: `0.02em`
- All-caps (badges): `0.05em`

---

## 10. Colors

### Brand Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#1a3a5c` | Deep navy — primary brand color, headers, hero backgrounds |
| `--primary-light` | `#2a5a8c` | Lighter navy — hover states, active nav |
| `--primary-dark` | `#0f2440` | Darkest navy — footer, overlays |
| `--accent` | `#c89b3c` | Gold — CTAs, highlights, badges, active indicators |
| `--accent-light` | `#e0b85c` | Light gold — hover on accent elements |
| `--accent-dark` | `#a67c28` | Dark gold — active states |

### Neutral Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--white` | `#ffffff` | Backgrounds, cards |
| `--gray-50` | `#f8f9fa` | Page backgrounds |
| `--gray-100` | `#f1f3f5` | Card backgrounds, section alternates |
| `--gray-200` | `#e9ecef` | Borders, dividers |
| `--gray-300` | `#dee2e6` | Disabled inputs, subtle borders |
| `--gray-400` | `#ced4da` | Placeholder text |
| `--gray-500` | `#adb5bd` | Muted text |
| `--gray-600` | `#6c757d` | Secondary text |
| `--gray-700` | `#495057` | Body text |
| `--gray-800` | `#343a40` | Strong text |
| `--gray-900` | `#212529` | Headings |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#10b981` | Success messages, checkmarks |
| `--warning` | `#f59e0b` | Warnings, form alerts |
| `--error` | `#ef4444` | Errors, validation |
| `--info` | `#3b82f6` | Information badges |
| `--whatsapp` | `#25D366` | WhatsApp button (preserve brand green) |

### Surface Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--surface` | `#ffffff` | Default card/container background |
| `--surface-alt` | `#f8f9fa` | Alternate section background |
| `--surface-dark` | `#1a3a5c` | Dark section backgrounds |
| `--surface-gradient` | `linear-gradient(135deg, #1a3a5c, #0f2440)` | Hero sections |

---

## 11. Spacing

Based on an **8px grid** system.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tiny gaps |
| `--space-2` | 8px | Icon spacing, chip gaps |
| `--space-3` | 12px | Form field gaps |
| `--space-4` | 16px | Card padding (mobile), button padding |
| `--space-5` | 24px | Card padding (desktop), grid gaps |
| `--space-6` | 32px | Section padding (mobile) |
| `--space-7` | 48px | Section padding (desktop) |
| `--space-8` | 64px | Large section spacing |
| `--space-9` | 96px | Hero/CTA spacing |
| `--space-10` | 128px | Page section spacing |

### Container Max-Widths

| Breakpoint | Container |
|------------|-----------|
| Desktop (1280px+) | 1280px |
| Laptop (1024px) | 1024px |
| Tablet (768px) | 100% (pad 24px) |
| Mobile (<640px) | 100% (pad 16px) |

---

## 12. Buttons

### Primary Button

```css
.btn-primary {
  background: var(--accent);
  color: var(--white);
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  border: none;
  transition: all 250ms ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-primary:hover {
  background: var(--accent-light);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(200, 155, 60, 0.3);
}
```

### Secondary Button

```css
.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 10px 26px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  transition: all 250ms ease;
}
.btn-secondary:hover {
  background: var(--primary);
  color: var(--white);
}
```

### Dark Button

```css
.btn-dark {
  background: var(--gray-900);
  color: var(--white);
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 250ms ease;
}
.btn-dark:hover {
  background: var(--primary);
}
```

### WhatsApp Button

```css
.btn-whatsapp {
  background: #25D366;
  color: white;
  /* Same structure as primary but with WhatsApp green */
}
```

### Button Sizes

| Size | Padding | Font Size |
|------|---------|-----------|
| `btn-sm` | 8px 16px | 13px |
| `btn-md` | 12px 28px | 15px |
| `btn-lg` | 16px 36px | 17px |
| `btn-block` | Full width | — |

### Icon Buttons (Floating WhatsApp)

```css
.floating-wa {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25D366;
  color: white;
  font-size: 28px;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
  z-index: 999;
  transition: transform 250ms ease;
}
.floating-wa:hover {
  transform: scale(1.1);
}
```

---

## 13. Cards

### Product/Material Card

```
┌─────────────────────────────┐
│ ┌─────────────────────────┐ │
│ │       PRODUCT IMG       │ │
│ │      (16:9, cover)      │ │
│ └─────────────────────────┘ │
│                             │
│  Product Title (H3)         │
│  Short description (2 lines)│
│                             │
│  [Tag] [Tag] [Tag]          │
│                             │
│  View Product →             │
└─────────────────────────────┘
```

- Border radius: 12px
- Overflow hidden
- Image zoom on hover (scale 1.05)
- Subtle shadow on hover (shadow-lg)
- Transition: 250ms ease

### Feature Card (Why Choose Us)

```
┌─────────────────────────┐
│ ┌───┐                   │
│ │ 🏆 │  Title (H4)       │
│ └───┘                   │
│                         │
│ Description text (body)  │
└─────────────────────────┘
```

- Icon in circle background (40px)
- No border, subtle shadow
- Equal height via flex

### Industry Card

```
┌─────────────────────────────┐
│                             │
│     Background image/icon   │
│                             │
│ ──── Overlay ────────────── │
│   Industry Name (H3)        │
│   Description               │
└─────────────────────────────┘
```

- 3:2 aspect ratio
- Dark overlay (gradient from bottom)
- Icon or image background
- Hover: overlay lifts, more details revealed

### Gallery Card

```
┌─────────────────────────────┐
│                             │
│         Image (4:3)         │
│                             │
│ ──── Overlay ────────────── │
│   Caption                   │
│   Category badge            │
└─────────────────────────────┘
```

- Lazy loaded
- Click opens lightbox
- Hover: zoom effect on image

---

## 14. Animations

### Scroll Reveal

- Elements animate in on scroll using IntersectionObserver
- Variants:
  - `fade-up` — translateY(30px) → translateY(0), opacity 0→1
  - `fade-left` / `fade-right` — horizontal entrance
  - `scale-in` — scale(0.95) → scale(1)
- Stagger: children animate with 50-100ms delay between each
- Duration: 500-700ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1) — "powerful ease-out"

### Micro-interactions

- Button hover: translateY(-1px), shadow increase
- Card hover: shadow-lg, image scale(1.05)
- Nav link hover: underline from center
- Accordion FAQ: max-height transition on answer reveal
- Form input focus: border-color transition, subtle glow
- Loading spinner: infinite rotation

### Page Transitions

- Page entrance: fade-up on main content
- Route changes (SPA-like): subtle cross-fade if implemented

---

## 15. Icons

### Icon Library

- **Font Awesome 6** (free) — current library, keep it
- Usage pattern: `<i class="fa fa-icon-name"></i>`
- All icons in config must use Font Awesome class names

### Icon Sizing

| Context | Size |
|---------|------|
| Navigation | 16px |
| Feature cards | 32px |
| Application cards | 28px |
| Section headers | 24px |
| Hero badges | 20px |
| Floating CTA | 28px |
| Social links | 18px |

### Custom Icons (If Needed)

- No custom SVGs currently
- If adding: use inline SVGs, not external files
- Keep all icons in config.js for consistency

---

## 16. Responsive Strategy

### Breakpoints

| Name | Min Width | Target |
|------|-----------|--------|
| Mobile | 0-639px | Phones |
| Tablet | 640-1023px | Tablets, small laptops |
| Laptop | 1024-1279px | Standard laptops |
| Desktop | 1280px+ | Large screens |

### Layout Shifts

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navigation | Hamburger drawer | Hamburger drawer | Full horizontal |
| Hero | Single column, stacked | Side-by-side text + image | Full width with overlay |
| Grid (cards) | 1 column | 2 columns | 3-4 columns |
| Detail pages | Single column (100%) | 70/30 layout | 70/30 layout |
| Footer | Stacked columns | 2 rows × 2 cols | 4 columns side-by-side |
| Sidebar | Below content | Right column (sticky) | Right column (sticky) |
| Forms | Full width | 2-column row for name/email | 2-column row |

### Mobile-First Patterns

- **Bottom CTA bar** — sticky bar on mobile with "Call Now" and "WhatsApp"
- **Floating WhatsApp** — always visible, bottom-right
- **Full-width tap targets** — minimum 44px height for all interactive elements
- **No horizontal scroll** — ever. Every element must be inside viewport.
- **Font scaling** — use `clamp()` for fluid typography

### Responsive Images

- Use `srcset` and `sizes` for gallery images if performance is critical
- Fall back to single image with loading="lazy"
- max-width: 100% on all images

---

## 17. SEO Plan

### On-Page SEO (Every Page)

| Element | Requirement |
|---------|-------------|
| Title Tag | Unique, includes target keyword + brand name, 50-60 chars |
| Meta Description | Unique, compelling, includes CTA, 150-160 chars |
| H1 | Exactly one per page, matches page topic |
| H2-H3 | Logical hierarchy, includes secondary keywords |
| Alt Text | Every image has descriptive alt text (from config) |
| Canonical URL | Self-referencing, no trailing slash inconsistencies |
| Open Graph | title, description, image, url, type |
| Twitter Card | summary_large_image with same OG data |
| JSON-LD Breadcrumb | On every subpage |
| JSON-LD FAQ | On product/material detail pages with FAQ |
| JSON-LD LocalBusiness | On homepage only |

### JSON-LD Schemas

**LocalBusiness (Homepage)**

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sujal Enterprise",
  "image": "https://sujalenterprise.com/images/logo/...",
  "telephone": "+91 8369167479",
  "email": "sujalenterprise01@gmail.com",
  "address": { ... },
  "geo": { ... },
  "aggregateRating": { ... },
  "openingHours": "Mo-Sa 09:00-18:00"
}
```

**BreadcrumbList (All Subpages)**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sujalenterprise.com/" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://sujalenterprise.com/products.html" },
    { "@type": "ListItem", "position": 3, "name": "Flanges", "item": "https://sujalenterprise.com/products/flanges/" }
  ]
}
```

**FAQPage (Product/Material Detail Pages)**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What grades are available?", "acceptedAnswer": { "@type": "Answer", "text": "..." } }
  ]
}
```

### Technical SEO

- Sitemap.xml — all 22+ URLs, auto-regenerated from config
- Robots.txt — allow all, sitemap reference
- Responsive meta tag — `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- No duplicate content — canonical on every page
- Clean URLs — `/products/flanges/` not `/product.html?slug=flanges`
- HTTP→HTTPS — enforce via host config (not in code)
- Page speed — target <2s FCP, <3s LCP

---

## 18. Accessibility Plan

### Compliance Target

- **WCAG 2.1 AA** minimum

### Color & Contrast

- All text must have 4.5:1 contrast ratio against background (AA normal text)
- Large text (18px+ bold or 24px+ regular) must have 3:1 contrast
- Focus indicators: visible 2px outline on all interactive elements
- Color never used as the sole differentiator

### Keyboard Navigation

- All interactive elements focusable and activatable via keyboard
- Tab order follows visual order (DOM order)
- Skip to content link at top of page
- Dropdown menus open on Enter/Space, close on Escape
- Mobile menu closes on Escape or overlay click

### Screen Readers

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- ARIA labels on icon-only buttons (e.g., `aria-label="Search"`)
- Form inputs have associated `<label>` elements
- Error messages linked to inputs via `aria-describedby`
- Dynamic content changes announced via `aria-live` regions
- Images have meaningful `alt` text (never empty unless decorative)

### Forms

- Required fields marked with `required` attribute + `aria-required="true"`
- Validation errors shown inline, connected via `aria-describedby`
- Success/error messages after submission are focusable
- Submit button disabled during submission (prevents double submit)

---

## 19. Performance Plan

### Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | <1.5s |
| Largest Contentful Paint (LCP) | <2.5s |
| First Input Delay (FID) | <100ms |
| Cumulative Layout Shift (CLS) | <0.1 |
| Lighthouse Performance | 90+ |
| Total Page Weight | <500KB (HTML + CSS + JS, excluding images) |

### Strategies

| Area | Strategy |
|------|----------|
| **CSS** | Single style.css, purged of unused rules. Target <50KB gzipped |
| **JS** | Tree-shaken by Vite. Dynamic imports for non-critical modules. Target <40KB gzipped |
| **Images** | WebP format where possible. Lazy loading below the fold |
| **Fonts** | Inter from Google Fonts with `display=swap`. Preconnect to fonts.gstatic.com |
| **Icons** | Font Awesome subset (only used icons). Or swap to inline SVG sprite |
| **HTML** | Vite minifies. Inline critical CSS in `<head>` |
| **Caching** | Far-future Cache-Control for assets (1 year). HTML: no-cache |
| **Preload** | Preload hero image. Preconnect to CDN origins |
| **Bundle** | Vite code-splitting. Separate vendor chunks |

### Build Optimization

- `vite build` with rollupOptions for manual chunks:
  - `app.js` (all dynamic rendering + config)
  - `vendor.js` (Font Awesome, third-party)
- CSS extraction and minification
- Image optimization during build (via vite-imagetools plugin, if added)

---

## 20. Component Library

All reusable components, their props/data sources, and render targets.

| Component | Data Source | Renders In | Notes |
|-----------|-------------|------------|-------|
| `Header` | config.business | All pages (injected) | Logo, nav, search, CTAs |
| `Footer` | config.business + config.products | All pages (injected) | Links, social, copyright |
| `FloatingWidgets` | config.business.whatsapp, phones | All pages | WhatsApp + scroll-to-top |
| `HeroSlider` | config.heroSlides[] | index.html | 3-5 slides, auto-play |
| `StatsCounter` | config.stats[] | index.html | Animated counters |
| `WhyChooseUsCards` | config.whyChooseUs[] | index.html, about-us.html | 4 feature cards |
| `FeaturedProducts` | config.products[] | index.html | 3-6 category cards |
| `MaterialsOverview` | config.materials[] | index.html | 4 material cards |
| `IndustriesGrid` | config.products[].applications | index.html, industries-served.html | Industry cards |
| `ProductCard` | config.productDetails[] | products.html | Searchable, filterable |
| `ProductDetail` | config.productDetails[slug] | product.html | Full 70/30 layout |
| `MaterialCard` | config.materialDetails[] | materials.html | Searchable |
| `MaterialDetail` | config.materialDetails[slug] | material.html | Full 70/30 layout |
| `GalleryGrid` | config.gallery[] | gallery.html | Filterable, lightbox |
| `SpecsTable` | product.specifications[] | product.html | Searchable, copyable |
| `FAQAccordion` | product.faqs[] or material.faqs[] | product.html, material.html | Schema marked |
| `RelatedProducts` | product.relatedProducts[] | product.html | Dynamic cards |
| `RelatedMaterials` | material.relatedMaterials[] | material.html | Dynamic cards |
| `InquiryForm` | config.business | All pages | Web3Forms integration |
| `Sidebar` | config.materials[] + config.products[] | product.html, material.html | Nav + quick inquiry |
| `Breadcrumbs` | Page path | All subpages | JSON-LD generated |
| `CTABanner` | config.business | All pages | Phone + WhatsApp CTAs |

---

## 21. Reusable Components (Detailed)

### Card Components

All cards share a base `.card` class with variants:

- `.product-card` — image, title, description, tags, CTA
- `.material-card` — same as product-card but for materials
- `.feature-card` — icon, title, description (no image)
- `.industry-card` — icon/image, overlay title, description
- `.gallery-card` — image, overlay caption, category badge
- `.testimonial-card` — (future) quote, author, company

### Form Components

- `.inquiry-card-modern` — split layout panel (info left, form right)
- Standard form controls with `.form-group`, `.form-label`, `.form-control`
- Validation states: `.invalid` (red border), `.success-message` (green banner)
- Buttons: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-dark`, `.btn-whatsapp`, `.btn-sm/md/lg/block`

### Navigation Components

- `.main-nav` — desktop horizontal nav with dropdowns
- `.mobile-nav` — slide-in drawer with accordion submenus
- `.breadcrumbs` — breadcrumb trail with chevron separators
- `.sidebar` — sticky sidebar with links, materials, CTA
- `.pagination` — (future) for product/material list pagination

### Layout Components

- `.container` — max-width centered wrapper
- `.grid-2/3/4` — flexbox-based column grids
- `.pd-main-layout` — 70/30 split layout for detail pages
- `.page-header` — hero banner for subpages

---

## 22. Product Page Structure

### Data Source

All product data comes from `config.productDetails[]`. Each product has:

```js
{
  slug: "flanges",
  title: "Flanges",
  shortDescription: "...",
  longDescription: "...",
  metaTitle: "...",
  metaDescription: "...",
  keywords: [...],
  category: "pipe-fittings",
  specifications: [{ label, value }],
  standards: [...],
  grades: [...],
  applications: [{ icon, name, description }],
  availableMaterials: [{ name, slug }],
  sizes: [{ label, value }],
  topSelling: [{ name, shortDesc }],
  pricingDelivery: [{ icon, title, text }],
  faqs: [{ question, answer }],
  relatedProducts: [...],
  galleryImages: [...]
}
```

### Render Order (70% Left Column)

1. **Hero** — breadcrumb, category badge, H1 title, short description, CTA buttons (Call + WhatsApp)
2. **Overview** — long description paragraph
3. **Gallery** — main image + thumbnail strip + navigation arrows + zoom/lightbox
4. **Specifications Table** — searchable, copyable, with empty state
5. **Standards & Grades** — tag chips
6. **Applications** — icon cards grid
7. **Available Materials** — linked chips to material detail pages
8. **Sizes & Dimensions** — table or chip list
9. **Top Selling Variants** — mini cards
10. **Pricing & Delivery** — info cards
11. **FAQ** — accordion with JSON-LD
12. **Related Products** — horizontal card scroll
13. **CTA Banner** — product-specific call to action
14. **Inquiry Form** — full form with product name pre-filled

### Render Order (30% Right Sidebar)

1. **Navigation** — links to all product categories
2. **Materials** — links to all materials available
3. **Quick Inquiry** — minimal form (name, email, phone, message)
4. **Contact CTAs** — Call, WhatsApp, Email buttons

### Edge Cases

- **Missing gallery images** → Show placeholder with product icon
- **No related products** → Hide section entirely
- **No specifications** → Hide table, show message
- **Invalid slug** → Show "Product not found" with link back to catalog
- **Loading state** → Spinner while data loads from config

---

## 23. Material Page Structure

### Data Source

All material data comes from `config.materialDetails[]`. Each material has:

```js
{
  slug: "mild-steel",
  name: "Mild Steel",
  shortDescription: "...",
  longDescription: "...",
  metaTitle: "...",
  metaDescription: "...",
  keywords: [...],
  specifications: [{ label, value }],
  grades: [...],
  applications: [{ icon, name, description }],
  industries: [...],
  products: ["flanges", "pipes", ...],  // slugs referencing productDetails
  packaging: [{ icon, title, text }],
  faqs: [{ question, answer }],
  relatedMaterials: [...],
  citiesSupplied: [...],
  countriesExported: [{ name, highlight }],
  galleryImages: [...]
}
```

### Render Order (70% Left Column)

1. **Hero** — breadcrumb, material badge, H1 name, short description, CTA buttons
2. **Overview** — long description
3. **Gallery** — same as product gallery
4. **Specifications Table** — searchable, copyable
5. **Grades** — tag chips
6. **Applications** — icon cards grid
7. **Industries Served** — tag chips
8. **Products Using This Material** — product cards with links
9. **Packaging** — info cards
10. **Cities Supplied** — tag chips
11. **Countries Exported** — cards with highlight for key markets
12. **FAQ** — accordion with JSON-LD
13. **Related Materials** — horizontal card scroll
14. **CTA Banner** — material-specific
15. **Inquiry Form** — full form with material name pre-filled

### Render Order (30% Right Sidebar)

1. **Materials Navigation** — links to all materials
2. **Products in This Material** — links to related products
3. **Quick Inquiry** — minimal form
4. **Contact CTAs** — Call, WhatsApp, Email

### Product ↔ Material Cross-Linking

- **On product detail:** "Available Materials" section shows materials where `material.products.includes(product.slug)`. Each chip links to `/materials/{slug}/`.
- **On material detail:** "Products Using This Material" section shows products that match `material.products[]`. Each card links to `/products/{slug}/`.

---

## 24. Contact Page Structure

### Sections (in order)

1. **Page Hero** — breadcrumbs, H1 "Contact Us", subtitle
2. **Contact Info Cards** (2x2 grid):
   - **Address** — full address with map link
   - **Phone** — both numbers with click-to-call
   - **Email** — with mailto link
   - **Business Hours** — Mon-Sat 9:00-18:00
3. **Inquiry Form** — split panel (info left, form right):
   - **Left panel:** Icon, heading, description, contact chips (Call, WhatsApp, Email)
   - **Right panel:** Form fields (name, company, email, phone, country, subject, message)
4. **Google Maps Embed** — full-width map
5. **Social Links** — row of social media icons
6. **CTA Banner** — final call to action

### Form Validation

- Required: name, email, phone, message
- Email: regex validation
- Phone: Indian/international format, 10+ digits
- Show inline error below each field
- Success: green banner with checkmark
- Error: red banner with message
- Web3Forms fallback: if key is placeholder, show warning instead

---

## 25. Footer Structure

### Column Layout (Desktop: 4 columns)

**Column 1: Brand**
- Logo
- Short description (config.business.description)
- Social links (from config.business.social)

**Column 2: Quick Links**
- Home, About, Products, Materials, Industries, Gallery, Quality, Contact

**Column 3: Our Products**
- Dynamic list from config.products[] (first 6)
- Each links to /products.html#{slug}

**Column 4: Contact Info**
- Address (with map link)
- Phone numbers (click-to-call)
- Email (mailto)
- WhatsApp link

### Bottom Bar

- Copyright: `© {currentYear} {businessName}. All Rights Reserved.`
- Dynamic year via JS

### Mobile (stacked, 2 columns then 1 column)

- Brand takes full width
- Quick Links + Products (2 columns)
- Contact Info (full width)
- Bottom bar (full width)

---

## 26. Coding Standards

### General

- **Language:** ES modules (import/export)
- **No TypeScript** — keep vanilla JS for simplicity
- **No frameworks** — vanilla HTML/CSS/JS + Vite for build tooling
- **No jQuery** — native DOM APIs only
- **Single config source** — all business data in `js/config.js`
- **Zero hardcoded content** — every text, link, image comes from config

### JavaScript

| Rule | Standard |
|------|----------|
| Format | Prettier (single quotes, 2-space indent, no semicolons) |
| Naming | camelCase for functions and variables, PascalCase for config sections |
| Functions | Named functions (not arrow) for top-level, arrow for callbacks |
| DOM queries | `const el = document.getElementById('id')` for IDs, `querySelector` for classes |
| Event listeners | `addEventListener`, never `onclick` attributes |
| Async | async/await for form submissions, no callbacks |
| Config access | Always via `import { config } from './config.js'` |
| Error handling | try/catch on all async operations, user-friendly messages |

### HTML

| Rule | Standard |
|------|----------|
| DOCTYPE | `<!DOCTYPE html>` |
| Language | `<html lang="en">` |
| Semantic tags | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` |
| IDs | kebab-case, unique per page |
| Classes | kebab-case, BEM-inspired (`.block__element--modifier`) |
| Data attributes | `data-config="key"` for dynamic config binding |
| Forms | Always `<label>` + `<input>` pairing, never placeholder as label |
| Images | Always `alt` text, `loading="lazy"` for below-fold |

### CSS

| Rule | Standard |
|------|----------|
| Organization | Custom properties first, then base, layout, components, utilities |
| Naming | BEM: `.block__element--modifier` |
| Custom properties | `--property-name` on `:root` |
| Selectors | Class-based, avoid IDs for styling, avoid `!important` |
| Units | `rem` for font sizes, `px` for borders, `%` or `vw` for widths |
| Breakpoints | 640px, 1024px, 1280px — min-width based |
| Animations | `prefers-reduced-motion: reduce` respected |

### File Organization

```
/ (root)
├── index.html              # Homepage
├── about-us.html           # About page
├── products.html           # Product catalog
├── product.html            # Product detail template
├── materials.html          # Material catalog
├── material.html           # Material detail template
├── services.html           # Services page
├── industries-served.html  # Industries page
├── certifications-quality.html  # Quality page
├── gallery.html            # Photo gallery
├── contact-us.html         # Contact page
├── style.css               # All styles (consider splitting CSS)
├── vite.config.js          # Build config + route generation
├── js/
│   ├── config.js           # ALL business data (single source of truth)
│   └── app.js              # ALL rendering logic
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── logo/
│       └── products/
├── dist/                   # Build output (gitignored)
└── WEBSITE_MASTER_SPECIFICATION.md  # This document
```

---

## 27. Existing Project Strengths

| # | Strength | Description |
|---|----------|-------------|
| 1 | **Config-driven architecture** | All business data centralized in `config.js` — excellent for maintainability |
| 2 | **Dynamic rendering** | Products, materials, gallery all rendered from config — no hardcoded HTML |
| 3 | **Build-time routing** | Vite plugin generates clean URLs for all products and materials |
| 4 | **Single CSS file** | Easy to manage, no style fragmentation |
| 5 | **ES modules** | Modern JavaScript, tree-shakeable, no global scope pollution |
| 6 | **Header/footer injection** | DRY pattern — nav and footer defined once, injected everywhere |
| 7 | **SEO foundation** | Sitemap, robots.txt, JSON-LD schemas, OG tags already present |
| 8 | **Web3Forms integration** | Form submission ready (just needs API key) |
| 9 | **WhatsApp-first approach** | Floating widgets, WhatsApp CTA everywhere — aligned with Indian B2B behavior |
| 10 | **Full page inventory** | All required pages exist: Home, About, Products, Materials, Industries, Gallery, Quality, Contact, Services |
| 11 | **Product-Material cross-linking** | The `products` array on materials enables dynamic relationships |
| 12 | **Responsive grid** | Flexbox-based grid system adapts across breakpoints |
| 13 | **Lazy loading** | Images use `loading="lazy"` attribute |
| 14 | **Animations (IntersectionObserver)** | ScrollReveal via native API — no library dependency |

---

## 28. Existing Project Weaknesses

| # | Weakness | Impact | Severity |
|---|----------|--------|----------|
| 1 | **Missing critical JS functions** | `populateMaterialsPage()` and `populateMaterialDetailsPage()` were not defined — site would break | CRITICAL |
| 2 | **Hardcoded homepage sections** | Hero, Why Choose Us, Featured Products, Industries were static HTML | HIGH |
| 3 | **Gallery showed icons instead of images** | Config had image paths but JS ignored them | HIGH |
| 4 | **Sidebar materials hardcoded** | Listed non-existent materials ("Carbon Steel", "GI", "Duplex Steel") | HIGH |
| 5 | **Form dropdowns hardcoded** | Material select had static options instead of reading from config | HIGH |
| 6 | **Broken OG image paths** | All pages referenced `/images/meta-share.webp` / `.jpg` — files don't exist | MEDIUM |
| 7 | **Canonical URL incorrect** | Homepage canonical pointed to `/index.html` instead of `/` | MEDIUM |
| 8 | **Footer links broken** | Referenced `#cat-stainless-steel` etc — no matching DOM IDs | MEDIUM |
| 9 | **Missing OG tags on detail templates** | product.html and material.html had no OG meta tags for dynamic updates | MEDIUM |
| 10 | **Empty function** | `getPageVariant()` returned nothing — `data-page` attribute was meaningless | LOW |
| 11 | **Stale year scripts** | 3 pages had duplicate `document.getElementById('year')` code | LOW |
| 12 | **Double form submission** | Generic `initInquiryForms` handled forms that also had specific handlers | LOW |
| 13 | **Outdated sitemap** | Referenced old product slugs, no material URLs | MEDIUM |
| 14 | **CSS size (94KB gzip)** | Likely contains unused rules — needs audit and cleanup | LOW |
| 15 | **Image filenames with spaces** | Some image files have spaces (e.g., `flanges 1.png`) — can cause issues on Linux servers | MEDIUM |
| 16 | **Missing inquiry forms** | Services and Industries pages had no inquiry section | MEDIUM |
| 17 | **Mixed image formats** | JPG, PNG, WebP all used — inconsistent | LOW |
| 18 | **No 404 page** | Missing product/material slug shows spinner, not user-friendly error | LOW |

---

## 29. Risks

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| 1 | **Spaces in image filenames** cause 404 on Linux server | Medium | High | Rename files to use hyphens (e.g., `flanges-1.png`), update config paths |
| 2 | **Web3Forms key not configured** — forms silently fail | High | Medium | Add visual warning in dev mode, test with placeholder detection |
| 3 | **CSS bloat** — 94KB single file is large, may hide dead code | Medium | Medium | Audit with PurgeCSS, split into logical partials if needed |
| 4 | **Vite CJS deprecation warning** — may break in future Vite versions | Low | Medium | Update Vite config to use ESM format |
| 5 | **No TypeScript** — large JS files (1600+ lines) hard to refactor safely | Low | Low | Keep as-is for now; consider TypeScript migration in Phase 2 |
| 6 | **Mixed image optimization** — some images are large JPEGs | Medium | Medium | Add build-time image optimization plugin |
| 7 | **Browser compatibility** — CSS custom properties not supported in IE11 | Low | Low | IE11 not a target for B2B industrial audience in India |
| 8 | **No service worker / offline support** | Low | Low | Not critical for B2B catalog site |

---

## 30. Development Phases

### Phase 1: Foundation (Critical Fixes — DONE)

- ✅ Add missing `populateMaterialsPage()` and `populateMaterialDetailsPage()`
- ✅ Fix gallery to display actual images
- ✅ Fix OG image references, canonical URLs
- ✅ Fix footer links, sidebar materials, form dropdowns
- ✅ Add missing inquiry forms
- ✅ Regenerate sitemap
- ✅ Fix double form submission, empty functions, stale scripts

**Estimated effort: Complete**

### Phase 2: Design System Implementation (4-6 weeks)

| Task | Effort | Dependencies |
|------|--------|-------------|
| Define CSS custom properties (colors, spacing, typography) | 2 days | None |
| Implement typography system (Inter font, type scale) | 1 day | None |
| Implement new color palette | 1 day | Custom properties |
| Build button system (primary, secondary, dark, WA, sizes) | 2 days | Custom properties |
| Build card system (product, feature, industry, gallery) | 3 days | Colors, spacing |
| Implement spacing system (grid, containers, responsive) | 2 days | None |
| Build form system (inputs, selects, validation states) | 2 days | Colors, spacing |
| Build navigation (desktop horizontal, mobile drawer) | 4 days | Buttons, colors |
| Build footer (4-column responsive) | 2 days | Typography, spacing |
| Implement animations (scroll reveal, micro-interactions) | 3 days | IntersectionObserver |
| Build lightbox component | 2 days | Gallery |
| Build FAQ accordion | 1 day | None |

### Phase 3: Page-Level Implementation (4-6 weeks)

| Task | Effort | Dependencies |
|------|--------|-------------|
| Homepage — hero slider, stats, all sections | 5 days | Phase 2 |
| Products page — catalog grid, search, filters | 3 days | Phase 2 |
| Product detail — 70/30 layout, all sections | 5 days | Phase 2 |
| Materials page — catalog grid, search | 2 days | Phase 2 |
| Material detail — 70/30 layout | 4 days | Phase 2 |
| About page — company story, certifications | 2 days | Phase 2 |
| Services page — service cards, process | 2 days | Phase 2 |
| Industries page — industry grid | 1 day | Phase 2 |
| Gallery page — filterable grid, lightbox | 2 days | Phase 2 |
| Quality page — certification showcase | 2 days | Phase 2 |
| Contact page — info cards, form, map | 2 days | Phase 2 |

### Phase 4: SEO & Performance Optimization (2-3 weeks)

| Task | Effort | Dependencies |
|------|--------|-------------|
| Image optimization (WebP conversion, responsive sizes) | 3 days | Phase 3 |
| CSS audit + PurgeCSS | 2 days | Phase 3 |
| JSON-LD schema audit | 2 days | Phase 3 |
| Lighthouse optimization (target 90+) | 3 days | All above |
| Sitemap auto-generation script | 1 day | None |
| Meta tag audit per page | 2 days | Phase 3 |
| Accessibility audit (WAVE, axe) | 3 days | Phase 3 |

### Phase 5: Hardening & Launch (2-3 weeks)

| Task | Effort | Dependencies |
|------|--------|-------------|
| Cross-browser testing | 3 days | Phase 3 |
| Mobile device testing | 3 days | Phase 3 |
| Form end-to-end testing | 2 days | Phase 3 |
| 404 page implementation | 1 day | None |
| Web3Forms key configuration | 1 hour | Client provides key |
| Analytics setup (Google Analytics) | 1 day | None |
| Chat widget integration (if desired) | 2 days | None |
| Final deployment | 1 day | All above |

---

## 31. Recommended Implementation Order

### Immediate (Complete)

```
1. Fix missing JS functions                  ✅ DONE
2. Fix gallery image rendering                ✅ DONE
3. Fix OG images and canonical URLs           ✅ DONE
4. Fix hardcoded sidebar and form dropdowns   ✅ DONE
5. Fix footer links                           ✅ DONE
6. Add missing inquiry forms                  ✅ DONE
7. Regenerate sitemap                         ✅ DONE
8. Fix code quality issues                    ✅ DONE
```

### Next (Design System)

```
 9. Implement CSS custom properties system
10. Build typography + color system
11. Build button + card component system
12. Build form system
13. Build navigation (desktop + mobile)
14. Build footer
```

### Then (Pages)

```
15. Rebuild homepage with all dynamic sections
16. Rebuild products page + product detail
17. Rebuild materials page + material detail
18. Rebuild supporting pages (about, services, industries, gallery, quality, contact)
```

### Finally (Polish)

```
19. Performance optimization
20. SEO audit + schema fixes
21. Accessibility audit
22. Cross-browser testing
23. Deploy
```

---

## Appendix A: Config-Driven Data Flow

```
config.js (Single Source of Truth)
  │
  ├──> config.business        → Header, Footer, CTAs, Contact page
  ├──> config.products[]      → Products page, FeaturedProducts, Footer
  ├──> config.materials[]     → Materials page, Sidebar, Footer
  ├──> config.productDetails[] → Product detail pages (/:slug)
  ├──> config.materialDetails[] → Material detail pages (/:slug)
  ├──> config.gallery[]       → Gallery page
  ├──> config.whyChooseUs[]   → Homepage, About page
  ├──> config.heroSlides[]    → Homepage hero slider
  ├──> config.stats[]         → Homepage stats counter
  └──> config.reviews[]       → (Future) testimonials
```

## Appendix B: URL Structure

```
/                          → index.html
/about-us.html             → About
/products.html             → Product catalog
/products/:slug/           → Product detail (generated route)
/materials.html            → Material catalog
/materials/:slug/          → Material detail (generated route)
/services.html             → Services
/industries-served.html    → Industries
/gallery.html              → Gallery
/certifications-quality.html → Quality
/contact-us.html           → Contact
```

## Appendix C: Build Commands

```bash
npm run dev      # Development server (localhost:5173)
npm run build    # Production build to /dist
npm run preview  # Preview production build
```

---

*End of Website Master Specification v1.0*
