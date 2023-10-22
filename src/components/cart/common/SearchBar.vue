<template>
  <div class="search-container">
    <img class="search-icon" src="/Search-bar.svg" width="16" height="16" />
    <input class="search-bar" placeholder="Search your items" />
    <img class="filter-icon" src="/Filter.svg" width="17" height="14" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>
.search-container {
  margin: 24px 16px;
  position: relative;
}

.search-bar {
  width: 100%;
  height: 38px;
  padding-left: 40px;
  padding-right: 30px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.05);
  font-size: 12px;
  border: none;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 12px;
}

.filter-icon {
  position: absolute;
  right: 12px;
  top: 12px;
}
</style>
