// Define a cache name
const CACHE_NAME = "v1_cache";

// Specify assets to cache
const ASSETS_TO_CACHE = [
  "/_nuxt/assets/images/logo.svg",
  "/_nuxt/assets/images/flowerSmall.svg",
  "/_nuxt/assets/images/X.png",
  "/_nuxt/assets/images/linkedin.png ",
  "/_nuxt/assets/images/instagram.png",
  "/_nuxt/assets/images/flowerBlack.png",
  "/_nuxt/assets/images/bigYellowFlower.png",
  "/_nuxt/assets/images/bigBlackFlower.png",
  "/_nuxt/assets/images/heroIcon.svg",
  "/_nuxt/assets/images/gardenImage.png",
  "/_nuxt/assets/images/testimonialsIcon.svg",
  "/_nuxt/assets/images/testimonialLeft.png",
  "/_nuxt/assets/images/testimonialCenter.png",
  "/_nuxt/assets/images/testimonialRight.png",
  "/_nuxt/assets/images/avatar1.png",
  "/_nuxt/assets/images/avatar2.png",
  "/_nuxt/assets/images/avatar3.png",
  "/_nuxt/assets/images/avatar4.png",

  // Add other paths to assets you want to cache
];

// Install event - cache the specified assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});

// Fetch event - serve cached assets if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
