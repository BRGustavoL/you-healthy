import { modalReducer } from './modalReducer'
import { timerReducer } from './timerReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  modalState: modalReducer,
  timerState: timerReducer
})
