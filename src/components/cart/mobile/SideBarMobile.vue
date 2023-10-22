<template>
  <div>
    <ul class="bottom-navbar">
      <li
        v-for="item in options"
        :key="item.id"
        class="bottom-navbar__item"
        :class="item.css"
      >
        <div><img width="24" height="24" :src="item.image" /></div>
        <div>{{ item.name }}</div>
        <div class="nav-item__hover-decor"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBarMobile",
  computed: {
    options() {
      return [
        {
          id: 1,
          name: "Create Class",
          image: "/cart-whiteback.svg",
          css: "nav-item__create-class active",
        },
        {
          id: 2,
          name: "Search",
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
  },
};
</script>

<style>
.bottom-navbar {
  display: flex;
  background-color: black;
  align-items: center;
  text-align: center;
}

.bottom-navbar__item {
  font-size: 12px;
  font-style: normal;
  font-family: "Poppins";
  font-weight: 300;
  line-height: 14px;
  color: white;
  height: 76px;
  padding: 0px 16px;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bottom-navbar__item:hover {
  font-weight: bold;
}

.bottom-navbar .active {
  background-color: #0b2560;
}

.nav-item__create-class {
  flex: 1.4;
  padding: 0px 7px;
}

.nav-item__hover-decor {
  height: 2px;
  width: 16px;
  background-color: white;
  margin-top: 3px;
  visibility: hidden;
}

.bottom-navbar__item:hover .nav-item__hover-decor {
  visibility: visible;
}
</style>
