# InvoiceKirim Minimalist Luxury Redesign

**Date:** February 15, 2026
**Status:** Approved
**Scope:** Full redesign — visual, layout, content

## Design Direction

- **Aesthetic:** Minimalist Luxury
- **Vibe:** Professional, friendly, trustworthy
- **Background Strategy:** White-dominant with color as sparse accent
- **Copy Tone:** Semi-formal Indonesian — polished but still approachable

---

## 1. Color System

```
Primary:     #D64045 (Scarlet Rush) — CTAs, key accents, hover states
Light:       #E9FFF9 (Frozen Water) — Subtle section backgrounds, badges
Accent:      #9ED8DB (Frosted Blue) — Icon backgrounds, dividers, tags, checkmarks
White:       #FFFFFF — Dominant page background
Dark:        #1A1A2E — Headings, primary text, CTA card, footer
Gray:        #6B7280 — Body text, secondary content
Light Gray:  #F8F9FA — Card backgrounds, subtle fills
Border:      #E5E7EB — Thin borders, separators
```

### Usage Rules

- Scarlet Rush: ONLY for CTAs, buttons, and decorative accents (quote marks). Never as section backgrounds.
- Frozen Water: Used for one section background (Social Proof) and subtle badges/tags.
- Frosted Blue: Icon circles, checkmarks, subtle accents. Never as text color.
- White: Dominant canvas. Most sections are white background.
- Dark: Headlines, CTA card background, footer background.

---

## 2. Typography

```
Headings:  Playfair Display (serif)
           Weights: 600 (semibold), 700 (bold)
           Usage: All headlines, logo, card titles, stats numbers, prices

Body:      DM Sans (sans-serif)
           Weights: 400 (regular), 500 (medium), 700 (bold)
           Usage: Paragraphs, nav links, labels, descriptions, buttons

DO NOT USE: Inter, Roboto, Arial
```

### Type Scale

```
H1:    text-5xl md:text-6xl lg:text-7xl  (Hero headline only)
H2:    text-3xl md:text-4xl              (Section titles)
H3:    text-xl md:text-2xl               (Card titles)
Body:  text-base md:text-lg              (Paragraphs)
Small: text-sm                           (Labels, captions, badges)
```

---

## 3. Design Tokens

