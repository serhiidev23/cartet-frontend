<template>
  <div class="cart-item">
    <h3>{{ this.title }}</h3>
    <p>{{ this.price }}</p>
  </div>
</template>
<script>
export default {
  props: ["title", "price"],
};
</script>

<style scoped>
.cart-item {
  width: 250px;
  height: 80.41px;

  margin-top: 10px;
  margin-bottom: 10px;

  background: #ffffff;
  /* Neutrals (Lightest Gray) */

  border: 1px solid #dedede;
  /* Style 1 (Android) */

  box-shadow: 1px 6px 12px 2px rgba(45, 45, 45, 0.2);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  font-weight: 700;
}

.cart-item:hover {
  cursor: pointer;
  background: #0b2560;
  border: 1px solid #0b2560;
  color: #dedede;
}
</style>
