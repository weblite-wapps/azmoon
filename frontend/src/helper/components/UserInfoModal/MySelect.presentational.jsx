import React from 'react'
import PropTypes from 'prop-types'
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core'
import { makeStyles, withStyles, fade } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  formControl: {
    position: 'relative',
    minWidth: 120,
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
  },
  menuItem: {
    textAlign: 'right',
    border: '1px solid #ced4da',
    fontSize: 12,
    lineHeight: '21px',
    width: '100%',
    fontWeight: 500,
    letterSpacing: -0.08,
    borderRadius: 11,
    padding: '5px 10px',
    margin: '25px 0 10px !important',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade('rgb(128, 130, 133)', 0.5)} 0 0 0 0.1rem`,
      borderColor: 'rgb(128, 130, 133)',
    },
  },
  item: {
    textAlign: 'right',
    fontFamily: 'iranyekan',
  },
  junk: {
    paddingRight: '0 !important',
    width: '100% !important',
  }
}))

const MySelect = ({ name, label, items, value, onChange }) => {
  const classes = useStyles()
  const inputId = `select-input-${name}`
  return (
    <FormControl
      fullWidth
      classes={{ root: classes.formControl }}
    >
      <BootstrapInputLabel htmlFor={inputId}>
        {label}
      </BootstrapInputLabel>
      <Select
        value={value}
        onChange={event => onChange(event.target.value)}
        className={classes.menuItem}
        MenuProps={{
          MenuListProps: {
            className: classes.junk,
          }
        }}
        inputProps={{
          name,
          id: inputId,
        }}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item} className={classes.item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

MySelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MySelect

export const BootstrapInputLabel = withStyles(() => ({
  formControl: {
    left: 'unset',
    right: 0,
    transition: 'none',
    transform: 'unset',
    color: '#000',
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 10,
  },
  shrink: {
    transformOrigin: 'top right',
  },
}))(InputLabel)
