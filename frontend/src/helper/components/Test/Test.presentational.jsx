// modules
import React from 'react'
import PropTypes from 'prop-types'
// components
import Typography from '@material-ui/core/Typography'
// style
import './Test.scss'

const Test = ({
  prob,
  options,
  answer,
  chooseAnswer,
  correctAnswer,
}) => {
  return ( 
    <div style={{ color: 'black' }}>
      <div dir='auto' class='test-text'>
        {prob}
      </div>

      <div class="test-opts">
        {options.map((value, index) => (
          <div dir="rtl" class="test-opt" key={index}>
            <div
              class="test-opt-circle"
              style={{
                background: correctAnswer === index ? '#84CE2D' :
                            ((correctAnswer != null) && answer) === index ? '#D65555' :
                            ((correctAnswer == null) && answer) === index ? '#84CE2D' :
                            '#CCCCCC'
                            
              }}
              onClick={() => (correctAnswer != null) || chooseAnswer(index)}
            >
              {index + 1}
            </div>
            <div class="test-opt-text"> {value} </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Test.propTypes = {
}

Test.defaultProps = {
}

export default Test