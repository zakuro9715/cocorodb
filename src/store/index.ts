import { inject } from 'vue'
import { createItemStore } from './items'
import { createRecordStore } from './records'

export { createItemStore, ItemStore } from './items'
export { createRecordStore, RecordStore } from './records'

export const createGlobalStore = () => {
  const itemStore = createItemStore()
  const recordStore = createRecordStore(itemStore)
  return { item: itemStore, record: recordStore }
}

export type GlobalStore = ReturnType<typeof createGlobalStore>

export const globalStoreKey = Symbol('GlobalStore')
export const useGlobalStore = () => inject(globalStoreKey) as GlobalStore
export const useItemStore = () => useGlobalStore().item
export const useRecordStore = () => useGlobalStore().record
