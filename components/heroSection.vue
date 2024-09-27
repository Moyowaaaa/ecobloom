<template>
  <div class="hero-section">
    <div class="hero-section__text-container">
      <img
        src="/assets/images/bigBlackFlower.png"
        alt=""
        class="hero-section__top-image"
      />
      <img
        src="/assets/images/bigYellowFlower.png"
        alt=""
        class="hero-section__bottom-image"
      />

      <div class="tag">
        <p>Who we are at EcoBloom</p>
        <img
          src="/assets/images/heroIcon.svg"
          alt=""
          style="width: 14px; height: 14px"
        />
      </div>
      <div class="hero-section__text-container--text">
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

    <!-- <img src="" alt="" class="hero-section__bottom-image" /> -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero-section {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;

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
    position: relative;
    margin-top: 20rem;
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
