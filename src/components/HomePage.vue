<script setup>
</script>

<template>
  <div>
    <!---------------------------- Navbar --------------------------->
    <div class="navbar">
      <h5 class="logo">cartet</h5>
      <span style="flex: 1;"></span>
      <span class="question">How it works?</span>
      <div>
        <a class="sign-in">Sign In</a>
        <a class="sign-up">Sign Up</a>
      </div>
    </div>

    <!----------------------------- Extra ------------------------------>
    <div>
      <div class="image" alt="Back logo"></div>
      <div class="gradient"></div>
    </div>

    <!---------------------------- Sign Up --------------------------->
    <div class="signup">
      <img src="/logo.svg" class="sign-up-image" alt="Logo logo" />
      <div class="sign-up-btns">
        <input class="sign-up-text" />
        <a class="sign-up-btn">SIGN IN</a>
      </div>
    </div>



  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

/*********************************  Navbar  ************************************/
.navbar {
  height: 45px;
  margin: 50px 30px;
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

.question {
  display: inline-block;
  width: 130px;
  padding-top: 4px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 32px;
  color: #030303;
  margin-right: 42px;
}

.sign-in {
  display: inline-block;
  border: 1px solid #000000;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 32px;
  margin-right: 20px;
  width: 90px;
  padding-top: 4px;
  height: 39px;
}

.sign-up {
  display: inline-block;
  border: 1px solid #000000;
  font-family: 'Poppins';
  font-size: 16px;
  line-height: 32px;
  background: #000000;
  color: #EDEDED;
  width: 90px;
  text-align: center;
  padding-top: 4px;
  height: 39px;
}



/*********************************  SignUp  ***********************************/
.signup {
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 45%;
  top: 45%;
  width: 40%;
}

.sign-up-image {
  border: 1px solid #21345B;
  height: 100%;

}

.sign-up-btns {
  width: 100%;
  height: 67px;
  display: flex;
}

.sign-up-text {
  height: 100%;
  font-size: xx-large;
  flex: 2;
}

.sign-up-btn {
  display: inline-block;
  flex: 1;
  width: 153px;
  height: 67px;
  background: #0B2560;
  color: white;
  padding-top: 22px;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 100%;
}

/*********************************  Extra  ***********************************/
.image {

  box-sizing: border-box;

  position: absolute;
  width: 100%;
  height: calc(100vh - 120px);
  left: 100px;
  top: 120px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background: url("/back.svg");
  background-size: cover;

}

.gradient {

  position: absolute;
  width: 500px;
  height: calc(100vh - 251px);
  left: 812px;
  top: 251px;

  /* Primary */

  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.8;
  filter: blur(250px);
}


@media screen and (max-width:750px) {
  .navbar {
    flex-direction: column;
    height: auto;
  }

  .question {
    display: none;
  }

  .image {
    box-sizing: border-box;

    position: absolute;
    width: 100%;
    left: 0px;
    top: 140px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  }

  .signup {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 80%;
    left: 10%;
    top: 180px;
  }

  .navbar div {
    display: flex;
    justify-content: space-around;
  }

  .sign-up-btns {
    width: 100%;
    height: 40px;
    display: flex;
  }

  .sign-up-text {
    height: 100%;
    flex: 2;
  }

  .sign-up-btn {
    display: inline-block;
    flex: 1;
    width: 153px;
    height: 40px;
    background: #0B2560;
    color: white;
    padding-top: 12px;
    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
  }
}
</style>
