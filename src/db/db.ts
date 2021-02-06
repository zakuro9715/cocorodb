import Dexie from 'dexie'
import { Item, Record } from '@/objects'

export const items = {
  mainId: 0,
  mainName: 'main',
  mainPriority: 1000,
  async get(id :number): Promise<Item | undefined> {
    return await db.items.get(id)
  },
  async getAll(): Promise<Item[]> {
    return await db.items.toArray()
  },
  async put(item: Item): Promise<number> {
    return await db.items.put(item)
  },
  async getMain(): Promise<Item | undefined> {
    return await items.get(items.mainId)
  },
  async putDefaultMain(): Promise<number> {
    return await items.put({
      id: items.mainId,
      name: items.mainName,
      valueKind: 'integer',
      priority: items.mainPriority,
      min: 0,
      max: 100,
    })
  },
}

export class Database extends Dexie {
  items: Dexie.Table<Item, number>
  records: Dexie.Table<Record, number>

  constructor() {
    super('AppDatabase')
    this.version(1).stores({
      items: '++id, &priority, name, valueKind, min, max',
      records: '++id, itemId, text, value, min, max, &createdAt',
    })

    this.items = this.table<Item, number>('items')
    this.records = this.table<Record, number>('records')
  }
}

export const db = new Database()
