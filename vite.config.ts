import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Vite config is mostly handled by Nuxt, but this file exposes
// aliases and plugins for editors or tooling that rely on a standard
// Vite configuration.

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': '/src'
    }
  }
})
