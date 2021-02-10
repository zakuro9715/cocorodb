import { Item } from '@/models'
import { db, ID, Saved, toSaved } from '@/db'
import {
  Repository,
  ActionTree,
  MutationTree,
  GetterTree,
} from './types'

interface State {
  repo: Repository<Item>
  ids: ID[]
}

export const namespaced = true

export const state: State = {
  repo: {},
  ids: [],
}

export const mutations: MutationTree<State> = {
  setRepo(state: State, repo: Repository<Item>) {
    state.repo = repo
  },
  setIds(state: State, ids: ID[]): void {
    state.ids = ids
  },
  appendItem(state: State, item: Saved<Item>): void {
    state.repo[item.id] = item
    state.ids.push(item.id)
  },
}

export const actions: ActionTree<State> = {
  async loadAll({ commit }: any): Promise<void> {
    commit('setRepo', {})
    commit('setIds', [])
    const items = (await db.items.toArray()).map((v) => new Item(toSaved(v)))
    items.forEach((v: Item) => {
      commit('appendItem', v)
    })
  },
}

export const getters: GetterTree<State> = {
  list: (state: State) => state.ids.map((id) => state.repo[id]),
  getById(state: State) {
    return (id: ID) => state.repo[id]
  },
}
