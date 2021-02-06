import { db, items } from './db'

export { items } from './db'

export async function prepare(): Promise<void> {
  if (!(await items.getMain())) {
    await items.putDefaultMain()
  }
}

export async function clear(): Promise<void> {
  await Promise.all(db.tables.map(async (t) => t.clear()))
  await prepare()
}
