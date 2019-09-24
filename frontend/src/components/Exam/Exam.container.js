// modules
import { connect } from 'react-redux'
// components
import Exam from './Exam.presentational'
// views
import { durationView } from './Exam.reducer'
// actions
import { dispatchChangeQuestionIndex } from './Exam.action'


const mapStateToProps = () => ({
  duration: durationView(),
})

const mapDispatchToProps = () => ({
  increaseQuestionIndex: () => dispatchChangeQuestionIndex(1),
  decreaseQuestionIndex: () => dispatchChangeQuestionIndex(-1),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Exam)
