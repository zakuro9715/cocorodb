import { db } from './db'
import { ID, Item, Record } from './interfaces'
import { Option, unwrap } from '@/utils'

export { db } from './db'
export * from './interfaces'

export async function prepare(): Promise<void> {
  if (!(await items.getMain())) {
    await items.putDefaultMain()
  }
}

export async function clear(): Promise<void> {
  await Promise.all(db.tables.map(async (t) => t.clear()))
  await prepare()
}

export const items = {
  mainId: 0,
  mainName: 'main',
  mainPriority: 1000,

  get: async (id :number): Promise<Option<Item>> => await db.items.get(id),
  getAll: async (): Promise<Item[]> => await db.items.toArray(),
  put: async (item: Item): Promise<ID> => await db.items.put(item),
  getMain: async (): Promise<Option<Item>> => await items.get(items.mainId),
  putDefaultMain: async (): Promise<ID> => items.put({
    id: items.mainId,
    name: items.mainName,
    valueKind: 'number',
    priority: items.mainPriority,
    min: 0,
    max: 100,
  }),
}

export const records = {
  new: ({ id, min, max, valueKind }: Item): Record => ({
    min, max, valueKind,
    itemId: unwrap(id),
    createdAt: new Date(),
    value: 0,
    text: '',
  }),
  put: async (record: Record): Promise<ID> => await db.records.put(record),
}
