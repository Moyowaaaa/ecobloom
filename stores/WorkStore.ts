// import { work } from "~/components/workCard.vue";

import { acceptHMRUpdate, defineStore } from "pinia";
import type { work } from "~/types/declarations";

const useWorksStore = defineStore("WorkStore", {
  state: () => {
    return {
      works: [] as work[],
    };
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWorksStore, import.meta.hot));
}

export default useWorksStore;
