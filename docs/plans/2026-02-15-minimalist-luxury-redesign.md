# Minimalist Luxury Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the InvoiceKirim landing page from warm Indonesian terracotta to an elegant Minimalist Luxury aesthetic with Scarlet Rush, Frozen Water, and Frosted Blue color palette.

**Architecture:** Update all 7 existing components in place. Replace the Tailwind color theme, swap fonts from Geist to DM Sans + Playfair Display, and rewrite copy to semi-formal Indonesian tone. No structural changes to the App Router setup.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS 4, DM Sans + Playfair Display (Google Fonts)

---

## Task 1: Create Feature Branch

**Files:**
- None (git operation only)

**Step 1: Create and switch to redesign branch**

Run:
```bash
git checkout -b redesign/minimalist-luxury
```

**Step 2: Verify branch**

Run:
```bash
git branch --show-current
```

Expected: `redesign/minimalist-luxury`

---

## Task 2: Replace Fonts (Geist → DM Sans + Playfair Display)

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Replace font imports and configuration**

Replace the entire contents of `app/layout.tsx` with:

```typescript
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "InvoiceKirim - Buat Invoice Profesional dalam 30 Detik",
  description:
    "Tanpa spreadsheet, tanpa template rumit. Platform invoice untuk freelancer dan UMKM Indonesia. Gratis untuk memulai.",
  keywords: [
    "invoice",
    "freelancer",
    "UMKM",
    "Indonesia",
    "gratis",
    "invoice generator",
  ],
  authors: [{ name: "InvoiceKirim" }],
  openGraph: {
    title: "InvoiceKirim - Invoice Profesional untuk Freelancer Indonesia",
    description:
      "Buat dan kirim invoice dalam hitungan detik. Tanpa ribet, tanpa setup rumit.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
```

**Step 2: Commit font swap**

```bash
git add app/layout.tsx
git commit -m "feat(redesign): replace Geist fonts with DM Sans and Playfair Display

- DM Sans for body text (weights: 400, 500, 700)
- Playfair Display for headings (weights: 600, 700)
- Update metadata copy to semi-formal Indonesian tone
- Remove Geist and Geist Mono font imports

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 3: Replace Tailwind Theme (Colors + Fonts)

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace entire globals.css**

Replace the entire contents of `app/globals.css` with:

```css
@import "tailwindcss";

@theme inline {
  /* Minimalist Luxury Color Palette */

  /* Primary - Scarlet Rush */
  --color-scarlet-50: #fef2f2;
  --color-scarlet-100: #fee2e2;
  --color-scarlet-200: #fecaca;
  --color-scarlet-300: #f4a0a3;
  --color-scarlet-400: #e06367;
  --color-scarlet-500: #D64045;
  --color-scarlet-600: #c13136;
  --color-scarlet-700: #a2262a;
  --color-scarlet-800: #862427;
  --color-scarlet-900: #702326;

  /* Light - Frozen Water */
  --color-frost-50: #f2fffe;
  --color-frost-100: #E9FFF9;
  --color-frost-200: #d1fff3;
  --color-frost-300: #a8ffea;

  /* Accent - Frosted Blue */
  --color-ice-50: #f0fafb;
  --color-ice-100: #d9f1f3;
  --color-ice-200: #b7e4e8;
  --color-ice-300: #9ED8DB;
  --color-ice-400: #6fbfc5;
  --color-ice-500: #4ea3ab;

  /* Dark */
  --color-dark: #1A1A2E;
  --color-dark-light: #2a2a42;

  /* Grays */
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;

  /* Semantic */
  --color-background: #FFFFFF;
  --color-foreground: #1A1A2E;

  /* Fonts */
  --font-sans: var(--font-dm-sans), system-ui, sans-serif;
  --font-serif: var(--font-playfair), Georgia, serif;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .font-heading {
    font-family: var(--font-serif);
  }
}
```

**Step 2: Commit theme**

```bash
git add app/globals.css
git commit -m "feat(redesign): replace Tailwind theme with Minimalist Luxury palette

