<template>
  <div class="testimonialsSection">
    <div class="testimonialsSection__title-section">
      <div class="tag">
        <p>Testimonials</p>
        <img src="/assets/images/testimonialsIcon.svg" alt="" />
      </div>

      <h1>Public Cheers We’ve Received</h1>
    </div>

    <div class="testimonialsSection__testimonials-section">
      <div class="testimonialsSection__testimonials-section--left-image">
        <img src="/assets/images/testimonialLeft.png" alt="" />
      </div>
      <div class="testimonialsSection__testimonials-section--center-image">
        <img src="/assets/images/testimonialCenter.png" alt="" />
      </div>

      <div class="testimonialsSection__testimonials-section--right-image">
        <img src="/assets/images/testimonialRight.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.testimonialsSection {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 65rem;

  &__title-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    h1 {
      font-size: 2.188rem;
      font-weight: 700;
      line-height: normal;
      color: #333;
    }
  }

  &__testimonials-section {
    display: flex;
    width: 30rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 25rem;
    padding-top: 14rem;
    padding-bottom: 20rem;

    div {
      position: absolute;

      &:nth-child(1) {
        right: 22rem;
        z-index: -10;

        img {
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.3) 100%
          );
          border-radius: 12.447px;
          backdrop-filter: blur(8px); /* Adjust the blur value */
          -webkit-backdrop-filter: blur(8px); /* Safari support */
        }
      }
      &:nth-child(3) {
        left: 22rem;
        z-index: -10;

        img {
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.3) 100%
          );
          border-radius: 12.447px;
          backdrop-filter: blur(8px); /* Adjust the blur value */
          -webkit-backdrop-filter: blur(8px); /* Safari support */
        }
      }
    }
  }
}
</style>
