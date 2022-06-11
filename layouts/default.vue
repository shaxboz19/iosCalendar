<template>
  <div class="wrapper">
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    let tg = window.Telegram.WebApp;
    tg.expand();
  },
  methods: {},
};
</script>

<style>
.error-message {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 1.5rem;
}
.error-message a {
  margin-left: 0.5rem;
}
</style>
