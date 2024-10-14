<template>
  <div
    class="portfolio-card"
    ref="portfolioCardRef"
    @mouseenter="onHoverAnimation"
    @mouseleave="onHoverOutAnimation"
  >
    <div class="portfolio-card__image-container">
      <img :src="work.image" alt="" ref="imageRef" />
    </div>

    <div class="portfolio-card__text-container">
      <div class="portfolio-card__text-container--where">
        <div class="rounded-tag">
          <p>{{ work.location }}</p>
        </div>
      </div>

      <div class="portfolio-card__text-container--desc">
        <div class="tag">
          <p>{{ work.title }}</p>
          <img :src="work.icon" :alt="work.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { work } from "~/types/declarations";
import gsap from "gsap";

const portfolioCardRef = ref<HTMLDivElement | null>(null);
const imageRef = ref<HTMLImageElement | null>(null);

interface interfaceWorkDetails {
  work: work;
}

defineProps<interfaceWorkDetails>();

const onHoverAnimation = () => {
  if (imageRef.value) {
    gsap.killTweensOf(imageRef.value);
    gsap.to(imageRef.value, {
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(imageRef.value, {
      scale: 2,
      duration: 20,
      ease: "power3.inOut",
      delay: 0.3,
    });
  }

  if (portfolioCardRef.value) {
    const textElements = portfolioCardRef.value.querySelectorAll(
      ".portfolio-card__text-container--where, .portfolio-card__text-container--desc"
    );
    gsap.killTweensOf(textElements);

    gsap.to(textElements, {
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
    });
  }
};

const onHoverOutAnimation = () => {
  if (imageRef.value) {
    gsap.killTweensOf(imageRef.value);
    gsap.to(imageRef.value, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  if (portfolioCardRef.value) {
    const textElements = portfolioCardRef.value.querySelectorAll(
      ".portfolio-card__text-container--where, .portfolio-card__text-container--desc"
    );
    gsap.killTweensOf(textElements); // Kill any ongoing animations
    gsap.to(textElements, {
      opacity: 0,
      duration: 0.3,
    });
  }
};
</script>

<style scoped lang="scss">
.portfolio-card {
  min-width: 28.375rem;
  height: 22.875rem;
  position: relative;
  overflow: hidden;
  max-height: 22.875rem;
  border-radius: 18.395px;
  &__image-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    max-height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(1) brightness(0.7);
      transition: filter 0.3s ease;
    }
  }

  &:hover {
    .portfolio-card__image-container img {
      filter: grayscale(0) brightness(1);
    }
  }

  &__text-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    &--where {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      opacity: 0;
    }

    &--desc {
      position: absolute;
      bottom: 1.25rem;
      left: 1.25rem;
      opacity: 0;
    }
  }
}
</style>
