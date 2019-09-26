import { connect } from 'react-redux'
import QuestionInfo from './QuestionInfo'
import {
  dispatchChangeQuestionPage,
  dispatchAddQuestion,
  dispatchHandleCreateExam,
} from '../Create.action'
import { questionIndexView, questionsView } from '../Create.reducer'
import { dispatchChangeSnackbarStage } from '../../Snackbar/Snackbar.action'

const mapDispatchToProps = () => ({
  changePage: dispatchChangeQuestionPage,
  addQuestion: dispatchAddQuestion,
  createExam: lastQuestion => dispatchHandleCreateExam(lastQuestion),
  openSnackBar: dispatchChangeSnackbarStage,
})

const mapStateToProps = () => ({
  index: questionIndexView(),
  questions: questionsView(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionInfo)
