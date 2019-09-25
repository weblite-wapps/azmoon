// modules
import { connect } from 'react-redux'
// components
import Exam from './Exam.presentational'
// views
import {
  durationView,
  questionsView,
  questionIndexView,
  questionCountView,
  answersView,
} from './Exam.reducer'
// actions
import {
  dispatchHandleChangeAnswerOpt,
  dispatchChangeQuestionIndex,
  dispatchHandleFinalStageClick,
} from './Exam.action'

const mapStateToProps = () => ({
  duration: durationView(),
  questionIndex: questionIndexView(),
  question: questionsView()[questionIndexView()],
  answer:
    answersView()[questionIndexView()] &&
    answersView()[questionIndexView()].opt,
  isFinalStage: questionCountView() === questionIndexView() + 1,
})

const mapDispatchToProps = () => ({
  increaseQuestionIndex: () => dispatchChangeQuestionIndex(1),
  decreaseQuestionIndex: () => dispatchChangeQuestionIndex(-1),
  changeAnswerOpt: dispatchHandleChangeAnswerOpt,
  finalStageClick: () => dispatchHandleFinalStageClick(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Exam)
