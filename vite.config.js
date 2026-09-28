import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/flight-ticket-booking/',
  plugins: [react()],
})
