import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Import the Cloudflare adapter
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: "https://lendr.workers.dev",
  integrations: [tailwind()],
  output: 'server',
  adapter: cloudflare(),
});
