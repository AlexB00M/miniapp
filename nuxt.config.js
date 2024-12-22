// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: "192.168.1.2",
    port: "3000"
  },
  compatibilityDate: "2024-12-20",
  css: ["@/assets/styles/main.css"],
  app: {
    head: {
      title: "Playground Mini-App",
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" }],
    },
  },
})