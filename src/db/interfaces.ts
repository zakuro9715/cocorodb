export type ID = number

export type RecordValueKind = 'number'

export interface Item {
  id?: ID
  priority: number
  name: string
  valueKind: RecordValueKind
  min: number
  max: number
}

export interface Record {
  id?: ID
  itemId: number
  text: string
  value: number
  valueKind: RecordValueKind
  min: number
  max: number
  createdAt: Date
}
