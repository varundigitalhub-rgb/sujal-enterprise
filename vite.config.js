import { defineConfig } from 'vite';
import { resolve } from 'path';
import { mkdirSync, copyFileSync, existsSync } from 'fs';
import { config } from './js/config.js';

const productRoutes = (config.productDetails || []).map(product => product.slug).filter(Boolean);

function productRoutePlugin() {
  return {
    name: 'sujal-product-routes',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && /^\/products\/[^/.]+\/?$/.test(req.url)) {
          req.url = '/product.html';
        }
        next();
      });
    },
    closeBundle() {
      const productHtml = resolve(__dirname, 'dist/product.html');
      if (!existsSync(productHtml)) return;

      productRoutes.forEach(slug => {
        const routeDir = resolve(__dirname, 'dist/products', slug);
        mkdirSync(routeDir, { recursive: true });
        copyFileSync(productHtml, resolve(routeDir, 'index.html'));
      });
    }
  };
}

export default defineConfig({
  plugins: [productRoutePlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us.html'),
        products: resolve(__dirname, 'products.html'),
        services: resolve(__dirname, 'services.html'),
        industries: resolve(__dirname, 'industries-served.html'),
        quality: resolve(__dirname, 'certifications-quality.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        contact: resolve(__dirname, 'contact-us.html'),
        product: resolve(__dirname, 'product.html')
      }
    }
  }
});
