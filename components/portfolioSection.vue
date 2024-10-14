<template>
  <div class="portfolioSection">
    <div class="portfolioSection__portfolio-section" ref="portfolioSectionRef">
      <div
        class="portfolioSection__portfolio-section--title-container"
        ref="portfolioTitleRef"
        id="portfolioTitle"
      >
        <div
          class="portfolioSection__portfolio-section--title-container__title"
        >
          <h1 id="portfolioTitle">Our Work Speaks for Itself</h1>
          <p>Explore our portfolio</p>
        </div>

        <div class="button">
          <p>See All</p>
          <img src="/assets/images/flowerSmall.svg" alt="" />
        </div>
      </div>

      <div class="portfolioSection__portfolio-section--arrows-container">
        <svg
          width="50"
          height="46"
          viewBox="0 0 50 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="scroll('left')"
          class="arrow left-arrow"
          v-if="!isAtEnd"
        >
          <rect
            x="0.657715"
            width="48.5884"
            height="45.2578"
            rx="22.6289"
            fill="#16270C"
          />
          <path
            d="M18.2905 22.6289H31.6132M31.6132 22.6289L26.6172 17.6329M31.6132 22.6289L26.6172 27.6248"
            stroke="#FFF83C"
            stroke-width="2.35105"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          width="50"
          height="46"
          viewBox="0 0 50 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="scroll('right')"
          class="arrow right-arrow"
        >
          <rect
            x="0.657715"
            width="48.5884"
            height="45.2578"
            rx="22.6289"
            fill="#16270C"
          />
          <path
            d="M18.2905 22.6289H31.6132M31.6132 22.6289L26.6172 17.6329M31.6132 22.6289L26.6172 27.6248"
            stroke="#FFF83C"
            stroke-width="2.35105"
            stroke-linecap="round"
            stroke-linejoin="round"
            id="right-arrow"
          />
        </svg>
      </div>
      <div
        class="portfolioSection__portfolio-section--gallery-section"
        ref="galleryRef"
        @scroll="checkScrollPosition"
      >
        <PortfolioCard
          v-for="(work, index) in works"
          :key="index"
          :work="work"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { works } from "../data/works";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { intersectionObserver } from "~/animations/useIntersectionObserver";

gsap.registerPlugin(ScrollTrigger);
console.log({ works });
const galleryRef = ref<HTMLElement | null>(null);
const scrollLeft = ref(0);
const maxScroll = ref(0);
const portfolioSectionRef = ref<HTMLDivElement | null>(null);
const portfolioTitleRef = ref<HTMLDivElement | null>(null);
let cleanup: (() => void) | null = null;

const isAtStart = computed(() => Math.round(scrollLeft.value) === 0);
const isAtEnd = computed(() => Math.round(scrollLeft.value) >= maxScroll.value);

watchEffect(() => {
  console.log([isAtStart.value, isAtEnd.value]);
});

const checkScrollPosition = () => {
  if (galleryRef.value) {
    scrollLeft.value = galleryRef.value.scrollLeft;
    maxScroll.value =
      galleryRef.value.scrollWidth - galleryRef.value.clientWidth;
  }
};

const scroll = (direction: "left" | "right") => {
  if (galleryRef.value) {
    const scrollAmount = direction === "left" ? -300 : 300;
    galleryRef.value.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};

onMounted(() => {
  checkScrollPosition();
  window.addEventListener("resize", checkScrollPosition);
});

onMounted(() => {
  const portfolioTitle = document.querySelector("#portfolioTitle");

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: portfolioTitle,
  //     start: "45% 50%",
  //     scrub: 1,
  //     markers: true,
  //   },
  // });

  // if (portfolioTitleRef.value && portfolioSectionRef.value) {
  //   tl.from(portfolioTitleRef.value.children, {
  //     opacity: 0,
  //     ease: "power2.inOut",
  //     duration: 1,
  //     y: 100,
  //     stagger: 0.2,
  //   }).from(
  //     portfolioSectionRef.value.children[1],
  //     {
  //       opacity: 0,
  //       ease: "power2.inOut",
  //       duration: 1,
  //       y: 100,
  //       stagger: 0.2,
  //     },
  //     "-=1"
  //   );
  // }

  // if (portfolioTitle) {
  //   cleanup = intersectionObserver(
  //     portfolioTitle,
  //     { threshold: 0.2 },
  //     (isIntersecting) => {
  //       if (
  //         isIntersecting &&
  //         portfolioTitleRef.value &&
  //         portfolioSectionRef.value
  //       ) {
  //         tl.from(portfolioTitleRef.value.children, {
  //           opacity: 0,
  //           ease: "power2.inOut",
  //           duration: 1,
  //           y: 100,
  //           stagger: 0.2,
  //         }).from(
  //           portfolioSectionRef.value.children[1],
  //           {
  //             opacity: 0,
  //             ease: "power2.inOut",
  //             duration: 1,
  //             y: 100,
  //             stagger: 0.2,
  //           },
  //           "-=1"
  //         );
  //       }
  //     }
  //   );
  // }
});
</script>

<style scoped lang="scss">
.portfolioSection {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 15rem;

  &__portfolio-section {
    display: flex;
    flex-direction: column;

    &--title-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2.188rem;

      &__title {
        display: flex;
        flex-direction: column;
        gap: 0.688rem;
        max-height: max-content;
        overflow: hidden;

        h1 {
          color: #333;

          font-size: 2.716rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          max-height: max-content;
          overflow: hidden;
        }

        p {
          font-size: 1.125rem;
          color: #16270c;

          font-style: normal;
          font-weight: 450;
          line-height: normal;
          max-width: 42rem;
          max-height: max-content;
          overflow: hidden;
        }
      }
    }

    &--arrows-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2rem;
      margin-bottom: 1rem;
      padding: 0 2rem;
      position: relative;
      max-height: max-content;
      overflow: hidden;

      svg {
        &:nth-child(1) {
          transform: rotate(180deg);
        }
      }
    }

    &--gallery-section {
      width: 100%;
      position: relative;
      right: 0;
      max-width: 100%;
      overflow-y: hidden;
      display: flex;
      gap: 1.875rem;
      padding-left: 2rem;
      padding-bottom: 2rem;
      margin-top: 1rem;

      &::-webkit-scrollbar {
        display: none;
      }

      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
}
</style>
