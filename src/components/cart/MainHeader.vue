<template>
  <div class="navbar">
    <h5 class="logo">cartet</h5>
    <span style="flex: 1"></span>
    <div class="navbar-btns">
      <span class="choose"
        >Choose Language
        <img class="header__down-arrow" src="/DownArrow.svg" />
      </span>
      <span class="choose"
        ><img class="user-avatar" src="/avatar.svg" />Chloe Johnson

        <img class="header__down-arrow" src="/DownArrow.svg" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>

<style scoped>
.navbar {
  height: 41px;
  margin: 10px 30px;
  display: flex;
}

.logo {
  display: inline-block;
  padding-top: 6px;
  width: 88px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 100%;
  color: #000000;
}

.user-avatar {
  margin-right: 10px;
}

.navbar-btns {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.choose {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #9b9aa2;
  margin-left: 75px;
}

.header__down-arrow {
  margin-left: 22px;
  width: 10px;
}

@media only screen and (max-width: 750px) {
  .navbar {
    height: auto;
    flex-direction: column;
    margin: 10px;
  }

  .logo {
    height: 41px;
  }

  .choose {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #9b9aa2;
    margin-left: 0px;
  }
}
</style>
