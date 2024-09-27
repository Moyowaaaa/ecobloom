<template>
  <div class="loader" ref="loaderRef">
    <img src="/assets/images/flowerSmall.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

const loaderRef = ref<HTMLDivElement | null>(null);
onMounted(() => {
  if (!loaderRef.value) return;
  gsap.to(loaderRef.value.children[0], {
    rotation: 720, // Two full rotations
    ease: "none",
    repeat: -1,
    duration: 5,
  });
});
</script>

<style scoped lang="scss">
.loader {
  height: 100vh;
  width: 100vw;
  right: 0;
  position: fixed;
  background: #fdfbf1;
  z-index: 99999999;
  display: flex;
  top: 0;
  left: 0;

  align-items: center;
  justify-content: center;

  img {
    width: 57.874px;
    height: 63.203px;
  }
}
</style>
