import { reactive } from 'vue'
import { Record } from '@/models'
import { db, ID, Saved, toSaved, RecordData } from '@/db'

import { ItemStore } from './items'
import { Repository } from './types'

interface State {
  repo: Repository<Record>
  ids: ID[]
}

export const createRecordStore = (itemStore: ItemStore) => {
  const state = reactive<State>({ repo: {}, ids: []})
  const list = state.ids.map((id) => state.repo[id])

  function pushRecord(v: Saved<Record>): void {
    state.repo[v.id] = v
    state.ids.push(v.id)
  }


  const newRecord = (v: RecordData) => new Record({ ...v, item: itemStore.getById(v.itemId) })
  async function loadAll(): Promise<void> {
    const list = (await db.records.toArray()).map((v) => toSaved(newRecord(v)))
    list.forEach((v) => { pushRecord(v) })
  }
  async function put(data: RecordData): Promise<Record> {
    const id = await db.records.put(data)
    const record = newRecord({ ...data, id })
    return record
  }

  const actions = { loadAll, put }
  const getters = { list }
  return { ...actions, ...getters }
}

export type RecordStore = ReturnType<typeof createRecordStore>
