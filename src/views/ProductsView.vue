<template>
  <h1>產品列表</h1>
</template>

<script>
export default {
  methods: {
    getProducts() {
      this.axios.get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`)
        .then((res) => {
          console.log(res.data);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
