import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const START_EXAM = 'START_EXAM'
export const startExam = createAction(START_EXAM)
export const dispatchStartExam = (...args) => dispatch(startExam(...args))

export const HANDLE_START_EXAM = 'HANDLE_START_EXAM'
export const handleStartExam = createAction(HANDLE_START_EXAM)
export const dispatchHandleStartExam = (...args) =>
  dispatch(handleStartExam(...args))

export const CHANGE_QUESTION_INDEX = 'CHANGE_QUESTION_INDEX'
export const changeQuestionIndex = createAction(
  CHANGE_QUESTION_INDEX,
  number => ({ number }),
)
export const dispatchChangeQuestionIndex = (...args) =>
  dispatch(changeQuestionIndex(...args))

export const CHANGE_ANSWER_OPT = 'CHANGE_ANSWER_OPT'
export const changeAnswerOpt = createAction(
  CHANGE_ANSWER_OPT,
  (opt, index) => ({ opt, index }),
)
export const dispatchChangeAnswerOpt = (...args) =>
  dispatch(changeAnswerOpt(...args))

export const HANDLE_CHANGE_ANSWER_OPT = 'HANDLE_CHANGE_ANSWER_OPT'
export const handleChangeAnswerOpt = createAction(
  HANDLE_CHANGE_ANSWER_OPT,
  opt => ({ opt }),
)
export const dispatchHandleChangeAnswerOpt = (...args) =>
  dispatch(handleChangeAnswerOpt(...args))

export const CHANGE_DURATION = 'CHANGE_DURATION'
export const changeDuration = createAction(CHANGE_DURATION)
export const dispatchChangeDuration = (...args) =>
  dispatch(changeDuration(...args))

export const HANDLE_CHANGE_DURATION = 'HANDLE_CHANGE_DURATION'
export const handlechangeDuration = createAction(HANDLE_CHANGE_DURATION)
export const dispatchHandleChangeDuration = (...args) =>
  dispatch(handlechangeDuration(...args))

export const SET_USER_START_TIME = 'SET_USER_START_TIME'
export const handleUserStartTime = createAction(SET_USER_START_TIME)
export const dispatchHandleUserStartTime = (...args) =>
  dispatch(handleUserStartTime(...args))
