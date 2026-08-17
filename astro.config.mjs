import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.osekosolutions.co.ke",
  integrations: [sitemap()],
});
