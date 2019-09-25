import React from 'react'
import PropTypes from 'prop-types'
// components
import StageManager from '../../helper/components/StageManager/main/StageManager.presentational'
import Timer from '../../helper/components/Timer/Timer.container'
import Test from '../../helper/components/Test/Test.presentational'
import Tabs from '../../helper/components/Tabs/Tabs.presentational'
// style
import './Exam.scss'


const Exam = ({
  duration,
  question,
  questionIndex,
  answer,
  isFinalStage,
  increaseQuestionIndex,
  decreaseQuestionIndex,
  changeAnswerOpt,
  isExamFinished,
  title,
  onReturn,
}) => (
  <>
    {isExamFinished && <Tabs onReturn={onReturn} single />}

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
        stageName={title}
      />
      {!isExamFinished && <Timer time={duration} />}
      <Test
        prob={question.prob}
        sol={question.sol}
        options={question.options}
        stats={question.stats}
        answer={answer}
        level="سخت"
        averageTime="1:35"
        studentTime="0:56"
        chooseAnswer={changeAnswerOpt}
        // correctAnswer={correctAnswer}
        showAnalysis={isExamFinished}
      />
    </div>
  </>
)

Exam.propTypes = {
    duration: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onReturn: PropTypes.func.isRequired,
}
Exam.defaultProps = {}

export default Exam