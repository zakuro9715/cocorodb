import { computed, reactive, ref } from 'vue'
import { Item } from '@/models'
import { db, ID, Saved, toSaved } from '@/db'
import { Repository } from './types'

type Repo = Repository<Saved<Item>>

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createItemStore = () => {
  const state = {
    repo: reactive<Repo>({}),
    ids: ref(Array<ID>()),
  }
  const list = computed(() => state.ids.value.map((id) => state.repo[id]))

  function pushItem(item: Saved<Item>): void {
    state.repo[item.id] = item
    state.ids.value.push(item.id)
  }

  async function loadAll(): Promise<void> {
    const list = (await db.items.toArray()).map((v) => toSaved(new Item(v)))
    list.forEach((v) => { pushItem(v) })
  }

  const getById = (id: ID) => state.repo[id]

  const methods = { loadAll, getById }
  const getters = { list }
  return { ...methods, ...getters }
}

export type ItemStore = ReturnType<typeof createItemStore>
