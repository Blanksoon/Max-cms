import Cookies from 'universal-cookie'
import { universalLoadAllCookies } from '../../tools/utils'

describe('Utils', () => {
  describe('universalLoadAllCookies', () => {
    afterEach(() => {
      const cookies = new Cookies()
      cookies.remove('key1')
      cookies.remove('key2')
    })
    describe('Called on browser', () => {
      it('Loads all cookies', () => {
        const cookies = new Cookies()
        cookies.set('key1', 'value1')
        cookies.set('key2', 'value2')
        expect(cookies.get('key1')).toEqual('value1')
        expect(cookies.get('key2')).toEqual('value2')
        const loadedCookies = universalLoadAllCookies({ isServer: false })
        expect(loadedCookies).toEqual({ key1: 'value1', key2: 'value2' })
      })
      it('Returns empty object if no cookies is available', () => {
        const loadedCookies = universalLoadAllCookies({ isServer: false })
        expect(loadedCookies).toEqual({})
      })
    })
    describe('Called on server', () => {
      it('Loads all cookies', () => {
        const cookies = new Cookies()
        cookies.set('key1', 'value1')
        cookies.set('key2', 'value2')
        expect(cookies.get('key1')).toEqual('value1')
        expect(cookies.get('key2')).toEqual('value2')
        const mockReq = {
          headers: {
            cookie: {
              key1: 'value1',
              key2: 'value2',
            },
          },
        }
        const loadedCookies = universalLoadAllCookies({
          req: mockReq,
          isServer: true,
        })
        expect(loadedCookies).toEqual({ key1: 'value1', key2: 'value2' })
      })
      it('Returns empty object if no cookies is available', () => {
        const mockReq = {
          headers: {},
        }
        const loadedCookies = universalLoadAllCookies({
          req: mockReq,
          isServer: true,
        })
        expect(loadedCookies).toEqual({})
      })
    })
  })
})
