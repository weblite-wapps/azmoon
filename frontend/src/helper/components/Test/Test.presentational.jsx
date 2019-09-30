// modules
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// components
import AnalysisBox from '../AnalysisBox/AnalysisBox.presentational'
import ImageModal from '../ImageModal/ImageModal.presentational'

// helpers
import { toPersian } from '../../functions/utils.helper'
// style
import './Test.scss'

const useStyle = makeStyles(() => ({
  separator: {
    height: 1.5,
    border: 'none',
    backgroundColor: '#ccc',
    marginTop: 20,
    marginBottom: 12,
  },
}))

const Test = ({
  prob,
  sol,
  options,
  answer,
  chooseAnswer,
  correctAnswer,
  isExamFinished,
  stats: { hardness, averageTime, corrects, wrongs, whites },
  studentTime,
  probAttach,
  solAttach,
}) => {
  const classes = useStyle()
  return (
    <div className="c--test_container scroll-bar" style={{ color: 'black' }}>
      <div dir="auto" className="c--test_text">
        {prob}
      </div>

      {probAttach && <ImageModal src={probAttach} />}
      <div className="c--test_opts">
        {options.map((value, index) => (
          <div
            dir="rtl"
            className="c--test_opt"
            key={index}
            style={{ ...(isExamFinished && { cursor: 'default' }) }}
            onClick={() => correctAnswer != null || chooseAnswer(index)}
          >
            <div
              className="c--test_opt-circle"
              style={{
                background:
                  correctAnswer === index && answer != null
                    ? '#84CE2D' // green
                    : correctAnswer === index && answer == null
                    ? '#ffe500' // yellow
                    : (correctAnswer != null && answer) === index
                    ? '#D65555' // red
                    : (correctAnswer == null && answer) === index
                    ? '#84CE2D' // green
                    : '#CCCCCC',
              }}
            >
              {toPersian(index + 1)}
            </div>
            <div className="c--test_opt-text"> {value} </div>
          </div>
        ))}
      </div>

      {isExamFinished && (
        <>
          <hr className={classes.separator} />

          <Typography
            style={{
              fontSize: 10,
              lineHeight: '17px',
              letterSpacing: -0.07,
              color: '#CCC',
            }}
          >
            پاسخ تشریحی
          </Typography>
          <div dir="auto" className="c--test_solution">
            {sol}
          </div>

          {solAttach && <ImageModal src={solAttach} />}

          <AnalysisBox
            label="تحلیل سوال"
            hardness={hardness}
            yourTime={studentTime}
            averageTime={averageTime}
            corrects={`٪${corrects}`}
            wrongs={`٪${wrongs}`}
            whites={`٪${whites}`}
          />
        </>
      )}
    </div>
  )
}

Test.propTypes = {
  isExamFinished: PropTypes.bool.isRequired,
  stats: PropTypes.shape({}),
}

Test.defaultProps = {
  stats: {
    hardness: '-',
    averageTime: '-',
    corrects: '-',
    wrongs: '-',
    whites: '-',
  },
}

export default Test
