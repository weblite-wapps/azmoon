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
import { isExamFinishedView } from '../App/App.reducer'
import { titleView } from '../Home/Home.reducer'
// actions
import {
  dispatchHandleChangeAnswerOpt,
  dispatchChangeQuestionIndex,
  dispatchHandleFinalStageClick,
} from './Exam.action'
// helpers
import { push } from '../../setup/redux'

const mapStateToProps = () => ({
  title: titleView(),
  duration: durationView(),
  questionIndex: questionIndexView(),
  question: questionsView()[questionIndexView()],
  answer:
    answersView()[questionIndexView()] &&
    answersView()[questionIndexView()].opt,
  isFinalStage: questionCountView() === questionIndexView() + 1,
  isExamFinished: isExamFinishedView(),
})

const mapDispatchToProps = () => ({
  increaseQuestionIndex: () => dispatchChangeQuestionIndex(1),
  decreaseQuestionIndex: () => dispatchChangeQuestionIndex(-1),
  changeAnswerOpt: dispatchHandleChangeAnswerOpt,
  onReturn: () => push('/home'),
  finalStageClick: () => dispatchHandleFinalStageClick(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Exam)
