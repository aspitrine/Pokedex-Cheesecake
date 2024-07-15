// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "@nuxt/eslint"],
  devtools: { enabled: true },

  typescript: {
    strict: true,
  },

  compatibilityDate: "2024-07-15",
})