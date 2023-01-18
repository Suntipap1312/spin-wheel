<template>
  <div class="form-group">
    <div class="container-box">
      <div class="title">
        <h1>Add Item</h1>
      </div>
      <!-- Form -->
      <form @submit.prevent="addItem">
        <div class="input-box">
          <input
            :class="[{ disabled: limitNumber }]"
            type="text"
            :placeholder="`${placeholderCheck}`"
            v-model.trim="value"
          />
          <button
            class="button button1"
            :disabled="limitNumber"
            :class="[{ disabled: limitNumber }]"
            :style="{ borderColor: borderColorSwitch }"
          >
            {{ textLimited }}
          </button>
        </div>
      </form>

      <!-- Tag -->
      <div class="tag-group">
        <div class="tag" :style="{ color: limitColor }">
          <h6>Total: {{ itemsLength }} / 12</h6>
        </div>
      </div>

      <!-- Items List -->
      <TransitionGroup name="list">
        <div class="item-list" v-for="item in items" :key="item.id">
          <div class="title-container">
            <div class="color" :style="{ backgroundColor: item.color }"></div>
            <h4 class="item-title">{{ item.name }}</h4>
          </div>
          <div class="close-icon" @click="removeItem(item)" v-if="!leastNumber">
            <h5>
              <i class="fa fa-close" style="font-size: 28px"></i>
            </h5>
          </div>
        </div>
      </TransitionGroup>

      <!-- Button -->
      <div class="box">
        <button class="btn btn-primary mt-3 btn-lg">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useItemsStore } from "../stores/items.js";
import { mapState } from "pinia";
export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapState(useItemsStore, ["items", "itemsLength"]),
    limitNumber() {
      return this.itemsLength >= 12;
    },
    leastNumber() {
      return this.itemsLength <= 4;
    },
    limitColor() {
      return this.limitNumber ? "red" : "#5f5aef";
    },
    textLimited() {
      return this.limitNumber ? "Max" : "Add";
    },
    placeholderCheck() {
      if (!this.limitNumber) {
        return "Enter a new item";
      } else {
        return "Reach the maximum amount of items";
      }
    },
    borderColorSwitch() {
      return this.limitNumber ? "rgb(223, 121, 121)" : "#59b55c";
    },
  },
  methods: {
    addItem() {
      if (this.value === "") return;
      const id = "AD" + new Date().toISOString();
      const newItem = {
        id,
        color: this.randomHexColor(),
        name: this.value,
      };
      this.items.unshift(newItem);
      this.value = "";
    },
    removeItem(payload) {
      console.log(payload);
      // หา index ของ item
      const itemIndex = this.items.findIndex((item) => item.id === payload.id);
      // remove item in state
      this.items.splice(itemIndex, 1);
      // this.items = this.items.filter((item) => item.id !== itemId);
    },

    randomInteger(max) {
      return Math.floor(Math.random() * (max + 1));
    },

    randomRgbColor() {
      let r = this.randomInteger(255);
      let g = this.randomInteger(255);
      let b = this.randomInteger(255);
      console.log([r, g, b]);
      return [r, g, b];
    },

    randomHexColor() {
      // แปลงเป็น Hex เพราะ text จะได้มี character ผสมด้วย
      let [r, g, b] = this.randomRgbColor();
      let hr = r.toString(16).padStart(2, "0");
      let hg = g.toString(16).padStart(2, "0");
      let hb = b.toString(16).padStart(2, "0");
      console.log("#" + hr + hg + hb);
      return "#" + hr + hg + hb;
    },
  },
};
</script>

<style scoped>

.form-group {
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  padding: 1rem;

  margin-top: 1rem;
}
.box {
  margin-top: 1.5rem;
  width: 100%;
}

.box button {
  width: 100%;
}

.box button a {
  text-decoration: none;
}

a {
  color: #ffff;
}

.disabled {
  opacity: 0.6;
  pointer-events: none;
  cursor: not-allowed;
}

.container-box {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
}
.title {
  display: flex;
  align-items: center;
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
}

.input-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 0.5rem;
}
hr.solid {
  border-top: 2px solid rgba(87, 87, 87, 0.729);
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
}

input:focus {
  background-color: #7eeee313;
}

.item-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #a7a5a5;
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 10px;
}

.tag-group {
  display: flex;
  justify-content: flex-start;
}
.tag {
  padding: 0.4rem;
  max-width: 8rem;
  width: auto;
  border: 1px solid #b0aeeea4;
  text-align: center;
  color: #5f5aef;
  background-color: #b0aeeea4;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}

h5,
h4,
h6 {
  margin: 0;
}

.close-icon h5 {
  color: #ff605c;

  font-size: 24px;
  font-weight: bolder;
  cursor: pointer;
}

.close-icon h5:hover {
  color: red;
}

.button {
  background-color: #00ca4e; /* Green */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 6rem;
  transition-duration: 0.4s;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
}
.button1 {
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  padding: 0 1rem;
  text-align: center;
  justify-content: center;
}
.button1:hover {
  background-color: #4caf50;
  color: white;
}

.list-enter-from {
  transform: translateY(10px);
  opacity: 0;
}
.list-leave-to {
  transform: translateX(30px);
  background-color: #f1a09fcb;
  opacity: 0;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>
