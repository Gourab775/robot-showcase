# Robot Temp â€” Interactive 3D Showcase

Live Demo: https://robot-showcase.vercel.app

Category: Frontend / Interactive 3D Experience

Stack: Next.js 16 Â· React 19 Â· TypeScript Â· Tailwind CSS 4 Â· Spline 3D Â· Framer Motion

## Overview

Robot Temp is a premium interactive 3D showcase that presents a robotics concept through a cinematic landing experience. A real-time Spline 3D scene anchors the hero, complemented by feature highlights, metrics, and a conversion-focused CTA â€” all rendered as a fast, SEO-friendly Next.js application with polished motion and responsive design.

The architecture is production-grade: App Router, TypeScript, Tailwind 4, shadcn patterns, and optimized image handling for Spline CDN assets.

## Features

- **Real-Time 3D Hero** â€” Embedded Spline scene (`@splinetool/react-spline`) with responsive framing and graceful loading
- **Motion-Rich Narrative** â€” Framer Motion orchestration across `FeaturesSection`, `StatsSection`, and `CTASection` for scroll and entrance choreography
- **Modern UI System** â€” Tailwind CSS 4 + `class-variance-authority`, `clsx`/`tailwind-merge`, `lucide-react`, and Base UI primitives with `tw-animate-css`
- **Next.js App Router** â€” File-based routing in `src/app`, Geist font optimization via `next/font`, and typed `next.config.ts` with remote image patterns for `spline.design`
- **Production Tooling** â€” ESLint (Next config), strict TypeScript, and static/hosting-ready build output

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4, PostCSS, `tailwind-merge`, `tw-animate-css` |
| 3D | Spline (`@splinetool/react-spline`, `@splinetool/runtime`) |
| Animation | Framer Motion 12 |
| UI | Base UI React, shadcn, lucide-react, Geist |
| Tooling | ESLint 9, `eslint-config-next` |

## Project Structure

```
robot-temp/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ app/
â”‚   â”‚   â”œâ”€â”€ page.tsx            # Home composition (Spline + Features + Stats + CTA)
â”‚   â”‚   â”œâ”€â”€ layout.tsx          # Root layout + fonts
â”‚   â”‚   â””â”€â”€ globals.css
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ spline-demo.tsx     # SplineSceneBasic wrapper
â”‚   â”‚   â”œâ”€â”€ features-section.tsx
â”‚   â”‚   â”œâ”€â”€ stats-section.tsx
â”‚   â”‚   â”œâ”€â”€ cta-section.tsx
â”‚   â”‚   â””â”€â”€ ui/                 # Reusable UI primitives
â”‚   â””â”€â”€ lib/
â”‚       â””â”€â”€ utils.ts
â”œâ”€â”€ public/                     # Static assets
â”œâ”€â”€ next.config.ts              # Next config (remotePatterns for spline.design)
â”œâ”€â”€ components.json             # shadcn config
â”œâ”€â”€ eslint.config.mjs
â”œâ”€â”€ postcss.config.mjs
â”œâ”€â”€ tsconfig.json
â””â”€â”€ package.json
```

## Getting Started

Prerequisites: Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Lint
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

## Deployment

Optimized for static and server hosting:

```bash
npm run build
```

- **Vercel** â€” Zero-config: import repo, framework preset Next.js, build `npm run build`
- **GitHub Pages (static export)** â€” If exporting, set `output: 'export'` in `next.config.ts` and publish `out/`; live at https://robot-showcase.vercel.app
- **Netlify / EdgeOne Pages / Node host** â€” `npm run build` then `npm run start` (SSR) or export for CDN

`next.config.ts` already allows `https://**.spline.design` for optimized images.

## Customization

- **3D Scene** â€” Replace Spline URL in `src/components/spline-demo.tsx` (Spline editor â†’ Export â†’ URL) and adjust scene props
- **Copy & Sections** â€” Edit `src/app/page.tsx` composition and individual sections under `src/components/`
- **Design System** â€” Theme tokens in `src/app/globals.css` / `tailwind.config` (via Tailwind 4 CSS), variants via `cva` in `src/components/ui/`
- **Motion** â€” Tune Framer Motion variants in `features-section.tsx` / `stats-section.tsx`
- **Metadata** â€” Update `src/app/layout.tsx` (`metadata` export) for title/description/OG tags

## License

MIT â€” free for personal and commercial use.

