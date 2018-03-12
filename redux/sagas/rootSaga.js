import { all } from 'redux-saga/effects'
import { authSagas } from './authSagas'
import { searchSagas } from './searchSagas'
import { newsSagas } from './newsSagas'
import { vodsSagas } from './vodsSagas'
import { livesSagas } from './livesSagas'
import { cookieSagas } from './cookieSagas'

export function* rootSaga() {
  yield all([
    authSagas(),
    searchSagas(),
    newsSagas(),
    vodsSagas(),
    livesSagas(),
    cookieSagas(),
  ])
}
