import { ID, Saved, ItemData, RecordData, RecordValueKind } from '@/db'

export class Item implements ItemData {
  id: ID
  priority: number
  name: string
  valueKind: RecordValueKind
  min: number
  max: number

  constructor(v: Saved<ItemData>) {
    this.id = v.id
    this.priority = v.priority
    this.name = v.name
    this.valueKind = v.valueKind
    this.min = v.min
    this.max = v.max
  }
}

export class Record implements RecordData {
  id: ID
  item: Saved<Item>
  text: string
  value: number
  valueKind: RecordValueKind
  min: number
  max: number
  createdAt: Date


  get itemId() {
    return this.item.id
  }

  constructor(v: Saved<Omit<RecordData, 'itemId'> & { item: Item }>) {
    this.id = v.id
    this.item = v.item
    this.text = v.text
    this.value = v.value
    this.valueKind = v.valueKind
    this.min = v.min
    this.max = v.max
    this.createdAt = v.createdAt
  }
}
