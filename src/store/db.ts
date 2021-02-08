import Dexie from 'dexie'
import { Item, Record } from './interfaces'

export class Database extends Dexie {
  items: Dexie.Table<Item, number>
  records: Dexie.Table<Record, number>

  constructor() {
    super('AppDatabase')
    this.version(1).stores({
      items: '++id, &priority, name, valueKind, min, max',
      records: '++id, itemId, text, value, valueKind, min, max, &createdAt',
    })

    this.items = this.table<Item, number>('items')
    this.records = this.table<Record, number>('records')
  }
}

export const db = new Database()
