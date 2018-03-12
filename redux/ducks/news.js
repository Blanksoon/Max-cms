export const FETCH_MAXNEWS = 'FETCH_MAXNEWS'
export const FETCH_MAXNEWS_SUCCESS = 'FETCH_MAXNEWS_SUCCESS'

export const fetchMaxnewsDucks = token => {
  return {
    type: FETCH_MAXNEWS,
    token: token,
  }
}

export const fetchMaxnewsSuccessDucks = (data, dataLength) => {
  //console.log(dataLength)
  return {
    type: FETCH_MAXNEWS_SUCCESS,
    payload: { data, dataLength },
  }
}

const initialState = {
  loading: false,
  error: {},
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MAXNEWS: {
      return {
        error: {},
        loading: false,
        data: action.payload,
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
