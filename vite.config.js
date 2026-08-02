import { defineConfig } from 'vite';
import { resolve } from 'path';
import { mkdirSync, copyFileSync, existsSync } from 'fs';
import { config } from './js/config.js';

const productRoutes = (config.productDetails || []).map(product => product.slug).filter(Boolean);
const materialRoutes = (config.materialDetails || []).map(material => material.slug).filter(Boolean);

function routePlugin() {
  return {
    name: 'sujal-route-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && /^\/products\/[^/.]+\/?$/.test(req.url)) {
          req.url = '/product.html';
        }
        if (req.url && /^\/materials\/[^/.]+\/?$/.test(req.url)) {
          req.url = '/material.html';
        }
        next();
      });
    },
    closeBundle() {
      // Generate product routes
      const productHtml = resolve(__dirname, 'dist/product.html');
      if (existsSync(productHtml)) {
        productRoutes.forEach(slug => {
          const routeDir = resolve(__dirname, 'dist/products', slug);
          mkdirSync(routeDir, { recursive: true });
          copyFileSync(productHtml, resolve(routeDir, 'index.html'));
        });
      }

      // Generate material routes
      const materialHtml = resolve(__dirname, 'dist/material.html');
      if (existsSync(materialHtml)) {
        materialRoutes.forEach(slug => {
          const routeDir = resolve(__dirname, 'dist/materials', slug);
          mkdirSync(routeDir, { recursive: true });
          copyFileSync(materialHtml, resolve(routeDir, 'index.html'));
        });
      }
    }
  };
}

export default defineConfig({
  plugins: [routePlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us.html'),
        products: resolve(__dirname, 'products.html'),
        materials: resolve(__dirname, 'materials.html'),
        quality: resolve(__dirname, 'certifications-quality.html'),
        contact: resolve(__dirname, 'contact-us.html'),
        product: resolve(__dirname, 'product.html'),
        material: resolve(__dirname, 'material.html')
      }
    }
  }
});
