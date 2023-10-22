<template>
  <div
    class="resell-dress__modal"
    :style="modalShow === true ? 'display: block' : 'display: none'"
  >
    <div class="close-icon-container">
      <span @click="onClose">
        <img src="/assets/img/close-icon.svg" width="14" height="14" />
      </span>
    </div>
    <h4 class="resell-modal__title">RESELL ITEMS</h4>
    <pre class="resell-modal__text">
1. Select items to resell.
2. Set your price.
3. Set your method for delivery.
    </pre>
    <div class="resell-modal__target">
      <span><img width="20" height="20" src="/assets/img/pen-icon.svg" /></span>
      1st Grader Girls
    </div>
    <div class="resell-btn-container">
      <button class="btn-resell-cart">GO TO BUILDER</button>
    </div>
  </div>
</template>

<style scoped>
.resell-dress__modal {
  position: absolute;
  z-index: 101;
  background-color: white;
  top: 126px;
  left: 32px;
  right: 32px;
  padding: 8px 10px 0px 24px;

  box-shadow: 1px 6px 12px 2px rgba(45, 45, 45, 0.18);
}

.resell-modal__title {
  font-size: 18px;
  font-weight: 700;
  font-family: "Poppins";
}

.resell-modal__text {
  margin-top: 8px;
  padding-right: 15px;
  font-size: 12px;
  font-family: "Poppins";
}

.resell-modal__target {
  margin-top: 25px;
  font-family: "Poppins";
  font-size: 14px;
  border-bottom: 2px solid black;
}

.resell-btn-container {
  display: flex;
  justify-content: center;
}

.btn-resell-cart {
  margin-top: 43px;
  margin-bottom: 28px;
  background-color: black;
  color: white;
  font-family: "Poppins";
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  border: none;
  box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.5);
  padding: 4px 14px;
}

.close-icon-container {
  text-align: right;
}
</style>

<script>
export default {
  name: "ResellModalMobile",

  data() {
    return {
      modalShow: true,
    };
  },
  methods: {
    onClose() {
      this.modalShow = false;
    },
  },
};
</script>
