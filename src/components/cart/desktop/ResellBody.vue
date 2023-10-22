<template>
  <div class="body__container">
    <div class="body__header-section">
      <div class="">
        <div class="body__heading">Builder</div>
        <div class="body__sub-heading">
          Drag and drop your items from your cart to create your design.
        </div>
      </div>
      <div class="body__three-dots">
        <img src="/3dots.svg" />
      </div>
    </div>
    <div class="body__dialog-container">
      <div class="dialog-container__box">
        <div class="dialog-box__cross">
          <img src="/cross.svg" />
        </div>
        <div class="dialog-box__heading">Resell Items</div>
        <div class="dialog-box__description">
          <div>1. Select items to sell.</div>
          <div>2. Set your price.</div>
          <div>3. Set your method for delivery.</div>
        </div>
        <div class="dialog-box__edit-box">
          <img src="/edit-pen.svg" />
          <div class="edit-text">1st Grade Girls</div>
        </div>
        <div class="button-container">
          <button class="solid-button">GO TO BUILDER</button>
        </div>
      </div>
      <div class="body__footer">Total $6230.00</div>
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
  font-family: "Poppins";
  font-weight: 700;
}

.body__sub-heading {
  opacity: 0.5;
  font-weight: 400;
  font-family: "Poppins";
  font-size: 16px;
}

.body__three-dots {
  margin-right: 80px;
}

.body__dialog-container {
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.dialog-container__box {
  width: 622px !important;
  height: 416px;
  padding: 20px;
  background: #ffffff;
  /* Neutrals (Lightest Gray) */

  border: 1px solid #dedede;
  /* Style 1 (Desktop */

  box-shadow: 1px 9px 18px 5px rgba(45, 45, 45, 0.2);
}

.dialog-box__cross {
  display: flex;
  justify-content: flex-end;
}

.dialog-box__heading {
  font-size: 40px;
  font-family: "Poppins";
  font-weight: 700;
  width: 100%;
  text-align: left !important;
  margin-left: 50px;
  display: block;
}

.dialog-box__description {
  font-size: 20px;
  font-family: "Poppins";
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  padding: 20px 80px;
}

.dialog-box__description div {
  margin-bottom: 10px;
}

.dialog-box__edit-box {
  margin: 0 70px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
}

.edit-text {
  margin-left: 15px;
}

.solid-button {
  display: flex;
  background-color: black;
  color: white;
  font-weight: 700;
  padding: 15px 61px;
}

.button-container {
  display: flex;
  padding-top: 40px;
  justify-content: center;
}

.body__footer {
  font-weight: 700;
  font-size: 40px;
  padding-top: 150px;
  font-family: "Poppins";
}
</style>
