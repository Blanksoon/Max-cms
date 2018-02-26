export const SEARCH = 'ittp-frontend/search/SEARCH'
const SEARCH_SUCCESS = 'ittp-frontend/search/SEARCH_SUCCESS'
const SEARCH_FAILURE = 'ittp-frontend/search/SEARCH_FAILURE'

export const searchData = ({ data }) => {
  return {
    type: SEARCH,
    payload: { data },
  }
}
export const searchSuccess = ({ code, pagination, data }) => ({
  type: SEARCH_SUCCESS,
  payload: { code, pagination, data },
})
export const searchFailure = ({ code, message }) => ({
  type: SEARCH_FAILURE,
  payload: { code, message },
})

const initialState = {
  error: {},
  pagination: {
    totalRecord: 0,
    pageSize: 10,
    defaultCurrent: 1,
  },
  data: [],
}
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
      }
    }
    case SEARCH_SUCCESS: {
      //console.log(action.payload)
      return {
        error: {},
        code: action.payload.code,
        pagination: action.payload.pagination,
        data: action.payload.data,
      }
    }
    case SEARCH_FAILURE: {
      return {
        error: {
          code: action.payload.code,
          message: action.payload.message,
        },
      }
    }
    default:
      return state
  }
}

export default reducer
