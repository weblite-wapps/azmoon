// modules
import { connect } from 'react-redux'
// components
import Home from './Home.presentational'
// views
import {
  isParticipatedView,
  isExamReadyView,
  isExamStartedView,
  isExamFinishedView,
  isAdminView,
} from '../App/App.reducer'
import {
  titleView,
  sectionView,
  durationView,
  endTimeView,
  questionCountView,
  participantsCountView,
  maxPercentView,
  minPercentView,
  averagePercentView,
  userResultView,
  remainingTimeView,
} from '../Home/Home.reducer'
// actions
import {
  dispatchEffectEditExam,
  dispatchEffectOpenExam,
  dispatchEffectCloseExam,
  dispatchEffectStartExam,
  dispatchEffectShowResults,
  dispatchEffectShowAnswerSheet,
} from './Home.action'
// helpers
import { getStatus } from './Home.selector'
import { formattedSeconds } from '../../helper/functions/utils.helper'

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
  participantsCount: participantsCountView()
    ? `${parseInt(participantsCountView())} نفر`
    : '--',
  maxPercent: maxPercentView(),
  minPercent: minPercentView(),
  averagePercent: averagePercentView(),
  userResult: userResultView(),
})

const mapDispatchToProps = () => ({
  onEditExam: dispatchEffectEditExam,
  onOpenExam: () => dispatchEffectOpenExam(),
  onCloseExam: () => dispatchEffectCloseExam(),
  onStartExam: () => dispatchEffectStartExam(),
  onShowResults: () => dispatchEffectShowResults(),
  onShowAnswerSheet: () => dispatchEffectShowAnswerSheet(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
