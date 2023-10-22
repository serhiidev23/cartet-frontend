<template>
  <div class="cart-container">
    <div class="top-app__bar">
      <span>&lt; Your Carts</span>
      <span> &lt; 1st Grader Grils</span>
      <span class="active"> &lt; Your Items</span>
    </div>

    <SearchBar />

    <h5 class="cart-list-title">Your Items</h5>

    <ul class="cart-list-container">
      <li v-for="item in cartitems" :key="item.id" class="cart-list-item">
        <img
          src="/assets/img/unlock.svg"
          class="lock-sign"
          width="24"
          height="24"
        />
        <div class="cart-item-clothes">
          <img :src="item.img" width="80" height="80" />
        </div>
        <div class="cart-item-price">com: ${{ item.price }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchBar from "../common/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
  computed: {
    cartitems() {
      return [
        {
          id: 1,
          img: "/clothe1.svg",
          price: 36,
        },
        {
          id: 2,
          img: "/dress.svg",
          price: 36,
        },
        {
          id: 3,
          img: "/skirt.svg",
          price: 36,
        },
        {
          id: 4,
          img: "/white-shirt.svg",
          price: 36,
        },
      ];
    },
  },
};
</script>

<style scoped>
.cart-container {
  flex: 1;
}

.top-app__bar {
  background-color: #0b2560;
  padding: 15px 20px;
  color: white;
  font-size: 14px;
  font-family: "Poppins";
  line-height: 17px;
}

.top-app__bar .active {
  font-weight: 600;
}

.cart-list-title {
  font-family: "Poppins";
  font-weight: 700;
  line-height: 24px;
  margin-top: 24px;
  margin-left: 16px;
}

.cart-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cart-list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 156px;
  height: 156px;
  text-align: center;

  font-family: "Poppins";
  font-size: 16px;
  font-weight: 600;
}

.lock-sign {
  position: absolute;
  top: 14px;
  left: 14px;
}
</style>