- Scarlet Rush primary (#D64045)
- Frozen Water light (#E9FFF9)
- Frosted Blue accent (#9ED8DB)
- Dark (#1A1A2E) for headings and dark sections
- Full gray scale for body text and borders
- Add font-heading utility for Playfair Display
- Remove old terracotta/gold/warm-neutral colors

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 4: Redesign Navbar

**Files:**
- Modify: `components/Navbar.tsx`

**Step 1: Replace entire Navbar component**

Replace the entire contents of `components/Navbar.tsx` with:

```typescript
"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-heading text-2xl font-bold text-dark transition-colors hover:text-scarlet-500"
            aria-label="InvoiceKirim home"
          >
            InvoiceKirim
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("fitur")}
              className="text-gray-500 hover:text-dark transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-dark hover:after:w-full after:transition-all after:duration-500"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection("harga")}
              className="text-gray-500 hover:text-dark transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-dark hover:after:w-full after:transition-all after:duration-500"
            >
              Harga
            </button>
            <button
              onClick={() => scrollToSection("login")}
              className="text-gray-500 hover:text-dark transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-dark hover:after:w-full after:transition-all after:duration-500"
            >
              Login
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="bg-scarlet-500 hover:bg-scarlet-600 text-white px-7 py-2.5 rounded-full font-medium transition-all duration-500"
            >
              Mulai Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dark hover:text-scarlet-500 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-6">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => scrollToSection("fitur")}
                className="text-gray-500 hover:text-dark text-left px-4 py-3 rounded-lg transition-colors"
              >
                Fitur
              </button>
              <button
                onClick={() => scrollToSection("harga")}
                className="text-gray-500 hover:text-dark text-left px-4 py-3 rounded-lg transition-colors"
              >
                Harga
              </button>
              <button
                onClick={() => scrollToSection("login")}
                className="text-gray-500 hover:text-dark text-left px-4 py-3 rounded-lg transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => scrollToSection("cta")}
                className="bg-scarlet-500 hover:bg-scarlet-600 text-white px-6 py-3 rounded-full font-medium text-center transition-all mt-3"
              >
                Mulai Gratis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
```

**Step 2: Commit Navbar**

```bash
git add components/Navbar.tsx
git commit -m "feat(redesign): redesign Navbar with minimalist luxury aesthetic

- Playfair Display serif logo
- Subtle underline animation on hover for nav links
- Scarlet Rush pill CTA button
- Backdrop-blur frosted glass on scroll
- Cleaner mobile menu with generous spacing
- Thinner stroke on hamburger icon

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 5: Redesign Hero

**Files:**
- Modify: `components/Hero.tsx`

**Step 1: Replace entire Hero component**

Replace the entire contents of `components/Hero.tsx` with:

```typescript
export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight tracking-tight">
          Buat Invoice Profesional
          <br />
          dalam <span className="text-scarlet-500">30 Detik</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Tanpa spreadsheet, tanpa template rumit.
          <br className="hidden md:block" />
          Isi form, kirim, selesai.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="bg-scarlet-500 hover:bg-scarlet-600 text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-500"
            aria-label="Mulai menggunakan InvoiceKirim gratis"
          >
            Mulai Gratis
          </button>
          <span className="text-sm text-gray-400">Tanpa kartu kredit</span>
        </div>

        {/* Mockup */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="aspect-[16/10] bg-gray-50 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
              <p className="text-gray-400 font-medium">Invoice Preview</p>
              <p className="text-sm text-gray-300 mt-1">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit Hero**

```bash
git add components/Hero.tsx
git commit -m "feat(redesign): redesign Hero with centered editorial layout

- Centered stacked layout (text above mockup)
- Playfair Display text-7xl headline
- Semi-formal copy: 'Buat Invoice Profesional dalam 30 Detik'
- Scarlet Rush pill CTA with 'Tanpa kartu kredit' side text
- Clean mockup placeholder with thin border and shadow-sm
- Generous pt-40 spacing for luxury breathing room

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 6: Redesign Features

**Files:**
- Modify: `components/Features.tsx`

**Step 1: Replace entire Features component**

Replace the entire contents of `components/Features.tsx` with:

```typescript
export default function Features() {
  const features = [
    {
      title: "Invoice Instan",
      description:
        "Isi form sederhana, invoice profesional langsung jadi dalam hitungan detik.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      ),
    },
    {
      title: "Kirim via Link",
      description:
        "Bagikan invoice lewat link. Client langsung bisa membuka dan melihat di browser.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      ),
    },
    {
      title: "Lacak Pembayaran",
      description:
        "Pantau status pembayaran secara real-time. Ketahui mana yang sudah dan belum dibayar.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="fitur" className="py-24 md:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Semua yang Kamu Butuhkan
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Platform invoice lengkap untuk bisnis modern
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center px-6 py-8 group transition-all duration-500 border-b-2 border-transparent hover:border-scarlet-500"
            >
              <div className="w-14 h-14 mx-auto mb-6 bg-ice-300/20 rounded-xl flex items-center justify-center text-ice-400 group-hover:text-scarlet-500 transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit Features**

```bash
git add components/Features.tsx
git commit -m "feat(redesign): redesign Features with clean minimal cards

- Replace emoji icons with SVG line icons
- Frosted Blue icon circles with 20% opacity
- Playfair Display card titles
- Subtle bottom border on hover in Scarlet Rush
- Centered text layout per card
- Semi-formal copy with polished descriptions
- Generous spacing (gap-12, mb-20 header)

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 7: Redesign SocialProof

**Files:**
- Modify: `components/SocialProof.tsx`

**Step 1: Replace entire SocialProof component**

Replace the entire contents of `components/SocialProof.tsx` with:

```typescript
export default function SocialProof() {
  const testimonials = [
    {
      quote:
        "Dulu bikin invoice pakai Excel bisa 15 menit. Sekarang cuma 1 menit!",
      name: "Budi Dharma",
      role: "Freelance Designer",
      initials: "BD",
    },
    {
      quote: "Simpel banget! Client langsung bisa bayar lewat link.",
      name: "Sari Rahayu",
      role: "Social Media Manager",
      initials: "SR",
    },
    {
      quote:
        "Gratis tapi fiturnya lengkap untuk freelancer yang baru memulai.",
      name: "Andi Wijaya",
      role: "Web Developer",
      initials: "AW",
    },
  ];

  const stats = [
    { number: "500+", label: "Invoice Dibuat" },
    { number: "Rp 2M+", label: "Total Tertagih" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 lg:px-8 bg-frost-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Dipercaya oleh Profesional
            <br className="hidden md:block" />
            di Seluruh Indonesia
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              {/* Decorative Quote Mark */}
              <span className="font-heading text-6xl text-scarlet-500/20 leading-none select-none">
                &ldquo;
              </span>

              <p className="text-gray-600 leading-relaxed mt-2 mb-6">
                {testimonial.quote}
              </p>

              {/* Attribution */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-medium text-dark text-sm">
                  {testimonial.initials} &mdash; {testimonial.name}
                </p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-16 md:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-heading text-4xl md:text-5xl font-bold text-scarlet-500">
                {stat.number}
              </p>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit SocialProof**

```bash
git add components/SocialProof.tsx
git commit -m "feat(redesign): redesign SocialProof with editorial testimonial cards

- Frozen Water (#E9FFF9) background - only colored section
- Decorative Playfair Display quote marks in faded Scarlet Rush
- White cards on mint background with shadow-sm
- Thin line + initials attribution (no avatar circles)
- Scarlet Rush stat numbers with Playfair Display
- Semi-formal testimonial copy

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 8: Redesign Pricing

**Files:**
- Modify: `components/Pricing.tsx`

**Step 1: Replace entire Pricing component**

Replace the entire contents of `components/Pricing.tsx` with:

```typescript
export default function Pricing() {
  const plans = [
    {
      name: "Gratis",
      price: "Rp 0",
      period: "selamanya",
      features: ["5 invoice/bulan", "1 template", "Email support"],
      cta: "Mulai Gratis",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "Rp 49.000",
      period: "/bulan",
      badge: "POPULER",
      features: [
        "Unlimited invoice",
        "Custom branding",
        "Priority support",
        "Export PDF",
      ],
      cta: "Mulai Pro",
      highlighted: true,
    },
  ];

  return (
    <section id="harga" className="py-24 md:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Harga Transparan, Tanpa Kejutan
          </h2>
          <p className="text-gray-500 text-lg">
            Mulai gratis, upgrade sesuai kebutuhan
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 border transition-all duration-500 hover:shadow-md ${
                plan.highlighted
                  ? "border-gray-200 bg-frost-100"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <span className="inline-block bg-ice-300/30 text-ice-500 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                  {plan.badge}
                </span>
              )}

              {/* Plan Name */}
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="font-heading text-5xl font-bold text-dark">
                  {plan.price}
                </span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6" />

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-ice-300 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 rounded-full font-medium transition-all duration-500 ${
                  plan.highlighted
                    ? "bg-scarlet-500 hover:bg-scarlet-600 text-white"
                    : "border border-gray-300 text-gray-600 hover:border-dark hover:text-dark"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit Pricing**

```bash
git add components/Pricing.tsx
git commit -m "feat(redesign): redesign Pricing with clean minimal cards

- Thin border cards, rounded-xl, no heavy shadows
- Pro card: Frozen Water tint + POPULER badge in Frosted Blue
- Playfair Display prices (text-5xl)
- Frosted Blue checkmarks
- Outline button for Gratis, solid Scarlet pill for Pro
- Thin divider between price and features
- Semi-formal copy

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 9: Redesign CTA

**Files:**
- Modify: `components/CTA.tsx`

**Step 1: Replace entire CTA component**

Replace the entire contents of `components/CTA.tsx` with:

```typescript
export default function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-dark rounded-2xl px-8 py-16 md:px-16 md:py-24 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Siap Membuat Invoice
            <br />
            Pertamamu?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Bergabung dengan ratusan profesional Indonesia yang sudah
            mempercayai InvoiceKirim.
          </p>
          <button className="bg-scarlet-500 hover:bg-scarlet-600 text-white px-12 py-4 rounded-full font-medium text-lg transition-all duration-500">
            Daftar Gratis
          </button>
          <p className="text-gray-500 text-sm mt-6">
            Gratis 5 invoice &middot; Tanpa kartu kredit
          </p>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit CTA**

```bash
git add components/CTA.tsx
git commit -m "feat(redesign): redesign CTA with contained dark card

- Dark (#1A1A2E) contained card with rounded-2xl (not full-width)
- Playfair Display white headline
- Scarlet Rush pill button on dark background
- Semi-formal copy: 'Siap Membuat Invoice Pertamamu?'
- Generous internal padding for luxury feel

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 10: Redesign Footer

**Files:**
- Modify: `components/Footer.tsx`

**Step 1: Replace entire Footer component**

Replace the entire contents of `components/Footer.tsx` with:

```typescript
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-400 py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <h3 className="font-heading text-xl font-bold text-white mb-3">
          InvoiceKirim
        </h3>
        <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
          Platform invoice profesional untuk bisnis modern Indonesia.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10 max-w-xs mx-auto" />

        {/* Links */}
        <div className="flex justify-center gap-8 mb-10">
          <button className="text-gray-400 hover:text-white transition-colors duration-500">
            Tentang
          </button>
          <button className="text-gray-400 hover:text-white transition-colors duration-500">
            Kontak
          </button>
          <button className="text-gray-400 hover:text-white transition-colors duration-500">
            Privacy Policy
          </button>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm">
          &copy; {currentYear} InvoiceKirim
        </p>
      </div>
    </footer>
  );
}
```

**Step 2: Commit Footer**

```bash
git add components/Footer.tsx
git commit -m "feat(redesign): redesign Footer with minimal centered layout

- Single centered column (not 3-column grid)
- Playfair Display white logo
- Refined tagline for modern Indonesian businesses
- Horizontal link row with subtle hover-to-white
- Thin centered divider in gray-700
- Clean copyright line

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 11: Verify Build

**Files:**
- None (verification only)

**Step 1: Run linter**

Run:
```bash
npm run lint
```

Expected: No errors

**Step 2: Run production build**

Run:
```bash
npm run build
```

Expected: Build completes successfully

**Step 3: Verify in browser**

Run:
```bash
npm run dev
```

Manual checks:
- [ ] Playfair Display renders on all headings
- [ ] DM Sans renders on all body text
- [ ] No Geist, Inter, Roboto, or Arial visible
- [ ] Scarlet Rush only on CTAs and accents
- [ ] White-dominant backgrounds
- [ ] Frozen Water background on Social Proof only
- [ ] Generous whitespace throughout
- [ ] Responsive: mobile, tablet, desktop
- [ ] Mobile hamburger menu works
- [ ] Smooth scroll works
- [ ] Navbar backdrop-blur on scroll

**Step 4: Commit any fixes if needed**

---

## Success Criteria

1. All 7 sections redesigned with Minimalist Luxury aesthetic
2. DM Sans body + Playfair Display headings (no Inter/Roboto/Arial)
3. Scarlet Rush (#D64045) only on CTAs and accent elements
4. White-dominant backgrounds with Frozen Water on Social Proof only
5. Generous whitespace (py-24 to py-32 on sections)
6. Subtle hover effects (duration-500, no aggressive lifts)
7. Semi-formal Indonesian copy throughout
8. Fully responsive
9. Production build succeeds with no errors
