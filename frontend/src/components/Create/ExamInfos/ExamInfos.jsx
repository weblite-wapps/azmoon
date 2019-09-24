// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '../../../helper/components/TextField/TextField.presentational'
import Button from '../../../helper/components/Button/Button.presentational'
import {
  mabhaseAzmoon,
  nameAzmoon,
  tedadeSoal,
  zamaneAzmoon,
  ijadeAzmoon,
} from '../../../helper/functions/constants'
// style
import './ExamInfos.scss'

export default class ExamInfos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      section: '',
      questionCount: '',
      duration: '',
      startTime: {
        date: null,
        time: null,
      },
      endTime: {
        date: null,
        time: null,
      },
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

  handleSetInitialInfo(data) {
    // if (!hasErro(data)) console.log(data)
  }

  render() {
    const { title, section, duration, questionCount, hasError } = this.state
    const { setInitialInfo } = this.props
    return (
      <div className="c--exam-info_container">
        <TextField
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
          onChange={e => this.handleAddData(e, 'questionCount')}
          value={questionCount}
          label={tedadeSoal}
          placeholder="تعداد سوالات آزمون را وارد کنید"
        />

        <TextField
          onChange={e => this.handleAddData(e, 'duration')}
          value={duration}
          label={zamaneAzmoon}
          placeholder="زمان آزمون را به دقیقه وارد کنید"
        />

        <Button
          className="c--exam-info_button"
          fullWidth
          color="#7DD9DE"
          label="ایجاد آزمون"
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
