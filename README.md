# Ganpati Kumar Sah — Personal Portfolio

Production-ready, high-performance personal portfolio website for **Ganpati Kumar Sah**, AI/ML Engineer (LLMs, RAG, Python), Bengaluru, India.

Built with Next.js (App Router, static export), TypeScript, and Tailwind CSS. Hosted on Cloudflare Pages via Git integration with continuous deployments to [ganpatikrsah.site](https://ganpatikrsah.site).

---

## 1. Project Overview & Tech Stack

This repository contains the complete source code for Ganpati Kumar Sah's personal portfolio. It is designed to be fully static, hyper-fast, accessible (WCAG AA), and resilient without requiring any backend servers, runtime databases, or build-time environment variables.

### Architecture & Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router) with full static export (`output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`).
- **Language**: TypeScript (`strict: true`).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with dark-mode first design, custom warm amber/sun accent color system ("Spark of Sun"), and semantic tokens.
- **Typography**: `next/font/google` using Inter (body) and JetBrains Mono (monospaced chips, metadata, and timestamps).
- **Icons**: [Lucide React](https://lucide.dev/) (no emojis used for system icons).
- **Motion**: Subtle reveal transitions powered by [Framer Motion](https://www.framer.com/motion/) with complete fallback respect for `prefers-reduced-motion`.
- **Theme**: Dark-first with light-mode toggle, persisted in `localStorage` with zero flash of unstyled theme on initial page load.
- **SEO & Metadata**: Complete Open Graph, Twitter card tags, JSON-LD (`Person` schema), `robots.txt`, and static `sitemap.xml`.
- **Hosting & CI/CD**: Cloudflare Pages connected directly to GitHub (`Spark-of-Sun/personal-portfolio`). Every push to `main` triggers a production deploy; other branches generate isolated preview deploys.


---

## Environment Variables

Copy `.env.example` to `.env` to configure optional build-time variables. The project builds completely statically with zero environment variables required.

> **Important**: All variables prefixed with `NEXT_PUBLIC_*` are inlined into the client-side JavaScript bundle during the build and are publicly visible to every visitor. Never store secrets, private API keys, or storage credentials in them.

| Variable | Default Fallback | Description |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | `https://ganpatikrsah.site` | Canonical public site URL, used for SEO canonical tags, Open Graph, Twitter cards, sitemap, and JSON-LD structured data. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `contact@ganpatikrsah.site` | Contact email address displayed on the site and used for email links. |
| `NEXT_PUBLIC_ASSETS_BASE_URL` | `""` (empty string) | Base URL for hosted static assets (cloud blob storage, CDN). Used by `assetUrl()`. The resume button stays hidden while empty. |
| `NEXT_PUBLIC_CPAA_URL` | `""` (empty string) | Destination URL for the live CPAA project. The "Live project" button on the CPAA project card stays hidden while empty. |
