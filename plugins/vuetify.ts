// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useHead } from '#imports'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'light'
    },
  })

  useHead({
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css' },
    ],
  })

  nuxtApp.vueApp.use(vuetify)
})
