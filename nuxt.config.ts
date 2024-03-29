// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],
  googleFonts: {
    families: {
      Dorsa: true,
      'DM+Sans': true,
    }
  },
  devtools: { enabled: true }
})
