import { db, Item } from './db'

export { Item } from './db'

const MAIN_ITEM_ID = 0
const MAIN_ITEM_DEAFULT_NAME = 'main'

export async function getAllItems(): Promise<Item[]> {
  return await db.items.toArray()
}

export async function putItem(item: Item): Promise<number> {
  return await db.items.put(item)
}

export async function createMainItem(): Promise<number> {
  return await putItem({ id: MAIN_ITEM_ID, name: MAIN_ITEM_DEAFULT_NAME })
}

export async function getItem(id: number): Promise<Item | undefined> {
  return db.items.get(id)
}

export async function getMainItem(): Promise<Item | undefined>  {
  return getItem(MAIN_ITEM_ID)
}

export async function prepare(): Promise<void> {
  if (!(await getMainItem())) {
    await createMainItem()
  }
}

export async function clear(): Promise<void> {
  await Promise.all(db.tables.map(async (t) => t.clear()))
  await prepare()
}
