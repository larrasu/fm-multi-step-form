// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Frontend Mentor | Multi-Step Form",
      link: [{ rel: "icon", href: "/favicon-32x32.png" }],
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  googleFonts: {
    families: {
      Ubuntu: [400, 500, 700],
    },
  },
  tailwindcss: {},
});
