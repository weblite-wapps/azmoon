import { connect } from 'react-redux'
import QuestionInfo from './QuestionInfo'
import { dispatchChangeQuestionPage } from '../Create.action'
// import {} from './ExamInfos.action'
// import {} from './ExamInfos.reducer'

const mapDispatchToProps = () => ({
  changePage: dispatchChangeQuestionPage,
})
const mapStateToProps = () => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionInfo)
