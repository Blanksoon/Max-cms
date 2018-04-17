export const FETCH_MAXNEWS = 'FETCH_MAXNEWS'
export const FETCH_MAXNEWS_SUCCESS = 'FETCH_MAXNEWS_SUCCESS'
export const FETCH_ONE_NEWS = 'FETCH_ONE_NEWS'

export const fetchMaxnewsDucks = (token, offset, pageSize) => {
  return {
    type: FETCH_MAXNEWS,
    token: token,
    offset: offset,
    limit: pageSize,
  }
}

export const fetchMaxnewsSuccessDucks = (data, dataLength) => {
  //console.log(dataLength)
  return {
    type: FETCH_MAXNEWS_SUCCESS,
    payload: { data, dataLength },
  }
}

export const fetchOneNewsDucks = (token, id) => {
  console.log('token: ', token)
  console.log('id: ', id)
  return {
    type: FETCH_ONE_NEWS,
    token: token,
    id: id,
  }
}

const initialState = {
  loading: false,
  error: {},
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MAXNEWS: {
      console.log('data: ', action.payload)
      return {
        error: {},
        loading: false,
        data: action.payload,
      }
    }
    case FETCH_ONE_NEWS: {
      console.log('action', action)
      return {
        error: {},
        loading: false,
      }
    }
    case FETCH_MAXNEWS_SUCCESS: {
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
