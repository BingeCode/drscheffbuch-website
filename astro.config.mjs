// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://bingecode.github.io",
  base: "/drscheffbuch-website",
  outDir: "./docs",
  build: {
    assets: "assets",
  },
});
