import { ID, Saved, ItemData, RecordData, RecordValueKind } from '@/db'

export class Item implements ItemData {
  public id: ID
  public priority: number
  public name: string
  public valueKind: RecordValueKind
  public min: number
  public max: number

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
  public id: ID
  public item: Saved<Item>
  public text: string
  public value: number
  public valueKind: RecordValueKind
  public min: number
  public max: number
  public createdAt: Date


  public get itemId() {
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
