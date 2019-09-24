import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const START_EXAM = 'START_EXAM'
export const startExam = createAction(START_EXAM)
export const dispatchStartExam = (...args) => dispatch(startExam(...args))

export const HANDLE_START_EXAM = 'HANDLE_START_EXAM'
export const handleStartExam = createAction(HANDLE_START_EXAM)
export const dispatchHandleStartExam = (...args) => dispatch(handleStartExam(...args))

export const CHANGE_QUESTION_INDEX = 'CHANGE_QUESTION_INDEX'
export const changeQuestionIndex = createAction(CHANGE_QUESTION_INDEX, number => ({ number }))
export const dispatchChangeQuestionIndex = (...args) => dispatch(changeQuestionIndex(...args))

export const CHANGE_ANSWER_OPT = 'CHANGE_ANSWER_OPT'
export const changeAnswerOpt = createAction(CHANGE_ANSWER_OPT, (opt, index) => ({ opt, index }))
export const dispatchChangeAnswerOpt = (...args) => dispatch(changeAnswerOpt(...args))

export const DECREASE_DURATION = 'DECREASE_DURATION'
export const decreaseDuration = createAction(DECREASE_DURATION)
export const dispatchDecreaseDuration = (...args) => dispatch(decreaseDuration(...args))

export const HANDLE_DECREASE_DURATION = 'HANDLE_DECREASE_DURATION'
export const handleDecreaseDuration = createAction(HANDLE_DECREASE_DURATION)
export const dispatchHandleDecreaseDuration = (...args) => dispatch(handleDecreaseDuration(...args))