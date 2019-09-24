import * as R from 'ramda'
import { getState } from '../../setup/redux'
import {
  SET_INITIAL_INFO,
  CHANGE_QUESTION_PAGE,
  ADD_QUESTION,
} from './Create.action'

const initialState = {
  title: '',
  context: '',
  questionCount: '',
  duration: '',
  startTime: {
    date: null,
    hour: null,
  },
  endTime: {
    date: null,
    hour: null,
  },
  questions: [],
  questionIndex: -1,
}

// const menuIsOpenLens = R.lensProp('menuIsOpen')

export const questionIndexView = () =>
  R.path(['Create', 'questionIndex'])(getState())

export const currentStateView = () => R.path(['Create'])(getState())

export const questionsView = () => R.path(['Create', 'questions'])(getState())

const reducer = {
  [SET_INITIAL_INFO]: (state, data) => ({
    ...state,
    ...data,
    questionIndex: 0,
    questions: R.times(
      () => ({
        prob: '',
        probAttach: '',
        options: [],
        correct: 0,
        sol: '',
        solAttach: '',
      }),
      parseInt(data.questionCount),
    ),
  }),

  [CHANGE_QUESTION_PAGE]: (state, value) => ({
    ...state,
    questionIndex: state.questionIndex + value,
  }),

  [ADD_QUESTION]: (state, value) => ({
    ...state,
    questions: R.update(state.questionIndex, value, state.questions),
  }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
