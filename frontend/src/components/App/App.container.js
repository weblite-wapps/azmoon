import { connect } from 'react-redux'
import App from './App'
import { dispatchSetApi, dispatchFetchInitialData } from './App.action'
// import { stageLevelView, stageNameView } from './App.reducer'

const mapDispatchToProps = () => ({})
const mapStateToProps = () => ({
  setAPI: dispatchSetApi,
  fetchInitialData: dispatchFetchInitialData,
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
