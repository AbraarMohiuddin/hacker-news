// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['vuetify/styles'],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    ssr: {
      noExternal: ['vuetify'], // ✅ THIS FIXES THE .css ISSUE
    },
  },

  compatibilityDate: '2025-04-19',
})