export const LOGIN = 'ittp-frontend/auth/LOGIN'
const LOGIN_SUCCESS = 'ittp-frontend/auth/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'ittp-frontend/auth/LOGIN_FAILURE'

export const login = ({ email, password }) => ({
  type: LOGIN,
  payload: { email, password },
})
export const loginSuccess = ({ token, email }) => ({
  type: LOGIN_SUCCESS,
  payload: { token, email },
})
export const loginFailure = ({ code, message }) => ({
  type: LOGIN_FAILURE,
  payload: { code, message },
})

const initialState = {
  loading: false,
  error: {},
}
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        error: {},
        loading: false,
        token: action.payload.token,
        email: action.payload.email,
      }
    }
    case LOGIN_FAILURE: {
      return {
        loading: false,
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
