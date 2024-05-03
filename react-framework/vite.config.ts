import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: { // Addition file vite-client.js is created and it contains the code of react framework
        'counter': 'src/elements/counter/main.tsx',
        'add-to-cart': 'src/elements/add-to-cart/main.tsx'
      },
      output: {
        dir: '../assets',
        entryFileNames: 'vite-[name].js',
        chunkFileNames: 'vite-[name].js',
        assetFileNames: 'vite-[name].[ext]'
      }
    },
    watch: {

    },
    emptyOutDir: false, // if it is true then it will delete all the files in the assets directory
  }
})
