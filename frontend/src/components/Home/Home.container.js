// modules
import { connect } from 'react-redux'
// components
import Home from './Home.presentational.react'
// views
// import { tabIndexView, numbersObjectView, isLoadingView } from './Home.reducer'
import { isParticipatedView, isExamReadyView } from '../../Main/App.reducer'
// actions
import { dispatchChangeTab, dispatchHandleDragTask } from './Home.action'


const mapStateToProps = () => ({
  isParticipated: isParticipatedView(),
  isExamReady: isExamReadyView(),
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
