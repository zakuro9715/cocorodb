export default async ({ store, route, redirect }) => {
  await store.dispatch('auth/fetchCurrentUser')

  const loggedIn = store.getters['auth/loggedIn']
  const anonymousPage = route.meta.some((m) => m.anonymous)

  if (anonymousPage && loggedIn) {
    redirect('/')
  }
  if (!anonymousPage && !loggedIn) {
    redirect('/login')
  }
}
