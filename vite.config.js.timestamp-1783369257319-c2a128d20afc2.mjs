// vite.config.js
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React ecosystem
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // Split animation libraries
          "animation": ["framer-motion"],
          // Split charts
          "charts": ["recharts"],
          // Split map libraries
          "map": ["leaflet", "react-leaflet"],
          // Split Firebase
          "firebase": ["firebase/app", "firebase/auth", "firebase/firestore"],
          // Split icons
          "icons": ["react-icons/fa", "react-icons/lib"],
          // Split utilities
          "utils": ["date-fns", "canvas-confetti"]
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAvLyBTcGxpdCBSZWFjdCBlY29zeXN0ZW1cbiAgICAgICAgICAncmVhY3QtdmVuZG9yJzogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgICAgIC8vIFNwbGl0IGFuaW1hdGlvbiBsaWJyYXJpZXNcbiAgICAgICAgICAnYW5pbWF0aW9uJzogWydmcmFtZXItbW90aW9uJ10sXG4gICAgICAgICAgLy8gU3BsaXQgY2hhcnRzXG4gICAgICAgICAgJ2NoYXJ0cyc6IFsncmVjaGFydHMnXSxcbiAgICAgICAgICAvLyBTcGxpdCBtYXAgbGlicmFyaWVzXG4gICAgICAgICAgJ21hcCc6IFsnbGVhZmxldCcsICdyZWFjdC1sZWFmbGV0J10sXG4gICAgICAgICAgLy8gU3BsaXQgRmlyZWJhc2VcbiAgICAgICAgICAnZmlyZWJhc2UnOiBbJ2ZpcmViYXNlL2FwcCcsICdmaXJlYmFzZS9hdXRoJywgJ2ZpcmViYXNlL2ZpcmVzdG9yZSddLFxuICAgICAgICAgIC8vIFNwbGl0IGljb25zXG4gICAgICAgICAgJ2ljb25zJzogWydyZWFjdC1pY29ucy9mYScsICdyZWFjdC1pY29ucy9saWInXSxcbiAgICAgICAgICAvLyBTcGxpdCB1dGlsaXRpZXNcbiAgICAgICAgICAndXRpbHMnOiBbJ2RhdGUtZm5zJywgJ2NhbnZhcy1jb25mZXR0aSddLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDYwMCxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUE7QUFBQSxVQUVaLGdCQUFnQixDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQTtBQUFBLFVBRXpELGFBQWEsQ0FBQyxlQUFlO0FBQUE7QUFBQSxVQUU3QixVQUFVLENBQUMsVUFBVTtBQUFBO0FBQUEsVUFFckIsT0FBTyxDQUFDLFdBQVcsZUFBZTtBQUFBO0FBQUEsVUFFbEMsWUFBWSxDQUFDLGdCQUFnQixpQkFBaUIsb0JBQW9CO0FBQUE7QUFBQSxVQUVsRSxTQUFTLENBQUMsa0JBQWtCLGlCQUFpQjtBQUFBO0FBQUEsVUFFN0MsU0FBUyxDQUFDLFlBQVksaUJBQWlCO0FBQUEsUUFDekM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsdUJBQXVCO0FBQUEsRUFDekI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
