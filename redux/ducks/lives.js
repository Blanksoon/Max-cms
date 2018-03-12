export const FETCH_LIVES = 'FETCH_LIVES'
export const FETCH_LIVES_SUCCESS = 'FETCH_LIVES_SUCCESS'

export const fetchLivesDucks = token => {
  return {
    type: FETCH_LIVES,
    token: token,
  }
}

export const fetchLivesSuccessDucks = (data, dataLength) => {
  console.log(dataLength)
  return {
    type: FETCH_LIVES_SUCCESS,
    payload: { data, dataLength },
  }
}

const initialState = {
  loading: false,
  error: {},
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LIVES: {
      return {
        error: {},
        loading: false,
        data: action.payload,
      }
    }
    case FETCH_LIVES_SUCCESS: {
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
