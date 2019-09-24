import { connect } from 'react-redux'
import ExamInfos from './ExamInfos'
import { dispatchSetIntialInfo } from '../Create.action'
// import {} from './ExamInfos.action'
// import {} from './ExamInfos.reducer'

const mapDispatchToProps = () => ({
  setInitialInfo: dispatchSetIntialInfo,
})
const mapStateToProps = () => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExamInfos)
