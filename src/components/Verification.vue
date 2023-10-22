<script setup>
</script>

<template>
  <div>
    <!---------------------------- Navbar --------------------------->
    <div class="navbar">
      <h5 class="logo">cartet</h5>
      <span style="flex: 1;"></span>
      <div>
        <span class="choose">Choose Language</span>
        <span class="tooltip"></span>
      </div>
    </div>

    <!---------------------------- Form --------------------------->
    <div class="form-section">
      <div class="form">
        <h1>VERIFY PHONE NUMBER</h1>
        <p>Enter the verification code that we have sent to your phone.</p>
        <div class="verify">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="send-code">CONFIRM CODE</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

/*********************************  Navbar  ************************************/
.navbar {
  height: 41px;
  margin: 50px 50px;
  display: flex;
}

.logo {
  display: inline-block;
  padding-top: 6px;
  width: 88px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 100%;
  color: #000000;
}

.choose {
  display: inline-block;
  padding-top: 4px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #9B9AA2;
  margin-right: 5px;
}

.tooltip {
  content: " ";
  border-width: 5px;
  border-style: solid;
  border-color: #9B9AA2 transparent transparent transparent;
  margin-top: 9px;
}

/*********************************  Form  ************************************/

.form-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {

  /* Neutrals White */
  width: 640px;
  background: #FFFFFF;
  /* Neutrals (Lightest Gray) */

  border: 1px solid #DEDEDE;
  /* Style 1 (Desktop */

  box-shadow: 1px 9px 18px 5px rgba(45, 45, 45, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.form h1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  color: #000000;
  margin-top: 56px;
  margin-bottom: 56px;
}

.form p {
  margin-top: 8px;
  margin-bottom: 8px;
  width: 425px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 32px;
}

.verify {
  margin-top: 48px;
  margin-bottom: 48px;
  display: flex;
}

.verify .item {
  width: 90px;
  height: 96px;
  background-color: #DEDEDE;
  margin: 0px 10px;
}

.send-code {
  margin-top: 72px;
  margin-bottom: 20px;
  width: 200px;
  height: 56px;
  background: #000000;
  backdrop-filter: blur(6px);
  text-align: center;
  color: white;
  padding: 16.5px 0px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 100%;
}

@media screen and (max-width:750px) {
  .navbar {
    height: auto;
    margin: 30px 50px;
    display: flex;
    flex-direction: row !important;
  }

  .navbar .logo {
    font-size: 16px;
  }

  .navbar div .choose {
    font-size: 14px;
  }

  .form {
    width: 90%;
  }

  .form h1 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
  }

  .phone {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .send-code {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px 30px;
    font-size: 14px;
    width: auto;
    height: auto;
  }

  .form p {
    width: auto;
    padding: 0px 10px;
    font-size: 16px;
    text-align: left;
  }

  .verify {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .verify .item {
    width: 60px;
    height: 66px;
    background-color: #DEDEDE;
    margin: 0px 4px;
  }
}
</style>
