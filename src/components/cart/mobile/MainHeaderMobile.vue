<template>
  <div class="navbar">
    <div class="navbar-brand">cartlet</div>
    <div class="choose-lang">
      <img class="header__down-arrow" src="/downarrow-white.svg" />
      Choose Language
    </div>
    <div class="profile-dropdown">
      <img class="user-avatar" width="32" height="32" src="/avatar.svg" />
      <img class="header__down-arrow" src="/downarrow-white.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeaderMoblie",
};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 56px;
  background-color: black;
  color: white;
  line-height: 24px;
  font-family: "Poppins";
}

.header__down-arrow {
  width: 10px;
  margin-left: 2px;
}

.navbar-brand {
  font-size: 16px;
  font-weight: 600;

  display: flex;
  align-items: center;
  padding: 16px;
}

.choose-lang {
  flex: 1;
  padding-right: 17px;

  font-size: 14px;

  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.profile-dropdown {
  display: flex;
  align-items: center;
}
</style>
