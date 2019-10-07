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
import { isExamFinishedView, isAdminView } from '../App/App.reducer'
import { titleView } from '../Home/Home.reducer'
// actions
import {
  dispatchHandleChangeAnswerOpt,
  dispatchChangeQuestionIndex,
  dispatchHandleFinalStageClick,
  dispatchHandleChangeQuestionIndex,
} from './Exam.action'
// helpers
import { push } from '../../setup/redux'
import { formattedSecondsForStats } from '../../helper/functions/utils.helper'

const mapStateToProps = () => ({
  title: titleView(),
  duration: durationView(),
  questionIndex: questionIndexView(),
  question: questionsView()[questionIndexView()],
  answer:
    answersView()[questionIndexView()] &&
    answersView()[questionIndexView()].opt,
  studentTime:
    answersView()[questionIndexView()] &&
    formattedSecondsForStats(answersView()[questionIndexView()].dur),
  isFinalStage: questionCountView() === questionIndexView() + 1,
  isExamFinished: isExamFinishedView(),
  isAdmin: isAdminView(),
})

const mapDispatchToProps = () => ({
  increaseQuestionIndex: () => dispatchHandleChangeQuestionIndex(1),
  decreaseQuestionIndex: () => dispatchChangeQuestionIndex(-1),
  changeAnswerOpt: dispatchHandleChangeAnswerOpt,
  onReturn: () => push('/home'),
  finalStageClick: () => dispatchHandleFinalStageClick(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Exam)
