import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          jsx: "preserve"
        }
      }
    }
  }
});
