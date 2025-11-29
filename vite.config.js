// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',        // use current folder as root
  build: {
    outDir: 'dist', // where Vite will put the production build
  }
});
