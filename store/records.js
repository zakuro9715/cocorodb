import ncmb from '~/plugins/ncmb'
import Vue from 'vue'

/*
 * RecordKind
 * fields:
 *   - name
 *   - range: [min, max] or falsy value (not range)
 */

const RecordKind = ncmb.DataStore('RecordKind')

export const state = () => ({
  kinds: {},
  selectedKind: null,
})

export const mutations = {
  SET_KIND(state, kind) {
    Vue.set(state.kinds, kind.objectId, kind)
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
    kinds.forEach((k) => commit('SET_KIND', k))
    return kinds
  },
  async fetchKind({ commit }, id) {
    const kind = (await RecordKind.equalTo('objectId', id).fetchAll())[0]
    if (!kind) {
      throw new Error({ statusCode: 404 })
    }
    commit('SET_KIND', kind)
    return kind
  },
  async createKind({ rootState, commit }, { name, range, kind }) {
    const user = rootState.auth.currentUser
    const v = await new RecordKind({ name, range, kind, user }).save()
    commit('SET_KIND', v)
    return v
  },
  async updateKind({ commit }, attrs) {
    const kind = await new RecordKind(attrs).update()
    commit('SET_KIND', kind)
    return kind
  },
}
