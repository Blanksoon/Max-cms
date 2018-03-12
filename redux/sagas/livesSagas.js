import { takeLatest, all, call, put } from 'redux-saga/effects'
import { FETCH_LIVES, fetchLivesSuccessDucks } from '../ducks/lives'
import { API_SERVER, postJSON, getJSON } from '../../tools/api'

export function* fetchLives(action) {
  //console.log('hello')
  try {
    // console.log('1')
    const data = yield call(
      getJSON,
      `${API_SERVER}/cms/lives?token=${action.token}`
    )
    //console.log('3', data.dataLength)
    yield put(fetchLivesSuccessDucks(data.data, data.dataLength))
  } catch (error) {
    console.log('error: ', error)
  }
}

export function* livesSagas() {
  yield all([takeLatest(FETCH_LIVES, fetchLives)])
}
