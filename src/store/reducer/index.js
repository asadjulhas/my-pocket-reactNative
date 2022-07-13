import { combineReducers } from "redux"

import transactionReducer from './Transctions'

export default combineReducers({
  transactions: transactionReducer,
})