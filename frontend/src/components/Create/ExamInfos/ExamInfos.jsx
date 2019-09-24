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
      questionCount: 20,
      duration: 15,
      startTime: {
        date: null,
        time: null,
      },
      endTime: {
        date: null,
        time: null,
      },
    }
    this.handleAddData = this.handleAddData.bind(this)
  }

  handleAddData(e, type) {
    return this.setState({
      [type]: e.target.value,
    })
  }

  componentDidUpdate() {
    console.log('new state ', this.state)
  }

  render() {
    const { title, context, duration, questionCount } = this.state
    const { setInitialInfo } = this.props
    return (
      <div className="c--exam-info_container">
        <TextField
          onChange={e => this.handleAddData(e, 'title')}
          value={title}
          label={nameAzmoon}
          placeholder="نام آزمون را وارد کنید"
        />

        <TextField
          onChange={e => this.handleAddData(e, 'section')}
          value={context}
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
          onClick={() => setInitialInfo(this.state)}
        />
      </div>
    )
  }
}

ExamInfos.propTypes = {
  setInitialInfo: PropTypes.func,
}
ExamInfos.defaultProps = {}
