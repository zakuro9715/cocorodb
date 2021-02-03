import { db } from './db'

const MAIN_ITEM_ID = 43708623
const MAIN_ITEM_DEAFULT_NAME = 'main'

export async function createMainItem(): Item {
  return await db.table('items').put({ id: MAIN_ITEM_ID, name: MAIN_ITEM_DEAFULT_NAME })
}

export async function getMainItem(): Item  {
  return await db.items.get({ id: MAIN_ITEM_ID })
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
