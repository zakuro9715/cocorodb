/* eslint-disable no-alert, no-console */
export function handleFatalError(e: unknown): void {
  console.error(e)
  if (process.env.NODE_ENV === 'production') {
    if (confirm('エラーが発生したため再起動します。')) {
      location.reload()
    }
  }
}
