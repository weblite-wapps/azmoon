import React from 'react'
import PropTypes from 'prop-types'
// third-party-packages
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// helper
import { cns, ab } from '../../functions/utils.helper'

// style
const useStyles = makeStyles(theme => ({
  tabsContainer: {
    display: 'flex',
    padding: 0,
  },
  li: {
    listStyle: 'none',
    flexGrow: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#818181',
    transition: theme.transitions.create(['background-color']),
    '&:hover': {
      backgroundColor: '#6DC2EF',
    },
    '&:first-child': {
      marginRight: 2,
    },
  },
  button: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    color: '#fff',
    fontSize: 12,
  },
}))

const Tabs = ({ onReturn, onExport, single }) => {
  const classes = useStyles()

  return (
    <ul className={classes.tabsContainer}>
      <li className={classes.li}>
        <Button className={classes.button} onClick={onReturn}>
          بازگشت
        </Button>
      </li>
      {!single && (
        <li className={classes.li}>
          <Button className={classes.button} onClick={onExport}>
            چاپ پاسخنامه
          </Button>
        </li>
      )}
    </ul>
  )
}

Tabs.propTypes = {
  single: PropTypes.func,

  onReturn: PropTypes.func.isRequired,
  onExport: PropTypes.func,
}
Tabs.defaultProps = {
  single: false,
  onExport: Function.prototype,
}

export default Tabs
