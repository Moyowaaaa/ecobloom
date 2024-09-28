// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Ecobloom",
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",

      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://res.cloudinary.com/dyap7epew/image/upload/v1717025623/projects/logo_lbcomw",
        },
      ],
    },
  },

  modules: ["@pinia/nuxt", "@nuxt/image"],

  css: ["@/styles/index.scss"],

  hooks: {
    // Register Service Worker after the build
    "build:before": () => {
      console.log("Service worker setup...");
    },
  },

  // Nuxt build configuration for service worker
  nitro: {
    devProxy: {
      "/sw.js": { target: "/_nuxt/assets/service-worker.js", ws: true },
    },
  },
});
