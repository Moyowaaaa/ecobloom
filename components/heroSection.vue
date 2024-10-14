<template>
  <div class="hero-section" id="hero-section">
    <div class="hero-section__text-container">
      <img
        src="/assets/images/bigBlackFlower.png"
        alt="Top Flower"
        class="hero-section__top-image"
        ref="flowerImage"
      />
      <img
        src="/assets/images/bigYellowFlower.png"
        alt="Bottom Flower"
        class="hero-section__bottom-image"
      />

      <div class="tag" id="tag">
        <p>Who we are at EcoBloom</p>
        <img
          src="/assets/images/heroIcon.svg"
          alt="Icon"
          style="width: 14px; height: 14px"
        />
      </div>
      <div class="hero-section__text-container--text" id="hero-text">
        <p>
          At EcoBloom Gardens, we transform spaces with nature’s beauty. Our
          mission is to create stunning, sustainable gardens that bring joy and
          tranquility.
          <span
            >With a passion for eco-friendly practices, we enhance the natural
            beauty of your environment.</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const flowerImage = ref<HTMLImageElement | null>(null);

let heroText: SplitType | null = null;
let scrollTriggerInstance: ScrollTrigger | null = null;

const setupAnimation = async () => {
  await nextTick();

  if (heroText) {
    heroText.revert();
  }
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }

  // Re-initialize SplitType
  heroText = new SplitType("#hero-text p", {
    types: "words,chars",
    tagName: "span",
  });

  // Set up the icon rotation animation
  gsap.to("#tag img", {
    rotation: 720,
    ease: "none",
    repeat: -1,
    duration: 5,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-section",
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: 3,
    },
  });

  tl.fromTo(
    heroText.chars,
    {
      "will-change": "opacity",
      opacity: 0.1,
    },
    {
      opacity: 1,
      stagger: 0.01,
      duration: 1,
    },
    "-=0.5"
  );

  scrollTriggerInstance = ScrollTrigger.getAll().pop() || null;
};

onMounted(() => {
  setupAnimation();
});

onUnmounted(() => {
  if (heroText) {
    heroText.revert();
  }
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
});
</script>

<style scoped lang="scss">
.hero-section {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
  max-height: 100rem;

  img {
    height: 11.5rem;
    width: 10.5rem;
  }

  &__text-container {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
    align-self: center;
    justify-content: center;

    position: relative;
    margin-top: 10rem;
    margin-bottom: 16rem;

    &--text {
      position: relative;
      p {
        color: #3d3d3d;

        text-align: center;
        font-size: 37.144px;
        font-style: normal;
        font-weight: 500;
        line-height: 55px;
        max-width: 62rem;

        span {
          color: #8f8a03;
        }
      }
    }
  }
  &__top-image {
    position: absolute;
    top: -8rem;
    right: 0;

    width: 168.854px;
    height: 184.402px;
  }

  &__bottom-image {
    position: absolute;
    bottom: -4rem;
    left: -10rem;
    width: 125.779px;
    height: 137.36px;
    transform: rotate(-13.787deg);
  }
}
</style>
