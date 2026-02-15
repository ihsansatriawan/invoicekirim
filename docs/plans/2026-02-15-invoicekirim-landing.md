# InvoiceKirim Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a static, mobile-first landing page for InvoiceKirim targeting Indonesian freelancers and SMEs with warm, culturally-relevant design.

**Architecture:** Next.js 15 App Router with TypeScript and Tailwind CSS. Seven self-contained components (Navbar, Hero, Features, SocialProof, Pricing, CTA, Footer) composed in a single landing page. No backend, no authentication - pure static site optimized for Vercel deployment.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, React 19

---

## Task 1: Initialize Next.js Project

**Files:**
- Create: Next.js project structure (via CLI)
- Create: `.gitignore`
- Create: `README.md`

**Step 1: Create Next.js app with TypeScript and Tailwind**

Run:
```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

When prompted, select:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: No
- App Router: Yes
- Customize import alias: Yes (@/*)

**Step 2: Verify project structure**

Run: `ls -la`

Expected directory structure:
```
app/
  layout.tsx
  page.tsx
  globals.css
public/
components/ (we'll create this)
package.json
tailwind.config.ts
tsconfig.json
next.config.js
```

**Step 3: Update README with project info**

Edit `README.md`:

```markdown
# InvoiceKirim

Fast invoice creation and sending platform for Indonesian freelancers and SMEs.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Vercel (deployment)

## Project Structure

- `/app` - Next.js App Router pages
- `/components` - React components
- `/public` - Static assets
- `/docs/plans` - Design and implementation docs
```

**Step 4: Install and verify dependencies**

Run:
```bash
npm install
npm run dev
```

Expected: Dev server starts on http://localhost:3000

**Step 5: Commit initial setup**

```bash
git add .
git commit -m "feat: initialize Next.js project with TypeScript and Tailwind

- Next.js 15 with App Router
- TypeScript configuration
- Tailwind CSS setup
- Updated README with project info

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Configure Tailwind Theme (Indonesian-focused)

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

**Step 1: Update Tailwind config with custom Indonesian theme**

Replace contents of `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
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
          50: '#fafaf9',
          100: '#f8f6f4',
          200: '#f0ede8',
          300: '#e2ddd5',
          700: '#5c5854',
          800: '#3d3d3d',
          900: '#292524',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
```

**Step 2: Update global CSS with base styles**

Replace contents of `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-neutral-50 text-neutral-800;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

**Step 3: Verify theme is working**

Run: `npm run dev`

Visit http://localhost:3000 and inspect element - verify custom colors are available in Tailwind

**Step 4: Commit theme configuration**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "feat: configure Indonesian-focused Tailwind theme

- Add warm terracotta primary colors
- Add warm gold secondary colors
- Add warm neutral grays
- Configure Inter font family
- Add smooth scroll behavior

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Create Root Layout with Metadata

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Update root layout with Indonesian metadata**

Replace contents of `app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "InvoiceKirim - Bikin Invoice Profesional dalam 30 Detik",
  description: "Nggak perlu Excel, nggak perlu template ribet. Platform invoice untuk freelancer dan UMKM Indonesia. Gratis untuk memulai!",
  keywords: ["invoice", "freelancer", "UMKM", "Indonesia", "gratis", "invoice generator"],
  authors: [{ name: "InvoiceKirim" }],
  openGraph: {
    title: "InvoiceKirim - Invoice Profesional untuk Freelancer Indonesia",
    description: "Bikin dan kirim invoice dalam hitungan detik. Tanpa ribet, tanpa setup rumit.",
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
    <html lang="id" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

**Step 2: Verify metadata in browser**

Run: `npm run dev`

Visit http://localhost:3000, view page source and verify:
- Title tag contains Indonesian text
- Meta description present
- HTML lang="id"

**Step 3: Commit layout updates**

```bash
git add app/layout.tsx
git commit -m "feat: configure root layout with Indonesian metadata

- Add SEO-optimized title and description in Indonesian
- Configure Inter font with optimal loading
- Set locale to id_ID for Indonesian content

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Create Navbar Component

**Files:**
- Create: `components/Navbar.tsx`

**Step 1: Create components directory**

Run: `mkdir -p components`

**Step 2: Create Navbar component**

Create `components/Navbar.tsx`:

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              InvoiceKirim
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("fitur")}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection("harga")}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Harga
            </button>
            <button
              onClick={() => scrollToSection("login")}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Mulai Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-700 hover:text-primary-600"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("fitur")}
                className="text-neutral-700 hover:text-primary-600 text-left px-2 py-2 transition-colors"
              >
                Fitur
              </button>
              <button
                onClick={() => scrollToSection("harga")}
                className="text-neutral-700 hover:text-primary-600 text-left px-2 py-2 transition-colors"
              >
                Harga
              </button>
              <button
                onClick={() => scrollToSection("login")}
                className="text-neutral-700 hover:text-primary-600 text-left px-2 py-2 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => scrollToSection("cta")}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold text-center transition-all"
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

**Step 3: Test Navbar in browser**

Add Navbar to `app/page.tsx` temporarily to test:

```typescript
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div style={{ height: '200vh', paddingTop: '100px' }}>
        <h1>Test Scroll</h1>
        <div id="fitur" style={{ marginTop: '100vh' }}>Fitur Section</div>
      </div>
    </main>
  );
}
```

Run: `npm run dev`

Expected:
- Navbar appears at top
- Becomes solid white with shadow on scroll
- Mobile menu toggles on small screens
- Smooth scroll works when clicking links

**Step 4: Commit Navbar component**

```bash
git add components/Navbar.tsx app/page.tsx
git commit -m "feat: create responsive Navbar component

