import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      include: '**/*.svg',
    }),
  ],
  root: 'src',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
