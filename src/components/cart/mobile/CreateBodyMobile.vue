<template>
  <div class="bottom-sheet-container">
    <SearchBar />
    <h5 class="cart-header-title">Your Carts</h5>

    <div class="bill-container">
      <ul>
        <li v-for="item in cartlists" :key="item.id" class="bill-item">
          <span style="flex: 1">{{ item.content }}</span>
          ${{ item.price }}
        </li>
      </ul>
    </div>

    <p class="total-price">TOTAL:<span>$6230.00</span></p>
  </div>
</template>

<script>
import SearchBar from "../common/SearchBar.vue";

export default {
  data() {
    return {
      showBottomSheet: null,
    };
  },
  components: {
    SearchBar,
  },
  mounted() {
    this.showBottomSheet = true;
  },
  methods: {
    bottomSheet() {
      this.showBottomSheet = false;
    },
  },
  computed: {
    cartlists() {
      return [
        {
          id: 1,
          content: "1st Grader Girls",
          price: 350,
        },
        {
          id: 2,
          content: "2nd Grader Girls",
          price: 350,
        },
        {
          id: 3,
          content: "3rd Grader Girls",
          price: 350,
        },
      ];
    },
  },
};
</script>

<style scoped>
.bottom-sheet-container {
  flex: 1;
  position: relative;
  font-family: "Poppins";
}

.cart-header-title {
  margin-left: 16px;
  margin-top: 24px;
  font-size: 14px;
  font-family: "Poppins";
}

.bill-container ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

.bill-item {
  display: flex;
  padding: 16px;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 1px 6px 12px 2px rgba(45, 45, 45, 0.18);
  border-radius: 8px;
}

.bill-item:hover {
  background-color: #0b2560;
  color: white;
}

.total-price {
  margin-top: 58px;

  font-size: 18px;
  font-weight: 700;

  text-align: center;
}

.total-price span {
  margin-left: 20px;
}
</style>
