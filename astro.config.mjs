import { defineConfig } from 'astro/config';
import path from 'path'; // <-- Не забудьте импортировать 'path'

// https://astro.build/config
export default defineConfig({
  // ... другие настройки Astro
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(new URL('.', import.meta.url).pathname, './src'),
      },
    },
  },
});
