import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'typescript-plugin-css-modules',
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Алиас для удобных импортов
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // camelCase-имена классов в JS (опционально)
    },
  },
});
