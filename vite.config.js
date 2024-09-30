import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gif', '**/*.GIF'], // Ensure both lowercase and uppercase GIF files are included
  server: {
    hmr: {
      overlay: false, // Disable the full-screen error overlay for a better dev experience
    },
  },
});