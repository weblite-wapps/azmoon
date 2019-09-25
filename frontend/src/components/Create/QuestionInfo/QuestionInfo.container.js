import { connect } from 'react-redux'
import QuestionInfo from './QuestionInfo'
import {
  dispatchChangeQuestionPage,
  dispatchAddQuestion,
  dispatchHandleCreateQuiz,
} from '../Create.action'
import {
  questionIndexView,
  questionsView,
  currentStateView,
} from '../Create.reducer'
import { dispatchChangeSnackbarStage } from '../../Snackbar/Snackbar.action'

const mapDispatchToProps = () => ({
  changePage: dispatchChangeQuestionPage,
  addQuestion: dispatchAddQuestion,
  createQuiz: () => dispatchHandleCreateQuiz(currentStateView()),
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
