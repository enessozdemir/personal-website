import { defineConfig as defineVitestConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineVitestConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/personal-website/",
})
