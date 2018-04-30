export const state = () => ({
  currentUser: null,
})

export const mutations = {
  SET_CURRENT_USER(state, u) {
    state.currentUser = u
  },
}

export const getters = {
  loggedIn(state) {
    return !!state.currentUser
  },
}

export const actions = {
  async fetchCurrentUser({ rootState, commit }) {
    const u = rootState.ncmb.User.getCurrentUser()
    commit('SET_CURRENT_USER', u)
    return u
  },
  async logout({ rootState, commit }) {
    await rootState.ncmb.User.logout()
    commit('SET_CURRENT_USER', null)
  },
  async loginAsAnonymous({ rootState, dispatch }) {
    await rootState.ncmb.User.loginAsAnonymous()
    return await dispatch('fetchCurrentUser')
  },
}
