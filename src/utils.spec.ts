import { unwrap } from './utils'

describe('unwrap', () => {
  describe('T', () => {
    it('returns value for not undefined', () => {
      expect(unwrap('a')).toBe('a')
    })

    it('throw error for undefined', () => {
      expect(() => { unwrap(undefined) }).toThrow()
    })
  })

  describe('Promise', () => {
    it('returns promise for not undefined', () => {
      expect(unwrap(new Promise((f) => { f('a') }))).resolves.toBe('a')
    })

    it('reject for undefined', () => {
      expect(unwrap(new Promise((f) => { f(undefined) }))).rejects.toBeInstanceOf(Error)
    })
  })
})
