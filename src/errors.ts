export function handleFatalError(e: any) {
  console.error(e)
  if (confirm('エラーが発生したため再起動します。')) {
    location.reload()
  }
}
