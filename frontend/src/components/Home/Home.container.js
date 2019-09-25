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
} from '../Home/Home.reducer'
import { getStatus, getRemainingTime } from './Home.helper'
// actions
import { dispatchEffectOpenExam, dispatchEffectCloseExam, dispatchEffectStartExam } from './Home.action'

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
})

const mapDispatchToProps = () => ({
  onOpenExam: dispatchEffectOpenExam,
  onCloseExam: dispatchEffectCloseExam,
  onStartExam: dispatchEffectStartExam,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
