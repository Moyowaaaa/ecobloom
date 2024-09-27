<template>
  <div class="title-section">
    <div class="title-section__image-container">
      <img src="/assets/images/frame1.webp" alt="" />
    </div>

    <div class="title-section__main-container">
      <div class="title-section__main-container--text-container">
        <h1>Transforming Spaces with Nature’s Beauty</h1>
        <p>
          Eco-friendly gardening and landscaping services for a greener tomorrow
        </p>
      </div>

      <div class="title-section__main-container--second-container">
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
        <div class="button">
          <p>Scroll</p>
          <img src="/assets/images/arrowdown.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  //     padding-left: 3.313rem;
  //     padding-bottom: 2.5rem;

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

      h1 {
        font-size: 4rem;
        font-weight: 700;
        line-height: normal;
        max-width: 30rem;
        display: flex;
      }
    }

    &--second-container {
      width: 100%;
      display: flex;
      align-items: center;
      padding-right: 74px;
      justify-content: space-between;

      .button {
        font-weight: 700;
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
    }
  }

  //   &__main-container {
  //     border: 2px solid red;
  //     z-index: 10;
  //     position: absolute;
  //     bottom: 0;
  //     width: 100%;
  //     padding-left: 3.313rem;
  //     padding-bottom: 2.5rem;
  //     color: #ffffff;
  //     display: flex;
  //     flex-direction: column;
  //   }
}
</style>
