<template>
  <div class="cart-item" @click="() => state = !state" @dblclick="() => dlg = 1">
    <img v-if="this.type == '0'" src="/blue-shirt.svg" />
    <img v-else-if="this.type == '1'" src="/white-shirt.svg" />
    <p>com : {{ this.price }}$</p>
    <img class="icon" v-if="state == 1" src="/active.svg" />
  </div>
  <div v-if="dlg == 1" class="dialog" @click="() => dlg = 0">
    <h1>Set Resale Price</h1>
    <h2>Jumper</h2>
    <img v-if="this.type == '0'" src="/blue-shirt.svg" />
    <img v-else-if="this.type == '1'" src="/white-shirt.svg" />
    <div class="round">
      <p>Purchase price:</p>
      <div style="flex: 1;"></div>
      <p>$47</p>
    </div>
    <div class="round">
      <p>Sell Price</p>
      <div style="flex: 1;"></div>
      <p class="white">$25</p>
    </div>
    <div class="round">
      <p>Porch Pickup</p>
      <div style="flex: 1;"></div>
    </div>
    <div class="round blue">
      <p>Ship, adds</p>
      <div style="flex: 1;"></div>
      <p>$10</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "price"],
  name: 'ProductItem',
  data() {
    return {
      state: 0,
      dlg: 0
    }
  }
}
</script>

<style scoped>
.cart-item {
  text-align: center;
  position: relative;
}

.cart-item img {
  width: 180px;
  height: 180px;
}

.icon {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 20px !important;
  height: 20px !important;
}

.dialog {
  position: fixed;
  z-index: 5;
  background-color: #F8F8F8;
  width: 400px;
  height: 600px;
  left: calc(50% - 200px);
  top: calc(50vh - 300px);
  border-radius: 20px;
  font-family: 'Poppins';
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.dialog h1 {
  margin-bottom: 15px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
}

.dialog h2 {
  margin-bottom: 10px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
}

.dialog img {
  width: 150px;
  height: 200px;
}

.round {
  display: flex;
  background-color: lightgray;
  width: 300px;
  border-radius: 20px;
  margin-bottom: 10px;
}

.round p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  margin: 10px;
  color: #A0A0A0;
}

.round .white {
  margin: 3px;
  background-color: white;
  border-radius: 20px;
  padding: 7px 20px;
  color: black;
}

.blue p {
  color: #0B2560 !important;
}
</style>
