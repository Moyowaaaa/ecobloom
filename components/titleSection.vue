<template>
  <div class="title-section" ref="titleSectionRef">
    <div class="title-section__image-container">
      <img src="/assets/images/frame1.webp" alt="" />
    </div>

    <div class="title-section__main-container">
      <div class="title-section__main-container--text-container">
        <h1 id="titleHeaderText">Transforming Spaces with Nature’s Beauty</h1>
        <p id="titleParagraphText">
          Eco-friendly gardening and landscaping services for a greener tomorrow
        </p>
      </div>

      <div
        class="title-section__main-container--second-container"
        ref="titleSecondContainer"
      >
        <div class="button">
          <p>Get a Quote Now</p>
          <img src="/assets/images/flowerSmall.svg" alt="" />
        </div>

        <div
          class="title-section__main-container--second-container__avatar-section"
        >
          <div
            class="title-section__main-container--second-container__avatar-section--avatars"
          >
            <img src="/assets/images/avatar1.png" alt="" />
            <img src="/assets/images/avatar2.png" alt="" />
            <img src="/assets/images/avatar3.png" alt="" />
            <img src="/assets/images/avatar4.png" alt="" />
          </div>

          <p>
            Join over 200+ in<br />
            transforming your gardens
          </p>
        </div>
      </div>

      <div class="title-section__main-container--scrollButton-container">
        <div class="button" ref="scrollButtonRef" @click="scroll()">
          <p>Scroll</p>
          <img src="/assets/images/arrowdown.svg" alt="" />
        </div>
      </div>
    </div>
    <CustomMouse />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import SplitType from "split-type";

const titleSectionRef = ref<HTMLDivElement | null>(null);
const scrollButtonRef = ref<HTMLDivElement | null>(null);
const titleSecondContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const tl = gsap.timeline();
  const titleHeaderText = SplitType.create("#titleHeaderText", {
    types: "lines,words",
  });
  const titleParagraphText = SplitType.create("#titleParagraphText", {
    types: "words",
  });

  if (
    !titleHeaderText.words ||
    !titleParagraphText.words ||
    !titleSecondContainer.value ||
    !scrollButtonRef.value ||
    !titleSectionRef.value
  )
    return;
  titleHeaderText.words.forEach((word, index) => {
    gsap.from(word, {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      delay: 0.15 + index * 0.05,
    });
  });

  titleParagraphText.words.forEach((word, index) => {
    gsap.from(word, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      delay: 0.05 + index * 0.1,
    });
  });

  gsap.from(titleSecondContainer.value.children, {
    y: 100,
    duration: 2,
    stagger: 0.6,
    ease: "power3.inOut",
  });

  gsap.to(titleSecondContainer.value.children[0].children[1], {
    rotation: 720,
    ease: "none",
    repeat: -1,
    duration: 5,
  });

  tl.to(titleSecondContainer.value.children[0], {
    width: "11rem",
    ease: "power2.inOut",
    duration: 1.5,
    delay: 1,
    justifyContent: "flex-end",
  }).fromTo(
    titleSecondContainer.value.children[0].children[0],
    {
      display: "none",
      opacity: 0,
      y: 100,
    },
    {
      display: "flex",
      opacity: 1,
      ease: "power2.inOut",
      y: 0,
      duration: 1,
    },
    "-=.8"
  );

  gsap.fromTo(
    scrollButtonRef.value.children[1],
    {
      ease: "none",
      opacity: 0,
      y: -5,
    },
    {
      opacity: 1,
      ease: "power3.inOut",
      y: 5,
      duration: 1.5,

      repeat: -1,
    }
  );

  gsap.fromTo(
    titleSectionRef.value.children[0].children,
    {
      scale: 1,
      ease: "power3.inOut",
    },
    {
      scale: 0.95,
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: titleSectionRef.value.children[0].children,
        scrub: 2,
        start: "80% 90%",
      },
    }
  );

  console.log(titleSectionRef.value.children[0].children);
});

const scroll = () => {
  const element = document.getElementById("hero-section");
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - 30,
      behavior: "smooth",
    });
  }
};
</script>

<style scoped lang="scss">
.title-section {
  width: 100%;
  box-sizing: border-box;
  min-height: 95vh;
  max-height: 80rem;
  position: relative;
  display: flex;
  align-items: center;

  color: #ffffff;

  &__image-container {
    height: 100%;
    width: 100%;
    z-index: -10;
    position: absolute;
    top: 0;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 0.75rem;
    }
  }

  &__main-container {
    padding-left: 3.313rem;
    padding-bottom: 2.5rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 2.5rem;

    &--text-container {
      display: flex;
      flex-direction: column;
      gap: 1.125rem;
      width: max-content;
      height: max-content;
      overflow: hidden;

      h1 {
        font-size: 4rem;
        font-weight: 700;
        line-height: normal;
        max-width: 30rem;
        display: flex;
        max-height: max-content;
        overflow: hidden;
      }
      p {
        max-height: max-content;
        overflow: hidden;
      }
    }

    &--second-container {
      width: 100%;
      display: flex;
      align-items: center;
      padding-right: 74px;
      justify-content: space-between;
      height: max-content;
      overflow: hidden;

      .button {
        font-weight: 700;
        overflow: hidden;
        max-height: max-content;
        p {
          display: none;
          min-width: max-content;
        }
      }

      &__avatar-section {
        // display: none;
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: flex-end;

        &--avatars {
          display: flex;
          align-items: center;
          img {
            width: 43px;
            height: 43px;

            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4) {
              margin-left: -21px;
            }
          }
        }

        p {
          // max-width: 20rem;
          text-align: right;
        }
      }
    }

    &--scrollButton-container {
      width: 100%;
      padding-right: 74px;
      display: flex;
      position: absolute;
      bottom: 3.5rem;
      justify-content: center;

      // p {
      //   display: none;
      // }
    }
  }
}
</style>
