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
// actions
// import { dispatchChangeTab, dispatchHandleDragTask } from './Home.action'

const mapStateToProps = () => ({
  isParticipated: isParticipatedView(),
  isExamReady: isExamReadyView(),
  isExamStarted: isExamStartedView(),
  isAdmin: isAdminView(),
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
