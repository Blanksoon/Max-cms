import { combineReducers } from 'redux'
import authReducer from './auth'
import searchReducer from './search'

export const rootReducer = combineReducers({
  auth: authReducer,
  searchData: searchReducer
})
export const defaultState = {}
