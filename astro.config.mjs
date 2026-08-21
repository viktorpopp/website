// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "Noto Serif",
      cssVariable: "--noto-serif",
      provider: fontProviders.google(),
    },
  ],

  integrations: [mdx()],
});
