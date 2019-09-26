import React from 'react'
import PropTypes from 'prop-types'
// components
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
// icon
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import CircleIcon from '@material-ui/icons/RadioButtonUnchecked'
// helper
import { cns, toPersian } from '../../functions/utils.helper'

// style
const useStyles = makeStyles(theme => ({
  percentageInfo: {
    display: 'flex',
    borderRadius: 11,
    backgroundColor: '#F0F0F0',
    justifyContent: 'space-evenly',
    height: 30,
    padding: '0 5px',
  },
  label: {
    fontSize: 10,
    lineHeight: '17px',
    letterSpacing: -0.07,
    fontWeight: 'bold',
  },
  percentageWithLabels: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: 10,
    height: 10,
    marginLeft: 2,
    position: 'relative',
    top: -2,
    strokeWidth: 4,
  },
  whitesIcon: {
    fill: '#818181',
    stroke: '#818181',
  },
  wrongsIcon: {
    fill: '#d65555',
    stroke: '#d65555',
  },
  correctsIcon: {
    fill: '#84ce2d',
    stroke: '#84ce2d',
  },
}))

const PercentageInfo = ({ corrects, wrongs, whites }) => {
  const classes = useStyles()
  return (
    <div className={classes.percentageInfo}>
      <span className={classes.percentageWithLabels}>
        <Typography className={classes.label}>{toPersian(whites)}</Typography>
        <CircleIcon className={cns(classes.whitesIcon, classes.icon)} />
      </span>
      <span className={classes.percentageWithLabels}>
        <Typography className={classes.label}>{toPersian(wrongs)}</Typography>
        <CloseIcon className={cns(classes.wrongsIcon, classes.icon)} />
      </span>
      <span className={classes.percentageWithLabels}>
        <Typography className={classes.label}>{toPersian(corrects)}</Typography>
        <CheckIcon className={cns(classes.correctsIcon, classes.icon)} />
      </span>
    </div>
  )
}

PercentageInfo.propTypes = {
  corrects: PropTypes.string.isRequired,
  wrongs: PropTypes.string.isRequired,
  whites: PropTypes.string.isRequired,
}

export default PercentageInfo
