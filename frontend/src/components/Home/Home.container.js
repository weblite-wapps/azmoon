// modules
import { connect } from 'react-redux'
import { getRequest } from '../../helper/functions/request.helper'
// components
import Home from './Home.presentational'
// views
import {
  isParticipatedView,
  isExamReadyView,
  isExamStartedView,
  isExamFinishedView,
  isAdminView,
  schoolView,
} from '../App/App.reducer'
import {
  titleView,
  sectionView,
  durationView,
  startTimeView,
  endTimeView,
  questionCountView,
  participantsCountView,
  maxPercentView,
  minPercentView,
  averagePercentView,
  userResultView,
  remainingTimeView,
  userInfoModalOpenView,
} from '../Home/Home.reducer'
// actions
import {
  dispatchEffectEditExam,
  dispatchEffectOpenExam,
  dispatchEffectCloseExam,
  dispatchEffectStartExam,
  dispatchEffectShowResults,
  dispatchEffectShowAnswerSheet,
  dispatchEffectHandleSubmitUserInfo,
} from './Home.action'
// helpers
import { getStatus } from './Home.selector'
import {
  formattedSeconds,
  getTimeToStart,
} from '../../helper/functions/utils.helper'

const mapStateToProps = state => ({
  isParticipated: isParticipatedView(),
  isExamReady: isExamReadyView(),
  isExamStarted: isExamStartedView(),
  isExamFinished: isExamFinishedView(),
  isAdmin: isAdminView(),

  title: titleView(),
  section: sectionView(),
  duration: durationView() ? `${durationView()} دقیقه` : '--',
  status: getStatus(state),
  questionCount: questionCountView() ? questionCountView() : '--',
  remainingTime: endTimeView() ? formattedSeconds(remainingTimeView()) : '--',
  timeToStart: endTimeView()
    ? formattedSeconds(getTimeToStart(startTimeView()))
    : '--',
  participantsCount: participantsCountView()
    ? `${parseInt(participantsCountView())} نفر`
    : '--',
  maxPercent: maxPercentView(),
  minPercent: minPercentView(),
  averagePercent: averagePercentView(),
  userResult: userResultView(),
  isOpen: userInfoModalOpenView(),
  oldSchool: schoolView(),
})

const mapDispatchToProps = () => ({
  onEditExam: dispatchEffectEditExam,
  onOpenExam: dispatchEffectOpenExam,
  onCloseExam: dispatchEffectCloseExam,
  onStartExam: dispatchEffectStartExam,
  onShowResults: dispatchEffectShowResults,
  onShowAnswerSheet: dispatchEffectShowAnswerSheet,
  onSearchSchools: (province, county) =>
    getRequest(`/school/?province=${province}&county=${county}`)
      .then(resp => resp.body),
  onSubmit: dispatchEffectHandleSubmitUserInfo,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
