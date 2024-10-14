<template>
  <div class="loader" ref="loaderRef">
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5035 7.42558C11.4592 7.45128 11.4105 7.47589 11.3602 7.49995C11.4105 7.52401 11.4592 7.54862 11.5035 7.57433C11.7543 7.71691 11.9744 7.9077 12.1511 8.1357C12.3279 8.36369 12.4578 8.6244 12.5334 8.90281C12.609 9.18122 12.6287 9.47183 12.5916 9.75791C12.5544 10.044 12.461 10.3199 12.3167 10.5697C12.1725 10.8196 11.9802 11.0384 11.7511 11.2136C11.5219 11.3889 11.2603 11.5171 10.9814 11.5908C10.7025 11.6645 10.4118 11.6824 10.126 11.6433C9.84013 11.6042 9.56486 11.509 9.31598 11.3631C9.27169 11.3374 9.22575 11.3084 9.18036 11.2761C9.18473 11.3308 9.18747 11.3855 9.18747 11.4402C9.18747 12.0203 8.957 12.5767 8.54676 12.987C8.13653 13.3972 7.58013 13.6277 6.99997 13.6277C6.41981 13.6277 5.86341 13.3972 5.45317 12.987C5.04294 12.5767 4.81247 12.0203 4.81247 11.4402C4.81247 11.3888 4.81247 11.3341 4.81958 11.2761C4.77419 11.3073 4.72825 11.3374 4.68395 11.3631C4.43508 11.509 4.1598 11.6042 3.87398 11.6433C3.58815 11.6824 3.29741 11.6645 3.01851 11.5908C2.7396 11.5171 2.47804 11.3889 2.24887 11.2136C2.01971 11.0384 1.82747 10.8196 1.68322 10.5697C1.53897 10.3199 1.44557 10.044 1.40838 9.75791C1.3712 9.47183 1.39097 9.18122 1.46656 8.90281C1.54214 8.6244 1.67205 8.36369 1.84881 8.1357C2.02556 7.9077 2.24567 7.71691 2.49645 7.57433C2.54075 7.54862 2.58942 7.52401 2.63973 7.49995C2.58942 7.47589 2.54075 7.45128 2.49645 7.42558C2.24567 7.28299 2.02556 7.09221 1.84881 6.86421C1.67205 6.63621 1.54214 6.3755 1.46656 6.09709C1.39097 5.81868 1.3712 5.52807 1.40838 5.24199C1.44557 4.95591 1.53897 4.68001 1.68322 4.43017C1.82747 4.18034 2.01971 3.9615 2.24887 3.78626C2.47804 3.61103 2.7396 3.48285 3.01851 3.40911C3.29741 3.33537 3.58815 3.31753 3.87398 3.35661C4.1598 3.39569 4.43508 3.49092 4.68395 3.63683C4.72825 3.66253 4.77419 3.69151 4.81958 3.72378C4.8152 3.66909 4.81247 3.6144 4.81247 3.56245C4.81247 2.98229 5.04294 2.42589 5.45317 2.01565C5.86341 1.60542 6.41981 1.37495 6.99997 1.37495C7.58013 1.37495 8.13653 1.60542 8.54676 2.01565C8.957 2.42589 9.18747 2.98229 9.18747 3.56245C9.18747 3.61386 9.18473 3.66854 9.18036 3.72378C9.22575 3.69261 9.27169 3.66253 9.31598 3.63683C9.64736 3.44489 10.0235 3.34378 10.4065 3.3437C10.5989 3.34394 10.7904 3.36931 10.9763 3.41917C11.3942 3.53118 11.7695 3.7646 12.0548 4.08991C12.34 4.41523 12.5224 4.81782 12.5788 5.24679C12.6352 5.67575 12.5632 6.11181 12.3718 6.49983C12.1804 6.88785 11.8782 7.21039 11.5035 7.42667V7.42558ZM6.99997 5.9687C6.69712 5.9687 6.40106 6.05851 6.14925 6.22676C5.89744 6.39502 5.70117 6.63417 5.58528 6.91397C5.46938 7.19377 5.43906 7.50165 5.49814 7.79868C5.55722 8.09572 5.70306 8.36856 5.91721 8.58271C6.13136 8.79686 6.4042 8.9427 6.70124 9.00178C6.99827 9.06086 7.30615 9.03054 7.58595 8.91464C7.86575 8.79875 8.1049 8.60248 8.27316 8.35067C8.44141 8.09886 8.53122 7.8028 8.53122 7.49995C8.53122 7.09384 8.36989 6.70436 8.08273 6.41719C7.79556 6.13003 7.40608 5.9687 6.99997 5.9687Z"
      />
    </svg>

    <div class="overlay"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import usePreloadImagesStore from "~/stores/ImagesPreloader";
import gsap from "gsap";

const imagesStore = usePreloadImagesStore();
const { imagesHaveLoaded, preloaderDone } = storeToRefs(imagesStore);

const loaderRef = ref<HTMLDivElement | null>(null);
const showLoader = ref(true);

const preloaderTransitionIn = () => {
  if (!loaderRef.value) return;

  gsap.set(loaderRef.value.children[1], {
    display: "none",
    opacity: 0,
  });

  gsap.to(loaderRef.value.children[0], {
    rotation: 720,
    ease: "none",
    repeat: -1,
    duration: 5,
  });

  gsap.fromTo(
    loaderRef.value.children[1],
    {
      display: "none",
      opacity: 0,
      ease: "power2.inOut",
      yPercent: 100,
    },
    {
      opacity: 1,
      display: "flex",
      ease: "power2.inOut",
      yPercent: 0,
      duration: 1.5,
    }
  );

  gsap.to(loaderRef.value.children[0], {
    fill: "#FFF83C",
    duration: 1,
    delay: 0.5,
    ease: "power2.inOut",
    zIndex: 60,
  });
};

const preloaderTransitionOut = () => {
  if (!loaderRef.value) return;

  gsap.to(loaderRef.value.children, {
    opacity: 1,
    display: "flex",
    ease: "power2.inOut",
    yPercent: -200,
    duration: 1,
    delay: 2,
    height: "40vh",
    onComplete: () => {
      preloaderDone.value = true;
    },
  });
  gsap.to(loaderRef.value, {
    opacity: 1,
    display: "flex",
    ease: "power2.inOut",
    yPercent: -200,
    duration: 1,
    delay: 2.1,
    zIndex: -20,
  });
  gsap.to(loaderRef.value, {
    opacity: 0,
    display: "none",
    duration: 1,
    delay: 3,
  });
};

onMounted(() => {
  preloaderTransitionIn();
});

watch(imagesHaveLoaded, (newValue) => {
  if (newValue) {
    preloaderTransitionOut();
  }
});
</script>

<style scoped lang="scss">
.loader {
  height: 100vh;
  width: 100vw;
  right: 0;
  position: fixed;
  background: #fdfbf1;
  z-index: 50;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;

  svg {
    width: 57.874px;
    height: 63.203px;
    fill: #16270c;
  }
}

.overlay {
  background-color: #16270c;
  position: fixed;
  height: 100%;
  width: 100vw;
  display: none;
}
</style>
