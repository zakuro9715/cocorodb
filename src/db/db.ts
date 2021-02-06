import Dexie from 'dexie'

export type RecordValueKind = 'integer' | 'decimal'

export interface ItemObject {
  id?: number
  name: string
  valueKind: RecordValueKind
  min: number
  max: number
}

export class Item implements ItemObject {
  static mainId = 0
  static mainName = 'main'
  constructor(
    public name: string,
    public valueKind: RecordValueKind,
    public min: number,
    public max: number,
    public id?: number,
  ) { }

  static async get(id :number): Promise<Item | undefined> {
    return await db.items.get(id)
  }

  static async getAll(): Promise<Item[]> {
    return await db.items.toArray()
  }

  static async put(item: ItemObject): Promise<number> {
    return await db.items.put(item)
  }

  static async getMain(): Promise<Item | undefined> {
    return await Item.get(Item.mainId)
  }

  static async putDefaultMain(): Promise<number> {
    return await Item.put({
      id: Item.mainId,
      name: Item.mainName,
      valueKind: 'integer',
      min: 0,
      max: 100,
    })
  }
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
  items: Dexie.Table<ItemObject, number>
  records: Dexie.Table<Record, number>

  constructor() {
    super('AppDatabase')
    this.version(1).stores({
      items: '++id, name',
      records: '++id, value, timestamp, itemId',
    })

    this.items = this.table<ItemObject, number>('items')
    this.items.mapToClass(Item)
    this.records = this.table<Record, number>('records')
  }
}

export const db = new Database()
