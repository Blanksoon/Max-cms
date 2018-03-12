export const FETCH_VODS = 'FETCH_VODS'
export const FETCH_VODS_SUCCESS = 'FETCH_MAXNEWS_SUCCESS'

export const fetchVodsDucks = token => {
  return {
    type: FETCH_VODS,
    token: token,
  }
}

export const fetchVodsSuccessDucks = (data, dataLength) => {
  console.log(dataLength)
  return {
    type: FETCH_VODS_SUCCESS,
    payload: { data, dataLength },
  }
}

const initialState = {
  loading: false,
  error: {},
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_VODS: {
      return {
        error: {},
        loading: false,
        data: action.payload,
      }
    }
    case FETCH_VODS_SUCCESS: {
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
