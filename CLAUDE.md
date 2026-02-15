# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

InvoiceKirim is a fast invoice creation and sending platform targeting Indonesian freelancers and SMEs (UMKM). The core value proposition is simplicity - "Tanpa ribet, tanpa setup yang rumit" - enabling users to create and send professional invoices in seconds.

**Current Phase:** Initial static landing page (no backend, no authentication)

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Tech Stack
- **Framework:** Next.js 16.1.6 with App Router (NOT Pages Router)
- **Language:** TypeScript with strict mode enabled
- **Styling:** Tailwind CSS 4 with custom Indonesian-themed colors
- **React:** Version 19.2.3

### Key Architectural Decisions

1. **App Router Architecture:** Uses Next.js App Router (`app/` directory), not Pages Router. All pages and layouts go in `app/`, components in `components/`.

2. **Import Aliases:** Configured with `@/*` pattern pointing to root. Use `@/components/...` for imports.

3. **Static-First Approach:** Currently a pure static site with no backend, database, or API routes. All interactivity is client-side only. Future backend integration is planned but not yet implemented.

4. **Component Structure:** Landing page composed of seven self-contained components:
   - Navbar (sticky navigation)
   - Hero (main value proposition)
   - Features (3 feature cards)
   - SocialProof (testimonials + stats)
   - Pricing (2-tier pricing)
   - CTA (final call-to-action)
   - Footer

5. **Indonesian Localization:** All copy is in casual Indonesian (bahasa gaul). Design uses warm Indonesian aesthetic with terracotta primary (#e85d3f) and gold secondary colors.

## Design System

### Color Palette
- **Primary (Terracotta):** `primary-500` (#e85d3f) - main brand color
- **Secondary (Gold):** `secondary-500` (#e1a632) - accent color
- **Warm Neutrals:** Custom gray scale with warm undertones

### Typography
Uses Geist Sans and Geist Mono fonts (Google Fonts via next/font).

### Component Philosophy
- Mobile-first responsive design
- Self-contained components with minimal prop drilling
- Hover effects and smooth transitions for polish
- Accessibility considerations (semantic HTML, ARIA labels)

## Project Structure

```
/app              - Next.js App Router pages and layouts
  layout.tsx      - Root layout with fonts and metadata
  page.tsx        - Landing page (combines all sections)
  globals.css     - Tailwind directives + custom styles
/components       - React components (to be created)
/public           - Static assets (images, icons)
  /images         - Mockups, logos, illustrations
/docs/plans       - Design specifications and implementation plans
```

## Important Notes

1. **Design Documentation:** Refer to `/docs/plans/2026-02-15-invoicekirim-landing-design.md` for comprehensive design specifications including component requirements, copy guidelines, and Indonesian cultural considerations.

2. **Implementation Plan:** `/docs/plans/2026-02-15-invoicekirim-landing.md` contains the step-by-step implementation plan with detailed code snippets and commit message templates.

3. **Indonesian Target Audience:**
   - Copy should be casual and friendly ("kamu" instead of formal "Anda")
   - Use colloquial expressions like "Nggak perlu Excel, nggak perlu template ribet"
   - Design aesthetic should feel warm and approachable, not corporate

4. **Static Deployment:** Project is configured for Vercel deployment with static export. No server-side features or API routes in current phase.

5. **TypeScript:** Strict mode is enabled. All components should have proper type definitions.

6. **No Tests Yet:** Testing infrastructure (Jest, React Testing Library) not yet configured. Add when moving beyond landing page phase.
