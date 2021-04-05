import { SET_MODAL_VISIBILITY, SET_MODAL_INFO } from '../actions/actionTypes'

const initialState = {
  isVisible: '',
  info: {
    title: '',
    description: '',
    duration: ''
  }
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY:
      return {
        ...state,
        isVisible: action.isVisible
      }
    case SET_MODAL_INFO:
      return {
        ...state,
        info: action.info
      }
    default:
      return state
  }
}
