import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import imageminGifSicle from 'imagemin-gifsicle';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngQuant from 'imagemin-pngquant';
// import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';

export default defineConfig({
  plugins: [
    react(),
    ViteSvgSpriteWrapper({
      icons: './src/assets/icons/*.svg',
      outputDir: './public/icons',
      sprite: {},
    }),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
        png: imageminPngQuant(),
        gif: imageminGifSicle(),
        // svg: imageminSvgo(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp(),
        },
      },
    }),
  ],
  server: {
    host: 'localhost', // default:'local'
    port: 3000, // default: 5173
    open: true, // default: false
  },
  resolve: {
    // 객체타입
    alias: { '@': path.resolve(__dirname, './src') },

    // 배열타입
    // alias: [{find, replacement, customResolver}]
  },
  css: {
    devSourcemap: true,
    modules: {
      // generateScopedName: '[name]__[local]--[hash:base64:12]',
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          reactDom: ['react-dom'],
          reactRouter: ['react-router-dom'],
        },
      },
    },
  },
});
