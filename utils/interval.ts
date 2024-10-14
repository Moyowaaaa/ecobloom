import { ref } from "vue";

export default function customInterval(callback: () => void, duration: number) {
  let timerId: number | undefined;
  const currentTime = ref(0);
  let paused = true;

  function step() {
    if (paused) return;

    currentTime.value += 100;
    if (currentTime.value >= duration) {
      callback();
      currentTime.value = 0;
    }

    timerId = window.setTimeout(step, 100);
  }

  return {
    play() {
      if (paused) {
        paused = false;
        step();
      }
    },
    pause() {
      clearTimeout(timerId);
      paused = true;
    },
    stop() {
      clearTimeout(timerId);
      paused = true;
      currentTime.value = 0;
    },
    currentTime,
  };
}
