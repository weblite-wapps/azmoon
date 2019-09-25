import { connect } from 'react-redux'
import QuestionInfo from './QuestionInfo'
import {
  dispatchChangeQuestionPage,
  dispatchAddQuestion,
  dispatchHandleCreateExam,
} from '../Create.action'
import {
  questionIndexView,
  questionsView,
  currentStateView,
} from '../Create.reducer'

const mapDispatchToProps = () => ({
  changePage: dispatchChangeQuestionPage,
  addQuestion: dispatchAddQuestion,
  createQuiz: () => dispatchHandleCreateExam(currentStateView()),
})

const mapStateToProps = () => ({
  index: questionIndexView(),
  questions: questionsView(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionInfo)
