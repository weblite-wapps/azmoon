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
  isAdminView,
} from '../App/App.reducer'
import {
  titleView,
  sectionView,
  durationView,
  endTimeView,
  questionCountView,
  startTimeView,
} from '../Create/Create.reducer'
import { getStatus, getRemainingTime } from './Home.helper'
// actions
// import { dispatchChangeTab, dispatchHandleDragTask } from './Home.action'

const mapStateToProps = () => ({
  isParticipated: isParticipatedView(),
  isExamReady: isExamReadyView(),
  isExamStarted: isExamStartedView(),
  isAdmin: isAdminView(),

  title: titleView(),
  section: sectionView(),
  duration: durationView(),
  status: getStatus(startTimeView(), endTimeView()),
  questionCount: questionCountView(),
  remainingTime: getRemainingTime(endTimeView()),
})

const mapDispatchToProps = () => ({
  //   changeTab: dispatchChangeTab,
  //   dragTask: dispatchHandleDragTask,
  //   onLoadMore: (skipLength, tabIndex) => dispatchLoadMore(skipLength, tabIndex),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
