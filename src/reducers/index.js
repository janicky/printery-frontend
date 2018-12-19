import { combineReducers } from 'redux'
import { user } from './user'
import { users } from './users'
import { companies } from './companies'

export default combineReducers({
  user, users, companies
})