const messages = {
  request_not_matched: "Ошибка! Попробуйте перезапустить телеграм бота.",
  session_not_active: "Сессия не активна! Попробуйте перезапустить телеграм бота.",
}
export default {
  methods: {
    errorHandler(message) {
      if (messages[message]) {
        this.$toast.error(messages[message])
      } else {
        this.$toast.error(message)
      }
    }
  },
}
