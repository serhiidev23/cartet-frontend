<template>
  <div class="body__container">
    <div class="body__header-section">
      <div class="">
        <div class="body__heading">Builder</div>
        <div class="body__sub-heading">
          Drag and drop your items from your cart to create your design.
        </div>
      </div>
      <div class="body__three-dots">
        <img src="/3dots.svg" />
      </div>
    </div>
    <div class="cart-group">
      <div class="cart-row">
        <ProductItem type="0" price="36" />
        <ProductItem type="1" price="36" />
        <ProductItem type="0" price="36" />
        <ProductItem type="1" price="36" />
      </div>
      <div class="cart-row">
        <ProductItem type="1" price="36" />
        <ProductItem type="0" price="36" />
        <ProductItem type="1" price="36" />
        <ProductItem type="0" price="36" />
      </div>
      <div class="cart-row">
        <ProductItem type="0" price="36" />
        <ProductItem type="1" price="36" />
        <ProductItem type="0" price="36" />
        <ProductItem type="1" price="36" />
      </div>
      <div class="cart-row">
        <ProductItem type="1" price="36" />
        <ProductItem type="0" price="36" />
        <ProductItem type="1" price="36" />
        <ProductItem type="0" price="36" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "../common/ProductItem.vue";
export default {
  components: { ProductItem },
  name: "MainBody",
};
</script>

<style scoped>
.body__header-section {
  display: flex;
  justify-content: space-between;
}

.body__container {
  padding: 30px;
  width: 100%;
}

.body__heading {
  font-size: 24px;
  font-family: "Poppins";
  font-weight: 700;
}

.body__sub-heading {
  opacity: 0.5;
  font-weight: 400;
  font-size: 16px;
  font-family: "Poppins";
}

.body__three-dots {
  margin-right: 80px;
}

.cart-row {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
}
</style>
