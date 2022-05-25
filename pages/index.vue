<template>
  <div>
    <Calendar v-if="isEdit" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      isEdit: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isEdit = true;
    }, 300);
  },
};
</script>
