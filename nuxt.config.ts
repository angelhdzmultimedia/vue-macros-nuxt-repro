// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@vue-macros/nuxt', 'nuxt-quasar-ui'],
  macros: {
    setupSFC: true,
    shortVmodel: {
      prefix: '$'
    }
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  quasar: {
    extras: {
      font: 'roboto-font',
      fontIcons: ['fontawesome-v6', 'material-icons'],
    },
    iconSet: 'material-icons',
    plugins: ['Notify', 'Dialog', 'Dark'],
  },
})
