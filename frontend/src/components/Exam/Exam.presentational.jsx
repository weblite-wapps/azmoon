import React from 'react'
import PropTypes from 'prop-types'
// components
import StageManager from '../../helper/components/StageManager/main/StageManager.presentational'
import Timer from '../../helper/components/Timer/Timer.container'
import Test from '../../helper/components/Test/Test.presentational'
// style
import './Exam.scss'


const Exam = ({
  duration,
  question,
  questionIndex,
  answer,
  sol,
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
      // TODO: handle it guys pls :)
      onFinalStageClick={() => console.log('handle final click!!!!!')}
      stageLevel={`سوال شماره ${questionIndex + 1}`}
      stageName="آزمون"
    />
    <Timer time={duration} />
    <Test
      prob={question.prob}
      sol={question.sol}
      options={question.options}
      answer={answer}
      chooseAnswer={changeAnswerOpt}
      // showAnalysis={isAdmin || isExamFinished}
    />
  </div>
)

Exam.propTypes = {
  duration: PropTypes.number.isRequired,
}
Exam.defaultProps = {}

export default Exam
