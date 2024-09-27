<template>
  <div class="defaultLayout" id="top">
    <Navbar />
    <div class="defaultLayout__container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.defaultLayout {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 100%;
  overflow-x: hidden;
  opacity: 1;

  &__container {
    margin: 0.688rem;
  }
}
</style>
