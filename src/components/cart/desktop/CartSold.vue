<template>
  <div class="sold-container">
    <div class="sold-text">Sold</div>
    <div class="body__dialog-container">
      <div class="dialog-row">
        <div class="container-box-com">
          <div class="card-detail-image first-detail">
            <img class="shirt" src="/white-shirt.svg" />
            <img class="skirt" src="/skirt.svg" />
            <img class="foot" src="/foot.svg" />
            <img class="flower" src="/flower.svg" />
          </div>
          <div class="round blue">
            <p>Porch Pickup</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBody",
};
</script>

<style scoped>
.sold-container {
  width: 600px;
  background-color: #f8efee;
}

@media only screen and (max-width: 1280px) {
  .sold-container {
    width: 700px;
  }
}

@media only screen and (max-width: 768px) {
  .sold-container {
    width: 400px;
  }
}

.sold-text {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  font-family: "Poppins";
  margin: 20px;
}

.body__dialog-container {
  height: auto !important;
}

.body__sub-heading {
  opacity: 0.5;
  font-weight: 400;
  font-size: 16px;
  font-family: "Poppins";
}

.container-box-com {
  width: 350px;
  height: 350px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #dedede;
  box-shadow: 1px 9px 18px 5px rgba(45, 45, 45, 0.2);
  margin: 10px;
  border-radius: 20px;
  position: relative;
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
