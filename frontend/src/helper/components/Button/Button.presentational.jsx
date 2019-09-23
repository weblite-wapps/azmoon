// modules
import React from 'react'
import PropTypes from 'prop-types'
import MuiButton from '@material-ui/core/Button'
import { red } from '@material-ui/core/colors'


const Button = ({
  color,
  label,
  fullWidth,
  onClick,
}) => {
  return (
    <MuiButton
      style={{ backgroundColor: color, color: 'white', margin: '5px 0px' }}
      fullWidth={fullWidth}
      onClick={onClick}
      variant="contained"
    >
        { label }
    </MuiButton>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  color: 'silver',
  label: '',
  fullWidth: false,
  onClick: () => {},
}

export default Button