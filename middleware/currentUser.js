export default async ({ store }) => {
  return await store.dispatch('auth/fetchCurrentUser')
}
