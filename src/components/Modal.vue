<template>
  <Transition name="fade">
    <div class="modal-overlay" v-show="modal">
      <Transition name="slide">
        <!-- Modal Box -->
        <div class="proceeds-modal" v-show="modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h6 class="modal-title">{{ title }}</h6>
                <button
                  type="button"
                  class="btn-close"
                  @click="closeModal"
                ></button>
              </div>
              <hr />
              <div class="modal-body">
                <div
                  class="color"
                  style="margin-right: 1rem"
                  :style="{ background: result.color }"
                ></div>
                <h6>{{ result.name }}</h6>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="closeModal"
                >
                  {{ buttonText }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useModalStore } from "../stores/modal.js";
export default {
  props: {
    title: {
      type: String,
      default: "Congratulations!",
    },
    result: {
      type: [String, Object],
      default: "Test",
    },
    buttonText: {
      type: String,
      default: "Okay",
    },
  },
  computed: {
    ...mapState(useModalStore, ["modal"]),
  },
  methods: {
    ...mapActions(useModalStore, ["closeModal"]),
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.proceeds-modal {
  padding: 20px;
  position: absolute;
  top: 100px;
  width: 60%;
  right: 20%;
  height: 10rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0.2px 0.6px 0.5px 0.5px;
  z-index: 10;
}

.openModal:after {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  content: "";
  height: 100vh;
  z-index: 1;
}
h6 {
  margin: 0;
}

.modal-body {
  display: flex;
  text-align: center;
  align-items: center;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-50px) scale(0);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
