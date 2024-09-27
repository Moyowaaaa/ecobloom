<template>
  <div class="showcaseCard">
    <div class="showcaseCard__loading-bar">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div class="showcaseCard__text-container">
      <h1>Garden Design</h1>
      <p>
        Custom garden designs that blend aesthetics with sustainability. Our
        expert designers work with you to create a personalized plan that suits
        your vision and lifestyle.
      </p>
    </div>
    <img src="/assets/images/gardenImage.png" alt="" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.showcaseCard {
  width: 100%;
  height: 35.688rem;
  border-radius: 21.571px;
  background: #16270c;
  position: relative;
  padding: 2rem 2rem 2rem 2.5rem;
  display: flex;
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
      height: 5px;
      width: 2.5rem;
      &:nth-child(1) {
        width: 7rem;
        border-radius: 12px;
        background: #efe93f;
      }
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
      color: #fff;
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 450;
      line-height: normal;
      max-width: 40rem;
    }
  }
}
</style>
