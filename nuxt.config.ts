// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "@nuxt/eslint", "@vite-pwa/nuxt"],
  devtools: { enabled: true },

  typescript: {
    strict: true,
  },

  compatibilityDate: "2024-07-15",

  pwa: {
    manifest: {
      name: "Pokedex",
      short_name: "Pokedex",
    }
  },
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    }
  }
})
