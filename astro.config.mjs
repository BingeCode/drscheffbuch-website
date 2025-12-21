// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE ?? "https://drscheffbuch.ch",
  base: process.env.ASTRO_BASE ?? "/",
  outDir: "./docs",
  build: {
    assets: "assets",
  },
  image: {
    layout: "constrained",
    responsiveStyles: true,
    breakpoints: [
      100, 200, 300, 400, 500, 640, 750, 828, 1080, 1280, 1668, 2048, 2560,
    ],
  },
});
