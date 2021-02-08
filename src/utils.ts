export function unwrap<T>(v :T | undefined): T
export function unwrap<T>(v :Promise<T | undefined>): Promise<T>
export function unwrap<T>(v :T | undefined | Promise<T | undefined>): any {
  if (v instanceof Promise) {
    return new Promise((resolve, reject) => {
      v.then((res) => {
        try {
          resolve(unwrap(res))
        } catch (e) {
          reject(e)
        }
      })
    })
  }
  if (v === undefined) {
    throw Error('fatal error: undefined')
  }
  return v
}

export type Option<T> = T | undefined
