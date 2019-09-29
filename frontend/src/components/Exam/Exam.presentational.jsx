import React from 'react'
import PropTypes from 'prop-types'
// components
import StageManager from '../../helper/components/StageManager/main/StageManager.presentational'
import Timer from '../../helper/components/Timer/Timer.container'
import Test from '../../helper/components/Test/Test.presentational'
import Tabs from '../../helper/components/Tabs/Tabs.presentational'
// helpers
import { getStats } from '../../helper/functions/utils.helper'
// style
import './Exam.scss'

const Exam = ({
  title,
  duration,
  question,
  questionIndex,
  answer,
  studentTime,
  isFinalStage,
  increaseQuestionIndex,
  decreaseQuestionIndex,
  changeAnswerOpt,
  isExamFinished,
  onReturn,
  finalStageClick,
}) => (
  <>
    {isExamFinished && <Tabs onReturn={onReturn} single />}

    <div className="full-height">
      <StageManager
        examMode={!isExamFinished}
        finalStage={isFinalStage}
        finalStageLabel="اتمام آزمون"
        firstStage={questionIndex === 0}
        onLeftClick={increaseQuestionIndex}
        onRightClick={decreaseQuestionIndex}
        onFinalStageClick={finalStageClick}
        stageLevel={`سوال شماره ${questionIndex + 1}`}
        stageName={title}
      />
      {!isExamFinished && <Timer time={duration} />}
      <Test
        prob={question.prob}
        sol={question.sol}
        options={question.options}
        stats={question.stats && getStats(question.stats)}
        answer={answer}
        chooseAnswer={changeAnswerOpt}
        correctAnswer={isExamFinished ? question.correct : null}
        isExamFinished={isExamFinished}
        studentTime={studentTime}
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
