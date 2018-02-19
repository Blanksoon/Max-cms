import fetchMock from 'fetch-mock' // eslint-disable-line import/no-extraneous-dependencies
import { takeLatest, all, call, put } from 'redux-saga/effects'
import { LOGIN, loginSuccess, loginFailure } from '../ducks/auth'
import { API_SERVER, postJSON } from '../../tools/api'

export function* loginSaga(action) {
  if (process.env.NODE_ENV !== 'test') {
    fetchMock.restore()
    const { email } = action.payload
    if (email === 'topscores@gmail.com') {
      fetchMock.post(`${API_SERVER}/users/login`, {
        body: {
          token: 'aabbcc',
          email: 'topscores@gmail.com',
        },
      })
    } else {
      fetchMock.post(`${API_SERVER}/users/login`, {
        status: 401,
        body: {
          code: 401,
          message: 'Invalid username or password',
        },
      })
    }
  }
  try {
    const { token, email } = yield call(
      postJSON,
      `${API_SERVER}/users/login`,
      action.payload
    )
    yield put(loginSuccess({ token, email }))
  } catch (error) {
    const { code, message } = error
    yield put(loginFailure({ code, message }))
  }
}
export function* authSagas() {
  yield all([takeLatest(LOGIN, loginSaga)])
}
