// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '../../../helper/components/TextField/TextField.presentational'
import Button from '../../../helper/components/Button/Button.presentational'
import TimePicker from '../../../helper/components/TimePicker/TimePicker.presentational'
import {
  mabhaseAzmoon,
  nameAzmoon,
  tedadeSoal,
  zamaneAzmoon,
} from '../../../helper/functions/constants'
// style
import './ExamInfos.scss'
import { onExamError } from '../../../helper/functions/utils.helper'

export default class ExamInfos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      section: '',
      questionCount: '',
      duration: '',
      startTime: null,
      endTime: null,
      hasError: {},
    }
    this.handleAddData = this.handleAddData.bind(this)
    this.handleSetInitialInfo = this.handleSetInitialInfo.bind(this)
  }

  handleAddData(
    {
      target: { value },
    },
    type,
  ) {
    return this.setState({
      [type]: value,
    })
  }

  handleAddDate(type) {
    return value =>
      this.setState({
        [type]: value,
      })
  }

  handleSetInitialInfo(data) {
    const { setInitialInfo, openSnackbar } = this.props

    setInitialInfo(data)
    // if (!onExamError(data)) setInitialInfo(data)
    // else {
    //   this.setState({ hasError: onExamError(data) })
    //   openSnackbar('همه ی موارد * دار را وارد کنید')
    // }
  }

  render() {
    const { title, section, duration, questionCount, hasError } = this.state

    return (
      <div className="c--exam-info_container">
        <TextField
          required
          hasError={hasError.title}
          onChange={e => this.handleAddData(e, 'title')}
          value={title}
          label={nameAzmoon}
          placeholder="نام آزمون را وارد کنید"
        />

        <TextField
          onChange={e => this.handleAddData(e, 'section')}
          value={section}
          label={mabhaseAzmoon}
          placeholder="مبحث آزمون را وارد کنید"
        />
        <TextField
          required
          type={'number'}
          hasError={hasError.questionCount}
          onChange={e => this.handleAddData(e, 'questionCount')}
          value={questionCount}
          label={tedadeSoal}
          placeholder="تعداد سوالات آزمون را وارد کنید"
        />

        <TextField
          required
          type={'number'}
          hasError={hasError.duration}
          onChange={e => this.handleAddData(e, 'duration')}
          value={duration}
          label={zamaneAzmoon}
          placeholder="زمان آزمون را به دقیقه وارد کنید"
        />

        <TimePicker
          required
          onChange={this.handleAddDate('startTime')}
          label="موعد شروع آزمون"
        />
        <TimePicker
          required
          hasError={hasError.endTime}
          onChange={this.handleAddDate('endTime')}
          label="موعد پایان آزمون"
        />

        <Button
          text="ایجاد آزمون"
          disableAddIcon
          // onClick={() => setInitialInfo(this.state)}
          onClick={() => this.handleSetInitialInfo(this.state)}
        />
      </div>
    )
  }
}

ExamInfos.propTypes = {
  setInitialInfo: PropTypes.func,
}
ExamInfos.defaultProps = {}
