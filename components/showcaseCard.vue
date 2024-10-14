<template>
  <div
    class="showcaseCard"
    :style="{ backgroundColor: `${showcase.background}` }"
  >
    <div class="showcaseCard__loading-bar">
      <div
        v-for="n in 4"
        :key="n"
        class="loading-bar-item"
        :class="{ increase: currentVisibleIndex === n - 1 }"
      >
        <div
          class="grow-bar"
          :class="{ 'active-grow': currentVisibleIndex === n - 1 }"
          :style="
            currentVisibleIndex === n - 1
              ? { backgroundColor: showcase.text.headerColor }
              : {}
          "
        ></div>
      </div>
    </div>

    <div class="showcaseCard__text-container">
      <h1 :style="{ color: `${showcase.text.headerColor}` }">
        {{ showcase.title }}
      </h1>
      <p :style="{ color: `${showcase.text.descColor}` }">
        {{ showcase.desc }}
      </p>
    </div>
    <img :src="showcase.image" alt="" />
  </div>
</template>

<script setup lang="ts">
import customInterval from "../utils/interval";
import type { showcase } from "~/types/declarations";

interface showcaseProps {
  showcase: showcase;
  progressTime: number;
  currentVisibleIndex: number;
}

defineProps<showcaseProps>();
</script>

<style scoped lang="scss">
.showcaseCard {
  width: 100%;
  height: 35.688rem;
  border-radius: 21.571px;
  background: #16270c;
  position: relative;
  padding: 2rem 2rem 2rem 2.5rem;
  display: flex;
  gap: 4rem;
  justify-content: space-between;

  &__loading-bar {
    display: flex;
    align-items: center;
    width: max-content;
    position: absolute;
    top: 2rem;
    left: 2.5rem;
    gap: 7px;

    div {
      border-radius: 12px;
      background: #819c72;
      min-height: 5px;
      width: 2.5rem;
      z-index: 20;
    }
  }

  &__text-container {
    position: relative;
    height: 5rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 11rem;
    gap: 29px;

    h1 {
      color: #efe93f;
      font-size: 2.716rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    p {
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 450;
      line-height: normal;
      max-width: 40rem;
    }
  }
}

.increase {
  min-height: 5px;
  width: 7rem !important;
}

.grow-bar {
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.1s linear;
}

.active-grow {
  border-radius: 6px;
  animation: grow 5.1s linear forwards;
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(2.8);
  }
}
</style>
