import { runSaga } from 'redux-saga'
import fetchMock from 'fetch-mock'
import { API_SERVER } from '../../../tools/api'
import { loginSaga } from '../../../redux/sagas/authSagas'
import { login, loginSuccess, loginFailure } from '../../../redux/ducks/auth'

describe('authSagas', () => {
  describe('loginSaga', () => {
    afterEach(() => {
      fetchMock.restore()
    })
    it('Dispatches LOGIN_SUCCESS with token and email on success', async () => {
      const dispatched = []
      fetchMock.post(
        (url, opts) => {
          const urlMatched = url === `${API_SERVER}/users/login`
          const expectedBody = { email: 'test@gmail.com', password: 't1234' }
          const bodyMatched = opts.body === JSON.stringify(expectedBody)
          return urlMatched && bodyMatched
        },
        {
          token: 'freedom1234',
          email: 'test@gmail.com',
        }
      )

      await runSaga(
        {
          dispatch: action => dispatched.push(action),
          getState: () => ({ loading: true, error: {} }),
        },
        loginSaga,
        login({ email: 'test@gmail.com', password: 't1234' })
      ).done
      expect(dispatched).toEqual([
        loginSuccess({ token: 'freedom1234', email: 'test@gmail.com' }),
      ])
    })
    it('Dispatches LOGIN_FAILURE with code and message on failure', async () => {
      const dispatched = []
      fetchMock.post(
        (url, opts) => {
          const urlMatched = url === `${API_SERVER}/users/login`
          const expectedBody = { email: 'test@gmail.com', password: 't1234' }
          const bodyMatched = opts.body === JSON.stringify(expectedBody)
          return urlMatched && bodyMatched
        },
        {
          status: 401,
          body: {
            code: 401,
            message: 'Incorrect username or password',
          },
        }
      )

      await runSaga(
        {
          dispatch: action => dispatched.push(action),
          getState: () => ({ loading: true, error: {} }),
        },
        loginSaga,
        login({ email: 'test@gmail.com', password: 't1234' })
      ).done
      expect(dispatched).toEqual([
        loginFailure({ code: 401, message: 'Incorrect username or password' }),
      ])
    })
  })
})
