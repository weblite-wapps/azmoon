// modules
import { connect } from 'react-redux'
// components
import Home from './Home.presentational'
// views
// import { tabIndexView, numbersObjectView, isLoadingView } from './Home.reducer'
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
} from '../Home/Home.reducer'
import { getStatus, getRemainingTime } from './Home.helper'
// actions
import {
  dispatchEffectEditExam,
  dispatchEffectOpenExam,
  dispatchEffectCloseExam,
  dispatchEffectStartExam,
  dispatchEffectShowResults,
  dispatchEffectShowAnswerSheet,
} from './Home.action'

const mapStateToProps = () => ({
  isParticipated: isParticipatedView(),
  isExamReady: isExamReadyView(),
  isExamStarted: isExamStartedView(),
  isExamFinished: isExamFinishedView(),
  isAdmin: isAdminView(),

  title: titleView(),
  section: sectionView(),
  duration: durationView(),
  status: getStatus(), 
  questionCount: questionCountView(),
  remainingTime: getRemainingTime(endTimeView()),
  participantsCount: participantsCountView(),
  maxPercent: maxPercentView(),
  minPercent: minPercentView(),
  averagePercent: averagePercentView(),
  userResult: userResultView(),
})

const mapDispatchToProps = () => ({
  onEditExam: dispatchEffectEditExam,
  onOpenExam: dispatchEffectOpenExam,
  onCloseExam: dispatchEffectCloseExam,
  onStartExam: dispatchEffectStartExam,
  onShowResults: dispatchEffectShowResults,
  onShowAnswerSheet: dispatchEffectShowAnswerSheet,
  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
