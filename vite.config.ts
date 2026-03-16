import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
// import prerender from '@prerenderer/rollup-plugin';
// import RendererPuppeteer from '@prerenderer/renderer-puppeteer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      /* 
      prerender({
        routes: [
          '/', '/products', '/about', '/contact', '/partners', '/faq',
          '/products/palladium', '/products/iq-retail', '/products/sage-200',
          '/products/xact-erp', '/products/medeilplus',
          '/privacy', '/cookies', '/terms'
        ],
        renderer: new RendererPuppeteer({
          renderAfterDocumentEvent: 'render-event',
          launchOptions: {
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
          },
        }),
      })
      */
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
