// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx()],
	// Netlify serves `dist/<route>/index.html`; trailing-slash URLs and redirects avoid 404s on `/rules` vs `/rules/`.
	trailingSlash: 'always',
});