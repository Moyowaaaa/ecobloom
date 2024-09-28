<template>
  <div>
    <TitleSection />
    <HeroSection />
    <ShowcaseSection />
    <PortfolioSection />
    <Testimonials />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Ecobloom",
  meta: [
    { hid: "description", name: "description", content: "Ecobloom" },
    {
      hid: "og:description",
      name: "og:description",
      content: "Ecobloom",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "Transforming Spaces with Nature’s Beauty",
    },
    { hid: "og:title", name: "og:title", content: "Ecobloom" },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Ecobloom",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "Ecobloom",
    },
    {
      hid: "og:image",
      name: "og:image",
      content:
        "https://res.cloudinary.com/dyap7epew/image/upload/f_auto,q_auto/v1/projects/logo_lbcomw",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content:
        "https://res.cloudinary.com/dyap7epew/image/upload/f_auto,q_auto/v1/projects/logo_lbcomw",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "https://res.cloudinary.com/dyap7epew/image/upload/f_auto,q_auto/v1/projects/logo_lbcomw",
    },
  ],
});
</script>
