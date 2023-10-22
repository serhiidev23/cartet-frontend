<template>
  <div class="container">
    <MainHeader />
    <div v-if="deviceType === 'desktop'">
      <div class="container-section">
        <SideBarDesktop type="2" />
        <CartCombination />
      </div>
    </div>
    <div v-else>
      <div class="container-mobile">
        <CartPageMobile />
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "./cart/MainHeader.vue";
import CartCombination from "./cart/desktop/CartCombination.vue";
import SideBarDesktop from "./cart/desktop/SideBarDesktop.vue";
import CartPageMobile from "./cart/mobile/CartPageMobile.vue";
export default {
  components: { MainHeader, SideBarDesktop, CartCombination, CartPageMobile },
  name: "CartCombination",
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
  justify-content: row;
}
</style>
