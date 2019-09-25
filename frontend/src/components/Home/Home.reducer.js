import * as R from 'ramda'
import { getState } from '../../setup/redux'
import {
  SET_EXAM_INFO,
} from './Home.action'

const initialState = {
  title: '',
  section: '',
  duration: '',
  questionCount: '',
  startTime: '',
  endTime: '',
}

// const isParticipatedLens = R.lensProp('isParticipated')
export const titleView = () => R.path(['Home', 'title'])(getState())
export const sectionView = () => R.path(['Home', 'section'])(getState())
export const durationView = () => R.path(['Home', 'duration'])(getState())
export const questionCountView = () => R.path(['Home', 'questionCount'])(getState())
export const startTimeView = () => R.path(['Home', 'startTime'])(getState())
export const endTimeView = () => R.path(['Home', 'endTime'])(getState())

const reducer = {
  [SET_EXAM_INFO]: (state, { title, section, duration, startTime, endTime, questions }) => ({
    ...state,
    title,
    section,
    duration,
    startTime,
    endTime,
    questionCount: questions.length,
  }),

}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
