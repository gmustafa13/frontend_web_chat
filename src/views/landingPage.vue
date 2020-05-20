<!-- @format -->

<template>
  <b-container>
    <b-row class="rowClass" v-for="item in userData" :key="item.name">
      <b-col class="column">{{ item.name }}</b-col>
      <b-col class="column">{{ item.email }}</b-col>
      <b-col class="column">{{ item.mobileNumber }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    async getAllUser() {
      let allUser = await this.$service.getDataWithoutParams("/user/getAll");
      if (allUser) {
        this.userData = allUser.data.data.result.list;
      } else {
        this.userData = [];
      }
    },
  },
  beforeMount() {
    this.getAllUser();
  },
};
</script>
<style>
.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 50px; /* Should be removed. Only for demonstration */
  background-color: lightgreen;
}
.rowClass {
  margin-top: 2px;
  margin-bottom: 2px;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
