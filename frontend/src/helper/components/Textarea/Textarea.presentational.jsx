// modules
import React from 'react'
import PropTypes from 'prop-types'
import { fade, withStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, TextareaAutosize } from '@material-ui/core'
// styles
const styles = theme => ({
  root: {
    direction: 'rtl',
    'label + &': {
      marginTop: theme.spacing(2),
      borderRadius: 11,
      resize: 'none',
      outline: 'none',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        boxShadow: `${fade('rgb(128, 130, 133)', 0.5)} 0 0 0 0.1rem`,
        borderColor: 'rgb(128, 130, 133)',
      },
    },
  },
})

const TextField = ({
  classes,
  placeholder,
  hasError,
  required,
  label,
  value,
  onChange,
}) => {
  const id = `bootstrap-textarea-${Math.random()
    .toString(36)
    .substr(-5)}`
  return (
    <FormControl fullWidth error={hasError} required={required}>
      <BootstrapInputLabel htmlFor={id}>{label}</BootstrapInputLabel>
      <TextareaAutosize
        className={classes.root}
        rows={4}
        rowsMax={10}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
      />
    </FormControl>
  )
}

TextField.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

TextField.defaultProps = {
  placeholder: '',
  hasError: false,
  required: false,
  label: '',
  value: '',
  onChange: Function.prototype,
}

export default withStyles(styles)(TextField)

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
