export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'

export const fetchUsersDucks = (token, offset, pageSize) => {
  return {
    type: FETCH_USERS,
    token: token,
    offset: offset,
    limit: pageSize,
  }
}

export const fetchUsersSuccessDucks = (data, dataLength) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: { data, dataLength },
  }
}

const initialState = {
  loading: false,
  error: {},
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USERS: {
      return {
        error: {},
        loading: false,
        data: action.payload,
      }
    }
    case FETCH_USERS_SUCCESS: {
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
