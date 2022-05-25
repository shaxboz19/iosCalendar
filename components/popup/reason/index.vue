<template>
  <popup-layout
    Title="Укажите причину"
    @close="close"
    :isAccess="!isActive"
    @access="access"
  >
    <template #body>
      <div class="pages-action" style="margin-bottom: 24px">
        <a-row :gutter="[8, 8]" v-if="isActive">
          <a-col span="24">
            <a-button class="light-blue" @click="onClick('pain')">
              Почувствовал боль
            </a-button>
          </a-col>
          <a-col span="24">
            <a-button class="light-blue" @click="onClick('tired')">
              Устал
            </a-button>
          </a-col>
          <a-col span="24">
            <a-button class="light-blue" @click="onClickOther">
              Другая причина
            </a-button>
          </a-col>
        </a-row>
        <div class="reason-textarea" v-else>
          <textarea ref="textarea"></textarea>
        </div>
      </div>
    </template>
  </popup-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async onClick(reason) {
      try {
        const { data } = await this.$axios.post(`/${this.client}/request`, {
          code: "stop",
          params: {
            reason,
          },
        });
        const { title } = data.currentNode;
        this.$emit("close");
        this.smartRouter(title);
      } catch (error) {
        const {
          data: { message },
        } = error.response;
        this.errorHandler(message);
      }
    },
    onClickOther() {
      this.isActive = false;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    async access() {
      try {
        const { data } = await this.$axios.post(`/${this.client}/request`, {
          code: "stop",
          reason: this.$refs.textarea.value,
        });
        const { title } = data.currentNode;
        this.$emit("close");
        this.smartRouter(title);
      } catch (error) {
        const {
          data: { message },
        } = error.response;
        this.errorHandler(message);
      }
    },
  },
  computed: {
    ...mapState(["client"]),
  },
};
</script>

<style>
.reason-textarea textarea {
  border: none !important;
  outline: none !important;
  border: none !important;
  resize: none;
  box-shadow: unset !important;
  text-align: left;
  padding: 0;
  width: 100%;
}
</style>
