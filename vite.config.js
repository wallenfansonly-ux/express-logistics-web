import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React ecosystem
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Split animation libraries
          'animation': ['framer-motion'],
          // Split charts
          'charts': ['recharts'],
          // Split map libraries
          'map': ['leaflet', 'react-leaflet'],
          // Split Firebase
          'firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          // Split icons
          'icons': ['react-icons/fa', 'react-icons/lib'],
          // Split utilities
          'utils': ['date-fns', 'canvas-confetti'],
        }
      }
    },
    chunkSizeWarningLimit: 600,
  }
})
