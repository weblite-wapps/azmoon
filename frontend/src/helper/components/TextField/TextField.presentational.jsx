// modules
import React from 'react'
import PropTypes from 'prop-types'
import { fade, withStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, InputBase } from '@material-ui/core'
// styles
import './TextField.scss'
import styles from '../../style/appStyle'

const TextField = ({
  classes,
  defaultValue,
  hasError,
  label,
  onChange,
  required,
  value,
}) => {
  const id = `bootstrap-input-${Math.random()
    .toString(36)
    .substr(-5)}`

  return (
    <FormControl fullWidth error={hasError} required={required}>
      <BootstrapInputLabel htmlFor={id}>{label}</BootstrapInputLabel>
      <BootstrapInput
        defaultValue={defaultValue}
        id={id}
        onChange={onChange}
        value={value}
      />
    </FormControl>
  )
}

TextField.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.string,
  hasError: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
}

TextField.defaultProps = {
  defaultValue: '',
  hasError: false,
  required: false,
  label: '',
  value: '',
}

export default withStyles(styles)(TextField)

// helper/components
const BootstrapInput = withStyles(theme => ({
  root: {
    direction: 'rtl',
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 11,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
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
  },
  shrink: {
    transformOrigin: 'top right',
  },
}))(InputLabel)
