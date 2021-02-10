import Dexie from 'dexie'
import { ItemData, RecordData } from './data'

export class Database extends Dexie {
  items: Dexie.Table<ItemData, number>
  records: Dexie.Table<RecordData, number>

  constructor() {
    super('AppDatabase')
    this.version(1).stores({
      items: '++id, &priority, name, valueKind, min, max',
      records: '++id, itemId, text, value, valueKind, min, max, &createdAt',
    })

    this.items = this.table<ItemData, number>('items')
    this.records = this.table<RecordData, number>('records')
  }
}

export const db = new Database()
