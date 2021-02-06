import { db, Item } from './db'

export { Item } from './db'

export async function prepare(): Promise<void> {
  if (!(await Item.getMain())) {
    await Item.putDefaultMain()
  }
}

export async function clear(): Promise<void> {
  await Promise.all(db.tables.map(async (t) => t.clear()))
  await prepare()
}
