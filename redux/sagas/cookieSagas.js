import { all, takeLatest, put } from 'redux-saga/effects'
import Cookies from 'universal-cookie'
import {
  SET_COOKIE,
  REMOVE_COOKIE,
  setCookieSuccess,
  removeCookieSuccess,
} from '../ducks/cookie'

export function* setCookieSaga(action) {
  const { key, value } = action.payload
  const cookies = new Cookies()
  cookies.set(key, value)
  yield put(setCookieSuccess({ key, value }))
}

export function* removeCookieSaga(action) {
  const { key } = action.payload
  const cookies = new Cookies()
  cookies.remove(key)
  yield put(removeCookieSuccess({ key }))
}

export function* cookieSagas() {
  yield all([
    takeLatest(SET_COOKIE, setCookieSaga),
    takeLatest(REMOVE_COOKIE, removeCookieSaga),
  ])
}
