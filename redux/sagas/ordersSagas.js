import { takeLatest, all, call, put } from 'redux-saga/effects'
import { FETCH_ORDERS, fetchOrdersSuccessDucks } from '../ducks/orders'
import { API_SERVER, postJSON, getJSON } from '../../tools/api'

export function* fetchOrders(action) {
  //console.log('hello')
  try {
    const data = yield call(
      getJSON,
      `${API_SERVER}/cms/order?token=${action.token}&offset=${
        action.offset
      }&limit=${action.limit}`
    )
    yield put(fetchOrdersSuccessDucks(data.data, data.dataLength))
  } catch (error) {
    console.log('error: ', error)
  }
}

export function* ordersSagas() {
  yield all([takeLatest(FETCH_ORDERS, fetchOrders)])
}
