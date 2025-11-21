import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // This plugin creates the _redirects file automatically in dist/
    {
      name: 'add-redirects',
      writeBundle() {
        const redirectsContent = '/* /index.html 200';
        fs.writeFileSync('dist/_redirects', redirectsContent);
        console.log('✔ Netlify _redirects file generated in dist/');
      }
    }
  ],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
