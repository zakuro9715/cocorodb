export type RecordValueKind = 'integer' | 'decimal'

export interface Item {
  id?: number
  name: string
  valueKind: RecordValueKind
  min: number
  max: number
}

export interface RecordValue {
  text?: string
  value: number
  min: number
  max: number
}

export interface Record {
  id?: number
  itemId: number
  value: RecordValue
  timestamp: Date
}
