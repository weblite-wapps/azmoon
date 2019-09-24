import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const SET_INITIAL_INFO = 'SET_INITIAL_INFO'
export const setInitialInfo = createAction(SET_INITIAL_INFO)
export const dispatchSetInitialInfo = args => dispatch(setInitialInfo(args))

export const CHANGE_QUESTION_PAGE = 'CHANGE_QUESTION_PAGE`'
export const changeQuestionPage = createAction(CHANGE_QUESTION_PAGE)
export const dispatchChangeQuestionPage = args =>
  dispatch(changeQuestionPage(args))

export const INSERT_QUESTION_DATA = 'INSERT_QUESTION_DATA`'
export const insertQuestionData = createAction(INSERT_QUESTION_DATA)
export const dispatchInsertQuestionData = args =>
  dispatch(insertQuestionData(args))
