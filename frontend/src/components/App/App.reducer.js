import * as R from 'ramda'
import { getState } from '../../setup/redux'
import { SET_IS_PARTICIPATED, SET_IS_EXAM_READY } from './App.action'

const initialState = {
  isLoading: false,
  user: {},
  wis: (window.W && window.W.wisId) || '110',
  isParticipated: false,
  isExamReady: true,
  isExamStarted: true,
  isAdmin: false,
}

// const isParticipatedLens = R.lensProp('isParticipated')

export const isParticipatedView = () =>
  R.path(['App', 'isParticipated'])(getState())
export const isExamReadyView = () => R.path(['App', 'isExamReady'])(getState())
export const isExamStartedView = () =>
  R.path(['App', 'isExamStarted'])(getState())
export const isAdminView = () => R.path(['App', 'isAdmin'])(getState())

const reducer = {
  [SET_IS_PARTICIPATED]: (state, { isParticipated }) => ({
    ...state,
    isParticipated,
  }),

  [SET_IS_EXAM_READY]: (state, { isExamReady }) => ({
    ...state,
    isExamReady,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
