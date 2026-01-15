import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  plugins: [],
  integrations: [prefetch(), icon()],
  redirects: {
    "/links": "/",
    "/faq": "/",
  },
});
