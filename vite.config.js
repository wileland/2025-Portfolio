import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // allows clean import paths like @/components/xyz
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Removed global injection to prevent circular dependency
        // We are manually using: @use "../../app.scss" as *; in each .scss file
      },
    },
  },
  server: {
    open: true,
    port: 5173,
  },
});
