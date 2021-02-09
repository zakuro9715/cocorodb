import { unwrap } from '@/utils'
import { db, Record, ID } from '@/db'
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
  push(state: State, item: Record): void {
    const id = unwrap(item.id)
    state.repo[id] = item
    state.ids.push(id)
  },
}

export const actions: ActionTree<State> = {
  async loadAll({ commit }: any): Promise<void> {
    commit('setRepo', {})
    commit('setIds', [])
    const list = await db.records.toArray()
    list.forEach((v: Record) => { commit('push', v) })
  },
  async put({ commit }: any, record: Record): Promise<number> {
    const v = await db.records.put(record)
    commit('push', v)
    return v
  },
}

export const getters: GetterTree<State> = {
  list: (state: State) => state.ids.map((id) => state.repo[id]),
}
