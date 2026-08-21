// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "Noto Serif",
      cssVariable: "--noto-serif",
      provider: fontProviders.google(),
    },
  ],
});
