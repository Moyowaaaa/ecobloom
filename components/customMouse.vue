<template>
  <div
    v-if="isVisible"
    class="custom-mouse"
    :class="type"
    :style="{
      left: `${mouseX}px`,
      top: `${mouseY}px`,
      width: `${size}px`,
      height: `${size}px`,
    }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  size: {
    type: Number,
    default: 20,
  },
  boundarySelector: {
    type: String,
    default: "",
  },
});

const mouseX = ref(0);
const mouseY = ref(0);
const isVisible = ref(false);

const updateMousePosition = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;

  if (props.boundarySelector) {
    const boundary = document.querySelector(props.boundarySelector);
    if (boundary) {
      const rect = boundary.getBoundingClientRect();
      isVisible.value =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
    }
  } else {
    isVisible.value = true;
  }
};

onMounted(() => {
  window.addEventListener("mousemove", updateMousePosition);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updateMousePosition);
});
</script>

<style scoped>
.custom-mouse {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: width 0.3s, height 0.3s;
}

.default {
  background-color: rgba(255, 0, 0, 0.5);
}

.highlight {
  background-color: rgba(0, 255, 0, 0.5);
  mix-blend-mode: difference;
}

.outline {
  border: 2px solid rgba(0, 0, 255, 0.8);
  background-color: transparent;
}
</style>
