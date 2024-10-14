// composables/useMouseState.js
import { ref, computed } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);
const currentSection = ref("default");

export const useMouseState = () => {
  const updateMousePosition = (event: any) => {
    mouseX.value = event.clientX;
    mouseY.value = event.clientY;
  };

  const updateCurrentSection = (section: any) => {
    currentSection.value = section;
  };

  const cursorStyle = computed(() => {
    switch (currentSection.value) {
      case "hero":
        return {
          backgroundColor: "rgba(0, 255, 0, 0.5)",
          width: "30px",
          height: "30px",
        };
      case "portfolio":
        return {
          border: "2px solid rgba(0, 0, 255, 0.8)",
          backgroundColor: "transparent",
          width: "40px",
          height: "40px",
        };
      default:
        return {
          backgroundColor: "rgba(255, 0, 0, 0.5)",
          width: "20px",
          height: "20px",
        };
    }
  });

  return {
    mouseX,
    mouseY,
    updateMousePosition,
    updateCurrentSection,
    cursorStyle,
  };
};
