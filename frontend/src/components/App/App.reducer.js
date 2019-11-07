import * as R from 'ramda'
import { getState } from '../../setup/redux'
import {
  SET_API,
  SET_IS_PARTICIPATED,
  SET_IS_EXAM_READY,
  SET_IS_EXAM_STARTED,
  SET_IS_EXAM_FINISHED,
  SET_SCHOOL,
} from './App.action'

const initialState = {
  isLoading: false,
  user: {},
  wis: (window.W && window.W.wisId) || '5d8a554ddfc8d5055d9bafff',
  isParticipated: false,
  isExamReady: false,
  isExamStarted: false,
  isExamFinished: false,
  isAdmin: false,
  school: '',
}

// const isParticipatedLens = R.lensProp('isParticipated')

export const wisView = () => R.path(['App', 'wis'])(getState())
export const schoolView = () => R.path(['App', 'school'])(getState())
export const userView = () => R.path(['App', 'user'])(getState())
export const userIdView = () => R.path(['App', 'user', 'id'])(getState())
export const userNameView = () => R.path(['App', 'user', 'name'])(getState())
export const isParticipatedView = () =>
  R.path(['App', 'isParticipated'])(getState())
export const isExamReadyView = () => R.path(['App', 'isExamReady'])(getState())
export const isExamStartedView = () =>
  R.path(['App', 'isExamStarted'])(getState())
export const isExamFinishedView = () =>
  R.path(['App', 'isExamFinished'])(getState())
export const isAdminView = () => R.path(['App', 'isAdmin'])(getState())

const reducer = {
  [SET_API]: (state, { user, isAdmin }) => ({
    ...state,
    user,
    isAdmin,
  }),

  [SET_IS_PARTICIPATED]: (state, isParticipated) => ({
    ...state,
    isParticipated,
  }),

  [SET_IS_EXAM_READY]: (state, isExamReady) => ({
    ...state,
    isExamReady,
  }),

  [SET_IS_EXAM_STARTED]: (state, isExamStarted) => ({
    ...state,
    isExamStarted,
  }),

  [SET_IS_EXAM_FINISHED]: (state, isExamFinished) => ({
    ...state,
    isExamFinished,
  }),

  [SET_SCHOOL]: (state, school) => ({
    ...state,
    school,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
