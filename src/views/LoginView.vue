<template>
  <h1>登入</h1>
  <input type="button" value="登入" @click="login">
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push('/admin');
    },
  },
};
</script>
