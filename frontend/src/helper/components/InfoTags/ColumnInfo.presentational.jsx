import React from 'react'
import PropTypes from 'prop-types'
// components
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
// helper
import { cns, toPersian } from '../../functions/utils.helper'

// style
const useStyles = makeStyles(theme => ({
  infoTags: {
    display: 'inline-flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    marginLeft: 5,
    '&:first-child': {
      marginLeft: 0,
    },
  },
  typography: {
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
    color: '#fff',
    backgroundColor: '#818181',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    minWidth: 80,
    height: 30,
    padding: 7,
    boxSizing: 'border-box',
    marginBottom: 3,
  },

  time: {
    color: '#000',
    backgroundColor: '#F0F0F0',
  },
}))
const InfoTags = ({ title, time, children }) => {
  const classes = useStyles()
  return (
    <div className={classes.infoTags}>
      <Typography className={classes.typography}>{title}</Typography>
      {time ? (
        <Typography className={cns(classes.typography, classes.time)}>
          {toPersian(time)}
        </Typography>
      ) : (
        children
      )}
    </div>
  )
}

InfoTags.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

InfoTags.defaultProps = {}

export default InfoTags
