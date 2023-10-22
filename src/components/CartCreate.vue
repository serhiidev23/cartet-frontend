<template>
  <div class="container">
    <div v-if="deviceType === 'desktop'">
      <MainHeader />
      <div class="container-section">
        <SideBarDesktop type="0" />
        <CreateBody />
      </div>
    </div>
    <div v-else style="flex: 1">
      <div class="container-mobile">
        <MainHeaderMobile />
        <CreateBodyMobileVue />
        <SideBarMobile />
        <CreateModalMobile />
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "./cart/MainHeader.vue";
import CreateBody from "./cart/desktop/CreateBody.vue";
import SideBarDesktop from "./cart/desktop/SideBarDesktop.vue";
import CreateBodyMobileVue from "./cart/mobile/CreateBodyMobile.vue";
import SideBarMobile from "./cart/mobile/SideBarMobile.vue";
import MainHeaderMobile from "./cart/mobile/MainHeaderMobile.vue";
import CreateModalMobile from "./cart/mobile/CreateModalMobile.vue";

export default {
  components: {
    MainHeader,
    SideBarDesktop,
    CreateBody,
    CreateBodyMobileVue,
    SideBarMobile,
    MainHeaderMobile,
    CreateModalMobile,
  },
  name: "CartCreate",
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
  position: relative;
}
</style>
