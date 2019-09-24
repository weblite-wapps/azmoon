// modules
import React from 'react'
import PropTypes from 'prop-types'
// components
import Typography from '@material-ui/core/Typography'
// style
import './Test.scss'

const persianNumber = ['۱', '۲', '۳', '۴']

const Test = ({
  text,
  opts,
  correctOpt,
}) => {
  return ( 
    <div style={{ color: 'black' }}>
      <div dir='auto' class='test-text'>
        {text}
      </div>

      <div class="test-opts">
        {opts.map((value, index) => (
          <div dir="rtl" class="test-opt" key={index}>
            <div
              class="test-opt-circle"
              style={{ background: correctOpt === index ? '#84CE2D' : '#CCCCCC' }}
            >
              {persianNumber[index]}
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