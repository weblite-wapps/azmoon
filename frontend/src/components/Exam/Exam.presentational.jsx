import React from 'react'
import PropTypes from 'prop-types'
// components
import StageManager from '../../helper/components/StageManager/main/StageManager.presentational'
import Timer from '../../helper/components/Timer/Timer.container'
import Test from '../../helper/components/Test/Test.presentational'
// style
import './Exam.scss'
import { Typography } from '@material-ui/core'

const Exam = ({
  duration,
  question,
  questionIndex,
  answer,
  isFinalStage,
  increaseQuestionIndex,
  decreaseQuestionIndex,
  changeAnswerOpt,
}) => (
  <div>
    <StageManager
      finalStage={isFinalStage}
      finalStageLabel="اتمام آزمون"
      firstStage={questionIndex === 0}
      onLeftClick={increaseQuestionIndex}
      onRightClick={decreaseQuestionIndex}
      onFinalStageClick={() => console.log('final')}
      stageLevel={`سوال شماره ${questionIndex + 1}`}
      stageName="آزمون"
    />
    <Timer time={duration} />
    <Test
      prob={question.prob}
      options={question.options}
      answer={answer}
      chooseAnswer={changeAnswerOpt}
    />
  </div>
)

Exam.propTypes = {
    duration: PropTypes.number.isRequired,
}
Exam.defaultProps = {}

export default Exam