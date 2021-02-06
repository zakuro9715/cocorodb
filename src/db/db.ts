import Dexie from 'dexie'

export type RecordValueKind = 'integer' | 'decimal'

export interface Item {
  id?: number
  name: string
  valueKind: RecordValueKind
  min: number
  max: number
}

export const items = {
  mainId: 0,
  mainName: 'main',
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
      min: 0,
      max: 100,
    })
  },
}

export interface RecordValue {
  text?: string
  value: number
  min: number
  max: number
}

interface Record {
  id?: number
  itemId: number
  value: RecordValue
  timestamp: Date
}

export class Database extends Dexie {
  items: Dexie.Table<Item, number>
  records: Dexie.Table<Record, number>

  constructor() {
    super('AppDatabase')
    this.version(1).stores({
      items: '++id, name',
      records: '++id, value, timestamp, itemId',
    })

    this.items = this.table<Item, number>('items')
    this.records = this.table<Record, number>('records')
  }
}

export const db = new Database()
