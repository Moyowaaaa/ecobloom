<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__container--top-section">
        <div class="footer__container--top-section__text-container">
          <h1>Ready to transform your outdoor space?</h1>
          <p>Contact us today, we’re not doing anything</p>
        </div>

        <div class="footer__container--top-section--button">
          <div class="button">
            <p>Get a Quote Now</p>
            <img src="/assets/images/flowerSmall.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="footer__container--main-container">
        <div class="footer__container--main-container__content-container">
          <div
            class="footer__container--main-container__content-container--top-section"
          >
            <div
              class="footer__container--main-container__content-container--top-section__email-section"
            >
              <h1>Contact</h1>
              <p>info@ecbloomgardens.com</p>
            </div>

            <div
              class="footer__container--main-container__content-container--top-section__links-section"
            >
              <h1>Links</h1>

              <div>
                <div>
                  <NuxtLink to="/" @click="scrollUp()">
                    <p>Home</p>
                  </NuxtLink>
                  <NuxtLink to="/about" class="links" @click="scrollUp()">
                    <p>About us</p>
                  </NuxtLink>
                  <p>Services</p>
                  <p>Projects</p>
                </div>

                <div>
                  <p>We are <span>hiring</span></p>
                  <p>Terms of service</p>
                  <p>Services</p>
                  <p>Projects</p>
                </div>
              </div>
            </div>
            <div
              class="footer__container--main-container__content-container--top-section__socials-section"
            >
              <h1>Socials</h1>
              <div>
                <img src="/assets/images/X.png" alt="" />
                <img src="/assets/images/linkedin.png " alt="" />
                <img src="/assets/images/instagram.png" alt="" />
              </div>
            </div>
          </div>

          <div
            class="footer__container--main-container__content-container--bottom-section"
          >
            <div
              class="footer__container--main-container__content-container--bottom-section__logo-container"
              id="logo-container"
              ref="footerLogoContainer"
            >
              <img src="/assets/images/flowerBlack.png" alt="" />
              <h1 id="footer-large-text">ecobloom</h1>
            </div>

            <p class="copy">© 2024 EcoBloom Gardens. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__image-container"></div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { intersectionObserver } from "../animations/useIntersectionObserver";
import SplitType from "split-type";

const footerLogoContainer = ref<HTMLDivElement | null>(null);
let cleanup: (() => void) | null = null;

onMounted(() => {
  const largeText = document.querySelector("#footer-large-text");
  const logoContainer = document.querySelector("#logo-container");
  const bottomSectionContainer = document.querySelector(
    ".footer__container--main-container"
  );

  const result = SplitType.create("#footer-large-text", {
    types: "chars",
  });

  if (bottomSectionContainer) {
    cleanup = intersectionObserver(
      bottomSectionContainer,
      { threshold: 0.2 },
      (isIntersecting) => {
        if (isIntersecting) {
          gsap.fromTo(
            bottomSectionContainer,
            { yPercent: 10, opacity: 0 },
            {
              duration: 1.2,
              yPercent: 0,
              opacity: 1,
              delay: 0.2,
              ease: "power4.inOut",
            }
          );
        } else {
          gsap.to(bottomSectionContainer, {
            yPercent: 10,
            opacity: 0,
          });
        }
      }
    );
  }

  if (logoContainer) {
    cleanup = intersectionObserver(
      logoContainer,
      { threshold: 0.9 },
      (isIntersecting) => {
        if (isIntersecting && footerLogoContainer.value) {
          gsap.to(footerLogoContainer.value.children[0], {
            rotation: 720,
            ease: "none",
            repeat: -1,
            duration: 3,
            delay: 0.5,
          });
          gsap.fromTo(
            ".copy",
            { yPercent: 10, opacity: 0 },
            {
              duration: 1.2,
              stagger: 0.2,
              yPercent: 0,
              opacity: 1,
              delay: 1.5,
              ease: "power4.inOut",
            }
          );
          result.chars &&
            result.chars.forEach((a: gsap.TweenTarget, i: number) => {
              gsap.to(a, {
                opacity: 1,
                duration: gsap.utils.random(0.1, 0.3),
                // duration: 0.2,
                ease: "power3.inOut",
                delay: i * gsap.utils.random(0.1, 0.2),
              });
            });
        } else {
          result.chars &&
            result.chars.forEach((a: gsap.TweenTarget) => {
              gsap.to(a, {
                opacity: 0.2,
                duration: 0.1,
                ease: "power3.inOut",
              });
            });
        }
      }
    );
  }
});

