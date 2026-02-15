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
