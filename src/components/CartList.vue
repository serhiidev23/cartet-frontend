<template>
  <div class="container">
    <div v-if="deviceType === 'desktop'">
      <MainHeader />
      <div class="container-section">
        <SideBarDesktop type="1" />
        <CartPage />
      </div>
    </div>
    <div v-else style="flex: 1">
      <div class="container-mobile">
        <MainHeaderMobile />
        <CartPageMobile />
        <SideBarMobile />
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "./cart/MainHeader.vue";
import CartPage from "./cart/desktop/CartPage.vue";
import SideBarDesktop from "./cart/desktop/SideBarDesktop.vue";
import CartPageMobile from "./cart/mobile/CartPageMobile.vue";
import MainHeaderMobile from "./cart/mobile/MainHeaderMobile.vue";
import SideBarMobile from "./cart/mobile/SideBarMobile.vue";

export default {
  components: {
    MainHeader,
    SideBarDesktop,
    CartPage,
    CartPageMobile,
    MainHeaderMobile,
    SideBarMobile,
  },
  name: "CartList",
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
  height: 100%;
  flex-direction: column;
}
</style>
