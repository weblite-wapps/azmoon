// modules
import React from 'react'
import PropTypes from 'prop-types'
import MuiButton from '@material-ui/core/Button'

const Button = ({ label, fullWidth, onClick, ...other }) => {
  return (
    <MuiButton
      fullWidth={fullWidth}
      onClick={onClick}
      variant="contained"
      {...other}
    >
      {label}
    </MuiButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  label: '',
  fullWidth: false,
  onClick: () => {},
}

export default Button