onUnmounted(() => {
  if (cleanup) {
    cleanup();
  }
});
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
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  height: max-content;
  max-height: 60rem;
  clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 100%);
  width: 100%;
  margin-top: 6rem;
  // border-radius: 12px 12px 0px 0px;
  box-sizing: border-box;
  background-color: white;
  overflow: hidden;

  z-index: 50;
  color: #fdfdfd;
  display: flex;
  flex-direction: column;
  padding-top: 11.125rem;

  &__container {
    width: 100%;
    z-index: 999999;

    position: relative;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    &--top-section {
      gap: 4rem;
      height: max-content;
      padding-bottom: 32rem;

      &__text-container {
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        bottom: 2px solid red;

        h1 {
          color: #fff;

          text-align: center;
          font-size: 64px;
          max-width: 50rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        p {
          font-size: 1.25rem;
          margin-top: 19px;
        }
      }

      &--button {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 2.125rem;

        .button {
          font-weight: 700;
        }
      }
    }

    &--main-container {
      width: 100%;
      position: absolute;
      bottom: 0;
      width: 100%;
      right: 0;

      margin: auto;
      padding: 0 3.875rem;
      font-weight: 450;

      box-sizing: border-box;

      &__content-container {
        background-color: #fff83c;
        color: #16270c;
        height: max-content;
        border-radius: 12px 12px 0px 0px;
        padding: 4.375rem 6rem;
        display: flex;
        flex-direction: column;
        gap: 4.125rem;

        &--top-section {
          display: flex;
          justify-content: end;
          gap: 6.75rem;

          &__email-section {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-right: 4rem;

            h1 {
              font-size: 1.25rem;
              font-weight: 700;
            }
            p {
              font-size: 1rem;
            }
          }

          &__links-section {
            display: flex;
            gap: 10px;
            flex-direction: column;

            h1 {
              font-size: 1.25rem;
              font-weight: 700;
            }

            p span {
              font-weight: 700;
            }

            div {
              display: flex;
              align-items: start;
              gap: 3.375rem;

              div {
                display: flex;
                flex-direction: column;
                gap: 10px;
              }
            }
          }

          &__socials-section {
            display: flex;
            flex-direction: column;
            gap: 10px;

            h1 {
              font-size: 1.25rem;
              font-weight: 700;
            }

            div {
              display: flex;
              align-items: center;
              gap: 0.5rem;
            }
          }
        }

        &--bottom-section {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          &__logo-container {
            display: inline-flex;
            align-items: center;
            gap: 7px;

            img {
              width: 35.302px;
              height: 38.552px;
            }

            h1 {
              color: #16270c;
              text-align: center;
              font-size: 43.457px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
          }
        }
      }
    }
  }

  &__image-container {
    position: absolute;
    bottom: 0;
    // left: 0.5rem;
    width: 100vw;
    height: 100%;
    z-index: -10;
    padding-top: 6rem;
    background-image: url("../assets/images/footerImage.png");
    background-repeat: no-repeat;
    // background-position-y: 5rem;
    background-size: cover;

    // img {
    //   width: 100%;
    //   height: 100%;
    //   object-fit: cover;
    //   border-radius: 12px 12px 0px 0px;
    // }
  }
}

.copy {
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
}
</style>
