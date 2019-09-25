import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const SET_EXAM_INFO = 'SET_EXAM_INFO'
export const setExamInfo = createAction(SET_EXAM_INFO)
export const dispatchSetExamInfo = (...args) =>
  dispatch(setExamInfo(...args))


// effects
export const EFFECT_OPEN_EXAM = 'EFFECT_OPEN_EXAM'
export const effectOpenExam = createAction(EFFECT_OPEN_EXAM)
export const dispatchEffectOpenExam = (...args) =>
  dispatch(effectOpenExam(...args))

export const EFFECT_CLOSE_EXAM = 'EFFECT_CLOSE_EXAM'
export const effectCloseExam = createAction(EFFECT_CLOSE_EXAM)
export const dispatchEffectCloseExam = (...args) =>
  dispatch(effectCloseExam(...args))