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

export const CHANGE_EXAM_DURATION = 'CHANGE_EXAM_DURATION'
export const changeExamDuration = createAction(CHANGE_EXAM_DURATION)
export const dispatchChangeExamDuration = (...args) =>
  dispatch(changeExamDuration(...args))

export const SET_EXAM_DURATION = 'SET_EXAM_DURATION'
export const setExamDuration = createAction(SET_EXAM_DURATION)
export const dispatchSetExamDuration = (...args) =>
  dispatch(setExamDuration(...args))

export const HANDLE_CHANGE_EXAM_DURATION = 'HANDLE_CHANGE_EXAM_DURATION'
export const handleChangeExamDuration = createAction(
  HANDLE_CHANGE_EXAM_DURATION,
)
export const dispatchHandleChangeExamDuration = (...args) =>
  dispatch(handleChangeExamDuration(...args))

export const SET_USER_START_TIME = 'SET_USER_START_TIME'
export const handleUserStartTime = createAction(SET_USER_START_TIME)
export const dispatchHandleUserStartTime = (...args) =>
  dispatch(handleUserStartTime(...args))

export const HANDLE_FINAL_STAGE_CLICK = 'HANDLE_FINAL_STAGE_CLICK'
export const handleFinalStageClick = createAction(HANDLE_FINAL_STAGE_CLICK)
export const dispatchHandleFinalStageClick = (...args) =>
  dispatch(handleFinalStageClick(...args))

export const SET_EXAM_INFO = 'SET_EXAM_INFO'
export const setExamInfo = createAction(SET_EXAM_INFO)
export const dispatchSetExamInfo = (...args) => dispatch(setExamInfo(...args))
