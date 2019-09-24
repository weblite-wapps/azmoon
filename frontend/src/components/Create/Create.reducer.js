import * as R from 'ramda'
import { getState } from '../../setup/redux'
import {
  SET_INITIAL_INFO,
  CHANGE_QUESTION_PAGE,
  INSERT_QUESTION_DATA,
} from './Create.action'

const initialState = {
  title: '',
  context: '',
  questionCount: 20,
  duration: 15,
  startTime: {
    date: null,
    hour: null,
  },
  endTime: {
    date: null,
    hour: null,
  },
  questions: [],
  questionIndex: 0,
}

// const menuIsOpenLens = R.lensProp('menuIsOpen')

export const questionIndexView = () =>
  R.path(['Create', 'questionIndex'])(getState())

const reducer = {
  [SET_INITIAL_INFO]: (state, data) => ({
    ...state,
    ...data,
    questionIndex: 1,
  }),

  [CHANGE_QUESTION_PAGE]: (state, value) => ({
    ...state,
    questionIndex: state.questionIndex + value,
  }),

  [INSERT_QUESTION_DATA]: (state, value) => ({
    ...state,
    questions: R.insert(state.questionIndex, value, state.questions),
  }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
