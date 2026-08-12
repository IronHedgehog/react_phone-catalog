import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/react_phone-catalog/',
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/modules/shared'),
    },
  },
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[name]__[local]_[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api'],
        additionalData: `@use "@shared/styles/scss-utils/_globals.scss" as *;`,
      },
    },
  },
});
