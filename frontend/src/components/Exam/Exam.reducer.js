import * as R from 'ramda'
import { getState } from '../../setup/redux'
import {
  START_EXAM,
  CHANGE_DURATION,
  CHANGE_QUESTION_INDEX,
  CHANGE_ANSWER_OPT,
} from './Exam.action'

const initialState = {
  questionCount: 5,
  duration: 10 * 1,
  questionIndex: 0,
  questions: [
    {
      prob:
        ' مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز',
      options: ['۲ جمله', '۳ جمله', '۱ جمله', '۴ جمله'],
    },
    {
      prob:
        ' مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز',
      options: ['۱ جمله', '۴ جمله', '۲ جمله', '۳ جمله'],
    },
    {
      prob:
        ' مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز',
      options: ['۳ جمله', '۱ جمله', '۴ جمله', '۲ جمله'],
    },
    {
      prob:
        ' مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز',
      options: ['۱ جمله', '۴ جمله', '۲ جمله', '۳ جمله'],
    },
    {
      prob:
        ' مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز',
      options: ['۳ جمله', '۱ جمله', '۴ جمله', '۲ جمله'],
    },
  ],
  answers: [],
}

export const durationView = () => R.path(['Exam', 'duration'])(getState())
export const questionsView = () => R.path(['Exam', 'questions'])(getState())
export const questionIndexView = () =>
  R.path(['Exam', 'questionIndex'])(getState())
export const questionCountView = () =>
  R.path(['Exam', 'questionCount'])(getState())
export const answersView = () => R.path(['Exam', 'answers'])(getState())

const reducer = {
  [START_EXAM]: state => ({
    ...state,
    answers: R.times(() => ({ opt: undefined, dur: 0 }), state.questionCount),
  }),

  [CHANGE_DURATION]: state => ({
    ...state,
    duration: state.duration - 1,
    answers: R.adjust(
      state.questionIndex,
      ({ dur, opt }) => ({ opt, dur: dur + 1 }),
      state.answers,
    ),
  }),

  [CHANGE_ANSWER_OPT]: (state, { opt }) => ({
    ...state,
    answers: R.adjust(
      state.questionIndex,
      answer => ({ ...answer, opt }),
      state.answers,
    ),
  }),

  [CHANGE_QUESTION_INDEX]: (state, { number }) => ({
    ...state,
    questionIndex: state.questionIndex + number,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
