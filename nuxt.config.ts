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

  runtimeConfig: {
    public: {
      unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
    },
  },

  compatibilityDate: '2025-04-19',
})