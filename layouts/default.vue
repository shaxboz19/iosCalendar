<template>
  <div class="wrapper">
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {
    let tg = window.Telegram.WebApp;
    tg.expand();
    if (this.$route.query.client) {
      this.$store.commit("setClient", this.$route.query.client);
      localStorage.setItem("client", this.$route.query.client);
    }
    this.getDetail();
    if (!localStorage.getItem("client")) {
      this.$store.commit("setError", true);
    }
  },
  methods: {
    async getDetail() {
      const { variables } = await this.$store.dispatch(
        "home/getDetail",
        this.client
      );

      if (!variables) {
        this.$store.commit("setError", true);
      }
    },
  },
  computed: {
    ...mapState(["client", "isError"]),
  },
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
