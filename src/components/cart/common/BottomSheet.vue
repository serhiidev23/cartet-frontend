<template>
  <div style="height: 100%">
    <transition name="slide-up" appear>
      <div class="rm-bottomSheet">
        <div class="rm-bottomsSheet__header">
          <div class="dialog-box__heading-mob">CREATE NEW DRESS CODE</div>
          <div class="dialog-box__description-mob">
            Your cart hold all of your items. Don’t forget to name your cart for
            easy identification.
          </div>
          <div class="dialog-box__edit-box-mob">
            <img src="/edit-pen.svg" />
            <div class="edit-text">1st Grade Girls</div>
          </div>
        </div>
        <div class="button-container-mob">
          <button class="solid-button">GO TO BUILDER</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    closeBottomSheet() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.rm-bottomSheet {
  z-index: 11;
  padding: 30px 5px;
  width: 90%;
  position: absolute;
  top: 15px;
  left: 5%;
  background-color: white;
  font-size: 14px;

  box-shadow: 1px 6px 12px 2px rgba(45, 45, 45, 0.18);
}

.rm-bottomsSheet__header {
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 24px;
  text-align: center;
}

.rm-bottomSheet__body {
  margin-bottom: 15px;
}

.slide-up-enter-active {
  transition: all 200ms ease-in-out;
}

.slide-up-enter {
  transform: translateY(100%);
}

.dialog-box__heading-mob {
  font-size: 16px;
}

.dialog-box__description-mob {
  font-size: 12px;
  padding: 15px 10px;
}

.dialog-box__edit-box-mob {
  border-bottom: 1px solid black;
  display: flex;
  margin: 10px 60px;
  font-size: 14px;
  justify-content: center;
}

.solid-button {
  display: flex;
  background-color: black;
  color: white;
  font-weight: 700;
  padding: 15px 61px;
}

.button-container-mob {
  display: flex;
  padding-top: 10px;
  justify-content: center;
}
</style>
