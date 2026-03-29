import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    // P-8: target moderno — evita polyfills innecesarios, bundle más pequeño
    target: 'es2020',
    cssMinify: true,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          // React en su propio chunk con hash → cache agresivo en CDN
          vendor: ['react', 'react-dom'],
          // SweetAlert2 se carga dinámicamente en Contact.jsx (dynamic import)
          // → no es necesario listarlo aquí
        },
      },
    },
  },
})
