export const state = () => ({
  currentUser: null,
})

export const mutations = {
  SET_CURRENT_USER(state, u) {
    state.currentUser = u
  },
}

export const getters = {}

export const actions = {
  async fetchCurrentUser({ rootState, commit }) {
    const u = rootState.ncmb.User.getCurrentUser()
    commit('SET_CURRENT_USER', u)
    return u
  },
}
