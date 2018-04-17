import { takeLatest, all, call, put } from 'redux-saga/effects'
import { FETCH_VODS, fetchVodsSuccessDucks } from '../ducks/vods'
import { API_SERVER, postJSON, getJSON } from '../../tools/api'

export function* fetchVods(action) {
  //console.log('hello')
  try {
    // console.log('1')
    const data = yield call(
      getJSON,
      `${API_SERVER}/cms/vods?token=${action.token}&offset=${
        action.offset
      }&limit=${action.limit}`
    )
    //console.log('3', data.dataLength)
    yield put(fetchVodsSuccessDucks(data.data, data.dataLength))
  } catch (error) {
    console.log('error: ', error)
  }
}

export function* fetchOneVods(action) {
  console.log('action: ', action)
  try {
    const data = yield call(
      getJSON,
      `${API_SERVER}/cms/maxnews/${action.id}?token=${action.token}`
    )
  } catch (error) {
    console.log('error: ', error)
  }
}

export function* vodsSagas() {
  yield all([takeLatest(FETCH_VODS, fetchVods)])
}
