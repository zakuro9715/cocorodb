import Dexie from 'dexie'

export type RecordValueKind = 'integer' | 'decimal'

export interface Item {
  id?: number
  name: string
  valueKind: RecordValueKind
  min: number
  max: number
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
