<template>
  <div>
    <!-- Styled -->
    <b-form @submit="onSubmit">
      <b-form-file
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    <!-- Plain mode -->
    <!-- <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
    <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      file2: null
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      console.log("fff", this.file);
    }
  }
};
</script>