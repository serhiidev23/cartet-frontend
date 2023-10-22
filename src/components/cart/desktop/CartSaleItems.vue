<template>
  <div class="body__container">
    <div class="body__header-section">
      <div class="">
        <div class="body__heading">Your Sale Items</div>
      </div>
      <div class="body__three-dots">
        <img src="/3dots.svg" />
      </div>
    </div>
    <div class="body__dialog-container">
      <div class="container-box-com">
        <div class="dots">
          <div style="flex: 1"></div>
          <img src="/3dots.svg" />
        </div>
        <div class="card-detail-image first-detail">
          <img class="shirt" src="/white-shirt.svg" />
          <img class="skirt" src="/skirt.svg" />
          <img class="foot" src="/foot.svg" />
          <img class="flower" src="/flower.svg" />
        </div>
        <div class="round">
          <p>Sell Price</p>
          <div style="flex: 1"></div>
          <p class="white">$25</p>
        </div>
      </div>
      <div class="container-box-com">
        <div class="dots">
          <div style="flex: 1"></div>
          <img src="/3dots.svg" />
        </div>
        <div class="card-detail-image second-detail">
          <img class="clothe1" src="/clothe1.svg" />
          <img class="clothe2" src="/clothe2.svg" />
          <img class="clothe3" src="/clothe3.svg" />
        </div>
        <div class="round">
          <p>Sell Price</p>
          <div style="flex: 1"></div>
          <p class="white">$100</p>
        </div>
      </div>
      <div class="container-box-com">
        <div class="dots">
          <div style="flex: 1"></div>
          <img src="/3dots.svg" />
        </div>
        <div class="card-detail-image first-detail">
          <img class="shirt" src="/blue-shirt.svg" />
          <img class="skirt" src="/skirt.svg" />
          <img class="foot" src="/foot.svg" />
        </div>
        <div class="round">
          <p>Sell Price</p>
          <div style="flex: 1"></div>
          <p class="white">$30</p>
        </div>
      </div>
      <div class="container-box-tmp"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBody",
};
</script>

<style scoped>
.body__header-section {
  display: flex;
  justify-content: space-between;
}

.body__container {
  padding: 30px;
  width: 100%;
}

.body__heading {
  font-size: 24px;
  font-weight: 700;
  font-family: "Poppins";
  padding-left: 30px;
}

.body__sub-heading {
  opacity: 0.5;
  font-weight: 400;
  font-size: 16px;
  font-family: "Poppins";
}

.body__three-dots {
  margin-right: 80px;
}

.body__dialog-container {
  height: 85%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.container-box-com {
  height: 350px;
  width: 45%;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #dedede;
  box-shadow: 1px 9px 18px 5px rgba(45, 45, 45, 0.2);
  margin: 10px;
  border-radius: 20px;
  position: relative;
}

.container-box-tmp {
  width: 355px;
  height: 350px;
}

.dots {
  position: absolute;
  right: 20px;
  display: flex;
}

.dialog-row {
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.share {
  display: flex;
  justify-content: center;
  align-items: center;
}

.share h1 {
  height: 50px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  flex: 1;
  text-align: center;
}

.share a {
  display: inline-block;

  background: #255ef1;
  /* Neutrals (Lightest Gray) */

  border: 1px solid #dedede;
  /* Style 1 (Android) */

  box-shadow: 1px 6px 12px 2px rgba(45, 45, 45, 0.2);
  border-radius: 20px;
  width: 242px;
  height: 67px;
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 100%;
  color: white;
  padding-top: 22px;
}

.req {
  position: absolute;
  left: 30px;
  top: 320px;
  color: #ec2020;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}

.first-detail {
  position: relative;
  height: 100%;
}

.first-detail .shirt {
  position: absolute;
  top: 0px;
  left: 0px;
}

.first-detail .skirt {
  position: absolute;
  top: 80px;
  left: 180px;
}

.first-detail .flower {
  position: absolute;
  top: 20px;
  left: 130px;
}

.first-detail .foot {
  position: absolute;
  top: 180px;
  left: 110px;
}

.second-detail {
  position: relative;
  height: 100%;
}

.second-detail .clothe1 {
  position: absolute;
  top: 0px;
  left: 0px;
}

.second-detail .clothe2 {
  position: absolute;
  top: 20px;
  left: 20px;
}

.second-detail .clothe3 {
  position: absolute;
  top: 40px;
  left: 40px;
}

.forth-detail {
  position: relative;
  height: 100%;
}

.forth-detail .flower {
  position: absolute;
  width: 100px;
  top: 20px;
  left: 20px;
}

.forth-detail .head {
  position: absolute;
  top: 20px;
  left: 150px;
}

.forth-detail .foot {
  position: absolute;
  top: 180px;
  left: 110px;
}

.round {
  position: absolute;
  top: 280px;
  left: 30px;
  display: flex;
  background-color: #ededed;
  width: 300px;
  border-radius: 20px;
  margin-bottom: 10px;
}

.round p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  margin: 10px;
  color: #a0a0a0;
}

.round .white {
  margin: 3px;
  background-color: white;
  border-radius: 20px;
  padding: 7px 20px;
  color: black;
}

.blue p {
  color: #0b2560 !important;
}
</style>
