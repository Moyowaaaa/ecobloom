<template>
  <div class="navbar">
    <div
      class="navbar__container"
      ref="navbarRef"
      @mouseover="maximizeNavbarOnScrollUp"
      @mouseout="minimizeNavbarOnScrollDown"
    >
      <img src="~/assets/images/logo.svg" alt="logo" ref="logoRef" />
      <div class="navbar__container--links-container">
        <p>About Us</p>
        <p>Projects</p>
        <p>Contact Us</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navbarRef = ref<HTMLDivElement | null>(null);
const logoRef = ref<HTMLImageElement | null>(null);
const isScrolledDown = ref<boolean>(false);
let isAnimating = false;

onMounted(() => {
  if (logoRef.value) {
    gsap.to(logoRef.value, {
      rotation: 720, // Two full rotations
      ease: "none",
      delay: 2,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          // Check scroll direction
          if (self.direction === 1 && !isScrolledDown.value) {
            isScrolledDown.value = true;
            minimizeNavbarOnScrollDown();
          } else if (self.direction === -1 && isScrolledDown.value) {
            isScrolledDown.value = false;
            maximizeNavbarOnScrollUp();
          }
        },
      },
    });
  }
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});

const minimizeNavbarOnScrollDown = () => {
  if (!isScrolledDown.value) {
    return;
  } else {
    if (isAnimating) return;
    isAnimating = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating = false;
      },
    });

    if (navbarRef.value && logoRef.value) {
      tl.to(navbarRef.value.children[1], {
        opacity: 0,
        display: "none",
        duration: 0.2,
        ease: "power2.out",
      }).to(
        navbarRef.value,
        {
          width: "4rem",
          duration: 0.25,
          ease: "power2.inOut",
        },
        "-=0.1"
      );
    }
  }
};

const maximizeNavbarOnScrollUp = () => {
  if (isAnimating) return;
  isAnimating = true;

  const tl = gsap.timeline({
    onComplete: () => {
      isAnimating = false;
    },
  });

  if (navbarRef.value && logoRef.value) {
    tl.to(navbarRef.value, {
      width: "22rem",
      duration: 0.25,
      ease: "power2.inOut",
    }).to(
      navbarRef.value.children[1],
      {
        opacity: 1,
        display: "flex",
        duration: 0.2,
        ease: "power2.in",
      },
      "-=0.1"
    );
  }
};
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  display: flex;
  position: fixed;
  padding: 1.751rem 0;
  align-items: center;
  justify-content: center;
  z-index: 20;
  cursor: pointer;

  &__container {
    display: flex;
    width: max-content;
    padding: 0.938rem;
    background-color: #16270c;
    color: #ffffff;
    border-radius: 7rem;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    transition: width 0.5s ease;

    &--links-container {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    img {
      height: 1.75rem;
      width: 1.75rem;
    }
    p {
      min-width: max-content;
    }
  }
}
</style>
