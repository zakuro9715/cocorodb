export type RecordValueKind = 'number'

export interface Item {
  id?: number
  priority: number
  name: string
  valueKind: RecordValueKind
  min: number
  max: number
}

export interface Record {
  id?: number
  itemId: number
  text: string
  value: number
  min: number
  max: number
  createdAt: Date
}
