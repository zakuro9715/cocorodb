import { unwrap } from '@/utils'
import { db, Item, ID } from '@/db'
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
  appendItem(state: State, item: Item): void {
    const id = unwrap(item.id)
    state.repo[id] = item
    state.ids.push(id)
  },
}

export const actions: ActionTree<State> = {
  async loadAll({ commit }: any): Promise<void> {
    commit('setRepo', {})
    commit('setIds', [])
    const items = await db.items.toArray()
    items.forEach((v: Item) => {
      commit('appendItem', v)
    })
  },
}

export const getters: GetterTree<State> = {
  list: (state: State) => state.ids.map((id) => state.repo[id]),
}
