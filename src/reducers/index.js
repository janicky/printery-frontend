import { combineReducers } from 'redux'
import { user } from './user'
import { users } from './users'
import { companies } from './companies'
import { orders } from './orders'

export default combineReducers({
  user, users, companies, orders
})