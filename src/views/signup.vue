<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="Your Name:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Email:"
        label-for="input-2"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="password"
        label-for="input-3"
        description=" Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, or emoji."
      >
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          :minLength="8"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Conform password"
        label-for="input-7"
        description=" Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, or emoji."
      >
        <b-form-input
          id="input-7"
          v-model="form.conformPassword"
          type="password"
          :minLength="8"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Age:" label-for="input-4">
        <b-form-input
          type="number"
          id="input-4"
          v-model="form.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Gender:" label-for="input-5">
        <b-form-select id="input-5" v-model="form.gender" :options="genders" required></b-form-select>
      </b-form-group>

      <b-form-group label="Mobile Number:" label-for="input-6">
        <b-form-input
          type="text"
          id="input-6"
          v-model="form.mobileNumber"
          required
          placeholder="Enter Mobile Number"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        gender: null,
        password: "",
        age: null,
        conformPassword: "",
        mobileNumber: ""
      },
      genders: [{ text: "Select One", value: null }, "male", "female"]
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      if (this.form.password != this.form.conformPassword) {
        this.$bvToast.toast(`password not match`, {
          title: "warning",
          solid: true,
          variant: "warning"
        });
      } else {
        let registerdData = await this.$service.saveData(
          "/user/save",
          this.form
        );
        if (registerdData.statusCode == 200) {
          this.$bvToast.toast("Successful", {
            title: "success",
            solid: true,
            variant: "success"
          });
          await setTimeout(() => {
            this.$router.push({ name: "Login" });
          }, 2000);
        } else {
          this.$bvToast.toast(`Somthing went worng`, {
            title: "error",
            solid: true,
            variant: "error"
          });
        }
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
      this.form.age = null;
      this.form.conformPassword = "";
      this.form.gender = null;
      this.form.mobileNumber = "";
      // Trick to reset/clear native browser form validation state
      this.$nextTick(() => {});
    }
  }
};
</script>