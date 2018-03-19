import { takeLatest, all, call, put } from 'redux-saga/effects'
import { FETCH_USERS, fetchUsersSuccessDucks } from '../ducks/users'
import { API_SERVER, postJSON, getJSON } from '../../tools/api'

export function* fetchUsers(action) {
  //console.log('hello')
  try {
    // console.log('1')
    const data = yield call(
      getJSON,
      `${API_SERVER}/cms/user?token=${action.token}&offset=${
        action.offset
      }&limit=${action.limit}`
    )
    yield put(fetchUsersSuccessDucks(data.data, data.dataLength))
  } catch (error) {
    console.log('error: ', error)
  }
}

export function* usersSagas() {
  yield all([takeLatest(FETCH_USERS, fetchUsers)])
}
