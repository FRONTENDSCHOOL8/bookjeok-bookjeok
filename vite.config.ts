import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import imageminGifSicle from 'imagemin-gifsicle';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngQuant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';

// @ts-ignore
import VitePluginAssetsCopy from './plugins/vite-plugin-assets-copy';

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
        svg: imageminSvgo(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp(),
        },
      },
    }),
    VitePluginAssetsCopy({
      // [입력 파일]
      // 복사할 정적 파일 설정
      input: './public/icons/sprite.svg',
      // [출력 파일]
      // 출력할 파일 경로 및 이름 설정
      // 출력 위치는 `viteConfig.bulid.outDir` 내부
      output: './icons/sprite.svg',
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
    outDir: 'dist',
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
