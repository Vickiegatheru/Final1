import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Vite preprocessor for things like SCSS, PostCSS, TypeScript, etc.
  preprocess: vitePreprocess(),

  kit: {
    // Use Netlify-specific adapter for correct routing and deployment
    adapter: adapter(),

    // Optional: if you're using client-side routing and prerendering
    prerender: {
      entries: ['*'] // pre-render all static routes
    }
  }
};

export default config;
