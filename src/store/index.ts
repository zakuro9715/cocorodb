import { inject } from 'vue'
import { createItemStore, ItemStore } from './items'
import { createRecordStore, RecordStore } from './records'

export { createItemStore, ItemStore, createRecordStore, RecordStore }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createGlobalStore = () => {
  const itemStore = createItemStore()
  const recordStore = createRecordStore(itemStore)
  return { item: itemStore, record: recordStore }
}

export type GlobalStore = ReturnType<typeof createGlobalStore>

export const globalStoreKey = Symbol('GlobalStore')
export const useGlobalStore = (): GlobalStore => inject(globalStoreKey) as GlobalStore
export const useItemStore = (): ItemStore => useGlobalStore().item
export const useRecordStore = (): RecordStore => useGlobalStore().record
