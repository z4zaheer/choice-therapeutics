// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://z4zaheer.github.io',
  base: '/choice-therapeutics',
  vite: {
    plugins: [tailwindcss()]
  }
});