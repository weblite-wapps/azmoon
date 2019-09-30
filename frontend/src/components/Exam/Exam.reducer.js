import * as R from 'ramda'
import { getState } from '../../setup/redux'
import {
  START_EXAM,
  CHANGE_EXAM_DURATION,
  CHANGE_QUESTION_INDEX,
  CHANGE_ANSWER_OPT,
  SET_EXAM_INFO,
  SET_EXAM_ANSWERS,
} from './Exam.action'

const initialState = {
  questionCount: 0,
  duration: 0,
  questionIndex: 0,
  questions: [],
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
  [START_EXAM]: (state, answers) => ({
    ...state,
    answers: R.times(index =>
      ({ opt: (answers[index] && typeof answers[index].opt === 'number' && answers[index].opt) || undefined, dur: (answers[index] && answers[index].dur) || 0 }), state.questionCount),
  }),

  [CHANGE_EXAM_DURATION]: state => ({
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
      answer =>
        answer.opt === opt ? R.dissoc('opt', answer) : { ...answer, opt },
      state.answers,
    ),
  }),

  [CHANGE_QUESTION_INDEX]: (state, { number }) => ({
    ...state,
    questionIndex: state.questionIndex + number,
  }),

  [SET_EXAM_INFO]: (state, { duration, questions }) => ({
    ...state,
    duration,
    questions,
    questionCount: questions.length,
  }),

  [SET_EXAM_ANSWERS]: (state, answers) => ({
    ...state,
    answers,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
