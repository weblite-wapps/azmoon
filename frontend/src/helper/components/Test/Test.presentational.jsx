// modules
import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
// components
import InfoTags from '../InfoTags/InfoTags.presentational'
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
  level,
  averageTime,
  studentTime,
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

          <Typography variant="subtitle2" dir="auto">پاسخ تشریحی</Typography>
          <div dir='auto' className='c--test_solution'>
            {sol}
          </div>

          <Typography variant="subtitle2" dir="auto">تحلیل سوال</Typography>
          <InfoTags title="درجه سوال" description={level} />
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
