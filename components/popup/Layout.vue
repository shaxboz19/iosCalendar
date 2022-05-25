<template>
  <div class="popup">
    <div class="popup-wrapper" :style="`max-width: ${Width}px`">
      <div class="popup-header">
        <h4>{{ Title }}</h4>
      </div>
      <div class="popup-body" :style="`height: ${Height}px`">
        <slot name="body"></slot>
      </div>
      <div class="popup-footer" v-if="isFooter">
        <a-button class="light-red" @click="Close">Отмена</a-button>
        <a-button class="red" @click="access" v-if="isAccess">Готово</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Title: {
      type: String,
      default() {
        return "Popup title";
      },
    },
    Width: {
      type: Number | String,
      default() {
        return 575;
      },
    },
    Height: {
      type: Number | String,
      default() {
        return "Auto";
      },
    },
    isFooter: {
      type: Boolean,
      default() {
        return true;
      },
    },
    isAccess: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    Close() {
      this.$emit("close");
    },
    access() {
      this.$emit("access");
    },
  },
};
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.popup-wrapper {
  width: 100%;
  background-color: white;
  border-radius: 8px;
}

.popup-header {
  padding: 16px 24px 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-header h4 {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #000000;
}

.popup-header i {
  font-size: 20px;
  cursor: pointer;
}

.popup-body {
  padding: 16px 8px 16px 24px;
  max-width: calc(100% - 8px);
  overflow-y: scroll;
  height: 100%;
}

.popup-body::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

.popup-body::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.popup-body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(var(--color-yellow), 1);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.popup-footer {
  display: flex;
  padding: 16px 24px 24px 24px;
  display: -webkit-box;
  display: -ms-flexbox;
}
.popup-footer button {
  margin: 0 8px;
}
.red {
  background-color: #ff685a;
  color: #fff;
}
.red:hover {
  background-color: #ff685a;
  color: #fff;
}
.red:focus {
  background-color: #ff685a;
  color: #fff;
}
</style>
