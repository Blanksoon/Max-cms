export const FETCH_VODS = 'FETCH_VODS'
export const FETCH_VODS_SUCCESS = 'FETCH_MAXNEWS_SUCCESS'
export const FETCH_ONE_VODS = 'FETCH_ONE_VODS'

export const fetchVodsDucks = (token, offset, pageSize) => {
  return {
    type: FETCH_VODS,
    token: token,
    offset: offset,
    limit: pageSize,
  }
}

export const fetchVodsSuccessDucks = (data, dataLength) => {
  return {
    type: FETCH_VODS_SUCCESS,
    payload: { data, dataLength },
  }
}

export const fetchOneVodsDucks = (token, id) => {
  return {
    type: FETCH_ONE_VODS,
    token: token,
    payload: { id },
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
    case FETCH_ONE_VODS: {
      return {
        error: {},
        loading: false,
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
