# Robot Temp — Interactive 3D Showcase

Live Demo: https://gourab775.github.io/robot-temp

Category: Frontend / Interactive 3D Experience

Stack: Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Spline 3D · Framer Motion

## Overview

Robot Temp is a premium interactive 3D showcase that presents a robotics concept through a cinematic landing experience. A real-time Spline 3D scene anchors the hero, complemented by feature highlights, metrics, and a conversion-focused CTA — all rendered as a fast, SEO-friendly Next.js application with polished motion and responsive design.

The architecture is production-grade: App Router, TypeScript, Tailwind 4, shadcn patterns, and optimized image handling for Spline CDN assets.

## Features

- **Real-Time 3D Hero** — Embedded Spline scene (`@splinetool/react-spline`) with responsive framing and graceful loading
- **Motion-Rich Narrative** — Framer Motion orchestration across `FeaturesSection`, `StatsSection`, and `CTASection` for scroll and entrance choreography
- **Modern UI System** — Tailwind CSS 4 + `class-variance-authority`, `clsx`/`tailwind-merge`, `lucide-react`, and Base UI primitives with `tw-animate-css`
- **Next.js App Router** — File-based routing in `src/app`, Geist font optimization via `next/font`, and typed `next.config.ts` with remote image patterns for `spline.design`
- **Production Tooling** — ESLint (Next config), strict TypeScript, and static/hosting-ready build output

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
├── src/
│   ├── app/
│   │   ├── page.tsx            # Home composition (Spline + Features + Stats + CTA)
│   │   ├── layout.tsx          # Root layout + fonts
│   │   └── globals.css
│   ├── components/
│   │   ├── spline-demo.tsx     # SplineSceneBasic wrapper
│   │   ├── features-section.tsx
│   │   ├── stats-section.tsx
│   │   ├── cta-section.tsx
│   │   └── ui/                 # Reusable UI primitives
│   └── lib/
│       └── utils.ts
├── public/                     # Static assets
├── next.config.ts              # Next config (remotePatterns for spline.design)
├── components.json             # shadcn config
├── eslint.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
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

- **Vercel** — Zero-config: import repo, framework preset Next.js, build `npm run build`
- **GitHub Pages (static export)** — If exporting, set `output: 'export'` in `next.config.ts` and publish `out/`; live at https://gourab775.github.io/robot-temp
- **Netlify / EdgeOne Pages / Node host** — `npm run build` then `npm run start` (SSR) or export for CDN

`next.config.ts` already allows `https://**.spline.design` for optimized images.

## Customization

- **3D Scene** — Replace Spline URL in `src/components/spline-demo.tsx` (Spline editor → Export → URL) and adjust scene props
- **Copy & Sections** — Edit `src/app/page.tsx` composition and individual sections under `src/components/`
- **Design System** — Theme tokens in `src/app/globals.css` / `tailwind.config` (via Tailwind 4 CSS), variants via `cva` in `src/components/ui/`
- **Motion** — Tune Framer Motion variants in `features-section.tsx` / `stats-section.tsx`
- **Metadata** — Update `src/app/layout.tsx` (`metadata` export) for title/description/OG tags

## License

MIT — free for personal and commercial use.
