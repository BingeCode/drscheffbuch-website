# Copilot instructions (drscheffbuch-website)

## Big picture

- Static Astro site (no server/API). Source in `src/`, built output is committed to `docs/`.
- Astro config: `astro.config.mjs` sets `outDir: "./docs"` and `site: "https://bingecode.github.io"` (GitHub Pages-style publishing).
- Main landing page is a single-page section layout: `src/pages/index.astro` composes components and uses anchor navigation (`#start`, `#preise`, `#faq`, …) from `src/components/Navbar.astro`.
- Legal pages use a shared layout: `src/pages/{impressum,datenschutz}.astro` wrap content with `src/layouts/SubPageLayout.astro`.

## How to work locally

- Install deps: `npm install` (or `bun install`; `bun.lock` is present)
- Dev server: `npm run dev` (or `bun run dev`)
- Build (writes `docs/`): `npm run build`
- Preview build: `npm run preview`

## Project conventions (follow existing patterns)

- Components are `.astro` files in `src/components/` and are composed directly in pages (see `src/pages/index.astro`).
- Styling is mostly component-scoped `<style>` blocks; global tokens/fonts live in `src/components/GlobalStyles.astro` via `<style is:global>`.
- Prefer existing CSS variables from `GlobalStyles.astro` (e.g. `--color--primary`) instead of introducing new design tokens.
- Images:
  - For optimized local assets, import from `src/assets/` and render with `astro:assets` `<Image />` (see `HeroSection.astro`, `Footer.astro`).
  - For static files/icons/fonts, use `public/` and reference by absolute path (e.g. `/icon.webp`, `/info.svg`).
- Client-side interactivity is minimal and done inline (see `Navbar.astro` script and `FAQ.astro` with `type="module" is:inline`). Keep JS small and avoid adding frameworks unless required.
- The general layout of the main page (index.astro) is body > section > div
  - The section element and its first div child element have a global style that makes sure all added content has a consistent layout. Use this pattern.
- Make sure the layout functions well on mobile, tablet and desktop

## Generated vs source

- Don’t hand-edit `docs/` HTML/CSS; it’s build output from Astro. Make changes in `src/` and rebuild.

## Content notes

- Site language is German (`lang="de"` in `src/pages/index.astro`). Keep copy consistent (Swiss spelling used in places, e.g. “äusserst”, “ausschliesslich”).
