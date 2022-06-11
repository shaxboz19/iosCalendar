export const state = () => ({
  client: null,
  variables: null
})

export const mutations = {
  setClient(state, data) {
    state.client = data
  },
  setVariables(state, data) {
    state.variables = data
  }
}

export const actions = {
  async getDetail({
    commit,
    state
  }, id) {
    try {
      const {
        data
      } = await this.$axios.get('/' + id)
      const {
        client
      } = data
      commit('setClient', client)
      commit('setVariables', data.variables)
      console.log(data);
      return data
    } catch ({
      message
    }) {
      commit('setError', true, {
        root: true
      })
    }

  }
}

export const getters = {
  getClient(state) {
    return state.client
  },
  getVariables(state) {
    return state.variables
  }
}
