import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          vendor: ['react', 'react-dom'],
          
          // React Query and routing
          query: ['@tanstack/react-query', 'react-router-dom'],
          
          // Supabase
          supabase: ['@supabase/supabase-js'],
          
          // Form handling
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // UI Framework - split by usage frequency
          'ui-core': [
            '@radix-ui/react-slot',
            '@radix-ui/react-tooltip',
            'class-variance-authority',
            'clsx',
            'tailwind-merge'
          ],
          'ui-components': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-toast',
            'sonner'
          ],
          'ui-advanced': [
            '@radix-ui/react-select',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-scroll-area'
          ],
          
          // Icons - only import what's used
          icons: ['lucide-react'],
          
          // Utilities
          utils: ['date-fns', 'date-fns-tz', 'react-helmet-async']
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
