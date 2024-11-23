// @ts-check
import { defineConfig } from 'astro/config';
import paraglide from '@inlang/paraglide-astro';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  output: "server",
  adapter: vercel(),
  integrations: [paraglide({
    project: "./project.inlang",
    outdir: "./src/paraglide"
  }), tailwind()]
});