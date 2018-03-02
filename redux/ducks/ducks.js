import { combineReducers } from 'redux'
import authReducer from './auth'
import searchReducer from './search'
import newsReducer from './news'
import vodsReducer from './vods'
import livesReducer from './lives'

export const rootReducer = combineReducers({
  auth: authReducer,
  searchData: searchReducer,
  news: newsReducer,
  vods: vodsReducer,
  lives: livesReducer,
})
export const defaultState = {}
