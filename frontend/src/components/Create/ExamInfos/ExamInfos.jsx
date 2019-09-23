// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from './../../../helper/components/TextField/TextField.presentational'
import {
  mabhaseAzmoon,
  nameAzmoon,
  tedadeSoal,
  zamaneAzmoon,
  ijadeAzmoon,
} from '../../../helper/functions/constants'
export default class ExamInfos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      context: '',
      questionCount: 20,
      duration: 15,
      startTime: {
        date: null,
        hour: null,
      },
      endTime: {
        date: null,
        hour: null,
      },
    }
  }

  render() {
    const { title, context, duration, questionCount } = this.state
    const { setInitialInfo } = this.props
    return (
      <div>
        <TextField value={title} label={nameAzmoon} />
        <TextField value={context} label={mabhaseAzmoon} />
        <TextField value={questionCount} label={tedadeSoal} />
        <TextField value={duration} label={zamaneAzmoon} />
        <button onClick={() => setInitialInfo(this.state)}>
          {ijadeAzmoon}
        </button>
      </div>
    )
  }
}

ExamInfos.propTypes = {
  setInitialInfo: PropTypes.func,
}
ExamInfos.defaultProps = {}
