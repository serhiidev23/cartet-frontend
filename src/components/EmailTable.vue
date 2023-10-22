<template>
  <div class="body__container">
    <div class="body__header-section">
      <div class="">
        <div class="body__heading">1st Grade Girls e-mail list</div>
      </div>
    </div>
    <div class="btn-group">
      <div>Filter by tags <img src="/arrow-down.svg" /></div>
      <div>View Segment <img src="/arrow-down.svg" /></div>
      <div class="new">New Segment</div>
    </div>
    <div class="table">
      <table>
        <tr>
          <th class="arrow"><img src="/arrow-down.svg" /></th>
          <th class="email">Email Address</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birthday</th>
          <th>Tags</th>
          <th>Email Marketing</th>
        </tr>
        <tr>
          <td class="arrow"><input type="checkbox" /></td>
          <td class="email">
            <span>becg03@hotmail.com</span>
            <span class="detail">></span>
          </td>
          <td>Becca</td>
          <td></td>
          <td></td>
          <td></td>
          <td><span class="subscribe">Subscribed</span></td>
        </tr>
        <tr>
          <td class="arrow"><input type="checkbox" /></td>
          <td class="email">
            <span>tmschaffy@gmail.com</span>
            <span class="detail">></span>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><span class="subscribe">Subscribed</span></td>
        </tr>
        <tr>
          <td class="arrow"><input type="checkbox" /></td>
          <td class="email">
            <span>samescobar1@hotmail.com</span>
            <span class="detail">></span>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><span class="subscribe">Subscribed</span></td>
        </tr>
        <tr>
          <td class="arrow"><input type="checkbox" /></td>
          <td class="email">
            <span>siri.surab@gmail.com</span>
            <span class="detail">></span>
          </td>
          <td>Siri</td>
          <td></td>
          <td></td>
          <td></td>
          <td><span class="subscribe">Subscribed</span></td>
        </tr>
        <tr>
          <td class="arrow"><input type="checkbox" /></td>
          <td class="email">
            <span>dhohaalali@gmail.com</span>
            <span class="detail">></span>
          </td>
          <td>Dhoha</td>
          <td></td>
          <td></td>
          <td></td>
          <td><span class="subscribe">Subscribed</span></td>
        </tr>
        <tr>
          <td class="arrow"><input type="checkbox" /></td>
          <td class="email">
            <span>moanivalente@hotmail.com</span>
            <span class="detail">></span>
          </td>
          <td>Moani</td>
          <td></td>
          <td></td>
          <td></td>
          <td><span class="subscribe">Subscribed</span></td>
        </tr>
        <tr>
          <td class="arrow"><input type="checkbox" /></td>
          <td class="email">
            <span>Figueroadestiny@hotmail.com</span>
            <span class="detail">></span>
          </td>
          <td>Destiny</td>
          <td></td>
          <td></td>
          <td></td>
          <td><span class="subscribe">Subscribed</span></td>
        </tr>
        <tr>
          <td class="arrow"><input type="checkbox" /></td>
          <td class="email">
            <span>ashley385@bellsouth.net</span>
            <span class="detail">></span>
          </td>
          <td>Ashley</td>
          <td></td>
          <td></td>
          <td></td>
          <td><span class="subscribe">Subscribed</span></td>
        </tr>
        <tr>
          <td class="arrow"><input type="checkbox" /></td>
          <td class="email">
            <span>decrypt403@yahoo.com</span>
            <span class="detail">></span>
          </td>
          <td>Hen</td>
          <td></td>
          <td></td>
          <td></td>
          <td><span class="subscribe">Subscribed</span></td>
        </tr>
      </table>
    </div>
    <div class="btns">
      <div class="space"></div>
      <div class="send">Send</div>
    </div>
  </div>
</template>

<script>

// import ProductItem from '../common/ProductItem.vue';
export default {
  // components: { ProductItem },
  name: 'MainBody',
}
</script>

<style>
.body__header-section {
  display: flex;
  justify-content: space-between;
}

.body__container {
  padding: 0px !important;
  width: 100%;
}

.body__heading {
  margin-left: 20px;
  margin-bottom: 10px;
  font-size: 36px;
  font-family: 'Poppins';
  font-weight: 700;
}

@media screen and (max-width:750px) {
  .btn-group {
    flex-direction: column;
  }
}


.btn-group {
  display: flex;
  background-color: #f3f4f1;
}

.btn-group div {
  margin-right: 40px;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Poppins';
  padding: 15px;
}

.btn-group div img {
  width: 8px;
}

.btn-group .new {
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;

}

.table {
  overflow-x: auto !important;
}

table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto !important;
  /* max-width: 500px; */
}

tr {
  font-size: 15px;
  font-weight: 700;
  font-family: 'Poppins';
  text-align: left;
}

tr:hover {
  background-color: rgb(246, 235, 205);
}

th,
td {
  padding: 20px;
  color: black;
  border-bottom: 1px solid lightslategray;
}

.arrow {
  text-align: center;
  padding: 0px;
}

.arrow img {
  width: 10px;
}

.arrow input {
  width: 30px;
  height: 30px;
  margin: 0px 5px;
}

.email {
  position: relative;
  border-left: 1px solid lightslategray;
  border-right: 1px solid lightslategray;
}

.detail {
  position: absolute;
  right: 10px;
  top: 20px;
}

.subscribe {
  background-color: rgb(200, 213, 187);
  padding: 5px 10px;
  border-radius: 20px;
}

.btns {
  display: flex;
}

.btns .space {
  flex: 1;
}

.btns .send {
  margin: 10px 30px;
  background-color: rgb(38, 92, 242);
  padding: 22px 90px;
  box-shadow: 1px 6px 12px rgba(45, 45, 45, 0.2);
  border-radius: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 100%;
  color: white;
}
</style>
