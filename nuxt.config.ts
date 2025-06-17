// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    provider: "ipx",
  },
  font: {
    families: {
      inter: true, // auto-loads Inter from Google Fonts
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
  ],
});