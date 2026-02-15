# InvoiceKirim Landing Page Design

**Date:** February 15, 2026
**Status:** Approved
**Phase:** Initial Landing Page

## Project Overview

InvoiceKirim is a fast invoice creation and sending platform targeting Indonesian freelancers and SMEs (UMKM). The core value proposition is **simplicity** - "Tanpa ribet, tanpa setup yang rumit" - enabling users to create and send professional invoices in seconds.

## Target Audience

- Indonesian freelancers (designers, developers, content creators)
- Small and medium enterprises (UMKM) in Indonesia
- Users who need quick, professional invoicing without complex tools

## Design Approach

**Selected Approach:** Clean Static Landing Page (Option 1)

Build a focused, static landing page using Next.js App Router with pure React components and Tailwind CSS. This approach prioritizes speed to market, creative control for Indonesian aesthetic, and validates the value proposition before building complex features.

---

## 1. Architecture & Tech Stack

### Technology Stack
- **Framework:** Next.js 15 (latest) with App Router
- **Language:** TypeScript for type safety
- **Styling:** Tailwind CSS with custom Indonesian theme
- **Deployment:** Vercel (optimized for Next.js)
- **Assets:** Static images and SVGs

### Project Structure

```
invoicekirim/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Landing page (combines all sections)
│   └── globals.css         # Tailwind directives + custom styles
├── components/
│   ├── Navbar.tsx          # Navigation with logo and menu
│   ├── Hero.tsx            # Main hero section
│   ├── Features.tsx        # 3 feature cards
│   ├── SocialProof.tsx     # Testimonials + stats
│   ├── Pricing.tsx         # 2-tier pricing
│   ├── CTA.tsx             # Final call-to-action
│   └── Footer.tsx          # Footer links
├── public/
│   └── images/             # Logos, illustrations, mockups
├── tailwind.config.ts      # Custom Indonesian theme
└── package.json
```

### Initial Phase Constraints
- No backend or database
- Static buttons (no authentication functionality)
- No API routes
- Focus on design and messaging validation

---

## 2. Component Structure & Styling

### Component Breakdown

#### Navbar Component
- Logo: Text-based "InvoiceKirim" with simple icon
- Navigation links: Fitur, Harga, Login (scroll to sections)
- Primary CTA button: "Mulai Gratis"
- Behavior: Sticky on scroll, transparent → solid background transition

#### Hero Component
- Layout: Two-column grid (text left, visual right)
- Headline (H1): "Bikin Invoice Profesional dalam 30 Detik"
- Sub-headline: Casual, friendly explanation
- Primary CTA button with emphasis on "no credit card required"
- Mockup placeholder: Gradient-bordered div (replaceable with actual screenshot)

#### Features Component
- 3 cards in responsive grid layout
- Each card: Icon placeholder + title + description
- Cards:
  1. "Invoice Instan" - Simple form to instant invoice
  2. "Share Link" - Browser-based invoice sharing
  3. "Track Status" - Payment status tracking
- Hover effects for visual interactivity

#### SocialProof Component
- 3 testimonial cards with dummy data from Indonesian freelancers
- Stats bar: "500+ invoice dibuat", "Rp 2M+ tertagih"
- Emphasize relatable user stories

#### Pricing Component
- 2-tier pricing cards side-by-side
- **Gratis tier:** 5 invoice/bulan, 1 template, email support
- **Pro tier:** Rp 49.000/bulan, unlimited invoice, custom branding, priority support
- Feature comparison list
- "Mulai" button on each card

#### CTA Component
- Centered section with strong headline
- Single prominent "Daftar Gratis" button
- Reinforces "no hassle" message

#### Footer Component
- 3 columns: Links (Tentang, Kontak), Legal (Privacy Policy), Copyright
- Clean and minimal design

### Tailwind Theme (Indonesian-focused)

```javascript
// tailwind.config.ts
colors: {
  primary: {
    // Warm terracotta/clay tones
    50: '#fef5f1',
    100: '#fde9e2',
    200: '#fbd0c2',
    300: '#f7ac96',
    400: '#f17f61',
    500: '#e85d3f', // Main brand color
    600: '#d43d1f',
    700: '#c23d1f',
    800: '#9a3118',
    900: '#7d2a17',
  },
  secondary: {
    // Warm gold/yellow accents
    50: '#fef9ec',
    100: '#fdf2d0',
    200: '#fae29f',
    300: '#f6ce64',
    400: '#f6b93b',
    500: '#f0981c',
    600: '#e67e22',
    700: '#be5a15',
    800: '#974617',
    900: '#7a3b17',
  },
  neutral: {
    // Warm grays
    50: '#fafaf9',
    100: '#f8f6f4',
    200: '#f0ede8',
    300: '#e2ddd5',
    700: '#5c5854',
    800: '#3d3d3d',
    900: '#292524',
  }
}
```

### Typography
- **Font Family:** Inter (clean, readable, supports Indonesian characters)
- **Tone:** Casual, friendly Indonesian copy
- **Hierarchy:** Large bold headlines for impact, readable body text

---

## 3. Responsive Design & Interactions

### Mobile-First Approach

The target audience will primarily access from mobile devices, so we design mobile-first and progressively enhance for larger screens.

### Breakpoints
- **Mobile:** < 768px (single column, stacked sections)
- **Tablet:** 768px - 1024px (transitional layouts)
- **Desktop:** > 1024px (full multi-column layouts)

### Responsive Behaviors

