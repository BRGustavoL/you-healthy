import { SET_MODAL_VISIBILITY } from '../actions/actionTypes'

const initialState = {
  isVisible: ''
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY:
      return {
        ...state,
        isVisible: action.isVisible
      }
    default:
      return state
  }
}
