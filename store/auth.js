import ncmb from '~/plugins/ncmb'

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
  async fetchCurrentUser({ commit }) {
    const u = ncmb.User.getCurrentUser()
    commit('SET_CURRENT_USER', u)
    return u
  },
  async logout({ commit }) {
    await ncmb.User.logout()
    commit('SET_CURRENT_USER', null)
  },
  async loginAsAnonymous({ dispatch }) {
    await ncmb.User.loginAsAnonymous()
    return await dispatch('fetchCurrentUser')
  },
}
