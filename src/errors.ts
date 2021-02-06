/* eslint-disable no-alert, no-console */
export function handleFatalError(e: unknown): void {
  console.error(e)
  if (confirm('エラーが発生したため再起動します。')) {
    location.reload()
  }
}