- Sticky navbar with scroll-based background transition
- Desktop horizontal menu with smooth scroll navigation
- Mobile hamburger menu
- InvoiceKirim logo and CTA button
- Smooth scroll to sections

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 5: Create Hero Component

**Files:**
- Create: `components/Hero.tsx`

**Step 1: Create Hero component**

Create `components/Hero.tsx`:

```typescript
export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Bikin Invoice Profesional dalam{" "}
              <span className="text-primary-500">30 Detik</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
              Nggak perlu Excel, nggak perlu template ribet.
              <br />
              Isi form, klik kirim, selesai.
            </p>

            <div className="pt-4">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg">
                Mulai Gratis — Tanpa Kartu Kredit
              </button>
              <p className="text-sm text-neutral-600 mt-3">
                ✨ Gratis untuk 5 invoice pertama. Nggak perlu kartu kredit.
              </p>
            </div>
          </div>

          {/* Right: Mockup Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 via-secondary-100 to-primary-200 rounded-2xl shadow-2xl border-4 border-white flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-4xl">📄</span>
                </div>
                <p className="text-neutral-600 font-medium">
                  Invoice Mockup
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  Screenshot coming soon
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-400 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add Hero to page**

Update `app/page.tsx`:

```typescript
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
```

**Step 3: Test Hero in browser**

Run: `npm run dev`

Expected:
- Hero section displays below navbar
- Two-column layout on desktop
- Stacked layout on mobile
- Button has hover effect
- Mockup placeholder visible with gradient

**Step 4: Commit Hero component**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: create Hero section with Indonesian copy

- Bold headline emphasizing 30-second speed
- Casual Indonesian sub-headline
- Primary CTA with no credit card message
- Gradient mockup placeholder
- Responsive two-column layout
- Decorative background elements

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 6: Create Features Component

**Files:**
- Create: `components/Features.tsx`

**Step 1: Create Features component**

Create `components/Features.tsx`:

```typescript
export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Invoice Instan",
      description: "Isi form sederhana, invoice langsung jadi",
    },
    {
      icon: "🔗",
      title: "Share Link",
      description: "Kirim invoice lewat link, client buka di browser",
    },
    {
      icon: "✅",
      title: "Track Status",
      description: "Tau mana yang udah dibayar, mana yang belum",
    },
  ];

  return (
    <section id="fitur" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Fitur yang Bikin Hidup Lebih Mudah
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Semua yang kamu butuhkan untuk bikin dan kirim invoice profesional
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-50 p-8 rounded-2xl border-2 border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
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

**Step 2: Add Features to page**

Update `app/page.tsx`:

```typescript
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
```

**Step 3: Test Features in browser**

Run: `npm run dev`

Expected:
- Three feature cards in grid
- Hover effect: lift and shadow
- Responsive: 1 column mobile, 2 tablet, 3 desktop
- Icons display correctly

**Step 4: Commit Features component**

```bash
git add components/Features.tsx app/page.tsx
git commit -m "feat: create Features section with 3 key features

- Invoice Instan: Simple form to instant invoice
- Share Link: Browser-based sharing
- Track Status: Payment tracking
- Responsive grid layout (1/2/3 columns)
- Hover effects with lift and border color change

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 7: Create Social Proof Component

**Files:**
- Create: `components/SocialProof.tsx`

**Step 1: Create SocialProof component**

Create `components/SocialProof.tsx`:

```typescript
export default function SocialProof() {
  const testimonials = [
    {
      quote: "Dulu bikin invoice pakai Excel bisa 15 menit. Sekarang cuma 1 menit!",
      name: "Budi",
      role: "Freelance Designer",
      initials: "B",
      color: "bg-primary-400",
    },
    {
      quote: "Simpel banget! Client langsung bisa bayar lewat link.",
      name: "Sari",
      role: "Social Media Manager",
      initials: "S",
      color: "bg-secondary-400",
    },
    {
      quote: "Gratis tapi fiturnya lengkap untuk freelancer pemula.",
      name: "Andi",
      role: "Web Developer",
      initials: "A",
      color: "bg-primary-600",
    },
  ];

  const stats = [
    { number: "500+", label: "Invoice Dibuat" },
    { number: "Rp 2M+", label: "Tertagih" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Dipercaya Freelancer Indonesia
          </h2>
          <p className="text-lg text-neutral-600">
            Apa kata mereka yang sudah pakai InvoiceKirim
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-neutral-700 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12 pt-8 border-t-2 border-neutral-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </p>
              <p className="text-neutral-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add SocialProof to page**

Update `app/page.tsx`:

```typescript
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
    </main>
  );
}
```

**Step 3: Test SocialProof in browser**

Run: `npm run dev`

Expected:
- Three testimonial cards with avatar circles
- Stats section below with large numbers
- Responsive grid
- Hover shadow effect on cards

**Step 4: Commit SocialProof component**

```bash
git add components/SocialProof.tsx app/page.tsx
git commit -m "feat: create SocialProof section with testimonials

- 3 dummy testimonials from Indonesian freelancers
- Avatar circles with initials and brand colors
- Stats: 500+ invoices, Rp 2M+ collected
- Responsive grid layout
- Hover shadow effects

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 8: Create Pricing Component

**Files:**
- Create: `components/Pricing.tsx`

**Step 1: Create Pricing component**

Create `components/Pricing.tsx`:

```typescript
export default function Pricing() {
  const plans = [
    {
      name: "Gratis",
      price: "Rp 0",
      period: "/selamanya",
      features: [
        "5 invoice/bulan",
        "1 template",
        "Support email",
      ],
      cta: "Mulai Gratis",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "Rp 49.000",
      period: "/bulan",
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
    <section id="harga" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Harga yang Ramah di Kantong
          </h2>
          <p className="text-lg text-neutral-600">
            Mulai gratis, upgrade kalau udah butuh lebih
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border-2 transition-all hover:-translate-y-1 hover:shadow-xl ${
                plan.highlighted
                  ? "border-primary-500 bg-primary-50 shadow-lg"
                  : "border-neutral-200 bg-white shadow-md"
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-neutral-900">
                    {plan.price}
                  </span>
                  <span className="text-neutral-600 ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-500 mr-3 text-xl">✓</span>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                  plan.highlighted
                    ? "bg-primary-500 hover:bg-primary-600 text-white shadow-md"
                    : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <p className="text-center text-neutral-600 mt-8">
          Semua paket termasuk akses ke fitur dasar invoice
        </p>
      </div>
    </section>
  );
}
```

**Step 2: Add Pricing to page**

Update `app/page.tsx`:

```typescript
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
    </main>
  );
}
```

**Step 3: Test Pricing in browser**

Run: `npm run dev`

Expected:
- Two pricing cards side by side on desktop
- Pro plan highlighted with primary color
- Checkmarks for features
- Hover lift effect
- Responsive stacking on mobile

**Step 4: Commit Pricing component**

```bash
git add components/Pricing.tsx app/page.tsx
git commit -m "feat: create Pricing section with 2-tier plans

- Gratis: 5 invoices/month, 1 template
- Pro: Rp 49k/month, unlimited invoices, custom branding
- Highlighted Pro plan with primary color accent
- Feature comparison with checkmarks
- Responsive two-column layout

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 9: Create CTA Component

**Files:**
- Create: `components/CTA.tsx`

**Step 1: Create CTA component**

Create `components/CTA.tsx`:

```typescript
export default function CTA() {
  return (
    <section id="cta" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Mulai Bikin Invoice Sekarang
        </h2>
        <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
          Nggak perlu tunggu lama. Daftar gratis dan kirim invoice pertama kamu dalam 30 detik.
        </p>
        <button className="bg-white hover:bg-neutral-100 text-primary-600 px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl">
          Daftar Gratis
        </button>
        <p className="text-primary-100 text-sm mt-4">
          Gratis untuk 5 invoice pertama • Nggak perlu kartu kredit
        </p>
      </div>
    </section>
  );
}
```

**Step 2: Add CTA to page**

Update `app/page.tsx`:

```typescript
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
      <CTA />
    </main>
  );
}
```

**Step 3: Test CTA in browser**

Run: `npm run dev`

Expected:
- Gradient primary background
- White text and button
- Button hover scale effect
- Centered content

**Step 4: Commit CTA component**

```bash
git add components/CTA.tsx app/page.tsx
git commit -m "feat: create final CTA section

- Bold call-to-action with gradient background
- White button contrasting with primary background
- Reinforces free trial and no credit card message
- Centered, focused layout

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 10: Create Footer Component

**Files:**
- Create: `components/Footer.tsx`

**Step 1: Create Footer component**

Create `components/Footer.tsx`:

```typescript
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">InvoiceKirim</h3>
            <p className="text-neutral-400 leading-relaxed">
              Platform invoice profesional untuk freelancer dan UMKM Indonesia.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Link</h4>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-primary-400 transition-colors">
                  Tentang
                </button>
              </li>
              <li>
                <button className="hover:text-primary-400 transition-colors">
                  Kontak
                </button>
              </li>
              <li>
                <button className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <p className="text-neutral-400">
              Email: hello@invoicekirim.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-500">
            © {currentYear} InvoiceKirim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Add Footer to page**

Update `app/page.tsx`:

```typescript
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
```

**Step 3: Test Footer in browser**

Run: `npm run dev`

Expected:
- Dark footer with 3 columns on desktop
- Stacked columns on mobile
- Hover effects on links
- Copyright with current year

**Step 4: Commit Footer component**

```bash
git add components/Footer.tsx app/page.tsx
git commit -m "feat: create Footer component

- Dark footer with brand, links, and contact info
- 3-column responsive layout
- Link hover effects
- Dynamic copyright year

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 11: Add Accessibility Improvements

**Files:**
- Modify: `components/Navbar.tsx`
- Modify: `components/Hero.tsx`

**Step 1: Add proper ARIA labels and semantic HTML**

Update `components/Navbar.tsx` - add aria-label to logo button:

```typescript
// Line ~31, update logo button:
<button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
  aria-label="InvoiceKirim home"
>
  InvoiceKirim
</button>
```

Update `components/Hero.tsx` - add aria-label to CTA button:

```typescript
// Line ~26, update button:
<button
  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
  aria-label="Mulai menggunakan InvoiceKirim gratis"
>
  Mulai Gratis — Tanpa Kartu Kredit
</button>
```

**Step 2: Test accessibility**

Run: `npm run dev`

Open browser DevTools > Lighthouse > Run accessibility audit

Expected: Score 90+

**Step 3: Commit accessibility improvements**

```bash
git add components/Navbar.tsx components/Hero.tsx
git commit -m "feat: improve accessibility with ARIA labels

- Add aria-label to navigation buttons
- Add descriptive aria-label to CTA buttons
- Ensure semantic HTML structure

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 12: Optimize for Production

**Files:**
- Create: `public/favicon.ico` (placeholder)
- Modify: `next.config.js`

**Step 1: Update Next.js config for static export**

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

**Step 2: Create simple favicon placeholder**

Create a simple text file `public/favicon-note.txt`:

```
Favicon placeholder
Replace with actual favicon.ico file later
```

**Step 3: Test production build**

Run:
```bash
npm run build
```

Expected: Build completes successfully, creates `out/` directory

**Step 4: Test static export**

Run:
```bash
npx serve@latest out
```

Expected: Site works as static export

**Step 5: Commit production optimization**

```bash
git add next.config.js public/favicon-note.txt
git commit -m "feat: configure Next.js for static export

- Set output to export for static hosting
- Unoptimize images for static deployment
- Add favicon placeholder note

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 13: Final Testing and Documentation

**Files:**
- Modify: `README.md`

**Step 1: Update README with complete instructions**

Update `README.md`:

```markdown
# InvoiceKirim

Fast invoice creation and sending platform for Indonesian freelancers and SMEs.

## Features

- ⚡ **Invoice Instan** - Simple form to instant invoice
- 🔗 **Share Link** - Browser-based invoice sharing
- ✅ **Track Status** - Payment status tracking

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

### Static Export

```bash
npm run build
npx serve@latest out
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom Indonesian theme
- **Deployment:** Vercel (or any static hosting)

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features section
│   ├── SocialProof.tsx  # Testimonials
│   ├── Pricing.tsx      # Pricing tiers
│   ├── CTA.tsx          # Call-to-action
│   └── Footer.tsx       # Footer
├── public/              # Static assets
└── docs/plans/          # Design and implementation docs
```

## Design

See `/docs/plans/2026-02-15-invoicekirim-landing-design.md` for complete design specification.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository to Vercel
3. Deploy automatically

### Other Static Hosts

Build static export:

```bash
npm run build
```

Upload `out/` directory to any static hosting (Netlify, GitHub Pages, etc.)

## License

© 2026 InvoiceKirim
```

**Step 2: Final manual testing checklist**

Test manually:
- [ ] All sections visible and properly styled
- [ ] Navbar scroll behavior works
- [ ] Mobile menu toggles correctly
- [ ] Smooth scroll to sections works
- [ ] All hover effects work
- [ ] Responsive at 375px (mobile), 768px (tablet), 1440px (desktop)
- [ ] Indonesian text displays correctly
- [ ] No console errors

**Step 3: Run Lighthouse audit**

Run: Open http://localhost:3000 in Chrome
Open DevTools > Lighthouse > Generate report

Expected scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

**Step 4: Commit README updates**

```bash
git add README.md
git commit -m "docs: update README with complete documentation

- Add feature list
- Add development and deployment instructions
- Document project structure
- Add static export guide

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 14: Create Vercel Deployment Config (Optional)

**Files:**
- Create: `vercel.json` (optional)

**Step 1: Create Vercel config for optimal deployment**

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs",
  "regions": ["sin1"]
}
```

Note: `sin1` is Singapore region (closest to Indonesia for low latency)

**Step 2: Commit Vercel config**

```bash
git add vercel.json
git commit -m "feat: add Vercel deployment configuration

- Set Singapore region for low latency to Indonesia
- Configure build command and output directory

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Success Criteria

✅ **Functionality:**
- All 7 sections render correctly (Navbar, Hero, Features, SocialProof, Pricing, CTA, Footer)
- Navbar scroll behavior works
- Mobile menu toggles
- Smooth scroll navigation works
- All buttons styled (static, no functionality)

✅ **Design:**
- Indonesian-focused warm color palette applied
- Casual Indonesian copy throughout
- Responsive across mobile, tablet, desktop
- Hover effects on interactive elements

✅ **Performance:**
- Lighthouse scores 90+ on all metrics
- Page loads < 2s on 3G
- Static export builds successfully

✅ **Code Quality:**
- TypeScript with no errors
- Consistent component structure
- Semantic HTML
- Accessibility features (ARIA labels, keyboard nav)

---

## Next Steps After Landing Page

After validating the landing page with users:

1. **User Authentication** - Implement register/login functionality
2. **Invoice Builder** - Create invoice form and generator
3. **Database Integration** - Set up database for invoice storage
4. **Payment Integration** - Add payment tracking
5. **Email Sending** - Implement invoice delivery

See design document for deferred features.

---

**Implementation Status:** Ready for execution
**Estimated Time:** 3-4 hours for complete implementation
**Dependencies:** Node.js 18+, npm 9+
