import { db, Item } from './db'

const MAIN_ITEM_ID = 43708623
const MAIN_ITEM_NAME = 'main'

export async function createMainItem(): Item {
  return await db.table('items').put({ id: MAIN_ITEM_ID, name: MAIN_ITEM_NAME })
}

export async function getMainItem(): Item  {
  return await db.items.get({ id: MAIN_ITEM_ID })
}

export async function prepare(): void {
  if (!(await getMainItem())) {
    await createMainItem()
  }
}
