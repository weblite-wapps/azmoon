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

export const LOAD_QUESTION_DATA = 'LOAD_QUESTION_DATA'
export const loadQuestionData = createAction(LOAD_QUESTION_DATA)
export const dispatchLoadQuestionData = args => dispatch(loadQuestionData(args))

export const ADD_QUESTION = 'ADD_QUESTION'
export const addQuestion = createAction(ADD_QUESTION)
export const dispatchAddQuestion = args => dispatch(addQuestion(args))

export const HANDLE_CREATE_QUIZ = 'HANDLE_CREATE_QUIZ'
export const handleCreateQuiz = createAction(HANDLE_CREATE_QUIZ)
export const dispatchHandleCreateQuiz = args => dispatch(handleCreateQuiz(args))

export const SET_IS_LOADING = 'SET_IS_LOADING'
export const setIsLoading = createAction(SET_IS_LOADING)
export const diapatchSetIsLoading = args => dispatch(setIsLoading(args))
