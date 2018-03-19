export const FETCH_ORDERS = 'FETCH_ORDERS'
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'

export const fetchOrdersDucks = (token, offset, pageSize) => {
  return {
    type: FETCH_ORDERS,
    token: token,
    offset: offset,
    limit: pageSize,
  }
}

export const fetchOrdersSuccessDucks = (data, dataLength) => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    payload: { data, dataLength },
  }
}

const initialState = {
  loading: false,
  error: {},
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ORDERS: {
      return {
        error: {},
        loading: false,
        data: action.payload,
      }
    }
    case FETCH_ORDERS_SUCCESS: {
      return {
        error: {},
        loading: false,
        data: action.payload.data,
        lengthOfData: action.payload.dataLength,
      }
    }
    default: {
      return state
    }
  }
}
export default reducer
