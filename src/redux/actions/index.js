import { SET_MODAL_VISIBILITY, SET_MODAL_INFO, SET_TIMER } from './actionTypes'

export const setModalVisibility = value => ({
  type: SET_MODAL_VISIBILITY,
  isVisible: value
})

export const setModalInfo = value => ({
  type: SET_MODAL_INFO,
  info: value
})

export const setTimer = value => ({
  type: SET_TIMER,
  exercise: value
})
