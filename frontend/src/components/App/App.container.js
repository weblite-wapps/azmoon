import { connect } from 'react-redux'
import App from './App'
import {} from './App.action'
// import { stageLevelView, stageNameView } from './App.reducer'

const mapDispatchToProps = () => ({})
const mapStateToProps = () => ({
  // stageLevel: stageLevelView(),
  // stageName: stageNameView(),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
