import { computed, reactive } from 'vue'
import { Item } from '@/models'
import { records, db, ID, Saved, toSaved, RecordData } from '@/db'
import { Repository } from './types'

interface State {
  repo: Repository<Saved<Item>>
  ids: ID[]
}

export const createItemStore = () => {
  const state = reactive<State>({ repo: {}, ids: [] })
  const list = state.ids.map((id) => state.repo[id])

  function pushItem(item: Saved<Item>): void {
    state.repo[item.id] = item
    state.ids.push(item.id)
  }

  async function loadAll(): Promise<void> {
    const list = (await db.items.toArray()).map((v) => toSaved(new Item(v)))
    console.log(list)
    list.forEach((v) => { pushItem(v) })
  }

  const newEmptyRecords = (): Repository<RecordData> => Object.fromEntries(
    list.map((v) => [v.id, records.new(v)])
  )

  const getById = (id: ID) => state.repo[id]

  const methods = { loadAll, getById, newEmptyRecords }
  const getters = { list }
  return { ...methods, ...getters }
}

export type ItemStore = ReturnType<typeof createItemStore>
