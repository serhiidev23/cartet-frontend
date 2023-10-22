<template>
  <div
    class="create-dress__modal"
    :style="modalShow === true ? 'display: block' : 'display: none'"
  >
    <div class="close-icon-container">
      <span @click="onClose">
        <img src="/assets/img/close-icon.svg" width="14" height="14" />
      </span>
    </div>
    <h4 class="dress-modal__title">CREATE NEW DRESS CODE</h4>
    <p class="dress-modal__text">
      Your cart hold all of your items. Don’t forget to add a name to your new
      cart for easy identification.
    </p>
    <div class="dress-modal__target">
      <span><img width="20" height="20" src="/assets/img/pen-icon.svg" /></span>
      1st Grader Girls
    </div>
    <div class="create-btn-container">
      <button class="btn-create-cart">CREATE CART</button>
    </div>
  </div>
</template>

<style scoped>
.create-dress__modal {
  position: absolute;
  z-index: 101;
  background-color: white;
  top: 126px;
  left: 32px;
  right: 32px;
  padding: 8px 10px 0px 24px;

  box-shadow: 1px 6px 12px 2px rgba(45, 45, 45, 0.18);
}

.dress-modal__title {
  font-size: 18px;
  font-weight: 700;
  font-family: "Poppins";
}

.dress-modal__text {
  margin-top: 8px;
  padding-right: 15px;
  font-size: 12px;
  font-family: "Poppins";
}

.dress-modal__target {
  margin-top: 25px;
  font-family: "Poppins";
  font-size: 14px;
  border-bottom: 2px solid black;
}

.create-btn-container {
  display: flex;
  justify-content: center;
}

.btn-create-cart {
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
  name: "CreateModalMobile",

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
