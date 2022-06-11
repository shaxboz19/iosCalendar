export const state = () => ({
  client: localStorage.getItem('client'),
  isError: false
})
export const mutations = {
  setClient(state, client) {
    state.client = client
  },
  setError(state, error) {
    state.isError = error
  }
}
