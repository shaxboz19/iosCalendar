<template>
  <div class="page _1" v-if="!isClose">
    <client-only>
      <Calendar @close="isClose = true" />
    </client-only>
  </div>
  <div v-else class="error-message">Дата успешно перенесена</div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      isClose: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style></style>
