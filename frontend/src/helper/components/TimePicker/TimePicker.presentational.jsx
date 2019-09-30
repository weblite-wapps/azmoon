import React, { useState } from 'react'
// third-party-packages
import PropTypes from 'prop-types'
import moment from 'moment'
import jMoment from 'moment-jalaali'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import JalaliUtils from '@date-io/jalaali'
import {
  TimePicker,
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import { cns, ab } from '../../functions/utils.helper'

jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true })

// style
const useStyles = makeStyles(theme => ({
  timePickerComponent: {
    marginTop: 15,
  },
  pickers: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  pickerComponent: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerContainer: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #818181',
    borderRadius: 11,
    boxSizing: 'border-box',
    width: 125,
    height: 35,
    '& input': {
      textAlign: 'center',
      color: '#CCC',
      fontWeight: 500,
      padding: 6,
    },
  },
  small: {
    width: 85,
  },
  datePicker: {
    marginTop: 0,
  },
  typography: {
    color: '#818181',
    marginLeft: 7,
    fontSize: 12,
    lineHeight: '21px',
    fontWeight: 500,
    letterSpacing: -0.08,
  },
  label: {
    color: '#000',
    textAlign: 'right',
    marginBottom: 3,
  },
}))

const PersianExample = ({ label, onChange, dateRequired, timeRequired }) => {
  const classes = useStyles()
  const [selectedDate, handleDateChange] = useState(moment())

  const changeHandler = date => {
    handleDateChange(date)
    onChange(date)
  }
  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <div className={classes.timePickerComponent}>
        <Typography className={cns(classes.typography, classes.label)}>
          {label}
        </Typography>

        <div className={classes.pickers}>
          <div className={classes.pickerComponent}>
            <div className={cns(classes.pickerContainer, classes.small)}>
              <TimePicker
                className={classes.datePicker}
                clearable
                disablePast
                okLabel="تأیید"
                cancelLabel="لغو"
                clearLabel="پاک کردن"
                ampm={false}
                labelFunc={date => (date ? date.format('hh:mm') : '')}
                value={selectedDate}
                onChange={changeHandler}
              />
            </div>
            <Typography className={classes.typography}>
              {timeRequired && '*'}ساعت
            </Typography>
          </div>
          <div className={classes.pickerComponent}>
            <div className={classes.pickerContainer}>
              <DatePicker
                className={classes.datePicker}
                clearable
                disablePast
                okLabel="تأیید"
                cancelLabel="لغو"
                clearLabel="پاک کردن"
                labelFunc={date => (date ? date.format('jYYYY/jMM/jDD') : '')}
                value={selectedDate}
                onChange={changeHandler}
              />
            </div>
            <Typography className={classes.typography}>
              {dateRequired && '*'}روز
            </Typography>
          </div>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  )
}

PersianExample.propTypes = {
  timeRequired: PropTypes.bool,
  dateRequired: PropTypes.bool,
}

PersianExample.defaultProps = {
  timeRequired: false,
  dateRequired: false,
}

export default PersianExample
