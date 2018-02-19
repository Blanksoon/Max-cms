import fetchMock from 'fetch-mock'
import { takeLatest, all, call, put } from 'redux-saga/effects'
import { SEARCH, searchSuccess, searchFailure } from '../ducks/search'
import { API_SERVER, postJSON } from '../../tools/api'

export function* searchDataSaga(action) {
  if (process.env.NODE_ENV !== 'test') {
    console.log('action',action)
    fetchMock.restore()
    const { data } = action.payload
    if (data === 'อารยา') {
      fetchMock.post(`${API_SERVER}/applications/search`,{
        body: {
          code: 200,
          pagination: {
            totalRecord: 2,
            pageSize: 10,
            defaultCurrent: 1,
          },
          data: [
            {
              app_id: 56,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            },
            {
              app_id: 57,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            }
          ]
        }
      })
    } else if(data === "test") {
      console.log('false123445234523452345')
      fetchMock.post(`${API_SERVER}/applications/search`,{
        body: {
          code: 200,
          pagination: {
            totalRecord: 12,
            pageSize: 10,
            defaultCurrent: 1,
          },
          data: [
            {
              app_id: 56,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            },
            {
              app_id: 57,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            },
            {
              app_id: 58,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            },
            {
              app_id: 59,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            },
            {
              app_id: 60,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            },
            {
              app_id: 61,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            },
            {
              app_id: 62,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            },
            {
              app_id: 63,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            },
            {
              app_id: 64,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            },
            {
              app_id: 65,
              first_name: `อารยา`,
              last_name: `รุ่งชัยวัฒนกุล`,
              credit_name: `MT0`,
              moneyLimit: 5000,
              status: `อนุมัติแล้ว`,
              create_date: `26-12-2560`,
              code: `MT`
            }
          ]
        }
      })
    } else {
      fetchMock.post(`${API_SERVER}/applications/search`,{
        status: 404,
        body: {
          code: 404,
          pagination: {
            totalRecord: 0,
            pageSize: 10,
            defaultCurrent: 1,
          },
          message: 'Data Not Found'
        }
      })
    }
  }
  try {
    const { code, pagination, data } = yield call(
      postJSON,
      `${API_SERVER}/applications/search`,
      action.payload
    )
    yield put(searchSuccess({ code, pagination, data }))
  } catch (error) {
    const { code, pagination, message } = error
    yield put(searchFailure({ code, pagination, message }))
  }
}

export function* searchSagas() {
  yield all([takeLatest(SEARCH, searchDataSaga)])
}