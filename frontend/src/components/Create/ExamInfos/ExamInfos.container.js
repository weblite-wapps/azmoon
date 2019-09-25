import { connect } from 'react-redux'
import ExamInfos from './ExamInfos'
import { dispatchSetInitialInfo } from '../Create.action'
// import {} from './ExamInfos.action'
// import {} from './ExamInfos.reducer'

const mapDispatchToProps = () => ({
  setInitialInfo: dispatchSetInitialInfo,
})
const mapStateToProps = () => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExamInfos)
