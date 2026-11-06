# Christian Martinez Mairena — Website

A clean, modern, scalable, and production-ready Next.js web application built with the Next.js App Router, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts:** [Geist & Geist Mono](https://vercel.com/font) via `next/font/google` (zero layout shift, preloaded)
- **Utilities:** `clsx` & `tailwind-merge` (`cn` helper)
- **SEO & Structured Data:** Next.js Metadata API, dynamic `sitemap.xml`, `robots.txt`, JSON-LD schema (WebSite + Person)

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── error.tsx            # Global client-side error boundary
│   ├── favicon.ico          # Application favicon
│   ├── globals.css          # Tailwind CSS tokens, theme variables, and base styles
│   ├── layout.tsx           # Root layout with fonts, metadata, Header, and Footer
│   ├── loading.tsx          # Accessible fallback loading state
│   ├── not-found.tsx        # Branded, accessible 404 handler
│   ├── page.tsx             # Clean placeholder shell (awaiting Figma design)
│   ├── robots.ts            # Dynamic robots.txt generation
│   └── sitemap.ts           # Dynamic sitemap.xml generation
├── components/
│   ├── common/              # Layout & landmark components
│   │   ├── Footer.tsx       # Semantic footer shell
│   │   ├── Header.tsx       # Semantic navigation header shell
│   │   └── SkipLink.tsx     # WCAG 2.1 accessible skip-to-content link
│   ├── seo/
│   │   └── JsonLd.tsx       # Schema.org structured data component
│   └── ui/                  # Reusable UI primitives
│       ├── Button.tsx       # Accessible button with variants & size props
│       ├── Card.tsx         # Modular card primitives
│       └── Container.tsx    # Responsive max-width container wrapper
├── config/
│   └── site.ts              # Centralized site metadata, URLs, navigation links
├── lib/
│   └── utils.ts             # Tailwind class merging utility (`cn`)
└── types/
    └── index.ts             # Global TypeScript interface definitions
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local` if needed:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

### 5. Lint
```bash
npm run lint
```
