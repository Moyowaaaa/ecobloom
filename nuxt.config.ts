// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Ecobloom",
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "theme-color", content: "#070606" },
        { name: "description", content: "UI/UX designer" },
        { name: "og:description", content: "UI/UX designer" },
        { name: "twitter:description", content: "UI/UX designer" },
        { name: "og:title", content: "Israel Adeniyi" },
        { name: "twitter:title", content: "Israel Adeniyi" },
        { name: "og:site_name", content: "Israel Adeniyi" },
        { name: "og:url", content: "is-preview.vercel.app" },
        { name: "og:type", content: "website" },
        {
          name: "og:image",
          content:
            "https://res.cloudinary.com/dyap7epew/image/upload/v1717025623/projects/r0jzcy86m6hsldyjppmj.png",
        },
        {
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/dyap7epew/image/upload/v1717025623/projects/r0jzcy86m6hsldyjppmj.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://res.cloudinary.com/dyap7epew/image/upload/v1717025623/projects/r0jzcy86m6hsldyjppmj.png",
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
