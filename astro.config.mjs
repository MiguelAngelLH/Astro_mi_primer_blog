// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // Reemplaza con la URL de tu sitio en Netlify, por ejemplo:
  // site: 'https://mi-sitio-netlify.netlify.app'
  site: 'https://example.com',

  integrations: [preact()],
});