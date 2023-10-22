<template>
  <div class="email-container">
    <h5 class="email-list-title">1st Grade Girls Email List</h5>
    <div class="sort-header">
      <div class="sort-nav__item">
        <span class="sort-nav__text">Filter by Tags</span>
        <span class="sort-direction">
          <img width="12" height="12" src="/assets/img/arrow-down-white.svg" />
        </span>
      </div>
      <div class="sort-nav__item">
        <span class="sort-nav__text">View Segment</span>
        <span class="sort-direction">
          <img width="12" height="12" src="/assets/img/arrow-down-white.svg" />
        </span>
      </div>
      <div class="sort-nav__item">
        <span class="sort-nav__text">New Segment</span>
      </div>
    </div>
    <ul class="email-list">
      <li v-for="(item, index) in emails" :key="item.email" class="email-item">
        <div class="email-item-content">
          <div class="checkbox-container">
            <input
              type="checkbox"
              :checked="item.checked"
              class="email-checkbox"
            />
          </div>
          <div class="email-content">
            <span class="email-address">{{ item.email }}</span>
            <div v-if="item.collapsed === true" class="email-info">
              <p>
                First Name: <span>{{ item.firstName }}</span>
              </p>
              <p>
                Last Name: <span>{{ item.lastName }}</span>
              </p>
              <p>
                Birthday: <span>{{ item.birthday }}</span>
              </p>
              <p>Tags:</p>
            </div>
          </div>
          <span class="email-subscribed">Subscribed</span>
        </div>
        <div style="text-align: center">
          <button class="btn-collapse" @click="convertCollapsed(index)">
            {{ item.collapsed ? "Collapse" : "View Info" }}
            <span
              ><img
                :src="
                  item.collapsed
                    ? '/assets/img/arrow-collapse.svg'
                    : '/assets/img/arrow-collapse-down.svg'
                "
            /></span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EmailTableMobile",
  data() {
    return {
      emails: [
        {
          checked: false,
          email: "becg03@hotmail.com",
          firstName: "Becca",
          lastName: "Guillard",
          birthday: "January 03, 2016",
          Tags: "",
          collapsed: true,
        },
        {
          checked: false,
          email: "tmschaffy@gmail.com",
          firstName: "Tms",
          lastName: "Chaffy",
          birthday: "January 03, 2016",
          Tags: "",
          collapsed: false,
        },
        {
          checked: false,
          email: "brendaol@hotmail.com",
          firstName: "Bren",
          lastName: "Daol",
          birthday: "January 03, 2016",
          Tags: "",
          collapsed: false,
        },
        {
          checked: false,
          email: "siri.surab@gmail.com",
          firstName: "Siri",
          lastName: "Surab",
          birthday: "January 03, 2016",
          Tags: "",
          collapsed: false,
        },
        {
          checked: false,
          email: "moanivalente@gmail.com",
          firstName: "Moani",
          lastName: "Valente",
          birthday: "January 03, 2016",
          Tags: "",
          collapsed: false,
        },
      ],
    };
  },
  methods: {
    convertEmailCheck(index) {
      this.emails[index].checked = !this.emails[index].checked;
    },
    convertCollapsed(index) {
      this.emails[index].collapsed = !this.emails[index].collapsed;
    },
  },
};
</script>

<style scoped>
.email-container {
  flex: 1;
  font-family: "Poppins";
}

.email-list-title {
  font-family: "Poppins";
  font-size: 16px;
  padding: 24px 14px;
}

.sort-header {
  display: flex;
  margin: 0px 20px;
  background-color: #0b2560;
  height: 42px;
}

.sort-nav__item {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  line-height: 17px;
  color: white;
  border-right: 1px solid white;
}

.sort-direction {
  margin-left: 12px;
  margin-right: 18px;
}

.sort-nav__text {
  padding: 4px;
  width: 68px;
}

.email-list {
  margin: 0px 20px;
  box-shadow: 1px 6px 12px 2px rgba(45, 45, 45, 0.18);
}

.email-item {
  padding: 18px;
  border-bottom: 0.5px solid rgba(11, 37, 96, 0.15);
}

.email-item-content {
  display: flex;
  align-items: center;
}

.email-checkbox {
  width: 12px;
  height: 12px;
}

.email-content {
  margin-left: 10px;
  flex: 1;
  font-size: 12px;
  display: flex;
  justify-content: center;

  flex-direction: column;
}

.email-info p {
  opacity: 0.5;
}

.email-info p span {
  opacity: 1;
}

.email-address {
  font-size: 12px;
  font-weight: 600;
}

.email-subscribed {
  border-radius: 8px;
  height: fit-content;
  font-family: "Poppins";
  font-size: 12px;
  padding: 4px 10px;
  font-weight: 500;
  background-color: #dbe9cf;
  margin: 0px 15px;
}

.btn-collapse {
  color: #0b2560;
  border: none;
  background-color: transparent;
  font-size: 12px;
  font-family: "Poppins";
  text-decoration: underline;
  text-decoration-color: #0b2560;
}
</style>
