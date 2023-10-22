<template>
  <div
    class="resale-set__modal"
    :style="modalShow === true ? 'display: block' : 'display: none'"
  >
    <div class="close-icon-container">
      <span @click="onClose">
        <img src="/assets/img/close-icon.svg" width="14" height="14" />
      </span>
    </div>

    <h4 class="resale-modal__title">Set Resale Price</h4>
    <h6 class="resale-product__title">Jumper</h6>
    <img width="95" height="120" class="resale-product_img" src="/dress.svg" />

    <div class="info-item">
      Purchased Price:
      <div style="flex: 1"></div>
      <span>$47</span>
    </div>
    <div class="info-item">
      Selling Price:
      <div style="flex: 1"></div>
      <span class="highlight-price">$25</span>
    </div>
    <div class="info-item">Porch Pickup</div>
    <div class="info-item highlight-info">
      Shipping Fee:
      <div style="flex: 1"></div>
      <span>+$10</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResaleSetModalMoblie",
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

<style scoped>
.resale-set__modal {
  position: absolute;
  z-index: 101;
  background-color: white;
  top: 126px;
  left: 32px;
  right: 32px;
  box-shadow: 1px 6px 12px 2px rgba(45, 45, 45, 0.18);
  text-align: center;
  font-family: "Poppins";

  padding-bottom: 24px;
}

.resale-modal__title {
  margin-top: 13px;
  font-weight: 700;
  font-size: 18px;
}

.resale-product__title {
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 6px;
  font-weight: 400;
}

.info-item {
  margin: 0px 39px;
  margin-top: 4px;
  font-size: 14px;
  color: #9b9aa2;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 0px 14px;
  border-radius: 32px;
  height: 40px;
  align-items: center;
}

.info-item span {
  color: black;
}

.highlight-price {
  background-color: white;
  border-radius: 16px;
  padding: 5px 16px;
}

.highlight-info {
  color: #0b2560;
}

.highlight-info span {
  color: #0b2560;
}

.close-icon-container {
  text-align: right;
  margin-right: 10px;
}
</style>
