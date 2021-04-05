import { SET_MODAL_VISIBILITY } from './actionTypes'

export const setModalVisibility = value => ({
  type: SET_MODAL_VISIBILITY,
  isVisible: value
})
