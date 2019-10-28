import React from 'react'
import PropTypes from 'prop-types'
// third-party-packages
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// style
const useStyles = makeStyles(theme => ({
  tabsContainer: {
    display: 'flex',
    padding: 0,
    margin: 0,
    height: 30,
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
      backgroundColor: '#4FC4F4',
    },
    '&:last-child': {
      marginLeft: 2,
    },
    '&:only-child': {
      margin: 0,
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

const Tabs = ({ onReturn, onExport, single, isAdmin }) => {
  const classes = useStyles()

  return (
    <ul className={classes.tabsContainer}>
      <li className={classes.li}>
        <Button className={classes.button} onClick={onReturn}>
          بازگشت
        </Button>
      </li>
      {!single && isAdmin && (
        <li className={classes.li}>
          <Button className={classes.button} onClick={onExport}>
            چاپ نتایج
          </Button>
        </li>
      )}
    </ul>
  )
}

Tabs.propTypes = {
  single: PropTypes.bool,

  onReturn: PropTypes.func.isRequired,
  onExport: PropTypes.func,
}
Tabs.defaultProps = {
  single: false,
  onExport: Function.prototype,
}

export default Tabs
