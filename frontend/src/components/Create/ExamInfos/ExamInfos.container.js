import { connect } from 'react-redux'
import ExamInfos from './ExamInfos'
import { dispatchSetInitialInfo } from '../Create.action'
import { dispatchChangeSnackbarStage } from '../../Snackbar/Snackbar.action'
// import {} from './ExamInfos.action'
// import {} from './ExamInfos.reducer'

const mapDispatchToProps = () => ({
  setInitialInfo: dispatchSetInitialInfo,
  openSnackbar: dispatchChangeSnackbarStage,
})
const mapStateToProps = () => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExamInfos)
