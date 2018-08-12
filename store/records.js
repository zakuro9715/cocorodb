import ncmb from '~/plugins/ncmb'

/*
 * RecordKind
 * fields:
 *   - name
 *   - range: [min, max] or falsy value (not range)
 */

const RecordKind = ncmb.DataStore('RecordKind')

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
    const kinds = await RecordKind.inQuery('user', isCurrentUser).fetchAll()
    commit('SET_KINDS', kinds)
    return kinds
  },
  async createKind({ rootState, commit }, { name, range }) {
    const kind = await new RecordKind({
      user: rootState.auth.currentUser,
      name,
      range,
    }).save()
    commit('ADD_KIND', kind)
    return kind
  },
}
