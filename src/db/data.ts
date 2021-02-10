export type ID = number

export type RecordValueKind = 'number'

export interface ItemData {
  id?: ID
  priority: number
  name: string
  valueKind: RecordValueKind
  min: number
  max: number
}

export interface RecordData {
  id?: ID
  itemId: ID
  text: string
  value: number
  valueKind: RecordValueKind
  min: number
  max: number
  createdAt: Date
}
