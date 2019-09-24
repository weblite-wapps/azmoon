// modules
import { connect } from 'react-redux'
// components
import Result from './Result.presentational'
// views
// import { tabIndexView, numbersObjectView, isLoadingView } from './Result.reducer'
import { isAdminView } from '../App/App.reducer'
// actions
// import { dispatchChangeTab, dispatchHandleDragTask } from './Result.action'


const mapStateToProps = () => ({
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
)(Result)