**Navbar:**
- Mobile: Hamburger menu for navigation links
- Desktop: Horizontal menu with all items visible

**Hero:**
- Mobile: Stacked layout (headline → CTA → mockup)
- Desktop: Side-by-side (text left, mockup right)

**Features:**
- Mobile: Single column (3 cards stacked)
- Tablet: 2 columns
- Desktop: 3 columns grid

**Pricing:**
- Mobile: Stacked cards (vertical)
- Desktop: Side-by-side cards (horizontal)

**Testimonials:**
- Mobile: Single testimonial visible, horizontally swipeable
- Desktop: All 3 visible in row

### Interaction Patterns

**Static but Polished:**
- Smooth scroll to sections when clicking navbar links
- Hover states on buttons: subtle scale + color shift
- Card hover effects: subtle lift with shadow
- Consistent CTA styling (all buttons use primary color)
- No loading states needed (static page)

**Performance Optimizations:**
- Use Next.js `Image` component for automatic optimization
- Next.js font optimization for Inter font
- Lazy load below-fold sections

---

## 4. Content, Copy & Assets

### Indonesian Copy Strategy

All content uses casual, friendly Indonesian that resonates with freelancers and small business owners.

**Tone Guidelines:**
- Use "kamu" (informal) instead of "Anda" (formal)
- Conversational language: "Nggak perlu ribet", "udah dibayar", "yuk mulai"
- Avoid corporate jargon
- Emphasize speed and simplicity at every touchpoint

### Content Sections

#### Hero Section
```
Headline: "Bikin Invoice Profesional dalam 30 Detik"
Sub-headline: "Nggak perlu Excel, nggak perlu template ribet.
              Isi form, klik kirim, selesai."
CTA: "Mulai Gratis — Tanpa Kartu Kredit"
```

#### Features Section
```
1. "Invoice Instan"
   → "Isi form sederhana, invoice langsung jadi"

2. "Share Link"
   → "Kirim invoice lewat link, client buka di browser"

3. "Track Status"
   → "Tau mana yang udah dibayar, mana yang belum"
```

#### Social Proof (Dummy Testimonials)
```
1. "Dulu bikin invoice pakai Excel bisa 15 menit.
    Sekarang cuma 1 menit!"
   — Budi, Freelance Designer

2. "Simpel banget! Client langsung bisa bayar lewat link."
   — Sari, Social Media Manager

3. "Gratis tapi fiturnya lengkap untuk freelancer pemula."
   — Andi, Web Developer

Stats:
- "500+ invoice dibuat"
- "Rp 2M+ tertagih"
```

#### Pricing Section
```
GRATIS:
- 5 invoice/bulan
- 1 template
- Support email

PRO (Rp 49.000/bulan):
- Unlimited invoice
- Custom branding
- Priority support
- Export PDF
```

#### CTA Section
```
Headline: "Mulai Bikin Invoice Sekarang"
Button: "Daftar Gratis"
```

#### Footer
```
Links:
- Tentang
- Kontak
- Privacy Policy

Copyright: © 2026 InvoiceKirim
```

### Visual Assets (Placeholder Strategy)

**Logo:**
- Text-based "InvoiceKirim"
- Simple geometric icon (can be a stylized paper/envelope)
- Primary color scheme

**Hero Mockup:**
- Placeholder: Gradient-bordered div with aspect ratio
- Can be replaced with actual invoice screenshot later

**Feature Icons:**
- Use simple SVG icons or emoji initially
- Lightning bolt (⚡) for "Invoice Instan"
- Link (🔗) for "Share Link"
- Checkmark (✅) for "Track Status"

**Testimonial Avatars:**
- Colored circles with user initials
- Use secondary color palette for variety

---

## 5. Testing Strategy

### Manual Testing Focus

Since this is a static landing page with no business logic:

**Device Testing:**
- Mobile: iPhone (Safari), Android (Chrome)
- Tablet: iPad (Safari)
- Desktop: Chrome, Safari, Firefox

**Accessibility:**
- Semantic HTML structure
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for all images
- Keyboard navigation for links/buttons
- Color contrast ratios meet WCAG AA standards

**Performance:**
- Lighthouse audit: Target 90+ on all metrics
- Fast page load (< 2s on 3G)

**No Unit Tests:** Not needed for this phase (YAGNI principle)

---

## Success Criteria

1. ✅ Landing page loads in < 2 seconds on 3G
2. ✅ Fully responsive across mobile, tablet, desktop
3. ✅ Indonesian copy is clear, friendly, and compelling
4. ✅ Visual design reflects warm, Indonesian-focused aesthetic
5. ✅ All sections match the approved specification
6. ✅ Static buttons are clearly styled (no broken interactions)
7. ✅ Accessibility score 90+ on Lighthouse

---

## Future Considerations

**Not included in this phase (intentionally deferred):**
- User authentication (Login/Register functionality)
- Invoice creation functionality
- Database integration
- API routes
- Admin dashboard
- Payment integration
- Email sending

These will be addressed in future iterations after validating the landing page and value proposition with real users.

---

## Timeline Estimate

This is a focused, static landing page with clear requirements. Implementation should be straightforward.

**Next Steps:**
1. Create implementation plan (using writing-plans skill)
2. Set up Next.js project with TypeScript and Tailwind
3. Build components following this design
4. Deploy to Vercel for preview

---

**Design Status:** ✅ Approved
**Ready for Implementation Planning:** Yes
