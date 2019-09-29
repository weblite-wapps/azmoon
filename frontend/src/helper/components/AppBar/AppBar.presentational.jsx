// modules
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
// style
import './AppBar.scss'
// helper
import { cns } from '../../functions/utils.helper'

const useStyles = makeStyles(() => ({
  regular: {
    minHeight: 45,
  },
}))

const AppBar = ({ color, label, fullWidth, onClick, ...other }) => {
  const classes = useStyles()
  return (
    <MuiAppBar position="static" elevation={0}>
      <Toolbar className={cns('c--appBar_toolbar')} classes={classes}>
        <img alt="appbar" src="images/appbar.svg" />

        <div className="c--appBar_typo">
          <Typography variant="caption">چهار گزینه‌ای</Typography>
          <Typography variant="h5">آزمــــــــون</Typography>
        </div>
      </Toolbar>
    </MuiAppBar>
  )
}

AppBar.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
}

AppBar.defaultProps = {
  color: 'silver',
  label: '',
  fullWidth: false,
  onClick: Function.prototype,
}

export default AppBar
