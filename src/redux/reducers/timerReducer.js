import { SET_TIMER } from '../actions/actionTypes'

const initialState = {
  exercise: {
    name: '',
    duration: 0
  }
}

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMER:
      return {
        ...state,
        exercise: action.exercise
      }
    default:
      return state
  }
}
