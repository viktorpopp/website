// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "JetBrains Mono",
      cssVariable: "--jetbrains-mono",
      provider: fontProviders.google(),
    },
  ],

  integrations: [mdx()],
});
