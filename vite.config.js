import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/assainment06/', // এখানে আপনার GitHub রিপোজিটরির নাম দিন
})