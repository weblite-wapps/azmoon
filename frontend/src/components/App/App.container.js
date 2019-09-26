// modules
import { connect } from 'react-redux'
import App from './App'
// views
import { isExamFinishedView } from './App.reducer'
// actions
import { dispatchSetApi, dispatchFetchInitialData } from './App.action'


const mapStateToProps = () => ({
  isExamFinished: isExamFinishedView(),
})

const mapDispatchToProps = () => ({
  setAPI: dispatchSetApi,
  fetchInitialData: dispatchFetchInitialData,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
