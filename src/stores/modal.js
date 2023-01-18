import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => {
    return {
      modal: false,
      spinning: false,
    };
  },
  actions: {
    async openModal() {
      this.modal = true;
    },
    closeModal() {
      this.spinning = false;
      this.modal = false;
    },
    unClickable() {
      this.spinning = true;
    },
  },
});
