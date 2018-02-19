import { runSaga } from 'redux-saga'
import Cookies from 'universal-cookie'
import {
  setCookieSaga,
  removeCookieSaga,
} from '../../../redux/sagas/cookieSagas'
import {
  setCookie,
  setCookieSuccess,
  removeCookie,
  removeCookieSuccess,
} from '../../../redux/ducks/cookie'

describe('cookieSagas', () => {
  describe('setCookieSaga', async () => {
    it('Set cookie and dispatches setCookieSuccess with set key and value', async () => {
      const dispatched = []
      const cookies = new Cookies()
      cookies.remove('key1')
      expect(cookies.get('key1')).toBeUndefined()
      await runSaga(
        {
          dispatch: action => dispatched.push(action),
          getState: () => ({}),
        },
        setCookieSaga,
        setCookie({ key: 'key1', value: 'value1' })
      ).done
      expect(dispatched).toEqual([
        setCookieSuccess({ key: 'key1', value: 'value1' }),
      ])
      // Should not be able to read cookie using js
      expect(cookies.get('key1')).toEqual('value1')
    })
  })
  describe('removeCookieSaga', async () => {
    it('Removes cookie and dispatch removeCookieSuccess with removed key', async () => {
      const dispatched = []
      const cookies = new Cookies()
      cookies.set('key1', 'value1')
      expect(cookies.get('key1')).toEqual('value1')
      await runSaga(
        {
          dispatch: action => dispatched.push(action),
          getState: () => ({}),
        },
        removeCookieSaga,
        removeCookie({ key: 'key1' })
      ).done
      expect(dispatched).toEqual([removeCookieSuccess({ key: 'key1' })])
      expect(cookies.get('key1')).toBeUndefined()
    })
  })
})
