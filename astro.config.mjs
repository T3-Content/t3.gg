import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://t3.gg",
  image: {
    // Apply responsive image defaults to Markdown content.
    layout: "constrained",
    domains: ["t3.gg", "img.youtube.com"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  plugins: [],
  integrations: [prefetch(), sitemap()],
  redirects: {
    "/links": "/",
    "/faq": "/",
  },
});
