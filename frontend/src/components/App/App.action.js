import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const SET_API = 'SET_API'
export const setAPI = createAction(SET_API, (creator, user) => ({
  creator,
  user,
}))
export const dispatchSetApi = (...args) => dispatch(setAPI(...args))

export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA'
export const fetchInitialData = createAction(FETCH_INITIAL_DATA)
export const dispatchFetchInitialData = (...args) =>
  dispatch(fetchInitialData(...args))

export const SET_IS_LOADING = 'SET_IS_LOADING'
export const setIsLoading = createAction(SET_IS_LOADING)
export const dispatchSetIsLoading = (...args) => dispatch(setIsLoading(...args))

export const LOAD_USERS_DATA = 'LOAD_USERS_DATA'
export const loadUsersData = createAction(LOAD_USERS_DATA)
export const dispatchLoadUsersData = (...args) =>
  dispatch(loadUsersData(...args))

export const SET_IS_PARTICIPATED = 'SET_IS_PARTICIPATED'
export const setIsParticipated = createAction(SET_IS_PARTICIPATED)
export const dispatchSetIsParticipated = (...args) => dispatch(setIsParticipated(...args))

export const SET_IS_EXAM_READY = 'SET_IS_EXAM_READY'
export const setIsExamReady = createAction(SET_IS_EXAM_READY)
export const dispatchSetIsExamReady = (...args) => dispatch(setIsExamReady(...args))