// modules
import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
// components
import AnalysisBox from '../AnalysisBox/AnalysisBox.presentational'
// style
import './Test.scss'

const Test = ({
  prob,
  sol,
  options,
  answer,
  chooseAnswer,
  correctAnswer,
  showAnalysis,
  // level,
  // averageTime,
  // studentTime,
}) => {
  return ( 
    <div className="c--test_container" style={{ color: 'black' }}>
      <div dir='auto' className='c--test_text'>
        {prob}
      </div>

      <div className="c--test_opts">
        {options.map((value, index) => (
          <div dir="rtl" className="c--test_opt" key={index}>
            <div
              className="c--test_opt-circle"
              style={{
                cursor: 'pointer',
                background:
                  correctAnswer === index
                    ? '#84CE2D'
                    : (correctAnswer != null && answer) === index
                    ? '#D65555'
                    : (correctAnswer == null && answer) === index
                    ? '#84CE2D'
                    : '#CCCCCC',
              }}
              onClick={() => correctAnswer != null || chooseAnswer(index)}
            >
              {index + 1}
            </div>
            <div className="c--test_opt-text"> {value} </div>
          </div>
        ))}
      </div>

      {showAnalysis && (
        <>
          <Divider variant="middle" />

          <Typography
            style={{ fontSize: 10, lineHeight: '17px', letterSpacing: -0.07, color: '#CCC' }}
          >پاسخ تشریحی</Typography>
          <div dir='auto' className='c--test_solution'>
            {sol}
          </div>

          <AnalysisBox
            label="تحلیل سوال"
            hardness="متوسط"
            yourTime="۲:۱۱"
            averageTime="۳:۱۱"
            corrects="۳۰٪"
            wrongs="۳۵٪"
            whites="۳۵٪"
          />
        </>
      )}
    </div>
  )
}

Test.propTypes = {
  showAnalysis: PropTypes.bool.isRequired,
}

Test.defaultProps = {}

export default Test
