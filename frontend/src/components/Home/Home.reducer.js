// modules
import * as R from 'ramda'
import { getState } from '../../setup/redux'
// actions
import { SET_HOME_INFO, DECREMENT_REMAINING_TIME } from './Home.action'
// helpers
import { getRemainingTime } from '../../helper/functions/utils.helper'

const initialState = {
  title: '',
  section: '',
  duration: '',
  questionCount: '',
  startTime: '',
  endTime: '',
  questions: [],
  participantsCount: '',
  maxPercent: '',
  minPercent: '',
  averagePercent: '',
  userResult: '',
  remainingTime: 0,
}

// const isParticipatedLens = R.lensProp('isParticipated')
export const titleView = () => R.path(['Home', 'title'])(getState())
export const sectionView = () => R.path(['Home', 'section'])(getState())
export const durationView = () => R.path(['Home', 'duration'])(getState())
export const questionCountView = () =>
  R.path(['Home', 'questionCount'])(getState())
export const startTimeView = () => R.path(['Home', 'startTime'])(getState())
export const endTimeView = () => R.path(['Home', 'endTime'])(getState())
export const participantsCountView = () =>
  R.path(['Home', 'participantsCount'])(getState())
export const maxPercentView = () => R.path(['Home', 'maxPercent'])(getState())
export const minPercentView = () => R.path(['Home', 'minPercent'])(getState())
export const averagePercentView = () =>
  R.path(['Home', 'averagePercent'])(getState())
export const userResultView = () => R.path(['Home', 'userResult'])(getState())
export const remainingTimeView = () => R.path(['Home', 'remainingTime'])(getState())


const reducer = {
  [SET_HOME_INFO]: (
    state,
    {
      title,
      section,
      duration,
      startTime,
      endTime,
      questions,
      result,
      userResult,
    },
  ) => ({
    ...state,
    title,
    section,
    duration,
    startTime,
    endTime,
    questionCount: questions.length,
    questions,
    participantsCount: result && result.count,
    maxPercent: result && result.max,
    minPercent: result && result.min,
    averagePercent: result && result.avg,
    userResult,
    remainingTime: getRemainingTime(endTime),
  }),

  [DECREMENT_REMAINING_TIME]: state => ({
    ...state,
    remainingTime: state.remainingTime - 1,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
