import { combineReducers } from 'redux'
import authReducer from './auth'
import searchReducer from './search'
import newsReducer from './news'
import vodsReducer from './vods'
import usersReducer from './users'
import livesReducer from './lives'
import cookieReducer from './cookie'
import ordersReducer from './orders'

export const rootReducer = combineReducers({
  auth: authReducer,
  searchData: searchReducer,
  news: newsReducer,
  vods: vodsReducer,
  lives: livesReducer,
  users: usersReducer,
  cookie: cookieReducer,
  orders: ordersReducer,
})
export const defaultState = {}
