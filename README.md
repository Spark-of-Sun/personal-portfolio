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

## 2. Local Development

Ensure you have **Node.js 20+** installed (see `.nvmrc`).

```bash
# Optional: Use Node 20 via nvm
nvm use

# Install dependencies
npm install

# Start local Next.js development server (http://localhost:3000)
npm run dev

# Run ESLint to verify code quality
npm run lint

# Compile static production export into the /out directory
npm run build

# Preview the static production build locally
npm run preview
```

> **Note**: `npm run preview` runs `npx serve out` to test the exact static output without needing a local development runtime. The `start` script is deliberately omitted because `next start` requires a Node.js server runtime, whereas this project is a fully static export.

---

## 3. How to Edit Content

All portfolio content is maintained in a single typed configuration file:
👉 **[`src/content/site.ts`](src/content/site.ts)**

You do not need to touch React components to edit bio details, skills, or project entries.

### Project URLs (`repoUrl` and `liveUrl`):
Each project in `src/content/site.ts` contains:
```typescript
{
  id: "rag-qa-system",
  title: "Legal/Medical RAG Q&A System",
  period: "Jun 2026 – Present",
  stack: ["Python", "FastAPI", "Next.js", "LLMs", "Qdrant", "PostgreSQL"],
  bullets: [ ... ],
  // Empty strings hide the corresponding button automatically:
  repoUrl: "", // TODO: Add GitHub URL when ready
  liveUrl: "", // TODO: Add live deployment URL when ready
}
```

- When `repoUrl` is populated (e.g., `"https://github.com/Spark-of-Sun/..."`), a **Source Code** button renders on the card.
- When `liveUrl` is populated (e.g., `"https://cpaa.ganpatikrsah.site"`), a **Live project** button with an external-link icon renders and announces target hostname `cpaa.ganpatikrsah.site` in monospace font.
- If a project is not yet live or public, keep `liveUrl` and/or `repoUrl` as empty strings `""`.

### Resume PDF:
The resume download button points to `/Ganpati_Kumar_Sah_Resume.pdf`. The resume file is located at `public/Ganpati_Kumar_Sah_Resume.pdf`. Whenever you update your resume, replace that file and commit the change.

---

## 4. First Push to GitHub

The GitHub repository is:
**`https://github.com/Spark-of-Sun/personal-portfolio`**

If the repository does not exist yet on GitHub, create it as a new empty repository (do NOT initialize with a README, .gitignore, or license).

Run the following commands:
```bash
git remote add origin https://github.com/Spark-of-Sun/personal-portfolio.git
git branch -M main
git push -u origin main
```

> ⚠️ **Important Note**: If the repository on GitHub already contains commits (e.g., an initial commit), **do not force-push** (`git push --force`). Either pull and merge first:
> ```bash
> git pull origin main --allow-unrelated-histories
> git push -u origin main
> ```
> or push to a new branch (e.g., `git checkout -b feature/initial-site && git push -u origin feature/initial-site`) and open a pull request into `main`.

---

## 5. Cloudflare Pages Deployment (Git-Connected)

This project is deployed through Cloudflare Pages' native Git integration, **not** direct CLI uploads.

### Step-by-Step Setup:
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Authorize GitHub and select the repository **`personal-portfolio`**.
   - *Note*: Private repositories are fully supported. If `personal-portfolio` is not listed in the dropdown, go to **GitHub → Settings → Applications → Cloudflare Pages → Configure** and grant Cloudflare Pages access to `Spark-of-Sun/personal-portfolio`.
4. Configure build settings:
   - **Project name**: `personal-portfolio` (this produces the default preview domain `personal-portfolio.pages.dev`).
     - *Note*: If you previously had an old direct-upload project named `ganpatikrsah-portfolio`, it cannot be converted to Git. Leave it unused or delete it once your domain is pointed to `personal-portfolio`.
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave blank or default)
5. Environment Variables:
   - Add variable: `NODE_VERSION` = `20`
6. Click **Save and Deploy**.

### Branch Deployments:
- Pushes to the **`main`** branch automatically trigger a production deployment to `ganpatikrsah.site`.
- Pushes to any other branch automatically trigger an isolated **Preview Deployment** with a unique URL (e.g. `https://<branch>.personal-portfolio.pages.dev`).
- Note that `public/_headers` instructs search engine crawlers not to index `*.pages.dev` URLs (`X-Robots-Tag: noindex`), protecting your canonical search rankings on `ganpatikrsah.site`.

---

## 6. Custom Domain Configuration

After your first deployment succeeds:
1. In Cloudflare Pages, open the **`personal-portfolio`** project.
2. Select the **Custom domains** tab.
3. Click **Set up a custom domain**.
4. Add **ONLY** these two domains:
   - `ganpatikrsah.site`
   - `www.ganpatikrsah.site`
5. If either domain is currently bound to an old direct-upload project (such as `ganpatikrsah-portfolio`), delete the custom domain from that old project first before binding it here.
6. Cloudflare will automatically provision Universal SSL/TLS certificates and create the appropriate CNAME/Apex DNS records.
7. Verify by visiting `https://ganpatikrsah.site` in your browser.

