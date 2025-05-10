import react from '@vitejs/plugin-react';
import path from 'path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import clean from 'vite-plugin-clean';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    clean({
      targetFiles: ['dist'], // Delete the `dist` folder
    }),
    react(),
    dts({
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.stories.{ts,tsx}', 'src/mocks/**', 'src/app/**'],
      rollupTypes: true,
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            {
              src: './tailwind.config.js',
              dest: 'dist/', // Output to the root of dist
            },
          ],
          hook: 'writeBundle', // Make sure it runs after the build
        }),
      ],
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
