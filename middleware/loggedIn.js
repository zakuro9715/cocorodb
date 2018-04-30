export default async ({ store, redirect }) => {
  if (!store.getters['auth/loggedIn']) {
    redirect('/login')
  }
}