---

## 7. www → Apex Domain 301 Redirect Rule

To ensure consistent SEO authority and prevent duplicate content, all traffic to `www.ganpatikrsah.site` must permanently redirect (301) to `https://ganpatikrsah.site`.

Because Cloudflare Pages `_redirects` only matches URL paths and **not** hostnames, host redirection must be configured in Cloudflare Dashboard Redirect Rules:

1. In Cloudflare Dashboard, select your domain **`ganpatikrsah.site`**.
2. Go to **Rules** → **Redirect Rules** (or **Page Rules**).
3. Click **Create rule**.
4. Configure the rule:
   - **Rule name**: `Redirect www to apex`
   - **If incoming requests match**: Custom filter expression
   - **Field**: `Hostname`
   - **Operator**: `equals`
   - **Value**: `www.ganpatikrsah.site`
     *(CRITICAL: Do NOT use wildcard `*ganpatikrsah.site`, otherwise you would accidentally redirect `cpaa.ganpatikrsah.site`!)*
   - **Then**:
     - **Type**: `Dynamic`
     - **Expression**: `concat("https://ganpatikrsah.site", http.request.uri.path)`
     - **Status code**: `301` (Permanent Redirect)
     - **Preserve query string**: Yes (Checked)
5. Click **Deploy**.

Now `https://www.ganpatikrsah.site/` seamlessly redirects to `https://ganpatikrsah.site/`.

---

## 8. Subdomains (`cpaa.ganpatikrsah.site`)

The **Configurable Personal AI Agent (CPAA)** application is deployed at:
`https://cpaa.ganpatikrsah.site`

### Important Architectural Rules:
- **Separate Application**: CPAA is a separate service deployed outside this repository (it runs its own FastAPI backend).
- **Do NOT add as a custom domain**: Do NOT add `cpaa.ganpatikrsah.site` under the Pages project custom domains.
- **DNS Record**: Manage `cpaa` independently under **Cloudflare Dashboard → DNS → Records**. Point the `A` or `CNAME` record for `cpaa` to the VPS, cloud container, or host running the FastAPI service.
- **Security & CSP**: The portfolio only provides an outbound link (`<a target="_blank" rel="noopener noreferrer">`). No iframe embeds, no runtime API fetches, and no CSP modifications are required.
- **Sitemap & SEO**: `cpaa.ganpatikrsah.site` is deliberately excluded from `sitemap.xml`, `robots.txt`, and JSON-LD schema on this portfolio site.
- **Availability**: If CPAA is temporarily offline or being upgraded, set `liveUrl: ""` in `src/content/site.ts` to cleanly hide the live button until the service is active.

---

## 9. Troubleshooting

### Build fails on Cloudflare but works locally
- Check the Cloudflare build log. Ensure the build command is set to `npm run build` (not `next build` or `npx wrangler pages publish`).
- Verify that the build output directory is set to `out`.
- Confirm `NODE_VERSION` is set to `20` in project environment variables.

### Wrong Node version
- Cloudflare Pages defaults to older Node runtimes unless specified.
- Verify `.nvmrc` exists in the repo root with `20`, and ensure `NODE_VERSION` is set to `20` under **Settings → Environment Variables** in the Pages project.

### 404 on refresh or deep link
- Ensure `next.config.mjs` has `trailingSlash: true`. This causes Next.js to generate directory structures (e.g. `out/index.html`) that Cloudflare Pages serves cleanly without server-side routing engines.

### Fonts not loading or flickering
- We use `next/font/google` with `display: 'swap'` and CSS variables (`--font-sans`, `--font-mono`). Fonts are inlined and statically optimized at build time. No external Google Font requests are made at runtime, avoiding CSP blocking.

### Stale cache after new deploy
- Cloudflare Pages purges edge cache automatically on new deployments. If you experience stale browser cache, hard-refresh (`Ctrl+F5` or `Cmd+Shift+R`). Note that static assets under `/_next/static/*` have a 1-year immutable cache header because their filenames contain unique content hashes.

### Resume button 404
- Verify that `public/Ganpati_Kumar_Sah_Resume.pdf` is committed in Git and that the filename case matches exactly: `Ganpati_Kumar_Sah_Resume.pdf`.

### "Live project" link not loading
- Verify the DNS record for `cpaa.ganpatikrsah.site` under Cloudflare DNS. Test with `dig cpaa.ganpatikrsah.site` or `curl -I https://cpaa.ganpatikrsah.site`. If the CPAA backend is not deployed yet, set `liveUrl: ""` in `src/content/site.ts`.

### Repo not showing up in Cloudflare's GitHub list
- In GitHub, go to: **Settings → Applications → Cloudflare Pages → Configure**.
- Under **Repository access**, ensure either "All repositories" or `Spark-of-Sun/personal-portfolio` is selected.

---

## License
MIT © Ganpati Kumar Sah
