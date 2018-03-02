import { takeLatest, all, call, put } from 'redux-saga/effects'
import {
  FETCH_MAXNEWS,
  FETCH_MAXNEWS_SUCCESS,
  fetchMaxnewsSuccessDucks,
} from '../ducks/news'
import { API_SERVER, postJSON, getJSON } from '../../tools/api'
import fetchMock from 'fetch-mock'

export function* fetchMaxnews(action) {
  //console.log('hello')
  try {
    //console.log('1')
    const data = yield call(getJSON, `${API_SERVER}/cms/maxnews`)
    //console.log('3', data.dataLength)
    yield put(fetchMaxnewsSuccessDucks(data.data, data.dataLength))
  } catch (error) {
    console.log('error: ', error)
  }
}

export function* newsSagas() {
  yield all([takeLatest(FETCH_MAXNEWS, fetchMaxnews)])
}
