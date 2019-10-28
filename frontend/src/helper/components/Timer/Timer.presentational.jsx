// modules
import React from 'react'
import PropTypes from 'prop-types'
// components
import Typography from '@material-ui/core/Typography'
// helpers
import { toPersian } from '../../functions/utils.helper'



const Timer = ({
  formattedTime,
}) => {
  return (
    <div
      style={{
        background: '#818181 0% 0% no-repeat padding-box',
      }}
    >
      <Typography variant="h4" align="center">{toPersian(formattedTime)}</Typography>
    </div>
  )
}

Timer.propTypes = {
  formattedTime: PropTypes.string,
}

Timer.defaultProps = {
  formattedTime: "00 : 00 : 00",
}

export default Timer