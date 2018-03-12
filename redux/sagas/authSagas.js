import fetchMock from 'fetch-mock' // eslint-disable-line import/no-extraneous-dependencies
import { takeLatest, all, call, put } from 'redux-saga/effects'
import { LOGIN, loginSuccess, loginFailure, LOGOUT } from '../ducks/auth'
import { setCookie, removeCookie } from '../ducks/cookie'
import { API_SERVER, postJSON } from '../../tools/api'
import { redirect } from '../../tools/utils'

export function* loginSaga(action) {
  //console.log(action.payload)
  const { email } = action.payload
  try {
    const { token, email } = yield call(
      postJSON,
      `${API_SERVER}/users/login`,
      action.payload
    )
    yield put(setCookie({ key: 'token', value: token }))
    yield put(setCookie({ key: 'email', value: email }))
    yield put(loginSuccess({ token, email }))
    redirect('/maxnews')
  } catch (error) {
    const { code, message } = error
    yield put(loginFailure({ code, message }))
  }
}
export function* logoutSaga() {
  yield put(removeCookie({ key: 'token' }))
  yield put(removeCookie({ key: 'email' }))
  yield put(removeCookie({ key: 'permissions' }))
  redirect('/login')
}
export function* authSagas() {
  yield all([takeLatest(LOGIN, loginSaga), takeLatest(LOGOUT, logoutSaga)])
}
