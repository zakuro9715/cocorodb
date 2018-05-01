import ncmb from '~/plugins/ncmb'

const UserKind = ncmb.DataStore('UserKind')

export const state = () => ({
  kinds: [],
})

export const mutations = {
  SET_KINDS(state, kinds) {
    state.kinds = kinds
  },
  ADD_KIND(state, kind) {
    state.kinds.push(kind)
  },
}

export const actions = {
  async fetchAllKinds({ rootState, commit }) {
    if (!rootState.auth.currentUser) {
      commit('SET_KINDS', [])
      return []
    }

    const isCurrentUser = ncmb.User.equalTo(
      'objectId',
      rootState.auth.currentUser.objectId
    )
    const records = await UserKind.inQuery('user', isCurrentUser).fetchAll()
    const kinds = records.map((v) => v.kind)
    commit('SET_KINDS', kinds)
    return kinds
  },
  async createKind({ rootState, commit }, kind) {
    const userKind = await new UserKind({
      user: rootState.auth.currentUser,
      kind,
    }).save()
    commit('ADD_KIND', userKind.kind)
    return userKind.kind
  },
}
