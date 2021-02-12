import { ID, Saved, toSaved, ItemData, RecordData, RecordValueKind } from '@/db'

export class Item implements ItemData {
  id?: ID
  priority: number
  name: string
  valueKind: RecordValueKind
  min: number
  max: number

  constructor(v: ItemData) {
    this.id = v.id
    this.priority = v.priority
    this.name = v.name
    this.valueKind = v.valueKind
    this.min = v.min
    this.max = v.max
  }

  newRecord(): Record {
    return new Record({
      item: toSaved<Item>(this),
      valueKind: this.valueKind,
      min: this.min,
      max: this.max,
      createdAt: new Date(),
      value: 0,
      text: '',
    })
  }
}

export class Record implements RecordData {
  id?: ID
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

  constructor(v: Omit<RecordData, 'itemId'> & { item: Saved<Item> }) {
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
