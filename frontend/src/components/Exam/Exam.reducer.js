import * as R from 'ramda'
import { getState } from '../../setup/redux'
import { DECREASE_DURATION, CHANGE_QUESTION_INDEX } from './Exam.action'

const initialState = {
  qCount: 15,
  duration: 15 * 60,
  questionIndex: 0,
  questions: [
    {
      prob: '',
      probAttach: '',
      options: [],
      correct: 2,
    },
    {
      prob: '',
      probAttach: '',
      options: [],
      correct: 0,
    },
    {
      prob: '',
      probAttach: '',
      options: [],
      correct: 1,
    },
    {
      prob: '',
      probAttach: '',
      options: [],
      correct: 3,
    },
    {
      prob: '',
      probAttach: '',
      options: [],
      correct: 0,
    },
  ],
  answers: [],
}

export const durationView = () => R.path(['Exam', 'duration'])(getState())


const reducer = {
  [DECREASE_DURATION]: state => ({
    ...state,
    duration: state.duration - 1, 
  }),

  [CHANGE_QUESTION_INDEX]: (state, { number }) => ({
    ...state,
    questionIndex: state.questionIndex + number,
  })
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state