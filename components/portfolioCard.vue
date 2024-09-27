<template>
  <div class="portfolio-card">
    <div class="portfolio-card__image-container">
      <img :src="work.image" alt="" />
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
import type { work } from "~/types/declarations";

interface interfaceWorkDetails {
  work: work;
}

defineProps<interfaceWorkDetails>();
</script>

<style scoped lang="scss">
.portfolio-card {
  min-width: 28.375rem;
  height: 22.875rem;
  position: relative;

  &__image-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
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
    }

    &--desc {
      position: absolute;
      bottom: 1.25rem;
      left: 1.25rem;
    }
  }
}
</style>
