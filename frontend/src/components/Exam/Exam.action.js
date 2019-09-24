import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const HANDLE_START_EXAM = 'HANDLE_START_EXAM'
export const handleStartExam = createAction(HANDLE_START_EXAM)
export const dispatchHandleStartExam = (...args) => dispatch(handleStartExam(...args))

export const CHANGE_QUESTION_INDEX = 'CHANGE_QUESTION_INDEX'
export const changeQuestionIndex = createAction(CHANGE_QUESTION_INDEX)
export const dispatchChangeQuestionIndex = (...args) => dispatch(changeQuestionIndex(...args))

export const DECREASE_DURATION = 'DECREASE_DURATION'
export const decreaseDuration = createAction(DECREASE_DURATION, number => ({ number }))
export const dispatchDecreaseDuration = (...args) => dispatch(decreaseDuration(...args))

export const HANDLE_DECREASE_DURATION = 'HANDLE_DECREASE_DURATION'
export const handleDecreaseDuration = createAction(HANDLE_DECREASE_DURATION)
export const dispatchHandleDecreaseDuration = (...args) => dispatch(handleDecreaseDuration(...args))