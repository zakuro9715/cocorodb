import { Record, Item } from '@/models'
import { db, ID, Saved, toSaved, RecordData } from '@/db'
import {
  Repository,
  ActionTree,
  MutationTree,
  GetterTree,
} from './types'

interface State {
  repo: Repository<Record>
  ids: ID[]
}

export const namespaced = true

export const state: State = {
  repo: {},
  ids: [],
}

export const mutations: MutationTree<State> = {
  setRepo(state: State, repo: Repository<Record>) {
    state.repo = repo
  },
  setIds(state: State, ids: ID[]): void {
    state.ids = ids
  },
  push(state: State, v: Record): void {
    state.repo[v.id] = v
    state.ids.push(v.id)
  },
}

export const actions: ActionTree<State> = {
  async loadAll({ commit, rootGetters: { items }}: any): Promise<void> {
    commit('setRepo', {})
    commit('setIds', [])
    const list = (await db.records.toArray())
      .map((v) => new Record({ ...toSaved(v), item: items.get(v.itemId) as Item }))
    list.forEach((v: Record) => { commit('push', v) })
  },
  async put({ commit, rootGetters: { 'items/getById': getItem }}: any, data: RecordData): Promise<Record> {
    const id = await db.records.put(data)
    const record = new Record({ ...data, id, item: getItem(data.itemId) as Item })
    commit('push', record)
    return record
  },
}

export const getters: GetterTree<State> = {
  list: (state: State) => state.ids.map((id) => state.repo[id]),
}
