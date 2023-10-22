<template>
  <div class="sidebar__section">
    <div class="sidebar__container">
      <div v-for="item in options" :key="item.id" class="sidebar-items">
        <div class="sidebar-item-logo">
          <img :src="item.image" />
        </div>
        <div class="sidebar-item-name">{{ item.name }}</div>
      </div>
      <div class="margin-230">
        <div
          v-for="item in bottomOptions"
          :key="item.id"
          class="sidebar-items mt-50"
        >
          <div class="sidebar-item-logo">
            <img :src="item.image" />
          </div>
          <div class="sidebar-item-name">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div v-if="this.type != 3" class="sidebar__search-container">
      <div class="sidebar__search-box">
        <img class="sidebar__img" src="/Search-bar.svg" />
        <div class="sidebar__text">Search your cart</div>
        <img class="sidebar__img-filter" src="/Filter.svg" />
      </div>
      <div class="sidebar__cart">
        Your Carts
        <div v-if="this.type == 1">
          <CartItem title="1st Grade Girls" price="$350.00" />
          <CartItem title="1st Grade Boys" price="$350.00" />
          <CartItem title="2nd Grade Girls" price="$350.00" />
        </div>
        <div v-else-if="this.type == 2">
          <h1>1st Grade Girls</h1>
          <div class="cart-detail">
            <div class="dots">
              <div style="flex: 1"></div>
              <img src="/3dots.svg" />
            </div>
            <div class="card-detail-image"><img src="/dress.svg" /></div>
            <div class="desc">
              <p>Drop Waist Jumper</p>
              <p>[GA050-94-80-NV/GR/WH] - ...</p>
              <p>Price: 47 USD</p>
            </div>
          </div>
          <div class="cart-detail">
            <div class="dots">
              <div style="flex: 1"></div>
              <img src="/3dots.svg" />
            </div>
            <div class="card-detail-image"><img src="/white-shirt.svg" /></div>
            <div class="desc">
              <p>Short Sleeve Peterpan</p>
              <p>Collar Blouse ...</p>
              <p>Price: 20.50 USD</p>
            </div>
          </div>
          <div class="cart-detail">
            <div class="dots">
              <div style="flex: 1"></div>
              <img src="/3dots.svg" />
            </div>
            <div class="card-detail-image"><img src="/blue-shirt.svg" /></div>
          </div>
          <div class="cart-detail">
            <div class="dots">
              <div style="flex: 1"></div>
              <img src="/3dots.svg" />
            </div>
            <div class="card-detail-image"><img src="/dress.svg" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "../CartItem.vue";

export default {
  props: ["type"],
  components: { CartItem },
  name: "SideBarDesktop",
  computed: {
    options() {
      return [
        {
          id: 1,
          name: "Create class",
          image: "/Cart.svg",
        },
        {
          id: 2,
          name: "Search Items",
          image: "/Search.svg",
        },
        {
          id: 3,
          name: "Your Cart",
          image: "/Shopping.svg",
        },
        {
          id: 4,
          name: "Checkout",
          image: "/Dollar-sign.svg",
        },
      ];
    },

    bottomOptions() {
      return [
        {
          id: 10,
          name: "Account",
          image: "/Account.svg",
        },
        {
          id: 11,
          name: "Log out",
          image: "/Logout.svg",
        },
      ];
    },
  },
};
</script>

<style scoped>
.sidebar__section {
  display: flex;
  flex-direction: row;
}

.sidebar__container {
  width: 115px;
  background-color: #000;
  color: white;
  padding-top: 80px;
  padding-bottom: 25px;
  gap: 50px;
  display: flex;
  flex-direction: column;
}

.sidebar-item-name {
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-size: 11px;
}

.sidebar-item-logo {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}

.sidebar__search-container {
  padding-top: 40px;
  height: 980px;
}

.sidebar__search-box {
  border: 1px solid #dedede;
  height: 48px;
  margin-left: 20px;
  background-color: #f5f0ed;
  border-radius: 20px;
  display: flex;
  margin-right: 50px;
}

.sidebar__text {
  font-size: 16px;
  display: flex;
  width: 300px;
  flex: 1;
  align-items: center;
  color: #9b9aa2;
  font-family: "Poppins";
}

.sidebar__img {
  display: flex;
  padding: 12px;
}

.sidebar__img-filter {
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-right: 10px;
}

.sidebar__cart {
  margin-left: 20px;
  margin-top: 20px;
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 600;
}

.margin-230 {
  margin-top: 230px;
}

.mt-50 {
  margin-top: 50px;
}

.sidebar__cart h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  margin-top: 45px;
}

.cart-detail {
  width: 260px;
  height: 250px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #dedede;
  box-shadow: 1px 9px 18px 5px rgba(45, 45, 45, 0.2);
  margin: 10px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.cart-detail .dots {
  position: absolute;
  top: 15px;
  right: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}

.cart-detail .desc {
  position: absolute;
  top: 180px;
  left: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}

.card-detail-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