- **Border radius:** rounded-xl (12px) for cards, rounded-full for buttons (pill shape)
- **Shadows:** Minimal — shadow-sm only, no heavy drop shadows
- **Spacing:** Generous — sections use py-24 md:py-32, large gaps
- **Transitions:** Subtle and slow (duration-500) for hover effects
- **Borders:** Thin (#E5E7EB), 1px. No thick or colored borders.

---

## 4. Section Designs

### 4.1 Navbar

- **Logo:** "InvoiceKirim" in Playfair Display, dark (#1A1A2E)
- **Nav links:** DM Sans, gray (#6B7280), subtle underline animation on hover
- **CTA button:** Scarlet Rush (#D64045), rounded-full (pill), white text
- **Scroll behavior:** Transparent → white with backdrop-blur and shadow-sm
- **Mobile menu:** Clean slide-down, white background, generous padding, thin border separator

### 4.2 Hero

- **Layout:** Centered (stacked text above mockup, not side-by-side)
- **Headline:** Playfair Display, text-7xl, dark (#1A1A2E)
  - Copy: "Buat Invoice Profesional dalam 30 Detik"
- **Sub-headline:** DM Sans, text-lg, gray (#6B7280)
  - Copy: "Tanpa spreadsheet, tanpa template rumit. Isi form, kirim, selesai."
- **CTA:** Scarlet Rush pill button "Mulai Gratis" + small gray "Tanpa kartu kredit"
- **Mockup:** Below text, centered, light gray (#F8F9FA) background, thin border, shadow-sm, rounded-xl
- **Spacing:** pt-40 pb-24 for generous breathing room

### 4.3 Features

- **Background:** White
- **Section header:** Playfair Display, centered
  - Title: "Semua yang Kamu Butuhkan"
  - Subtitle: "Platform invoice lengkap untuk bisnis modern" (DM Sans, gray)
- **Cards:** No borders, no background. White with generous padding.
  - Hover: Subtle thin bottom border in Scarlet Rush, no lift
- **Icons:** SVG line icons inside Frosted Blue (#9ED8DB) circles at 20% opacity
- **Card titles:** Playfair Display semibold
  - "Invoice Instan", "Kirim via Link", "Lacak Pembayaran"
- **Card descriptions:** DM Sans, gray. Centered text.
- **Layout:** 3 columns desktop, 1 column mobile

### 4.4 Social Proof

- **Background:** Frozen Water (#E9FFF9) — only colored section
- **Section header:** Playfair Display
  - Copy: "Dipercaya oleh Profesional di Seluruh Indonesia"
- **Testimonial cards:** White on mint background, shadow-sm, rounded-xl
  - Decorative quote mark: Large Playfair Display `"` in faded Scarlet Rush (20% opacity)
  - Attribution: Thin horizontal line + initials + role. No avatar circles.
- **Stats:** Large Playfair Display numbers in Scarlet Rush, gray labels
  - "500+" Invoice Dibuat, "Rp 2M+" Total Tertagih
  - Separated by subtle vertical divider

### 4.5 Pricing

- **Background:** White
- **Section header:** Playfair Display
  - Title: "Harga Transparan, Tanpa Kejutan"
  - Subtitle: "Mulai gratis, upgrade sesuai kebutuhan" (DM Sans, gray)
- **Cards:** Thin border (#E5E7EB), rounded-xl
  - **Gratis:** White background, outline button (gray border)
    - Rp 0 / selamanya
    - 5 invoice/bulan, 1 template, Email support
  - **Pro:** Subtle Frozen Water (#E9FFF9) tint + "POPULER" badge in Frosted Blue
    - Rp 49.000 / bulan
    - Unlimited invoice, Custom branding, Priority support, Export PDF
    - Solid Scarlet Rush pill button
- **Prices:** Playfair Display, text-5xl, dark
- **Checkmarks:** Frosted Blue (#9ED8DB), not Scarlet

### 4.6 CTA

- **Layout:** Contained dark card (#1A1A2E) with rounded-2xl inside white section (not full-width)
- **Headline:** Playfair Display, text-5xl, white
  - Copy: "Siap Membuat Invoice Pertamamu?"
- **Sub-text:** DM Sans, gray-300
  - Copy: "Bergabung dengan ratusan profesional Indonesia yang sudah mempercayai InvoiceKirim."
- **Button:** Scarlet Rush pill, large
- **Note:** "Gratis 5 invoice . Tanpa kartu kredit" (small, gray-400)

### 4.7 Footer

- **Background:** Dark (#1A1A2E) — continuous with CTA card visual flow
- **Layout:** Single centered column (not 3-column grid)
- **Logo:** Playfair Display, white
- **Tagline:** "Platform invoice profesional untuk bisnis modern Indonesia." (DM Sans, gray-400)
- **Links:** Horizontal row — Tentang, Kontak, Privacy Policy (gray-400)
- **Divider:** Thin line gray-700 between content and links
- **Copyright:** "2026 InvoiceKirim" (small, gray-500, centered)

---

## 5. Responsive Behavior

- **Mobile:** Single column stacking, text-5xl hero headline, full-width cards
- **Tablet:** Transitional layouts, 2-column pricing
- **Desktop:** Full multi-column where specified, generous max-width containers
- **Navbar mobile:** Hamburger menu with clean slide-down, white bg, border separator

---

## 6. Implementation Notes

- **Branch:** Create `redesign/minimalist-luxury` from main
- **Fonts:** Load DM Sans and Playfair Display via next/font/google
- **Remove:** Geist fonts (replaced by DM Sans)
- **Tailwind:** Replace entire @theme color configuration
- **Components:** Update all 7 components in place
- **Icons:** Replace emoji icons with simple SVG line icons
- **Copy:** Update all Indonesian text to semi-formal tone

---

## Success Criteria

1. White-dominant pages with color used sparingly
2. Playfair Display headlines create luxury hierarchy
3. DM Sans body text is clean and readable
4. Scarlet Rush appears only on CTAs and accent elements
5. Generous whitespace throughout
6. Subtle hover effects (no aggressive lifts or shadows)
7. Semi-formal Indonesian copy throughout
8. Fully responsive (mobile, tablet, desktop)
9. No Inter, Roboto, or Arial fonts anywhere
