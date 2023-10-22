<template>
  <div class="resell-cart__container">
    <div class="top-app__bar">
      <span>&lt; Your Carts</span>
      <span> &lt; 1st Grader Grils</span>
      <span class="active"> &lt; Resale Items</span>
    </div>

    <SearchBar />

    <h5 class="items-header-title">Yours Items</h5>

    <div style="height: 400px"></div>

    <div class="btn-list-sale__container">
      <button class="btn-list__sale">List For Sale</button>
    </div>
  </div>
</template>

<script>
import SearchBar from "../common/SearchBar.vue";

export default {
  name: "ResellPageMobile",
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.resell-cart__container {
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

.items-header-title {
  margin-top: 24px;
  margin-left: 16px;

  font-family: "Poppins";
  font-size: 14px;
}

.btn-list-sale__container {
  text-align: right;
  padding-right: 16px;
}

.btn-list__sale {
  background-color: #0b2560;
  color: white;
  padding: 10px 16px;
  font-weight: 700;
  font-size: 14px;
  font-family: "Poppins";
}
</style>
