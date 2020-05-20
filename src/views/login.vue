<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="password"
        label-for="input-2"
        description=" Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, or emoji."
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          :minLength="8"
          required
          placeholder="Enter password"
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
        password: ""
      },
      show: true
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      let loginData = await this.$service.login("/login", this.form);
      if (loginData.statusCode == 200) {
        this.$bvToast.toast("Successful", {
          title: "success",
          solid: true,
          variant: "success"
        });
        await setTimeout(() => {
          this.$router.push({ name: "SignUp" });
        }, 2000);
      } else {
        this.$bvToast.toast(`Somthing went worng`, {
          title: "error",
          solid: true,
          variant: "error"
        });
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.$nextTick(() => {});
    }
  }
};
</script>
