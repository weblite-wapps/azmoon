// modules
import * as R from 'ramda'
import { getState } from '../../setup/redux'
// actions
import {
  SET_HOME_INFO,
  DECREMENT_REMAINING_TIME,
  SET_USER_INFO_MODAL_OPEN,
} from './Home.action'
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
  creatorId: '',
  remainingTime: 0,
  userInfoModalOpen: false,
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
export const creatorIdView = () => R.path(['Home', 'creatorId'])(getState())
export const userInfoModalOpenView = () =>
  R.path(['Home', 'userInfoModalOpen'])(getState())
export const remainingTimeView = () =>
  R.path(['Home', 'remainingTime'])(getState())

const reducer = {
  [SET_HOME_INFO]: (
    state,
    {
      title,
      section,
      duration,
      startTime,
      endTime,
      nowTime,
      questions,
      result,
      userResult,
      results,
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
    participantsCount: results ? results.length : 0,
    maxPercent: result && result.max,
    minPercent: result && result.min,
    averagePercent: result && result.avg,
    userResult,
    remainingTime: getRemainingTime(endTime, nowTime),
  }),

  [DECREMENT_REMAINING_TIME]: state => ({
    ...state,
    remainingTime: state.remainingTime - 1,
  }),

  [SET_USER_INFO_MODAL_OPEN]: (state, userInfoModalOpen) => ({
    ...state,
    userInfoModalOpen,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
