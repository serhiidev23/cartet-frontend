<template>
  <div class="cart-sale__container">
    <div class="top-app__bar">
      <span>&lt; Your Carts</span>
      <span> &lt; 1st Grader Grils</span>
      <span class="active"> &lt; Resale Items</span>
    </div>

    <div class="cart-container__header">
      <h5>Your Items on Sale</h5>
      <div style="flex: 1"></div>
      <span><img src="/3dots.svg" width="16" height="4" /></span>
    </div>

    <div class="filter-action__container">
      <a class="filter-item active">All Items</a>
      <a class="filter-item">Sold Items</a>
    </div>

    <div class="cart-list__container">
      <ul class="cart-item__list">
        <li v-for="item in cartitems" class="cart-item">
          <div v-if="item.isSold === true">
            <span class="sold-sign"
              ><img src="/assets/img/sold-icon.svg" width="13" height="13" />
              SOLD</span
            >
          </div>
          <span class="more-info"
            ><img width="12" height="3" src="/3dots.svg"
          /></span>
          <img :src="item.img" width="80" height="80" />

          <div v-if="item.isSold === false" class="cart-item__price">
            Selling Price: <span>$25</span>
          </div>
          <div v-else class="cart-item__status">Porch Pickup</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartSaleMobile",
  data() {
    return {
      cartitems: [
        {
          price: 25,
          isSold: false,
          img: "/clothe1.svg",
        },
        {
          price: 25,
          isSold: false,
          img: "/dress.svg",
        },
        {
          isSold: true,
          img: "/skirt.svg",
        },
        {
          price: 25,
          isSold: false,
          img: "/white-shirt.svg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.cart-sale__container {
  flex: 1;
  position: relative;
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

.cart-container__header {
  display: flex;
  padding-left: 16px;
  padding-right: 18px;
  margin-top: 24px;
}

.filter-action__container {
  margin-top: 16px;
  text-align: center;
}

.filter-item {
  display: inline-block;
  background-color: rgba(11, 37, 96, 0.25);
  color: white;
  font-size: 14px;
  line-height: 24px;
  padding: 2px 10px;
}

.filter-item.active {
  background-color: #0b2560;
}

.cart-list__container {
  margin-top: 10px;
}

.cart-item__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
}

.cart-item {
  width: 156px;
  height: 156px;
  position: relative;
  text-align: center;
  padding-top: 30px;
  font-family: "Poppins";

  box-shadow: 1px 6px 12px 2px rgba(45, 45, 45, 0.18);
}

.more-info {
  position: absolute;
  right: 11px;
  top: 0px;
  z-index: 101;
}

.sold-sign {
  position: absolute;
  z-index: 102;
  top: 0px;
  left: 0px;

  background-color: #0b2560;
  color: white;

  padding: 8px 20px 8px 13px;
  font-size: 16px;
  font-weight: 700;
  line-height: 14px;
  border-radius: 0px 0px 24px 0px;
}

.cart-item__price {
  background-color: rgba(0, 0, 0, 0.05);
  color: #9b9aa2;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 500;
  margin: 0px 4px;
  padding: 2px 2px 2px 8px;
  height: 25px;
}

.cart-item__price span {
  background-color: white;
  color: black;
  padding: 0px 8px;
  border-radius: 16px;
  font-weight: 700;
}

.cart-item__status {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1px 27px;
  font-weight: 700;
  color: #0b2560;
  font-size: 14px;
  border-radius: 32px;
  margin: 0px 4px;
  height: 25px;
}
</style>
