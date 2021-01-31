import Dexie from 'dexie'

interface Item {
  id?: number
  name: string
}

interface MainRecordValue {
  memo: string
  star: number
}
type RecordValue = number | MainRecordValue

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

    this.items = this.table('items')
    this.records = this.table('records')
  }
}

export const db = new Database()
