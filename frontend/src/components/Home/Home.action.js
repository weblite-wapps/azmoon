import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const SET_HOME_INFO = 'SET_HOME_INFO'
export const setHomeInfo = createAction(SET_HOME_INFO)
export const dispatchSetHomeInfo = (...args) => dispatch(setHomeInfo(...args))

export const DECREMENT_REMAINING_TIME = 'DECREMENT_REMAINING_TIME'
export const decrementRemainingTime = createAction(DECREMENT_REMAINING_TIME)
export const dispatchDecrementRemainingTime = (...args) => dispatch(decrementRemainingTime(...args))

export const SET_IS_SCHOOL_MODAL_OPEN = 'SET_IS_SCHOOL_MODAL_OPEN'
export const setIsSchoolModalOpen = createAction(SET_IS_SCHOOL_MODAL_OPEN)
export const dispatchSetIsSchoolModalOpen = (...args) => dispatch(setIsSchoolModalOpen(...args))

// effects
export const EFFECT_CHANGE_REMAINING_TIME = 'EFFECT_CHANGE_REMAINING_TIME'
export const effectChangeRemainingTime = createAction(EFFECT_CHANGE_REMAINING_TIME)
export const dispatchEffectChangeRemainingTime= (...args) =>
  dispatch(effectChangeRemainingTime(...args))

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

export const EFFECT_HANDLE_SUBMIT_SCHOOL = 'EFFECT_HANDLE_SUBMIT_SCHOOL'
export const effectHandleSubmitSchool = createAction(EFFECT_HANDLE_SUBMIT_SCHOOL)
export const dispatchEffectHandleSubmitSchool = (...args) =>
  dispatch(effectHandleSubmitSchool(...args))