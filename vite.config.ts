import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      include: ['src/components', 'src/lib'],
      exclude: ['src/App.tsx', 'src/main.tsx'],
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})