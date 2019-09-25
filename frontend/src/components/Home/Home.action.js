import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const SET_EXAM_INFO = 'SET_EXAM_INFO'
export const setExamInfo = createAction(SET_EXAM_INFO)
export const dispatchSetExamInfo = (...args) =>
  dispatch(setExamInfo(...args))


// effects
export const EFFECT_EDIT_EXAM = 'EFFECT_EDIT_EXAM'
export const effectEditExam = createAction(EFFECT_EDIT_EXAM)
export const dispatchEffectEditExam = (...args) =>
  dispatch(effectEditExam(...args))

export const EFFECT_OPEN_EXAM = 'EFFECT_OPEN_EXAM'
export const effectOpenExam = createAction(EFFECT_OPEN_EXAM)
export const dispatchEffectOpenExam = (...args) =>
  dispatch(effectOpenExam(...args))

export const EFFECT_CLOSE_EXAM = 'EFFECT_CLOSE_EXAM'
export const effectCloseExam = createAction(EFFECT_CLOSE_EXAM)
export const dispatchEffectCloseExam = (...args) =>
  dispatch(effectCloseExam(...args))

export const EFFECT_START_EXAM = 'EFFECT_START_EXAM'
export const effectStartExam = createAction(EFFECT_START_EXAM)
export const dispatchEffectStartExam = (...args) =>
  dispatch(effectStartExam(...args))

export const EFFECT_SHOW_RESULTS = 'EFFECT_SHOW_RESULTS'
export const effectShowResults = createAction(EFFECT_SHOW_RESULTS)
export const dispatchEffectShowResults = (...args) =>
  dispatch(effectShowResults(...args))

export const EFFECT_SHOW_ANSWER_SHEET = 'EFFECT_SHOW_ANSWER_SHEET'
export const effectShowAnswerSheet = createAction(EFFECT_SHOW_ANSWER_SHEET)
export const dispatchEffectShowAnswerSheet = (...args) =>
  dispatch(effectShowAnswerSheet(...args))