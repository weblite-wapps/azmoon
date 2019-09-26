// modules
import React from 'react'
import PropTypes from 'prop-types'
import { fade, withStyles, makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, InputBase } from '@material-ui/core'
// styles
import './TextField.scss'


const useStyles = makeStyles(() => ({
  root: {
    marginTop: 15,
    '&:first-child': {
      marginTop: 0,
    },
  },
}))

const TextField = ({
  placeholder,
  hasError,
  label,
  onChange,
  required,
  value,
  ...others
}) => {
  const classes = useStyles()
  const id = `bootstrap-input-${Math.random()
    .toString(36)
    .substr(-5)}`

  return (
    <FormControl
      fullWidth
      error={hasError}
      required={required}
      className={classes.root}
    >
      <BootstrapInputLabel shrink htmlFor={id}>
        {label}
      </BootstrapInputLabel>
      <BootstrapInput
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
        {...others}
      />
    </FormControl>
  )
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
}

TextField.defaultProps = {
  placeholder: '',
  hasError: false,
  required: false,
  label: '',
  value: '',
}

export default TextField

// helper/components
const BootstrapInput = withStyles(theme => ({
  root: {
    direction: 'rtl',
    'label + &': {
      marginTop: 20,
    },
  },
  input: {
    borderRadius: 11,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 12,
    lineHeight: '21px',
    fontWeight: 500,
    letterSpacing: -0.08,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade('rgb(128, 130, 133)', 0.5)} 0 0 0 0.1rem`,
      borderColor: 'rgb(128, 130, 133)',
    },
  },
}))(InputBase)

const BootstrapInputLabel = withStyles(theme => ({
  formControl: {
    left: 'unset',
    right: 0,
    transition: 'none',
    transform: 'unset',
    color: '#000',
    fontSize: 12,
    fontWeight: 500,
  },
  shrink: {
    transformOrigin: 'top right',
  },
}))(InputLabel)
