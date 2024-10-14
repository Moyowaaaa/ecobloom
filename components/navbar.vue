<template>
  <div class="navbar">
    <div
      class="navbar__container"
      ref="navbarRef"
      @mouseover="maximizeNavbarOnScrollUp"
    >
      <NuxtLink to="/" ref="logoRef">
        <img
          src="~/assets/images/logo.svg"
          alt="logo"
          class="logo"
          @click="scrollUp()"
        />
      </NuxtLink>

      <div class="navbar__container--links-container">
        <NuxtLink
          to="/about"
          class="links"
          :class="{ active: route.path === '/about' }"
        >
          <p>About Us</p>
        </NuxtLink>
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
const router = useRouter();
const route = useRoute();
const navbarRef = ref<HTMLDivElement | null>(null);
const logoRef = ref<HTMLImageElement | null>(null);
const isScrolledDown = ref<boolean>(false);
let isAnimating = false;
console.log(["gfg", route.path]);

const scrollUp = () => {
  const element = document.getElementById("top");
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - 30,
      behavior: "smooth",
    });
  }
};

onMounted(() => {
  if (logoRef.value) {
    const totalRotation = 1440; // Two full rotations

    // Refresh ScrollTrigger after hero section is pinned
    ScrollTrigger.refresh();

    gsap.to(".logo", {
      rotation: 1100,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom+=1000", // Extend the end point to accommodate the pinned section
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentRotation = progress * totalRotation;
          gsap.set(".logo", { rotation: currentRotation });

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
          boxShadow: "0 4px 6px rgba(0, 25, 40, 0.2)",
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
      width: "25.5rem",
      duration: 0.25,
      ease: "power2.inOut",
      boxShadow: "none",
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
  z-index: 30;
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

    &--logo-container {
      width: max-content;
      height: max-content;
      // padding: 12px;
    }

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
      padding: 12px;
      min-width: max-content;
      font-weight: 700;
    }
  }
}

.links {
  &:hover {
    background-color: #fff83c;
    border-radius: 20px;
    color: #16270c !important;
  }
}
.active {
  background-color: #fff83c;
  border-radius: 20px;
  color: #16270c;
}
</style>
