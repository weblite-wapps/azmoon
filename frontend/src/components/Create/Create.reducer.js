import * as R from 'ramda'
import { getState } from '../../setup/redux'
import {
  SET_INITIAL_INFO,
  CHANGE_QUESTION_PAGE,
  ADD_QUESTION,
} from './Create.action'

const initialState = {
  section: '',
  questionCount: '',
  duration: '',
  startTime: null,
  endTime: null,
  questions: [],
  questionIndex: -1,
}

// const menuIsOpenLens = R.lensProp('menuIsOpen')

export const questionIndexView = () => R.path(['Create', 'questionIndex'])(getState())
export const currentStateView = () => R.path(['Create'])(getState())
export const questionsView = () => R.path(['Create', 'questions'])(getState())
export const titleView = () => R.path(['Create', 'title'])(getState())
export const sectionView = () => R.path(['Create', 'section'])(getState())
export const durationView = () => R.path(['Create', 'duration'])(getState())
export const startTimeView = () => R.path(['Create', 'startTime'])(getState())
export const endTimeView = () => R.path(['Create', 'endTime'])(getState())
export const questionCountView = () => R.path(['Create', 'questionCount'])(getState())

const reducer = {
  [SET_INITIAL_INFO]: (state, data) => ({
    ...state,
    ...data,
    questionIndex: 0,
    questions: R.times(
      () => ({
        prob: '',
        probAttach: '',
        options: ['', '', '', ''],
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
