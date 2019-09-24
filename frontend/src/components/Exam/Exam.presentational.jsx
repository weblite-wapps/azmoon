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
  increaseQuestionIndex,
  decreaseQuestionIndex
}) => (
  <div>
    <StageManager
      finalStage={false}
      finalStageLabel="اتمام آزمون"
      onLeftClick={increaseQuestionIndex}
      onRightClick={decreaseQuestionIndex}
      stageLevel="سوال شماره ۱"
      stageName="آزمون"
    />
    <Timer time={duration} />
    <Test
      text=" مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز مصرع زیر چند جمله است؟ سعدیا مرد نکونام نمیرد هرگز"
      opts={['۲ جمله', '۳ جمله', '۱ جمله', '۴ جمله']}
      correctOpt={1}
    />
  </div>
)

Exam.propTypes = {
    duration: PropTypes.number.isRequired,
}
Exam.defaultProps = {}

export default Exam