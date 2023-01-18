<template>
  <div class="container">
    <div class="spinBtn" @click="spinWheel" v-if="!spinning">SPIN</div>
    <div class="spinBtn" style="cursor: wait" v-else></div>
    <div class="wheel" :style="{ transform: rotate }">
      <div
        class="number"
        v-for="(item, index) in items"
        :key="index"
        :style="[
          { transform: `rotate(${zoneSize * (index + 1)}deg)` },
          `background-color: ${item.color}`,
          `clip-path: ${calcClipPath}`,
        ]"
      >
        <span>{{ item.name }}</span>
      </div>

      <!-- <div class="number" style="--i: 1; --clr: #f991cc">
        <span>A</span>
      </div> -->

      <!-- <div class="number" style="--i: 2; --clr: #4361ee">
        <span>B</span>
      </div>
      <div class="number" style="--i: 3; --clr: #f03a47">
        <span>C</span>
      </div> -->
      <!-- <div class="number" style="--i: 4; --clr: #e98a15">
        <span>D</span>
      </div>
      <div class="number" style="--i: 5; --clr: #a77e58">
        <span>E</span>
      </div>
      <div class="number" style="--i: 6; --clr: #9f86c0">
        <span>F</span>
      </div>
      <div class="number" style="--i: 7; --clr: #efa48b">
        <span>G</span>
      </div>
      <div class="number" style="--i: 8; --clr: #ffd151">
        <span>H</span>
      </div> -->
    </div>
  </div>
  <div class="button-container">
    <Transition name="scale">
      <button
        class="setting-btn btn btn-primary mt-3 btn-lg"
        v-show="!spinning"
      >
        <router-link :to="{ name: 'Setting' }"
          ><i class="fa fa-cog" style="font-size: 24px; color: #ffff"></i
        ></router-link>
      </button>
    </Transition>
    <ModalAlert :result="result" />
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useItemsStore } from "../stores/items.js";
import { useModalStore } from "../stores/modal.js";
import ModalAlert from "../components/Modal.vue";
export default {
  components: { ModalAlert },
  data() {
    return {
      rotate: 0,
      number: 0,

      deg: Math.floor(5000 + Math.random() * 5000),
      result: "",
    };
  },
  computed: {
    ...mapState(useItemsStore, ["items"]),
    ...mapState(useItemsStore, ["zoneSize", "calcClipPath", "itemsLength"]),
    ...mapState(useModalStore, ["spinning"]),
    calcOffSet() {
      if (this.itemsLength === 12) {
        return 30;
      } else if (this.itemsLength === 11) {
        return 28.7;
      } else if (this.itemsLength === 10) {
        return 27;
      } else if (this.itemsLength === 9) {
        return 25;
      } else if (this.itemsLength === 8) {
        return 22.5;
      } else if (this.itemsLength === 7) {
        return 19.5;
      } else if (this.itemsLength === 6) {
        return 15;
      } else if (this.itemsLength === 5) {
        return 9;
      } else if (this.itemsLength === 4) {
        return 0.1;
      }
    },
  },
  methods: {
    ...mapActions(useItemsStore, ["swicthIndexBySpin"]),
    ...mapActions(useModalStore, ["openModal", "closeModal", "unClickable"]),
    async spinWheel() {
      // false ให้ return
      if (this.spinning) return;
      this.unClickable();

      // this.number += Math.ceil(Math.random() * 10000);
      this.deg += Math.floor(5000 + Math.random() * 5000);
      // this.rotate = "rotate(" + "-" + this.deg + "deg)";
      this.rotate = "rotate(" + "+" + this.deg + "deg)";

      // actualDeg = เศษเหลือองศาจากการหมุนที่ไม่ถึงรอบ
      // actualDeg หมุนจริงไปกี่องศา ใน 1 รอบ (เน้นดูที่แหน่งองศา ไม่ใช่รอบการหมุน)
      const actualDeg = this.deg % 360;

      // ชดเชยที่เกินมา 22.5 องศา

      const spinOffset = actualDeg - this.calcOffSet;

      const winner = await this.handelWin(spinOffset);

      setTimeout(this.showResult, 4500);
    },
    async showResult() {
      return this.openModal();
    },
    async handelWin(spinOffset) {
      // แต่ละ zone มีพื้นที่ 45 deg

      let winnerIndex = Math.ceil(spinOffset / this.zoneSize);

      winnerIndex = await this.swicthIndexBySpin(winnerIndex);
      const winner = this.items[winnerIndex];
      this.result = winner;
      return winner;
    },
  },
};
</script>

<style>
.button-container {
  display: flex;
  position: absolute;
  top: 30px;
  right: 20px;
}

.setting-btn {
  background: #4ed4c6;
  border: 1px solid white;
  cursor: pointer;
  box-shadow: 0 5px 10px gray;
}
</style>
