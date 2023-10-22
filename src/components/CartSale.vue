<template>
  <div class="container">
    <div v-if="deviceType === 'desktop'">
      <MainHeader />
      <div class="container-section">
        <SideBarDesktop type="3" />
        <CartSaleItems />
        <CartSold />
      </div>
    </div>
    <div v-else style="flex: 1">
      <div class="container-mobile">
        <MainHeaderMobile />
        <CartSaleMobile />
        <SideBarMobile />
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "./cart/MainHeader.vue";
import CartSaleItems from "./cart/desktop/CartSaleItems.vue";
import CartSold from "./cart/desktop/CartSold.vue";
import SideBarDesktop from "./cart/desktop/SideBarDesktop.vue";
import CartPageMobile from "./cart/mobile/CartPageMobile.vue";
import MainHeaderMobile from "./cart/mobile/MainHeaderMobile.vue";
import SideBarMobile from "./cart/mobile/SideBarMobile.vue";
import CartSaleMobile from "./cart/mobile/CartSaleMobile.vue";

export default {
  components: {
    MainHeader,
    SideBarDesktop,
    CartSaleItems,
    CartPageMobile,
    CartSold,
    MainHeaderMobile,
    SideBarMobile,
    CartSaleMobile,
  },
  name: "CartSale",
  data() {
    return {
      deviceType: "",
    };
  },

  mounted() {
    this.getDeviceType();
    window.addEventListener("resize", this.getDeviceType);
  },

  methods: {
    getDeviceType() {
      if (window.innerWidth <= 480) {
        this.deviceType = "mobile";
      } else {
        this.deviceType = "desktop";
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.container-section {
  display: flex;
  justify-content: row;
}

body {
  margin: 0px;
}

.container-mobile {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
