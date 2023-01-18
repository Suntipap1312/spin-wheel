import { defineStore } from "pinia";
import sourceData from "../data.json";
export const useItemsStore = defineStore("items", {
  state: () => {
    return {
      items: sourceData.items,
    };
  },
  getters: {
    itemsLength(state) {
      return state.items.length;
    },
    zoneSize() {
      return 360 / this.itemsLength;
    },
    calcClipPath() {
      if (this.itemsLength === 12) {
        return `polygon(0 0, 40% 0, 100% 100%, 0 40%);`;
      } else if (this.itemsLength === 11) {
        return `polygon(0 0, 41% 0, 100% 100%, 0 41%);`;
      } else if (this.itemsLength === 10) {
        return `polygon(0 0, 46% 0, 100% 100%, 0 46%);`;
      } else if (this.itemsLength === 9) {
        return `polygon(0 0, 50% 0, 100% 100%, 0 50%);`;
      } else if (this.itemsLength === 8) {
        return `polygon(0 0, 56% 0, 100% 100%, 0 56%);`;
      } else if (this.itemsLength === 7) {
        return `polygon(0 0, 61% 0, 100% 100%, 0 61%);`;
      } else if (this.itemsLength === 6) {
        return "polygon(0 0, 69% 0, 100% 100%, 0 69%);";
      } else if (this.itemsLength === 5) {
        return "polygon(0 0, 80% 0, 100% 100%, 0 80%);";
      } else if (this.itemsLength === 4) {
        return "polygon(0 0, 96% 0, 100% 100%, 0 96%);";
      }
    },
  },
  actions: {
    async swicthIndexBySpin(index) {
      let newIndex;
      if (this.itemsLength === 12) {
        switch (index) {
          // length 12
          case 0:
            newIndex = 0;
            break;
          case 1:
            newIndex = 11;
            break;
          case 2:
            newIndex = 10;
            break;
          case 3:
            newIndex = 9;
            break;
          case 4:
            newIndex = 8;
            break;
          case 5:
            newIndex = 7;
            break;
          case 6:
            newIndex = 6;
            break;
          case 7:
            newIndex = 5;
            break;
          case 8:
            newIndex = 4;
            break;
          case 9:
            newIndex = 3;
            break;
          case 10:
            newIndex = 2;
            break;
          case 11:
            newIndex = 1;
            break;
        }
      } else if (this.itemsLength === 11) {
        switch (index) {
          // length 11
          case 0:
            newIndex = 0;
            break;
          case 1:
            newIndex = 10;
            break;
          case 2:
            newIndex = 9;
            break;
          case 3:
            newIndex = 8;
            break;
          case 4:
            newIndex = 7;
            break;
          case 5:
            newIndex = 6;
            break;
          case 6:
            newIndex = 5;
            break;
          case 7:
            newIndex = 4;
            break;
          case 8:
            newIndex = 3;
            break;
          case 9:
            newIndex = 2;
            break;
          case 10:
            newIndex = 1;
            break;
        }
      } else if (this.itemsLength === 10) {
        switch (index) {
          // length 10
          case 0:
            newIndex = 0;
            break;
          case 1:
            newIndex = 9;
            break;
          case 2:
            newIndex = 8;
            break;
          case 3:
            newIndex = 7;
            break;
          case 4:
            newIndex = 6;
            break;
          case 5:
            newIndex = 5;
            break;
          case 6:
            newIndex = 4;
            break;
          case 7:
            newIndex = 3;
            break;
          case 8:
            newIndex = 2;
            break;
          case 9:
            newIndex = 1;
            break;
        }
      } else if (this.itemsLength === 9) {
        switch (index) {
          // length 9
          case 0:
            newIndex = 0;
            break;
          case 1:
            newIndex = 8;
            break;
          case 2:
            newIndex = 7;
            break;
          case 3:
            newIndex = 6;
            break;
          case 4:
            newIndex = 5;
            break;
          case 5:
            newIndex = 4;
            break;
          case 6:
            newIndex = 3;
            break;
          case 7:
            newIndex = 2;
            break;
          case 8:
            newIndex = 1;
            break;
        }
      } else if (this.itemsLength === 8) {
        switch (index) {
          // length 8
          case 0:
            newIndex = 0;
            break;
          case 1:
            newIndex = 7;
            break;
          case 2:
            newIndex = 6;
            break;
          case 3:
            newIndex = 5;
            break;
          case 4:
            newIndex = 4;
            break;
          case 5:
            newIndex = 3;
            break;
          case 6:
            newIndex = 2;
            break;
          case 7:
            newIndex = 1;
            break;
        }
      } else if (this.itemsLength === 7) {
        switch (index) {
          // length 7
          case 0:
            newIndex = 0;
            break;
          case 1:
            newIndex = 6;
            break;
          case 2:
            newIndex = 5;
            break;
          case 3:
            newIndex = 4;
            break;
          case 4:
            newIndex = 3;
            break;
          case 5:
            newIndex = 2;
            break;
          case 6:
            newIndex = 1;
            break;
        }
      } else if (this.itemsLength === 6) {
        switch (index) {
          // length 6
          case 0:
            newIndex = 0;
            break;
          case 1:
            newIndex = 5;
            break;
          case 2:
            newIndex = 4;
            break;
          case 3:
            newIndex = 3;
            break;
          case 4:
            newIndex = 2;
            break;
          case 5:
            newIndex = 1;
            break;
        }
      } else if (this.itemsLength === 5) {
        switch (index) {
          // length 5
          case 0:
            newIndex = 0;
            break;
          case 1:
            newIndex = 4;
            break;
          case 2:
            newIndex = 3;
            break;
          case 3:
            newIndex = 2;
            break;
          case 4:
            newIndex = 1;
            break;
        }
      } else if (this.itemsLength === 4) {
        switch (index) {
          // length 4
          case 0:
            newIndex = 0;
            break;
          case 1:
            newIndex = 3;
            break;
          case 2:
            newIndex = 2;
            break;
          case 3:
            newIndex = 1;
            break;
        }
      }
      return newIndex;
    },
  },
});
