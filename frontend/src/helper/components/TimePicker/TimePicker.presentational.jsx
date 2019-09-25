import moment from 'moment'
import jMoment from 'moment-jalaali'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import JalaliUtils from '@date-io/jalaali'
import {
  TimePicker,
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import { cns } from '../../functions/utils.helper'

jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true })

// style
const useStyles = makeStyles(theme => ({
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
    '& input': {
      textAlign: 'center',
      color: '#CCC',
      letterSpacing: -0.08,
    },
  },
  small: {
    width: 100,
  },
  datePicker: {
    marginTop: 0,
  },
  typography: {
    color: '#818181',
    marginLeft: 7,
    fontSize: 12,
    lineHeight: '21px',
  },
  label: {
    color: '#000',
    textAlign: 'right',
    fontWeight: 'bold',
  },
}))

const PersianExample = ({ label, onChange }) => {
  const classes = useStyles()
  const [selectedDate, handleDateChange] = useState(moment())

  const changeHandler = date => {
    handleDateChange(date)
    onChange(date)
  }
  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
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
          <Typography className={classes.typography}>ساعت</Typography>
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
          <Typography className={classes.typography}>روز</Typography>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  )
}

export default PersianExample
