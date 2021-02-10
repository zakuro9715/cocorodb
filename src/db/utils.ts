import { unwrap } from '@/utils'
export type ID = number
interface DBObject {
  id?: ID
}
export type Saved<T extends DBObject> = Omit<T, 'id'> & Required<Pick<T, 'id'>>
export const toSaved = <T extends DBObject>(v: T): Saved<T> => ({ ...v, id: unwrap(v.id) })
